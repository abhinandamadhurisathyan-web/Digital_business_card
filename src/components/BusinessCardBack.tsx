import TarentoLogo from "../assets/Tarento-logo.svg";

export default function BusinessCardBack() {
  return (
    <div className="bg-white rounded-xl shadow-lg w-3/4 p-8">

      {/* Top Row */}
      <div className="flex justify-between items-start">

        <img
          src={TarentoLogo}
          alt="Tarento Logo"
          className="w-36"
        />

        <div className="flex gap-3">
          <span className="px-5 py-2 border rounded-lg text-sm font-medium text-gray-600">
            Banglore
          </span>

          <span className="px-5 py-2 rounded-lg bg-green-50 border text-sm font-semibold text-green-700">
            Global Entity
          </span>
        </div>

      </div>

      {/* Content */}
      <div className="grid grid-cols-[60%_40%] mt-12">

        {/* Left Side */}
        <div className="flex flex-col justify-between">

          <p className="text-3xl leading-relaxed font-medium text-gray-800">
            Tarento Technologies is a global leader in sustainable enterprise
            solutions. With a presence across four continents, we empower
            organizations through transformative digital strategy, robust
            engineering, and human-centric experience design. Our mission is to
            solve complex global challenges by building resilient, scalable, and
            empathetic technology landscapes.
          </p>

          <div className="flex gap-4 mt-12">

            <span className="border rounded-lg px-5 py-2">
              Enterprise SaaS
            </span>

            <span className="border rounded-lg px-5 py-2">
              Enterprise AI
            </span>

            <span className="border rounded-lg px-5 py-2">
              Cloud Engineering
            </span>

          </div>

          <div className="flex gap-6 mt-14 text-3xl text-gray-400">

            <button>🔗</button>

            <button>↗</button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between pl-10">

          <div className="space-y-6 mt-10">

            <button className="w-full border rounded-lg py-4 text-lg hover:bg-gray-50">
              LinkedIn
            </button>

            <button className="w-full border rounded-lg py-4 text-lg hover:bg-gray-50">
              Know More
            </button>

          </div>

          <div>

            <button className="w-full py-4 rounded-lg bg-green-50 border border-green-700 text-green-700 text-lg font-semibold hover:bg-green-100">
              Contact Sales
            </button>

            <p className="text-center text-xs text-gray-400 mt-16">
              © 2024 Tarento Global. All Rights Reserved.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}