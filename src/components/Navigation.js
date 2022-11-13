import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Navigation() {

    return (
    <Navbar>
        <Link to="/">Home</Link>
        <Link to="favorite">Favorite</Link>
        <Link to="random">Random</Link>
        <Link to="other">Other</Link>
    </Navbar>
        

    )

}

const Navbar = styled.ul`
    display: block;
    background-color: white;
    color: black;
    padding: 20px; 
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: sticky;
    bottom: 0px;
    z-index: 10;
`;