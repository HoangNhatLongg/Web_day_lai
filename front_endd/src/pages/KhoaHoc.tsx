import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowRight, FaCalendarAlt, FaCheckCircle, FaClock,
  FaTrophy, FaUsers, FaPhoneAlt, FaStar, FaSearch,
  FaFire, FaGraduationCap,
} from 'react-icons/fa';
import { coursesPageData } from '../data/coursesData';

const KhoaHoc: React.FC = () => {
  const { hero, categories, courses } = coursesPageData;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchCategory =
      activeCategory === 'all' ||
      (activeCategory === 'B' && ['B1', 'B2'].includes(course.badge)) ||
      (activeCategory === 'C' && ['C', 'C1'].includes(course.badge)) ||
      (activeCategory === 'D' && ['D', 'D1'].includes(course.badge)) ||
      (activeCategory === 'EF' && ['E', 'F'].includes(course.badge));
    const matchSearch =
      searchQuery === '' ||
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const popularBadges = ['B2', 'C'];

  return (
    <div className="flex flex-col gap-0 pb-20 overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 pt-28 pb-20 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-10 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-10 w-56 h-56 bg-purple-500/10 rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {hero.subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              {hero.title}
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              {hero.description}
            </p>

            {/* Search */}
            <div className="max-w-lg mx-auto relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm khóa học..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary focus:bg-white/15 transition-all text-base"
              />
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12"
          >
            {[
              { icon: FaGraduationCap, value: '15.000+', label: 'Học viên đã học' },
              { icon: FaTrophy, value: '98%', label: 'Tỷ lệ đỗ sát hạch' },
              { icon: FaStar, value: '4.9★', label: 'Đánh giá học viên' },
            ].map((item, i) => (
              <div key={i} className="text-center bg-white/5 backdrop-blur rounded-2xl py-4 px-2 border border-white/10">
                <item.icon className="text-primary text-xl mx-auto mb-2" />
                <div className="text-2xl font-black text-white">{item.value}</div>
                <div className="text-white/60 text-xs">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FILTER CATEGORIES ─────────────────────────────────────── */}
      <section className="bg-white sticky top-[80px] z-30 shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.value
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE GRID ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20">
            <FaSearch className="text-5xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Không tìm thấy khóa học phù hợp</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 text-primary font-semibold hover:underline"
            >
              Xem tất cả khóa học
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
              >
                {/* Card Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={course.heroImage}
                    alt={course.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${course.bannerColor} opacity-75`} />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-black text-gray-800">{course.badge}</span>
                  </div>

                  {/* Popular Tag */}
                  {popularBadges.includes(course.badge) && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <FaFire size={10} /> Phổ biến
                    </div>
                  )}

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="text-xl font-bold text-white">{course.name}</h2>
                    <p className="text-white/80 text-sm mt-1 line-clamp-1">{course.shortDesc}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { icon: FaClock, label: 'Thời gian', value: course.duration },
                      { icon: FaTrophy, label: 'Tỷ lệ đỗ', value: course.passRate },
                      { icon: FaUsers, label: 'Học viên', value: course.students },
                    ].map((stat, j) => (
                      <div key={j} className="text-center bg-gray-50 rounded-xl py-2.5 px-2">
                        <stat.icon className="text-primary mx-auto mb-1 text-sm" />
                        <div className="text-xs text-gray-500">{stat.label}</div>
                        <div className="text-sm font-bold text-gray-800">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-5 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Học phí trọn gói</div>
                      <div className="text-2xl font-black text-primary">{course.tuition.basePrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-0.5">Khai giảng tiếp theo</div>
                      <div className="flex items-center gap-1.5 text-green-600 font-semibold text-sm">
                        <FaCalendarAlt />
                        {course.nextOpen}
                      </div>
                    </div>
                  </div>

                  {/* Quick Highlights */}
                  <ul className="space-y-1.5 mb-6">
                    {course.tuition.includes.slice(0, 3).map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 flex-shrink-0 text-xs" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link
                      to={`/khoa-hoc/${course.id}`}
                      className="flex-1 bg-primary hover:bg-secondary text-white text-center py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30"
                    >
                      Xem chi tiết <FaArrowRight size={12} />
                    </Link>
                    <a
                      href="tel:19001234"
                      className="px-4 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all flex items-center gap-2 font-semibold"
                    >
                      <FaPhoneAlt size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary via-blue-700 to-secondary rounded-3xl p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-white rounded-full translate-y-1/3 -translate-x-1/3" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Chưa biết nên chọn hạng bằng nào?
            </h2>
            <p className="text-white/80 mb-7 max-w-xl mx-auto">
              Gọi ngay để được tư vấn miễn phí – Chúng tôi sẽ giúp bạn chọn khóa học phù hợp nhất!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:19001234"
                className="bg-white text-primary font-bold px-8 py-3.5 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition-all shadow-lg hover:-translate-y-1"
              >
                <FaPhoneAlt /> Gọi ngay: 1900 1234
              </a>
              <a
                href="#"
                className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                Nhắn tin tư vấn
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default KhoaHoc;
