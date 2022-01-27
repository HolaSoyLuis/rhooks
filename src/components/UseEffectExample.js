import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    const [message, setMessage] = useState('Hello world');

    const changeMessage = () => {
        setMessage(message + ' :D ');
        console.log(users);
    }

    // fetching and refetching data from a server
    const [users, setUsers] = useState([]);
    const endPoint = 'https://my-json-server.typicode.com/ifeanyidike/jsondata/users';

    const fetchUsers = async () => {
        const { data } = await axios.get(endPoint);
        setUsers(data);
    }

    const fetchUsers2 = async () => {
        // no works
        // const response = await fetch(endPoint);
        // response = response.json();
        // console.log(response)
        // setUsers(response);

        // works :D
        await fetch(endPoint)
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        })
    }

    useEffect(() => {
        fetchUsers2();
    }, []);

    const showFetchedUsers = () => {
        console.log(users);
    }

    return(
        <div>
            <div>Current count value = {count}</div>
            <button type="button" className="btn btn-danger mx-2" onClick={decrement}>Decrement</button>
            <button type="button" className="btn btn-warning mx-2" onClick={increment}>Increment</button>
            <div>Message: {message}</div>
            <button type="button" className="btn btn-primary mx-2" onClick={changeMessage}>Alter message</button>
            <button type="button" className="btn btn-secondary mx-2" onClick={showFetchedUsers}>Show fetched users</button>
        </div>
    );
}

export default UseEffectExample;