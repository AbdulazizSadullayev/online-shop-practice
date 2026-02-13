import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-6">
      <div className="bg-[#F8F9FA] rounded-[40px] p-12 flex flex-col md:flex-row items-center justify-between min-h-[450px] relative overflow-hidden">
        
        {/* Text Content */}
        <div className="z-10 max-w-lg">
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Аренда девайсов <br /> по выгодным ценам
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            без залогов и забот о ремонте
          </p>
          <button className="bg-[#222] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-black transition-colors">
            Смотреть каталог
          </button>
        </div>

        {/* Image/Illustration Placeholder */}
        <div className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative">
             {/* Bu yerda rasm bo'lishi kerak. Biz vizual o'xshatish uchun doiralar ishlatamiz */}
             <div className="w-64 h-64 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-9xl">👤</span>
             </div>
             {/* Ikonkalar (Atrofdagi doiralar) */}
             <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">🏃</div>
             <div className="absolute top-0 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">🎮</div>
             <div className="absolute top-1/2 -right-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">🚲</div>
             <div className="absolute bottom-0 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">🧹</div>
             <div className="absolute bottom-10 -left-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">📷</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;