import EmployeeLayout from "../../components/EmployeeLayout/EmployeeLayout";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileInfoCard from "../../components/ProfileInfoCard/ProfileInfoCard";
import ProfessionalLinksCard from "../../components/ProfessionalLinksCard/ProfessionalLinksCard";
import AboutCard from "../../components/AboutCard/AboutCard";

import Button from "../../components/SubmitButton/SubmitButton";

import profilePic from "../../assets/profilePic.jpg";

export default function Profile() {
  return (
    <EmployeeLayout>

      <ProfileHeader
        title="My Profile"
        subtitle="Update your professional identity and contact details."
        status="Approved"
      />

      {/* Main Content */}

      <div className="max-w-5xl mx-auto space-y-8">

          <ProfileInfoCard
            profileImage={profilePic}
            fullName="Alex Rivera"
            designation="Senior Technical Consultant"
            email="alex.rivera@tarento.com"
            phone="+91 9876543210"
            ibu="Build"
            location="Bengaluru"
          />
            <AboutCard
              about="Passionate technology consultant with over 8 years of experience delivering enterprise digital transformation initiatives across cloud, AI, and customer experience domains. Experienced in leading cross-functional teams and building scalable digital products."
            />

          <ProfessionalLinksCard
            linkedin="https://linkedin.com/in/alexrivera"
            github="https://github.com/alexrivera"
            portfolio="https://alexrivera.dev"
          />

        </div>

      {/* Footer Buttons */}

      <div className="mt-10 flex flex-col sm:flex-row justify-end gap-4">

        <div className="sm:w-52">
          <Button
            text="Save Changes"
            variant="secondary"
            size="large"
          />
        </div>

        <div className="sm:w-64">
          <Button
            text="Submit for Approval"
            size="large"
          />
        </div>

      </div>

    </EmployeeLayout>
  );
}