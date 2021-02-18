import styled from "styled-components";

export const ChatWrapper = styled.section`
  padding: 2rem 1rem;
`;

export const ChatContainer = styled.main`
  position: relative;
  height: 100%;
  background: #fff;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  max-height: 45rem;
  min-height: 25rem;

  .chatName {
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    padding: 1rem 2rem;
    background: #87cfeb;
    color: white;
  }

  .chatBox {
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem 1.25rem;
    flex-grow: 1;
    scroll-behavior: smooth;
  }

  .chatForm {
    background: violet;
    padding: 2rem 1rem;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    display: flex;
    justify-content: space-between;

    input {
      width: 80%;
      outline: none;
      border: none;
      padding: 1rem;
      border-radius: 2rem;
    }

    button {
      width: 15%;
      outline: none;
      border: none;
      padding: 1rem;
      border-radius: 2rem;
      background: blueviolet;
      color: white;
      font-weight: bold;
      transition: background-color ease 0.2s;
      cursor: pointer;
    }
  }
`;

export const Message = styled.div`
  border-radius: 1rem;
  min-width: 15rem;
  max-width: 25rem;
  background: purple;
  color: white;
  padding: 1rem;
  margin-right: auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  > * + * {
    margin-top: 1rem;
  }
`;

export const MessageDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
