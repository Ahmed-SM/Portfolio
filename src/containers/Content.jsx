import styled from 'styled-components';
const StyledContent = styled.section`
  color: #E2E6E8;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  display:flex;
  flex-direction:${props => props.direction || 'column'};
  flex-wrap: nowrap;
  width:100%;
  min-width:${props => props.minWidth || '100%'};
  justify-content:${props => props.align || 'center'};;
  align-content:center;
  flex-grow:${props => props.grow || '1'};
  background:${props => props.color || '#16191B'};
  width: 100%;
  min-width: 1440px;
  
`;
export default StyledContent;