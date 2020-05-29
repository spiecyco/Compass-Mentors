import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import graphic from "../../assets/compass-mentors-graphic.png"

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const Graphic = styled.img`
  width: 100%;
  
`;

const Home = (props) => {
  return (
    <Wrapper>
      <Graphic src={graphic}/>
    </Wrapper>
  );
}

export default Home;