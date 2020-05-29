import React from "react";
import { ReactComponent as ExpandMenuIco } from "../../assets/icons/expand-menu.svg";
import {ReactComponent as CloseMenuIco} from "../../assets/icons/close-outline.svg"
import styled from "styled-components";
import {Router, Link, BrowserRouter} from "react-router-dom";

const Container = styled.div`
  width: 80%;
  margin: 30px auto auto;
  height: 70px;
  text-align: right;
  
`

const Logo = styled.div`
  float: left;
  color: rgb(31, 45, 61);
  font-size: 25px;
  @media(max-width: 900px) {
  }
`

const NavButton = styled.div`
  //float: right;
  display: inline;
  font-size: 20px;
  margin-left: 1%;
  margin-right: 1%;
  color: rgba(31, 45, 61, 0.5);
  transition: all 0.5s ease 0s;
  &:hover {
    cursor: pointer;
    color: rgb(31, 45, 61);
  }
  @media(max-width: 900px) {
    position: relative;
    display: ${props => props.show ? 'block' : 'none'};
    width: 100%;
    float: right;
  }
`;

const MenuDiv = styled.div`
  float: right;
  width: 30px;
  display: none;
  &:hover {
    cursor: pointer;
  }
  @media(max-width: 900px) {
    display: block;
  }
`;

const Spacer = styled.div`
  display: none;
  position: relative;
  float: right;
  width: 100%;
  height: 30px;
  @media(max-width: 900px) {
    display: ${props => props.show ? 'block' : 'none'};
  }
`

const StyledLink = styled(Link)`
  font-size: 20px;
  color: rgba(31, 45, 61, 0.5);
  transition: all 0.5s ease 0s;
  text-decoration: none;
   &:hover {
    cursor: pointer;
    color: rgb(31, 45, 61);
  }
`;

const NavBar = (props) => {
  return (
    <Container>
      <Logo>Compass Mentors</Logo>
      <MenuDiv onClick={props.clicked.toggleNav}>
          {props.displayNav ? <CloseMenuIco/> : <ExpandMenuIco/>}
      </MenuDiv>
      <NavButton show={props.displayNav} onClick={props.clicked.disableNav}>
          <StyledLink to="/">Home</StyledLink>
      </NavButton>
      <NavButton show={props.displayNav} onClick={props.clicked.disableNav}>
          <StyledLink to="/about-us">About Us</StyledLink>
      </NavButton>
      <NavButton show={props.displayNav} onClick={props.clicked.disableNav}>
          <StyledLink to="/team">Team</StyledLink>
      </NavButton>
      <NavButton show={props.displayNav} onClick={props.clicked.disableNav}>
          <StyledLink to="/apply-now">Apply Now</StyledLink>
      </NavButton>
      <NavButton show={props.displayNav} onClick={props.clicked.disableNav}>
          <StyledLink to="/FAQ">FAQ</StyledLink>
      </NavButton>
      <NavButton show={props.displayNav} onClick={props.clicked.disableNav}>
          <StyledLink to="/code-of-conduct">Code of Conduct</StyledLink>
      </NavButton>
      <Spacer show={props.displayNav}/>

    </Container>
  );
}

export default NavBar;