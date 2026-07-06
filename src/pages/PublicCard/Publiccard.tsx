import FlipCardContainer from "../../components/Flipcardcontainer";

export default function PublicCard() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <FlipCardContainer />
      </div>
    </div>
  );
}