import { footerLinks } from './footerData';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <div className="border-2 border-[#00FF00] rounded-full px-4 py-1">
              <span className="text-2xl font-bold italic">rent</span>
            </div>
            <span className="text-2xl font-bold">market</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Kontaktlar */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">График работы:</h4>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Ежедневно</p>
              <p>10:00 - 20:00</p>
            </div>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Бешагач, 55/1 Чиланзарский район,</p>
              <p>Ташкент, 100066</p>
            </div>
            <p className="text-xl font-bold">+998 71 200 14 41</p>
          </div>

          {/* Navigatsiya 1 */}
          <ul className="space-y-4">
            {footerLinks.col1.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-gray-400 hover:text-[#00FF00] transition-colors border-b border-gray-700 pb-1 inline-block w-full md:w-auto">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Navigatsiya 2 */}
          <ul className="space-y-4">
            {footerLinks.col2.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-gray-400 hover:text-[#00FF00] transition-colors border-b border-gray-700 pb-1 inline-block w-full md:w-auto">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Ijtimoiy tarmoqlar va Apps */}
          <div className="space-y-8">
            <div className="flex gap-4">
              {['telegram', 'whatsapp', 'facebook', 'instagram', 'youtube'].map((social) => (
                <div key={social} className="w-10 h-10 bg-[#00FF00] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform text-black">
                  {/* Icon placeholder */}
                  <div className="w-5 h-5 border border-black/20 rounded-sm"></div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-3">
              <button className="bg-transparent border border-gray-600 rounded-lg py-2 px-4 flex items-center gap-3 hover:bg-gray-800">
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                <div className="text-left"><p className="text-[10px] text-gray-400">GET IT ON</p><p className="text-sm font-bold">Google Play</p></div>
              </button>
              <button className="bg-transparent border border-gray-600 rounded-lg py-2 px-4 flex items-center gap-3 hover:bg-gray-800">
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                <div className="text-left"><p className="text-[10px] text-gray-400">Download on the</p><p className="text-sm font-bold">App Store</p></div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex justify-between text-gray-600 text-xs">
          <p>OOO "GETNOW"</p>
          <p>ИНН: 310169464</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;