import React from 'react';
import styled from 'styled-components';
import  StyledContent from '../../containers/Content';

const SkillsContent = () => {
    return(
        <StyledContent grow={"10"} color={"#16191B"}>
          <StyledHeading size={"64px"}>
            Skills,
          </StyledHeading>
          <StyledHeading>
            React Js, JQuery, Gulp Js, Node Js, JavaScript Libraries<br/>
            HTML5/CSS3<br/>
            Figma, Photoshop, After Effect\nGit, GitHub, Team Foundation Server\n.NET, ASP.NET Core WebAPI<br/>
            MS SQL, Stored Producers, Views, Entity Framework Core
          </StyledHeading>
        </StyledContent> 
    );
};
export default SkillsContent;
const StyledHeading = styled.h1`
  color: #E2E6E8;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  font-weight: normal;
  font-size:  ${props => props.size || '30px'};
  width: 1194px;
  margin:0 auto 20px auto;
`;