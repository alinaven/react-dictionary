import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function load() {
    setLoaded(true);
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001353c3f9d1af34275882cd78e00d21557";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleDictionResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="background-box p-2 pt-4 pb-4">
          <div className="header"> Dictionary </div>
          <hr />
          <div className="prompt">What word do you want to look up?</div>
          <form id="search-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                autoFocus={true}
                placeholder={props.defaultKeyword}
                onChange={handleKeywordChange}
              ></input>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">
                  🔎 Search
                </button>
              </div>
            </div>
            <div className="hint">
              suggested words: sunset, plants, coffee,..
            </div>
          </form>
          <hr />
          <Results results={results} />
          <hr />
          <Photos photos={photos} />
          <hr />
          <footer>
            👩🏼‍💻 Coded by Alina Vennes, hosted on{" "}
            <a
              className="github-link"
              href="https://github.com/alinaven/react-dictionary"
            >
              GitHub
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
