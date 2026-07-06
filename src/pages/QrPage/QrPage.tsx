import QRCard from "../../components/QrCode/QrCode";
import ProfileLinkCard from "../../components/ProfileLinkCard/ProfileLinkCard";
import SelectField from "../../components/SelectField/SelectField";
import InputField from "../../components/InputField";
import Button from "../../components/SubmitButton/SubmitButton";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function QRPage() {
  return (
    <main className="flex-1 p-6 lg:p-10">

      <PageHeader title="My Digital Identity" />

      <div className="grid lg:grid-cols-[430px_minmax(0,1fr)] gap-6 items-start">

        {/* Left */}

        <div className="w-full max-w-md space-y-6">

          <QRCard
            employeeName="Arjun Mehta"
            designation="Senior Technical Consultant"
          />

          <ProfileLinkCard
            link="tarento.com/profile/arjun-mehta"
          />

        </div>

        {/* Right */}

        <div className="card p-8">

          <h2 className="text-3xl font-bold text-primary mb-8">
            Customize Your QR
          </h2>

          <SelectField
            label="IBU"
            options={[
              "Buy",
              "Build",
              "Mobility",
            ]}
          />

          <SelectField
            label="Industry"
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
          />

          <InputField
            label="QR Title (Optional)"
            placeholder="QR Title"
          />

          <div className="mt-8">
            <Button
              text="Generate QR"
              size="large"
            />
          </div>

        </div>

      </div>

    </main>
  );
}
