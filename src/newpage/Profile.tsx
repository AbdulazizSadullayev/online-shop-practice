const Profile = ({ role }: { role: string }) => (
  <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold text-[#1B254B] mb-8">Shaxsiy ma'lumotlar</h2>
    <div className="grid grid-cols-2 gap-8">
       <div className="space-y-2">
         <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">F.I.SH</p>
         <p className="text-lg font-bold text-[#1B254B]">Azizov Bekzod Alisherovich</p>
       </div>
       <div className="space-y-2">
         <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Rol</p>
         <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-black uppercase">{role}</span>
       </div>
       <div className="col-span-2 pt-8 border-t border-gray-100">
         <button className="bg-[#1B254B] text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-lg">Parolni o'zgartirish</button>
       </div>
    </div>
  </div>
);

export default Profile;