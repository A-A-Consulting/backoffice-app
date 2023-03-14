import { Routes, Route } from 'react-router-dom';
import "./App.css";
import {  Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { LoginController } from "./modules/login/login.controller";
import { VideoLandingController } from "./modules/video/videoLanding/VideoLandingController";
// import { routes } from "./routes";
// const router = createBrowserRouter(routes);

function App() {
  // return <RouterProvider router={router} />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginController/>} />
        <Route path="/videos" element={<VideoLandingController/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
