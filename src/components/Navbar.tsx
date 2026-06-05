import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-[#0056B3] to-[#003D80] text-white shadow-xl border-b-4 border-yellow-400 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-blue-700 rounded-full filter blur-3xl opacity-30 -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full p-0.5 shadow-lg border border-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
              <img 
                src="https://upload.wikimedia.org/wikipedia/vi/0/09/Huy_Hi%E1%BB%87u_%C4%90o%C3%A0n.png?_=20210321041456" 
                alt="Huy hiệu Đoàn TNCS Hồ Chí Minh" 
                className="w-full h-full object-contain" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight uppercase drop-shadow-md text-white">
                Cổng Hướng Dẫn Dịch Vụ Công Trực Tuyến
              </h1>
              <p className="text-yellow-100 font-medium text-xs sm:text-sm md:text-base max-w-2xl balance">
                Đoàn Thanh niên xã Dục Nông hỗ trợ người dân thực hiện thủ tục hành chính trực tuyến nhanh chóng, thuận tiện.
              </p>
            </div>
          </div>

          {/* Hotline badges */}
          <div className="flex-shrink-0 bg-blue-900/40 backdrop-blur-sm p-4 rounded-xl border border-blue-400/30 text-center md:text-right hidden sm:block">
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider">ĐANG TRỰC HỖ TRỢ</p>
            <p className="text-yellow-400 text-lg md:text-xl font-bold tracking-widest animate-bounce mt-1">0394 222 080 (PHI)</p>
            <p className="text-white/80 text-[11px] mt-0.5">Mọi lúc, mọi nơi - Vì nhân dân phục vụ</p>
          </div>
          
        </div>
      </div>
      
      {/* Wave SVG Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500"></div>
    </header>
  );
};
