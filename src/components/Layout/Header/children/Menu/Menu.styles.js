import styled from 'styled-components';

const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ float }) => {
    return `float: ${float}`;
  }}
`;

export default StyledMenu;
