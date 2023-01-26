import { darken } from 'polished';
import styled from 'styled-components';

export const StyledDocumentExample = styled.div`
    .button {
        .ant-btn {
            height: 40px;
            color: #fff;
            border-color: #1890ff;
            background: #1890ff;
            text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
            box-shadow: 0 2px 0 rgb(0 0 0 / 5%);

            &:hover {
                background: ${({ }) =>
                darken(0.08, '#1890ff')}
              }
        }
    }

    .button-example{
    }
`;