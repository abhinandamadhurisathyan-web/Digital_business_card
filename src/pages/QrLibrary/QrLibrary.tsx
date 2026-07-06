import { useMemo, useState } from "react";

import CreateQRCard from "../../components/Qrlibrary/CreateQRCard";
import QRLibraryCard from "../../components/Qrlibrary/QRLibraryCard";

import Qrimage from "../../assets/QrImage.svg";

interface Card {
  id: number;
  title: string;
  generatedDate: string;
}

export default function QrLibrary() {
  const [selectedId, setSelectedId] = useState(1);

  const cards: Card[] = [
    {
      id: 1,
      title: "Standard Card",
      generatedDate: "Jul 06, 2026",
    },
    {
      id: 2,
      title: "Build",
      generatedDate: "Jul 05, 2026",
    },
    {
      id: 3,
      title: "Buy",
      generatedDate: "Jul 04, 2026",
    },
    {
      id: 4,
      title: "Buy",
      generatedDate: "Jul 03, 2026",
    },
    {
      id: 5,
      title: "Mobility",
      generatedDate: "Jul 02, 2026",
    },
    {
      id: 6,
      title: "Mobility",
      generatedDate: "Jul 01, 2026",
    },
    {
      id: 7,
      title: "Mobility",
      generatedDate: "Jun 30, 2026",
    },
    {
      id: 8,
      title: "Mobility",
      generatedDate: "Jun 29, 2026",
    },
  ];

  const orderedCards = useMemo(() => {
    const selected = cards.find((card) => card.id === selectedId);

    return [
      ...(selected ? [selected] : []),
      ...cards.filter((card) => card.id !== selectedId),
    ];
  }, [selectedId]);

  return (
    <div className="h-full overflow-y-auto pr-2">
      <h1 className="text-4xl font-bold">
        QR Library
      </h1>

      <p className="text-secondary mt-2 mb-8">
        Select and manage your generated QR cards.
      </p>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          xl:grid-cols-5
          gap-6
        "
      >
        <CreateQRCard />

        {orderedCards.map((card) => (
          <QRLibraryCard
            key={card.id}
            title={card.title}
            generatedDate={card.generatedDate}
            previewImage={Qrimage}
            active={card.id === selectedId}
            onSelect={() => setSelectedId(card.id)}
            
            
          />
        ))}
      </div>
    </div>
  );
}