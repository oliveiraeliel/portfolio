import styled from "styled-components";

export const ProjectCardBody = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction == "Left" ? `row` : `row-reverse`};
  background-color: var(--primary-color);
  width: 80vw;
  height: 80vh;
  border-radius: 1rem;
  padding: 1rem;
  margin: auto;

  @media (max-width: 756px) {
    flex-direction: column;
  }
`;

export const Image = styled.div`
  flex: 1;
  display: flex;
  img {
    border-radius: 1rem;

    @media (max-width: 756px) {
      /* height: 40%; */
      width: 90%;
    }
    @media (min-width: 756.1px) {
      width: 100%;
    }
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
`;

export const About = styled.div`
  flex: 1;
  display: flex;
  color: white;
`;

export const Tecnologies = styled.a`
  flex: 4;
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
  /* text-decoration: none; */
  color: var(--quinternary-color);
  font-size: 2rem;
`;
