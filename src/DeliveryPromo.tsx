
import { Battery, Bike, Gauge, Armchair } from 'lucide-react'; // Iconlar uchun
import kuryer from './images/kuryer.png'

const DeliveryBikeCard = () => {
  const features = [
    {
      icon: <Battery size={24} />,
      title: "Zaryada batarei",
      desc: "xvataet na 75km"
    },
    {
      icon: <Bike size={24} />,
      title: "Usilennaya rama dlya",
      desc: "lyubix dorog"
    },
    {
      icon: <Gauge size={24} />,
      title: "Visokaya skorost",
      desc: "do 50 km/chas"
    },
    {
      icon: <Armchair size={24} />,
      title: "Udobnoe sidenye dlya",
      desc: "dolgoy poezdki"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-[#002BBD] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center overflow-hidden text-white font-sans">
      {/* Chap tomon: Matnlar va Ikonkalar */}
      <div className="flex-1 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Nashi bayki razrabotani <br /> dlya raboti v dostavke
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-sm leading-snug">
                <span className="block font-medium">{item.title}</span>
                <span className="opacity-80">{item.desc}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* O'ng tomon: Kuryer va Velosiped */}
      <div className="flex-1 relative mt-8 md:mt-0">
        <img 
          src = {kuryer} // Bu yerga kuryer rasmini qo'yasiz
          alt="Delivery guy" 
          className="w-full h-auto object-cover scale-110"
        />
      </div>
    </div>
  );
};

export default DeliveryBikeCard;