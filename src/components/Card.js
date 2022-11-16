import styled from "styled-components";
import { Link } from "react-router-dom";
//import { useEffect, useState } from "react";
//import Character from "../pages/Character";

export default function Card( {apiData} ) {

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
    justify-content: center;

`;

const Cardh2 = styled.h2`
    text-align: center;

`;