import React, {useEffect, useState} from 'react';
// import {useConfig} from "./config/useConfig";
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import {Test} from "./components/Test/Test";
import Homes from "./components/Home/index";
import Login from "./components/Login";
import {globalConfig, loadConfig} from "./config/configLoader";
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
  //   const apiUrll = process.env.NODE_ENV || 'Default';
  //   const [urll,setUrll]=useState("default");
  //
  //   useEffect(()=>{
  //      setUrll(process.env.NODE_ENV);
  //      load()
  //   },[])
  //
  //   let load=async ()=>{
  //      setUrll(process.env.NODE_ENV);
  //   }
  //
  //   return (
  //       <div className="App">
  //           <header className="App-header">
  //               {
  //                 urll?(
  //                     <>
  //
  //                         <p>Conținutul variabilei de mediu apiUrll:</p>
  //                         <p>{urll} {globalConfig!.apiUrl}</p>
  //                         <p>
  //                             {apiUrll}
  //                         </p>
  //                     </>
  //                 ):""
  //               }
  //
  //           </header>
  //       </div>
  //   );
}

export default App;
