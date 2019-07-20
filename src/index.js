import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
let key = process.env.React_APP_API_KEY

ReactDOM.render(<App api ={key} />, document.getElementById('root'));


