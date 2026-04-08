

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useShopStore } from './shopStore'

const GadgetsCard: React.FC<{ item: any }> = ({ item }) => {
  const navigate = useNavigate()
  const { addLike, addToCart } = useShopStore()

  const goToDetail = () => {
    navigate('/product', {
      state: {
        item: {
          title: item.title,
          image: item.image,
          priceWeek: item.price,
          priceMonth: item.price2,
          oldPriceMonth: item.oldPrice,
        },
      },
    })
  }

  return (
    <div
      className="bg-white rounded-[35px] p-6 shadow-sm border border-gray-100 flex flex-col relative w-full max-w-[350px] cursor-pointer hover:shadow-md transition-shadow"
      role="button"
      tabIndex={0}
      onClick={goToDetail}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') goToDetail()
      }}
    >
      {/* Heart Icon */}
      <button
        type="button"
        className="absolute top-5 right-5 text-gray-400 hover:text-red-500 transition-colors"
        onClick={(e) => {
          e.stopPropagation()
          addLike({
            title: item.title,
            image: item.image,
            priceWeek: item.price,
            priceMonth: item.price2,
            oldPriceMonth: item.oldPrice,
          })
        }}
        aria-label="favorite"
      >
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>

      {/* Title */}
      <h3 className="text-lg font-medium text-gray-700 mb-6">
        {item.title}
      </h3>

      {/* Image Container */}
      <div className="h-40 flex items-center justify-center mb-8 px-4">
        <img src={item.image} alt={item.title} className="max-h-full object-contain" />
      </div>

      {/* Pricing Section */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <p className="font-bold text-gray-900 text-lg">{item.price}</p>
          <p className="text-[11px] text-gray-400 uppercase">Аренда 1 мес.</p>
        </div>
        <div className="text-right relative">
          {item.oldPrice ? (
            <span className="absolute -top-5 right-0 text-[11px] text-red-500 line-through decoration-red-500">
              {item.oldPrice}
            </span>
          ) : null}
          <p className="font-bold text-gray-900 text-lg">{item.price2}</p>
          <p className="text-[11px] text-gray-400 uppercase">Аренда 2 мес.</p>
        </div>
      </div>

      {/* Stats/Specs (Kulrang blok) */}
      <div className="grid grid-cols-3 gap-1 bg-[#F8F8F8] rounded-2xl p-4 mb-6">
        {item.stats.map((stat: any, idx: number) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="text-xl mb-1 opacity-60 grayscale">
              <span className="text-sm border border-gray-400 rounded px-1">{stat.icon}</span>
            </div>
            <p className="text-[10px] text-gray-500 leading-tight mb-0.5">{stat.label}</p>
            {stat.value ? <p className="text-[10px] font-bold text-gray-800">{stat.value}</p> : null}
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button
        type="button"
        className="w-full bg-[#3D3D3D] text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-black transition-all"
        onClick={(e) => {
          e.stopPropagation()
          addToCart(
            {
              title: item.title,
              image: item.image,
              priceWeek: item.price,
              priceMonth: item.price2,
              oldPriceMonth: item.oldPrice,
            },
            1,
          )
          navigate('/cart')
        }}
      >
        Арендовать
      </button>
    </div>
  )
}

export default GadgetsCard