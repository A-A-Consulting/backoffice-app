import { VideoFormController } from "./modules/video/videoForm/videoForm.controller";
import { LoginController } from "./modules/login/login.controller";

export const routes = [
  {
    path: "/",
    element: <LoginController />,
    children: {
      path: "/videos",
      element: <VideoFormController />,
    },
  },
];

//   errorElement: '',
//       children: [
//         {
//           path: 'auth',
//           children: authRoutes
//         }
//       ]
