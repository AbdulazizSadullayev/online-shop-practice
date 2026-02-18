import React from 'react';
import type { Equipment } from './constants';
 // Interfeysni import qilamiz

const EquipmentCard: React.FC<{ item: Equipment }> = ({ item }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center relative max-w-[350px]">
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
              {/* Bu yerda stat.iconType ga qarab SVG iconlar qo'yiladi */}
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
  );
};

export default EquipmentCard;