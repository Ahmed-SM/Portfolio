import styled from 'styled-components';
const StyledLayout = styled.section`
  margin:${props => props.margin || '0'} 0;
  color: #E2E6E8;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  width:100%;
  min-width:${props => props.minWidth || '100%'};
  background:${props => props.color || '#16191B'};
  min-width: 640px;
  min-height: 170px;
  overflow:auto;
  height:100%;
`;
export default StyledLayout;