import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Camera,
  User,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Lock,
  ChevronDown,
  LinkIcon,
} from "lucide-react";

import InputField from "../../components/InputField";
import Button from "../../components/SubmitButton/SubmitButton";

export default function Register() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="card w-full max-w-4xl overflow-hidden">

        {/* Content */}

        <div className="p-8 md:p-10">

          {/* Logo */}

          <div className="flex justify-center">
            
          </div>

          {/* Heading */}

          <h1 className="text-center text-4xl font-bold text-primary mt-6">
            Create Your Digital Profile
          </h1>

          {/* Profile Photo */}

          <div className="flex flex-col items-center mt-8">

            <button
              type="button"
              className="
              w-24
              h-24
              rounded-full
              border-2
              border-dashed
              border-border
              bg-surface-container
              flex
              items-center
              justify-center
              hover:border-primary
              transition
              "
            >
              <Camera
                size={30}
                className="text-text-secondary"
              />
            </button>

            <span className="text-sm text-text-secondary mt-2">
              Profile Photo
            </span>

          </div>

          {/* Form */}

          <form className="mt-8">

            {/* First Row */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <InputField
                label="Full Name"
                placeholder="John Doe"
                icon={<User size={18} />}
              />

              <InputField
                label="Designation"
                placeholder="Senior Software Engineer"
                icon={<Briefcase size={18} />}
              />

            </div>

            {/* Second Row */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

              <InputField
                label="Company Email"
                type="email"
                placeholder="john.doe@tarento.com"
                icon={<Mail size={18} />}
              />

              <InputField
                label="Phone Number"
                placeholder="+91 98765 43210"
                icon={<Phone size={18} />}
              />

            </div>

            {/* Third Row */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

              {/* Location */}

              <div>

                <label className="block text-sm font-medium text-text mb-2">
                  Working Location
                </label>

                <div className="flex items-center border border-border rounded-button px-4 py-3 bg-surface-container">

                  <MapPin
                    size={18}
                    className="text-text-secondary mr-3"
                  />

                  <select
                    className="flex-1 bg-transparent outline-none text-text"
                  >
                    <option>Select location</option>
                    <option>Bangalore</option>
                    <option>Chennai</option>
                    <option>Kochi</option>
                    <option>Hyderabad</option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="text-text-secondary"
                  />

                </div>

              </div>

              <InputField
                label="LinkedIn Profile"
                placeholder="linkedin.com/in/username"
                icon={<LinkIcon size={18} />}
              />

            </div>

            {/* Description */}

            <div className="mt-5">

              <label className="block text-sm font-medium text-text mb-2">
                Short Professional Description
              </label>

              <textarea
                rows={4}
                placeholder="Briefly describe your expertise and role..."
                className="
                w-full
                rounded-button
                border
                border-border
                bg-surface-container
                px-4
                py-3
                outline-none
                resize-none
                focus:border-primary
                "
              />

            </div>

            {/* Other Contact */}

            <div className="mt-5">

              <label className="block text-sm font-medium text-text mb-2">
                Other Contact Link (Optional)
              </label>

              <input
                type="text"
                placeholder="Portfolio, Twitter, or Website"
                className="
                w-full
                rounded-button
                border
                border-border
                bg-surface-container
                px-4
                py-3
                outline-none
                focus:border-primary
                "
              />

            </div>

            {/* Password */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

              <InputField
                label="Password"
                type="password"
                placeholder="••••••••"
                icon={<Lock size={18} />}
              />

              <InputField
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
                icon={<Lock size={18} />}
              />

            </div>

            {/* Button */}

            <div className="mt-8">

              <Button onClick={() => navigate("/login")} text="Register" />

            </div>

          </form>

        </div>

        {/* Footer */}

        <div className="bg-surface-container py-5">

          <p className="text-center text-text-secondary">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-primary font-semibold hover:underline"
            >
              Log In
            </Link>

          </p>

        </div>

      </div>
    </div>
  );
}