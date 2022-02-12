import styled from "styled-components";

export const IntroBody = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Infos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;

  h1,
  h2 {
    margin: 0;
  }
  h1 {
    font-size: 5rem;
    font-weight: 600;
  }
  h2 {
    font-size: 4rem;
    font-weight: 500;
  }
  /* height: 100rem; */

  @media (max-width: 800px) {
    h1 {
      font-size: 3.5rem;
      font-weight: 600;
    }
    h2 {
      font-size: 3rem;
      font-weight: 500;
    }
  }
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  margin: 1rem 0 1rem;
  color: var(--primary-color);
  padding: 0 0 1rem;
  font-weight: 300;

  animation: emerge 2s normal forwards ease-in-out;

  @keyframes emerge {
    from {
      opacity: 0;
    }
    10% {
      opacity: 0.1;
    }
    20% {
      opacity: 0.2;
    }
    30% {
      opacity: 0.3;
    }
    40% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.5;
    }
    60% {
      opacity: 0.6;
    }
    70% {
      opacity: 0.7;
    }
    80% {
      opacity: 0.8;
    }
    90% {
      opacity: 0.9;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.a`
  font-size: 1.5rem;
  font-weight: 300;
`;

export const Github = styled.a`
  text-decoration: none;
  color: var(--primary-color);
  font-size: 4rem;
  /* margin: 3rem; */
`;

export const SideImage = styled.div`
  flex: 1;
  background-color: var(--primary-color);
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);

  @media (max-width: 800px) {
    flex: 0;
  }
`;
