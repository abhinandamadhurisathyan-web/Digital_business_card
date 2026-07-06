import { useRef } from "react";
import { Download, Mail } from "lucide-react";
import { toPng } from "html-to-image";

import Button from "../SubmitButton/SubmitButton";
import type { QRCardProps } from "./QrCode.types";

import QrImage from "../../assets/QrImage.svg";

export default function QRCard({
  employeeName,
  designation,
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

    <div className="card w-full max-w-md p-8">

      {/* Downloadable Content */}
      <div className="overflow-hidden rounded-[1.5rem] p-8" ref={cardRef}>
        <div className="flex flex-col items-center">
          <div className="rounded-xl border-2 border-primary p-3 bg-white">
            <img
              src={QrImage}
              alt="QR Code"
              className="w-60 h-60 object-contain"
            />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-primary text-center">
            {employeeName}
          </h2>

          <p className="mt-1 text-xs uppercase tracking-wider text-text-secondary text-center">
            {designation}
          </p>
        </div>
      </div>

      {/* Buttons (Not Included in Download) */}
      <div className="flex justify-center gap-4 mt-8" data-download-exclude>
        <Button
          text="Download"
          icon={<Download size={20} />}
          onClick={handleDownload}
        />

        <Button
          text="Email"
          icon={<Mail size={20} />}
          onClick={onEmail}
        />
      </div>

    </div>

  );
}