// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { products } from './productlist'; // Ma'lumotlar bazasi

// const ProductPage = () => {
//   const { id } = useParams();
//   const [rentPeriod, setRentPeriod] = useState('month');
//   const [count, setCount] = useState(1);

//   // ID bo'yicha mahsulotni topish
//   const product = products.find((p) => p.id === Number(id));

//   if (!product) return <div className="p-20 text-center">Mahsulot topilmadi!</div>;

//   return (
//     <div className="min-h-screen bg-[#F2F2F2] p-4 md:p-10 font-sans">
//       {/* Breadcrumbs */}
//       <nav className="text-sm text-gray-400 mb-8 max-w-7xl mx-auto">
//         <Link replace to="/" className="hover:text-gray-600">Главная</Link> / 
//         <span> Все категории</span> / 
//         <span> {product.category}</span> / 
//         <span className="text-gray-900 font-medium"> {product.title}</span>
//       </nav>

//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
//         {/* Chap tomon: Galereya */}
//         <div className="w-full lg:w-2/3 flex gap-4">
//           <div className="flex flex-col gap-2">
//             {[1, 2, 3, 4].map((_, i) => (
//               <div key={i} className="w-20 h-20 bg-white rounded-2xl p-2 border border-gray-100 cursor-pointer overflow-hidden">
//                 <img src={product.image} alt="" className="w-full h-full object-contain opacity-50 hover:opacity-100 transition-opacity" />
//               </div>
//             ))}
//           </div>
//           <div className="flex-1 bg-white rounded-[40px] p-12 flex items-center justify-center relative shadow-sm">
//              <button className="absolute left-6 text-gray-300 text-2xl">❮</button>
//              <img src={product.image} alt={product.title} className="max-h-[450px] object-contain" />
//              <button className="absolute right-6 text-gray-300 text-2xl">❯</button>
//           </div>
//         </div>

//         {/* O'ng tomon: Buyurtma paneli */}
//         <div className="w-full lg:w-1/3 bg-white rounded-[40px] p-10 shadow-sm flex flex-col">
//           <div className="flex justify-between items-start mb-4">
//             <span className="text-[13px] text-gray-400 font-medium tracking-wide">Более 70 заказов</span>
//             <button className="text-gray-300 hover:text-red-500 transition-colors text-xl">♡</button>
//           </div>
          
//           <h1 className="text-[28px] font-bold text-gray-900 leading-tight mb-8">
//             {product.title}
//           </h1>

//           {/* Ijaraga olish muddati */}
//           <div className="mb-8">
//             <p className="text-sm font-semibold text-gray-900 mb-4 tracking-wide uppercase text-[11px]">Срок аренды:</p>
//             <div className="flex gap-3">
//               <button 
//                 onClick={() => setRentPeriod('week')}
//                 className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${rentPeriod === 'week' ? 'bg-[#3D3D3D] text-white' : 'bg-gray-50 text-gray-500 border border-gray-100'}`}
//               >
//                 Неделя
//               </button>
//               <button 
//                 onClick={() => setRentPeriod('month')}
//                 className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${rentPeriod === 'month' ? 'bg-[#3D3D3D] text-white border-2 border-green-500' : 'bg-gray-50 text-gray-500 border border-gray-100'}`}
//               >
//                 Месяц <span className="text-green-400">🎁</span>
//               </button>
//             </div>
//           </div>

//           {/* Soni */}
//           <div className="mb-10">
//             <p className="text-sm font-semibold text-gray-900 mb-4 tracking-wide uppercase text-[11px]">Количество:</p>
//             <div className="flex items-center justify-between bg-[#F8F8F8] w-32 rounded-xl px-4 py-3">
//               <button onClick={() => setCount(Math.max(1, count - 1))} className="text-gray-400 font-bold text-lg hover:text-black">-</button>
//               <span className="font-bold text-gray-800">{count}</span>
//               <button onClick={() => setCount(count + 1)} className="text-gray-400 font-bold text-lg hover:text-black">+</button>
//             </div>
//           </div>

//           {/* Narx */}
//           <div className="mb-10 mt-auto">
//             <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Цена:</p>
//             <div className="flex items-center gap-4">
//                {product.oldPrice && <span className="text-red-500 line-through text-lg">{product.oldPrice}</span>}
//                <p className="text-[32px] font-black text-gray-900">{product.price1}</p>
//             </div>
//           </div>

//           {/* Tugmalar */}
//           <div className="space-y-4">
//             <button className="w-full bg-[#EAF9F1] text-[#1DBF73] py-5 rounded-[20px] font-extrabold tracking-widest text-[13px] uppercase hover:bg-[#dff5e8] transition-colors">
//               В корзину
//             </button>
//             <button className="w-full border-2 border-gray-100 text-gray-900 py-5 rounded-[20px] font-extrabold tracking-widest text-[13px] uppercase hover:bg-gray-50 transition-colors">
//               Купить сейчас
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;