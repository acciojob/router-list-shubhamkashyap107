
import React from "react";
import './../styles/App.css';
import {BrowserRouter, Routes, Route}  from  "react-router-dom"
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";


const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<ItemList />}/>
        <Route path="/items/:id" element={<ItemDetail />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
