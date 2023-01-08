import { device } from 'settings/theme';
import styled from 'styled-components';
import { darken } from 'polished';

const StyledSider = styled.div`
  overflow: auto;
  position: relative;

  border-right: 1px solid ${({ theme }) => theme.sidebar.borderColor};
  background-color: ${({ theme }) => theme.sidebar.backgroundColor};

  transition: margin-left 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  ${({ isCollapsed }) => {
    return isCollapsed ? 'margin-left: -270px;' : ' margin-left: 0px;';
  }}
  @media ${device.tablet} {
    position: unset;
    height: 100%;
    ${({ isCollapsed }) => {
      return isCollapsed ? 'margin-left: -220px;' : ' margin-left: 0px;';
    }}
  }

  .menu-container {
    overflow: auto;
    width: auto;
    height: 100%;
  }

  .ant-menu-sub {
    ant-menu-inline {
      border-color: ${({ theme }) => darken(0.2, theme.input.backgroundColor)};
    }
  }

  .item-link {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
  .card {
    width: 100%;
    heigth:200px;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
`;

export default StyledSider;