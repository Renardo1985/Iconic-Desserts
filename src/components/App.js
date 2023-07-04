import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Foot from "./Foot";
import Order from "./Order";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/about" element ={<About />}/> 
      <Route path="/order" element ={<Order/>} />      
      <Route path="/" element ={<Home/>}/>   
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
