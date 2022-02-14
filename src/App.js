import React, { Fragment } from 'react';
import Navbar from './components/Navbar.js';
import { Outlet } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import UseStateExample from './components/UseStateExample';
// import UseEffectExample from './components/UseEffectExample';
// import UseContextExample from './components/UseContextExample';

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
        </Fragment>
    );
}

export default App;
