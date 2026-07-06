
import { Mail, Lock } from "lucide-react";

import InputField from "../../components/InputField";
import Button from "../../components/SubmitButton/SubmitButton";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}

      <div className="flex justify-center items-center px-8 py-12">

        <div className="w-full max-w-md">

  

          <h1 className="text-5xl font-bold text-gray-800">
            Welcome back
          </h1>

          <p className="text-gray-500 mt-4 mb-10">
            Please enter your credentials to access the portal.
          </p>

          <InputField
            label="Email Address"
            placeholder="name@tarento.com"
            icon={<Mail size={18} />}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="••••••••"
            icon={<Lock size={18} />}
          />

          <div className="flex justify-between items-center mb-8">

            <label className="flex items-center gap-2 text-sm">

              <input type="checkbox" />

              Remember Me

            </label>

            <button className="text-sm text-green-700 hover:underline">
              Forgot Password?
            </button>

          </div>

          <Button onClick={() => navigate("/qr-code")} text="Sign In" />
          <p className="text-center mt-10 text-gray-500">

            Don't have an account?

            <Link
                to="/register"
                className="text-green-700 font-medium hover:underline"
            >
                Register
            </Link>

          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="hidden lg:flex bg-[#EFE8DD] justify-center items-center p-12">

        <div className="max-w-lg">

          <div className="bg-white rounded-3xl shadow-xl p-6">

          

          </div>

          <p className="mt-10 text-center italic text-3xl font-serif text-gray-700">

            "Enabling digital transformation
            through organic connectivity."

          </p>

          <p className="mt-5 text-center tracking-[0.3em] text-green-700 text-sm">

            GLOBAL DIGITAL SOLUTIONS

          </p>

        </div>

      </div>

    </div>
  );
}