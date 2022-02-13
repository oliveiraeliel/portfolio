import styled from "styled-components";

export const ProjectCardBody = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction == "Left" ? `row` : `row-reverse`};
  background-color: var(--primary-color);
  width: 85vw;
  height: 90vh;
  border-radius: 1rem;
  padding: 1rem;
  margin: auto;

  @media (max-width: 756px) {
    flex-direction: column;
  }
`;

export const Image = styled.div`
  flex: 1;
  display: ${(props) => (props.isVisible ? "none" : "flex")};
  img {
    border-radius: 1rem;
    max-width: 100%;
    max-height: 100%;
  }
  justify-content: center;
  align-items: center;
`;
export const ProjectInfos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: 300;
    margin: 0;
    text-align: center;
  }
`;

export const ProjectDescription = styled.a`
  flex: 2;
  font-size: 1.4rem;
  font-weight: 300;
  color: white;
  @media (max-width: 756px) {
    display: none;
  }
`;

export const About = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  color: white;
`;

export const Tecnologies = styled.a`
  flex: 2;
  flex-wrap: wrap;
  font-size: 1rem;
  font-weight: 300;
`;

export const Github = styled.a`
  flex: 1;
  text-decoration: none;
  color: var(--quinternary-color);
  font-size: 4rem;
`;

export const Visit = styled.a`
  flex: 1;
  color: var(--quinternary-color);
  font-size: 2rem;
`;
export const Back = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
`;

export const ProjectDescriptionBack = styled.div``;
