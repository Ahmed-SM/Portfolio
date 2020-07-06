import React from 'react';
import styled from 'styled-components';
import  StyledContent from '../../containers/Content';
import AurakName from '../../assets/Aurak-Name1.png';

const EducationContent = () => {
    return(
        <StyledContent grow={"10"} color={"#16191B"}>
          <StyledHeading size={"64px"}>
            Education,
          </StyledHeading>
          <StyledHeading size={"25px"}>
            Bachelor of Science in Computer Science, American University of Ras Al Khaimah. 2014 - 2019
          <img src={AurakName} width="100%" alt="Sequential Study"/>
          </StyledHeading>

        </StyledContent> 
    );
};
export default EducationContent;
const StyledHeading = styled.h1`
  color: #E2E6E8;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  font-weight: normal;
  font-size:  ${props => props.size || '30px'};
  width: 1194px;
  margin:0 auto 20px auto;
  .img{
      position:absolute;
  }
`;