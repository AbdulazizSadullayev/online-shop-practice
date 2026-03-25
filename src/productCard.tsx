// Kartochka uchun interfeys
interface ProductProps {
  name: string;
  priceWeek: string;
  priceMonth: string;
  oldPriceMonth?: string;
  image: string;
  features: { icon: any; label: string }[];
}

const ProductCard = ({ name, priceWeek, priceMonth, oldPriceMonth, image, features }: ProductProps) => (
  <>
    {/* Screen (normal) version */}
    <div className="no-print bg-white p-5 rounded-[30px] shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-500 font-medium text-sm">{name}</h3>
        <button className="text-gray-300">❤</button>
      </div>
      <div className="h-40 flex items-center justify-center mb-4">
        <img src={image} alt={name} className="max-h-full object-contain" />
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div>
          <p className="text-lg font-bold">{priceWeek}</p>
          <p className="text-[10px] text-gray-400 uppercase font-bold">Arenda 7 d.</p>
        </div>
        <div className="text-right">
          {oldPriceMonth && <p className="text-[10px] text-red-400 line-through font-bold">{oldPriceMonth}</p>}
          <p className="text-lg font-bold">{priceMonth}</p>
          <p className="text-[10px] text-gray-400 uppercase font-bold">Arenda 1 mes.</p>
        </div>
      </div>
      <div className="flex justify-between bg-gray-50 rounded-2xl p-3 mb-4">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-gray-400">{f.icon}</div>
            <span className="text-[8px] text-gray-400 font-bold uppercase text-center w-10 leading-tight">{f.label}</span>
          </div>
        ))}
      </div>

      <button className="w-full bg-[#222] text-white font-bold py-3 rounded-xl uppercase text-[10px] tracking-widest mt-auto">
        Arendovat
      </button>
    </div>

    {/* Print (one card per page) */}
    <div className="print-only print-break bg-white p-6 rounded-[30px] shadow-none border border-gray-100 relative w-full">
      <button className="absolute top-6 right-6 text-gray-300">❤</button>

      <div className="flex gap-8 items-start">
        {/* Thumbnails column */}
        <div className="flex flex-col gap-3 pt-2">
          {[0, 1, 2].map((i) => (
            <img
              key={i}
              src={image}
              alt={`${name} thumbnail ${i + 1}`}
              className="w-[66px] h-[66px] rounded-xl border border-gray-100 object-cover"
            />
          ))}
        </div>

        {/* Main image */}
        <div className="flex-1 flex justify-center">
          <img src={image} alt={name} className="max-h-[260px] object-contain" />
        </div>

        {/* Details */}
        <div className="w-[360px]">
          <p className="text-sm text-gray-400 font-medium mb-2">Более 70 заказов</p>
          <h3 className="text-[18px] font-bold text-gray-900 leading-tight mb-5">{name}</h3>

          <div className="mb-5">
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Срок аренды:</p>
            <div className="flex gap-3">
              <button className="flex-1 py-2 rounded-xl font-bold text-[12px] bg-[#3D3D3D] text-white border border-[#3D3D3D]">
                Неделя
              </button>
              <button className="flex-1 py-2 rounded-xl font-bold text-[12px] bg-gray-50 text-gray-500 border border-gray-200">
                Месяц
              </button>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Количество:</p>
            <div className="flex items-center justify-between bg-[#F8F8F8] w-[150px] rounded-xl px-4 py-3">
              <button className="text-gray-400 font-bold text-lg">-</button>
              <span className="font-bold text-gray-800">1</span>
              <button className="text-gray-400 font-bold text-lg">+</button>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Цена:</p>
            <div className="flex items-baseline gap-4">
              {oldPriceMonth && (
                <span className="text-[12px] text-red-500 line-through font-bold">
                  {oldPriceMonth}
                </span>
              )}
              <p className="text-[28px] font-black text-gray-900">{priceWeek}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 bg-gray-50 rounded-2xl p-3 mb-6">
            {features.slice(0, 3).map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-gray-400">{f.icon}</div>
                <span className="text-[8px] text-gray-500 font-bold uppercase leading-tight">{f.label}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-[#EAF9F1] text-[#1DBF73] py-3 rounded-xl font-extrabold tracking-widest text-[12px] uppercase border border-[#E0F4E6]">
              В корзину
            </button>
            <button className="flex-1 border-2 border-gray-100 text-gray-900 py-3 rounded-xl font-extrabold tracking-widest text-[12px] uppercase bg-white">
              Купить сейчас
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ProductCard;