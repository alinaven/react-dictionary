import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <div className="row m-1 p-1">
        <div className="row">
          <div className="part-of-speech">{props.meaning.partOfSpeech}</div>
          <br />
        </div>
        <div className="row">
          <div className="col-10 offset-2 definition">
            {props.meaning.definitions.map(function (definition, index) {
              if (index < 2) {
                return (
                  <div key={index}>
                    <section>
                      <strong>/ definition {index + 1} / </strong>
                      {definition.definition}
                      <hr />
                      <span className="example">
                        example - "{definition.example}"
                      </span>
                      <Synonyms synonyms={definition.synonyms} />
                    </section>
                    {index < 1 && <hr className="definition-division" />}
                    <br />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
