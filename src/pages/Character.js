//import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Character( {apiData} ) {
    let {charId} = useParams();
    const [toggleButton, setToggleButton] = useState(true);
    const [favorite, setFavorite] = useState(false);

    function showAnswer() {
        setToggleButton(!toggleButton)
    }

    function saveFavorite() {
        setFavorite(!favorite)

        // here I got to add the as favorite marked card/character and send it over to the favorites.page

    }

    const foundApi = apiData.find((character) => {
        return character.id === Number(charId)
    })
    /* console.log({foundApi}) */

    
    return (
    
    <CardContainer toggle={toggleButton}>

            <div>{foundApi && <h1>{foundApi.name}</h1>}</div>
            <button onClick={saveFavorite} style={{backgroundColor: favorite === true ? "lightgreen" : "white"}}>Save as favorite</button>
            <img src={foundApi.image} alt={foundApi.name} />
            <br></br>
        
         <button className="btn" onClick={showAnswer}>{showAnswer ? "show more" : "show less"}</button>
         <ul>
         <li>Species: {foundApi.species}</li>
         <li>Gender: {foundApi.gender}</li>
         <li>Status: {foundApi.status}</li>
         </ul>

    </CardContainer>
     )
    }

const CardContainer = styled.div`
    ul {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 10px;
    ${(props) => props.toggle && "visibility: hidden"};
    }
    li {
        list-style: none;
    }

`;
