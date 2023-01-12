import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './Components/Navbar/Navbar';
import {Home }from "./Components/Pages/Home";
import { Logout } from "./Components/Pages/Logout";
import {AboutUs} from "./Components/Pages/AboutUs";
import {Ourprogram} from "./Components/Pages/Ourprogram";
import { Contactus} from "./Components/Pages/Contactus";
import "./App.css";


const NotFound = () => {
  return(
    // <div><img src="./images/not-found.jpg" alt="img"></img></div>
    <div className="page-heading">
    <h1>Not Found</h1>
  </div>
  );
}

function App() {
  return (
    <div className='wrapper' >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/aboutus" exact element={<AboutUs/>} />
          <Route path="/ourprogram" exact element={<Ourprogram/>} />
          <Route path="/contactus" exact element={<Contactus/>} />
          <Route path="/logout" exact element={<Logout/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
      <div className="bgimg">
    </div> 
    </div>
  );
}

export default App;


