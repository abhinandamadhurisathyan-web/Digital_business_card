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

      {/* Header */}

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold text-primary">
          Basic Information
        </h2>

        <Button
          text={editing ? "Save" : "Edit"}
          size="small"
          icon={<Pencil size={16} />}
          onClick={() => setEditing(!editing)}
        />

      </div>

      {/* Avatar */}

      <div className="mt-8 flex flex-col items-center">

        <div className="relative">

          <img
            src={profileImage}
            alt=""
            className="w-32 h-32 rounded-full object-cover border-4 border-primary"
          />

          {editing && (

            <button
              className="
                absolute
                bottom-0
                right-0
                p-2
                rounded-full
                bg-primary
                text-white
              "
            >
              <Camera size={18}/>
            </button>

          )}

        </div>

        <h3 className="mt-4 text-2xl font-semibold">
          {profile.fullName}
        </h3>

        <p className="text-text-secondary">
          {profile.designation}
        </p>

      </div>

      {/* Fields */}

      <div className="grid md:grid-cols-2 gap-6 mt-10">

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
      label="Email"
      value={profile.email}
      onChange={(e) =>
        setProfile({
          ...profile,
          email: e.target.value,
        })
      }
    />

    <InputField
      label="Phone"
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
    <ProfileField
      label="Full Name"
      value={profile.fullName}
    />

    <ProfileField
      label="Email"
      value={profile.email}
    />

    <ProfileField
      label="Phone"
      value={profile.phone}
    />

    <ProfileField
      label="IBU"
      value={profile.ibu}
    />

    <ProfileField
      label="Location"
      value={profile.location}
    />
  </>
)}

      </div>

    </div>
  );
}