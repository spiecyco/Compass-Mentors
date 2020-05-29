import React from "react";
import styled from "styled-components";
import AllMembersList from "./AllMembersList";
import TeamMember from "./TeamMember/TeamMember";

const Container = styled.div`
  width: 100%;
`;

const TeamList = (props) => {
  let memberList = AllMembersList.map((member, index) => {
    return <TeamMember name={member.name} position={member.position} bio={member.bio} src={member.src}
    align={index % 2}/>
  });
  return (
    <Container>
      {memberList}
    </Container>
  )
}

export default TeamList