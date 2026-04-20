import IntercomCard from "./IntercomCard";
import ActivationCard from "./ActivationCard";

const TopRowCard = () => (
  <div className="col-span-1 lg:col-span-2">
    {/*
      Outer wrapper: relative + overflow-visible so the Activation card
      can hang below the blue area without clipping.
    */}
    <div className="relative">
      {/* Blue background — sized to cover heading + Intercom card height */}
      <div className="bg-gradient-to-br from-blue-100 via-sky-100 to-cyan-50 rounded-2xl shadow-sm px-8 py-10 flex flex-col lg:flex-row items-start gap-6">

        {/* Left — heading, vertically centred in the blue area */}
        <div className="lg:w-[32%] flex items-center self-stretch">
          <h2 className="text-2xl font-bold text-gray-800 leading-snug">
            We automatically generate reports for each of your customers
          </h2>
        </div>

        {/*
          Right spacer — keeps the blue card wide enough.
          The actual white cards are absolutely positioned on top.
        */}
        <div className="flex-1 flex items-start gap-4 invisible" aria-hidden="true">
          <div className="flex-[1.1]">
            <IntercomCard />
          </div>
          <div className="flex-1 mt-10">
            <ActivationCard />
          </div>
        </div>
      </div>

      {/* Real white cards — absolutely placed over the right side */}
      <div className="absolute top-6 right-6 flex items-start gap-4 w-[65%]">
        {/* Intercom card — sits higher */}
        <div className="flex-[1.1]">
          <IntercomCard />
        </div>
        {/* Activation card — sits lower */}
        <div className="flex-1 mt-10">
          <ActivationCard />
        </div>
      </div>
    </div>
  </div>
);

export default TopRowCard;
