import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "./../actions/authActions";
import { syncMessagesCollection } from "./../actions/roomActions";
import { ConversationContainer } from "./../styles/Conversation.styles";
import Navbar from "./../components/Navbar";
import Chats from "./../components/Chats";

const Conversation = (props) => {
  const conversationId = props.match.params.id;

  useEffect(() => {
    props.syncMessagesCollection(conversationId);
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

Conversation.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }),
  loadMessages: PropTypes.bool.isRequired,
  messages: PropTypes.object.isRequired,
  syncMessagesCollection: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  loadMessages: state.rooms.loadMessages,
  messages: state.rooms.allMessages,
});

const mapDispatchToProps = (dispatch) => ({
  syncMessagesCollection: (id) => dispatch(syncMessagesCollection(id)),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
