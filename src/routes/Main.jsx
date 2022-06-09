import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import Register from "./Register";

export default function App({ isLogin }) {
  return (
    <BrowserRouter>
      <Routes>
        { 
          isLogin ? 
          <>
            <Route path="/" element={<Home />}/> 
          </>
          : 
          <>
            <Route path="/" element={<Auth />}/> 
            <Route path="/register" element={<Register />}/>
          </>
        }
      </Routes>
    </BrowserRouter>
  )
}
