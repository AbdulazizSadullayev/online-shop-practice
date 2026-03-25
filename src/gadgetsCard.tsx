

const GadgetsCard = ({ item }: any) => {
  return (
    <>
      {/* Screen (normal) version */}
      <div className="no-print bg-white rounded-[35px] p-6 shadow-sm border border-gray-100 flex flex-col relative w-full max-w-[350px]">
        {/* Heart Icon */}
        <button className="absolute top-5 right-5 text-gray-400 hover:text-red-500 transition-colors">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>

        {/* Title */}
        <h3 className="text-lg font-medium text-gray-700 mb-6">{item.title}</h3>

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
            <span className="absolute -top-5 right-0 text-[11px] text-red-500 line-through decoration-red-500">
              {item.oldPrice}
            </span>
            <p className="font-bold text-gray-900 text-lg">{item.price2}</p>
            <p className="text-[11px] text-gray-400 uppercase">Аренда 2 мес.</p>
          </div>
        </div>

        {/* Stats/Specs (Kulrang blok) */}
        <div className="grid grid-cols-3 gap-1 bg-[#F8F8F8] rounded-2xl p-4 mb-6">
          {item.stats.map((stat: any, idx: any) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="text-xl mb-1 opacity-60 grayscale">
                <span className="text-sm border border-gray-400 rounded px-1">{stat.icon}</span>
              </div>
              <p className="text-[10px] text-gray-500 leading-tight mb-0.5">{stat.label}</p>
              {stat.value && <p className="text-[10px] font-bold text-gray-800">{stat.value}</p>}
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className="w-full bg-[#3D3D3D] text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-black transition-all">
          Арендовать
        </button>
      </div>

      {/* Print (one card per page) */}
      <div className="print-only print-break bg-white p-6 rounded-[30px] shadow-none border border-gray-100 relative w-full">
        <button className="absolute top-6 right-6 text-gray-300">❤</button>

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

          {/* Details */}
          <div className="w-[360px]">
            <p className="text-sm text-gray-400 font-medium mb-2">Более 70 заказов</p>
            <h3 className="text-[20px] font-bold text-gray-800 leading-tight mb-6">{item.title}</h3>

            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-900 mb-3 tracking-wide uppercase text-[11px]">Срок аренды:</p>
              <div className="flex gap-3">
                <button className="flex-1 py-2 px-4 rounded-xl font-bold text-sm bg-[#3D3D3D] text-white border border-[#3D3D3D]">
                  1 мес.
                </button>
                <button className="flex-1 py-2 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-gray-50 text-gray-500 border border-gray-200">
                  2 мес.
                </button>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-900 mb-3 tracking-wide uppercase text-[11px]">Количество:</p>
              <div className="flex items-center justify-between bg-[#F8F8F8] w-[150px] rounded-xl px-4 py-3">
                <button className="text-gray-400 font-bold text-lg">-</button>
                <span className="font-bold text-gray-800">1</span>
                <button className="text-gray-400 font-bold text-lg">+</button>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Цена:</p>
              <div className="flex items-baseline gap-4">
                {item.oldPrice && (
                  <span className="text-[12px] text-red-500 line-through font-bold">{item.oldPrice}</span>
                )}
                <p className="text-[30px] font-black text-gray-900">{item.price}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-gray-50 rounded-2xl p-3 mb-6">
              {item.stats.slice(0, 3).map((stat: any, idx: number) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="text-gray-500 mb-1">
                    <span className="text-sm border border-gray-300 rounded px-1">{stat.icon}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-tight">{stat.label}</p>
                  {stat.value ? <p className="text-[10px] font-bold text-gray-800">{stat.value}</p> : null}
                </div>
              ))}
            </div>

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

export default GadgetsCard;