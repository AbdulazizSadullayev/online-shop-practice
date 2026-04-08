import { Heart, ShoppingCart, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useShopStore } from './shopStore'

export default function LikesPage() {
  const navigate = useNavigate()
  const { likes, removeLike, addToCart } = useShopStore()

  return (
    <div className="min-h-screen bg-[#F4F7FE] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-[#1B254B] mb-8">Избранное</h1>

        {likes.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center">
            <Heart className="mx-auto text-gray-300 mb-4" size={36} />
            <p className="text-gray-500 mb-5">Пока нет понравившихся товаров.</p>
            <button className="px-6 py-3 rounded-xl bg-[#3D3D3D] text-white font-bold" onClick={() => navigate('/')}>
              В каталог
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {likes.map((item) => (
              <div key={`${item.title}-${item.image}`} className="bg-white rounded-3xl p-5 flex gap-4 items-center">
                <div className="w-24 h-24 rounded-2xl bg-gray-50 overflow-hidden flex items-center justify-center">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.priceMonth}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="h-10 w-10 rounded-xl bg-[#EAF9F1] text-[#1DBF73] flex items-center justify-center"
                    onClick={() => addToCart(item, 1)}
                    aria-label="add to cart"
                  >
                    <ShoppingCart size={18} />
                  </button>
                  <button
                    className="h-10 w-10 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center"
                    onClick={() => removeLike(item.title)}
                    aria-label="remove like"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
