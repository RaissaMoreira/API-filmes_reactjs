import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem 0;

  h1 {
    margin: 3rem 0;
    color: #6654da;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 300px;
    border-radius: 0.5rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
  }

  button {
    background-color: #6654da;
    color: white;
    cursor: pointer;

    font-weight: bold;
    font-size: 100%;
    border: none;

    border-radius: 1rem;
    padding: 0.8rem 2rem;
    margin-top: 1rem;

    transition: all 0.3s;
  }

  button:hover {
    background-color: #5848c2;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
  }

  .release-date {
    opacity: 0.5;
  }


  @media screen and (max-width: 700px) {
    h1 {
      margin: 3rem auto;
    }

    .movie {
      flex-direction: column;
    }

    .details {
      align-items: center;
    }

    .details {
      margin-left: 0;
      max-width: 100%;
    }

    span {
      text-align: justify;
    }
  }
`