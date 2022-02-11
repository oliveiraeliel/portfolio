import React from "react";
import { AiFillGithub } from "react-icons/ai";
import {
  ProjectCardBody,
  ProjectDescription,
  Tecnologies,
  Github, 
} from "./styles";

export const ProjectCard = (props) => {
  return (
    <>
      <ProjectCardBody>
        <h1>{props.title}</h1>
        <img src={props.img}></img>
        <ProjectDescription>{props.description}</ProjectDescription>
        <Tecnologies>{props.tecnologies}</Tecnologies>
        <Github href={props.github}>
          <AiFillGithub />
        </Github>
      </ProjectCardBody>
    </>
  );
};
