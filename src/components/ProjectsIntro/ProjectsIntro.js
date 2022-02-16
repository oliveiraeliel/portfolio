import React, { useEffect, useState, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import {
  ProjectsIntroBody,
  SideText,
  //   SideFig,
  Text,
} from "./styles";

const ProjectsIntro = () => {
  return (
    <ProjectsIntroBody>
      <SideText>
        <Text>
          <ScrollAnimation
            animateIn="bounceInUp"
            animateOut="fadeOut"
            animateOnce
            duration={2}
            delay={0}
          >
            <h2>Find some of my </h2>
            <h1>Projects</h1>
            <h3>Here</h3>
          </ScrollAnimation>
        </Text>
      </SideText>
    </ProjectsIntroBody>
  );
};
export default ProjectsIntro;
