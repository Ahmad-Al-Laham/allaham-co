import { lazy } from "react";
export const publicRoutes = [
  { path: "/", element: lazy(() => import("../pages/home/index.jsx")) },
  {},
];

export const protectedRoutes = [];
