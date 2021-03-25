import AuthForm from "../components/auth/AuthForm";
import CoursesPage from "../pages/CoursesPage";
import HomePage from "../pages/HomePage";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: HomePage,
    restricted: false,
  },
  {
    name: "Courses",
    path: "/courses",
    exact: true,
    component: CoursesPage,
    restricted: false,
  },
  {
    name: "Sign Up",
    path: "/signup",
    exact: true,
    component: AuthForm,
    restricted: true,
  },
  {
    name: "Sign In",
    path: "/signin",
    exact: true,
    component: AuthForm,
    restricted: true,
  },
];

export { mainRoutes };
