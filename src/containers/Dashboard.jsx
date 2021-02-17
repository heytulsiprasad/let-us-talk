import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  createRoom,
  sendMessage,
  deleteRoom,
  deleteMessage,
  fetchRoomsInRealTime,
  fetchMessagesInRealTime,
} from "./../actions/roomActions";

const Dashboard = (props) => {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    props.fetchRoomsInRealTime();
    // eslint-disable-next-line
  }, []);

  const createRoom = () => {
    let room = prompt("Give a name for your room:");

    if (room) props.createRoom(room);
  };

  // Whenever selected room is changed
  useEffect(() => {
    if (selectedRoom) {
      props.fetchMessagesInRealTime(selectedRoom);
    }

    // eslint-disable-next-line
  }, [selectedRoom]);

  const roomClickHandler = (id) => {
    setSelectedRoom(id);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    // Send to firebase
    message !== "" &&
      props.sendMessage(selectedRoom, props.auth.user.email, message);
    setMessage(""); // clear
  };

  const inputChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={createRoom}>Create Room</button>
      {/* Available rooms */}
      <div>
        <h2>Showing all available rooms</h2>
        <div>
          {!props.rooms.loadRooms ? (
            Object.keys(props.rooms.allRooms).map((key) => (
              <div key={key}>
                <h4 onClick={() => roomClickHandler(key)}>
                  {props.rooms.allRooms[key].name}
                </h4>
                <p>{props.rooms.allRooms[key].timestamp}</p>
                <button onClick={props.deleteRoom.bind(this, key)}>
                  Delete
                </button>
              </div>
            ))
          ) : (
            <h2>
              <i>Loading Rooms...</i>
            </h2>
          )}
        </div>
        {/* Chat Container */}
        <div>
          {/* Input */}
          <div>
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
          </div>
          {/* Messages */}
          <h2>Messages</h2>
          {!props.rooms.loadMessages ? (
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
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  rooms: state.rooms,
});

export default connect(mapStateToProps, {
  createRoom,
  sendMessage,
  deleteRoom,
  deleteMessage,
  fetchRoomsInRealTime,
  fetchMessagesInRealTime,
})(Dashboard);
