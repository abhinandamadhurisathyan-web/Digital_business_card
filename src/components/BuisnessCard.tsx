import TarentoLogo from "../assets/Tarento-logo.svg";
import ProfileImage from "../assets/profile.png";

import type { OrganizationSettings } from "../types/organization";
import { defaultOrganizationSettings } from "../data/defaultOrganization";
import { Globe, Map } from "lucide-react";

interface BusinessCardProps {
  isFlipped: boolean;
  organization?: OrganizationSettings;
}

export default function BusinessCard({
  isFlipped,
  organization = defaultOrganizationSettings,
}: BusinessCardProps) {
  return (
    <div
      className="relative w-full h-full transition-transform duration-700 ease-in-out"
      style={{
        transformStyle: "preserve-3d",
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
    >
      {/* ---------- FRONT FACE ---------- */}
      <div
        className="absolute inset-0 rounded-2xl shadow-lg bg-white overflow-hidden flex flex-col md:flex-row"
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="flex-1 min-h-64 md:flex-none md:w-[30%] bg-red-200">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="flex-none md:flex-1 p-4 sm:p-6 flex flex-col">
          <img
            src={TarentoLogo}
            alt="Tarento Logo"
            className="w-24 md:w-32 h-auto mb-3 md:mb-5"
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Alex Rivera
          </h2>

          <p className="text-green-700 text-lg sm:text-xl md:text-2xl font-semibold mb-3 md:mb-6">
            Senior Developer
          </p>

          <h3 className="text-gray-700 font-semibold text-sm md:text-base">
            Personal Bio
          </h3>

          <p className="text-xs md:text-sm text-gray-500 italic mt-2 leading-6">
            Passionate Product Designer with over 8 years of experience in creating human-centric digital experiences.
          </p>

          <div className="mt-4 md:mt-8 space-y-2 text-xs md:text-sm">
            <p>📞 {organization.supportPhone}</p>
            <p>✉️ {organization.supportEmail}</p>
          </div>

          <button className="mt-6 md:mt-auto bg-green-700 hover:bg-green-800 text-white py-2.5 md:py-3 rounded-lg font-medium">
            Save Contact
          </button>
        </div>
                {/* ---- ABOUT TARENTO: hidden on mobile, shown from md: up ---- */}
        <div className="hidden md:flex md:flex-1 p-4 mt-40 sm:p-6 flex-col">
          <h3 className="text-gray-700 font-semibold text-sm md:text-base">
            About {organization.companyName}
          </h3>

          <p className="text-xs md:text-sm text-gray-500 italic mt-1 leading-6">
            {organization.companyBio}
          </p>

          <div className="mt-4 md:mt-auto space-y-3 md:space-y-4">
            <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2.5 md:py-3 rounded-lg text-sm md:text-base">
              Send Message
            </button>

            <button
              onClick={() =>
                window.open(organization.linkedinProfile, "_blank")
              }
              className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2.5 md:py-3 rounded-lg text-sm md:text-base"
            >
              LinkedIn
            </button>
          </div>
        </div>
      </div>

      {/* ---------- BACK FACE ---------- */}
      <div
        className="absolute inset-0 rounded-2xl shadow-lg bg-[#faf7f2] p-4 sm:p-6 md:p-8 flex flex-col overflow-hidden"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <div className="flex flex-wrap justify-between items-start gap-3">
          <img
            src={TarentoLogo}
            alt="Tarento Logo"
            className="w-24 md:w-32 h-auto"
          />

          <div className="flex flex-wrap gap-2">
            <span className="text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-600">
              {organization.officeAddress.split(",")[0]}
            </span>

            <span className="text-xs bg-green-100 text-green-700 rounded-full px-3 py-1 font-medium">
              {organization.category}
            </span>
          </div>
        </div>
                <div className="flex flex-col md:flex-row flex-1 mt-4 md:mt-6 gap-6 md:gap-10">
          <div className="flex-1">
            <p className="text-sm sm:text-base text-gray-800 leading-6 sm:leading-7">
              {organization.companyInfo}
            </p>

            <div className="flex flex-wrap  gap-2 sm:gap-3 mt-4 sm:mt-6">
              {organization.expertise.map((item) => (
                <span
                  key={item}
                  className="text-xs border border-gray-300 bg-gray-100 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-gray-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5 sm:gap-3 w-full md:w-48 md:shrink-0">
            <button
              onClick={() =>
                window.open(organization.linkedinProfile, "_blank")
              }
              className="border border-gray-300 hover:bg-gray-50 rounded-lg py-2.5 sm:py-3 font-medium text-sm sm:text-base"
            >
              in LinkedIn
            </button>

            <button
              onClick={() =>
                window.open(organization.website, "_blank")
              }
              className="border border-gray-300 hover:bg-gray-50 rounded-lg py-2.5 sm:py-3 font-medium text-sm sm:text-base"
            >
             
  <span>Know More</span>
            </button>

            <button className="bg-green-100 hover:bg-green-200 text-green-700 rounded-lg py-2.5 sm:py-3 font-medium text-sm sm:text-base mt-2 md:mt-20">
              📞 {organization.salesTeamContact}
            </button>
          </div>
        </div>
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-2 mt-4 pt-4">
          <div className="flex gap-3 text-gray-400 text-lg">
           <button  onClick={() =>
                window.open("https:www.google.com/maps/place/IBC+Knowledge+Park,+Bannerghatta+Main+Rd,+Bhavani+Nagar,+S.G.+Palya,+Bengaluru,+Karnataka+560029/data=!4m2!3m1!1s0x3bae15ade8c3b8ff:0xf602691f8963c9cc?entry=gps", "_blank")
              }>
<span><Map/></span>

           </button>
            
          </div>

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {organization.companyName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}