import IntercomCard from "./IntercomCard";
import ActivationCard from "./ActivationCard";

const TopRowCard = () => (
  <div className="bg-gradient-to-br from-blue-100 via-sky-100 to-cyan-50 rounded-2xl p-8 shadow-sm col-span-1 lg:col-span-2">
    <div className="flex flex-col lg:flex-row items-start gap-6">

      {/* Left — heading */}
      <div className="lg:w-1/3 flex flex-col justify-center h-full pt-2">
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          We automatically generate reports for each of your customers
        </h2>
      </div>

      {/* Right — two cards side by side, staggered vertically */}
      <div className="flex-1 flex items-start gap-4">
        {/* Intercom card — higher */}
        <div className="flex-[1.1] mt-0">
          <IntercomCard />
        </div>
        {/* Activation card — slightly lower */}
        <div className="flex-1 mt-8">
          <ActivationCard />
        </div>
      </div>

    </div>
  </div>
);

export default TopRowCard;
