import styled from "styled-components";

export const SignupWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupContainer = styled.main`
  position: relative;
  width: 50%;
  padding: 2rem;
  min-height: 424px;
  background-color: #fff;
  border-radius: 1rem;
  background-color: rgba(31, 31, 71, 0.6);
  box-shadow: 0 3px 92px rgb(0 0 0 / 25%),
    inset 0 0 0 0.5px hsl(0deg 0% 100% / 15%);
  backdrop-filter: blur(18px);
  color: hsla(0, 0%, 100%, 0.7);

  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 70%;
  }

  @media (max-width: 500px) {
    width: 80%;
  }

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const SignupCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    align-items: center;

    h2 {
      font-size: 1rem;
      margin-right: 2rem;
    }
  }

  .fields {
    margin: 1rem 0;
  }

  input {
    outline: none;
    border: none;
    border-radius: 1rem;
    padding: 0.5rem;
    min-width: 12rem;
  }
`;

export const AuthHeading = styled.h1`
  text-align: center;
  margin: 1rem 0;
`;
