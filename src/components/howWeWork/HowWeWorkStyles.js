import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgPurple};
  color: ${({ theme }) => theme.headTextSec};
  background-image: url(${`${process.env.PUBLIC_URL}/dev16Images/insureImages/bg-pattern-how-we-work-mobile.svg`});
  background-repeat: no-repeat;
  background-position: top right;
  padding: 64px 20px;
  margin: 120px auto;
  max-width: 1440px;
  @media (min-width: 785px) {
    padding: 64px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & > h1 {
    /* font-size: 2.5em; */
    margin-bottom: 40px;
    @media (min-width: 785px) {
      margin: 0;
      text-align: left;
      width: min(700px, 60%);
    }
  }
`;
