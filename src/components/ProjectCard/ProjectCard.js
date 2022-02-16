import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoPython } from "react-icons/io";
import { GrNode } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

import {
  ProjectCardBody,
  Tecnologies,
  Github,
  Image,
  ProjectInfos,
  Visit,
  SubInfos,
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

          <SubInfos>
            <Tecnologies>
              {props.tecnologies.map((row) => {
                switch (row) {
                  case "python":
                    return (
                      <a>
                        <IoLogoPython />
                      </a>
                    );
                  case "node":
                    return (
                      <a>
                        <GrNode />
                      </a>
                    );
                  case "react":
                    return (
                      <a>
                        <FaReact />
                      </a>
                    );
                }
              })}
            </Tecnologies>
            <Github href={props.github}>
              <AiFillGithub />
            </Github>
          </SubInfos>
          <Visit href={props.visitURL}>Visit</Visit>
        </ProjectInfos>
      </ProjectCardBody>
    </ScrollAnimation>
  );
};
