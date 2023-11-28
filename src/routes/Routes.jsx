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
import AllSubscribers from "../pages/Dashboard/Admin/AllSubscribers/AllSubscribers";
import BookingSlot from "../pages/BookingSlot/BookingSlot";
import AddNewClass from "../pages/Dashboard/Trainer/AddNewClass/AddNewClass";
import AddNewForumPost from "../pages/Dashboard/Shared/AddNewForumPost";
import Classes from "../pages/Classes/Classes";
import ClassDetails from "../pages/ClassDetails/ClassDetails";

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
        path: "classes",
        element: <Classes />,
      },
      {
        path: "/class-details/:id",
        element: <ClassDetails />,
        loader: ({ params }) => axiosPublic.get(`/class-details/${params.id}`),
      },
      {
        path: "booking-slot/:id/:day/:index",
        element: <BookingSlot />,
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
    children: [
      // admin routes
      {
        path: "subscribers",
        element: <AllSubscribers />,
      },
      // trainer routes
      {
        path: "add-class",
        element: <AddNewClass />,
      },
      {
        path: "add-forum",
        element: <AddNewForumPost />,
      },
    ],
  },
]);

export default router;
