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
import AppliedTrainer from "../pages/Dashboard/Admin/AppliedTrainer/AppliedTrainer";
import AllTrainers from "../pages/Dashboard/Admin/AllTrainers/AllTrainers";
import ManageSlots from "../pages/Dashboard/Trainer/ManageSlots/ManageSlots";
import ActivityLog from "../pages/Dashboard/Member/ActivityLog/ActivityLog";
import RecommendedClasses from "../pages/Dashboard/Member/RecommendedClasses/RecommendedClasses";
import ProfileSettings from "../pages/Dashboard/Member/ProfileSettings/ProfileSettings";
import Payment from "../components/Dashboard/Admin/TrainerPayment/Payment";
import Balance from "../pages/Dashboard/Admin/Balance/Balance";
import ManageMember from "../pages/Dashboard/Trainer/ManageMember/ManageMember";

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
      {
        path: "trainer-applications",
        element: <AppliedTrainer />,
      },
      {
        path: "trainers",
        element: <AllTrainers />,
      },
      {
        path: "trainer-payment/:id",
        element: <Payment />,
        loader: ({ params }) => axiosPublic.get(`trainer-details/${params.id}`),
      },
      {
        path: "balance",
        element: <Balance />,
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
      {
        path: "manage-slots",
        element: <ManageSlots />,
      },
      {
        path: "manage-member",
        element: <ManageMember />,
      },
      // member routes
      {
        path: "activity",
        element: <ActivityLog />,
      },
      {
        path: "recommended-classes",
        element: <RecommendedClasses />,
      },
      {
        path: "settings",
        element: <ProfileSettings />,
      },
    ],
  },
]);

export default router;
