import React from "react";
import { AiFillGithub } from "react-icons/ai";
import {
  IntroBody,
  SideImage,
  Infos,
  InfoWrapper,
  Description,
  Title,
  Github,
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
            web projects with ReactJS and NodeJS.
          </Description>
          <Github href="https://github.com/oliveiraeliel">
            <AiFillGithub />
          </Github>
        </InfoWrapper>
      </Infos>
      <SideImage>
        {/* <img src="https://www.footyrenders.com/render/profile-10-neymar.png"></img> */}
      </SideImage>
    </IntroBody>
  );
};

export default Intro;
