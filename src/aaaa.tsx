import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { 
  LayoutDashboard, Users, School, Package, Utensils, 
  Settings, LogOut, Bell, History, FileText, Wallet, 
  ShieldCheck, ClipboardCheck, BarChart3, Search, RefreshCw
} from 'lucide-react';

// --- ROLLAR VA TURLAR ---
type Role = 'SUPER_ADMIN' | 'ADMIN' | 'DIREKTOR' | 'OSHPAZ' | 'OMBORCHI' | 'BUXGALTER';

// --- KOMPONENTLAR: SIDEBAR ITEM ---
const SidebarItem = ({ icon: Icon, label, to }: { icon: any, label: string, to: string }) => (
  <Link to={to} className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-all">
    <Icon size={20} />
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

// --- KOMPONENTLAR: DASHBOARD KARTASI ---
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

// --- ASOSIY LAYOUT (Barcha rollar uchun umumiy) ---
const Layout = ({ children, role }: { children: React.ReactNode, role: Role }) => {
  return (
    <div className="flex min-h-screen bg-[#F4F7FE] font-sans antialiased">
      {/* Sidebar - Rolga qarab menyu o'zgaradi */}
      <aside className="w-64 bg-[#0B1437] text-white flex flex-col p-5 fixed h-full shadow-2xl z-20">
        <div className="flex items-center gap-3 px-2 mb-10 mt-2 border-b border-white/10 pb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl italic shadow-lg shadow-blue-500/30">S</div>
          <div>
            <h1 className="text-lg font-bold leading-none">SMART</h1>
            <p className="text-[10px] text-blue-400 font-bold tracking-[0.2em]">CATERING</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" to="/" /> [cite: 6]
          
          {/* Super Admin Sahifalari  */}
          {role === 'SUPER_ADMIN' && (
            <>
              <SidebarItem icon={School} label="Maktablar" to="/schools" /> [cite: 17]
              <SidebarItem icon={Users} label="Foydalanuvchilar" to="/users" /> [cite: 20]
              <SidebarItem icon={BarChart3} label="Global Hisobot" to="/global-reports" /> [cite: 24]
              <SidebarItem icon={Settings} label="Kataloglar" to="/catalog" /> [cite: 29]
              <SidebarItem icon={ShieldCheck} label="Audit Log" to="/audit" /> [cite: 34]
            </>
          )}

          {/* Admin Sahifalari  */}
          {role === 'ADMIN' && (
            <>
              <SidebarItem icon={School} label="Maktablar Paneli" to="/school-panel" /> [cite: 39]
              <SidebarItem icon={Package} label="Ombor Nazorati" to="/stock-control" /> [cite: 45]
            </>
          )}

          {/* Direktor Sahifalari  */}
          {role === 'DIREKTOR' && (
            <>
              <SidebarItem icon={FileText} label="Menyular" to="/menu-plans" /> [cite: 59]
              <SidebarItem icon={Utensils} label="Retseptlar" to="/recipes" /> [cite: 63]
            </>
          )}

          {/* Oshpaz Sahifalari  */}
          {role === 'OSHPAZ' && (
            <>
              <SidebarItem icon={Utensils} label="Bugungi Retseptlar" to="/today-recipes" /> 
              <SidebarItem icon={RefreshCw} label="Mahsulot So'rovlari" to="/product-requests" /> [cite: 81]
            </>
          )}

          {/* Omborchi Sahifalari  */}
          {role === 'OMBORCHI' && (
            <>
              <SidebarItem icon={Package} label="Ombor Harakati" to="/inventory" /> [cite: 98]
              <SidebarItem icon={ClipboardCheck} label="Inventarizatsiya" to="/audit-stock" /> [cite: 102]
            </>
          )}

          {/* Buxgalter Sahifalari  */}
          {role === 'BUXGALTER' && (
            <>
              <SidebarItem icon={Wallet} label="Xarajatlar" to="/expenses" /> 
              <SidebarItem icon={FileText} label="Arxiv" to="/archive" /> [cite: 119]
            </>
          )}
        </nav>

        <div className="pt-6 border-t border-white/10 mt-auto">
          <SidebarItem icon={Settings} label="Profil" to="/profile" /> [cite: 10]
          <button className="flex w-full items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-lg transition-all mt-2 font-semibold">
            <LogOut size={20} />
            <span>Chiqish</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white/80 backdrop-blur-md flex items-center justify-between px-10 sticky top-0 z-10 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-[#1B254B] capitalize">{role.toLowerCase().replace('_', ' ')}</h2>
            <p className="text-xs text-gray-400 font-medium">Xush kelibsiz, Azizov B. [cite: 11]</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Qidiruv..." className="bg-[#F4F7FE] border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-blue-500 transition-all" />
            </div>
            <button className="p-2.5 bg-[#F4F7FE] text-gray-500 rounded-full hover:bg-gray-200 transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span> [cite: 9]
            </button>
            <Link to="/profile" className="flex items-center gap-2 bg-[#F4F7FE] p-1.5 pr-4 rounded-full hover:bg-gray-200 transition-all">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">AB</div>
            </Link>
          </div>
        </header>

        <div className="p-10">{children}</div>
      </main>
    </div>
  );
};

// --- SAHIFA: DASHBOARD ---
const Dashboard = ({ role }: { role: Role }) => (
  <div className="space-y-10 animate-in fade-in duration-500">
    {/* Statistika Bloklari [cite: 7] */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {role === 'SUPER_ADMIN' && (
        <>
          <StatCard title="Maktablar" value="124 ta" sub="+2 yangi" icon={School} color="bg-blue-600" /> [cite: 17]
          <StatCard title="Barcha Foydalanuvchilar" value="1,450" sub="98% aktiv" icon={Users} color="bg-green-500" /> [cite: 21]
          <StatCard title="Oylik Xarajatlar" value="1.2 mlrd" sub="so'm" icon={Wallet} color="bg-purple-600" /> [cite: 27]
          <StatCard title="Tizim Loglari" value="458 ta" sub="bugun" icon={ShieldCheck} color="bg-orange-500" /> [cite: 34]
        </>
      )}
      {role === 'OMBORCHI' && (
        <>
          <StatCard title="Umumiy Qoldiq" value="12.5 tonna" sub="Me'yorda" icon={Package} color="bg-blue-600" /> [cite: 91]
          <StatCard title="Kam qolganlar" value="14 tur" sub="Zudlik bilan!" icon={Bell} color="bg-red-500" /> 
          <StatCard title="Bugungi So'rovlar" value="8 ta" sub="4 tasi kutmoqda" icon={RefreshCw} color="bg-yellow-500" /> [cite: 93]
          <StatCard title="Kirim/Chiqim" value="2,400 kg" sub="bugun" icon={History} color="bg-indigo-500" /> [cite: 98]
        </>
      )}
      {/* Boshqa rollar uchun ham shunday bloklar qo'shiladi... */}
    </div>

    {/* Pastki qism: Faoliyat va Hisobotlar [cite: 8] */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-white p-8 rounded-[30px] shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold text-[#1B254B]">Oxirgi faoliyatlar</h3> [cite: 8]
          <button className="text-blue-600 font-bold text-sm hover:underline">Hammasini ko'rish</button>
        </div>
        <div className="space-y-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex items-center gap-5 p-4 hover:bg-[#F4F7FE] rounded-2xl transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ClipboardCheck size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#1B254B]">Yangi maktab tizimga muvaffaqiyatli qo'shildi</p>
                <p className="text-xs text-gray-400 font-medium mt-1">Operator: Islomov J. • 12 daqiqa oldin</p>
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-50 px-3 py-1 rounded-full">Bajarildi</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#111C44] p-8 rounded-[30px] text-white flex flex-col relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-4">Tizim holati</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-8">
            Barcha rollar va maktablar bo'yicha ma'lumotlar avtomatik sinxronizatsiya qilinmoqda. 
            Xatoliklar aniqlanmadi.
          </p>
          <div className="space-y-4">
             <div className="flex justify-between text-sm font-bold"><span>Server holati</span><span className="text-green-400">99.9%</span></div>
             <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden"><div className="bg-green-400 h-full w-[99%] shadow-[0_0_10px_#4ade80]"></div></div>
             <div className="flex justify-between text-sm font-bold mt-4"><span>Ma'lumotlar bazasi</span><span className="text-blue-400">Aktiv</span></div>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  </div>
);

// --- ASOSIY APP ---
export default function App() {
  // Sinov uchun rol: 'SUPER_ADMIN', 'ADMIN', 'DIREKTOR', 'OSHPAZ', 'OMBORCHI', 'BUXGALTER'
  const [role] = useState<Role>('SUPER_ADMIN'); 

  return (
    <Router>
      <Routes>
        {/* Auth Sahifalari [cite: 2] */}
        <Route path="/login" element={
          <div className="h-screen flex items-center justify-center bg-[#F4F7FE]">
            <div className="bg-white p-10 rounded-[30px] shadow-xl w-full max-w-md border border-gray-100">
              <h2 className="text-3xl font-black text-[#1B254B] mb-2">Kirish</h2> [cite: 3]
              <p className="text-gray-400 text-sm mb-8 font-medium">Tizimga kirish uchun login va parolingizni kiriting</p>
              <div className="space-y-5">
                <div>
                  <label className="text-xs font-bold text-[#1B254B] ml-1 uppercase tracking-tighter">Login</label>
                  <input type="text" className="w-full mt-1.5 bg-[#F4F7FE] border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-blue-500" placeholder="admin_01" />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#1B254B] ml-1 uppercase tracking-tighter">Parol</label>
                  <input type="password" className="w-full mt-1.5 bg-[#F4F7FE] border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/30 mt-4">
                  Kirish
                </button>
                <p className="text-center text-xs text-blue-600 font-bold cursor-pointer hover:underline mt-4">Parolni unutdingizmi? [cite: 4]</p>
              </div>
            </div>
          </div>
        } />

        {/* Himoyalangan Sahifalar [cite: 5] */}
        <Route path="/" element={<Layout role={role}><Dashboard role={role} /></Layout>} />
        <Route path="/profile" element={<Layout role={role}>
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1B254B] mb-8">Shaxsiy ma'lumotlar</h2> [cite: 11]
            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-2">
                 <p className="text-xs font-bold text-gray-400 uppercase">F.I.SH</p>
                 <p className="text-lg font-bold text-[#1B254B]">Azizov Bekzod Alisherovich</p>
               </div>
               <div className="space-y-2">
                 <p className="text-xs font-bold text-gray-400 uppercase">Rol</p>
                 <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-black uppercase">{role}</span>
               </div>
               <div className="col-span-2 pt-8 border-t border-gray-100">
                 <button className="bg-[#1B254B] text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-lg">Parolni o'zgartirish</button> [cite: 12]
               </div>
            </div>
          </div>
        </Layout>} />
        
        {/* Default yo'naltirish */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}