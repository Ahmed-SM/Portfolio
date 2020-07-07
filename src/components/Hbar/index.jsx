import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBox, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import  StyledContent from '../../containers/Content';
import styled from 'styled-components';

const Sidebar = () =>{
    return(
<StyledContent color={"#16191B"} direction={"row"} align={"flex-start"} wrap={"nowrap"} overflowX={"auto"}  overflowY={"hidden"}>
  <StyledLink to={"/Projects/Newportal"}>
<StyledCard>
    <FontAwesomeIcon icon={faBox} size={"5x"} color={"#FCE373"}/>
      <p>
      Unamed Project
      </p>
</StyledCard>
  </StyledLink>
<StyledDivider/>
  <StyledLink to={"/Projects"}>
<StyledCard>
  <FontAwesomeIcon icon={faBox} size={"5x"} color={"#FCE373"}/>
    <p>
      Bowabty Portal
    </p>
</StyledCard>
  </StyledLink>
<StyledDivider/>
<StyledLink to={"/Projects/SequentialStudy"}>
<StyledCard>
<FontAwesomeIcon icon={faBoxOpen} size={"5x"} color={"#FCE373"}/>
  <p>
    Sequential Study Issuer
  </p>
</StyledCard>
</StyledLink>
<StyledDivider/>
<StyledLink to={"/Projects/ScefHr"}>
<StyledCard>
<FontAwesomeIcon icon={faBoxOpen} size={"5x"} color={"#FCE373"}/>
  <p>
    SCEF HR Application
  </p>
</StyledCard>
</StyledLink>
</StyledContent>);
};
export default Sidebar;

const StyledCard = styled.div`
  margin: auto 0;
  align-items: center;
  height:175px;
  width:auto;
  min-width:450px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  font-size:20px;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s;
  }
  &>*{
    text-shadow: 0 0 3px #6ECCEE, 0 0 15px #6ECCEE;
  }
`;
const StyledDivider = styled.div`
  align-self: center;
  opacity:0.2;
  border-left:1px solid white; 
  height:150px;
`;
const StyledLink =  styled(Link)`
border:none;
outline:none;
text-decoration:none;
color:inherit;
`;