import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import {Route, Routes} from "react-router-dom" // allow us to define all of our routes and group them together

function App() {
  return (
    <>
      <Navbar />
      <div className="intro">
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<About /> } />
        </Routes>
      </div>
      </>
  )
}

export default App;