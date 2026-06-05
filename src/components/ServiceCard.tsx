import React from 'react';
import * as LucideIcons from 'lucide-react';
import { ServiceDetail } from '../types';

interface ServiceCardProps {
  service: ServiceDetail;
  onClick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  // Resolve Lucide icons dynamically from the string
  const getIcon = (name: string) => {
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-[#38BDF8]" />;
    }
    return <LucideIcons.FileText className="w-6 h-6 text-[#38BDF8]" />;
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Tư pháp': return 'bg-purple-950/50 text-purple-300 border-purple-800/40';
      case 'Hộ tịch': return 'bg-pink-950/50 text-pink-300 border-pink-800/40';
      case 'Cư trú': return 'bg-amber-950/50 text-amber-300 border-amber-800/40';
      case 'Căn cước': return 'bg-teal-950/50 text-teal-300 border-teal-800/40';
      case 'Giao thông': return 'bg-sky-950/50 text-sky-300 border-sky-800/40';
      case 'Kinh doanh': return 'bg-indigo-950/50 text-indigo-300 border-indigo-800/40';
      case 'Tài chính': return 'bg-emerald-950/50 text-emerald-300 border-emerald-800/40';
      case 'Bảo hiểm': return 'bg-rose-950/50 text-rose-300 border-rose-800/40';
      default: return 'bg-blue-950/50 text-blue-300 border-blue-800/40';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-[#0D1935] rounded-2xl p-5 border border-blue-950 shadow-md hover:shadow-xl hover:border-blue-500/40 hover:shadow-blue-950/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full relative overflow-hidden"
    >
      {/* Decorative hover overlay logo */}
      <div className="absolute right-0 bottom-0 opacity-[0.02] group-hover:opacity-[0.08] translate-x-4 translate-y-4 group-hover:scale-110 transition-all duration-500 text-blue-400 pointer-events-none">
        {getIcon(service.iconName)}
      </div>

      <div className="space-y-4">
        {/* Card Header Info */}
        <div className="flex items-center justify-between gap-3">
          <span className={`text-[11px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-lg border ${getCategoryBadgeColor(service.category)}`}>
            {service.category}
          </span>
          <span className="text-xs text-slate-400 font-bold font-mono">Xã Dục Nông</span>
        </div>

        {/* Card Title & Icon */}
        <div className="flex items-start gap-3.5">
          <div className="p-3 rounded-xl bg-[#06122C] text-[#38BDF8] group-hover:bg-[#0056B3] group-hover:text-white transition-colors duration-300 flex-shrink-0 shadow-inner border border-blue-900/40">
            {getIcon(service.iconName)}
          </div>
          <div className="space-y-1">
            <h3 className="font-extrabold text-white group-hover:text-[#38BDF8] transition-colors line-clamp-2 text-sm sm:text-base leading-snug">
              {service.name}
            </h3>
            <p className="text-xs text-slate-300 font-semibold line-clamp-2 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="border-t border-blue-950 mt-5 pt-3.5 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-[#38BDF8] transition-colors">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 font-normal uppercase">LỆ PHÍ</span>
          <span className="text-slate-200 group-hover:text-[#38BDF8] transition-colors truncate max-w-[150px] text-[11px] sm:text-xs">
            {service.fee.split(' ')[0] === 'Miễn' ? 'Miễn phí' : service.fee.split(' ')[0] + ' ' + (service.fee.split(' ')[1] || '')}
          </span>
        </div>
        
        <span className="inline-flex items-center gap-1 bg-blue-950/60 border border-blue-900/30 text-[#38BDF8] px-3 py-1.5 rounded-xl group-hover:bg-[#0056B3] group-hover:text-white group-hover:border-transparent transition-colors duration-200">
          Xem hướng dẫn <LucideIcons.ArrowRight size={12} />
        </span>
      </div>

    </div>
  );
};
