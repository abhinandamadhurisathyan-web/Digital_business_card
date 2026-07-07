import { useState } from "react";
import { Globe } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

import InputField from "../InputField";

interface ProfessionalLinksCardProps {
  linkedin: string;
  portfolio: string;
  editing: boolean;
}

export default function ProfessionalLinksCard({
  linkedin,
  portfolio,
  editing,
}: ProfessionalLinksCardProps) {
  const [links, setLinks] = useState({
    linkedin,
    portfolio,
  });

  return (
    <div className="card p-4 sm:p-6 lg:p-8">
      <div>
        <h2 className="text-xl font-bold text-primary sm:text-2xl">
          Professional Links
        </h2>

        <p className="mt-1 text-sm leading-6 text-text-secondary">
          Your key professional profiles in one place.
        </p>
      </div>

      <div className="mt-6 space-y-5 sm:space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-none h-12 w-12 flex items-center justify-center rounded-3xl bg-white text-primary shadow-sm mt-6 sm:mt-0 lg:mt-4">
            <FaLinkedin size={18} />
          </div>

          <div className="flex-1 min-w-0">
            <InputField
              label="LinkedIn"
              value={links.linkedin}
              disabled={!editing}
              onChange={(e) =>
                setLinks({
                  ...links,
                  linkedin: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-none h-12 w-12 flex items-center justify-center rounded-3xl bg-white text-primary shadow-sm mt-6 sm:mt-0 lg:mt-4">
            <Globe size={18} />
          </div>

          <div className="flex-1 min-w-0">
            <InputField
              label="Portfolio"
              value={links.portfolio}
              disabled={!editing}
              onChange={(e) =>
                setLinks({
                  ...links,
                  portfolio: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}