import { useState } from "react";
import { Copy, Link2 } from "lucide-react";

interface ProfileLinkCardProps {
  title?: string;
  link: string;
}

export default function ProfileLinkCard({
  title = "Profile Link",
  link,
}: ProfileLinkCardProps) {

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="card mt-5 p-5">

      <div className="flex items-center gap-2 mb-4">
        <Link2 size={18} className="text-primary" />

        <h3 className="font-semibold text-text">
          {title}
        </h3>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-sm text-text-secondary break-all">
            {link}
          </p>

          {copied && (
            <p className="mt-1 text-xs text-primary">
              ✓ Link copied
            </p>
          )}
        </div>

        <button
          onClick={handleCopy}
          className="btn-primary flex items-center justify-center gap-2 px-4 py-2"
        >
          <Copy size={16} />
          Copy Link
        </button>

      </div>

    </div>
  );
}