import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./routes/AppRoutes.tsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>,
);
