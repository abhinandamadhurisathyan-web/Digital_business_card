import { Download, Mail } from "lucide-react";
import Button from "../SubmitButton/SubmitButton";
import type { QRCardProps } from "./QrCode.types";
import QrImage from "../../assets/QrImage.svg";

export default function QrCard({
  employeeName,
  designation,
  onDownload,
  onEmail,
}: QRCardProps) {
  return (
    <div className="card w-full max-w-md p-8 flex flex-col items-center">

      {/* QR */}

      <div className="rounded-xl border-2 border-primary p-3 bg-white">
        <img
          src={QrImage}
          alt="QR Code"
          className="w-52 h-52 object-contain"
        />
      </div>

      {/* Employee */}

      <h2 className="mt-6 text-3xl font-bold text-primary">
        {employeeName}
      </h2>

      <p className="uppercase tracking-wider text-xs text-text-secondary mt-1">
        {designation}
      </p>

      {/* Buttons */}

      <div className="flex gap-4 mt-8 w-full">

        <Button
          text="Download"
          icon={<Download size={24} />}
          onClick={onDownload}
        />

        <Button
          text="Email QR"
          icon={<Mail size={24} />}
          variant="secondary"
          onClick={onEmail}
        />

      </div>

    </div>
  );
}