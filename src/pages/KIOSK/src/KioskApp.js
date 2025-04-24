import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage"; 
import QueueNum from "./Pages/QueueNum"; 


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/queue-num" element={<QueueNum />} />
    </Routes>
  );
}

export default App;