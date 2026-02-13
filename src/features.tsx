import React from 'react';

const features = [
  { icon: "🛠️", title: "Техподдержка и обслуживание" },
  { icon: "🔄", title: "Замена на новый девайс в случае поломки" },
  { icon: "📍", title: "Доставка и забор" },
];

const Features: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-[#0028A0] rounded-[40px] p-10 text-white">
        <h2 className="text-3xl font-bold mb-4">Rent Market - это:</h2>
        <p className="text-blue-100 max-w-3xl mb-10 leading-relaxed">
          Первый и крупнейший в Узбекистане сервис аренды спортивные тренажёры, 
          велосипеды и современные гаджеты по подписке. Мы предлагаем гибкие условия, 
          которые позволяют нашим клиентам выбирать удобный формат аренды девайсов.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-center gap-4 hover:bg-white/20 transition-all cursor-default">
              <div className="text-2xl">{f.icon}</div>
              <p className="text-sm font-medium leading-snug">{f.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;