import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(props.phonetics);
  return (
    <div className="phonetic-info">
      <span>/{props.phonetic.text}/ </span>
      <span>
        <a
          className="phonetic"
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
        >
          Listen
        </a>
      </span>
    </div>
  );
}
