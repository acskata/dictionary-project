import React, { useState }from 'react';
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [result, setResult] = useState(null);

    function handleResponse(response) {
        setResult(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <h1>Dictionary</h1>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} placeholder="Search for a word" autoFocus="on"/>
            </form>
            <Results result={result} />
        </div>
    );
}