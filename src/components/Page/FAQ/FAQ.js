import React from 'react';
import styled from "styled-components";
import CompleteFAQList from "./CompleteFAQList";
import QuestionAnswer from "./QuestionAnswer/QuestionAnswer";

const Wrapper = styled.div`
  width: 80%;
  overflow: auto;
  margin: auto;
  text-align: left;
`

const Header = styled.h1`
  color: rgb(31, 45, 61);
  font-weight: bold;
  @media(max-width: 900px) {
  }
`

const FAQ = (props) => {

  let faqList = CompleteFAQList.map(item => {
    return <QuestionAnswer question={item.question} answer={item.answer} link={item.link}/>
  });

  return (

    <Wrapper>
      <Header>FAQ</Header>
      {faqList}
    </Wrapper>
  );
}

export default FAQ;