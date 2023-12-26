import React from 'react';
// import {useConfig} from "./config/useConfig";
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {Test} from "./components/Test/Test";
import Homes from "./components/Home/index";
import Login from "./components/Login";
function App() {
  return (
    <Provider store={store}>

        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Homes/>}/>
                        {/*<Route path={"/test"} element={<MyComponent/>}/>*/}
                    </Routes>
                </BrowserRouter>

            </header>
        </div>

    </Provider>

  );
  //   const config = useConfig();
  //
  //   if (!config) return <div>Loading configuration...</div>;
  //
  //   return <div>API URL: {config.apiUrl}</div>;
}

export default App;
