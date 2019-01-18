import React from "react";
import "./style.css";

const Jumbotron = props => (
    <div className="container">
        <div className="jumbotron jombotron-fluid">
            <h1>React Clicky Game</h1>
            <div id="score">
                <p>Score: {props.score}</p>
            </div>
        </div>
    </div>
);

export default Jumbotron;