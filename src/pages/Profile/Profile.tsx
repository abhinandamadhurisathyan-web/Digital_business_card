import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileInfoCard from "../../components/ProfileInfoCard/ProfileInfoCard";
import ProfessionalLinksCard from "../../components/ProfessionalLinksCard/ProfessionalLinksCard";
import AboutCard from "../../components/AboutCard/AboutCard";

import Button from "../../components/SubmitButton/SubmitButton";

import profilePic from "../../assets/profilePic.jpg";

export default function Profile() {
  return (
    <>
      <ProfileHeader
        title="My Profile"
        subtitle="Update your professional identity and contact details."
        status="Approved"
      />

      {/* Main Content */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* Left - Basic Information */}
        <div className="xl:col-span-2">
          <ProfileInfoCard
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
            linkedin="https://linkedin.com/in/alexrivera"
            portfolio="https://alexrivera.dev"
          />

        </div>

      <div className="mt-8">
        <AboutCard
          about="Passionate Product Designer with over 8 years of experience in creating human-centric digital experiences. I specialize in bridging the gap between complex engineering requirements and intuitive user interfaces. At Tarento, I focus on the internal digital ecosystem, ensuring our tools are as powerful as they are beautiful. When I’m not pushing pixels, you’ll find me exploring organic architecture or hiking in the Western Ghats."
        />
      </div>

      {/* Footer Buttons */}

      <div className="mt-10 flex justify-center">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:w-52">
            <Button
              text="Save Changes"
              variant="secondary"
              size="large"
            />
          </div>

          <div className="w-full sm:w-64">
            <Button
              text="Submit"
              size="large"
            />
          </div>
        </div>
      </div>
    </>
  );
}