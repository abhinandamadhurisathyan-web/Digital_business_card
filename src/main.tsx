import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import "./index.css";

import RequireAdmin from "./components/RequireAdmin";
import Sample from "./pages/login/Sample";
import Login from "./pages/login/Login";
import QrPage from "./pages/QrPage/QrPage";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/dashboard/Dashboard";
import Analytics from "./pages/analytics/Analytics";
import Organization from "./pages/organization/Organization";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAdmin>
              <Dashboard />
            </RequireAdmin>
          }
        />
        <Route path="/qr-code" element={<QrPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route
          path="/organization"
          element={
            <RequireAdmin>
              <Organization />
            </RequireAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
