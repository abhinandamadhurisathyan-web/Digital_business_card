import StatusBadge from "../StatusBadge/StatusBadge";
import type { ProfileHeaderProps } from "../ProfileField/Profile.types";

export default function ProfileHeader({
  title,
  subtitle,
  status,
}: ProfileHeaderProps) {
  return (
    <div className="mb-2 flex flex-col gap-3 sm:mb-4 sm:gap-4 lg:items-start lg:justify-between">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-2 text-sm leading-6 text-text-secondary sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="text-sm text-text-secondary">
          Profile Status
        </span>

        <StatusBadge status={status} />
      </div>
    </div>
  );
}