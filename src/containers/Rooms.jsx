import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  syncRoomsCollection,
  addNewRoom,
  deleteRoomStart,
} from "../actions/roomActions";

import { logoutUser } from "../actions/authActions";

import { RoomsContainer } from "../styles/Rooms.styles";
import Navbar from "../components/Navbar";
import Chatrooms from "../components/Chatrooms";

const Rooms = (props) => {
  useEffect(() => {
    props.syncRoomsCollection();
    // eslint-disable-next-line
  }, []);

  const createRoom = () => {
    let room = prompt("Give a name for your room:");
    if (room) props.addNewRoom(room);
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
    </RoomsContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  rooms: state.rooms,
});

const mapDispatchToProps = (dispatch) => ({
  syncRoomsCollection: () => dispatch(syncRoomsCollection()),
  addNewRoom: (roomName) => dispatch(addNewRoom(roomName)),
  deleteRoom: (id) => dispatch(deleteRoomStart(id)),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
