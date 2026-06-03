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
    <div className="bg-white rounded-3xl p-6 shadow-xl border border-blue-500/10 space-y-6">
      
      {/* Header and prompt */}
      <div className="space-y-1.5">
        <h2 className="text-xl sm:text-2xl font-black text-blue-950 flex items-center gap-2">
          <Search className="text-blue-600" size={24} />
          Tra Cứu Nhanh Thủ Tục
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          Nhập từ khoá liên quan đến giấy tờ của bà con dưới đây dể tìm nhanh hồ sơ cần chuẩn bị và thời gian giải quyết.
        </p>
      </div>

      {/* Main search input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="text-gray-400" size={20} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nhập tên giấy tờ cần tìm... (Ví dụ: cccd, khai sinh, ho khau...)"
          className="block w-full pl-12 pr-10 py-3.5 sm:py-4 bg-gray-50 border border-gray-200 focus:border-blue-600 focus:bg-white rounded-2xl outline-none text-gray-900 placeholder-gray-400 font-medium text-sm sm:text-base transition-all shadow-inner"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Preset suggestions for quick single-tap lookup on mobile */}
      <div className="space-y-2">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Gợi ý tìm nhanh bằng một chạm:
        </p>
        <div className="flex flex-wrap gap-2">
          {presetSuggestions.map((sug, i) => (
            <button
              key={i}
              onClick={() => setQuery(sug.query)}
              className={`text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                query === sug.query
                  ? 'bg-[#0056B3] text-white shadow-sm ring-2 ring-blue-300'
                  : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
              }`}
            >
              {sug.label}
            </button>
          ))}
        </div>
      </div>

      {/* Live search results */}
      {query && (
        <div className="border-t border-gray-100 pt-5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider">
              Kết quả tìm kiếm ({searchResults.length})
            </h4>
            {searchResults.length > 0 && (
              <span className="text-[11px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded">
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
                  className="group bg-blue-50/50 hover:bg-blue-50 p-4 rounded-2xl border border-blue-500/5 hover:border-blue-400/30 transition-all duration-300 cursor-pointer flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-white text-blue-600 shadow-sm border border-blue-100 flex-shrink-0">
                    <FileText size={20} />
                  </div>
                  <div className="flex-grow space-y-1">
                    <h5 className="font-bold text-blue-950 text-sm group-hover:text-blue-800 transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-xs text-gray-600 leading-relaxed max-w-2xl line-clamp-2">
                      {item.summary}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 pt-1 group-hover:gap-2 transition-all">
                      Xem chi tiết hướng dẫn <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200/50 text-center space-y-2">
              <p className="text-sm font-semibold text-amber-800">
                Chưa tìm thấy hướng dẫn khớp chính xác với từ khóa "{query}"
              </p>
              <p className="text-xs text-gray-500 max-w-md mx-auto">
                Bà con có thể gõ từ ngắn như <span className="font-bold text-gray-700">"cccd"</span>, <span className="font-bold text-gray-700">"mất"</span>, <span className="font-bold text-gray-700">"sinh"</span> hoặc nhấn chọn các gợi ý một chạm ở phía trên hoặc xem danh sách tất cả các dịch vụ ngay dưới đây.
              </p>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
