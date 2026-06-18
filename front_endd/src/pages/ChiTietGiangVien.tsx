import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  FaStar, FaUsers, FaClock, FaPhoneAlt, FaEnvelope,
  FaGraduationCap, FaCheckCircle, FaCertificate,
  FaArrowRight, FaCalendarAlt, FaArrowLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { instructorsPageData } from '../data/instructorsData';
import { coursesPageData } from '../data/coursesData';

// Render star icons with partial fill support
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {[1, 2, 3, 4, 5].map(star => (
        <FaStar
          key={star}
          className={star <= Math.round(rating) ? 'text-amber-400' : 'text-gray-300'}
        />
      ))}
      <span className="ml-2 text-gray-700 font-bold text-lg">{rating}</span>
      <span className="text-gray-400 text-sm">/ 5.0</span>
    </div>
  );
};

const ChiTietGiangVien: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const instructor = instructorsPageData.instructors.find(ins => ins.id === id);

  if (!instructor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-24">
        <div className="text-5xl">😕</div>
        <h2 className="text-2xl font-bold text-gray-800">Không tìm thấy giảng viên</h2>
        <p className="text-gray-500">Giảng viên bạn đang tìm kiếm không tồn tại</p>
        <Link
          to="/giang-vien"
          className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary transition-all"
        >
          Xem tất cả giảng viên
        </Link>
      </div>
    );
  }

  // Get linked courses
  const linkedCourses = coursesPageData.courses.filter(c =>
    instructor.courseIds.includes(c.id)
  );

  // Other instructors
  const otherInstructors = instructorsPageData.instructors.filter(ins => ins.id !== instructor.id);

  return (
    <div className="overflow-x-hidden pb-24">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 pt-24 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white rounded-full translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link to="/giang-vien" className="hover:text-white transition-colors">Giảng viên</Link>
            <span>/</span>
            <span className="text-white">{instructor.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left: Instructor Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1 flex flex-col sm:flex-row gap-6"
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Rating bubble */}
                <div className="absolute -bottom-3 -right-3 bg-amber-400 text-slate-900 font-black text-sm px-2.5 py-1.5 rounded-xl flex items-center gap-1 shadow-lg">
                  <FaStar size={12} /> {instructor.rating}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                  {instructor.name}
                </h1>
                <p className="text-primary/90 font-semibold text-lg mb-4">{instructor.title}</p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {[
                    { icon: FaClock, label: instructor.experience },
                    { icon: FaUsers, label: instructor.students },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
                      <s.icon className="text-xs opacity-80" />
                      {s.label}
                    </div>
                  ))}
                </div>

                {/* Schedule */}
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <FaCalendarAlt className="text-primary" />
                  <span>{instructor.schedule}</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:w-72 bg-white rounded-3xl p-6 shadow-2xl flex-shrink-0 w-full"
            >
              <h3 className="font-bold text-gray-900 mb-4 text-center">Liên hệ giảng viên</h3>

              <div className="space-y-3 mb-6">
                {instructor.phone && (
                  <a
                    href={`tel:${instructor.phone}`}
                    className="w-full bg-primary hover:bg-secondary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-primary/30"
                  >
                    <FaPhoneAlt size={14} /> {instructor.phone}
                  </a>
                )}
                {instructor.email && (
                  <a
                    href={`mailto:${instructor.email}`}
                    className="w-full border border-primary text-primary py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                  >
                    <FaEnvelope size={14} /> Gửi email
                  </a>
                )}
              </div>

              <p className="text-center text-xs text-gray-400">
                📞 Tư vấn miễn phí • Không ràng buộc
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column: Bio + Specialties + Certifications */}
          <div className="lg:col-span-2 space-y-8">

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <FaGraduationCap className="text-primary text-xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Giới thiệu</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">{instructor.bio}</p>
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <FaStar className="text-green-600 text-xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Chuyên môn</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {instructor.specialties.map((sp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-4 hover:border-green-300 transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="text-white text-xs" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{sp}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <FaCertificate className="text-purple-600 text-xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Chứng chỉ & Bằng cấp</h2>
              </div>
              <ul className="space-y-3">
                {instructor.certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                    <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-600 font-bold text-xs">{i + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm font-medium">{cert}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Linked Courses */}
            {linkedCourses.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                    <FaGraduationCap className="text-orange-500 text-xl" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Khóa học giảng dạy</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {linkedCourses.map((course, i) => (
                    <Link
                      key={i}
                      to={`/khoa-hoc/${course.id}`}
                      className="group bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-primary/30 rounded-2xl p-4 flex items-center gap-3 transition-all"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.bannerColor} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-black">{course.badge}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 text-sm truncate">{course.name}</p>
                        <p className="text-primary font-semibold text-xs mt-0.5">{course.tuition.basePrice}</p>
                      </div>
                      <FaArrowRight className="text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" size={12} />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Stats + Rating + Schedule */}
          <div className="space-y-6">

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-6 text-white"
            >
              <h3 className="font-bold text-lg mb-4">Thống kê nhanh</h3>
              <div className="space-y-4">
                {[
                  { icon: FaClock, label: 'Kinh nghiệm', value: instructor.experience, color: 'text-blue-300' },
                  { icon: FaUsers, label: 'Đã đào tạo', value: instructor.students, color: 'text-green-300' },
                  { icon: FaStar, label: 'Đánh giá', value: `${instructor.rating} / 5.0`, color: 'text-amber-300' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3">
                    <stat.icon className={`${stat.color} text-xl flex-shrink-0`} />
                    <div>
                      <div className="text-white/60 text-xs">{stat.label}</div>
                      <div className="text-white font-bold text-sm">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Rating Visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
            >
              <h3 className="font-bold text-gray-900 mb-4">Đánh giá học viên</h3>
              <div className="text-center mb-4">
                <div className="text-6xl font-black text-primary mb-2">{instructor.rating}</div>
                <StarRating rating={instructor.rating} />
                <p className="text-gray-400 text-sm mt-2">Dựa trên hàng trăm đánh giá</p>
              </div>

              {/* Rating bars */}
              {[
                { stars: 5, percent: 92 },
                { stars: 4, percent: 6 },
                { stars: 3, percent: 2 },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-500 w-4">{row.stars}</span>
                  <FaStar className="text-amber-400 text-xs flex-shrink-0" />
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="h-full bg-amber-400 rounded-full"
                    />
                  </div>
                  <span className="text-xs text-gray-400 w-8">{row.percent}%</span>
                </div>
              ))}
            </motion.div>

            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-3xl p-6 border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaCalendarAlt className="text-primary text-xl" />
                <h3 className="font-bold text-gray-900">Lịch dạy</h3>
              </div>
              <p className="text-gray-700 text-sm font-medium leading-relaxed">{instructor.schedule}</p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
            >
              <h3 className="font-bold text-gray-900 mb-4">Thông tin liên hệ</h3>
              <div className="space-y-3">
                {instructor.phone && (
                  <a href={`tel:${instructor.phone}`} className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-all">
                      <FaPhoneAlt className="text-primary group-hover:text-white text-sm transition-colors" />
                    </div>
                    <span className="font-medium text-sm">{instructor.phone}</span>
                  </a>
                )}
                {instructor.email && (
                  <a href={`mailto:${instructor.email}`} className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-all">
                      <FaEnvelope className="text-primary group-hover:text-white text-sm transition-colors" />
                    </div>
                    <span className="font-medium text-sm truncate">{instructor.email}</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── OTHER INSTRUCTORS ─────────────────────────────────────── */}
      <div className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Giảng viên khác</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherInstructors.slice(0, 4).map((ins, i) => (
              <Link
                key={i}
                to={`/giang-vien/${ins.id}`}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={ins.image} alt={ins.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-sm truncate">{ins.name}</p>
                  <p className="text-primary font-semibold text-xs truncate">{ins.title}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <FaStar className="text-amber-400" size={10} />
                    <span className="text-gray-500 text-xs">{ins.rating}</span>
                  </div>
                </div>
                <FaChevronRight className="text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" size={12} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── FIXED BOTTOM CTA (mobile) ─────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-4 flex gap-3 lg:hidden shadow-2xl">
        {instructor.phone && (
          <a
            href={`tel:${instructor.phone}`}
            className="flex-1 bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <FaPhoneAlt size={14} /> Gọi giảng viên
          </a>
        )}
        <Link
          to="/giang-vien"
          className="flex-1 border border-primary text-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2"
        >
          <FaArrowLeft size={14} /> Quay lại
        </Link>
      </div>
    </div>
  );
};

export default ChiTietGiangVien;
