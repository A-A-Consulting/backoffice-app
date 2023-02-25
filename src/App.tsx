import { Routes, Route } from 'react-router-dom';
import "./App.css";
import ResponsiveAppBar from "./modules/home/navbar.view";
import { VideoController } from "./modules/video/videoForm/videoForm.controller";
import { LoginController } from "./modules/login/login.controller";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ResponsiveAppBar />} />
      <Route path="/login" element={<LoginController />} />
      <Route path="/videos/upload" element={<VideoController />} />
    </Routes>
  );
}

export default App;
