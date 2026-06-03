import React, { useEffect, useState } from 'react';
import { Users, CheckCircle2, LayoutGrid, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const StatsSection: React.FC = () => {
  const [stats, setStats] = useState({
    visitors: 2854,
    successGuides: 1947,
    servicesCount: 4,
  });
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    // Read from localStorage to persist mock numbers and increment visitor
    const storedVisitors = localStorage.getItem('ducnong_visitors');
    const storedGuides = localStorage.getItem('ducnong_guides');
    const userLiked = localStorage.getItem('ducnong_liked') === 'true';

    let currentVisitors = 2854;
    let currentGuides = 1947;

    if (storedVisitors) {
      currentVisitors = parseInt(storedVisitors, 10);
    } else {
      currentVisitors = Math.floor(Math.random() * 100) + 2850;
    }

    if (storedGuides) {
      currentGuides = parseInt(storedGuides, 10);
    } else {
      currentGuides = Math.floor(Math.random() * 50) + 1920;
    }

    // Increment visitors on load
    const newVisitors = currentVisitors + 1;
    localStorage.setItem('ducnong_visitors', newVisitors.toString());

    setStats({
      visitors: newVisitors,
      successGuides: currentGuides,
      servicesCount: 4,
    });
    setHasLiked(userLiked);
  }, []);

  const handleIncrementSuccess = () => {
    const newGuides = stats.successGuides + 1;
    localStorage.setItem('ducnong_guides', newGuides.toString());
    setStats((prev) => ({ ...prev, successGuides: newGuides }));
    
    // Trigger small animation feedback
    const btn = document.getElementById('success-increment-btn');
    if (btn) {
      btn.classList.add('scale-95', 'bg-emerald-600');
      setTimeout(() => {
        btn.classList.remove('scale-95', 'bg-emerald-600');
      }, 150);
    }
  };

  const handleLike = () => {
    if (!hasLiked) {
      localStorage.setItem('ducnong_liked', 'true');
      setHasLiked(true);
      // Increment successful guide to reflect engagement
      handleIncrementSuccess();
    } else {
      localStorage.setItem('ducnong_liked', 'false');
      setHasLiked(false);
      const newGuides = Math.max(1910, stats.successGuides - 1);
      localStorage.setItem('ducnong_guides', newGuides.toString());
      setStats((prev) => ({ ...prev, successGuides: newGuides }));
    }
  };

  return (
    <div className="bg-[#0056B3]/5 py-8 px-4 border-y border-blue-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          
          {/* Section Introduction */}
          <div className="md:col-span-1 text-center md:text-left space-y-2">
            <h3 className="text-blue-900 font-extrabold text-lg uppercase tracking-wider relative inline-block">
              Thống Kê Kết Quả
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-1 bg-yellow-400 rounded-full mt-1"></span>
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Hoạt động xung kích, tình nguyện của tuổi trẻ xã Dục Nông vì một nền hành chính phục vụ hiện đại.
            </p>
          </div>

          {/* Core Counters */}
          <div className="md:col-span-3 grid grid-cols-3 gap-3 sm:gap-6">
            
            {/* Stat Item: Visitors */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-3 sm:p-5 rounded-2xl shadow-sm border border-blue-100 flex flex-col items-center justify-center text-center group hover:shadow-md transition-all duration-300"
            >
              <div className="p-2 sm:p-3 rounded-xl bg-blue-50 text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                <Users size={20} className="sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Số lượt truy cập</span>
              <span className="text-xl sm:text-3xl font-black text-blue-950 tracking-wider mt-0.5 sm:mt-1 font-mono">
                {stats.visitors.toLocaleString()}
              </span>
            </motion.div>

            {/* Stat Item: Success Guides */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-3 sm:p-5 rounded-2xl shadow-sm border border-emerald-100 flex flex-col items-center justify-center text-center group hover:shadow-md transition-all duration-300"
            >
              <div className="p-2 sm:p-3 rounded-xl bg-emerald-50 text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 size={20} className="sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs text-emerald-700 font-bold uppercase tracking-wider">Lượt làm thành tựu</span>
              <span className="text-xl sm:text-3xl font-black text-emerald-800 tracking-wider mt-0.5 sm:mt-1 font-mono">
                {stats.successGuides.toLocaleString()}
              </span>
            </motion.div>

            {/* Stat Item: Available Services */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-3 sm:p-5 rounded-2xl shadow-sm border border-amber-100 flex flex-col items-center justify-center text-center group hover:shadow-md transition-all duration-300"
            >
              <div className="p-2 sm:p-3 rounded-xl bg-amber-50 text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                <LayoutGrid size={20} className="sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs text-amber-700 font-bold uppercase tracking-wider">Dịch vụ hiện có</span>
              <span className="text-xl sm:text-3xl font-black text-amber-800 tracking-wider mt-0.5 sm:mt-1 font-mono">
                {stats.servicesCount}
              </span>
            </motion.div>

          </div>
        </div>

        {/* Small Citizen Engagement Action */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-dashed border-blue-200/50 pt-5">
          <p className="text-blue-900 text-xs sm:text-sm font-medium text-center">
            💡 Bà con đã làm thành công thủ tục nhờ thông tin tại đây? Hãy nhấn nút để tiếp thêm động lực cho thanh niên xã:
          </p>
          <div className="flex gap-2">
            <button
              id="success-increment-btn"
              onClick={handleIncrementSuccess}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-lg flex items-center gap-2 outline-none transition-all duration-150 transform hover:scale-105 shadow-sm active:scale-95 cursor-pointer"
            >
              <CheckCircle2 size={16} />
              Báo hướng dẫn thành công
            </button>
            <button
              onClick={handleLike}
              className={`font-bold text-xs sm:text-sm px-4 py-2 rounded-lg flex items-center gap-2 outline-none transition-all duration-150 transform hover:scale-105 shadow-sm active:scale-95 cursor-pointer border ${
                hasLiked 
                  ? 'bg-rose-50 border-rose-200 text-rose-600' 
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Heart size={16} className={hasLiked ? 'fill-rose-500 text-rose-500' : ''} />
              {hasLiked ? 'Đã yêu thích' : 'Yêu thích cổng'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
