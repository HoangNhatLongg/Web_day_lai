import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import GioiThieu from './pages/GioiThieu';
import KhoaHoc from './pages/KhoaHoc';
import ChiTietKhoaHoc from './pages/ChiTietKhoaHoc';
import GiangVien from './pages/GiangVien';
import ChiTietGiangVien from './pages/ChiTietGiangVien';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<GioiThieu />} />
          <Route path="/khoa-hoc" element={<KhoaHoc />} />
          <Route path="/khoa-hoc/:id" element={<ChiTietKhoaHoc />} />
          <Route path="/giang-vien" element={<GiangVien />} />
          <Route path="/giang-vien/:id" element={<ChiTietGiangVien />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
