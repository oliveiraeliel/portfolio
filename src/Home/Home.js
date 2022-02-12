import React from "react";

import { Intro, Projects, ProjectsIntro } from "../components/";

export const Home = () => {
  return (
    <div>
      <Intro />
      <ProjectsIntro />
      <Projects />
    </div>
  );
};
