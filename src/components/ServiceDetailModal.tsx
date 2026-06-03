import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { ServiceDetail } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Reset checklist when service changes
    setCheckedItems({});
  }, [service]);

  if (!service) return null;

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getIcon = (name: string) => {
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return <IconComponent size={20} />;
    }
    return <LucideIcons.FileText size={20} />;
  };

  const isAllChecked = service.checklist.every((_, i) => checkedItems[i]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal content container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl relative w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col z-10 border border-blue-500/15"
        >
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0056B3] to-[#103D7C] text-white p-5 sm:p-6 flex items-center justify-between border-b border-blue-600 relative overflow-hidden flex-shrink-0">
            {/* Background vector */}
            <div className="absolute right-0 top-0 w-40 h-40 bg-blue-500/20 rounded-full filter blur-xl transform translate-x-12 -translate-y-12"></div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/10">
                {getIcon(service.iconName)}
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-black text-yellow-300 uppercase tracking-widest block">
                  Cẩm Nang Hướng Dẫn Chi Tiết
                </span>
                <h3 className="text-base sm:text-xl font-black leading-snug tracking-tight text-white uppercase sm:normal-case">
                  {service.name}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all text-xs cursor-pointer flex items-center justify-center border border-white/5"
            >
              <LucideIcons.X size={18} />
            </button>
          </div>

          {/* Body Content - Scrollable */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-800">
            
            {/* 1. Description */}
            <div className="space-y-2 bg-blue-50/50 rounded-2xl p-4 border border-blue-500/10">
              <h4 className="font-extrabold text-[#0056B3] text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
                <LucideIcons.Info size={16} /> Giới Thiệu Thủ Tục
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>

            {/* Quick Metadata Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Fee */}
              <div className="bg-slate-50 border border-gray-150 rounded-2xl p-4 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                  <LucideIcons.Coins size={18} />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Lệ Phí Thủ Tục</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                    {service.fee}
                  </span>
                </div>
              </div>

              {/* Duration */}
              <div className="bg-slate-50 border border-gray-150 rounded-2xl p-4 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                  <LucideIcons.Clock size={18} />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Thời Gian Giải Quyết</span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-800 leading-snug">
                    {service.duration}
                  </span>
                </div>
              </div>

            </div>

            {/* 2. Checklist for rural citizens to prepare paper documents */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2">
                <h4 className="font-extrabold text-blue-950 text-sm uppercase tracking-wider flex items-center gap-2">
                  <LucideIcons.ClipboardCheck size={18} className="text-[#0056B3]" /> 
                  1. Hồ Sơ Cần Chuẩn Bị Ở Nhà
                </h4>
                <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full text-left self-start">
                  {isAllChecked ? (
                    <span className="text-emerald-700 flex items-center gap-1">
                      <LucideIcons.CheckCircle size={12} className="fill-emerald-50" /> Đóng gói đầy đủ!
                    </span>
                  ) : (
                    'Hãy tích chọn dể kiểm tra'
                  )}
                </span>
              </div>
              
              <ul className="grid grid-cols-1 gap-2.5">
                {service.checklist.map((item, index) => (
                  <li 
                    key={index}
                    onClick={() => toggleCheck(index)}
                    className={`p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3.5 cursor-pointer select-none ${
                      checkedItems[index] 
                        ? 'bg-emerald-50/50 border-emerald-200 text-emerald-950 shadow-sm' 
                        : 'bg-white hover:bg-slate-50 border-gray-200 text-gray-800'
                    }`}
                  >
                    <div className={`p-0.5 rounded-full flex-shrink-0 transition-colors ${
                      checkedItems[index] ? 'text-emerald-600' : 'text-gray-300'
                    }`}>
                      {checkedItems[index] ? (
                        <LucideIcons.SquareCheck size={18} className="fill-emerald-100/30" />
                      ) : (
                        <LucideIcons.Square size={18} />
                      )}
                    </div>
                    <span className={`text-xs sm:text-sm font-semibold leading-relaxed ${checkedItems[index] ? 'line-through text-slate-500 font-medium' : ''}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Steps list */}
            <div className="space-y-3 pt-2">
              <h4 className="font-extrabold text-blue-950 text-sm uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                <LucideIcons.ClipboardList size={18} className="text-[#0056B3]" /> 
                2. Các Bước Thực Hiện Trên Điện Thoại/Máy Tính
              </h4>
              
              <div className="relative pl-5 sm:pl-6 space-y-5 border-l-2 border-blue-100 mt-2 ml-4">
                {service.steps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Ring indicator */}
                    <div className="absolute -left-[30px] sm:-left-[34px] top-0.5 w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-600 flex items-center justify-center font-bold text-xs text-blue-800 shadow-sm">
                      {step.stepNumber}
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-extrabold text-slate-900 text-sm leading-snug">
                        {step.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-semibold">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Video Hướng dẫn trực quan */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h4 className="font-extrabold text-blue-950 text-sm uppercase tracking-wider flex items-center gap-2">
                <LucideIcons.Tv size={18} className="text-[#0056B3]" /> 
                3. Video Clip Hướng Dẫn Thực Tế
              </h4>
              <p className="text-xs text-gray-500 leading-normal">
                Bà con có thể xem đoạn video clip phóng sự hướng dẫn thao tác nộp hồ sơ và điền tờ khai trực quan dưới đây:
              </p>
              
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md border border-slate-200">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/Z0oYj7G_WdE" 
                  title="Hướng dẫn sử dụng Cổng Dịch vụ công Quốc gia" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Tips for watching video */}
              <div className="bg-amber-50/60 rounded-xl p-3.5 border border-amber-500/10 space-y-1.5">
                <span className="text-[10px] font-black text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                  <LucideIcons.Play size={10} className="fill-amber-800 text-amber-800" /> Lưu ý hữu ích khi xem video:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                  Bà con nên vừa xem hướng dẫn vừa thực hiện thao tác tương tự trên điện thoại của mình. Đoạn nào làm nhanh quá, bà con nhấn nút tạm dừng (Pause) dể hoàn thành cho kịp nhé.
                </p>
              </div>
            </div>

            {/* Support Advice badge */}
            <div className="bg-blue-50/50 border border-green-500/10 rounded-2xl p-4 flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 flex-shrink-0">
                <LucideIcons.HeartHandshake size={20} />
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-blue-950 text-xs sm:text-sm">
                  Cần Thanh niên Xã trợ giúp trực tiếp?
                </h5>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Nếu bà con gặp vướng mắc về chụp hình giấy tờ hoặc nộp tiền lệ phí, hãy mang CCCD và điện thoại tới văn phòng Đoàn Thanh niên xã Dục Nông để đoàn viên thanh niên trực tiếp hỗ trợ giải quyết nhé. Hotline: <span className="font-bold text-[#0056B3] font-mono">0375 509 308</span>.
                </p>
              </div>
            </div>

          </div>

          {/* Footer actions */}
          <div className="p-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
            <button
              onClick={() => window.print()}
              className="text-xs font-bold text-[#0056B3] hover:text-blue-800 transition-colors flex items-center gap-2 cursor-pointer border border-blue-500/10 bg-white hover:bg-slate-50 py-2.5 px-4 rounded-xl"
            >
              <LucideIcons.Printer size={16} />
              In Bản Hướng Dẫn
            </button>

            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto text-xs font-bold text-gray-700 border border-gray-200 hover:bg-gray-100 py-3 px-5 rounded-xl cursor-pointer bg-white transition-all text-center"
              >
                Đóng lại
              </button>
              
              <a
                href="https://dichvucong.gov.vn"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-xs font-extrabold text-center bg-[#0056B3] hover:bg-blue-800 text-white py-3 px-6 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <LucideIcons.ExternalLink size={16} />
                Bốc hồ sơ nộp trực tuyến
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
