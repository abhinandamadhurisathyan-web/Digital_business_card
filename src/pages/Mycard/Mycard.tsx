import FlipCardContainer from "../../components/Flipcardcontainer";

function MyCard() {
  return (
    <div className="min-h-full flex flex-col">
      {/* Title */}
      <div className="px-8 pt-2">
        <h1 className="text-4xl font-bold text-primary">
          My Business Card
        </h1>
        <p className="text-secondary mt-2">
          Preview and share your digital business card.
        </p>
      </div>

      {/* Full remaining page */}
      <div className="flex-1 mt-10">
        <FlipCardContainer />
      </div>
    </div>
  );
}

export default MyCard;