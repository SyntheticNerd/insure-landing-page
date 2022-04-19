import styled from "styled-components";

export const AboutUsWrap = styled.div`
  color: ${({ theme }) => theme.headTextPrim};
  max-width: 1440px;
  margin: auto;
  @media (min-width: 785px) {
    text-align: left;
  }
  & > ul {
    padding-top: 80px;
    list-style-type: none;
    @media (min-width: 785px) {
      display: flex;
      justify-content: space-between;
    }
    & > li {
      @media (min-width: 785px) {
          max-width: 380px; 
      }
      & * {
        margin: 8px;
      }
      & > p {
        color: ${({ theme }) => theme.bodyText};
      }
    }
  }
`;
