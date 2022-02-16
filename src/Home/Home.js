import React from "react";

import { Intro, Projects, ProjectsIntro } from "../components/";

import projects from "../utils/projects.json";

export const Home = () => {
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
            visitURL={row.visitURL}
            title={row.title}
            github={row.github}
            animationDirection={direction}
            img={row.img}
            tecnologies={row.tecnologies}
            key={i}
          />
        );
      })}
    </div>
  );
};
