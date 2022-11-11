import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header";
import Navigation from './components/Navigation';
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Random from "./pages/Random";
import Other from "./pages/Other";
import Character from './pages/Character';
import { useEffect, useState } from "react";


function App() {

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const response = await fetch("https://rickandmortyapi.com/api/character");
          const data = await response.json();
          console.log(data);
          setApiData(data.results);
      }
      fetchData();
  }, [])


    return (
   <div className="App">
    <Header />
     <Router>
        <Routes>
          <Route path="/" element={<Home apiData={apiData} />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/random" element={<Random />} />
          <Route path="/other" element={<Other />} />
          <Route path={"/Character/:charId"} element={<Character apiData={apiData}/>} />
        </Routes>
      <Navigation />
      </Router>
      </div>
  );
}

export default App;
