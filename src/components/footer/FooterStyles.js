import styled from "styled-components";

export const FooterWrap = styled.div`
  background-color: ${({ theme }) => theme.bgFooter};
  background-image: url(${`${process.env.PUBLIC_URL}/dev16Images/insureImages/bg-pattern-footer-mobile.svg`});
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  padding: 80px 20px;
  @media (min-width: 785px) {
    background-size: auto;
    background-position: top left;
    background-image: url(${`${process.env.PUBLIC_URL}/dev16Images/insureImages/bg-pattern-footer-desktop.svg`});
  }
  & > div {
    max-width: 1440px;
    margin: auto;
    @media (min-width: 785px) {
      display: flex;
      margin-bottom: 40px;
      justify-content: space-between;
    }
    & > img {
      margin: 0px 8px;
      height: 1.2em;
    }
    & > div {
      @media (min-width: 785px) {
        margin: 0px 0px;
      }
      margin: 32px 0px;
      & > img {
        margin: 0px 8px;
        opacity: 50%;
        &:hover {
          opacity: 1;
          cursor: pointer;
        }
      }
    }
  }
  hr {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.bodyText};
    max-width: 1440px;
    margin: auto;
  }
  ul {
    list-style-type: none;
    margin: 32px 0px;
    font-size: 0.9em;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.headTextPrim};
    li {
      margin: 16px 0px;
      strong {
        color: ${({ theme }) => theme.bodyText};
        font-weight: 700;
      }
      p {
        font-weight: 700;
        width: fit-content;
        margin: auto;
        @media (min-width: 785px) {
            margin: 0;
        }
        &:hover{
            border-bottom: 2px solid black;
        }
      }
    }
  }
  @media (min-width: 785px) {
    & > ul {
      display: flex;
      text-align: left;
      margin-right: auto;
      width: 100%;
      max-width: 1440px;
      margin: 32px auto;
      justify-content: space-between;
      & > li {
        margin-right: 10%;
      }
    }
  }
`;
