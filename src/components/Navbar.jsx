import React from "react";
import styled from "styled-components";
import HashLoader from "react-spinners/HashLoader";

import { LoaderContainer } from "../styles/globalStyles";
import { Button, Typography, StyledLink } from "../styles/globalStyles";

const Wrapper = styled.div`
  padding: 2rem 1rem;
  align-self: center;
`;

const Container = styled.div`
  position: relative;
  padding: 1rem 2rem;
  min-height: 6rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Nav = styled.nav`
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    list-style-position: inside;
    align-items: center;
  }
`;

const Navbar = (props) => {
  return (
    <Wrapper>
      <Container>
        {!props.loading ? (
          <Nav>
            <ul>
              <li>
                <Button small primary>
                  <StyledLink to="/">Rooms</StyledLink>
                </Button>
              </li>
              <li>
                <Typography as="h1" secondary>
                  {props.email}
                </Typography>
              </li>
              <li>
                <Button small danger onClick={props.onLogout}>
                  Logout
                </Button>
              </li>
            </ul>
          </Nav>
        ) : (
          <LoaderContainer>
            <HashLoader loading color="#000" size={25} />
          </LoaderContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default Navbar;
