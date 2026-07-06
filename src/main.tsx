import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import "./index.css";

import App from "./App";
import Sample from "./pages/login/Sample";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import QrPage from "./pages/QrPage/QrPage";
import Profile from "./pages/Profile/Profile";
import Mycard from "./pages/Mycard/Mycard";
import PublicCard from "./pages/PublicCard/Publiccard";
import QrLibrary from "./pages/QrLibrary/QrLibrary";

import EmployeeLayout from "./components/EmployeeLayout/EmployeeLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* Global Toast */}
      <Toaster richColors position="top-right" />

      <Routes>
        {/* Employee Layout */}
        <Route element={<EmployeeLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/qr-code" element={<QrPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-card" element={<Mycard />} />
          <Route path="/qr-library" element={<QrLibrary />} />
        </Route>

        {/* Public Route */}
        <Route path="/card" element={<PublicCard />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);