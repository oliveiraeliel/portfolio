import React from "react";
import {
  IntroBody,
  SideImage,
  Infos,
  InfoWrapper,
  Description,
  Title,
} from "./styles";

const Intro = () => {
  return (
    <IntroBody>
      <Infos>
        <InfoWrapper>
          <h2>Hi, I'm Eliel</h2>
          <h1>and I code!</h1>
          <Title>Web Developer</Title>
          <Description>
            Just a System Developer Technician recent-graduated searching for
            new experiences. Currently, I'm developing some personal full-stack
            web projects in ReactJS and NodeJS.
          </Description>
        </InfoWrapper>
      </Infos>
      <SideImage>a</SideImage>
    </IntroBody>
  );
};

export default Intro;
