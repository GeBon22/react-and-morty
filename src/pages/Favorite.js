import styled from "styled-components";
import { useState, useEffect } from "react";
//import Character from "./Character";

export default function Favorite( {favorite, saveFavorite, handleToggleFavorite}){

  const [favCharacters, setFavCharacters] = useState([]);

  useEffect(() => {
    if (favorite.length === 0) {
      setFavCharacters([]);
    } else {
      fetch(`https://rickandmortyapi.com/api/character/[${favorite.join()}]`)
        .then((response) => response.json())
        .then((favCharacters) => setFavCharacters(favCharacters));
    }
  }, [favorite]);

    return (
      <CardContainer>
        <h2>Favorites</h2>

      {favCharacters?.map((favCharacter) => {
        return (
          <article key={favCharacter.id}>
            <img src={favCharacter.image} alt={favCharacter.name} />
            <h2>{favCharacter.name}</h2>
            <FavButton
              onClick={() => handleToggleFavorite(favCharacter.id.toString())}
              isFavourite={true}
            >
              remove from favorites
            </FavButton>

          </article>
        );
      })}
    </CardContainer>
  );
}

const FavButton = styled.button`
  margin-bottom: 15px;
  ${(props) => props.isFavourite && "background-color: lightgreen"}
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    text-align: center;
    padding: 0;
    margin: 10;
  }
`;