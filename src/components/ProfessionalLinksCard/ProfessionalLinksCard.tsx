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
    <div className="card p-8">
      <div>
        <h2 className="text-2xl font-bold text-primary">
          Professional Links
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          Your key professional profiles in one place.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        <div className="flex items-start gap-4">
          <div className="mt-8 grid h-12 w-12 place-items-center rounded-3xl bg-white text-primary shadow-sm">
            <FaLinkedin size={18} />
          </div>

          <div className="flex-1">
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
          <div className="mt-8 grid h-12 w-12 place-items-center rounded-3xl bg-white text-primary shadow-sm">
            <Globe size={18} />
          </div>

          <div className="flex-1">
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