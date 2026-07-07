import { useState, useRef } from "react";
import { Camera } from "lucide-react";

import InputField from "../InputField";
import SelectField from "../SelectField/SelectField";
import type { ProfileInfoCardProps } from "../ProfileField/Profile.types";

interface Props extends ProfileInfoCardProps {
  editing: boolean;
}

export default function ProfileInfoCard({
  profileImage,
  fullName,
  designation,
  email,
  phone,
  ibu,
  location,
  editing,
}: Props) {
  const [profile, setProfile] = useState({
    fullName,
    designation,
    email,
    phone,
    ibu,
    location,
  });

  const [image, setImage] = useState(profileImage);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Preview selected image
    setImage(URL.createObjectURL(file));

    // Later you can upload this file
    console.log(file);
  };

  return (
    <div className="card p-5 sm:p-6 lg:p-8">
        {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-primary">
          Basic Information
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          Update your professional identity and contact details.
        </p>
      </div>

  <div className="mt-10 grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] items-start">        
    {/* Profile Image */}
        <div className="relative mx-auto lg:mx-0 self-start">
          <img
            src={image}
            alt="Profile"
            className="h-32 w-32 sm:h-36 sm:w-36 xl:h-40 xl:w-40 rounded-[1.5rem] border-4 border-primary object-cover shadow-sm"          />

          {editing && (
            <>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute -bottom-0 -right-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md hover:bg-primary/90 transition"
              >
                <Camera size={18} />
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </>
          )}
        </div>

        {/* Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
            label="Full Name"
            value={profile.fullName}
            disabled={!editing}
            onChange={(e) =>
              setProfile({
                ...profile,
                fullName: e.target.value,
              })
            }
          />

          <InputField
            label="Designation"
            value={profile.designation}
            disabled={true}
            onChange={(e) =>
              setProfile({
                ...profile,
                designation: e.target.value,
              })
            }
          />

          <InputField
            label="Email Address"
            value={profile.email}
            disabled={!editing}
            onChange={(e) =>
              setProfile({
                ...profile,
                email: e.target.value,
              })
            }
          />

          <InputField
            label="Phone Number"
            value={profile.phone}
            disabled={!editing}
            onChange={(e) =>
              setProfile({
                ...profile,
                phone: e.target.value,
              })
            }
          />

          <SelectField
            label="IBU"
            value={profile.ibu}
            disabled={!editing}
            options={["Buy", "Build", "Mobility"]}
            onChange={(e) =>
              setProfile({
                ...profile,
                ibu: e.target.value,
              })
            }
          />

          <InputField
            label="Location"
            value={profile.location}
            disabled={!editing}
            onChange={(e) =>
              setProfile({
                ...profile,
                location: e.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}