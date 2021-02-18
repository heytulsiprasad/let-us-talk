import React from "react";
import HashLoader from "react-spinners/HashLoader";

import { LoaderContainer } from "../styles/globalStyles";
import {
  ChatWrapper,
  ChatContainer,
  Message,
  MessageDetails,
} from "./../styles/Chats.styles";
import { Typography } from "./../styles/globalStyles";
import SendMessage from "../containers/SendMessage";

const Chats = (props) => {
  return (
    <ChatWrapper>
      <ChatContainer>
        {!props.loading ? (
          <>
            <div className="chatName">
              <Typography center primary as="h1">
                {props.currentRoom}
              </Typography>
            </div>
            <div className="chatBox">
              {Object.keys(props.messages).map((key) => (
                <MessageBox
                  key={key}
                  from={props.messages[key].from}
                  message={props.messages[key].message}
                  timestamp={props.messages[key].timestamp}
                />
              ))}
            </div>
            <SendMessage conversationId={props.conversationId} />
          </>
        ) : (
          <LoaderContainer>
            <HashLoader loading color="#000" size={25} />
          </LoaderContainer>
        )}
      </ChatContainer>
    </ChatWrapper>
  );
};

export default Chats;

const MessageBox = (props) => {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current.scrollIntoView();
  }, []);

  return (
    <Message ref={ref}>
      <MessageDetails>
        <Typography tertiary as="h4">
          {props.from}
        </Typography>
        <Typography tertiary as="h6">
          {new Date(props.timestamp).toLocaleTimeString()}
        </Typography>
      </MessageDetails>
      <Typography secondary as="p">
        {props.message}
      </Typography>
    </Message>
  );
};
