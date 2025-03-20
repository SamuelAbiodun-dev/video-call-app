import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoRoom from "./pages/VideoRoom";

function App(){
  return (
    <Router>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/room/:roomId' element={<VideoRoom/>}/>
   </Routes>
    </Router>
      
   
  )
}

export default App 