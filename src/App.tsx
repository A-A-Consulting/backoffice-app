import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoginController } from "./modules/login/login.controller";
import { VideoLandingController } from "./modules/video/videoLanding/VideoLandingController";
import { SubscriptionLandingController } from "./modules/subscriptions/subscriptionLanding/SubscriptionLandingController";
import MiniDrawer from "./modules/sideBar/sidebar.view";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginController />} />
      <Route path="/dashboard" element={<MiniDrawer />}>
        <Route path="videos" element={<VideoLandingController />} />
        <Route
          path="subscripciones"
          element={<SubscriptionLandingController />}
        />
      </Route>
    </Routes>
  );
}

export default App;
