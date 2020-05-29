import React from "react";
import styled from "styled-components";
import conducts from "./Conducts";

const Container = styled.div`
  color: rgb(31, 45, 61);
  width: 80%;
  text-align: left;
  margin: auto auto 50px;
`;

const Subheader = styled.h2`
  color: rgb(31, 45, 61);
  font-weight: normal;
`;

const Header = styled.h1`
  color: rgb(31, 45, 61);
  font-weight: bold;
  @media(max-width: 900px) {
  }
`

const SubheaderContainer = styled.div`
 width: 100%;
 margin: 20px auto auto;
 text-align: left;
`;

const CodeContainer = styled.div`
  margin: auto;
  text-align: left;
`;

const ListItem = styled.li`
  line-height: 30px;
`;

const CodeOfConduct = (props) => {
  let studentCode = conducts.student.map(code => {
    return <ListItem>{code}</ListItem>
  });

  let mentorCode = conducts.mentor.map(code => {
    return <ListItem>{code}</ListItem>
  });

  let parentCode = conducts.parent.map(code => {
    return <ListItem>{code}</ListItem>
  });

  return (
    <Container>
      <Header>Code of Conduct</Header>
      <SubheaderContainer>
        <Subheader>Students:</Subheader>
        <CodeContainer>
          <ol>
            {studentCode}
          </ol>
        </CodeContainer>
      </SubheaderContainer>
      <SubheaderContainer>
        <Subheader>Mentors:</Subheader>
        <CodeContainer>
          <ol>
            {mentorCode}
          </ol>
        </CodeContainer>
      </SubheaderContainer>
      <SubheaderContainer>
        <Subheader>Parents:</Subheader>
        <CodeContainer>
          <ol>
            {parentCode}
            <ListItem>
              {'If Parents or Guardians are not getting emails of the student progress, they should notify us immediately at '}
              <a href="mailto:compassmentors2020@gmail.com">compassmentors2020@gmail.com</a>.
            </ListItem>
          </ol>
        </CodeContainer>
      </SubheaderContainer>
    </Container>
  )
}

export default CodeOfConduct;