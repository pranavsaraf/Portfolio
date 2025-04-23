import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto, 1fr);
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 5rem;
        }
      }

      h3 {
        margin-bottom: 2rem;
        font-size: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        font-size: 1.4rem;

        a {
          color: #fff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          flex-wrap: wrap;
        }
      }
    }
  }

  /* Medium Screens */
  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }

    h2 {
      font-size: 3.5rem;
    }
  }

  /* Small Screens */
  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }

    h2 {
      font-size: 3rem;
    }

    .project {
      padding: 1.6rem 1.2rem;

      h3 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1.3rem;
      }

      .tech-list {
        font-size: 1.2rem;
        gap: 1rem;
      }
    }
  }

  /* Extra Small Screens */
  @media (max-width: 480px) {
    h2 {
      font-size: 2.5rem;
    }

    .project {
      h3 {
        font-size: 1.6rem;
      }

      p {
        font-size: 1.2rem;
      }

      .tech-list {
        font-size: 1.1rem;
      }
    }
  }
`;
