import { Search, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ role }: { role: string }) => (
  <header className="h-20 bg-white/80 backdrop-blur-md flex items-center justify-between px-10 sticky top-0 z-10 border-b border-gray-100">
    <div>
      <h2 className="text-xl font-bold text-[#1B254B] capitalize">{role.toLowerCase().replace('_', ' ')}</h2>
      <p className="text-xs text-gray-400 font-medium">Xush kelibsiz, Azizov B.</p>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative hidden md:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <input type="text" placeholder="Qidiruv..." className="bg-[#F4F7FE] border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-blue-500" />
      </div>
      <button className="p-2.5 bg-[#F4F7FE] text-gray-500 rounded-full relative">
        <Bell size={20} />
        <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
      <Link to="/profile" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">AB</Link>
    </div>
  </header>
);

export default Navbar;