import "./App.css";
import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cards from "./components/Cards";
import Nav from "./components/Nav";

function App() {
  // new Date().toLocaleDateString();
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/initData")
      .then((res) => res.json())
      .then((data) => setItem(data))
      .then((data) => console.log(data));
  }, []);

  console.log(item);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={item && <Cards item={item} setItem={setItem} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
