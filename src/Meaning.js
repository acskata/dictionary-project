import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){
                return (
                    <div key={index}>
                            <span className="Definition">{definition.definition}</span>
                            <br />
                            <span className="Example">{definition.example}</span>
                            <br />
                            <Synonyms synonyms={props.meaning.synonyms} />
                    </div>
                );
            })}
        </div>
    );
}