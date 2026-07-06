import TarentoLogo from '../assets/Tarento-logo.svg';
import ProfileImage from '../assets/profile.png';

export default function BusinessCardFront() {
  return (
    <div className="parent">
  <div className="grid grid-cols-[30%_35%_35%] rounded-xl overflow-hidden shadow-lg w-3/6">
  <div className="bg-red-200 "><img
          src={ProfileImage}
          alt="Profile"
          className="w-full h-full  object-cover"/></div>
  <div className="bg-white p-6 flex flex-col">

  <img
    src={TarentoLogo}
    alt="Tarento Logo"
    className="w-32 h-auto mb-5"
  />

  <h2 className="text-4xl font-bold">
    Rohit R
  </h2>

  <p className="text-green-700 text-2xl font-semibold mb-6">
    Senior Developer
  </p>

  <h3 className="text-gray-700 font-semibold">
    Personal Bio
  </h3>

  <p className="text-sm text-gray-500 italic mt-2 leading-6">
    Passionate full-stack developer with experience in React and Spring Boot.
  </p>

  <div className="mt-8 space-y-2 text-sm mb-">
    <p>📞 +91 8138044516</p>
    <p>✉️ rohit.ramesh@tarento.com</p>
  </div>

  <button className="mt-auto bg-green-700 hover:bg-green-800 text-white py-3 mt-5 rounded-lg font-medium">
    Save Contact
  </button>

</div>
 <div className="bg-white p-6 flex flex-col">

  <h3 className="text-gray-700 mt-40 font-semibold">
    About Tarento
  </h3>

  <p className="text-sm text-gray-500 italic mt-1 leading-6">
    Tarento Technologies is a digital engineering company specializing in enterprise software, cloud solutions, AI, and product development.
  </p>

  <div className="mt-auto space-y-4">

    <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg">
      Send Message
    </button>

    <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg">
      LinkedIn
    </button>

  </div>

</div>
</div>
  <div className="flex rounded-xl overflow-hidden shadow-lg w-3/6 h-96">


</div>
</div>

  );
}
