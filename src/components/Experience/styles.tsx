import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .experiences {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
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
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;

        a {
          color: #ffff;
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
        }
      }
    }

    button {
      margin-top: 12px;
      padding: 8px 16px;
      background-color: rgb(14, 13, 13);
      color: white;
      border: none;
      border-radius: 5px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    button:hover {
      background-color: #0056b3;
    }
  }

  /* Responsive Layouts */
  @media (max-width: 1024px) {
    .experiences {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }

    .experiences {
      grid-template-columns: 1fr;
    }

    .project {
      padding: 1.5rem 1rem;

      h3 {
        font-size: 1.6rem;
      }

      p {
        font-size: 1.3rem;
      }

      .tech-list {
        flex-wrap: wrap;
        font-size: 1.2rem;
        gap: 1rem;
      }

      button {
        font-size: 1rem;
        padding: 6px 12px;
      }
    }
  }

  @media (max-width: 480px) {
    .project {
      h3 {
        font-size: 1.4rem;
      }

      p {
        font-size: 1.2rem;
      }

      .tech-list {
        gap: 0.8rem;
      }

      button {
        padding: 6px 10px;
        font-size: 0.9rem;
      }
    }
  }
`;
