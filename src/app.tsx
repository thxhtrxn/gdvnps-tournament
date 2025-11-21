import { router } from "./router";
import { RouterProvider } from "@tanstack/solid-router";

import "normalize.css";
import "animate.css";
import "./app.scss";

export default function App() {
  return <RouterProvider router={router} />;
}
