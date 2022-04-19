import React from "react";
import CallToAction from "./callToAction/CallToAction";
import AboutUs from "./aboutUs/AboutUs";
import { LandingWrap, MainSection } from "./StyledComponents";
import HowWeWork from "./howWeWork/HowWeWork";

export default function InsureLanding() {
  return (
    <LandingWrap>
      <CallToAction />
      <MainSection>
        <AboutUs />
        <HowWeWork />
      </MainSection>
    </LandingWrap>
  );
}
