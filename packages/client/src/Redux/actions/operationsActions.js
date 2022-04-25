import {
    URL_ALL_OPERATIONS
} from './urlConstants';
import {
  GET_OPERATIONS} from './utils/constants';
import { fetchData } from './fetch';

export const getOperations = () => async (dispatch) => {
  try {
    const operations = await fetchData(URL_ALL_OPERATIONS, 'get');
    return dispatch({ type: GET_OPERATIONS, payload: operations });
  } catch (error) {
    console.log(error);
  }
};

export const deleteOperation = (id) => async (dispatch) => {
  try {
    const operations = await fetchData(`${URL_ALL_OPERATIONS}/${id}`, 'delete');
    return dispatch({ type: GET_OPERATIONS, payload: operations });
  } catch (error) {
    console.log(error);
  }
};