import React from 'react';
import styled from 'styled-components';
import  StyledContent from '../../containers/Content';
import nov1 from '../../assets/nov1.png';
import nov2 from '../../assets/nov2.png';
import nov3 from '../../assets/nov3.png';

const SequentialStudyContent = () => {
    return(
        <StyledContent grow={"10"} color={"#16191B"} margin={"3%"} align={"flex-start"} overflowX={"auto"}  >
          <StyledHeading size={"64px"}>
            Sequential Study Issuer,
          </StyledHeading>
          <StyledProject>
          <img src={nov1} width="265" alt="Sequential Study"></img>
          <img src={nov3} width="265" alt="Sequential Study"></img>
          <img src={nov2} width="265" alt="Sequential Study"></img>
            <p>
            {` {\n"roles":{\n"allUsers": [{"id": "ck72wpgiy119w0166nlpn4lfg","name": "Chandan"},{"id": "ck72wuqk711p80105w1mg7za0","name": "Chandan"}\n}`}
            </p>
          </StyledProject>
        </StyledContent> 
    );
};
export default SequentialStudyContent;
const StyledProject = styled.div`
    display:flex;
    width: 1194px;
    flex-wrap:wrap;
    margin:0 8vw 20px 8vw;
    font-size: 20px;
    p{
        margin:auto 20px;
        width: 104px;
        text-shadow: 0 0 3px #f37449, 0 0 15px #f37449;
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
  margin:0 8vw 20px 8vw;
`;