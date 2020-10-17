import React from "react";
import { HeroContainer, HeroBg, VideoBg } from "./HeroElements";
import Video from "../../videos/video.mp4";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>HELLO</HeroH1>
        <HeroP>Sign Up</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
