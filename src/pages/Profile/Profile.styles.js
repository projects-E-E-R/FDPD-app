import styled from "styled-components";

export const StyledForm = styled.div`
    width:100%;
    .container{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:0 2rem;
    }
`;

export const StyledView = styled.div`
    .wrapper{
        width:100%
        display: flex;
    }
    .wrapper .top{
    background: #23415B;
    padding: 30px 25px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    text-align: center;
    color: #fff;
    }
    .wrapper .top h4{
    margin-bottom: 10px;
    font-size: 20px;
    color: #fff;
    }

    .wrapper .top p{
    font-size: 16px;
    }

    .wrapper .bottom{
    width: 100%;
    background: #fff;
    padding: 30px 25px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    }

    .wrapper .bottom .info,
    .wrapper .bottom .academic{
    margin-bottom: 25px;
    }

    .wrapper .bottom .info h3,
    .wrapper .bottom .academic h3{
        margin-bottom: 15px;
        padding-bottom: 5px;
        border-bottom: 1px solid #e0e0e0;
        color: #353c4e;
        text-transform: uppercase;
        letter-spacing: 5px;
    }

    .wrapper .bottom .info_data,
    .wrapper .bottom .academic_data{
        display: flex;
        justify-content: space-between;
    }

    .wrapper .bottom .info_data .data,
    .wrapper .bottom .academic_data .data{
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }

    .wrapper .bottom .info_data .data h4,
    .wrapper .bottom .academic_data .data h4{
        font-size: 20px;
        color: #353c4e;
        margin-bottom: 5px;
    }

    .wrapper .bottom .info_data .data p,
    .wrapper .bottom .academic_data .data p{
        font-size: 16px;
        margin-bottom: 10px;
        color: #919aa3;
        display: flex;
        justify-content: space-between;
    }
`;