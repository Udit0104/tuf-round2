const MetricRow = ({ label, value }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 text-sm">
    <span className="flex items-center gap-2 text-gray-500">
      <span className="text-green-500 font-bold">⚡</span>
      {label}
    </span>
    <span className="font-semibold text-gray-800">{value}</span>
  </div>
);

export default MetricRow;
