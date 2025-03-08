import { lazy } from "react";
export const publicRoutes = [
  { path: "/", element: lazy(() => import("../pages/home/index.jsx")) },
  { path: "/profile" , element: lazy(() => import("../pages/profile/index.jsx"))},
];

export const protectedRoutes = [];
