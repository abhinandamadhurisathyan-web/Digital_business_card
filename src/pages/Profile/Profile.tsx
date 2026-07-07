import { useState } from "react";
import { Pencil } from "lucide-react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileInfoCard from "../../components/ProfileInfoCard/ProfileInfoCard";
import ProfessionalLinksCard from "../../components/ProfessionalLinksCard/ProfessionalLinksCard";
import AboutCard from "../../components/AboutCard/AboutCard";
import Button from "../../components/SubmitButton/SubmitButton";
import profilePic from "../../assets/profilePic.jpg";

export default function Profile() {
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    // TODO: Call API here
    setEditing(false);
  };

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden scrollbar-hide px-4 sm:px-6 lg:px-8 py-4">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <ProfileHeader
          title="My Profile"
          subtitle="Update your professional identity and contact details."
          status="Approved"
        />
        <div className="flex justify-end">
          {!editing ? (
            <Button
              text="Edit"
              icon={<Pencil size={16} />}
              size="small"
              onClick={() => setEditing(true)}
            />
          ) : (
            <Button
              text="Save"
              size="small"
              onClick={handleSave}
            />
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-4 sm:mt-1 grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProfileInfoCard
            editing={editing}
            profileImage={profilePic}
            fullName="Alex Rivera"
            designation="Senior Technical Consultant"
            email="alex.rivera@tarento.com"
            phone="+91 9876543210"
            ibu="Build"
            location="Bengaluru, India"
          />
        </div>
        <ProfessionalLinksCard
          editing={editing}
          linkedin="https://linkedin.com/in/alexrivera"
          portfolio="https://alexrivera.dev"
        />
      </div>

      {/* About */}
      <div className="mt-6 sm:mt-8">
        <AboutCard
          editing={editing}
          about="Passionate Product Designer with over 8 years of experience in creating human-centric digital experiences. I specialize in bridging the gap between complex engineering requirements and intuitive user interfaces."
        />
      </div>

      {/* Footer */}
      <div className="mt-8 sm:mt-10 flex justify-center pb-4">
        <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row w-full sm:w-auto">
          <div className="w-full sm:w-52">
            <Button text="Save Changes" variant="secondary" size="large" />
          </div>
          <div className="w-full sm:w-64">
            <Button text="Submit" size="large" />
          </div>
        </div>
      </div>
    </div>
  );
}