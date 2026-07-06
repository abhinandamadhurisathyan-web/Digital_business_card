import { useState } from "react";
import { Camera, Pencil } from "lucide-react";

import Button from "../SubmitButton/SubmitButton";
import InputField from "../InputField";
import SelectField from "../SelectField/SelectField";
import ProfileField from "../ProfileField/ProfileField";
import type { ProfileInfoCardProps } from "../ProfileField/Profile.types";

export default function ProfileInfoCard({
  profileImage,
  fullName,
  designation,
  email,
  phone,
  ibu,
  location,
}: ProfileInfoCardProps) {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    fullName,
    designation,
    email,
    phone,
    ibu,
    location,
  });

  return (
    <div className="card p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary">Basic Information</h2>
          <p className="mt-1 text-sm text-text-secondary">
            Update your professional identity and contact details.
          </p>
        </div>

        <Button
          text={editing ? "Save" : "Edit"}
          size="small"
          icon={<Pencil size={16} />}
          onClick={() => setEditing(!editing)}
        />
      </div>

      <div className="mt-10 grid gap-10 xl:grid-cols-[260px_minmax(0,1fr)] items-start">
        <div className="relative self-start">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-[1.5rem] object-cover border-4 border-primary shadow-sm"
          />

          {editing && (
            <button
              type="button"
              className="absolute -bottom-1 -right-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md"
            >
              <Camera size={18} />
            </button>
          )}
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {editing ? (
            <>
              <InputField
                label="Full Name"
                value={profile.fullName}
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
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    location: e.target.value,
                  })
                }
              />
            </>
          ) : (
            <>
              <ProfileField label="Full Name" value={profile.fullName} />
              <ProfileField label="Designation" value={profile.designation} />
              <ProfileField label="Email Address" value={profile.email} />
              <ProfileField label="Phone Number" value={profile.phone} />
              <ProfileField label="IBU" value={profile.ibu} />
              <ProfileField label="Location" value={profile.location} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
