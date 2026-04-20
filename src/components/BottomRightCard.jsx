import EnrichmentCard from "./EnrichmentCard";
import CRMCard from "./CRMCard";

const BottomRightCard = () => (
  <div className="flex flex-col gap-4">
    <EnrichmentCard />
    <CRMCard />
  </div>
);

export default BottomRightCard;
