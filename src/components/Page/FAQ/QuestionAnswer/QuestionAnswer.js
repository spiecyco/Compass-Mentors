import React, { Component } from 'react';
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../../../assets/icons/arrow-ios-forward-outline.svg";

const Wrapper = styled.div`
  width: 100%;
  color: rgb(31, 45, 61);
  overflow: auto;
  text-align: left;
  margin-bottom: 10px;
  
`

const Question = styled.div`
  width: auto;
  line-height: 25px;
  font-size: 20px;
  transition: all 0.2s ease 0s;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
    color: rgb(31, 45, 61, 0.5);
    fill: rgb(31, 45, 61, 0.5);
  }
`;

const Arrow = styled.div`
  display: inline-block;
  width: 25px;
  float: left;
  transition: all 0.2s ease 0s;
  transform: ${props => props.show ? "rotate(90deg)" : "rotate(0deg)"};
  &:hover {
    cursor: pointer;
    color: rgb(31, 45, 61, 0.5);
    fill: rgb(31, 45, 61, 0.5);
  }
`

const AnswerContainer = styled.div`
  margin-left: 30px;
  display: ${props => props.show ? 'block' : 'none'};
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 20px;
`


class QuestionAnswer extends React.Component {
  state = {
    showQuestion: false,
  }

  clickedHandler = () => {
    this.setState({ showQuestion: !this.state.showQuestion});
  }

  render() {

    let answer = this.props.link === 'none' ? <AnswerContainer show={this.state.showQuestion}>{this.props.answer}</AnswerContainer>
      : <AnswerContainer show={this.state.showQuestion}>{this.props.answer}<a target="_blank" href={this.props.link}>here.</a></AnswerContainer>

    return (
      <Wrapper onClick={this.clickedHandler}>
        <Arrow show={this.state.showQuestion}><ArrowIcon/></Arrow>
        <Question>{this.props.question}</Question>
        {answer}
      </Wrapper>
    )
  }
}

export default QuestionAnswer;