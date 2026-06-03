import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { StatsSection } from './components/StatsSection';
import { QuickLookup } from './components/QuickLookup';
import { ServiceCard } from './components/ServiceCard';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { StepByStepTutorial } from './components/StepByStepTutorial';
import { ContactSupport } from './components/ContactSupport';
import { SERVICES_DATA } from './data/services';
import { ServiceDetail } from './types';
import { FileDown, BriefcaseMedical, LayoutGrid } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Tất cả');
  const servicesHeadingRef = useRef<HTMLHeadingElement>(null);

  // List of all unique categories in services + 'Tất cả'
  const categories = ['Tất cả', ...Array.from(new Set(SERVICES_DATA.map((s) => s.category)))];

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeCategory === 'Tất cả') return true;
    return s.category === activeCategory;
  });

  const handleSelectServiceById = (serviceId: string) => {
    const service = SERVICES_DATA.find((s) => s.id === serviceId);
    if (service) {
      setSelectedService(service);
    }
  };

  // Auto-scroll to services directory on load if requested or just smoothly guide users
  const scrollToServices = () => {
    servicesHeadingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] font-sans text-slate-900 antialiased selection:bg-blue-600 selection:text-white pb-16">
      
      {/* 1. Header & Navigation Banner */}
      <Navbar />

      {/* 2. Statistical Highlights */}
      <StatsSection />

      {/* Main Container Layout */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:py-10 space-y-10 sm:space-y-12">
        
        {/* Intro banner overlay */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-500/10 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-black text-blue-950 leading-tight">
              Kính chào Bà Con Nhân Dân xã Dục Nông!
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-semibold">
              Trong thời đại công nghệ số 2026, Đoàn xã Dục Nông hân hạnh đồng hành cùng bà con trong việc tìm hiểu, làm quen và thực hiện các dịch vụ công trực tuyên ngay trên điện thoại di động thông minh mà không cần phải đi lại xa xôi lên huyện. Dưới đây là thư mục hướng dẫn chuẩn bị hồ sơ đầy đủ nhấ́t.
            </p>
          </div>
          <button
            onClick={scrollToServices}
            className="w-full md:w-auto px-6 py-3.5 bg-[#0056B3] hover:bg-blue-800 text-white font-extrabold text-sm rounded-xl cursor-pointer hover:shadow-lg transition-all active:scale-95 text-center flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <LayoutGrid size={16} />
            Xem ngay 4 Danh mục hỗ trợ
          </button>
        </section>

        {/* Centralized Clean Layout */}
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
          
          {/* Quick search input */}
          <section>
            <QuickLookup onSelectService={handleSelectServiceById} />
          </section>

          {/* 4 Public Services Directory Grid */}
          <section className="space-y-6" ref={servicesHeadingRef}>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-black text-blue-950 flex items-center gap-2.5">
                  <span className="p-1 px-2.5 bg-[#0056B3]/10 text-[#0056B3] text-sm rounded-lg font-bold">4</span>
                  Danh Mục Dịch Vụ Công Phổ Biến
                </h3>
                <p className="text-xs text-gray-500">
                  Bấm chọn vào từng thẻ dưới đây dể xem hướng dẫn chuẩn bị hồ sơ pháp lý, các viết tờ khai và liên kết nộp hồ sơ.
                </p>
              </div>

              {/* Categories Tab Selector */}
              <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-2xl border border-gray-250 self-start sm:self-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-xl cursor-pointer transition-all ${
                      activeCategory === cat
                        ? 'bg-[#0056B3] text-white shadow-sm'
                        : 'text-gray-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                >
                  <ServiceCard
                    service={service}
                    onClick={() => setSelectedService(service)}
                  />
                </motion.div>
              ))}
            </div>

          </section>

          {/* Step-by-step Visual Tutorial Carousel */}
          <section>
            <StepByStepTutorial />
          </section>

        </div>

        {/* Bottom Support Section */}
        <section className="pt-4">
          <ContactSupport />
        </section>

      </main>

      {/* 3. Footer */}
      <footer className="border-t border-gray-200 mt-16 bg-white py-8 text-center text-xs text-gray-500 space-y-3 relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-80 h-32 bg-blue-500/5 rounded-full filter blur-2xl"></div>
        <div className="max-w-7xl mx-auto px-4 space-y-2 relative z-10">
          <p className="font-bold text-gray-700 text-sm sm:text-base">
            © 2026 Đoàn Thanh niên xã Dục Nông, tỉnh Quảng Ngãi
          </p>
          <p className="max-w-2xl mx-auto text-[11px] sm:text-xs text-gray-400 leading-relaxed font-semibold">
            Bản quyền cổng thông tin hướng dẫn thuộc về Ban Chấp Hành Đoàn xã Dục Nông. Xây dựng vì một nền hành chính phục vụ người dân, thúc đẩy chuyển đổi số tại địa phương.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2 text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-bold text-[11px]">Hệ thống vận hành an toàn và bảo mật 24/7</span>
          </div>
        </div>
      </footer>

      {/* Interactive Detail Slideover/Modal popup */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

    </div>
  );
}
