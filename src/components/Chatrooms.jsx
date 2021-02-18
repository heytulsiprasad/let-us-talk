import React from "react";
import styled from "styled-components";
import HashLoader from "react-spinners/HashLoader";

import {
  LoaderContainer,
  Button,
  Typography,
  StyledLink,
} from "./../styles/globalStyles";

const Wrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / span 1;
  padding: 2rem 1rem;
  align-self: center;
`;

const Container = styled.aside`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Topbar = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3333332b;
`;

const RoomContainer = styled.div`
  position: relative;
  width: 100%;
  color: #222;
  overflow-y: auto;
  min-height: 20rem;
`;

const Room = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  background: #fff;
  transition: background-color ease 0.2s;

  .info {
    text-decoration: none;
    cursor: pointer;
  }

  :hover {
    background: #87cfeb;
  }

  :last-of-type {
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
`;

const Chatrooms = (props) => {
  return (
    <Wrapper>
      <Container>
        <Topbar>
          <Typography as="h1" primary>
            Chatrooms
          </Typography>
          <Button small primary noMargin onClick={props.createRoom}>
            Add
          </Button>
        </Topbar>
        <RoomContainer>
          {!props.loading ? (
            Object.keys(props.rooms).map((key) => (
              <Room key={key}>
                <StyledLink
                  className="info"
                  to={`/conversation/${props.rooms[key].slug}`}
                >
                  <Typography as="h2" secondary>
                    {props.rooms[key].name}
                  </Typography>
                  <Typography as="h4" tertiary>
                    {new Date(props.rooms[key].timestamp).toLocaleTimeString()}
                    {",  "}
                    {new Date(props.rooms[key].timestamp).toDateString()}
                  </Typography>
                </StyledLink>
                <div>
                  <Button
                    small
                    danger
                    noMargin
                    onClick={props.deleteRoom.bind(this, key)}
                  >
                    X
                  </Button>
                </div>
              </Room>
            ))
          ) : (
            <LoaderContainer>
              <HashLoader loading color="#000" size={30} />
            </LoaderContainer>
          )}
        </RoomContainer>
      </Container>
    </Wrapper>
  );
};

export default Chatrooms;
