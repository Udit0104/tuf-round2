const crmRows = [
  { name: "Intercom", color: "bg-blue-500", seats: "22", change: "+3", positive: true },
  { name: "Amie", color: "bg-pink-400", seats: "20", change: "-2", positive: false },
];

const CRMCard = () => (
  <div className="bg-green-50 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
    <div>
      <h2 className="text-xl font-bold text-green-800 mb-1">Integrated with your CRM</h2>
      <p className="text-sm text-green-700 leading-relaxed">
        Connect June to your CRM and sync product usage data with your CS and sales teams
      </p>
    </div>

    {/* CRM table card */}
    <div className="bg-white rounded-xl border border-green-100 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-gray-700 text-sm">CRM</span>
        <div className="flex items-center gap-2">
          {/* CRM logos placeholder */}
          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            L
          </div>
          <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
            H
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-400 mb-2 px-1">
        <span>Company</span>
        <span className="flex items-center gap-1">
          <span>🪑</span> Active seats
        </span>
      </div>

      {crmRows.map(({ name, color, seats, change, positive }) => (
        <div
          key={name}
          className="flex items-center justify-between py-2 border-t border-gray-50 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-sm ${color}`} />
            <span className="text-gray-700 font-medium">{name}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-800 font-semibold">{seats}</span>
            <span
              className={`text-xs font-medium ${
                positive ? "text-green-600" : "text-red-500"
              }`}
            >
              ({change})
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CRMCard;
