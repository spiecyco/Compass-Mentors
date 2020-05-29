import React from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
`;

const Form = styled.iframe`
  position: relative;
  
  @media(max-width: 600px) {
    height: 2200px;
  }
`;

const ApplyNow = (props) => {
  return (
    <Container>
      <Form
        src="https://docs.google.com/forms/d/e/1FAIpQLSfYamoc_pyO53z17-62aK0YheYm_tZTH9fIfIB76W24_4Z1Pg/viewform?embedded=true"
        width="100%" height="2100" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
      </Form>
    </Container>
  )
}

export default ApplyNow;