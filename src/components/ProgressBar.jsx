const ProgressBar = ({ label, value, color = "bg-blue-500" }) => (
  <div className="flex items-center gap-3 text-sm">
    <span className="w-24 text-gray-600 shrink-0">{label}</span>
    <div className="flex-1 bg-gray-100 rounded-full h-2">
      <div
        className={`${color} h-2 rounded-full transition-all duration-500`}
        style={{ width: `${value}%` }}
      />
    </div>
    <span className="w-10 text-right text-blue-600 font-medium text-xs">{value}%</span>
  </div>
);

export default ProgressBar;
