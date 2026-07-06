import { Pencil } from "lucide-react";

interface AboutCardProps {
  about: string;
}

export default function AboutCard({
  about,
}: AboutCardProps) {
  return (
    <div className="card p-8">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-primary">
          About Me
        </h2>

        <button
          className="
          flex
          items-center
          gap-2
          rounded-lg
          border
          border-primary
          px-4
          py-2
          text-primary
          transition
          hover:bg-primary
          hover:text-white
          "
        >
          <Pencil size={16} />
          Edit
        </button>

      </div>

      <p className="mt-6 leading-8 text-text-secondary">
        {about}
      </p>

    </div>
  );
}