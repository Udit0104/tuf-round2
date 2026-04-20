import IntercomCard from "./IntercomCard";
import ActivationCard from "./ActivationCard";

const StatsCard = () => (
  <div className="flex items-start gap-3">
    {/* Intercom card — slightly higher (no top offset) */}
    <div className="flex-[1.1] mt-0">
      <IntercomCard />
    </div>

    {/* Activation card — slightly lower */}
    <div className="flex-1 mt-6">
      <ActivationCard />
    </div>
  </div>
);

export default StatsCard;
