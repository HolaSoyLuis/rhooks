import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {

    const [count, setCount] = useState(0);

    // runs after every render
    useEffect(() => {
        console.log('re-rendered:', count);
    });

    // runs once, on the mount
    useEffect(() => {
        setCount(count + 10);
        console.log('on mount:', count);
    }, []);

    // runs when mount and when [count] value changes
    useEffect(() => {
        console.log('Count value changed, new value is:', count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const [message, setMessage] = useState("Hello world");

    const changeMessage = () => {
        setMessage(message + ' :D ');
    }

    return(
        <div>
            <div>Current count value = {count}</div>
            <button type="button" className="btn btn-danger mx-2" onClick={decrement}>Decrement</button>
            <button type="button" className="btn btn-warning mx-2" onClick={increment}>Increment</button>
            <div>Message: {message}</div>
            <button type="button" className="btn btn-primary mx-2" onClick={changeMessage}>Alter message</button>
        </div>
    );
}

export default UseEffectExample;