//import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Character( {apiData} ) {
    let {charId} = useParams();
    const [showMore, setShowMore] = useState(false)
    
    const foundApi = apiData.find((character) => {
        return character.id === Number(charId)
    })
    console.log({foundApi})

        return(
    <section>
            <div>{foundApi && <h1>{foundApi.name}</h1>}</div>

            <img src={foundApi.image} alt={foundApi.name} />
            <br></br>
    <buttonContainer>
           
         <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>

        <showMoreText>
         <p>{foundApi.species}</p>
         <p>{foundApi.gender}</p>
         <p>{foundApi.status}</p>
        </showMoreText>

     </buttonContainer>
     </section>
     )
    }



const buttonContainer = styled.div`
    display: grid;


`;

const showMoreText = styled.div`
    color: black;
`