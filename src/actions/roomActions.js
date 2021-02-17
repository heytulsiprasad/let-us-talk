import {
  SET_ROOMS,
  SET_MESSAGES,
  SET_ERRORS,
  SET_ROOMS_LOADING,
  // SET_MESSAGES_LOADING,
} from "./types";
import { db } from "./../firebaseInit";

// export const createRoom = (id) => (dispatch) => {
//   dispatch({ type: SET_ROOMS_LOADING, payload: true });

//   db.collection("rooms").doc(id)

// }

export const fetchAllRooms = () => (dispatch) => {
  dispatch({ type: SET_ROOMS_LOADING, payload: true });

  db.collection("rooms")
    .get()
    .then((querySnapshot) => {
      const tempDoc = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      dispatch({ type: SET_ROOMS_LOADING, payload: false });
      dispatch({ type: SET_ROOMS, payload: tempDoc });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: SET_ERRORS, payload: err });
    });
};

export const fetchMessagesInRealTime = (id) => (dispatch) => {
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

        dispatch({ type: SET_MESSAGES, payload: allMessages });
      },
      (err) => {
        console.error("Error getting documents: ", err);
        dispatch({ type: SET_ERRORS, payload: err });
      }
    );
};

export const sendMessage = (id, from, message) => (dispatch) => {
  db.collection(`rooms/${id}/messages`)
    .add({ from, message, timestamp: Date.now() })
    .then(() => console.log("Message sent"))
    .catch((err) => {
      console.error(err);
      dispatch({ type: SET_ERRORS, payload: err });
    });
};