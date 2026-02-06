import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <Router>
      <Navbar />  {/* sempre visível */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
