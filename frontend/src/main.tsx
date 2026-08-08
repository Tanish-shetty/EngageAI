import React from "react";
import ReactDOM from "react-dom/client";

import { Toaster } from "sonner";

import { AuthProvider } from "@/context/AuthContext";

import AppRouter from "@/app/router";
import "./styles/print.css";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <AuthProvider>
  <AppRouter />

  <Toaster
    richColors
    position="top-right"
    theme="dark"
  />
</AuthProvider>
);