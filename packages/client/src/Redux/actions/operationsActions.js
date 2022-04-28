import { URL_ALL_OPERATIONS } from "../utils/urlConstants";
import { productContants } from "../utils/constants";
import { fetchData } from "./fetch";

export const getOperations = (userEmail) => async (dispatch) => {
  try {
    const operations = await fetchData({
      url: URL_ALL_OPERATIONS,
      method: "post",
      body: { userEmail },
    });
    console.log("GET OPERATION ACTION", operations);
    return dispatch({
      type: productContants.GET_OPERATIONS,
      payload: operations,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOperationById =
  (id = "") =>
  async (dispatch) => {
    try {
      const operation = await fetchData({
        url: `${URL_ALL_OPERATIONS}/${id}`,
        method: "get",
      });
      return dispatch({
        type: productContants.GET_OPERATION_BY_ID,
        payload: operation,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteOperation = (id) => async (dispatch) => {
  try {
    const operations = await fetchData({
      url: `${URL_ALL_OPERATIONS}/${id}`,
      method: "delete",
    });
    return dispatch({
      type: productContants.DELETE_OPERATION,
      payload: operations,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addOperation = (operation) => async (dispatch) => {
  try {
    const newOperation = await fetchData({
      url: `${URL_ALL_OPERATIONS}/new`,
      method: "post",
      body: {...operation},
    });
    return dispatch({
      type: productContants.ADD_OPERATION,
      payload: newOperation,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateOperation = (id, operation) => async (dispatch) => {
  console.log(operation);
  try {
    const updateOperation = await fetchData({
      url: `${URL_ALL_OPERATIONS}/${id}`,
      method: "post",
      body: operation,
      params: id,
    });
    return dispatch({
      type: productContants.UPDATE_OPERATION,
      payload: updateOperation,
    });
  } catch (error) {
    console.log(error);
  }
};

export const filterProductsByType = (OperationType) => {
  return {
    type: productContants.FILTER_BY_TYPE,
    payload: OperationType,
  };
};
