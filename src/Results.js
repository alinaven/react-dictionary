import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="row m-1">
          <div className="col-4">
            <div className="word">
              <div className="keyword">{props.results.word}</div>
              <hr />
              {props.results.phonetics.map(function (phonetic, index) {
                return (
                  <div key={index} className="phonetic">
                    <Phonetic phonetic={phonetic} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-8">
            {props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
