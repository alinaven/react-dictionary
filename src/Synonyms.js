import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          if (index < 3) {
            return <li key={index}>{synonym}</li>;
          } else {
            return null;
          }
        })}
      </ul>
    );
  } else {
    return null;
  }
}
