import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  FaCar, FaTruck, FaBus, FaCheckCircle, FaArrowRight,
  FaCalendarAlt, FaClock, FaTrophy, FaUsers, FaPhoneAlt,
  FaGraduationCap, FaShieldAlt, FaRedo, FaHeadset, FaCertificate,
  FaPercent, FaArrowUp, FaTools, FaFirstAid, FaNetworkWired,
  FaGlobe, FaMoneyBillWave, FaRoute, FaBriefcase, FaRoad,
  FaFileAlt, FaChevronDown, FaChevronUp, FaDownload, FaStar,
  FaFire, FaUserFriends, FaMotorcycle,
} from 'react-icons/fa';
import { coursesPageData } from '../data/coursesData';

// ─── Icon Map ──────────────────────────────────────────────────────────────
const IconMap: Record<string, React.ElementType> = {
  FaCar, FaTruck, FaBus, FaCheckCircle, FaGraduationCap, FaShieldAlt,
  FaRedo, FaHeadset, FaCertificate, FaPercent, FaArrowUp, FaTools,
  FaFirstAid, FaNetworkWired, FaGlobe, FaMoneyBillWave, FaRoute,
  FaBriefcase, FaRoad, FaTrophy, FaFileAlt, FaStar, FaFire,
  FaUserFriends, FaMotorcycle,
};

// ─── Section Anchor Tabs ───────────────────────────────────────────────────
const TABS = [
  { id: 'ly-do', label: 'Lý do chọn' },
  { id: 'xe-lai', label: 'Xe được lái' },
  { id: 'quyen-loi', label: 'Quyền lợi' },
  { id: 'noi-dung', label: 'Nội dung học' },
  { id: 'ho-so', label: 'Hồ sơ' },
  { id: 'hoc-phi', label: 'Học phí' },
];

// ─── Section Wrapper with fade-in ─────────────────────────────────────────
const Section: React.FC<{ id: string; className?: string; children: React.ReactNode }> = ({ id, className = '', children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// ─── Expandable FAQ Item ───────────────────────────────────────────────────
const ExpandItem: React.FC<{ label: string; note?: string }> = ({ label, note }) => (
  <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
      <FaCheckCircle className="text-primary text-xs" />
    </div>
    <div>
      <p className="font-medium text-gray-800">{label}</p>
      {note && <p className="text-sm text-gray-500 mt-0.5">{note}</p>}
    </div>
  </div>
);

// ─── Main Component ────────────────────────────────────────────────────────
const ChiTietKhoaHoc: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('ly-do');
  const [showAllSchedule, setShowAllSchedule] = useState(false);

  const course = coursesPageData.courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-24">
        <div className="text-5xl">😕</div>
        <h2 className="text-2xl font-bold text-gray-800">Không tìm thấy khóa học</h2>
        <p className="text-gray-500">Khóa học bạn đang tìm kiếm không tồn tại</p>
        <Link to="/khoa-hoc" className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary transition-all">
          Xem tất cả khóa học
        </Link>
      </div>
    );
  }

  const scrollTo = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="overflow-x-hidden pb-24">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 pt-24 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white rounded-full translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="absolute inset-0">
          <img src={course.heroImage} alt={course.name} className="w-full h-full object-cover opacity-15" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link to="/khoa-hoc" className="hover:text-white transition-colors">Khóa học</Link>
            <span>/</span>
            <span className="text-white">{course.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1"
            >
              {/* Badge */}
              <div className="h-20 px-6 bg-white rounded-3xl flex items-center justify-center shadow-2xl mb-6 w-fit min-w-[80px]">
                <span className={`${course.badge.length > 3 ? 'text-2xl md:text-3xl' : 'text-4xl'} font-black text-gray-900`}>{course.badge}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
                {course.name}
              </h1>
              <p className="text-white/80 text-lg mb-6 max-w-xl">{course.shortDesc}</p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: FaClock, label: course.duration },
                  { icon: FaTrophy, label: `Tỷ lệ đỗ ${course.passRate}` },
                  { icon: FaUsers, label: `${course.students} học viên` },
                  { icon: FaCalendarAlt, label: `Khai giảng: ${course.nextOpen}` },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
                    <s.icon className="text-xs opacity-80" />
                    {s.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:w-80 bg-white rounded-3xl p-6 shadow-2xl flex-shrink-0 w-full"
            >
              <div className="text-center mb-5">
                <div className="text-xs text-gray-500 mb-1">Học phí trọn gói</div>
                <div className="text-4xl font-black text-primary">{course.tuition.basePrice}</div>
                <div className="text-sm text-gray-500 mt-1">Bao gồm toàn bộ chi phí</div>
              </div>

              <div className="space-y-3 mb-6">
                {course.tuition.includes.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <a
                  href="tel:19001234"
                  className="w-full bg-primary hover:bg-secondary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-primary/30"
                >
                  <FaPhoneAlt /> Đăng ký ngay: 1900 1234
                </a>
                <button
                  onClick={() => scrollTo('hoc-phi')}
                  className="w-full border border-primary text-primary py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-all"
                >
                  Xem học phí chi tiết
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 mt-4">
                📞 Tư vấn miễn phí • Không ràng buộc
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── STICKY TAB NAV ────────────────────────────────────────── */}
      <div className="sticky top-[80px] z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto no-scrollbar py-2">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 1. LÝ DO NÊN CHỌN ────────────────────────────────── */}
        <Section id="ly-do" className="py-16 border-b border-gray-100">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Lý do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">{course.reasons.title}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{course.reasons.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.reasons.items.map((item, i) => {
              const Icon = IconMap[item.icon] ?? FaCheckCircle;
              const colors = ['bg-blue-50 text-blue-600', 'bg-green-50 text-green-600', 'bg-orange-50 text-orange-600', 'bg-purple-50 text-purple-600'];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl ${colors[i % colors.length]} flex items-center justify-center mb-4`}>
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Section>

        {/* ── 2. XE ĐƯỢC LÁI ───────────────────────────────────── */}
        <Section id="xe-lai" className="py-16 border-b border-gray-100">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Phương tiện</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">Các loại xe được lái</h2>
            <p className="text-gray-500">Với bằng <strong>{course.badge}</strong>, bạn có quyền điều khiển những loại phương tiện sau</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {course.vehicles.map((vehicle, i) => {
              const Icon = IconMap[vehicle.icon] ?? FaCar;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon className="text-white text-sm" />
                      </div>
                      <span className="text-white font-bold text-sm">{vehicle.name}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{vehicle.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>

        {/* ── 3. QUYỀN LỢI ─────────────────────────────────────── */}
        <Section id="quyen-loi" className="py-16 border-b border-gray-100">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Quyền lợi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">Quyền lợi khi tham gia học</h2>
            <p className="text-gray-500">Cam kết đầu ra – Học viên được bảo vệ toàn diện</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {course.benefits.map((benefit, i) => {
              const Icon = IconMap[benefit.icon] ?? FaCheckCircle;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="text-primary group-hover:text-white text-xl transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>

        {/* ── 4. NỘI DUNG HỌC ──────────────────────────────────── */}
        <Section id="noi-dung" className="py-16 border-b border-gray-100">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Chương trình</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">Nội dung khóa học</h2>
            <p className="text-gray-500">Chương trình đào tạo chuẩn theo quy định Bộ Giao thông Vận tải</p>
          </div>

          {/* Theory + Practice */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Theory */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Học lý thuyết</h3>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-0.5 rounded-full">{course.curriculum.theory.total}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {course.curriculum.theory.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <FaCar className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Thực hành lái xe</h3>
                  <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-0.5 rounded-full">{course.curriculum.practice.total}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {course.curriculum.practice.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-green-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Schedule Timeline */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <FaCalendarAlt className="text-primary" />
                Lịch trình đào tạo
              </h3>
              <button
                onClick={() => setShowAllSchedule(!showAllSchedule)}
                className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline"
              >
                {showAllSchedule ? 'Thu gọn' : 'Xem chi tiết'}
                {showAllSchedule ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
              </button>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <div className="space-y-0">
                {(showAllSchedule ? course.curriculum.schedule : course.curriculum.schedule.slice(0, 2)).map((phase, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 pb-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex flex-col items-center justify-center text-xs font-bold z-10 flex-shrink-0">
                      <span>GĐ</span>
                      <span>{i + 1}</span>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-2xl p-4 ml-2">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="font-bold text-gray-900">{phase.phase}</h4>
                        <span className="text-xs bg-primary/10 text-primary font-semibold px-2.5 py-1 rounded-full">{phase.duration}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {phase.content.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                            <FaCheckCircle className="text-green-500 flex-shrink-0 text-xs" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── 5. HỒ SƠ ĐĂNG KÝ ────────────────────────────────── */}
        <Section id="ho-so" className="py-16 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary text-sm font-bold uppercase tracking-widest">Đăng ký</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Hồ sơ đăng ký</h2>
              <p className="text-gray-500 mb-8">
                Chuẩn bị đầy đủ hồ sơ theo danh sách dưới đây để hoàn tất thủ tục đăng ký khóa học. 
                Đội ngũ tư vấn của chúng tôi sẵn sàng hỗ trợ bạn qua điện thoại.
              </p>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                {course.documents.map((doc, i) => (
                  <ExpandItem key={i} label={doc.name} note={doc.note} />
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href="tel:19001234"
                  className="bg-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-secondary transition-all shadow-md hover:shadow-primary/30"
                >
                  <FaPhoneAlt size={12} /> Gọi tư vấn ngay
                </a>
                <button className="border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center gap-2">
                  <FaDownload size={12} /> Tải mẫu đơn
                </button>
              </div>
            </div>

            {/* Steps */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FaArrowRight className="text-primary" />
                Quy trình đăng ký
              </h3>
              {[
                { step: '01', title: 'Liên hệ tư vấn', desc: 'Gọi điện hoặc đến trực tiếp trung tâm để được tư vấn miễn phí' },
                { step: '02', title: 'Chuẩn bị hồ sơ', desc: 'Chuẩn bị đầy đủ các giấy tờ theo danh sách, bao gồm khám sức khỏe' },
                { step: '03', title: 'Nộp hồ sơ & đóng học phí', desc: 'Nộp hồ sơ tại văn phòng, đóng học phí (trọn gói hoặc trả góp)' },
                { step: '04', title: 'Bắt đầu học!', desc: 'Nhận lịch học, tài liệu và bắt đầu hành trình học lái xe' },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 mb-5 last:mb-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 text-primary font-black text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-white/60 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── 6. HỌC PHÍ ───────────────────────────────────────── */}
        <Section id="hoc-phi" className="py-16">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Chi phí</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">Học phí khóa học</h2>
            <p className="text-gray-500">Minh bạch, rõ ràng – Không phát sinh chi phí ẩn</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {course.tuition.options.map((opt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`rounded-3xl p-6 border-2 transition-all ${
                  i === 0
                    ? 'bg-gradient-to-br from-primary to-blue-700 border-primary text-white shadow-xl shadow-primary/30 scale-105'
                    : 'bg-white border-gray-200 hover:border-primary/30 hover:shadow-md'
                }`}
              >
                {i === 0 && (
                  <div className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full w-max mb-4">
                    ⭐ Phổ biến nhất
                  </div>
                )}
                <h3 className={`font-bold text-lg mb-2 ${i === 0 ? 'text-white/80' : 'text-gray-700'}`}>{opt.label}</h3>
                <div className={`text-4xl font-black mb-2 ${i === 0 ? 'text-white' : 'text-primary'}`}>{opt.price}</div>
                {opt.note && <p className={`text-sm mb-5 ${i === 0 ? 'text-white/70' : 'text-gray-500'}`}>{opt.note}</p>}
                <a
                  href="tel:19001234"
                  className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                    i === 0
                      ? 'bg-white text-primary hover:bg-gray-50'
                      : 'bg-primary text-white hover:bg-secondary'
                  }`}
                >
                  <FaPhoneAlt size={12} /> Đăng ký ngay
                </a>
              </motion.div>
            ))}
          </div>

          {/* Includes */}
          <div className="mt-8 bg-green-50 rounded-2xl p-6 border border-green-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Học phí đã bao gồm
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.tuition.includes.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                  <FaCheckCircle className="text-green-500 flex-shrink-0 text-xs" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="text-orange-700 text-sm">
              <strong>📌 Lưu ý:</strong> {course.tuition.note}
            </p>
          </div>
        </Section>
      </div>

      {/* ── OTHER COURSES ─────────────────────────────────────────── */}
      <div className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Các khóa học khác</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coursesPageData.courses.filter(c => c.id !== course.id).map((other, i) => (
              <Link
                key={i}
                to={`/khoa-hoc/${other.id}`}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group flex items-center gap-3"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${other.bannerColor} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-black">{other.badge}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-sm truncate">{other.name}</p>
                  <p className="text-primary font-semibold text-xs">{other.tuition.basePrice}</p>
                </div>
                <FaArrowRight className="text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" size={12} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── FIXED BOTTOM CTA (mobile) ─────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-4 flex gap-3 lg:hidden shadow-2xl">
        <a
          href="tel:19001234"
          className="flex-1 bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
        >
          <FaPhoneAlt size={14} /> Gọi: 1900 1234
        </a>
        <button
          onClick={() => scrollTo('hoc-phi')}
          className="flex-1 border border-primary text-primary py-3 rounded-xl font-bold"
        >
          Xem học phí
        </button>
      </div>
    </div>
  );
};

export default ChiTietKhoaHoc;
