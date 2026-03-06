import { addressSections } from './addressData';

const AddressSection = () => {
  return (
    <section className="bg-[#F2F2F2] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 ml-2">
          Мы находимся по адресу
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Chap tomondagi matnli blok */}
          <div className="w-full md:w-1/2 bg-white rounded-[35px] p-10 flex flex-col gap-8 shadow-sm">
            {addressSections.map((section) => (
              <div key={section.id} className="flex flex-col gap-3">
                <h4 className="text-xl font-bold text-gray-800">
                  {section.title}
                </h4>
                
                <div className="text-gray-500 text-sm leading-relaxed">
                  {section.content.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>

                {section.subInfo && (
                  <p className="text-gray-400 text-sm whitespace-pre-line mt-2">
                    {section.subInfo}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* O'ng tomondagi Xarita bloki */}
          <div className="w-full md:w-1/2 h-[500px] md:h-auto bg-white rounded-[35px] overflow-hidden shadow-sm relative">
            {/* Google Maps iframe yoki rasm joylashtirish mumkin */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.4644754541316!2d69.243555!3d41.300645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzAyLjMiTiA2OcKwMTQnMzYuOCJF!5e0!3m2!1suz!2s!4v1625123456789" 
              className="w-full h-full border-0"
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;