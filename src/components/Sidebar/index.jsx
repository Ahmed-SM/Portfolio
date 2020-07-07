import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTasks, faBlenderPhone,faGraduationCap, faUserTag } from '@fortawesome/free-solid-svg-icons';
import {  faAtlassian } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () =>{
    return(
        <StyledSideBar>
            <Link to={"/"}>
                <FontAwesomeIcon tag={Link}  to={"/a"} icon={faUserTag} size={"2x"} color={"#16191B"}/>
            </Link>
            <Link to={"/projects"}>
                <FontAwesomeIcon icon={faTasks} size={"2x"} color={"#16191B"}/>
            </Link>
          <StyledCircle>
            <FontAwesomeIcon icon={faAtlassian} size={"3x"} color={"white"}/>
          </StyledCircle>
          <Link to={"/education"}>
                <FontAwesomeIcon icon={faGraduationCap} size={"2x"} color={"#16191B"}/>
          </Link>
          <Link to={"/skills"}>
                <FontAwesomeIcon icon={faBlenderPhone} size={"2x"} color={"#16191B"}/>
          </Link>
        </StyledSideBar>
    );

};

export default Sidebar;
const StyledSideBar = styled.div`
  background:#FCE373;
  display:flex;
  flex-wrap: nowrap;
  flex-direction:column;
  width:6rem;
  min-width:6rem;
  height:100%;
  min-height: 500px;
  z-index:0;
  align-items: center;
  justify-content:center;
  align-content:center;
  & > *{
    margin: 25px 0;
    &:hover {
      transform: scale(1.05);
      transition: all 0.2s;
    }
  }
  text-align:center;
`;
const StyledCircle = styled.div`
  height: 7rem;
  width: 7rem;
  margin-left:11px;
  z-index:1;
  background-color: #16191B;
  border: 5px solid #FCE373;
  box-sizing: border-box;
  border-radius: 50%;
  text-align:center;
  padding-top: 1.6rem;
  &:hover {
    transform: scale(1.05) rotate(360deg);
    transition: all 0.2s;
  }
  hr{
  width:45px;
  border:2.5px solid white; 
  background:white;
  }
`;
