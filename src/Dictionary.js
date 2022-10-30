import React, { useState }from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDeafult();
        alert(`Searching for ${keyword} definition`);
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
            <h2>Cloud [kloud]</h2>
                <h3>noun</h3>
                    <ol>
                        <li>result 1</li>
                        <li>result 2</li>
                    </ol>
                <h3>adjective</h3>
                    <ol>
                        <li>result 1</li>
                        <li>result 2</li>
                    </ol>
                <h3>verb</h3>
                    <ol>
                        <li>result 1</li>
                    </ol>
                <p>Similar: xy, xy, xy</p>
                <div className="row">
                    <div className="col-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcNLvwqAhkhkdDOg0FBDQ8foSq-8PK3sPAA&usqp=CAU" class="img-fluid rounded-2" alt="result"/>
                    </div>
                    <div className="col-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcNLvwqAhkhkdDOg0FBDQ8foSq-8PK3sPAA&usqp=CAU" class="img-fluid rounded-2" alt="result"/>
                    </div>
                    <div className="col-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcNLvwqAhkhkdDOg0FBDQ8foSq-8PK3sPAA&usqp=CAU" class="img-fluid rounded-2" alt="result"/>
                    </div>
                </div>
        </div>
    );
}