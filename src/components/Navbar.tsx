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
              {/* SVG Youth Union Logo Vietnam (Đoàn TNCS Hồ Chí Minh) */}
              <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Clip path for the diagonal lined green circle */}
                  <clipPath id="greenCircleClip">
                    <circle cx="50" cy="50" r="33.5" />
                  </clipPath>
                  
                  {/* Text path for the circular wording */}
                  {/* Outer circle layout to write the text cleanly from 9 o'clock clockwise to 3 o'clock */}
                  {/* Actually, starting at top left (140 degrees) around the bottom to top right (40 degrees) */}
                  <path id="logoTextPath" d="M 12.5,45 A 37.5,37.5 0 1,0 87.5,45" fill="none" stroke="none" />
                </defs>

                {/* Outer Circular border */}
                <circle cx="50" cy="50" r="48" fill="#FFFFFF" stroke="#1A202C" strokeWidth="1.8" />
                <circle cx="50" cy="50" r="44.5" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />

                {/* Green striped inner circle */}
                <g clipPath="url(#greenCircleClip)">
                  {/* Solid green bg */}
                  <circle cx="50" cy="50" r="33.5" fill="#009A44" />
                  
                  {/* White diagonal stripes */}
                  <path d="M -20,105 L 105,-20 
                           M -10,115 L 115,-10 
                           M 0,125 L 125,0 
                           M -30,95 L 95,-30 
                           M -40,85 L 85,-40 
                           M -50,75 L 75,-50 
                           M -60,65 L 65,-60 
                           M -70,55 L 55,-70 
                           M -80,45 L 45,-80 
                           M -90,35 L 35,-90 
                           M -100,25 L 25,-100 
                           M -110,15 L 15,-110" 
                        stroke="#FFFFFF" strokeWidth="1.2" opacity="0.9" />
                </g>

                {/* White circular inner border that goes on top of the stripes */}
                <circle cx="50" cy="50" r="33.5" fill="none" stroke="#1A202C" strokeWidth="1.5" />

                {/* Red flying flag */}
                {/* Wavy red ribbon of flag */}
                <path d="M 32,36 
                         C 42,16 52,10 65,15 
                         C 76,19 82,12 94,15 
                         C 96,28 98,42 98,54 
                         C 84,54 78,51 68,48 
                         C 50,56 46,51 38,53 Z" 
                      fill="#EE2D24" stroke="#1A202C" strokeWidth="1.2" />

                {/* Gold star */}
                <polygon points="52,21.5 54.7,27.1 60.8,27.1 55.9,30.7 57.7,36.5 52,32.9 46.3,36.5 48.1,30.7 43.2,27.1 49.3,27.1" fill="#FFF200" stroke="#1A202C" strokeWidth="0.3" />

                {/* Dark flag pole going diagonally */}
                <line x1="58" y1="85" x2="11" y2="15" stroke="#1A202C" strokeWidth="2.2" strokeLinecap="round" />

                {/* Sharp metal spear tip */}
                {/* Left wing */}
                <polygon points="11,15 2.5,13.5 8.5,8.5" fill="#E2E8F0" stroke="#1A202C" strokeWidth="0.8" />
                {/* Right wing */}
                <polygon points="11,15 13.5,2.5 8.5,8.5" fill="#4A5568" stroke="#1A202C" strokeWidth="0.8" />
                {/* Outer dividing rib */}
                <line x1="11" y1="15" x2="8.5" y2="8.5" stroke="#1A202C" strokeWidth="0.5" />

                {/* Hand / fist and sleeve */}
                {/* Green Sleeve/cuff */}
                <path d="M 75,58 C 78,57 88,54 98,54 C 100,64 97,71 91,75 L 77,72 Z" fill="#009A44" stroke="#1A202C" strokeWidth="1.2" />
                {/* Green Sleeve fold detail */}
                <path d="M 88,54 C 88,58 87,64 83,73" fill="none" stroke="#1A202C" strokeWidth="1.2" />
                <path d="M 94,54 C 94,59 93,65 91,71" fill="none" stroke="#1A202C" strokeWidth="1.2" />

                {/* Detailed white fingers gripping the pole */}
                <path d="M 43,62 C 47,62 52,64 56,68 C 58,70 76,73 77,74 C 77,74 78,59 75,60 C 70,61 55,65 48,60" fill="#FFFFFF" stroke="#1A202C" strokeWidth="1.2" />
                {/* Fingers contours */}
                <path d="M 39.5,62.5 C 39.5,60.5 41.5,59.5 43.5,60.5 S 44.5,63.5 42.5,64.5 Z" fill="#FFFFFF" stroke="#1A202C" strokeWidth="1" />
                <path d="M 41,64.5 C 41,62.5 43,61.5 45,62.5 S 46,65.5 44,66.5 Z" fill="#FFFFFF" stroke="#1A202C" strokeWidth="1" />
                <path d="M 42.5,66.5 C 42.5,64.5 44.5,63.5 46.5,64.5 S 47.5,67.5 45.5,68.5 Z" fill="#FFFFFF" stroke="#1A202C" strokeWidth="1" />
                <path d="M 44,68.5 C 44,66.5 46,65.5 48,66.5 S 49,69.5 47,70.5 Z" fill="#FFFFFF" stroke="#1A202C" strokeWidth="1" />

                {/* Slogan / Circular Text */}
                <text textAnchor="middle" fill="#EE2D24" fontWeight="bold" fontSize="4.6" letterSpacing="0.4">
                  <textPath href="#logoTextPath" startOffset="50%">ĐOÀN THANH NIÊN CỘNG SẢN HỒ CHÍ MINH</textPath>
                </text>
              </svg>
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
            <p className="text-yellow-400 text-lg md:text-xl font-bold tracking-widest animate-bounce mt-1">0375 509 308</p>
            <p className="text-white/80 text-[11px] mt-0.5">Mọi lúc, mọi nơi - Vì nhân dân phục vụ</p>
          </div>
          
        </div>
      </div>
      
      {/* Wave SVG Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500"></div>
    </header>
  );
};
