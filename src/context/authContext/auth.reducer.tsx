import { ReducerActionI } from "./auth.interface";
import { authContextT } from "./auth.types";

const handlers = {
  LOGIN: (state: authContextT, action: ReducerActionI) => {
    const { accessToken } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      accessToken,
    };
  },
  LOGOUT: (state: authContextT, action: ReducerActionI) => {
    return {
      ...state,
      isAuthenticated: false,
      accessToken: null,
    };
  },
};

const authReducer = (state: authContextT, action: ReducerActionI) => {
  //@ts-ignore
  return typeof handlers[action.type] === "function"
    ? //@ts-ignore
      (handlers[`${action.type}`] as Function)(state, action)
    : state;
};

export { authReducer };
