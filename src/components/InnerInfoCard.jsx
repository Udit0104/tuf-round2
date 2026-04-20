const fields = [
  { label: "Company name:", value: "Intercom", link: false },
  { label: "Location:", value: "Dublin, Ireland", link: false },
  { label: "Role:", value: "CTO & Co-Founder", link: false },
  { label: "Company website:", value: "intercom.io", link: true },
  { label: "Company size:", value: "800", link: false },
  { label: "LinkedIn:", value: "View profile", link: true },
  { label: "Funding amount:", value: "33M", link: false },
  { label: "Crunchbase:", value: "View company", link: true },
];

const InnerInfoCard = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-sm">
    {/* Notification header */}
    <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center">
          <span className="text-blue-600 text-xs font-bold">J</span>
        </div>
        <span className="font-medium text-gray-700">June</span>
        <span className="text-xs text-gray-400">APP · 10:36 AM</span>
      </div>
      <div className="flex gap-1">
        <div className="w-4 h-4 bg-pink-400 rounded-sm" />
        <div className="w-4 h-4 bg-yellow-400 rounded-sm" />
        <div className="w-4 h-4 bg-green-400 rounded-sm" />
      </div>
    </div>

    <p className="text-yellow-600 font-semibold text-xs mb-1">🏆 Qualified signup</p>
    <p className="text-gray-600 text-xs mb-3">
      👤 Eoghan McCabe{" "}
      <a href="#" className="text-blue-500 hover:underline">
        eoghan@intercom.io
      </a>
    </p>

    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {fields.map(({ label, value, link }) => (
        <div key={label}>
          <p className="text-gray-400 text-xs">{label}</p>
          {link ? (
            <a href="#" className="text-blue-500 text-xs hover:underline">
              {value}
            </a>
          ) : (
            <p className="text-gray-700 text-xs font-medium">{value}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default InnerInfoCard;
