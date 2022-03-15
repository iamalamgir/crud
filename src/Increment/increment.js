import React, { useState } from "react";
import './increment.css'

export function Increment() {
    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className="increment">
            <button onClick={increment}>Increment</button>
            <h1>{count}</h1>
        </div>
    );
};

export default Increment;
