import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Comparison from "./pages/Comparison";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/comparison" element={<Comparison />} />
      </Routes>
    </Router>
  );
};

export default App;
