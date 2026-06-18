import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCalendarAlt, FaBookOpen, FaUserTie, FaCar, FaHeadset, FaArrowRight, FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaMapMarkerAlt } from 'react-icons/fa';
// Note: for production you would import real images, but we will use placeholders for now.

const Home: React.FC = () => {
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
              <button className="bg-white/90 backdrop-blur-sm hover:bg-white text-textMain border border-gray-200 px-8 py-4 rounded-xl font-semibold transition-all shadow-sm flex items-center gap-2 transform hover:-translate-y-1">
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
          {[
            { id: 'B1', title: 'Khóa học lái xe B1', desc: 'Dành cho người lái xe số tự động đến 9 chỗ ngồi.', time: '3 - 3.5 tháng', price: '12.000.000đ', img: 'https://sathachlaixebinhthuan.com/uploads/news/images/702_cr.png' },
            { id: 'B2', title: 'Khóa học lái xe B2', desc: 'Dành cho người lái xe số sàn và tự động đến 9 chỗ ngồi.', time: '3.5 - 4 tháng', price: '13.500.000đ', img: 'https://sathachlaixebinhthuan.com/uploads/news/images/702_cr.png' },
            { id: 'C', title: 'Khóa học lái xe C', desc: 'Dành cho người lái xe tải và xe chuyên dụng.', time: '4 - 5 tháng', price: '15.000.000đ', img: 'data:image/jpeg;base64,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' },
            { id: 'D', title: 'Khóa học lái xe D', desc: 'Dành cho người lái xe chở người từ 10 - 30 chỗ.', time: '4.5 - 5.5 tháng', price: '16.000.000đ', img: 'data:image/jpeg;base64,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' }
          ].map((course, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">{course.id}</div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-textMain mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4 h-10">{course.desc}</p>
                <div className="space-y-2 mb-4 text-sm text-gray-500 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2"><FaCalendarAlt className="text-gray-400" /> Thời gian: {course.time}</div>
                  <div className="flex items-center gap-2"><FaCheckCircle className="text-gray-400" /> Học phí trọn gói</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary text-xl">{course.price}</span>
                  <button className="text-primary bg-blue-50 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <button className="text-primary font-semibold border border-primary px-8 py-2.5 rounded-full hover:bg-primary hover:text-white transition-colors">
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
            {[
              { name: 'Thầy Nguyễn Văn Nam', course: 'Giáo viên hạng B2 - C', exp: '15 năm kinh nghiệm', students: 'Hơn 12.000 học viên đã đào tạo', rating: 4.9, img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop' },
              { name: 'Cô Trần Thị Hương', course: 'Giáo viên hạng B1 - B2', exp: '8 năm kinh nghiệm', students: 'Hơn 8.000 học viên đã đào tạo', rating: 4.8, img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop' },
              { name: 'Thầy Lê Hoàng Phúc', course: 'Giáo viên hạng C - D', exp: '12 năm kinh nghiệm', students: 'Hơn 10.000 học viên đã đào tạo', rating: 4.9, img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop' },
              { name: 'Thầy Phạm Minh Tuấn', course: 'Giáo viên hạng B2 - C', exp: '18 năm kinh nghiệm', students: 'Hơn 9.000 học viên đã đào tạo', rating: 4.8, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop' },
            ].map((teacher, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden bg-blue-50 relative">
                  <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-textMain mb-1">{teacher.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{teacher.course}</p>
                  <ul className="text-xs text-gray-500 space-y-2 mb-3">
                    <li className="flex items-center gap-2"><FaUserTie /> {teacher.exp}</li>
                    <li className="flex items-center gap-2"><FaCheckCircle /> {teacher.students}</li>
                  </ul>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <span className="text-textMain font-bold mr-1">{teacher.rating}</span>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
            <FaChevronRight />
          </button>
        </div>
        
        <div className="mt-8">
          <button className="text-primary font-semibold border border-primary px-8 py-2.5 rounded-full hover:bg-primary hover:text-white transition-colors">
            Xem tất cả giảng viên
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
