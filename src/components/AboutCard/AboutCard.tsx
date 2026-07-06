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


      </div>

      <p className="mt-6 leading-8 text-text-secondary">
        {about}
      </p>

    </div>
  );
}