import { useState } from "react";

interface AboutCardProps {
  about: string;
  editing: boolean;
}

export default function AboutCard({
  about,
  editing,
}: AboutCardProps) {
  const [aboutText, setAboutText] = useState(about);

  return (
    <div className="card p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl font-bold text-primary sm:text-2xl">
        About Me
      </h2>

      <textarea
        value={aboutText}
        disabled={!editing}
        onChange={(e) => setAboutText(e.target.value)}
        className={`mt-4 min-h-[140px] w-full rounded-2xl border p-4 text-sm leading-7 outline-none transition sm:mt-6 sm:min-h-[180px] sm:p-5 sm:text-base sm:leading-8 ${
          editing
            ? "border-primary bg-white"
            : "border-border-light bg-surface-container text-text-secondary resize-none cursor-default"
        }`}
      />
    </div>
  );
}