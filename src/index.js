// Core imports
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

// React router import
// import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';

// Apps import
import App from './App';
// import UseStateExample from './components/UseStateExample';
// import UseEffectExample from './components/UseEffectExample';
// import UseContextExample from './components/UseContextExample';

ReactDOM.render(<App />, document.getElementById('root'));

/*
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/state" element={<UseStateExample />} />
                <Route path="/effect" element={<UseEffectExample />} />
                <Route path="/context" element={<UseContextExample />} />
            </Route>
        </Routes>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
*/

// original render
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
