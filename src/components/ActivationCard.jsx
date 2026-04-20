import ProgressBar from "./ProgressBar";

const progressItems = [
  { label: "Signed up", value: 100 },
  { label: "Setup", value: 80 },
  { label: "Aha moment", value: 60 },
  { label: "Activated", value: 40 },
  { label: "Active", value: 80 },
];

const ActivationCard = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3">
    <div>
      <p className="text-xs text-gray-500 mb-0.5">Company activation</p>
      <p className="text-3xl font-bold text-gray-800">40%</p>
    </div>
    <div className="flex flex-col gap-2">
      {progressItems.map((item) => (
        <ProgressBar key={item.label} label={item.label} value={item.value} />
      ))}
    </div>
  </div>
);

export default ActivationCard;
