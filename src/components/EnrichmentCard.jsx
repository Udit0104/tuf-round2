const enrichedFields = [
  { icon: "🌐", label: "Website", value: "intercom.io" },
  { icon: "📍", label: "Location", value: "Dublin, Ireland" },
  { icon: "👥", label: "Employees", value: "800" },
  { icon: "🐦", label: "Twitter", value: "@intercom" },
  { icon: "💰", label: "Funding", value: "$241M" },
  { icon: "✅", label: "Qualified", value: "true", green: true },
];

const EnrichmentCard = () => (
  <div className="bg-amber-50 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-xl font-bold text-amber-800 mb-1">Automatic enrichment</h2>
        <p className="text-sm text-amber-700 leading-relaxed">
          Automatically enrich your customers profiles and their users powered by GPT
        </p>
      </div>
      {/* Logo badge */}
      <div className="w-12 h-12 bg-indigo-900 rounded-xl flex items-center justify-center shrink-0">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h4v18H3V3zm7 0h4v18h-4V3zm7 0h4v18h-4V3z" />
        </svg>
      </div>
    </div>

    {/* Enriched inner card */}
    <div className="bg-white rounded-xl border border-amber-100 p-4">
      <p className="text-purple-600 font-semibold text-sm mb-3 flex items-center gap-1">
        ✦ Enriched with AI
      </p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        {enrichedFields.map(({ icon, label, value, green }) => (
          <div key={label} className="flex items-center gap-2 text-sm">
            <span className="text-gray-400 text-xs">{icon}</span>
            <span className="text-gray-400 w-16 shrink-0">{label}</span>
            <span className={`font-medium ${green ? "text-green-600" : "text-gray-700"}`}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default EnrichmentCard;
