import TopRowCard from "./TopRowCard";
import BottomLeftCard from "./BottomLeftCard";
import BottomRightCard from "./BottomRightCard";

const Dashboard = () => (
  <div className="min-h-screen bg-gray-50 p-6 md:p-10">
    <div className="max-w-6xl mx-auto">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Customer Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Powered by June · All features automated for you
        </p>
      </div>

      {/* Row 1 — full-width blue card */}
      <div className="mb-6">
        <TopRowCard />
      </div>

      {/* Row 2 — two columns, right column offset lower */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left — purple card, starts at top */}
        <div>
          <BottomLeftCard />
        </div>

        {/* Right — yellow + green cards, pushed down to match reference */}
        <div className="lg:mt-16">
          <BottomRightCard />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
