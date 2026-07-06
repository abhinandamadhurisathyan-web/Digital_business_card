import { Calendar, Download, Share2 } from "lucide-react";
import { toast } from "sonner";

interface QRLibraryCardProps {
  title: string;
  generatedDate?: string;
  previewImage?: string;
  active?: boolean;
  shareLink?: string;
  onSelect?: () => void;
}

export default function QRLibraryCard({
  title,
  generatedDate = "Oct 12, 2024",
  previewImage = "/placeholder.png",
  active = false,
  shareLink = "https://yourdomain.com/card/123",
  onSelect,
}: QRLibraryCardProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = previewImage;
    link.download = `${title.replace(/\s+/g, "-")}-QR.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    try {
      // Mobile share sheet
      if (navigator.share) {
        await navigator.share({
          title,
          text: "Check out my digital business card",
          url: shareLink,
        });
        return;
      }

      // Desktop fallback
      await navigator.clipboard.writeText(shareLink);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg ${
        active
          ? "border-green-600 ring-2 ring-green-600"
          : "border-gray-200 hover:border-green-300"
      }`}
    >
      {/* QR Preview */}
      <div className="flex h-52 items-center justify-center bg-gray-50 p-4">
        <img
          src={previewImage}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <Calendar size={15} />
          <span>Generated: {generatedDate}</span>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex items-center gap-2">
          <button
            onClick={onSelect}
            className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition ${
              active
                ? "bg-green-700 text-white hover:bg-green-800"
                : "border border-green-700 text-green-700 hover:bg-green-50"
            }`}
          >
            {active ? "Active" : "Select Active"}
          </button>

          <button
            onClick={handleDownload}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 transition hover:bg-gray-100"
            title="Download QR"
          >
            <Download size={18} />
          </button>

          <button
            onClick={handleShare}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 transition hover:bg-gray-100"
            title="Share"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}