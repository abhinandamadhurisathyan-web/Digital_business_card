import { useEffect, useState } from "react";
import { toast } from "sonner";
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
  const [ibuError, setIbuError] = useState("");
  const [industry, setIndustry] = useState("");
  const [company, setCompany] = useState("");
  const [qrTitle, setQrTitle] = useState("");
  const [qrUrl, setQrUrl] = useState<string>("");

  const defaultQrValue = "https://tarento.com/profile/alex-rivera";

  const handleEmail = () => {
    const subject = encodeURIComponent("Your QR Code");
    const body = encodeURIComponent(
      `Hi ${employeeName},\n\nPlease find your QR code attached in this email.\n\nBest regards,\nTarento`,
    );

    window.location.href = `mailto:${employeeEmail}?subject=${subject}&body=${body}`;
  };

  const generateQrValue = (forceRefresh = false) => {
    const params = new URLSearchParams();

    if (ibu) params.set("ibu", ibu);
    if (industry) params.set("industry", industry);
    if (company) params.set("company", company);
    if (qrTitle) params.set("title", qrTitle);
    if (forceRefresh) params.set("refresh", String(Date.now()));

    return `${defaultQrValue}${params.toString() ? `?${params.toString()}` : ""}`;
  };

  const generateQr = async (showNotification = true) => {
    const value = generateQrValue(showNotification);
    try {
      const dataUrl = await QRCode.toDataURL(value, {
        margin: 1,
        width: 260,
      });
      setQrUrl(dataUrl);
      if (showNotification) {
        toast.success("New QR generated successfully");
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
      if (showNotification) {
        toast.error("Failed to generate QR. Please try again.");
      }
    }
  };

  const handleGenerateClick = async () => {
    if (!ibu) {
      setIbuError("Please select an IBU to generate QR.");
      return;
    }

    setIbuError("");
    await generateQr(true);
  };

  useEffect(() => {
    generateQr(false);
  }, []);

  return (
    <main className="flex-1 sm:px-1 sm:py-1 lg:px-10 lg:py-8">
      <PageHeader title="My Digital Identity" />

      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-6 justify-items-center xl:grid-cols-[minmax(300px,38%)_minmax(0,1fr)] xl:gap-12 xl:justify-items-stretch items-start">
        {/* Left */}
        <div className="space-y-5 w-full">
          <div id="qr-card" className="w-full">
            <QRCard
              employeeName={employeeName}
              designation="Senior Technical Consultant"
              qrUrl={qrUrl}
              onEmail={handleEmail}
            />
          </div>

          <div className="w-full">
            <ProfileLinkCard link="tarento.com/profile/alex-rivera" />
          </div>
        </div>

        {/* Right */}
        <div className="card w-full max-w-[640px] p-6 sm:p-8 h-full">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Customize Your QR
          </h2>

          <SelectField
            label="IBU  *"
            value={ibu}
            onChange={(e) => {
              setIbu(e.target.value);
              if (e.target.value) setIbuError("");
            }}
            options={[
              "Buy",
              "Build",
              "Mobility",
            ]}
          />

          {ibuError ? (
            <p className="mt-2 text-sm text-red-600">{ibuError}</p>
          ) : null}

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
            label="Company"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <InputField
            label="QR Title"
            placeholder="QR Title"
            value={qrTitle}
            onChange={(e) => setQrTitle(e.target.value)}
          />

         


          <div className="mt-8">
            <Button text="Generate QR" size="large" onClick={handleGenerateClick} />
          </div>
        </div>
      </div>
    </main>
  );
}
