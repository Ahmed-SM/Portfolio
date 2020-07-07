import React from 'react';
import styled from 'styled-components';
import  StyledContent from '../../containers/Content';
import Group16 from '../../assets/Group16.png';

const NewContent = () => {
    return(
        <StyledContent grow={"10"} color={"#16191B"}>
          <StyledHeading size={"64px"}>
            Unamed / <code>Confidential</code>,
          </StyledHeading>
          <StyledProject>
            <img src={Group16} width="700" alt="unamed project"></img>
            <p>
            {` {\n"roles":{\n"allUsers": [{"id": "ck72wpgiy119w0166nlpn4lfg","name": "Chandan"},{"id": "ck72wuqk711p80105w1mg7za0","name": "Chandan"}\n}`}
            </p>
          </StyledProject>
        </StyledContent> 
    );
};
export default NewContent;
const StyledProject = styled.div`
    display:flex;
    width: 1194px;
    margin:0 8vw 20px 8vw;
    font-size: 20px;
    p{
        margin:auto 20px;
        width: 104px;
    }
    img{
        border-radius:30px;
    }
`;
const StyledHeading = styled.h1`
  color: #E2E6E8;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  font-weight: normal;
  font-size:  ${props => props.size || '30px'};
  width: 1194px;
  margin:0 8vw 20px 8vw;
`;