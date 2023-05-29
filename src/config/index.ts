export const API_DEFAULT_URL =
  process.env.REACT_APP_NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_CLOUD
    : process.env.REACT_APP_API_URL_LOCAL;
