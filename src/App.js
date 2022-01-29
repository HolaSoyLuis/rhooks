import React from 'react';
import Navbar from './components/Navbar.js';
import UseStateExample from './components/UseStateExample';
import UseEffectExample from './components/UseEffectExample';
import UseContextExample from './components/UseContextExample';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Navbar />
                    <UseStateExample />
                    <UseEffectExample />
                    <UseContextExample />
                </div>
            </div>
        </div>
    );
}

export default App;
