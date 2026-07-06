import { useState } from 'react';
import BusinessCard from './BuisnessCard';

export default function FlipCardContainer() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="parent flex flex-col items-center gap-5 sm:gap-6 w-full px-4 sm:px-6">
      {/* perspective must live on a plain element that does NOT itself rotate.
          Fixed heights per breakpoint (no aspect-ratio, no overflow-y-auto):
          taller on mobile since the front face stacks its content vertically,
          back down to the original 480px on desktop where columns sit side by side. */}
      <div
        className="w-full max-w-md sm:max-w-xl md:max-w-5xl h-[700px] sm:h-[560px] md:h-[480px]"
        style={{ perspective: '1500px' }}
      >
        <BusinessCard isFlipped={isFlipped} />
      </div>

      <button
        onClick={() => setIsFlipped((prev) => !prev)}
        className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium shadow-md transition-transform active:scale-95 text-sm sm:text-base"
      >
        <RefreshIcon />
        {isFlipped ? 'Personal Info' : 'Company Info'}
      </button>
    </div>
  );
}

function RefreshIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 4v6h-6" />
      <path d="M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0114.13-3.36L23 10M1 14l5.36 4.36A9 9 0 0020.49 15" />
    </svg>
  );
}