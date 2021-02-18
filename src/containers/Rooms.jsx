import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  createRoom,
  sendMessage,
  deleteRoom,
  deleteMessage,
  fetchRoomsInRealTime,
  fetchMessagesInRealTime,
} from "../actions/roomActions";

import { logoutUser } from "../actions/authActions";

import { RoomsContainer } from "../styles/Rooms.styles";
import Navbar from "../components/Navbar";
import Chatrooms from "../components/Chatrooms";

const Rooms = (props) => {
  useEffect(() => {
    props.fetchRoomsInRealTime();
    // eslint-disable-next-line
  }, []);

  const createRoom = () => {
    let room = prompt("Give a name for your room:");
    if (room) props.createRoom(room);
  };

  return (
    <RoomsContainer>
      <Navbar
        loading={props.auth.loading}
        email={props.auth.user.email}
        onLogout={props.logoutUser}
      />
      <Chatrooms
        loading={props.rooms.loadRooms}
        rooms={props.rooms.allRooms}
        createRoom={createRoom}
        deleteRoom={props.deleteRoom}
      />
      {/* <div>
            <form onSubmit={onFormSubmit}>
              <input
                type="text"
                value={message}
                onChange={inputChangeHandler}
                placeholder="Type here..."
              />
              <button type="button" onClick={onFormSubmit}>
                Send
              </button>
            </form>
          </div> */}
      {/* Messages */}
      {/* <h2>Messages</h2> */}
      {/* {!props.rooms.loadMessages ? (
            Object.keys(props.rooms.allMessages).map((key) => (
              <div key={key}>
                <h6>{props.rooms.allMessages[key].from}</h6>
                <p>{props.rooms.allMessages[key].message}</p>
                <button
                  onClick={props.deleteMessage.bind(this, selectedRoom, key)}
                >
                  Delete Message
                </button>
              </div>
            ))
          ) : (
            <h1>
              <i>Loading Messages...</i>
            </h1>
          )} */}
    </RoomsContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  rooms: state.rooms,
});

export default connect(mapStateToProps, {
  logoutUser,
  createRoom,
  sendMessage,
  deleteRoom,
  deleteMessage,
  fetchRoomsInRealTime,
  fetchMessagesInRealTime,
})(Rooms);
