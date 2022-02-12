import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { ProjectsBody } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = (props) => {
  return (
    <ProjectsBody>
      <ProjectCard
        title={props.title}
        github={props.github}
        description={props.description}
        animationDirection={props.animationDirection}
        img={props.img}
      />
    </ProjectsBody>
  );
};

export default Projects;
