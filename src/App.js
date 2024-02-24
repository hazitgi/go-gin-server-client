import "bootstrap/dist/css/bootstrap.css";
import "@floating-ui/react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/home";
import UserLogin from "./routes/login";
import ErrorPage from "./routes/error-pages";
import UserPage from "./routes/users";
import SkillPage from "./routes/skills";
import UserDetail from "./routes/userDetail";
import SkillDetailPage from "./routes/skillDetail";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <UserPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users/:userId/",
    element: <UserDetail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/skills",
    element: <SkillPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/skills/:skillId/",
    element: <SkillDetailPage />,
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
