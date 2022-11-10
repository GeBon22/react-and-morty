import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import Navigation from './components/Navigation';
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Random from "./pages/Random";
import Other from "./pages/Other";
//import { useEffect, useState } from "react";


function App() {


    return (
   <div className="App">
    <Header />
     <Router>
      <Card />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/random" element={<Random />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      <Navigation />
      </Router>
      </div>
  );
}

export default App;
