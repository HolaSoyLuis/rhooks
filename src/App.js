import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';
import UseStateExample from './components/UseStateExample';
import UseEffectExample from './components/UseEffectExample';
import UseContextExample from './components/UseContextExample';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="state" element={<UseStateExample />} />
                    <Route path="effect" element={<UseEffectExample />} />
                    <Route path="context" element={<UseContextExample />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
