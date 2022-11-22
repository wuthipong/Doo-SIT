
import ReactDOM from 'react-dom';
import React,{ useEffect, useState } from "react";
import styles from './App.module.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import firstfloor from "./component/firstfloor";
import Navbar from "./Navbar"
import Firstfloor from "./component/firstfloor"
import Secondfloor from "./component/secondfloor"
import Thirdfloor from "./component/thirdfloor"
import Fourthfloor from "./component/fourthfloor"




function App() {
 
    
    return (
        <body>
           <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/firstfloor" element={<Firstfloor />} />
          <Route path="/secondfloor" element={<Secondfloor />} />
          <Route path="/thirdfloor" element={<Thirdfloor />} />
          <Route path="/fourthfloor" element={<Fourthfloor />} />
        </Routes>
      </div>
    </>
          
        </body>
      );
}


export default App;
