
import { useState } from "react";
import { Mail, Lock } from "lucide-react";

import InputField from "../../components/InputField";
import Button from "../../components/SubmitButton/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { isAdminEmail, setAdminSession } from "../../lib/adminSession";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleSignIn() {
    if (isAdminEmail(email)) {
      setAdminSession(email);
      navigate("/dashboard");
      return;
    }

    navigate("/qr-code");
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_35%),linear-gradient(135deg,_#f8fbf7_0%,_#ffffff_100%)] p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl overflow-hidden rounded-[32px] border border-gray-200/70 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)] lg:grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex items-center justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Welcome back
              </h1>
              <p className="mt-3 text-sm text-gray-500 sm:text-base">
                Please enter your credentials to access the portal.
              </p>
            </div>

            <div className="space-y-5">
              <InputField
                label="Email Address"
                placeholder="name@tarento.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                icon={<Mail size={18} />}
              />

              <InputField
                label="Password"
                type="password"
                placeholder="••••••••"
                icon={<Lock size={18} />}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-600" />
                Remember Me
              </label>

              <button className="text-sm font-medium text-green-700 transition hover:underline">
                Forgot Password?
              </button>
            </div>

            <div className="mt-8">
              <Button onClick={handleSignIn} text="Sign In" size="full" />
            </div>

            <p className="mt-8 text-center text-sm text-gray-500 sm:mt-10">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-green-700 transition hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden lg:flex relative items-center justify-center bg-[#EFE8DD] px-10 py-14 xl:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_60%)]" />
          <div className="relative max-w-lg text-center">
            <p className="text-3xl font-serif leading-relaxed text-gray-700 xl:text-4xl">
              “Enabling digital transformation through organic connectivity.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
