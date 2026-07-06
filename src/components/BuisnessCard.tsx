import TarentoLogo from '../assets/Tarento-logo.svg';
import ProfileImage from '../assets/profile.png';

interface BusinessCardProps {
  isFlipped: boolean;
}

export default function BusinessCard({ isFlipped }: BusinessCardProps) {
  return (
    <div
      className="relative w-full h-full transition-transform duration-700 ease-in-out"
      style={{
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}
    >
      {/* ---------- FRONT FACE ---------- */}
      {/* Flexbox columns: the photo grows (flex-1) to fill any leftover vertical
          space on mobile instead of leaving a blank gap. The info column is
          flex-none on mobile (sized to its own content) but md:flex-1 so it
          shares the row properly on desktop. "About Tarento" is hidden on
          mobile (`hidden`) and only appears from md: up. */}
      <div
        className="absolute inset-0 rounded-2xl shadow-lg bg-white overflow-hidden flex flex-col md:flex-row"
        style={{ backfaceVisibility: 'hidden' }}
      >
        <div className="flex-1 min-h-64 md:flex-none md:w-[30%] bg-red-200">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="flex-none md:flex-1 p-4 sm:p-6 flex flex-col">
          <img
            src={TarentoLogo}
            alt="Tarento Logo"
            className="w-24 md:w-32 h-auto mb-3 md:mb-5"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Rohit R</h2>
          <p className="text-green-700 text-lg sm:text-xl md:text-2xl font-semibold mb-3 md:mb-6">
            Senior Developer
          </p>

          <h3 className="text-gray-700 font-semibold text-sm md:text-base">Personal Bio</h3>
          <p className="text-xs md:text-sm text-gray-500 italic mt-2 leading-6">
            Passionate full-stack developer with experience in React and Spring Boot.
          </p>

          <div className="mt-4 md:mt-8 space-y-2 text-xs md:text-sm">
            <p>📞 +91 8138044516</p>
            <p>✉️ rohit.ramesh@tarento.com</p>
          </div>

          <button className="mt-6 md:mt-auto bg-green-700 hover:bg-green-800 text-white py-2.5 md:py-3 rounded-lg font-medium">
            Save Contact
          </button>
        </div>

        {/* ---- ABOUT TARENTO: hidden on mobile, shown from md: up ---- */}
        <div className="hidden md:flex md:flex-1 p-4 mt-40 sm:p-6 flex-col ">
          <h3 className="text-gray-700 font-semibold text-sm md:text-base">
            About Tarento
          </h3>
          <p className="text-xs md:text-sm text-gray-500 italic mt-1 leading-6">
            Tarento Technologies is a digital engineering company specializing in enterprise
            software, cloud solutions, AI, and product development.
          </p>

          <div className="mt-4 md:mt-auto space-y-3 md:space-y-4">
            <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2.5 md:py-3 rounded-lg text-sm md:text-base">
              Send Message
            </button>
            <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2.5 md:py-3 rounded-lg text-sm md:text-base">
              LinkedIn
            </button>
          </div>
        </div>
      </div>

      {/* ---------- BACK FACE ---------- */}
      <div
        className="absolute inset-0 rounded-2xl shadow-lg bg-[#faf7f2] p-4 sm:p-6 md:p-8 flex flex-col overflow-hidden"
        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
      >
        <div className="flex flex-wrap justify-between items-start gap-3">
          <img src={TarentoLogo} alt="Tarento Logo" className="w-24 md:w-32 h-auto" />
          <div className="flex flex-wrap gap-2">
            <span className="text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-600">
              Banglore
            </span>
            <span className="text-xs bg-green-100 text-green-700 rounded-full px-3 py-1 font-medium">
              Global Entity
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-1 mt-4 md:mt-6 gap-6 md:gap-10">
          <div className="flex-1">
            <p className="text-sm sm:text-base text-gray-800 leading-6 sm:leading-7">
              Tarento Technologies is a global leader in sustainable enterprise solutions.
              With a presence across four continents, we empower organizations through
              transformative digital strategy, robust engineering, and human-centric
              experience design. Our mission is to solve complex global challenges by
              building resilient, scalable, and empathetic technology landscapes.igital strategy, robust engineering, and human-centric
              experience design. Our mission is to solve complex global challenges by
              building resilient, scalable, and empathetic technology landscapes.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
              <span className="text-xs border border-gray-300 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-gray-600">
                Enterprize Saas
              </span>
              <span className="text-xs border border-gray-300 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-gray-600">
                Enterprize Saas
              </span>
              <span className="text-xs border border-gray-300 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-gray-600">
                Enterprize Saas
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 sm:gap-3 w-full md:w-48 md:shrink-0">
            <button className="border border-gray-300 hover:bg-gray-50 rounded-lg py-2.5 sm:py-3 font-medium text-sm sm:text-base">
              in LinkedIn
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 rounded-lg py-2.5 sm:py-3 font-medium text-sm sm:text-base">
              🔗 Know More
            </button>
            <button className="bg-green-100 hover:bg-green-200 text-green-700 rounded-lg py-2.5 sm:py-3 font-medium text-sm sm:text-base mt-2 md:mt-20">
              📞 Contact Sales
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-2 mt-4 pt-4">
          <div className="flex gap-3 text-gray-400 text-lg">
            <span>🔗</span>
            <span>⚙️</span>
          </div>
          <p className="text-xs text-gray-400">© 2024 Tarento Global. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}