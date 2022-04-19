import styled from "styled-components";

export const AboutUsWrap = styled.div`
color: ${({theme})=>theme.headTextPrim};
    & > ul{
        padding-top: 80px;
        padding-bottom: 80px;
        list-style-type: none;
        & > li{
            & *{
                margin: 8px;
            }
            & > p{
                color: ${({theme})=>theme.bodyText};
            }
        }
    }
`;

