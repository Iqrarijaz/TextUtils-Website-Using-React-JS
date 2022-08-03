import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
function App() {
  const [mode, setmode] = useState("dark");
  return (
    <>
      <Navbar title="TextUtils" about="About" home="Home" mode={mode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"></TextForm>
        <About></About>
      </div>
    </>
  );
}

export default App;
