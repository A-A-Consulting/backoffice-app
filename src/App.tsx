import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoginController } from "./modules/login/login.controller";
import { VideoLandingController } from "./modules/video/videoLanding/VideoLandingController";
import { SubscriptionLandingController } from "./modules/subscriptions/subscriptionLanding/SubscriptionLandingController";
// import { routes } from "./routes";
// const router = createBrowserRouter(routes);
import MiniDrawer from "./modules/sideBar/sidebar.view";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginController />} />
      <Route path="/dashboard" element={<MiniDrawer />}>
        <Route path="videos" element={<VideoLandingController />} />
        <Route path="priority" element={<SubscriptionLandingController />} />
      </Route>
    </Routes>
  );
}

export default App;
