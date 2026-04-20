import MetricRow from "./MetricRow";

const metrics = [
  { label: "Total seats", value: "50" },
  { label: "Active seats", value: "22" },
  { label: "Active last 7 days", value: "True" },
];

const IntercomCard = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4">
    {/* Company header */}
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 bg-indigo-900 rounded-xl flex items-center justify-center shrink-0">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h4v18H3V3zm7 0h4v18h-4V3zm7 0h4v18h-4V3z" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-gray-800 text-sm">Intercom</p>
        <p className="text-xs text-gray-400">Joined 9 Feb 2023</p>
      </div>
      <span className="ml-auto w-2.5 h-2.5 bg-green-400 rounded-full" />
    </div>

    {/* Divider */}
    <div className="border-t border-gray-100" />

    {/* Metrics */}
    <div className="flex flex-col">
      {metrics.map((m) => (
        <MetricRow key={m.label} label={m.label} value={m.value} />
      ))}
    </div>
  </div>
);

export default IntercomCard;
