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
      return <IconComponent className="w-6 h-6 text-[#0056B3]" />;
    }
    return <LucideIcons.FileText className="w-6 h-6 text-[#0056B3]" />;
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Tư pháp': return 'bg-purple-50 text-purple-700 border-purple-200/50';
      case 'Hộ tịch': return 'bg-pink-50 text-pink-700 border-pink-200/50';
      case 'Cư trú': return 'bg-amber-50 text-amber-700 border-amber-200/50';
      case 'Căn cước': return 'bg-teal-50 text-teal-700 border-teal-200/50';
      case 'Giao thông': return 'bg-sky-50 text-sky-700 border-sky-200/50';
      case 'Kinh doanh': return 'bg-indigo-50 text-indigo-700 border-indigo-200/50';
      case 'Tài chính': return 'bg-emerald-50 text-emerald-700 border-emerald-200/50';
      case 'Bảo hiểm': return 'bg-rose-50 text-rose-700 border-rose-200/50';
      default: return 'bg-blue-50 text-blue-700 border-blue-200/50';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl p-5 border border-gray-150 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full relative overflow-hidden"
    >
      {/* Decorative hover overlay logo */}
      <div className="absolute right-0 bottom-0 opacity-[0.02] group-hover:opacity-[0.07] translate-x-4 translate-y-4 group-hover:scale-110 transition-all duration-500 text-blue-900 pointer-events-none">
        {getIcon(service.iconName)}
      </div>

      <div className="space-y-4">
        {/* Card Header Info */}
        <div className="flex items-center justify-between gap-3">
          <span className={`text-[11px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-lg border ${getCategoryBadgeColor(service.category)}`}>
            {service.category}
          </span>
          <span className="text-xs text-gray-400 font-bold font-mono">Xã Dục Nông</span>
        </div>

        {/* Card Title & Icon */}
        <div className="flex items-start gap-3.5">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-[#0056B3] group-hover:text-white transition-colors duration-300 flex-shrink-0 shadow-sm">
            {getIcon(service.iconName)}
          </div>
          <div className="space-y-1">
            <h3 className="font-extrabold text-blue-950 group-hover:text-[#0056B3] transition-colors line-clamp-2 text-sm sm:text-base leading-snug">
              {service.name}
            </h3>
            <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="border-t border-gray-100 mt-5 pt-3.5 flex items-center justify-between text-xs font-bold text-gray-400 group-hover:text-[#0056B3] transition-colors">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 font-normal uppercase">LỆ PHÍ</span>
          <span className="text-gray-700 group-hover:text-[#0056B3] transition-colors truncate max-w-[150px] text-[11px] sm:text-xs">
            {service.fee.split(' ')[0] === 'Miễn' ? 'Miễn phí' : service.fee.split(' ')[0] + ' ' + (service.fee.split(' ')[1] || '')}
          </span>
        </div>
        
        <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-xl group-hover:bg-[#0056B3] group-hover:text-white transition-colors duration-200">
          Xem hướng dẫn <LucideIcons.ArrowRight size={12} />
        </span>
      </div>

    </div>
  );
};
