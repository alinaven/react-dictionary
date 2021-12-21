import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function load() {
    setLoaded(true);
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="background-box p-2 pt-4 pb-4">
          <form id="search-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                autoFocus={true}
                placeholder="Look up a word"
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

          <Results results={results} />
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
