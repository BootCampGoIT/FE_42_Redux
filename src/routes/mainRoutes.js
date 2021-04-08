import { lazy } from "react";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage")),
    restricted: false,
    isPrivate: false,
  },
  {
    name: "Products",
    path: "/products",
    exact: true,
    component: lazy(() => import("../pages/ProductsPage")),
    restricted: false,
    isPrivate: true,
  },
  {
    name: "Sign Up",
    path: "/signup",
    exact: true,
    component: lazy(() => import("../pages/AuthPage")),
    restricted: true,
    isPrivate: false,
  },
  {
    name: "Sign In",
    path: "/signin",
    exact: true,
    component: lazy(() => import("../pages/AuthPage")),
    restricted: true,
    isPrivate: false,
  },
];

export { mainRoutes };
