import featuresBanner from './images/featuresBanner.png'
const FeaturesBanner = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7H4a2 2 0 00-2 2v5a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM17 7V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
        </svg>
      ),
      text: "Заряда батареи хватает на 98км"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      text: "Усиленная рама для любых дорог"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: "Высокая скорость до 40 км/час"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A2 2 0 013 15.488V5.512a2 2 0 011.553-1.96l7-1.75a2 2 0 01.894 0l7 1.75A2 2 0 0121 5.512v9.976a2 2 0 01-1.553 1.788L14 20l-1 1-1-1z" />
        </svg>
      ),
      text: "Идеальные шины для бездорожья"
    }
  ];

  return (
    <div className="w-full bg-[#002B9A] rounded-[40px] p-8 md:p-12 mt-12 overflow-hidden flex flex-col md:flex-row items-center gap-10">
      
      {/* Chap tomonda rasm qismi */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={featuresBanner} // O'zingizni rasm manzilingizni qo'ying
          alt="Treadmill" 
          className="max-w-full h-auto object-contain transform -scale-x-100" 
        />
      </div>

      {/* O'ng tomonda matn qismi */}
      <div className="w-full md:w-1/2 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
          Наши байки <br /> разработаны для работы
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                {feature.icon}
              </div>
              <p className="text-sm md:text-base font-medium leading-snug max-w-[180px]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FeaturesBanner;