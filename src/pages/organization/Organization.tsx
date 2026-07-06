import { useRef, useState } from "react";
import { Plus, Save, X } from "lucide-react";

import AdminShell from "../../components/AdminShell";
import PageHeader from "../../components/PageHeader/PageHeader";
import FlipCardContainer from "../../components/Flipcardcontainer";
import { toast } from "sonner";

interface OrganizationSettings {
  category: string;
  companyBio: string;
  expertise: string[];
  companyInfo: string;
  linkedinProfile: string;
  salesTeamContact: string;
  logoName: string;
  logoMeta: string;
  companyName: string;
  website: string;
  industry: string;
  officeAddress: string;
  supportEmail: string;
  supportPhone: string;
  tagline: string;
  establishedYear: string;
  timezone: string;
  language: string;
}

const defaultOrganizationSettings: OrganizationSettings = {
  category: "General",
  companyBio: "",
  expertise: ["Cloud Transformation", "SaaS", "Mobility", "Enterprise Solution"],
  companyInfo: "",
  linkedinProfile: "https://linkedin.com/company/...",
  salesTeamContact: "sales@company.com or +1...",
  logoName: "company-logo.png",
  logoMeta: "PNG • 512 x 512px",
  companyName: "TechNova Solutions Pvt. Ltd.",
  website: "https://www.technovasolutions.com",
  industry: "Information Technology",
  officeAddress: "TechNova Tower, 4th Floor, Infopark Phase 2, Kakkanad, Kochi, Kerala - 682030",
  supportEmail: "support@technovasolutions.com",
  supportPhone: "+91 484 123 4567",
  tagline: "Innovate. Integrate. Elevate.",
  establishedYear: "2018",
  timezone: "(GMT+05:30) Asia/Kolkata",
  language: "English",
};

function Organization() {
  const [organizationSettings, setOrganizationSettings] = useState<OrganizationSettings>(defaultOrganizationSettings);
  const [expertiseDraft, setExpertiseDraft] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  function handleOrganizationFieldChange(field: keyof OrganizationSettings, value: string) {
    setOrganizationSettings((previousSettings) => ({
      ...previousSettings,
      [field]: value,
    }));
  }

  function addOrganizationExpertise() {
    const nextExpertise = expertiseDraft.trim();

    if (!nextExpertise) {
      return;
    }

    setOrganizationSettings((previousSettings) =>
      previousSettings.expertise.includes(nextExpertise)
        ? previousSettings
        : {
            ...previousSettings,
            expertise: [...previousSettings.expertise, nextExpertise],
          },
    );
    setExpertiseDraft("");
  }

  function removeOrganizationExpertise(expertiseToRemove: string) {
    setOrganizationSettings((previousSettings) => ({
      ...previousSettings,
      expertise: previousSettings.expertise.filter((item) => item !== expertiseToRemove),
    }));
  }

  return (
    
      <div className="w-full">
        <div className="mb-6 flex items-center justify-between">
        <PageHeader
          title="Organization"
          subtitle="Manage company information, card details and contact links."
        />
        {!isEditing ? (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="btn-primary rounded-md border border-primary px-4 py-2 text-sm font-medium  transition hover:bg-primary hover:text-white"
          >
            Edit
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className=" rounded-md border border-border px-4 py-2 text-sm"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn-primary flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium"
              onClick={() => {
                setIsEditing(false);
                toast.success("Organization Details Saved Successfully!");
              }}
            >
              <Save className="h-4 w-4" />
              Save
              
            </button>
          </div>
        )}
      </div>

        <section className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr] xl:items-stretch">
          <div className="card flex h-full flex-col p-6 sm:p-8">
            <div className="mb-6">
  <div>
    <p className="text-2xl font-bold text-primary">
      Company Information
    </p>
    <p className="mt-1 text-sm text-text-secondary">
      Update your organization details. These will be visible on employee cards.
    </p>
  </div>
</div>

            <div className="flex flex-1 flex-col gap-4">
              <div className="grid gap-4 md:grid-cols-[118px_1fr] md:items-start">
                <label className="pt-2 text-sm text-text-secondary">Company Logo</label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-md border border-border bg-[#3b3b3b] shadow-sm">
                    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(180deg,#5b5b5b_0%,#353535_100%)] text-[8px] font-semibold tracking-[0.3em] text-emerald-300">
                      TARENTO
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-text">{organizationSettings.logoName}</p>
                    <p className="text-xs text-text-secondary">{organizationSettings.logoMeta}</p>
                    <button type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={!isEditing} 
                    className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary transition hover:bg-primary/10">
                      <span className="text-base leading-none">↻</span>
                      Change Logo
                    </button>
                    <input
  ref={fileInputRef}
  type="file"
  accept="image/*"
  className="hidden"
/>
                  </div>
                </div>
              </div>

              {[
                ["Company Name", "companyName", "input"],
                ["Website", "website", "input"],
                ["Industry", "industry", "select"],
                ["Office Address", "officeAddress", "textarea"],
                ["Support Email", "supportEmail", "input"],
                ["Support Phone", "supportPhone", "input"],
                ["Tagline / Motto", "tagline", "input"],
                ["Established Year", "establishedYear", "input"],
                ["Default Timezone", "timezone", "select"],
                ["Default Language", "language", "select"],
              ].map(([label, field, controlType]) => {
                const value = organizationSettings[field as keyof OrganizationSettings] as string;

                return (
                  <div key={label} className="grid gap-4 md:grid-cols-[118px_1fr] md:items-start">
                    <label className="pt-2 text-sm text-text-secondary">{label}</label>

                    {controlType === "textarea" ? (
                      <textarea
                        value={value}
                        rows={4}
                        disabled={!isEditing}
                        onChange={(event) => handleOrganizationFieldChange(field as keyof OrganizationSettings, event.target.value)}
                        className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-text outline-none transition placeholder:text-text-secondary focus:border-primary focus:ring-4 focus:ring-primary/10"
                        
                      />
                    ) : controlType === "select" ? (
                      <select
                        value={value}
                        onChange={(event) => handleOrganizationFieldChange(field as keyof OrganizationSettings, event.target.value)}
                        disabled={!isEditing}
                        className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-text outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                      >
                        {field === "industry" ? (
                          <>
                            <option>Information Technology</option>
                            <option>Finance</option>
                            <option>Healthcare</option>
                            <option>Retail</option>
                          </>
                        ) : field === "timezone" ? (
                          <>
                            <option>(GMT+05:30) Asia/Kolkata</option>
                            <option>(GMT+00:00) UTC</option>
                            <option>(GMT-05:00) America/New_York</option>
                          </>
                        ) : (
                          <>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Malayalam</option>
                            <option>Tamil</option>
                          </>
                        )}
                      </select>
                    ) : (
                      <input
                        value={value}
                        onChange={(event) => handleOrganizationFieldChange(field as keyof OrganizationSettings, event.target.value)}
                        disabled={!isEditing}
                        className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-text outline-none transition placeholder:text-text-secondary focus:border-primary focus:ring-4 focus:ring-primary/10"
                       
                      />
                    )}
                  </div>
                );
              })}

              {isEditing && (
                <button type="button" className="hidden">
                <Save className="h-4 w-4" />
                Save Details
              </button>
                )}
            </div>
          </div>
          <div className="flex h-full flex-col space-y-6">
            <div className="card flex flex-1 flex-col p-6 sm:p-8">
              <p className="text-2xl font-bold text-primary">Company Card Details</p>

              <div className="mt-6 flex flex-1 flex-col gap-4">
                <div>
                  <label className="mb-2 block text-sm text-text-secondary">Category</label>
                  <select
                    value={organizationSettings.category}
                    onChange={(event) => handleOrganizationFieldChange("category", event.target.value)}
                    className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-text outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                  >
                    <option>General</option>
                    <option>IT Services</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-text-secondary">Company Bio</label>
                  <textarea
                    value={organizationSettings.companyBio}
                    onChange={(event) => handleOrganizationFieldChange("companyBio", event.target.value)}
                    rows={4}
                    disabled={!isEditing}
                    placeholder="Enter a short company description..."
                    className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-text outline-none transition placeholder:text-text-secondary focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-text-secondary">Company Expertise</label>

                  <div className="flex flex-wrap gap-1.5">
                    {organizationSettings.expertise.map((item) => (
                      <span key={item} className="inline-flex items-center gap-1 rounded-sm bg-primary px-2 py-0.5 text-[11px] font-semibold text-white shadow-sm">
                        {item}
                        <button type="button" onClick={() => removeOrganizationExpertise(item)} disabled={!isEditing} className="leading-none text-white/90 hover:text-white" aria-label={`Remove ${item}`}>
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2.5">
                    <input
                      value={expertiseDraft}
                      disabled={!isEditing}
                      onChange={(event) => setExpertiseDraft(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          addOrganizationExpertise();
                        }
                      }}
                      placeholder="Add Expertise..."
                      className="min-w-0 flex-1 bg-transparent text-sm text-text outline-none placeholder:text-text-secondary"
                    />

                    <button type="button" onClick={addOrganizationExpertise} disabled={!isEditing} className="flex h-5 w-5 items-center justify-center rounded-full border border-primary text-primary transition hover:bg-primary hover:text-white">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-text-secondary">Company Info</label>
                  <textarea
                    value={organizationSettings.companyInfo}
                    onChange={(event) => handleOrganizationFieldChange("companyInfo", event.target.value)}
                    rows={4}
                    disabled={!isEditing}
                    placeholder="Additional details like registration numbers..."
                    className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-text outline-none transition placeholder:text-text-secondary focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                {isEditing && (
                <button type="button" className="hidden">
                  <Save className="h-4 w-4" />
                  Save Details
                </button>)}
              </div>
            </div>

            <div className="card flex flex-1 flex-col p-6 sm:p-8">
              <p className="text-2xl font-bold text-primary">Links & Contact</p>

              <div className="mt-6 flex flex-1 flex-col gap-4">
                <div>
                  <label className="mb-2 block text-sm text-text-secondary">LinkedIn Profile</label>
                  <input
                    value={organizationSettings.linkedinProfile}
                    onChange={(event) => handleOrganizationFieldChange("linkedinProfile", event.target.value)}
                    className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-text outline-none transition placeholder:text-text-secondary focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-text-secondary">Sales Team Contact</label>
                  <input
                    value={organizationSettings.salesTeamContact}
                    onChange={(event) => handleOrganizationFieldChange("salesTeamContact", event.target.value)}
                    className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-text outline-none transition placeholder:text-text-secondary focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                {isEditing && (
                <button type="button" className="hidden">
                  <Save className="h-4 w-4" />
                  Save Links
                </button>)}
              </div>
            </div>
          </div>
        </section>
      </div>
    
  );
}

export default Organization;