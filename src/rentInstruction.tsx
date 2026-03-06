import React from 'react';
import { steps } from './instruction';

const RentInstruction = () => {
  return (
    <div className="py-16 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Sarlavha */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12 ml-4">
          Как арендовать ?
        </h2>

        {/* Bosqichlar Gridi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white rounded-[40px] p-10 h-[450px] flex flex-col justify-between relative overflow-hidden shadow-sm"
            >
              {/* Katta raqam va sariq detal */}
              <div className="flex justify-between items-start">
                <span className="text-[120px] font-bold text-[#333] leading-none">
                  {step.id}
                </span>
                {step.hasYellowBox && (
                  <div className="w-6 h-16 bg-[#F1F500] mt-4 mr-2"></div>
                )}
              </div>

              {/* Matnli qism */}
              <div className="flex flex-col gap-6">
                {/* Yashil tugmacha ko'rinishidagi matn */}
                <div className="inline-block border-2 border-[#00FF00] rounded-full px-6 py-3 self-start">
                  <span className="text-gray-900 font-bold text-sm">
                    {step.buttonText}
                  </span>
                </div>

                {/* Tavsif */}
                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentInstruction;