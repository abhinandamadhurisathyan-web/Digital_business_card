import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import "./index.css";

import App from "./App";
import Sample from "./pages/login/Sample";
import Login from "./pages/login/Login";
import QrPage from "./pages/QrPage/QrPage";
import Profile from "./pages/Profile/Profile";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/login" element={<Login />} />
        <Route path="/qr-code" element={<QrPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    </BrowserRouter>
  </StrictMode>
);