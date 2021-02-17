import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { db } from "./../firebaseInit";
import {
  fetchAllRooms,
  sendMessage,
  fetchMessagesInRealTime,
} from "./../actions/roomActions";

const Dashboard = (props) => {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [message, setMessage] = useState("");

  const roomRef = db.collection("rooms");

  useEffect(() => {
    props.fetchAllRooms();
    // eslint-disable-next-line
  }, []);

  const createRoom = () => {
    let room = prompt("Give a name for your room:");
    roomRef.doc(room).set({ name: room, timestamp: Date.now() });
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
          {props.rooms.allRooms.map((room) => (
            <div key={room.id} onClick={() => roomClickHandler(room.id)}>
              <h4>{room.name || room.id}</h4>
            </div>
          ))}
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
          {Object.keys(props.rooms.allMessages).map((key) => (
            <div key={key}>
              <h6>{props.rooms.allMessages[key].from}</h6>
              <p>{props.rooms.allMessages[key].message}</p>
            </div>
          ))}
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
  fetchAllRooms,
  sendMessage,
  fetchMessagesInRealTime,
})(Dashboard);
