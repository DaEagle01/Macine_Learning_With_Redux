import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home/Home";
import Solution from "./Components/HomePage/Solutions/Solution";
import Solutions from "./Components/HomePage/Solutions/Solutions";
import Header from "./Components/HomePage/Header/Header";
import Footer from "./Components/HomePage/Footer/Footer";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import Starter from "./Components/HomePage/Purchase/Starter";
import Basic from "./Components/HomePage/Purchase/Basic";
import Plus from "./Components/HomePage/Purchase/Plus";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/solutions" element={<Solutions />}></Route>
          <Route path=":_id" element={<Solution></Solution>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Register></Register>}></Route>
          <Route path="/starterplan" element={<Starter></Starter>}></Route>
          <Route path="/basicplan" element={<Basic></Basic>}></Route>
          <Route path="/plusplan" element={<Plus></Plus>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
