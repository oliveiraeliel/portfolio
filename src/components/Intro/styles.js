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

export const SideImage = styled.div`
  flex: 1;
  background-color: var(--primary-color);
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
`;
export const InfoWrapper = styled.div`
  padding: 50px;
  height: 50%;
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
`;

export const Title = styled.h3`
  font-size: 4rem;
  margin: 1rem 0 1rem;
  color: var(--primary-color);
  padding: 0 0 1rem;

  animation: emerge 2s normal forwards ease-in-out;

  @keyframes emerge {
    from {
      border-bottom: 0;
      opacity: 0;
    }
    10% {
      border-bottom: 0.3px solid var(--primary-color);
      opacity: 0.1;
    }
    20% {
      border-bottom: 0.6px solid var(--primary-color);
      opacity: 0.2;
    }
    30% {
      border-bottom: 0.9px solid var(--primary-color);
      opacity: 0.3;
    }
    40% {
      border-bottom: 1.2px solid var(--primary-color);
      opacity: 0.4;
    }
    50% {
      border-bottom: 1.5px solid var(--primary-color);
      opacity: 0.5;
    }
    60% {
      border-bottom: 1.8px solid var(--primary-color);
      opacity: 0.6;
    }
    70% {
      border-bottom: 2.1px solid var(--primary-color);
      opacity: 0.7;
    }
    80% {
      border-bottom: 2.4px solid var(--primary-color);
      opacity: 0.8;
    }
    90% {
      border-bottom: 2.7px solid var(--primary-color);
      opacity: 0.9;
    }
    to {
      border-bottom: 3px solid var(--primary-color);
      opacity: 1;
    }
  }
`;

export const Description = styled.a`
  font-size: 1.5rem;
  font-weight: 300;
`;
