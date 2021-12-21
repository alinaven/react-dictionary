import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetic">
      {props.phonetic.text} //
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        {" "}
        Listen
      </a>
    </div>
  );
}