//import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Character( {apiData} ) {
    let {charId} = useParams();
    const [toggle, setToggle] = useState(true);

    function showAnswer() {
        setToggle(!toggle)
    }
    
    const foundApi = apiData.find((character) => {
        return character.id === Number(charId)
    })
    /* console.log({foundApi}) */

        return(
    
    <CardContainer toggle={toggle}>

            <div>{foundApi && <h1>{foundApi.name}</h1>}</div>
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
    gap: 20px;
    ${(props) => props.toggle && "visibility: hidden"};
    }
    li {
        list-style: none;
    }

`;
/* 
const showMoreText = styled.div`
    color: black;
    
`; */