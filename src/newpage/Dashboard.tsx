
import { School, Users, Wallet, ShieldCheck} from 'lucide-react';
import StatCard from '../newpage/StatCard';

const Dashboard = ({ role }: { role: string }) => (
  <div className="space-y-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {role === 'SUPER_ADMIN' && (
        <>
          <StatCard title="Maktablar" value="124 ta" sub="+2 yangi" icon={School} color="bg-blue-600" />
          <StatCard title="Foydalanuvchilar" value="1,450" sub="98% aktiv" icon={Users} color="bg-green-500" />
          <StatCard title="Oylik Xarajatlar" value="1.2 mlrd" sub="so'm" icon={Wallet} color="bg-purple-600" />
          <StatCard title="Tizim Loglari" value="458 ta" sub="bugun" icon={ShieldCheck} color="bg-orange-500" />
        </>
      )}
    </div>

    <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-[#1B254B] mb-8">Oxirgi faoliyatlar</h3>
      <div className="space-y-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center gap-5 p-4 hover:bg-[#F4F7FE] rounded-2xl transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center italic font-bold">A</div>
            <div className="flex-1">
              <p className="text-sm font-bold text-[#1B254B]">Yangi maktab tizimga qo'shildi</p>
              <p className="text-xs text-gray-400">12 daqiqa oldin</p>
            </div>
            <span className="text-xs font-bold text-green-500">Bajarildi</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Dashboard;