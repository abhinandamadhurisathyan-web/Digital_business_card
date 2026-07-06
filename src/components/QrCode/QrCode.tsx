import { useRef } from "react";
import { Download, Mail } from "lucide-react";
import { toPng } from "html-to-image";

import Button from "../SubmitButton/SubmitButton";
import type { QRCardProps } from "./QrCode.types";

import QrImage from "../../assets/QrImage.svg";

export default function QRCard({
  employeeName,
  designation,
  qrUrl,
  onEmail,
}: QRCardProps) {

  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {

    if (!cardRef.current) return;

    try {

      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: "#ffffff",
        filter: (node) => {
          return !(
            node instanceof HTMLElement &&
            node.closest("[data-download-exclude]")
          );
        },
      });

      const link = document.createElement("a");

      link.download = `${employeeName.replace(/\s+/g, "-")}-QR.png`;
      link.href = dataUrl;
      link.click();

    } catch (error) {
      console.error("Failed to download QR Card:", error);
    }
  };

  return (

    <div className="card mx-auto w-full p-6 sm:p-8">

      {/* Downloadable Content */}
      <div className="overflow-hidden rounded-[1.5rem] p-6 sm:p-8" ref={cardRef}>
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-xl border-2 border-primary p-3 bg-white">
            <img
              src={qrUrl || QrImage}
              alt="QR Code"
              className="w-52 h-52 object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold text-primary text-center sm:text-3xl">
            {employeeName}
          </h2>

          <p className="text-[11px] uppercase tracking-wider text-text-secondary text-center sm:text-xs">
            {designation}
          </p>
        </div>
      </div>

      {/* Buttons (Not Included in Download) */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center" data-download-exclude>
        <Button
          text="Download"
          icon={<Download size={20} />}
          onClick={handleDownload}
          size="full"
        />

        <Button
          text="Email"
          icon={<Mail size={20} />}
          onClick={onEmail}
          variant="secondary"
          size="full"
        />
      </div>

    </div>

  );
}