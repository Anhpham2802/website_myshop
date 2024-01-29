import React, { useState } from "react";


const Counter = () => {
    //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(0);

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1);
    };

    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        setCounter(counter - 1);
    };

    if (counter < 1) {
        setCounter(1);
    }
    return (
        <div>
            <div className="flex">
                <button className="text-4xl px-2 mr-3" onClick={handleClick2}>-</button>
                <div className="mt-2.5">{counter}</div>
                <button className="text-3xl px-2 ml-3" onClick={handleClick1}>+</button>
            </div>
        </div>
    );
};

export default Counter;