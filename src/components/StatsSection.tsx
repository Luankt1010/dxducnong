import React, { useEffect, useState } from 'react';
import { Users, CheckCircle2, LayoutGrid, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { doc, getDoc, setDoc, updateDoc, increment, onSnapshot } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

export const StatsSection: React.FC = () => {
  const [stats, setStats] = useState({
    visitors: 0,
    successGuides: 0,
    servicesCount: 4,
  });
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const statsRef = doc(db, 'stats', 'global');

    // Real-time listener for global stats document
    const unsubscribe = onSnapshot(statsRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setStats({
          visitors: typeof data.visitors === 'number' ? data.visitors : 0,
          successGuides: typeof data.successGuides === 'number' ? data.successGuides : 0,
          servicesCount: 4,
        });
      } else {
        // Initialize if document does not exist yet (can run safely from user who loads first)
        setDoc(statsRef, { visitors: 1, successGuides: 0 }).catch((error) => {
          handleFirestoreError(error, OperationType.WRITE, 'stats/global');
        });
      }
    }, (error) => {
      // Gracefully log onSnapshot query errors or block permission issues
      console.error("Firestore onSnapshot error:", error);
    });

    // Increment visitor count if not counted in this session
    const incrementVisitor = async () => {
      const hasCountedSession = sessionStorage.getItem('ducnong_session_counted_v5') === 'true';
      if (!hasCountedSession) {
        try {
          const docSnap = await getDoc(statsRef);
          if (docSnap.exists()) {
            await updateDoc(statsRef, { visitors: increment(1) });
          } else {
            await setDoc(statsRef, { visitors: 1, successGuides: 0 });
          }
          sessionStorage.setItem('ducnong_session_counted_v5', 'true');
        } catch (error) {
          handleFirestoreError(error, OperationType.WRITE, 'stats/global');
        }
      }
    };

    incrementVisitor();

    // Read liked state from local storage to keep user's active UI like state
    const userLiked = localStorage.getItem('ducnong_liked_v5') === 'true';
    setHasLiked(userLiked);

    return () => {
      unsubscribe();
    };
  }, []);

  const handleIncrementSuccess = async () => {
    const statsRef = doc(db, 'stats', 'global');
    try {
      await updateDoc(statsRef, { successGuides: increment(1) });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, 'stats/global');
    }

    // Trigger small animation feedback
    const btn = document.getElementById('success-increment-btn');
    if (btn) {
      btn.classList.add('scale-50', 'bg-emerald-600');
      setTimeout(() => {
        btn.classList.remove('scale-50', 'bg-emerald-600');
      }, 150);
    }
  };

  const handleLike = async () => {
    const statsRef = doc(db, 'stats', 'global');
    if (!hasLiked) {
      localStorage.setItem('ducnong_liked_v5', 'true');
      setHasLiked(true);

      try {
        await updateDoc(statsRef, { successGuides: increment(1) });
      } catch (error) {
        handleFirestoreError(error, OperationType.UPDATE, 'stats/global');
      }
    } else {
      localStorage.setItem('ducnong_liked_v5', 'false');
      setHasLiked(false);

      try {
        await updateDoc(statsRef, { successGuides: increment(-1) });
      } catch (error) {
        handleFirestoreError(error, OperationType.UPDATE, 'stats/global');
      }
    }
  };

  return (
    <div className="bg-[#0a1128]/70 py-8 px-4 border-y border-blue-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          
          {/* Section Introduction */}
          <div className="md:col-span-1 text-center md:text-left space-y-2">
            <h3 className="text-blue-400 font-extrabold text-lg uppercase tracking-wider relative inline-block">
              Thống Kê Kết Quả
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-1 bg-yellow-400 rounded-full mt-1"></span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-semibold">
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
              className="bg-[#0e1630] p-3 sm:p-5 rounded-2xl shadow-md border border-blue-900/30 flex flex-col items-center justify-center text-center group hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="p-2 sm:p-3 rounded-xl bg-blue-950/85 text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                <Users size={20} className="sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Số lượt truy cập</span>
              <span className="text-xl sm:text-3xl font-black text-white tracking-wider mt-0.5 sm:mt-1 font-mono">
                {stats.visitors.toLocaleString()}
              </span>
            </motion.div>

            {/* Stat Item: Success Guides */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0e1630] p-3 sm:p-5 rounded-2xl shadow-md border border-emerald-950/60 flex flex-col items-center justify-center text-center group hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="p-2 sm:p-3 rounded-xl bg-emerald-950/85 text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 size={20} className="sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Lượt hỗ trợ thành công</span>
              <span className="text-xl sm:text-3xl font-black text-emerald-300 tracking-wider mt-0.5 sm:mt-1 font-mono">
                {stats.successGuides.toLocaleString()}
              </span>
            </motion.div>

            {/* Stat Item: Available Services */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#0e1630] p-3 sm:p-5 rounded-2xl shadow-md border border-amber-950/60 flex flex-col items-center justify-center text-center group hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="p-2 sm:p-3 rounded-xl bg-amber-950/85 text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                <LayoutGrid size={20} className="sm:w-6 sm:h-6" />
              </div>
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Dịch vụ hiện có</span>
              <span className="text-xl sm:text-3xl font-black text-amber-300 tracking-wider mt-0.5 sm:mt-1 font-mono">
                {stats.servicesCount}
              </span>
            </motion.div>

          </div>
        </div>

        {/* Small Citizen Engagement Action */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-dashed border-blue-900/50 pt-5">
          <p className="text-blue-200 text-xs sm:text-sm font-semibold text-center">
            💡 Bà con đã làm thành công thủ tục nhờ thông tin tại đây? Hãy nhấn nút để tiếp thêm động lực cho thanh niên xã:
          </p>
          <div className="flex gap-2">
            <button
              id="success-increment-btn"
              onClick={handleIncrementSuccess}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:brightness-110 text-white font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-lg flex items-center gap-2 outline-none transition-all duration-150 transform hover:scale-105 shadow-md active:scale-95 cursor-pointer"
            >
              <CheckCircle2 size={16} />
              Báo hướng dẫn thành công
            </button>
            <button
              onClick={handleLike}
              className={`font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg flex items-center gap-2 outline-none transition-all duration-150 transform hover:scale-105 shadow-md active:scale-95 cursor-pointer border ${
                hasLiked 
                  ? 'bg-rose-950/60 border-rose-800 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.2)]' 
                  : 'bg-transparent border-blue-900/80 text-blue-300 hover:bg-blue-950/40 hover:border-blue-700'
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
