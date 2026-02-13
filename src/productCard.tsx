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
  <div className="bg-white p-5 rounded-[30px] shadow-sm border border-gray-100 flex flex-col h-full">
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
);

export default ProductCard;