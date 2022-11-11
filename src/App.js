import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header";
import Navigation from './components/Navigation';
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Random from "./pages/Random";
import Other from "./pages/Other";
import Character from './pages/Character';
//import { useEffect, useState } from "react";


function App() {


    return (
   <div className="App">
    <Header />
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/random" element={<Random />} />
          <Route path="/other" element={<Other />} />
          <Route path={"/Character/:id"} element={<Character />} />
        </Routes>
      <Navigation />
      </Router>
      </div>
  );
}

export default App;
