import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaShieldAlt,
  FaGraduationCap, FaHeart, FaLightbulb, FaUsers, FaLeaf,
  FaBullseye, FaEye, FaHandshake, FaMedal, FaCertificate,
  FaStar, FaPhoneAlt, FaArrowRight, FaCheckCircle, FaQuoteLeft,
  FaChevronLeft, FaChevronRight, FaPlay,
} from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { aboutPageData } from '../data/aboutData';

// ─── Icon Map ──────────────────────────────────────────────────────────────
const IconMap: Record<string, React.ElementType> = {
  FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaUserGraduate,
  FaShieldAlt, FaGraduationCap, FaHeart, FaLightbulb,
  FaUsers, FaLeaf, FaBullseye, FaEye, FaHandshake,
  FaMedal, FaCertificate, FaStar,
};

// ─── Animated Counter ──────────────────────────────────────────────────────
const AnimatedCounter: React.FC<{ target: string }> = ({ target }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const numericPart = target.replace(/[^0-9.]/g, '');
    const suffix = target.replace(/[0-9.]/g, '');
    const end = parseFloat(numericPart);
    if (isNaN(end)) { setCount(target); return; }
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = end / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(target);
      } else {
        const formatted = Number.isInteger(end)
          ? Math.floor(start).toLocaleString('vi-VN')
          : start.toFixed(1);
        setCount(formatted + suffix);
      }
    }, step);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
};

// ─── Section Wrapper ───────────────────────────────────────────────────────
const SectionWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────
const GioiThieu: React.FC = () => {
  const data = aboutPageData;
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFacility, setActiveFacility] = useState(0);

  const nextTestimonial = () => setActiveTestimonial(p => (p + 1) % data.testimonials.items.length);
  const prevTestimonial = () => setActiveTestimonial(p => (p - 1 + data.testimonials.items.length) % data.testimonials.items.length);

  return (
    <div className="flex flex-col gap-20 pb-20 overflow-x-hidden">

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] flex items-center pt-24 pb-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={data.hero.backgroundImage} alt="Hero" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 text-white/80 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {data.hero.badge}
            </motion.span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {data.hero.title} <br />
              <span className="text-primary">{data.hero.titleHighlight}</span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              {data.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={`tel:${data.ctaBanner.phone}`}
                className="bg-primary hover:bg-secondary text-white px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1">
                <FaPhoneAlt size={14} /> Gọi ngay: {data.ctaBanner.phone}
              </a>
              <Link to="/khoa-hoc"
                className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-all hover:-translate-y-1">
                Xem khóa học <FaArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ── 2. STATS ────────────────────────────────────────────── */}
      <SectionWrapper className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {data.stats.map((stat, i) => {
            const Icon = IconMap[stat.icon] ?? FaStar;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary text-2xl" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">
                  <AnimatedCounter target={stat.value} />
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ── 3. MISSION & VISION ─────────────────────────────────── */}
      <SectionWrapper className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Định hướng</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">{data.mission.sectionTitle}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{data.mission.sectionDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.mission.items.map((item, i) => {
            const Icon = IconMap[item.icon] ?? FaBullseye;
            const gradients = [
              'from-blue-600 to-blue-800',
              'from-purple-600 to-purple-800',
              'from-green-600 to-green-800',
            ];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden group cursor-default"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-90`} />
                <div className="relative z-10 p-8">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                    <Icon className="text-white text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm">{item.description}</p>
                </div>
                {/* Decorative circle */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/5 rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ── 4. HISTORY TIMELINE ─────────────────────────────────── */}
      <SectionWrapper className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Lịch sử</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">{data.history.sectionTitle}</h2>
            <p className="text-gray-500">{data.history.sectionDescription}</p>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            <div className="space-y-8 md:space-y-0">
              {data.history.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`md:flex items-center gap-8 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className={`bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="text-primary font-black text-2xl mb-1">{item.year}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white items-center justify-center font-bold text-sm shadow-lg shadow-primary/30 z-10">
                    {i + 1}
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── 5. CORE VALUES ──────────────────────────────────────── */}
      <SectionWrapper className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Giá trị</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">{data.values.sectionTitle}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{data.values.sectionDescription}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.values.items.map((item, i) => {
            const Icon = IconMap[item.icon] ?? FaStar;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`${item.color} text-2xl`} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ── 6. LEADERSHIP TEAM ──────────────────────────────────── */}
      <SectionWrapper className="bg-gradient-to-br from-slate-900 to-blue-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Đội ngũ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">{data.team.sectionTitle}</h2>
            <p className="text-white/60 max-w-xl mx-auto">{data.team.sectionDescription}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.team.members.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-white text-lg leading-tight">{member.name}</h3>
                    <p className="text-primary text-sm font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-white/60 text-xs mb-3">
                    <FaGraduationCap />
                    <span>{member.experience}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 7. CERTIFICATES ─────────────────────────────────────── */}
      <SectionWrapper className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Công nhận</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">{data.certificates.sectionTitle}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.certificates.items.map((cert, i) => {
            const Icon = IconMap[cert.icon] ?? FaMedal;
            const colors = ['text-yellow-500 bg-yellow-50', 'text-blue-500 bg-blue-50', 'text-green-500 bg-green-50', 'text-purple-500 bg-purple-50'];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className={`w-16 h-16 rounded-full ${colors[i % colors.length]} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-2xl" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2 leading-snug">{cert.title}</h3>
                <p className="text-primary text-xs font-medium mb-1">{cert.issuer}</p>
                <span className="text-gray-400 text-xs">{cert.year}</span>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ── 8. FACILITIES ───────────────────────────────────────── */}
      <SectionWrapper className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Cơ sở vật chất</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">{data.facilities.sectionTitle}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{data.facilities.sectionDescription}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main featured facility */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-80 lg:h-auto group cursor-pointer"
            onClick={() => setActiveFacility(0)}>
            <img
              src={data.facilities.items[activeFacility].image}
              alt={data.facilities.items[activeFacility].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-flex items-center gap-2 bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                <FaPlay size={8} /> Đang xem
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{data.facilities.items[activeFacility].title}</h3>
              <p className="text-white/80 text-sm">{data.facilities.items[activeFacility].description}</p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 gap-4">
            {data.facilities.items.map((facility, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveFacility(i)}
                className={`relative rounded-xl overflow-hidden cursor-pointer h-36 transition-all ${activeFacility === i ? 'ring-3 ring-primary shadow-lg shadow-primary/30' : 'opacity-80 hover:opacity-100'}`}
              >
                <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold leading-tight">{facility.title}</p>
                {activeFacility === i && (
                  <div className="absolute inset-0 ring-2 ring-primary ring-inset rounded-xl" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 9. TESTIMONIALS ─────────────────────────────────────── */}
      <SectionWrapper className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Đánh giá</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">{data.testimonials.sectionTitle}</h2>
          </div>

          <div className="relative">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
            >
              <FaQuoteLeft className="text-primary/20 text-5xl mb-6" />
              <p className="text-gray-700 text-lg leading-relaxed italic mb-8">
                "{data.testimonials.items[activeTestimonial].content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={data.testimonials.items[activeTestimonial].avatar}
                  alt={data.testimonials.items[activeTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{data.testimonials.items[activeTestimonial].name}</h4>
                  <p className="text-sm text-gray-500">{data.testimonials.items[activeTestimonial].course}</p>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: data.testimonials.items[activeTestimonial].rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {data.testimonials.items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all ${activeTestimonial === i ? 'w-8 bg-primary' : 'w-2 bg-gray-300'}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-gray-500">
                  <FaChevronLeft size={12} />
                </button>
                <button onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-gray-500">
                  <FaChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── 10. CTA BANNER ──────────────────────────────────────── */}
      <SectionWrapper className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative bg-gradient-to-r from-primary via-blue-700 to-secondary rounded-3xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/4" />
          </div>

          <div className="relative z-10 py-14 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">{data.ctaBanner.title}</h2>
              <p className="text-white/80 max-w-lg leading-relaxed">{data.ctaBanner.description}</p>

              <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                {[
                  { icon: FaCheckCircle, text: 'Tư vấn miễn phí' },
                  { icon: FaCheckCircle, text: 'Không phát sinh chi phí' },
                  { icon: FaCheckCircle, text: 'Cam kết chất lượng' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/90 text-sm">
                    <item.icon className="text-green-300" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 min-w-fit">
              <a href={`tel:${data.ctaBanner.phone}`}
                className="bg-white text-primary font-bold px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap">
                <FaPhoneAlt />
                Gọi: {data.ctaBanner.phone}
              </a>
              <Link to="/khoa-hoc"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-white/20 transition-all text-center justify-center whitespace-nowrap">
                {data.ctaBanner.secondaryBtn}
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

    </div>
  );
};

export default GioiThieu;
