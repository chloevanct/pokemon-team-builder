import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Route, Routes } from "react-router-dom" // allow us to define all of our routes and group them together

// top-level/root react component
function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<About /> } />
        </Routes>
      </div>
      </>
  )
}

export default App;