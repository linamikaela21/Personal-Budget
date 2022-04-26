import {
  GET_OPERATIONS,
  GET_OPERATION_BY_ID,
  DELETE_OPERATION,
  ADD_OPERATION,
  UPDATE_OPERATION,
  FILTER_BY_TYPE,
} from "../actions/utils/constants";
const initialState = {
  operations: [],
  operation: {},
  operationFiltered: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OPERATIONS:
      return { ...state, operations: action.payload };

    case GET_OPERATION_BY_ID:
      return { ...state, operation: action.payload };

    case DELETE_OPERATION:
      return { ...state, operations: action.payload };

    case ADD_OPERATION:
      return { ...state, operations: action.payload };

    case UPDATE_OPERATION:
      return { ...state, operations: action.payload };

    case FILTER_BY_TYPE:
      const allOperations = state.operations;
      const operationsFiltered =
        action.payload === "all"
          ? allOperations
          : allOperations.filter((elem) => elem.type === action.payload);
      return {
        ...state,
        operationFiltered: operationsFiltered,
      };

    default:
      return state;
  }
};

export default rootReducer;
