import Sidebar from "../../components/sideBar/Sidebar";
import QRCard from "../../components/QrCode/QrCode";
import ProfileLinkCard from "../../components/ProfileLinkCard/ProfileLinkCard";
import SelectField from "../../components/SelectField/SelectField";
import InputField from "../../components/InputField";
import Button from "../../components/SubmitButton/SubmitButton";
import TopBar from "../../components/TopBar/TopBar";
import profilePic from "../../assets/profilePic.jpg";
import { useState } from "react";

export default function QRPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    <div className="flex-1 flex flex-col">

        <TopBar
            employeeName="Elena Thorne"
            designation="Enterprise Admin"
            profileImage={profilePic}
            onMenuClick={() => setSidebarOpen(true)}
        />
<main className="flex-1 p-6 pt-20 lg:p-10">
        <div className="grid lg:grid-cols-2 gap-5">

          {/* Left */}

        <div className="w-full max-w-md space-y-6">

            <QRCard
              employeeName="Arjun Mehta"
              designation="Senior Technical Consultant"
            />

            <ProfileLinkCard
              link="tarento.com/profile/arjun-mehta"
            />

          </div>

          {/* Right */}

          <div className="card p-8">

            <h2 className="text-3xl font-bold text-primary mb-8">

              Customize Your QR

            </h2>

            <SelectField
              label="IBU"
              options={[
                "Buy",
                "Build",
                "Mobility",
              ]}
            />

            <SelectField
              label="Industry"
              options={[
                "Automotive",
                "Healthcare",
                "Retail",
                "Finance",
              ]}
            />

            <InputField
              label="Company (Optional)"
              placeholder="Company"
            />

            <InputField
              label="QR Title (Optional)"
              placeholder="QR Title"
            />

            <div className="mt-8">

              <Button
                text="Generate & Save"
              />

            </div>

          </div>

        </div>

      </main>

    </div>
    </div>
  );
}