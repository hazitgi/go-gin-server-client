import "bootstrap/dist/css/bootstrap.css";
import "@floating-ui/react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./routes/homePage";
import UserLogin from "./routes/login";
import ErrorPage from "./routes/error-pages";
import UserCreateListPage from "./routes/usersCreateListPage";
import SkillsCreateListPage from "./routes/skillsCreateListPage";
import UserDetailPage from "./routes/userDetailPage";
import SkillDetailPage from "./routes/skillDetailPage";
import SkillGroupCreateListPage from "./routes/skillGroupsListCreate";
import SkillGroupDetailPage from "./routes/skillGroupDetailPage";

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
