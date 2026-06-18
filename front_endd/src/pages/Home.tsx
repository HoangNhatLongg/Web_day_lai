import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaCheckCircle, FaCalendarAlt, FaBookOpen, FaUserTie, FaCar, FaHeadset,
  FaArrowRight, FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft,
  FaMapMarkerAlt, FaClock, FaUsers,
} from 'react-icons/fa';
import { coursesPageData } from '../data/coursesData';
import { instructorsPageData } from '../data/instructorsData';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { courses } = coursesPageData;
  const { instructors } = instructorsPageData;

  // Show top 4 courses on home
  const featuredCourses = courses.slice(0, 4);
  // Show top 4 instructors on home
  const featuredInstructors = instructors.slice(0, 4);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] lg:min-h-[750px] flex items-center pt-20 pb-32">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(min-width: 768px)" srcSet="/hero_bg.png" />
            <img 
              src="/hero_bg_doc.png" 
              alt="An Toan Driving School" 
              className="w-full h-full object-cover object-right-top lg:object-right"
            />
          </picture>
          {/* Gradient overlay: Solid white on left, fading to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 sm:via-white/40 to-transparent md:from-white md:via-white/80 md:to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[50%] flex flex-col"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm mb-6 w-max border border-primary/20"
            >
              Trung tâm đào tạo lái xe hàng đầu
            </motion.div>
            <h1 className="text-4xl md:text-[52px] font-extrabold text-textMain leading-[1.2] mb-6 tracking-tight">
              Làm chủ tay lái <br/>
              <span className="text-primary">An toàn</span> trên mọi hành trình
            </h1>
            <p className="text-lg text-gray-800 mb-8 max-w-xl font-medium">
              Học lái xe bài bản với chương trình chuẩn Bộ GTVT. Cam kết chất lượng đào tạo, tự tin cầm lái chỉ sau 1 khóa học.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Đội ngũ giảng viên 10+ năm kinh nghiệm',
                'Học phí minh bạch - Hỗ trợ trả góp 0%',
                'Xe đời mới, sân tập chuẩn sa hình',
                'Tỷ lệ đỗ sát hạch lên tới 98%'
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                  className="flex items-center gap-3 text-gray-900 font-bold"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                    <FaCheckCircle className="text-success text-sm" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 transform hover:-translate-y-1">
                <FaCalendarAlt /> Đăng ký tư vấn ngay
              </button>
              <button
                onClick={() => navigate('/khoa-hoc')}
                className="bg-white/90 backdrop-blur-sm hover:bg-white text-textMain border border-gray-200 px-8 py-4 rounded-xl font-semibold transition-all shadow-sm flex items-center gap-2 transform hover:-translate-y-1"
              >
                Tìm hiểu khóa học
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {[
            { icon: FaCar, title: 'Đào tạo chuyên nghiệp', desc: 'Theo chương trình chuẩn Bộ GTVT', color: 'text-blue-500', bg: 'bg-blue-50' },
            { icon: FaUserTie, title: 'Giảng viên tận tâm', desc: 'Kinh nghiệm - Nhiệt tình - Trách nhiệm', color: 'text-green-500', bg: 'bg-green-50' },
            { icon: FaBookOpen, title: 'Học thực hành hiện đại', desc: 'Xe đời mới - Sân tập đạt chuẩn', color: 'text-yellow-500', bg: 'bg-yellow-50' },
            { icon: FaHeadset, title: 'Hỗ trợ học viên tối đa', desc: 'Hỗ trợ 24/7 - Giải đáp mọi thắc mắc', color: 'text-red-500', bg: 'bg-red-50' },
          ].map((feature, i) => (
            <div key={i} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className={`p-3 rounded-full ${feature.bg} ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-textMain mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-textMain mb-2 uppercase">Các khóa học phổ biến</h2>
        <p className="text-gray-500 mb-10">Đa dạng khóa học - Phù hợp với mọi nhu cầu</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {featuredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => navigate(`/khoa-hoc/${course.id}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.heroImage}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${course.bannerColor} opacity-60`} />
                <div className="absolute top-4 left-4 bg-white text-gray-900 px-3 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg min-w-[40px]">
                  {course.badge}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-textMain mb-2 group-hover:text-primary transition-colors">{course.name}</h3>
                <p className="text-sm text-gray-600 mb-4 h-10 line-clamp-2">{course.shortDesc}</p>
                <div className="space-y-2 mb-4 text-sm text-gray-500 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-gray-400" />
                    <span>Thời gian: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-gray-400" />
                    <span>{course.students} học viên</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary text-xl">{course.tuition.basePrice}</span>
                  <button
                    type="button"
                    onClick={e => { e.stopPropagation(); navigate(`/khoa-hoc/${course.id}`); }}
                    className="text-primary bg-blue-50 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8">
          <button
            onClick={() => navigate('/khoa-hoc')}
            className="text-primary font-semibold border border-primary px-8 py-2.5 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            Xem tất cả khóa học →
          </button>
        </div>
      </section>

      {/* Instructors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center bg-gray-50 rounded-2xl">
        <h2 className="text-3xl font-bold text-textMain mb-2 uppercase">Giảng viên tiêu biểu</h2>
        <p className="text-gray-500 mb-10">Đội ngũ giảng viên giàu kinh nghiệm - Tận tâm - Trách nhiệm</p>
        
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
            <FaChevronLeft />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left overflow-hidden px-4">
            {featuredInstructors.map((ins, i) => (
              <motion.div
                key={ins.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => navigate(`/giang-vien/${ins.id}`)}
              >
                <div className="h-48 overflow-hidden bg-blue-50 relative">
                  <img
                    src={ins.image}
                    alt={ins.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Rating badge */}
                  <div className="absolute top-3 right-3 bg-amber-400 text-slate-900 text-xs font-black px-2 py-1 rounded-lg flex items-center gap-1">
                    <FaStar size={9} /> {ins.rating}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-textMain mb-1 group-hover:text-primary transition-colors">{ins.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{ins.title}</p>
                  <ul className="text-xs text-gray-500 space-y-2 mb-3">
                    <li className="flex items-center gap-2"><FaUserTie /> {ins.experience}</li>
                    <li className="flex items-center gap-2"><FaCheckCircle /> {ins.students}</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      <span className="text-textMain font-bold mr-1">{ins.rating}</span>
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <button
                      type="button"
                      onClick={e => { e.stopPropagation(); navigate(`/giang-vien/${ins.id}`); }}
                      className="text-primary bg-blue-50 p-1.5 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <FaArrowRight size={10} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
            <FaChevronRight />
          </button>
        </div>
        
        <div className="mt-8">
          <button
            onClick={() => navigate('/giang-vien')}
            className="text-primary font-semibold border border-primary px-8 py-2.5 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            Xem tất cả giảng viên →
          </button>
        </div>
      </section>

      {/* 3 Columns Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Col 1: Thông báo tuyển sinh */}
        <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <FaHeadset className="text-primary text-2xl" />
            <h3 className="font-bold text-lg text-primary uppercase">Thông báo tuyển sinh</h3>
          </div>
          <div className="space-y-4">
            {[
              { date: '20', month: '05/2024', title: 'Tuyển sinh khóa B2 - Khai giảng 01/06/2024', desc: 'Ưu đãi giảm 5% học phí cho 50 học viên đăng ký sớm.' },
              { date: '15', month: '05/2024', title: 'Tuyển sinh khóa C - Khai giảng 25/05/2024', desc: 'Hỗ trợ trả góp 0% lãi suất.' },
              { date: '10', month: '05/2024', title: 'Tuyển sinh khóa D1 - Khai giảng 20/05/2024', desc: 'Đăng ký nhóm 2 người ưu đãi thêm 200k.' },
            ].map((news, i) => (
              <div key={i} className="flex gap-4 items-start bg-white p-3 rounded-lg shadow-sm border border-gray-50">
                <div className="bg-blue-100 text-primary text-center p-2 rounded-lg min-w-[60px]">
                  <div className="font-bold text-xl leading-none">{news.date}</div>
                  <div className="text-[10px] font-medium mt-1">{news.month}</div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-textMain mb-1">{news.title}</h4>
                  <p className="text-xs text-gray-500 mb-2">{news.desc}</p>
                  <a href="#" className="text-primary text-xs font-semibold flex items-center gap-1 hover:underline">Xem chi tiết <FaChevronRight size={10} /></a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
             <button className="text-primary font-semibold border border-primary px-6 py-2 rounded-full text-sm hover:bg-primary hover:text-white transition-colors w-full">
              Xem tất cả thông báo
            </button>
          </div>
        </div>

        {/* Col 2: Tại sao chọn chúng tôi */}
        <div className="bg-orange-50/30 rounded-xl p-6 border border-orange-100 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <FaStar className="text-accent text-2xl" />
            <h3 className="font-bold text-lg text-accent uppercase">Tại sao chọn chúng tôi?</h3>
          </div>
          <div className="space-y-4 relative z-10">
            {[
              'Chương trình đào tạo chuẩn Bộ GTVT',
              'Học phí minh bạch - Không phát sinh',
              'Lịch học linh hoạt - Hỗ trợ tối đa',
              'Sân tập hiện đại - Xe mới, đạt chuẩn',
              'Tỷ lệ đỗ cao - Cam kết chất lượng'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-50">
                <FaCheckCircle className="text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-textMain">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center relative z-10">
             <button className="bg-accent text-white font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-orange-600 transition-colors shadow-md w-full">
              Tìm hiểu thêm về chúng tôi
            </button>
          </div>
          <FaStar className="absolute -bottom-10 -right-10 text-orange-100 text-9xl -z-0 opacity-50" />
        </div>

        {/* Col 3: Đánh giá học viên */}
        <div className="bg-green-50/50 rounded-xl p-6 border border-green-100">
           <div className="flex items-center gap-3 mb-6">
            <FaQuoteLeft className="text-success text-2xl" />
            <h3 className="font-bold text-lg text-success uppercase">Đánh giá học viên</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-50 relative">
             <div className="flex items-center gap-4 mb-4">
               <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop" className="w-12 h-12 rounded-full object-cover" alt="User" />
               <div>
                 <h4 className="font-bold text-textMain">Nguyễn Hoàng Anh</h4>
                 <p className="text-xs text-gray-500">Học viên khóa B2</p>
                 <div className="flex text-yellow-400 text-xs mt-1">
                   <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                 </div>
               </div>
             </div>
             <p className="text-sm text-gray-600 italic">
               "Thầy dạy rất nhiệt tình, dễ hiểu. Cơ sở vật chất tốt, xe tập lái đời mới. Mình đã thi đỗ ngay lần đầu. Rất cảm ơn Trung tâm!"
             </p>
             <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  <button className="w-6 h-6 rounded-full bg-blue-50 text-primary flex items-center justify-center"><FaChevronLeft size={10}/></button>
                  <button className="w-6 h-6 rounded-full bg-blue-50 text-primary flex items-center justify-center"><FaChevronRight size={10}/></button>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                </div>
             </div>
          </div>
          <div className="mt-6 text-center">
             <button className="text-success font-semibold border border-success px-6 py-2 rounded-full text-sm hover:bg-success hover:text-white transition-colors w-full">
              Xem thêm đánh giá
            </button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-primary text-white py-10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <div className="flex flex-col items-center justify-center">
              <FaUserTie className="text-3xl mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-1">15.000+</div>
              <div className="text-sm font-medium opacity-90">Học viên đã tốt nghiệp</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaCheckCircle className="text-3xl mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-1">98%</div>
              <div className="text-sm font-medium opacity-90">Tỷ lệ đỗ kỳ thi sát hạch</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaCar className="text-3xl mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-1">120+</div>
              <div className="text-sm font-medium opacity-90">Xe tập lái hiện đại</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaMapMarkerAlt className="text-3xl mb-3 opacity-80" />
              <div className="text-4xl font-bold mb-1">5+</div>
              <div className="text-sm font-medium opacity-90">Cơ sở đào tạo toàn quốc</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
