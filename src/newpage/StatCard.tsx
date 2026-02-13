
const StatCard = ({ title, value, sub, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-start">
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
      {sub && <p className="text-xs text-green-600 mt-1 font-medium">{sub}</p>}
    </div>
    <div className={`p-3 rounded-xl ${color} text-white shadow-inner`}>
      <Icon size={24} />
    </div>
  </div>
);

export default StatCard;