import AdminLayout from "@/layouts/AdminLayout";
import RootLayout from "@/layouts/RootLayout";
import AdminHome from "@/pages/admin/adminHome/AdminHome";
import UserList from "@/pages/admin/users/UserList";

import AboutUs from "@/pages/public/about/AboutUs";
import Home from "@/pages/public/home/Home";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: AboutUs,
      },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: AdminHome,
      },
      {
        path: "users",
        Component: UserList,
      },
    ],
  },
]);
