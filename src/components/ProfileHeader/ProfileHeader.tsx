import StatusBadge from "../StatusBadge/StatusBadge";
import type { ProfileHeaderProps } from "../ProfileField/Profile.types";

export default function ProfileHeader({
  title,
  subtitle,
  status,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col gap-4  lg:items-start lg:justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold text-primary">
          {title}
        </h1>

        {/* <p className="mt-2 text-text-secondary">
          {subtitle}
        </p> */}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-text-secondary">
          Profile Status
        </span>

        <StatusBadge status={status} />
      </div>
    </div>
  );
}