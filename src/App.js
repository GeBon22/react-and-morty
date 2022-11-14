import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

  const [favorite, setFavorite] = useState(() =>
  JSON.parse(localStorage.getItem("favourites") || "[]")
);

function handleToggleFavorite(id) {
  if (favorite.includes(id)) {
    const newFavorite = favorite.filter((favID) => favID !== id);
    setFavorite(newFavorite);
  } else {
    setFavorite([...favorite, id]);
  }
}

useEffect(() => {
  localStorage.setItem("favourites", JSON.stringify(favorite));
}, [favorite]);


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
          <Route path="/favorite" element={<Favorite handleToggleFavorite={handleToggleFavorite}
          favorite={favorite} />} />
          <Route path="/random" element={<Random />} />
          <Route path="/other" element={<Other />} />
          <Route path={"/Character/:charId"} element={<Character apiData={apiData} favorite={favorite} 
          handleToggleFavorite={handleToggleFavorite}/>} />
          <Route path="*" element={<h1>Error 404 - Page not found!</h1>} />
        </Routes>
      <Navigation />
      </Router>
      </div>
  );
}

export default App;
