import React from 'react';
import { Phone, MapPin, Award, Calendar, ShieldCheck, Mail, Globe } from 'lucide-react';

export const ContactSupport: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#0056B3]/10 rounded-full filter blur-2xl transform translate-x-12 translate-y-12"></div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Info: Support Unit */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-[#0056B3] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
              <Award size={12} /> ĐƠN VỊ CHỦ QUẢN
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
              Ban Chấp Hành Đoàn Thanh Niên Xã Dục Nông
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold">
              Đoàn viên thanh niên xã Dục Nông xung kích tham gia cải cách hành chính, chuyển đổi số quốc gia, hướng dẫn tận tình, giúp ích đắc lực cho đời sống bà con nhân dân nông thôn.
            </p>
          </div>

          {/* Quick Stats/Attributes for local trust */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-800 rounded-xl text-yellow-400">
                <Calendar size={16} />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-slate-500 uppercase font-black block">Lịch trực hỗ trợ</span>
                <span className="text-xs font-bold text-slate-200">Thứ 2 - Thứ 6 hàng tuần</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-800 rounded-xl text-emerald-400">
                <ShieldCheck size={16} />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-slate-500 uppercase font-black block">Tiêu chí nhiệm vụ</span>
                <span className="text-xs font-bold text-slate-200">Nhanh chóng - Miễn phí</span>
              </div>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-5 text-[11px] text-slate-500 font-semibold space-y-1">
            <p className="flex items-center gap-2">
              <Mail size={12} className="text-slate-500" /> Liên hệ thư điện tử: <span className="text-slate-300 font-mono">doanthanhnien.ducnong@quangngai.gov.vn</span>
            </p>
            <p className="flex items-center gap-2">
              <Globe size={12} className="text-slate-500" /> Cổng thông tin Xã: <span className="text-slate-300 font-mono">ducnong.quangngai.gov.vn</span>
            </p>
          </div>
        </div>

        {/* Right Info: Direct contact cards */}
        <div className="md:col-span-5 flex flex-col gap-4 justify-center">
          
          {/* Hotline Card */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 space-y-2 hover:border-[#0056B3]/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#0056B3] text-white animate-pulse">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">SỐ ĐIỆN THOẠI TRỰC BAN</span>
                <a href="tel:0375509308" className="text-lg sm:text-xl font-black text-yellow-400 tracking-wider hover:underline font-mono">
                  0375 509 308
                </a>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal pl-12">
              Bà con có thể liên hệ trực ban Đoàn xã bất kỳ lúc nào dể nhận tư vấn khi chuẩn bị giấy tờ bị sai lệch.
            </p>
          </div>

          {/* Address Card */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 space-y-2 hover:border-[#0056B3]/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-orange-600/10 text-orange-400">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">ĐỊA CHỈ TRỤ SỞ ĐOÀN XÃ</span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-200">
                  UBND xã Dục Nông, tỉnh Quảng Ngãi
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal pl-12">
              Bộ phận Một cửa, Tầng trệt Ủy ban nhân dân xã Dục Nông, Tỉnh Quảng Ngãi (Bên cạnh phòng Tư pháp Hộ tịch).
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
