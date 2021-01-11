import React from 'react';
import "./App.css";
import { useState } from "react";

function Tweet(props) {

    const [isRed, setRed] = useState(false)
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
        //setRed(true);
        setRed(!isRed);
    }

    const decrement = () => {
        setCount(count - 1);
        setRed(!isRed);
    }

    return (
        <div className="tweet">
            <h2 className={isRed ? 'red' : ""}>{props.name}</h2>
            <p>{props.message}</p>
            <h2>Number of Likes</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h2>{count}</h2>
        </div>
    )
}

export default Tweet;