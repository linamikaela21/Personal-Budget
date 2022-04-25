import { URL_ALL_OPERATIONS } from "./urlConstants";
import {
  GET_OPERATIONS,
  DELETE_OPERATION,
  ADD_OPERATION,
} from "./utils/constants";
import { fetchData } from "./fetch";

export const getOperations = () => async (dispatch) => {
  try {
    const operations = await fetchData(URL_ALL_OPERATIONS, "get");
    return dispatch({ type: GET_OPERATIONS, payload: operations });
  } catch (error) {
    console.log(error);
  }
};

export const deleteOperation = (id) => async (dispatch) => {
  try {
    const operations = await fetchData(`${URL_ALL_OPERATIONS}/${id}`, "delete");
    return dispatch({ type: DELETE_OPERATION, payload: operations });
  } catch (error) {
    console.log(error);
  }
};

export const addOperation = (operation) => async (dispatch) => {
  try {
    const operations = await fetch(URL_ALL_OPERATIONS, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(operation),
    });
    return dispatch({ type: ADD_OPERATION, payload: operations });
  } catch (error) {
    console.log(error);
  }
};
