import { partners } from "./partnersData";

const PartnersSection = () => {
  return (
    <section className="bg-[#F2F2F2] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10 ml-2">
          Наши партнеры
        </h2>

        {/* Logotiplar Gridi */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-white rounded-[25px] h-32 flex items-center justify-center p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;