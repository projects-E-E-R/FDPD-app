import styled from "styled-components";

export const StyledFormReview = styled.div`
    width:100%;
    .container{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:0 2rem;
    }

    .ant-input-number-disabled .ant-input-number-input {
        text-align: center;
    }

    a, area, button, [role='button'], input:not([type='range']), label, select, summary, textarea {
        text-align-last: center;
    }
`;