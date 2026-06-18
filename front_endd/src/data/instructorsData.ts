// ============================================================
// MOCK DATA - Giảng viên
// Để đổi sang API: export const fetchInstructors = () => fetch('/api/instructors').then(r => r.json())
// ============================================================

export interface Instructor {
  id: string;
  name: string;
  title: string;          // "Giáo viên hạng B2 - C"
  experience: string;     // "15 năm kinh nghiệm"
  students: string;       // "Hơn 12.000 học viên"
  rating: number;
  image: string;
  bio: string;
  specialties: string[];
  certifications: string[];
  schedule: string;       // lịch dạy
  phone?: string;
  email?: string;
  courseIds: string[];     // link to coursesData
}

export interface InstructorsPageData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  instructors: Instructor[];
}

export const instructorsPageData: InstructorsPageData = {
  hero: {
    title: 'Đội Ngũ Giảng Viên',
    subtitle: 'Tận tâm – Kinh nghiệm – Chuyên nghiệp',
    description: 'Hơn 50 giảng viên giàu kinh nghiệm, được đào tạo bài bản, tận tâm đồng hành cùng học viên trên mỗi hành trình.',
  },
  instructors: [
    {
      id: 'nguyen-van-nam',
      name: 'Thầy Nguyễn Văn Nam',
      title: 'Giáo viên hạng B2 - C',
      experience: '15 năm kinh nghiệm',
      students: 'Hơn 12.000 học viên đã đào tạo',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
      bio: 'Thầy Nam là một trong những giảng viên lái xe kỳ cựu nhất tại Trung tâm GDNN Phú Giáo. Với 15 năm kinh nghiệm giảng dạy, thầy đã đào tạo thành công hơn 12.000 học viên lái xe an toàn. Phong cách giảng dạy kiên nhẫn, tận tình, luôn đặt an toàn của học viên lên hàng đầu.',
      specialties: [
        'Đào tạo lái xe hạng B2 và C',
        'Kỹ thuật lái xe phòng thủ (Defensive Driving)',
        'Xử lý tình huống giao thông nguy hiểm',
        'Huấn luyện lái xe đường trường và đường cao tốc',
      ],
      certifications: [
        'Chứng chỉ Giáo viên dạy lái xe hạng B2 & C – Bộ GTVT',
        'Giảng viên An toàn Giao thông – Cục Đường bộ Việt Nam',
        'Chứng chỉ Kỹ thuật Lái xe Phòng thủ – Hiệp hội ATGT Quốc tế',
      ],
      schedule: 'Thứ 2 – Thứ 7 | Sáng: 7:30 – 11:30 | Chiều: 13:30 – 17:00',
      phone: '0901.234.567',
      email: 'nam.nguyen@gdnnphugiap.vn',
      courseIds: ['hang-b-so-san', 'hang-c'],
    },
    {
      id: 'tran-thi-huong',
      name: 'Cô Trần Thị Hương',
      title: 'Giáo viên hạng B1 - B2',
      experience: '8 năm kinh nghiệm',
      students: 'Hơn 8.000 học viên đã đào tạo',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      bio: 'Cô Hương là giáo viên nữ ưu tú nhất của Trung tâm, đặc biệt được các học viên nữ yêu mến và tin tưởng. Với phong cách nhẹ nhàng, kiên nhẫn, cô luôn giúp học viên vượt qua nỗi sợ ban đầu khi ngồi sau vô lăng.',
      specialties: [
        'Đào tạo lái xe hạng B1 và B2',
        'Chuyên gia dạy lái cho học viên nữ',
        'Kỹ thuật lái xe trong đô thị',
        'Tâm lý học lái xe – Giảm stress khi lái',
      ],
      certifications: [
        'Chứng chỉ Giáo viên dạy lái xe hạng B1 & B2 – Bộ GTVT',
        'Giảng viên xuất sắc năm 2022 – Sở GTVT Bình Dương',
        'Chứng chỉ Tâm lý Giao thông – ĐH GTVT TP.HCM',
      ],
      schedule: 'Thứ 2 – Thứ 6 | Sáng: 8:00 – 12:00 | Chiều: 14:00 – 17:30',
      phone: '0902.345.678',
      email: 'huong.tran@gdnnphugiap.vn',
      courseIds: ['hang-b-tu-dong', 'hang-b-so-san'],
    },
    {
      id: 'le-hoang-phuc',
      name: 'Thầy Lê Hoàng Phúc',
      title: 'Giáo viên hạng C - D',
      experience: '12 năm kinh nghiệm',
      students: 'Hơn 10.000 học viên đã đào tạo',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
      bio: 'Thầy Phúc là chuyên gia hàng đầu trong đào tạo lái xe hạng nặng (hạng C, D). Trước khi trở thành giảng viên, thầy đã có 8 năm kinh nghiệm lái xe tải đường dài và xe khách. Thầy mang đến cho học viên những bài học thực tế và kỹ năng xử lý tình huống từ thực tiễn.',
      specialties: [
        'Đào tạo lái xe hạng C và D',
        'Kỹ thuật lái xe tải hạng nặng',
        'Lái xe khách đường dài an toàn',
        'Kiểm tra kỹ thuật xe trước hành trình',
        'Vận chuyển hàng hóa đặc biệt',
      ],
      certifications: [
        'Chứng chỉ Giáo viên dạy lái xe hạng C & D – Bộ GTVT',
        'Bằng lái xe hạng E – 8 năm kinh nghiệm thực tế',
        'Chứng chỉ An toàn Vận tải Hàng hóa – Cục Đường bộ VN',
      ],
      schedule: 'Thứ 2 – Thứ 7 | Sáng: 6:00 – 11:00 | Chiều: 14:00 – 18:00',
      phone: '0903.456.789',
      email: 'phuc.le@gdnnphugiap.vn',
      courseIds: ['hang-c', 'hang-d'],
    },
    {
      id: 'pham-minh-tuan',
      name: 'Thầy Phạm Minh Tuấn',
      title: 'Giáo viên hạng B2 - C',
      experience: '18 năm kinh nghiệm',
      students: 'Hơn 9.000 học viên đã đào tạo',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
      bio: 'Thầy Tuấn với 18 năm kinh nghiệm là giảng viên thâm niên nhất của Trung tâm. Thầy nổi tiếng với phương pháp giảng dạy vừa nghiêm khắc vừa vui vẻ, giúp học viên nhanh chóng nắm vững kỹ thuật lái xe. Tỷ lệ học viên thi đỗ ngay lần đầu của thầy luôn dẫn đầu Trung tâm.',
      specialties: [
        'Đào tạo lái xe hạng B2 và C',
        'Kỹ thuật sa hình chuẩn – Thi đỗ ngay lần đầu',
        'Lái xe đường đèo núi',
        'Kỹ năng lái xe ban đêm',
      ],
      certifications: [
        'Chứng chỉ Giáo viên dạy lái xe hạng B2 & C – Bộ GTVT',
        'Giảng viên dạy lái xe xuất sắc nhất tỉnh Bình Dương 2021',
        'Chứng chỉ Huấn luyện Lái xe Đường núi – Cục Đường bộ VN',
      ],
      schedule: 'Thứ 2 – Thứ 7 | Cả ngày: 6:30 – 18:00',
      phone: '0904.567.890',
      email: 'tuan.pham@gdnnphugiap.vn',
      courseIds: ['hang-b-so-san', 'hang-c'],
    },
    {
      id: 'vo-thanh-dat',
      name: 'Thầy Võ Thanh Đạt',
      title: 'Giáo viên hạng B1 - B2',
      experience: '6 năm kinh nghiệm',
      students: 'Hơn 4.000 học viên đã đào tạo',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
      bio: 'Thầy Đạt là giảng viên trẻ, năng động và am hiểu công nghệ. Thầy ứng dụng công nghệ mô phỏng VR vào giảng dạy, giúp học viên trải nghiệm các tình huống giao thông thực tế trước khi ra đường. Đặc biệt phù hợp với học viên trẻ, gen Z.',
      specialties: [
        'Đào tạo lái xe hạng B1 và B2',
        'Ứng dụng cabin mô phỏng VR trong đào tạo',
        'Giảng dạy lý thuyết online',
        'Kỹ thuật đỗ xe song song & vuông góc',
      ],
      certifications: [
        'Chứng chỉ Giáo viên dạy lái xe hạng B1 & B2 – Bộ GTVT',
        'Chứng chỉ Đào tạo Mô phỏng Lái xe – ĐH Bách Khoa TP.HCM',
      ],
      schedule: 'Thứ 2 – Thứ 6 | Sáng: 7:00 – 11:30 | Chiều: 13:00 – 17:00',
      phone: '0905.678.901',
      email: 'dat.vo@gdnnphugiap.vn',
      courseIds: ['hang-b-tu-dong', 'hang-b-so-san'],
    },
    {
      id: 'nguyen-thi-mai',
      name: 'Cô Nguyễn Thị Mai',
      title: 'Giáo viên hạng D',
      experience: '10 năm kinh nghiệm',
      students: 'Hơn 5.000 học viên đã đào tạo',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
      bio: 'Cô Mai là một trong số ít giảng viên nữ chuyên đào tạo lái xe hạng D (xe khách) tại Việt Nam. Với 10 năm kinh nghiệm, cô không chỉ dạy kỹ thuật lái mà còn đào tạo kỹ năng phục vụ hành khách chuyên nghiệp.',
      specialties: [
        'Đào tạo lái xe hạng D',
        'Kỹ năng phục vụ hành khách',
        'An toàn vận tải hành khách',
        'Sơ cứu y tế cơ bản trên xe',
      ],
      certifications: [
        'Chứng chỉ Giáo viên dạy lái xe hạng D – Bộ GTVT',
        'Chứng chỉ Sơ cứu Y tế – Hội Chữ thập đỏ Việt Nam',
        'Giảng viên xuất sắc 2023 – Sở GTVT Bình Dương',
      ],
      schedule: 'Thứ 2 – Thứ 7 | Sáng: 7:00 – 11:30 | Chiều: 13:30 – 17:30',
      phone: '0906.789.012',
      email: 'mai.nguyen@gdnnphugiap.vn',
      courseIds: ['hang-d'],
    },
  ],
};
