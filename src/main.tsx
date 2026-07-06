import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import "./index.css";

import RequireAdmin from "./components/RequireAdmin";
import Sample from "./pages/login/Sample";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import QrPage from "./pages/QrPage/QrPage";
import Profile from "./pages/Profile/Profile";
import Mycard from "./pages/Mycard/Mycard";
import PublicCard from "./pages/PublicCard/Publiccard";
import QrLibrary from "./pages/QrLibrary/QrLibrary";

import EmployeeLayout from "./components/EmployeeLayout/EmployeeLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Analytics from "./pages/analytics/Analytics";
import Organization from "./pages/organization/Organization";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* Global Toast */}
      <Toaster richColors position="top-right" />

      <Routes>
        {/* Employee Layout */}
        <Route element={<EmployeeLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/qr-code" element={<QrPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-card" element={<Mycard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/qr-library" element={<QrLibrary />} />
        </Route>

        {/* Public Route */}
        <Route path="/card" element={<PublicCard />} />

        {/* Auth Routes */}
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
