import React from 'react'
import { Heart, ShoppingBag, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useShopStore } from './shopStore'

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const { likes, cart } = useShopStore()

  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">📞 +998 71 200 14 41</span>
        </div>
        <div className="cursor-pointer hover:underline text-gray-600">Русский ⌄</div>
      </div>

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="bg-green-500 text-white px-2 py-1 rounded-full font-bold text-xl italic">rent</div>
          <span className="text-2xl font-bold text-slate-800 tracking-tight">market</span>
        </div>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-green-500">Как оформить</a>
          <a href="#" className="hover:text-green-500">Каталог</a>
          <a href="#" className="hover:text-green-500">О компании</a>
          <a href="#" className="hover:text-green-500">Для бизнеса</a>
        </div>

        <div className="flex gap-4 items-center">
          <button
            className="p-2 hover:bg-gray-100 rounded-full relative"
            onClick={() => navigate('/cart')}
            aria-label="open cart"
          >
            <ShoppingBag size={20} />
            {cart.length > 0 ? (
              <span className="absolute -top-1 -right-1 text-[10px] h-4 min-w-4 px-1 rounded-full bg-black text-white flex items-center justify-center">
                {cart.length}
              </span>
            ) : null}
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-full relative"
            onClick={() => navigate('/likes')}
            aria-label="open likes"
          >
            <Heart size={20} />
            {likes.length > 0 ? (
              <span className="absolute -top-1 -right-1 text-[10px] h-4 min-w-4 px-1 rounded-full bg-black text-white flex items-center justify-center">
                {likes.length}
              </span>
            ) : null}
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="profile">
            <User size={20} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar