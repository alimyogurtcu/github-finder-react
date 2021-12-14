import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import './styles/main.scss';
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/js/solid'
import 'bootstrap/dist/js/bootstrap.bundle';

var root = document.getElementById("root");

ReactDOM.render(<App /> , root)