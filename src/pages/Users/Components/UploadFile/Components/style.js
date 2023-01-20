import styled from 'styled-components';

export const StyledForm = styled.div`
    display: flex;
    justify-content: center;
    input[type="file"] {
        display: none;
    }
    .custom-file-upload {
        display: inline-block;
        font-size:16px;
        cursor: pointer;
        width:100%
    }
    
    .button {
        font-size:16px;
        cursor: pointer;
        max-width: 250px;
        width: 100%;
    }
`;