import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
//import Experience from "./pages/Experience";
//import Blog from "./pages/Blog";

const App = () => {
  return (
    <Router>
      <Navbar />  {/* sempre visível */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
