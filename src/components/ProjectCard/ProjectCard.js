import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoPython } from "react-icons/io";
import ScrollAnimation from "react-animate-on-scroll";

import {
  ProjectCardBody,
  ProjectDescription,
  Tecnologies,
  Github,
  Image,
  ProjectInfos,
  About,
  Visit,
  Back,
  ProjectDescriptionBack,
} from "./styles";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export const ProjectCard = (props) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [clickable, setClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowDimensions.width <= 756) {
      setClickable(true);
      return;
    }
    setIsVisible(false);
    setClickable(false);
  }, [windowDimensions]);

  const handleClick = () => {
    if (!clickable) {
      return;
    }
    setIsVisible(!isVisible);
  };

  return (
    <ScrollAnimation
      animateIn={`bounceIn${props.animationDirection}`}
      animateOut="fadeOut"
      animateOnce
    >
      <ProjectCardBody
        direction={props.animationDirection}
        clickable={clickable}
        onClick={handleClick}
      >
        <Image isVisible={isVisible}>
          <img src={props.img}></img>
        </Image>
        <ProjectInfos>
          <h1>{props.title}</h1>
          <ProjectDescription>{props.description}</ProjectDescription>
          <About>
            <Tecnologies>
              {/* {props.tecnologies.map((row) => {
                let icon;
                if (row == "python") {
                  icon = "IoLogoPython";
                }
                return { icon };
              })} */}
              {props.tecnologies}
            </Tecnologies>
            <Github href={props.github}>
              <AiFillGithub />
            </Github>
            <Visit url={props.visit}>Visit</Visit>
          </About>
        </ProjectInfos>
        <Back isVisible={isVisible}>
          <h1>{props.title}</h1>
          <ProjectDescriptionBack>{props.description}</ProjectDescriptionBack>
        </Back>
      </ProjectCardBody>
    </ScrollAnimation>
  );
};
