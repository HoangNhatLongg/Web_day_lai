import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaStar, FaUsers, FaClock, FaPhoneAlt, FaSearch,
  FaGraduationCap, FaChevronRight, FaCertificate,
  FaArrowRight,
} from 'react-icons/fa';
import { instructorsPageData } from '../data/instructorsData';

const GiangVien: React.FC = () => {
  const { hero, instructors } = instructorsPageData;
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filtered = instructors.filter(ins =>
    searchQuery === '' ||
    ins.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ins.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ins.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const stats = [
    { icon: FaGraduationCap, value: '50+', label: 'Giảng viên chuyên nghiệp' },
    { icon: FaUsers, value: '39.000+', label: 'Học viên được đào tạo' },
    { icon: FaStar, value: '4.9★', label: 'Đánh giá trung bình' },
  ];

  return (
    <div className="flex flex-col gap-0 pb-20 overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 pt-28 pb-20 overflow-hidden">
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
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              {hero.description}
            </p>

            {/* Search */}
            <div className="max-w-lg mx-auto relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm giảng viên, chuyên môn..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary focus:bg-white/15 transition-all text-base"
              />
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12"
          >
            {stats.map((item, i) => (
              <div key={i} className="text-center bg-white/5 backdrop-blur rounded-2xl py-4 px-2 border border-white/10">
                <item.icon className="text-primary text-xl mx-auto mb-2" />
                <div className="text-2xl font-black text-white">{item.value}</div>
                <div className="text-white/60 text-xs">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INSTRUCTOR GRID ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <FaSearch className="text-5xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Không tìm thấy giảng viên phù hợp</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-primary font-semibold hover:underline"
            >
              Xem tất cả giảng viên
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((ins, i) => (
              <motion.div
                key={ins.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
              >
                {/* Card Header / Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-800 to-blue-900">
                  <img
                    src={ins.image}
                    alt={ins.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 text-xs font-black px-2.5 py-1.5 rounded-xl flex items-center gap-1 shadow-lg">
                    <FaStar size={10} /> {ins.rating}
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="text-xl font-bold text-white">{ins.name}</h2>
                    <p className="text-primary/90 text-sm font-medium mt-0.5">{ins.title}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Stats row */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { icon: FaClock, label: 'Kinh nghiệm', value: ins.experience },
                      { icon: FaUsers, label: 'Học viên', value: ins.students.replace('Hơn ', '').replace(' đã đào tạo', '') },
                    ].map((stat, j) => (
                      <div key={j} className="text-center bg-gray-50 rounded-xl py-2.5 px-2">
                        <stat.icon className="text-primary mx-auto mb-1 text-sm" />
                        <div className="text-xs text-gray-500">{stat.label}</div>
                        <div className="text-xs font-bold text-gray-800 mt-0.5">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Specialties */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      <FaCertificate className="text-primary" /> Chuyên môn
                    </div>
                    <ul className="space-y-1">
                      {ins.specialties.slice(0, 2).map((sp, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <FaChevronRight className="text-primary flex-shrink-0 text-xs mt-1" />
                          <span className="line-clamp-1">{sp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => navigate(`/giang-vien/${ins.id}`)}
                      className="flex-1 touch-manipulation bg-primary hover:bg-secondary text-white text-center py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30"
                    >
                      Xem chi tiết <FaArrowRight size={12} />
                    </button>
                    <a
                      href="tel:19001234"
                      className="touch-manipulation px-4 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all flex items-center gap-2 font-semibold"
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
              Muốn học trực tiếp với giảng viên yêu thích?
            </h2>
            <p className="text-white/80 mb-7 max-w-xl mx-auto">
              Liên hệ ngay để được tư vấn và đăng ký khóa học với giảng viên phù hợp!
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

export default GiangVien;
