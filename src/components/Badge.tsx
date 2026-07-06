import { CheckCircle2 } from "lucide-react";

export default function Badge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-white shadow-md">
      <CheckCircle2 size={18} />

      <span className="text-sm font-medium">
        Verified Business Card
      </span>
    </div>
  );
}