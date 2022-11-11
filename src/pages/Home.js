import styled from "styled-components";
import Card from "../components/Card";

export default function Home({apiData}){
    return (
      <div>
        <h2>Home</h2>
         <Card apiData={apiData} />
      </div>
    );
  }