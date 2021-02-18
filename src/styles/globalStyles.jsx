import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  width: max-content;
  padding: 0.75rem 2rem;
  outline: none;
  border: none;
  margin: 1rem;
  color: #fff;
  background: #000;
  border-radius: 2rem;
  cursor: pointer;
  transition: all ease 0.2s;

  :hover {
    background: #999;
  }

  ${(props) =>
    props.primary &&
    css`
      background: #0077ff;

      :hover {
        background: #0052af;
      }
    `}

  ${(props) =>
    props.danger &&
    css`
      background: #ff0000;

      :hover {
        background: #8d0000;
      }
    `}

  ${(props) =>
    props.small &&
    css`
      padding: 0.5rem 1rem;
    `}

  ${(props) =>
    props.noMargin &&
    css`
      margin: 0;
    `}
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FootNote = styled.h6`
  text-align: center;
  margin: 0.5rem 0;
  font-weight: lighter;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  font-weight: bolder;
  text-decoration: none;
`;

export const Typography = styled.p`
  ${(props) =>
    props.primary &&
    css`
      font-size: 1.5rem;
      font-weight: bold;
    `}

  ${(props) =>
    props.secondary &&
    css`
      font-size: 1rem;
      font-weight: normal;
    `}

  ${(props) =>
    props.tertiary &&
    css`
      font-size: 0.75rem;
      font-weight: lighter;
    `}

    ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
`;
