import React, { useEffect } from "react";
import { connect } from "react-redux";

import { logoutUser } from "./../actions/authActions";
import { fetchMessagesInRealTime } from "./../actions/roomActions";
import { ConversationContainer } from "./../styles/Conversation.styles";
import Navbar from "./../components/Navbar";
import Chats from "./../components/Chats";

const Conversation = (props) => {
  const conversationId = props.match.params.id;

  useEffect(() => {
    props.fetchMessagesInRealTime(conversationId);
    // eslint-disable-next-line
  }, []);

  return (
    <ConversationContainer>
      <Navbar
        loading={props.auth.loading}
        email={props.auth.user.email}
        onLogout={props.logoutUser}
      />
      <Chats
        currentRoom={conversationId}
        loading={props.loadMessages}
        conversationId={conversationId}
        messages={props.messages}
      />
    </ConversationContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  loadMessages: state.rooms.loadMessages,
  messages: state.rooms.allMessages,
});

export default connect(mapStateToProps, {
  logoutUser,
  fetchMessagesInRealTime,
})(Conversation);
