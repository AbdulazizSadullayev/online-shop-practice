import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, School, Package, Utensils, Settings, LogOut, BarChart3, ShieldCheck, ClipboardCheck, Wallet, RefreshCw } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, to }: { icon: any, label: string, to: string }) => (
  <Link to={to} className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-all">
    <Icon size={20} />
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

const Sidebar = ({ role }: { role: string }) => {
  return (
    <aside className="w-64 bg-[#0B1437] text-white flex flex-col p-5 fixed h-full shadow-2xl z-20">
      <div className="flex items-center gap-3 px-2 mb-10 mt-2 border-b border-white/10 pb-6">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl italic">S</div>
        <div>
          <h1 className="text-lg font-bold leading-none">SMART</h1>
          <p className="text-[10px] text-blue-400 font-bold tracking-[0.2em]">CATERING</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" to="/" />
        {role === 'SUPER_ADMIN' && (
          <>
            <SidebarItem icon={School} label="Maktablar" to="/schools" />
            <SidebarItem icon={Users} label="Foydalanuvchilar" to="/users" />
            <SidebarItem icon={BarChart3} label="Global Hisobot" to="/global-reports" />
          </>
        )}
        {role === 'OMBORCHI' && (
          <>
            <SidebarItem icon={Package} label="Ombor" to="/inventory" />
            <SidebarItem icon={RefreshCw} label="So'rovlar" to="/requests" />
          </>
        )}
        {/* Boshqa rollarni ham shu yerga qo'shing */}
      </nav>

      <div className="pt-6 border-t border-white/10">
        <SidebarItem icon={Settings} label="Profil" to="/profile" />
        <button className="flex w-full items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-lg mt-2 font-semibold">
          <LogOut size={20} /> <span>Chiqish</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;