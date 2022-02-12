import React from "react";
import { AiFillGithub } from "react-icons/ai";
import ScrollAnimation from "react-animate-on-scroll";
import { SiPython } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import {
  ProjectCardBody,
  ProjectDescription,
  Tecnologies,
  Github,
  Image,
  ProjectInfos,
  About,
  Visit,
} from "./styles";

export const ProjectCard = (props) => {
  return (
    <ScrollAnimation
      animateIn={`bounceIn${props.animationDirection}`}
      animateOut="fadeOut"
      animateOnce
      duration={2}
      delay={1}
    >
      <ProjectCardBody direction={props.animationDirection}>
        <Image>
          <img src={props.img}></img>
        </Image>
        <ProjectInfos>
          <h1>{props.title}</h1>
          <ProjectDescription>{props.description}</ProjectDescription>
          <About>
            <Tecnologies>Tecnologies: {props.tecnologies}</Tecnologies>
            <Github href={props.github}>
              <AiFillGithub />
            </Github>
            <Visit url={props.visit}>Visit</Visit>
          </About>
        </ProjectInfos>
      </ProjectCardBody>
    </ScrollAnimation>
  );
};
