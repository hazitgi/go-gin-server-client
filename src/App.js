import "bootstrap/dist/css/bootstrap.css";
import "@floating-ui/react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/homePage";
import UserLogin from "./pages/login";
import ErrorPage from "./pages/error-pages";
import UserCreateListPage from "./pages/userCreateListPage";
import SkillsCreateListPage from "./pages/skillCreateListPage";
import UserDetailPage from "./pages/userDetailPage";
import SkillDetailPage from "./pages/skillDetailPage";
import SkillGroupCreateListPage from "./pages/skillGroupsListCreate";
import SkillGroupDetailPage from "./pages/skillGroupDetailPage";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <UserCreateListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users/:userId/",
    element: <UserDetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/skills",
    element: <SkillsCreateListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/skills/:skillId/",
    element: <SkillDetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/skill-groups",
    element: <SkillGroupCreateListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/skill-groups/:groupId/",
    element: <SkillGroupDetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <UserLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/", // return to home if already logged in
    element: <UserLogin />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
