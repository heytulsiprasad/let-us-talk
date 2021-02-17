import {
  SET_ROOMS,
  SET_MESSAGES,
  SET_TOAST,
  SET_ROOMS_LOADING,
  SET_MESSAGES_LOADING,
} from "./types";
import { db } from "./../firebaseInit";

export const createRoom = (room) => (dispatch) => {
  dispatch({ type: SET_ROOMS_LOADING, payload: true });

  db.collection("rooms").doc(room).set({ name: room, timestamp: Date.now() });
};

export const fetchRoomsInRealTime = () => (dispatch) => {
  dispatch({ type: SET_ROOMS_LOADING, payload: true });

  db.collection("rooms").onSnapshot(
    (querySnapshot) => {
      let allRooms = {};

      querySnapshot.forEach((doc) => {
        allRooms = { ...allRooms, [doc.id]: doc.data() };
      });

      dispatch({ type: SET_ROOMS_LOADING, payload: false });
      dispatch({ type: SET_ROOMS, payload: allRooms });
    },
    (err) => {
      console.error("Error getting documents: ", err);
      dispatch({
        type: SET_TOAST,
        payload: { status: "error", message: err.message },
      });
    }
  );
};

export const fetchMessagesInRealTime = (id) => (dispatch) => {
  dispatch({ type: SET_MESSAGES_LOADING, payload: true });

  db.collection("rooms")
    .doc(id)
    .collection("messages")
    .orderBy("timestamp")
    .onSnapshot(
      (querySnapshot) => {
        let allMessages = {};

        querySnapshot.forEach((doc) => {
          allMessages = { ...allMessages, [doc.id]: doc.data() };
        });

        dispatch({ type: SET_MESSAGES_LOADING, payload: false });
        dispatch({ type: SET_MESSAGES, payload: allMessages });
      },
      (err) => {
        console.error("Error getting documents: ", err);
        dispatch({
          type: SET_TOAST,
          payload: { status: "error", message: err.message },
        });
      }
    );
};

export const sendMessage = (id, from, message) => (dispatch) => {
  db.collection(`rooms/${id}/messages`)
    .add({ from, message, timestamp: Date.now() })
    .then(() => console.log("Message sent"))
    .catch((err) => {
      console.error(err);
      dispatch({
        type: SET_TOAST,
        payload: { status: "error", message: err.message },
      });
    });
};

export const deleteRoom = (id) => (dispatch) => {
  dispatch({ type: SET_ROOMS_LOADING, payload: true });
  dispatch({ type: SET_MESSAGES_LOADING, payload: true });

  db.collection("rooms")
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: SET_ROOMS_LOADING, payload: false });
      dispatch({ type: SET_MESSAGES_LOADING, payload: false });
      dispatch({ type: SET_MESSAGES, payload: {} });

      dispatch({
        type: SET_TOAST,
        payload: { status: "info", message: "Room deleted" },
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_TOAST,
        payload: { status: "error", message: err.message },
      });
      dispatch({ type: SET_MESSAGES_LOADING, payload: false });
      dispatch({ type: SET_ROOMS_LOADING, payload: false });
    });
};

export const deleteMessage = (roomId, messageId) => (dispatch) => {
  db.collection("rooms")
    .doc(roomId)
    .collection("messages")
    .doc(messageId)
    .delete()
    .then(() => {
      dispatch({
        type: SET_TOAST,
        payload: { status: "info", message: "Message deleted" },
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_TOAST,
        payload: { status: "error", message: err.message },
      });
    });
};
