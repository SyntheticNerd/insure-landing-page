import React from "react";
import { Btn } from "../StyledComponents";
import {
  ContentWrap,
  CTAWrap,
  HeroImg,
  Hr1,
  Hr2,
  ImgOverlay,
  SectionWrap,
} from "./CTAStyledComp";

export default function CallToAction() {
  return (
    <CTAWrap>
      <SectionWrap>
        <Hr1 />
        <ContentWrap>
          <div>
            <h1>Humanizing your insurance.</h1>
            <p>
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <Btn>VIEW PLANS</Btn>
          </div>
          <HeroImg
            src={
              process.env.PUBLIC_URL +
              "/dev16Images/insureImages/image-intro-desktop.jpg"
            }
            alt='Family walking along the Sidewalk'
          />
        </ContentWrap>
        <Hr2 />
      </SectionWrap>
      <ImgOverlay></ImgOverlay>
    </CTAWrap>
  );
}
