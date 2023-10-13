import React from 'react';

import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {Test} from "./components/Test/Test";
import Homes from "./components/Home/index2";
function App() {
  return (
    <Provider store={store}>

        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Homes/>}/>
                        <Route path={"/test"} element={<Test/>}/>

                    </Routes>
                </BrowserRouter>

            </header>
        </div>

    </Provider>

  );
}

export default App;
