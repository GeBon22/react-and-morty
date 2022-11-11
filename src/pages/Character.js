import { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useParams } from "react-router-dom";

export default function Character( character ) {
    let {id} = useParams();

  //const character.find() --> 

        return(

            <h1>Character Page {id}</h1>
            
            
    
        )
    }
   /*  
        <img src={character.image} alt={character.name} />
        <h2>{Character.name}</h2>
    
    
     <buttonContainer>
        {showMore ? text : `${text.substring(0, 0)}`}
         <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>

         <p>{Character.species}</p>
         <p>{Character.gender}</p>
         <p>{Character.status}</p>

     </buttonContainer>

 */


const buttonContainer = styled.div`
    display: grid;


`;