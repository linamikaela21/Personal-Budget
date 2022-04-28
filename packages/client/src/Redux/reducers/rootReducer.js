import { userContants, productContants } from "../utils/constants";

const initialState = {
  token: null,
  authenticate: false,
  error: null,
  message: "",
  user: {},
  operations: [],
  operation: {},
  operationFiltered: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case userContants.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };

    case userContants.SIGN_IN_FAIL:
      return { ...state, error: action.payload.error };

    case userContants.SIGN_UP_SUCCESS:
      return { ...state, message: action.payload.message };

    case userContants.SIGN_UP_FAIL:
      return { ...state, error: action.payload.error };

    case userContants.LOGOUT_SUCCESS:
      return (state = { ...initialState });

    case productContants.GET_OPERATIONS:
      return { ...state, operations: action.payload };

    case productContants.GET_OPERATION_BY_ID:
      return { ...state, operation: action.payload };

    case productContants.DELETE_OPERATION:
      return { ...state, operations: action.payload };

    case productContants.ADD_OPERATION:
      return { ...state, operations: action.payload };

    case productContants.UPDATE_OPERATION:
      return { ...state, operations: action.payload };

    case productContants.FILTER_BY_TYPE:
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
