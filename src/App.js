import React from "react";
import PopularProduct from "./pages/PopularProduct";
import HighPrice from "./pages/HighPrice";
import LowPrice from "./pages/LowPrice";
import "./components/icons/icons";

import { Routes, Route } from "react-router-dom";

import "./styles.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PopularProduct />} />
      <Route path="/highPrice" element={<HighPrice />} />
      <Route path="/lowPrice" element={<LowPrice />} />
    </Routes>
  );
}

export default App;
