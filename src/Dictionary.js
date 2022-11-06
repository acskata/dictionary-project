import React, { useState }from 'react';
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);


    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f91700001000001fbde036c3992404e8ffc6c6e7aecb709";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`}})
        .then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>Dictionary</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} placeholder="What word do you want to look up?" autoFocus="on"/>
                    </form>
                    </section>
                <Results results={results} />
                <Photos  photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading...";
    }
}