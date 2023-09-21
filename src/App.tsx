import React from 'react';

import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <header className="App-header">
                <Home/>
            </header>
        </div>

    </Provider>

  );
}

export default App;
