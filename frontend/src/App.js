import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelpCenter from "./components/helpCenter";
import AddCard from "./components/addCard";


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HelpCenter />} />
            <Route path="/addCards" element={<AddCard />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
