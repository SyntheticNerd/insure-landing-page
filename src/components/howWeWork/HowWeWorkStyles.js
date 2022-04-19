import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({theme})=>theme.bgPurple};
    color: ${({theme})=>theme.headTextSec};
    background-image: url(${`${process.env.PUBLIC_URL}/dev16Images/insureImages/bg-pattern-how-we-work-mobile.svg`});
    background-repeat: no-repeat;
    background-position: top right;
    padding: 64px 20px;
    & > h1 {
        font-size: 2.5em;
        margin-bottom: 40px;
    }
`;