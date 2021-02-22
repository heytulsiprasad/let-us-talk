// import { takeEvery, put, call, take } from "redux-saga/effects";

// import { db } from "./../firebaseInit";
// import { GET_ROOMS } from "./../actions/types";
// import { setLoading } from "./../actions/roomActions";

// const getRoomsFromFirebase = async () => {
//   return await db.collection("rooms").onSnapshot(
//     async (querySnapshot) => {
//       let allRooms = {};

//       querySnapshot.forEach((doc) => {
//         allRooms = { ...allRooms, [doc.id]: doc.data() };
//       });

//       return allRooms;
//     },
//     (err) => {
//       throw new Error(err);
//     }
//   );
// };

// export function* getRoomsInRealTime() {
//   yield put(setLoading(true));

//   try {
//     const allRooms = yield call(getRoomsFromFirebase);
//     while (true) {
//       const response = yield take(allRooms);
//       console.log(response);
//     }
//   } catch (error) {
//     console.info(error);
//   }
// }

// export default function* watchRoomsActions() {
//   yield takeEvery(GET_ROOMS, getRoomsInRealTime);
// }
