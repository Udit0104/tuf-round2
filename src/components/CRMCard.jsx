const crmRows = [
  { name: "Intercom", color: "bg-blue-600", seats: "22", change: "+3", positive: true },
  { name: "Amie", color: "bg-pink-300", seats: "20", change: "-2", positive: false },
];

const CRMCard = () => (
  <div className="bg-green-100 rounded-2xl shadow-sm relative min-h-[280px]">

    {/* Heading + description — top-left with padding */}
    <div className="p-6 pb-0 max-w-[75%]">
      <h2 className="text-xl font-bold text-green-800 mb-2">Integrated with your CRM</h2>
      <p className="text-sm text-green-700 leading-relaxed">
        Connect June to your CRM and sync product usage data with your CS and sales teams
      </p>
    </div>

    {/* White CRM table — flush bottom-right, no gap */}
    <div className="absolute bottom-0 right-0 w-[55%] bg-white rounded-tl-2xl rounded-br-2xl shadow-sm p-3 text-xs">

      {/* Header row */}
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-100">
        <span className="font-semibold text-gray-800 text-xs">CRM</span>
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="currentColor">
              <path d="M3.5 12A8.5 8.5 0 0 1 12 3.5c1.8 0 3.47.56 4.85 1.52L4.02 16.85A8.46 8.46 0 0 1 3.5 12Zm1.17 5.98L16.98 5.67A8.5 8.5 0 0 1 5.67 17.98ZM12 20.5a8.46 8.46 0 0 1-4.85-1.52l12.83-12.83A8.5 8.5 0 0 1 12 20.5Z"/>
            </svg>
          </div>
          <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="currentColor">
              <path d="M18.16 8.57V6.4a1.6 1.6 0 1 0-1.6 0v2.17a4.57 4.57 0 0 0-2.18 1.27L8.1 6.38a1.8 1.8 0 1 0-.9 1.56l6.1 3.4a4.56 4.56 0 0 0 0 2.32l-1.56.9a1.8 1.8 0 1 0 .9 1.56l1.7-.98a4.57 4.57 0 1 0 3.72-6.57Z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Column headers */}
      <div className="flex items-center justify-between text-xs text-gray-400 mb-1 px-1">
        <span>Company</span>
        <span className="flex items-center gap-1">
          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12H1v2h8v-2zm0-4H1v2h8V8zm0-4H1v2h8V4zm4 0v12l5-6-5-6z"/>
          </svg>
          Active seats
        </span>
      </div>

      {/* Rows */}
      {crmRows.map(({ name, color, seats, change, positive }) => (
        <div
          key={name}
          className="flex items-center justify-between py-2 border-t border-gray-100 text-xs"
        >
          <div className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded-full ${color} flex-shrink-0`} />
            <span className="text-gray-700 font-medium">{name}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-800 font-semibold">{seats}</span>
            <span className={`text-xs font-semibold ${positive ? "text-green-600" : "text-red-500"}`}>
              ({change})
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CRMCard;
