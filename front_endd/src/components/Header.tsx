import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

type NavItemProps = {
  to: string;
  children: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `
        relative py-1 font-medium transition-colors duration-300
        ${isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'}
        after:content-['']
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:bg-primary
        after:transition-all
        after:duration-300
        ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
        `
      }
    >
      {children}
    </NavLink>
  );
};

const MobileNavItem: React.FC<
  NavItemProps & { onClick: () => void }
> = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        `block px-3 py-3 font-medium rounded-md transition-colors ${
          isActive
            ? 'text-primary bg-blue-50'
            : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
        }`
      }
    >
      {children}
    </NavLink>
  );
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                PG
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-primary text-xl leading-none">GDNN Phú Giáo</span>
                <span className="text-[10px] text-gray-500 font-medium">TRUNG TÂM ĐÀO TẠO LÁI XE</span>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <NavItem to="/">Trang chủ</NavItem>
            <NavItem to="/gioi-thieu">Giới thiệu</NavItem>
            <NavItem to="/khoa-hoc">Khóa học</NavItem>
            <NavItem to="/giang-vien">Giảng viên</NavItem>
            <NavItem to="/lich-hoc">Lịch học</NavItem>
            <NavItem to="/tin-tuc">Tin tức</NavItem>
            <NavItem to="/lien-he">Liên hệ</NavItem>
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="tel:19001234"
              className="bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
            >
              <FaPhoneAlt size={14} />
              1900 1234
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <MobileNavItem to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Trang chủ
            </MobileNavItem>
            <MobileNavItem to="/gioi-thieu" onClick={() => setIsMobileMenuOpen(false)}>
              Giới thiệu
            </MobileNavItem>
            <MobileNavItem to="/khoa-hoc" onClick={() => setIsMobileMenuOpen(false)}>
              Khóa học
            </MobileNavItem>
            <MobileNavItem to="/giang-vien" onClick={() => setIsMobileMenuOpen(false)}>
              Giảng viên
            </MobileNavItem>
            <MobileNavItem to="/lich-hoc" onClick={() => setIsMobileMenuOpen(false)}>
              Lịch học
            </MobileNavItem>
            <MobileNavItem to="/tin-tuc" onClick={() => setIsMobileMenuOpen(false)}>
              Tin tức
            </MobileNavItem>
            <MobileNavItem to="/lien-he" onClick={() => setIsMobileMenuOpen(false)}>
              Liên hệ
            </MobileNavItem>

            <a
              href="tel:19001234"
              className="mt-4 bg-primary text-white px-5 py-3 rounded-md font-semibold flex items-center justify-center gap-2"
            >
              <FaPhoneAlt size={14} />
              Gọi ngay: 1900 1234
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
