import { useEffect, useState } from "react";
import QRCode from "qrcode";
import QRCard from "../../components/QrCode/QrCode";
import ProfileLinkCard from "../../components/ProfileLinkCard/ProfileLinkCard";
import SelectField from "../../components/SelectField/SelectField";
import InputField from "../../components/InputField";
import Button from "../../components/SubmitButton/SubmitButton";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function QRPage() {
  const employeeName = "Alex Rivera";
  const employeeEmail = "alex.rivera@tarento.com";

  const [ibu, setIbu] = useState("");
  const [industry, setIndustry] = useState("");
  const [company, setCompany] = useState("");
  const [qrTitle, setQrTitle] = useState("");
  const [qrUrl, setQrUrl] = useState<string>("");
  const [qrStatus, setQrStatus] = useState<string>("Generating QR...");
  const [generatedLink, setGeneratedLink] = useState<string>("https://tarento.com/profile/alex-rivera");

  const defaultQrValue = "https://tarento.com/profile/alex-rivera";

  const handleEmail = () => {
    const subject = encodeURIComponent("Your QR Code");
    const body = encodeURIComponent(
      `Hi ${employeeName},\n\nPlease find your QR code attached in this email.\n\nBest regards,\nTarento`,
    );

    window.location.href = `mailto:${employeeEmail}?subject=${subject}&body=${body}`;
  };

  const generateQrValue = () => {
    const params = new URLSearchParams();

    if (ibu) params.set("ibu", ibu);
    if (industry) params.set("industry", industry);
    if (company) params.set("company", company);
    if (qrTitle) params.set("title", qrTitle);

    return `${defaultQrValue}${params.toString() ? `?${params.toString()}` : ""}`;
  };

  const generateQr = async () => {
    const value = generateQrValue();
    setQrStatus("Generating QR...");
    try {
      const dataUrl = await QRCode.toDataURL(value, {
        margin: 1,
        width: 260,
      });
      setQrUrl(dataUrl);
      setGeneratedLink(value);
      setQrStatus("New QR generated successfully");
    } catch (error) {
      console.error("Error generating QR code:", error);
      setQrStatus("Failed to generate QR. Try again.");
    }
  };

  useEffect(() => {
    generateQr();
  }, []);

  return (
    <main className="flex-1 p-6 lg:p-10">
      <PageHeader title="My Digital Identity" />

      <div className="grid lg:grid-cols-[430px_minmax(0,1fr)] gap-6 items-start">
        {/* Left */}
        <div className="w-full max-w-md space-y-6">
          <div id="qr-card">
            <QRCard
              employeeName={employeeName}
              designation="Senior Technical Consultant"
              qrUrl={qrUrl}
              onEmail={handleEmail}
            />
          </div>

          <ProfileLinkCard link="tarento.com/profile/alex-rivera" />
        </div>

        {/* Right */}
        <div className="card p-8 h-full">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Customize Your QR
          </h2>

          <SelectField
            label="IBU"
            value={ibu}
            onChange={(e) => setIbu(e.target.value)}
            options={[
              "Buy",
              "Build",
              "Mobility",
            ]}
          />

          <SelectField
            label="Industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            options={[
              "Automotive",
              "Healthcare",
              "Retail",
              "Finance",
            ]}
          />

          <InputField
            label="Company (Optional)"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <InputField
            label="QR Title (Optional)"
            placeholder="QR Title"
            value={qrTitle}
            onChange={(e) => setQrTitle(e.target.value)}
          />

          <div className="mt-6 rounded-lg border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-primary">
            {qrStatus}
          </div>


          <div className="mt-8">
            <Button text="Generate QR" size="large" onClick={generateQr} />
          </div>
        </div>
      </div>
    </main>
  );
}
