import React from "react";

import { Intro, Projects, ProjectsIntro } from "../components/";

import projects from "../utils/projects.json";

export const Home = () => {
  // console.log(projects[0].tecnologies);
  return (
    <div>
      <Intro />
      <ProjectsIntro />
      {projects.map((row, i) => {
        let direction;
        if (i & 1) {
          direction = "Right";
        } else {
          direction = "Left";
        }
        return (
          <Projects
            title={row.title}
            description={row.description}
            github={row.github}
            animationDirection={direction}
            img={row.img}
            tecnologies={row.tecnologies}
            visit={row.github}
            key={i}
          />
        );
      })}
    </div>
  );
};
