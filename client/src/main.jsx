import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";


import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>

    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#1E293B",
          color: "#fff",
          border: "1px solid #334155",
        },
      }}
    />
  </React.StrictMode>
);