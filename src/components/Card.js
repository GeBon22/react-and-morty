import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import Character from "../pages/Character";

export default function Card() {
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
        
        <Cards>
        <ul>
        {apiData.map((character) => {
            return(
                <li key={character.id}>
                     <img src={character.image} alt={character.name} />
                     <Cardh2>{character.name}</Cardh2>
                     <Link to={{
                     pathname: `/Character/`+ character.id
                    }}><button> show more</button></Link>
                </li>
            );
        })                                                                                       }
    </ul>
            

        </Cards>
        

    )
}

const Cards = styled.div`
ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
li{
    list-style: none;
}

    padding: 30px;
    display: grid;
    justify-content: center

`;

const Cardh2 = styled.h2`
    text-align: center;

`;