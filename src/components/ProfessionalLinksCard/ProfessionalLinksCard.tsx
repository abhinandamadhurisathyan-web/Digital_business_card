import { Globe } from "lucide-react";
import {FaLinkedin} from "react-icons/fa";
interface ProfessionalLinksCardProps {
  linkedin: string;
  portfolio: string;
}

export default function ProfessionalLinksCard({
  linkedin,
  portfolio,
}: ProfessionalLinksCardProps) {
  const links = [
    {
      title: "LinkedIn",
      href: linkedin,
      icon: <FaLinkedin size={18} />,
    },
    {
      title: "Portfolio",
      href: portfolio,
      icon: <Globe size={18} />,
    },
  ];

  return (
    <div className="card p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary">Professional Links</h2>
          <p className="mt-1 text-sm text-text-secondary">
            Your key professional profiles in one place.
          </p>
        </div>

      </div>

      <div className="mt-6 space-y-4">
        {links.map((linkItem) => (
          <div
            key={linkItem.title}
            className="rounded-[1.5rem] border border-border-light bg-surface-container p-4 sm:p-5"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-3xl bg-white text-primary shadow-sm">
                  {linkItem.icon}
                </div>
                <div>
                  <p className="text-sm text-text-secondary">{linkItem.title}</p>
                  <p className="mt-1 break-all text-base text-text">{linkItem.href}</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
