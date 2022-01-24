import React, { useState } from 'react';

const UseStateExample = () => {

    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const handleInput = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="row mb-2">
                <div className="col">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter your username" onChange={handleInput} className="form-control" />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleInput} className="form-control" />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col text-center">
                    <button type="submit" className="btn btn-primary">Log In</button>
                </div>
            </div>
        </form>
    );
}

export default UseStateExample;