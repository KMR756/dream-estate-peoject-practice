import RootLayout from "@/layouts/RootLayout";

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
]);
