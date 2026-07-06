import ProfileLinkCard from "../ProfileLinkCard/ProfileLinkCard";

interface ProfessionalLinksCardProps {
  linkedin: string;
  github: string;
  portfolio: string;
}

export default function ProfessionalLinksCard({
  linkedin,
  github,
  portfolio,
}: ProfessionalLinksCardProps) {
  return (
    <div className="card p-6">

      <h2 className="text-2xl font-bold text-primary">
        Professional Links
      </h2>

      <div className="mt-6 space-y-5">

        <ProfileLinkCard
          title="LinkedIn"
          link={linkedin}
        />

        <ProfileLinkCard
          title="GitHub"
          link={github}
        />

        <ProfileLinkCard
          title="Portfolio"
          link={portfolio}
        />

      </div>

    </div>
  );
}