import InnerInfoCard from "./InnerInfoCard";

const BottomLeftCard = () => (
  <div className="bg-purple-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
    <div>
      <h2 className="text-xl font-bold text-purple-800 mb-1">Celebrate milestones</h2>
      <p className="text-sm text-purple-600 leading-relaxed">
        Instant alerts and weekly digests to keep your team aligned and celebrate wins
      </p>
    </div>
    <InnerInfoCard />

    {/* Footer badges */}
    <div className="flex flex-col gap-2 mt-1">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="text-green-500 font-bold">⚡</span>
        <span>Last seen</span>
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
          today
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="text-green-500 font-bold">⚡</span>
        <span>Activated</span>
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
          true
        </span>
      </div>
    </div>
  </div>
);

export default BottomLeftCard;
