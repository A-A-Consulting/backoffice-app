import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { VideoController } from "./modules/video/videoForm/videoForm.controller";
import { LoginController } from "./modules/login/login.controller";

function App() {
  return (
    <>
      <LoginController />
      <VideoController />
    </>
  );
}

export default App;
