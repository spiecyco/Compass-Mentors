import React from "react";
import styled from "styled-components";
import TeamList from "./TeamList/TeamList";

const Wrapper = styled.div`
  width: 80%;
  height: auto;
  margin: auto;
  overflow: auto;
`;

const Team = (props) => {
  return <Wrapper>
    <TeamList/>
  </Wrapper>
}

export default Team;