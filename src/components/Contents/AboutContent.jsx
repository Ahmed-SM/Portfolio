import React from 'react';
import styled from 'styled-components';
import  StyledContent from '../../containers/Content';

const AboutContent = () => {
    return(
        <StyledContent grow={"10"} color={"#16191B"}>
          <StyledHeading size={"64px"}>
            Hello,
          </StyledHeading>
            <StyledHeading>
            I'm Ahmed Saadawi, a Web Developer from Egypt who likes to mix code, animation,
          interactivity and generative design. 
            </StyledHeading>
          </StyledContent> 
    );
};
export default AboutContent;
const StyledHeading = styled.h1`
  color: #E2E6E8;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  font-weight: normal;
  font-size:  ${props => props.size || '30px'};
  width: 1194px;
  margin:0 auto 20px auto;
`;
