import { URL_ALL_OPERATIONS } from "./urlConstants";
import {
  GET_OPERATIONS,
  GET_OPERATION_BY_ID,
  DELETE_OPERATION,
  ADD_OPERATION,
  UPDATE_OPERATION,
  FILTER_BY_TYPE
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

export const getOperationById = (id = '') => async (dispatch) => {
  try {
    const operation = await fetchData(`${URL_ALL_OPERATIONS}/${id}`, "get");
    return dispatch({ type: GET_OPERATION_BY_ID, payload: operation });
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

export const updateOperation = (id, operation) => async (dispatch) => {
  console.log(operation);
  try {
    console.log("updateOperationACTION", id, operation);
    const updateOperation = await fetch(
      `${URL_ALL_OPERATIONS}/${id}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(operation),
      }
    );
   return dispatch({ type: UPDATE_OPERATION, payload: updateOperation });
  } catch (error) {
    console.log(error);
  }
};

export const filterProductsByType = (OperationType) => {
  return {
    type: FILTER_BY_TYPE,
    payload: OperationType
  };
}