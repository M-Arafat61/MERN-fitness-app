import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Gallery from "../pages/Gallery/Gallery";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import TrainerProfile from "../pages/Trainer/TrainerProfile";
import TrainerDetails from "../pages/TrainerDetails/TrainerDetails";
import { axiosPublic } from "../hooks/useAxiosPublic";
import TrainerApplicationForm from "../pages/TrainerApplicationForm/TrainerApplicationForm";
import Forum from "../pages/Forum/Forum";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "trainer",
        element: <TrainerProfile />,
      },
      {
        path: "/trainer-details/:id",
        element: <TrainerDetails />,
        loader: ({ params }) =>
          axiosPublic.get(`/trainer-details/${params.id}`),
      },
      {
        path: "/trainer-application-form",
        element: <TrainerApplicationForm />,
      },
      {
        path: "/community",
        element: <Forum />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
  },
]);

export default router;
