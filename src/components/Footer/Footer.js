import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(to bottom right, #de6262, #ffb88c);
  position: absolute; 
  left: 0 ; right: 0; bottom: 0; 
  height: 100px; 
`;

const Content = styled.div`
  color: #f3f3f7;
  height: 100px;
  width: 80%;
  margin: auto;
`;

const Footer = (props) => {
  return (
    <Container>
      <Content>
        Hi
      </Content>
    </Container>
  );
}

export default Footer;