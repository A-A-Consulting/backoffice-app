import { ReducerActionI } from "./auth.interface";
import { authContextT } from "./auth.types";

const handlers = {
  LOGIN: (state: authContextT, action: ReducerActionI) => {
    const { accessToken } = action.payload;
    console.log("🚀 ~ file: auth.reducer.tsx:7 ~ accessToken:", accessToken);
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
  console.log("🚀 ~ file: auth.reducer.tsx:24 ~ authReducer ~ action:", action);
  console.log("🚀 ~ file: auth.reducer.tsx:24 ~ authReducer ~ state:", state);

  //@ts-ignore
  return typeof handlers[action.type] === "function"
    ? //@ts-ignore
      (handlers[`${action.type}`] as Function)(state, action)
    : state;
};

export { authReducer };
