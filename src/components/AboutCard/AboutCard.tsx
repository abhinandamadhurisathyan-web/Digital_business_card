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
    <div className="card p-8">
      <h2 className="text-2xl font-bold text-primary">
        About Me
      </h2>

      <textarea
        value={aboutText}
        disabled={!editing}
        onChange={(e) => setAboutText(e.target.value)}
        className={`mt-6 min-h-[120px] w-full rounded-2xl border p-5 leading-8 outline-none transition ${
          editing
            ? "border-primary bg-white"
            : "border-border-light bg-surface-container text-text-secondary resize-none cursor-default"
        }`}
      />
    </div>
  );
}