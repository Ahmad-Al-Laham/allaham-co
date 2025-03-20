import { lazy } from "react";
import ProductsPage from "../pages/products/index.jsx";
import TexturesPage from "../pages/textures/index.jsx";
import Brands from "../pages/brands/Brands.jsx";
export const publicRoutes = [
  { path: "/", element: lazy(() => import("../pages/home/index.jsx")) },
  {
    path: "/profile",
    element: lazy(() => import("../pages/profile/index.jsx")),
  },
  {
    path: "/Contact",
    element: lazy(() => import("../pages/contact/index.jsx")),
  },
  {
    path: "/products",
    element: lazy(() => import("../pages/products/index.jsx")),
  },
  {
    path: "/products/:category/:type/:texture/:brand",
    element: ProductsPage,
  },
  {
    path: "/product/:id",
    element: lazy(() => import("../pages/product/index.jsx")),
  },
  {
    path: "/brands",
    element: lazy(() => import("../pages/brands/Brands.jsx")),
  },
  {
    path: "/textures",
    element: lazy(() => import("../pages/textures/index.jsx")),
  },
  {
    path: "/Categories",
    element: lazy(() => import("../pages/categories/index.jsx")),
  },
  {
    path: "/products/:search",
    element: ProductsPage,
  },

];

export const protectedRoutes = [];
