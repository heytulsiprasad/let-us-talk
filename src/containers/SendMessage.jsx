import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { sendMessage } from "./../actions/roomActions";

const SendMessage = (props) => {
  const [message, setMessage] = useState("");

  const changeHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendToFirebase = (e) => {
    e.preventDefault();

    // Send to firebase
    message !== "" &&
      props.sendMessage(props.conversationId, props.email, message);

    setMessage(""); // clear
  };

  return (
    <div>
      <form className="chatForm" onSubmit={sendToFirebase}>
        <input
          type="text"
          value={message}
          placeholder="Type your message..."
          onChange={changeHandler}
        />
        <button type="submit" onClick={sendToFirebase}>
          Submit
        </button>
      </form>
    </div>
  );
};

SendMessage.propTypes = {
  email: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.auth.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (conversationId, email, message) =>
    dispatch(sendMessage(conversationId, email, message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage);
