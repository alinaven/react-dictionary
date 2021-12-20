import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="background-box p-2 pt-4 pb-4">
        <form form id="search-form" onSubmit={search}>
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
}
