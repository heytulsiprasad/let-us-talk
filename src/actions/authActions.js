import axios from "axios";
import { SET_CURRENT_USER } from "./types";

export const getSomeData = () => async (dispatch) => {
  const response = (
    await axios.get(
      "https://ytoai8fdih.execute-api.ap-south-1.amazonaws.com/test/message/Ishaan?age=19&crypto=TRX&fiat=INR&fiatAmt=10000"
    )
  ).data;

  dispatch({ type: SET_CURRENT_USER, payload: response });
};
