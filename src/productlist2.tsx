import React from 'react';
import type { Equipment } from './constants';
 // Interfeysni import qilamiz

const EquipmentCard: React.FC<{ item: Equipment }> = ({ item }) => {
  return (
    <>
      {/* Screen (normal) version */}
      <div className="no-print bg-white rounded-4xl p-6 shadow-sm border border-gray-150 flex flex-col items-center relative max-w-[350px]">
        {/* Heart Icon */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          {item.title} - {item.version}
        </h3>

        {/* Image */}
        <div className="h-48 flex items-center justify-center mb-8">
          <img src={item.image} alt={item.title} className="max-h-full object-contain" />
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-2 gap-4 w-full mb-8">
          <div>
            <p className="font-bold text-gray-900">{item.price1Month}</p>
            <p className="text-xs text-gray-400">Аренда 1 мес.</p>
          </div>
          <div className="relative">
            {item.oldPrice2Months && (
              <p className="absolute -top-4 text-red-500 text-[10px] line-through decoration-red-500">
                {item.oldPrice2Months}
              </p>
            )}
            <p className="font-bold text-gray-900">{item.price2Months}</p>
            <p className="text-xs text-gray-400">Аренда 2 мес.</p>
          </div>
        </div>

        {/* Stats Icons */}
        <div className="grid grid-cols-3 gap-2 w-full bg-gray-50 rounded-2xl p-4 mb-6">
          {item.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-8 h-8 mb-1 flex items-center justify-center">
                {/* Placeholder icon - can be replaced by SVG per `iconType` */}
                <div className="border border-gray-400 rounded-md p-1 text-[8px] font-bold">KG</div>
              </div>
              <p className="text-[10px] text-gray-500 leading-tight">{stat.label}</p>
              <p className="text-[10px] font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className="w-full bg-[#3d3d3d] text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-black transition-colors">
          Арендовать
        </button>
      </div>

      {/* Print (one card per page) */}
      <div className="print-only print-break bg-white rounded-4xl p-6 shadow-none border border-gray-150 relative w-full">
        <button className="absolute top-6 right-6 text-gray-400">❤</button>

        <div className="flex gap-8 items-start">
          {/* Thumbnails */}
          <div className="w-[72px] flex flex-col gap-3 pt-2">
            {[0, 1, 2].map((i) => (
              <img
                key={i}
                src={item.image}
                alt={`${item.title} thumbnail ${i + 1}`}
                className="w-[64px] h-[64px] rounded-xl border border-gray-100 object-cover"
              />
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 flex justify-center">
            <img src={item.image} alt={item.title} className="max-h-[260px] object-contain" />
          </div>

          {/* Right details */}
          <div className="w-[360px]">
            <p className="text-sm text-gray-400 font-medium mb-2">Более 70 заказов</p>
            <h3 className="text-[20px] font-bold text-gray-800 leading-tight mb-6">
              {item.title}
              <span className="font-semibold text-gray-500"> - {item.version}</span>
            </h3>

            {/* Rent period */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-900 mb-3 tracking-wide uppercase text-[11px]">
                Срок аренды:
              </p>
              <div className="flex gap-3">
                <button className="flex-1 py-2 px-4 rounded-xl font-bold text-sm bg-gray-50 text-gray-500 border border-gray-200">
                  Неделя <span className="text-green-400">📅</span>
                </button>
                <button className="flex-1 py-2 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-[#3D3D3D] text-white border border-[#3D3D3D]">
                  Месяц
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-900 mb-3 tracking-wide uppercase text-[11px]">
                Количество:
              </p>
              <div className="flex items-center justify-between bg-[#F8F8F8] w-[150px] rounded-xl px-4 py-3">
                <button className="text-gray-400 font-bold text-lg">-</button>
                <span className="font-bold text-gray-800">1</span>
                <button className="text-gray-400 font-bold text-lg">+</button>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Цена:</p>
              <div className="flex items-baseline gap-4">
                {item.oldPrice2Months && (
                  <span className="text-red-500 line-through text-[18px] font-bold">
                    {item.oldPrice2Months}
                  </span>
                )}
                <p className="text-[30px] font-black text-gray-900">{item.price2Months}</p>
              </div>
            </div>

            {/* Features / stats */}
            <div className="grid grid-cols-3 gap-2 bg-gray-50 rounded-2xl p-3 mb-6">
              {item.stats.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 mb-1 flex items-center justify-center border border-gray-200 rounded-xl">
                    <span className="text-[10px] font-bold text-gray-500">KG</span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-tight">{stat.label}</p>
                  <p className="text-[10px] font-bold text-gray-800">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-[#EAF9F1] text-[#1DBF73] py-3 rounded-[20px] font-extrabold tracking-widest text-[13px] uppercase border border-[#DFF5E8]">
                В корзину
              </button>
              <button className="flex-1 border-2 border-gray-100 text-gray-900 py-3 rounded-[20px] font-extrabold tracking-widest text-[13px] uppercase bg-white">
                Купить сейчас
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentCard;