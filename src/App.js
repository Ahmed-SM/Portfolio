import React from 'react';
import styled from 'styled-components';
import Sidebar from "./components/Sidebar";
import Routes from "./Routes";
import './App.css';

function App() {
  return (
    <StyledContainer>
        <Sidebar/>
        <Routes/>
    </StyledContainer>
  );
}

export default App;
//width to be removed
const StyledContainer = styled.main`
  background:#16191B;
  position:fixed;
  top:0;
  bottom:0;
  width:100%;
  display: flex;  
`;
