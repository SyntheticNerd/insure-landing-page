import styled from "styled-components";

export const CTAWrap = styled.div``;

export const HeroImg = styled.img`
  width: 100%;
  object-fit: contain;
  margin-bottom: -4px;
`;

export const SectionWrap = styled.div`
  position: relative;
`;

export const ContentWrap = styled.div`
  background-color: hsl(256, 26%, 20%);
  padding: 100px 20px;
  color: white;
  background-image: url(${`${process.env.PUBLIC_URL}/dev16Images/insureImages/bg-pattern-intro-left-mobile.svg`});
  background-repeat: no-repeat;
  background-position: top left;
  & > div {
    & > h1 {
      margin-bottom: 16px;
    }
    & > p {
      margin-bottom: 32px;
    }
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
`;

export const Hr2 = styled.hr`
  margin: 160px auto 0px;
  padding-bottom: 40px;
  width: 40%;
  border: none;
  border-top: 1px solid hsl(256, 26%, 20%);
`;
