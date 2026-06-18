import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import GioiThieu from './pages/GioiThieu';
import KhoaHoc from './pages/KhoaHoc';
import ChiTietKhoaHoc from './pages/ChiTietKhoaHoc';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<GioiThieu />} />
          <Route path="/khoa-hoc" element={<KhoaHoc />} />
          <Route path="/khoa-hoc/:id" element={<ChiTietKhoaHoc />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

