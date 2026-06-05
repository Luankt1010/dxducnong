import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, FileText, X } from 'lucide-react';
import { QUICK_LOOKUP_DATA } from '../data/services';

interface QuickLookupProps {
  onSelectService: (serviceId: string) => void;
}

export const QuickLookup: React.FC<QuickLookupProps> = ({ onSelectService }) => {
  const [query, setQuery] = useState('');

  // Normalize vietnamese characters for fuzzy matching
  const removeVietnameseTones = (str: string) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLowerCase();
  };

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const normalizedQuery = removeVietnameseTones(query);
    
    return QUICK_LOOKUP_DATA.filter((item) => {
      return item.keywords.some((keyword) => {
        const normalizedKeyword = removeVietnameseTones(keyword);
        return normalizedKeyword.includes(normalizedQuery) || normalizedQuery.includes(normalizedKeyword);
      });
    });
  }, [query]);

  const presetSuggestions = [
    { label: 'Đăng ký kết hôn', query: 'ket hon' },
    { label: 'Đăng ký khai sinh', query: 'khai sinh' },
    { label: 'Đăng ký khai tử', query: 'khai tu' },
    { label: 'Căn cước cho trẻ', query: 'can cuoc' }
  ];

  return (
    <div className="bg-[#0B1530] rounded-3xl p-6 shadow-xl border border-blue-900/45 space-y-6">
      
      {/* Header and prompt */}
      <div className="space-y-1.5">
        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
          <Search className="text-[#38BDF8]" size={24} />
          Tra Cứu Nhanh Thủ Tục
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-semibold">
          Nhập từ khoá liên quan đến giấy tờ của bà con dưới đây dể tìm nhanh hồ sơ cần chuẩn bị và thời gian giải quyết.
        </p>
      </div>

      {/* Main search input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="text-slate-400" size={20} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nhập tên giấy tờ cần tìm... (Ví dụ: cccd, khai sinh, ho khau...)"
          className="block w-full pl-12 pr-10 py-3.5 sm:py-4 bg-[#060C1E] border border-blue-900/60 focus:border-blue-500 rounded-2xl outline-none text-white placeholder-slate-500 font-semibold text-sm sm:text-base transition-all shadow-inner"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white cursor-pointer"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Preset suggestions for quick single-tap lookup on mobile */}
      <div className="space-y-2">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Gợi ý tìm nhanh bằng một chạm:
        </p>
        <div className="flex flex-wrap gap-2">
          {presetSuggestions.map((sug, i) => (
            <button
              key={i}
              onClick={() => setQuery(sug.query)}
              className={`text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                query === sug.query
                  ? 'bg-[#0056B3] text-white shadow-[0_0_10px_rgba(0,163,255,0.4)] ring-2 ring-blue-500'
                  : 'bg-[#182a56] text-blue-300 hover:bg-[#20376d]'
              }`}
            >
              {sug.label}
            </button>
          ))}
        </div>
      </div>

      {/* Live search results */}
      {query && (
        <div className="border-t border-blue-950 pt-5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Kết quả tìm kiếm ({searchResults.length})
            </h4>
            {searchResults.length > 0 && (
              <span className="text-[11px] bg-emerald-950 text-emerald-300 border border-emerald-900 font-bold px-2 py-0.5 rounded">
                Tìm thấy ngay
              </span>
            )}
          </div>

          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 gap-3">
              {searchResults.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => onSelectService(item.targetServiceId)}
                  className="group bg-[#13244D]/60 hover:bg-[#1A2E61]/80 p-4 rounded-2xl border border-blue-900/30 hover:border-blue-500/30 transition-all duration-300 cursor-pointer flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-[#060C1E] text-blue-400 shadow-sm border border-blue-900/65 flex-shrink-0">
                    <FileText size={20} />
                  </div>
                  <div className="flex-grow space-y-1">
                    <h5 className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-2xl line-clamp-2">
                      {item.summary}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-400 pt-1 group-hover:gap-2 transition-all">
                      Xem chi tiết hướng dẫn <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-amber-950/40 rounded-2xl p-5 border border-amber-900/40 text-center space-y-2">
              <p className="text-sm font-semibold text-amber-300">
                Chưa tìm thấy hướng dẫn khớp chính xác với từ khóa "{query}"
              </p>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Bà con có thể gõ từ ngắn như <span className="font-bold text-slate-200">"cccd"</span>, <span className="font-bold text-slate-200">"mất"</span>, <span className="font-bold text-slate-200">"sinh"</span> hoặc nhấn chọn các gợi ý một chạm ở phía trên hoặc xem danh sách tất cả các dịch vụ ngay dưới đây.
              </p>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
