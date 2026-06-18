import React from 'react';
import { FaFacebookF, FaYoutube, FaTiktok, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                PG
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-primary text-xl leading-none">GDNN Phú Giáo</span>
                <span className="text-[10px] text-gray-500 font-medium">TRUNG TÂM ĐÀO TẠO LÁI XE</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Với sứ mệnh đào tạo ra những lái xe có kiến thức vững vàng, kỹ năng lái xe an toàn và ý thức trách nhiệm cao khi tham gia giao thông.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"><FaFacebookF size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors"><FaYoutube size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"><FaTiktok size={14} /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-textMain mb-6 uppercase text-sm">Liên kết nhanh</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Trang chủ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Khóa học</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Giảng viên</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lịch học</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tin tức</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-textMain mb-6 uppercase text-sm">Hỗ trợ</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Hướng dẫn đăng ký</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Quy định & Điều khoản</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chính sách bảo mật</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-bold text-textMain mb-6 uppercase text-sm">Thông tin liên hệ</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" size={16} />
                <span>Số 123, Đường ABC, P. An Lạc, Q. Bình Tân, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" size={16} />
                <a href="tel:19001234" className="hover:text-primary transition-colors font-semibold">1900 1234</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" size={16} />
                <a href="mailto:lienhe@antoan.edu.vn" className="hover:text-primary transition-colors">lienhe@antoan.edu.vn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
          <p>© 2024 Trung tâm đào tạo lái xe An Toàn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
