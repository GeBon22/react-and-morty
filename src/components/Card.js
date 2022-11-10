import styled from "styled-components";

export default function Card() {

    return (
        <Cards>
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty" />

            <Cardh2>Morty Smith</Cardh2>

        </Cards>
        

    )

}

const Cards = styled.div`
    padding: 20px;
    display: grid;
    justify-content: center

`;

const Cardh2 = styled.h2`
    text-align: center;

`;