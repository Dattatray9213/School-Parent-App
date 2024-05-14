import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./cmp/Navbar";
import Login from "./cmp/pages/Login";
import {
  About,
  Examination,
  AdmissionProcess,
  Careers,
  Class,
  Home,
  Register,
} from "./cmp/pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Examination" element={<Examination />} />
        <Route path="/Class" element={<Class />} />
        <Route path="/AdmissionProcess" element={<AdmissionProcess />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

