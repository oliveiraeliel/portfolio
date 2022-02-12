import styled from "styled-components";

export const ProjectsIntroBody = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: row;

`;

export const SideText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
`;

export const Text = styled.div`
  text-align: center;
  h1,
  h2,
  h3 {
    margin: 0;
  }
  h1 {
    font-size: 5rem;
    font-weight: 600;
  }
  h2 {
    font-size: 4rem;
    font-weight: 300;
  }
  h3 {
    font-size: 3rem;
    font-weight: 500;
  }
`;
