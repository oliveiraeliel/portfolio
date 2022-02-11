import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { ProjectsBody } from "./styles";

const Projects = () => {
  return (
    <ProjectsBody>
      <ProjectCard
        title="Vestbot"
        github="https://github.com/oliveiraeliel"
        description="asdfasdfsa asd fdsa adf dsafdsafasd fdsafas afasd dsaf"
      />
    </ProjectsBody>
  );
};

export default Projects;
