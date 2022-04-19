import styled from "styled-components";

export const CTAWrap = styled.div`
  position: relative;
  &::before {
    content: "";
    background-color: hsl(256, 26%, 20%);
    position: absolute;
    height: max(70%, 520px);
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    @media (min-width: 785px) {
      opacity: 1;
    }
  }
`;

export const SectionWrap = styled.div`
  position: relative;
  max-width: 1440px;
  margin: auto;
  padding: 0 20px 40px;
  @media (min-width: 785px) {
    padding: min(10%, 100px) 20px 40px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  color: white;
  height: 100%;
  flex-direction: column-reverse;
  align-items: center;
  @media (min-width: 785px) {
    align-items: flex-start;
    text-align: left;
    justify-content: space-between;
    flex-direction: row;
  }
  & > div {
    background-color: hsl(256, 26%, 20%);
    padding: 30% 30px;
    width: calc(100% + 40px);
    background-image: url(${`${process.env.PUBLIC_URL}/dev16Images/insureImages/bg-pattern-intro-left-mobile.svg`});
    background-repeat: no-repeat;
    background-position: top left;
    @media (min-width: 785px) {
      width: 50%;
      padding: 0;
      background: none;
    }
    & > h1 {
      @media (min-width: 785px) {
        margin-top: 10%;
      }
      margin-bottom: 16px;
    }
    & > p {
      margin-bottom: 32px;
    }
  }
`;

export const HeroImg = styled.img`
  width: calc(100% + 40px);
  object-fit: contain;
  margin-bottom: -4px;
  @media (min-width: 785px) {
    width: min(45%, 70vh);
  }
`;

export const ImgOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${`${process.env.PUBLIC_URL}/dev16Images/insureImages/bg-pattern-intro-right-mobile.svg`});
  background-repeat: no-repeat;
  background-position: bottom right;
  z-index: 0;
  top: 0;
  left: 0;
  pointer-events: none;
  @media (min-width: 785px) {
    background-image: url(${`${process.env.PUBLIC_URL}/dev16Images/insureImages/bg-pattern-intro-right-desktop.svg`}),
      url(${`${process.env.PUBLIC_URL}/dev16Images/insureImages/bg-pattern-intro-left-desktop.svg`});
      background-position: top right, bottom left;
      background-size: 30% 65%, 10% 50%;
  }
`;

export const Hr1 = styled.hr`
  display: none;
  @media (min-width: 785px) {
    display: block;
    margin: 0px 0px 0px;
    width: 15%;
  }
`;
export const Hr2 = styled.hr`
  margin: 140px auto 0px;
  width: 40%;
  border: none;
  border-top: 1px solid hsl(256, 26%, 20%);
  @media (min-width: 785px) {
    margin: 80px 0px 0px;
    width: 15%;
  }
`;
