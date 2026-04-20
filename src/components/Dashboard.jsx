import TopRowCard from "./TopRowCard";
import BottomLeftCard from "./BottomLeftCard";
import BottomRightCard from "./BottomRightCard";

const Dashboard = () => (
  <div className="min-h-screen bg-gray-50 p-6 md:p-10">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Customer Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Powered by June · All features automated for you</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Row 1 — full width blue card */}
        <TopRowCard />

        {/* Row 2 */}
        <BottomLeftCard />
        <BottomRightCard />
      </div>
    </div>
  </div>
);

export default Dashboard;
