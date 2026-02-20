
import { equipmentData } from './constants'
import DeliveryPromo from './DeliveryPromo'
import Features from './features'
import FeaturesBanner from './featuresbanner'
import Hero from './hero'
import Navbar from './navbar'
import ProductList from './productlist'
import EquipmentCard from './productlist2'



const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <div className="min-h-screen bg-[#F4F7FE] p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-black text-[#1B254B] mb-8">Ijara Katalogi</h1>
        <ProductList />
      </div>
    </div>
      </main>
      <DeliveryPromo />
      <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-gray-800 text-center md:text-left">
          Спортивные тренажеры
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {equipmentData.map((item) => (
            <EquipmentCard key={item.id} item={item} />
          ))}
        </div>
        <FeaturesBanner/>
      </div>
    </div>

    </div>
    
  )
}

export default App

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Sidebar from './newpage/Sidebar';
// import Navbar from './newpage/navbarr';
// import Dashboard from './newpage/Dashboard';
// import Profile from './newpage/Profile';

// type Role = 'SUPER_ADMIN' | 'ADMIN' | 'DIREKTOR' | 'OSHPAZ' | 'OMBORCHI' | 'BUXGALTER';

// function App() {
//   const [role] = useState<Role>('SUPER_ADMIN'); 

//   return (
//     <Router>
//       <div className="flex min-h-screen bg-[#F4F7FE] font-sans antialiased">
//         <Sidebar role={role} />
//         <main className="ml-64 flex-1 flex flex-col min-w-0">
//           <Navbar role={role} />
//           <div className="p-10">
//             <Routes>
//               <Route path="/" element={<Dashboard role={role} />} />
//               <Route path="/profile" element={<Profile role={role} />} />
//               <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//           </div>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;