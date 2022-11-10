import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Navigation() {

    return (
    <Navbar>
        <Link to="/">Home</Link>
        <Link to="favorites">Favorites</Link>
        <Link to="random">Random</Link>
        <Link to="other">Other</Link>
    </Navbar>
        

    )

}

const Navbar = styled.ul`
    display: block;
    color: black;
    padding: 30px; 
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap
`;