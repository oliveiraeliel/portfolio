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
  flex: 2;
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
    color: white;
  }
`;

export const SubInfos = styled.div`
  display: flex;
  flex: 4;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const Tecnologies = styled.div`
  flex: 3;
  flex-wrap: wrap;
  font-size: 2rem;
  color: white;
  font-weight: 300;
  a {
    margin: 0.5rem;
  }
`;

export const Github = styled.a`
  padding: 10px;
  flex: 1;
  text-decoration: none;
  color: var(--quinternary-color);
  font-size: 3rem;

  &:hover {
    color: black;
    opacity: 0.5;
  }
`;

export const Visit = styled.a`
  display: flex;
  background-color: black;
  border-radius: 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-decoration: none;
  color: var(--quinternary-color);
  font-size: 2rem;

  &:hover {
    opacity: 0.5;
  }
`;
