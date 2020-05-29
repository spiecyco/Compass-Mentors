import React from "react";
import styled from "styled-components";
import Media from 'react-media';

const Container = styled.div`
  width: 70%;
  overflow: auto;
  //border: 1px black solid;
  margin-bottom: 40px;
  float: ${props => props.align === 0 ? 'left' : 'right'};
  color: rgb(31, 45, 61);
  
`;

const LeftPic = styled.img`
  //width: 15%;
  height: 200px;
  float: left;
`
const Profile = styled.div`
  text-align: left;
`;

const RightPic = styled.img`
  height: 200px;
  float: right;
`;

const ProfileContentWrapper = styled.div`
  margin-right: ${props => props.align === 0 ? 0 : 160}px;
  margin-left: ${props => props.align === 0 ? 160 : 0}px;
  height: 100%;
`;

const ProfileContent = styled.div`
  width: 95%;
  padding-right: ${props => props.align === 0 ? 0 : 5}%;
  padding-left: ${props => props.align === 0 ? 5 : 0}%;
  margin: auto;
`;

const Name = styled.div`
  padding-top: 5px;
  font-size: 20px;
  line-height: 20px;
`;

const Position = styled.div`
  font-size: 20px;
  line-height: 20px;
  padding-top: 5px;
  opacity: 0.4;
`

const Bio = styled.div`
  font-size: 15px;
  line-height: 17px;
  padding-top: 5px;
  padding-bottom: 5px;
`

const Query = styled(Media)`
  height: auto;
`
const TeamMember = (props) => {
  return (
    <Query queries={{small: {maxWidth: 900}}}>
      {matches =>
        matches.small ? (
          <div>

          </div>
      ) : (
        <Container align={props.align}>
          {props.align === 0 ? <LeftPic src={props.src}/> : <RightPic src={props.src}/>}
          <Profile>
            <ProfileContentWrapper align={props.align}>
              <ProfileContent align={props.align}>
                <Name>{props.name}</Name>
                <Position>{props.position}</Position>
                <Bio>{props.bio}</Bio>
              </ProfileContent>
            </ProfileContentWrapper>
          </Profile>
        </Container>
        )
      }

    </Query>
  )
}

export default TeamMember;