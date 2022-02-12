import React, { useEffect, useState, useRef } from "react";
import { useIsVisible } from "react-is-visible";
import {
  ProjectsIntroBody,
  SideText,
  //   SideFig,
  Text,
} from "./styles";

const ProjectsIntro = () => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);

  return (
    <ProjectsIntroBody>
      {/* <SideFig>
        <Circle1></Circle1>
        <Circle2></Circle2>
        <Circle3></Circle3>
      </SideFig> */}
      <SideText>
        <Text ref={nodeRef} className={`text${isVisible ? "animate" : ""}`}>
          <h2>Find some of my </h2>
          <h1>Projects</h1>
          <h3>Here</h3>
        </Text>
      </SideText>
    </ProjectsIntroBody>
  );
};
export default ProjectsIntro;
