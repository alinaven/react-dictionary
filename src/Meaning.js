import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <div className="row m-2">
        <div className="col-4 p-0">
          <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
        </div>
        <div className="col-8">
          {props.meaning.definitions.map(function (definition, index) {
            if (index < 2) {
              return (
                <div key={index}>
                  <p>
                    <strong>/ definition {index + 1} / </strong>
                    {definition.definition}
                    <hr />
                    <span className="example">
                      example - "{definition.example}"
                    </span>
                    <Synonyms synonyms={definition.synonyms} />
                  </p>
                  {index < 1 && <hr className="definition-division" />}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
