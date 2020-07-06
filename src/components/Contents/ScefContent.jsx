import React from 'react';
import styled from 'styled-components';
import  StyledContent from '../../containers/Content';
import Imag1 from '../../assets/1122.JPG';
import Imag2 from '../../assets/sc1114.JPG';

const ScefContent = () => {
    return(
        <StyledContent grow={"10"} color={"#16191B"}>
          <StyledHeading size={"64px"}>
            SCEF HR Application,
          </StyledHeading>
          <StyledProject>
            <img src={Imag1} width="770" alt="SCEF HR"></img>
            <p>
            {` {\n"roles":{\n"allUsers": [{"id": "ck72wpgiy119w0166nlpn4lfg","name": "Chandan"},{"id": "ck72wuqk711p80105w1mg7za0","name": "Chandan"}\n}`}
            </p>
          </StyledProject>
        </StyledContent> 
    );
};
export default ScefContent;
const StyledProject = styled.div`
    display:flex;
    width: 1194px;
    margin:0 auto 20px auto;
    font-size: 20px;
    p{
        margin:auto 20px;
        width: 104px;
    }
    img{
        margin-right:20px;
        border-radius:5px;
    }
`;
const StyledHeading = styled.h1`
  color: #E2E6E8;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  font-weight: normal;
  font-size:  ${props => props.size || '30px'};
  width: 1194px;
  margin:0 auto 20px auto;
`;