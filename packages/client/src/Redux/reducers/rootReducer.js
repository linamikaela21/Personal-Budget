 import {
  GET_OPERATIONS
 } from '../actions/utils/constants';
const initialState = {
  operations: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OPERATIONS:
      return { ...state, operations: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
