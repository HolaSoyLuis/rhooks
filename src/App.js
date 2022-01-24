import React from 'react';
import UseStateExample from './components/UseStateExample';
import UseEffectExample from './components/UseEffectExample';
import UseContextExample from './components/UseContextExample';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <UseStateExample />
                    <UseEffectExample />
                    <UseContextExample />
                </div>
            </div>
        </div>
    );
}

export default App;