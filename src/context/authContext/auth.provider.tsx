import React, { createContext, useEffect, useReducer } from "react";
import { authContextT } from "./auth.types";
import { authReducer } from "./auth.reducer";
import PropTypes from "prop-types";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { loging } from "../../modules/external-services/external-services";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router";
import axios, { AxiosRequestHeaders } from "axios";

const initialState: authContextT = {
  isAuthenticated: false,
  accessToken: null,
};

const AuthContext = createContext({
  ...initialState,
  method: "JWT",
  loginUser: (email: string, password: string) => Promise.resolve(),
  logoutUser: () => {},
});

interface authProviderPropsI {
  children: ReactJSXElement;
}

export const AuthProvider = (props: authProviderPropsI) => {
  const { children } = props;
  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const initialize = () => {
      const accessToken = Cookies.get("accessToken");
      if (!accessToken || !state.isAuthenticated) {
        if (location.pathname !== "/") {
          console.log("NO ESTAS LOGEADO CABEZA!!!");
        }
        dispatch({
          type: "LOGOUT",
          payload: null,
        });
        navigate("/");
      }
    };

    initialize();
  }, []);

  const loginUser = async (email: string, password: string) => {
    try {
      const apiResponse = await loging({
        email,
        password,
      });
      if (apiResponse.data !== null) {
        Cookies.set("accessToken", apiResponse.data);

        axios.interceptors.request.use(async (req) => {
          const accessToken = Cookies.get("accessToken");
          //@ts-ignore
          req.headers = {
            "Content-Type": "application/json",
            Accept: '"application/json, text/plain, */*"',
            Authorization: `Bearer ${accessToken}`,
          };

          return req;
        });

        navigate("/dashboard");
        return dispatch({
          type: "LOGIN",
          payload: {
            accessToken: apiResponse.data,
          },
        });
      } else {
        return dispatch({
          type: "LOGOUT",
          payload: null,
        });
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const logoutUser = async () => {
    Cookies.remove("accessToken");
    return dispatch({
      type: "LOGOUT",
      payload: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "JWT",
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
