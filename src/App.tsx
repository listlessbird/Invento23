import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//styles
import "./App.scss";

//pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
