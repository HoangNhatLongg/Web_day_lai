// ============================================================
// MOCK DATA - Trang Khóa Học
// Để đổi sang API: export const fetchCourses = () => fetch('/api/courses').then(r => r.json())
// ============================================================

export interface VehicleType {
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface CourseScheduleItem {
  phase: string;
  duration: string;
  content: string[];
}

export interface DocumentItem {
  name: string;
  note?: string;
}

export interface TuitionOption {
  label: string;
  price: string;
  note?: string;
}

export interface Course {
  id: string;           // slug: 'hang-b1', 'hang-b2', etc.
  badge: string;        // 'B1', 'B2', 'C', 'C1', 'D', 'D1', 'E', 'F'
  name: string;
  shortDesc: string;
  heroImage: string;
  bannerColor: string;  // tailwind gradient

  // Lý do nên chọn
  reasons: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; desc: string }[];
  };

  // Xe được lái
  vehicles: VehicleType[];

  // Quyền lợi
  benefits: { icon: string; title: string; desc: string }[];

  // Nội dung học
  curriculum: {
    theory: { total: string; items: string[] };
    practice: { total: string; items: string[] };
    schedule: CourseScheduleItem[];
  };

  // Hồ sơ đăng ký
  documents: DocumentItem[];

  // Học phí
  tuition: {
    basePrice: string;
    options: TuitionOption[];
    includes: string[];
    note: string;
  };

  // Tổng hợp
  duration: string;
  passRate: string;
  students: string;
  nextOpen: string;
}

export interface CoursesPageData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  categories: { label: string; value: string }[];
  courses: Course[];
}

// ============================================================
// DỮ LIỆU MOCK
// ============================================================
export const coursesPageData: CoursesPageData = {
  hero: {
    title: 'Các Khóa Học Lái Xe',
    subtitle: 'Chọn khóa học phù hợp với bạn',
    description: 'Đa dạng hạng bằng, đào tạo chuẩn Bộ GTVT – Cam kết chất lượng 100%',
  },
  categories: [
    { label: 'Tất cả', value: 'all' },
    { label: 'Hạng B', value: 'B' },
    { label: 'Hạng C', value: 'C' },
    { label: 'Hạng D', value: 'D' },
    { label: 'Hạng E & F', value: 'EF' },
  ],
  courses: [
    // ──────────────── HẠNG B1 ────────────────
    {
      id: 'hang-b1',
      badge: 'B1',
      name: 'Khóa học lái xe hạng B1',
      shortDesc: 'Dành cho xe số tự động dưới 9 chỗ – Lý tưởng cho người mới bắt đầu',
      heroImage: 'https://sathachlaixebinhthuan.com/uploads/news/images/702_cr.png',
      bannerColor: 'from-sky-600 to-blue-800',

      reasons: {
        title: 'Tại sao nên học hạng B1?',
        subtitle: 'Hạng B1 là điểm khởi đầu hoàn hảo cho người mới học lái xe',
        items: [
          { icon: 'FaCar', title: 'Xe số tự động', desc: 'Điều khiển dễ dàng, phù hợp với đô thị hiện đại – Không cần học sang số' },
          { icon: 'FaUserFriends', title: 'Dành cho mọi người', desc: 'Phù hợp cho cả nam và nữ, người lớn tuổi, không yêu cầu kinh nghiệm trước' },
          { icon: 'FaMoneyBillWave', title: 'Chi phí hợp lý', desc: 'Học phí thấp nhất trong các hạng bằng, thời gian đào tạo ngắn' },
          { icon: 'FaRoute', title: 'Sử dụng rộng rãi', desc: 'Lái được các xe phổ thông trong cuộc sống: xe gia đình, taxi công nghệ, giao hàng...' },
        ],
      },

      vehicles: [
        { name: 'Xe sedan số tự động', description: 'Toyota Vios, Honda City, Hyundai Accent... ≤ 9 chỗ', icon: 'FaCar', image: 'https://images.unsplash.com/photo-1469285994282-454cbe0f2e9d?q=80&w=400&fit=crop' },
        { name: 'Xe SUV số tự động', description: 'Ford EcoSport, Kia Seltos, Hyundai Creta... ≤ 9 chỗ', icon: 'FaTruck', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&fit=crop' },
        { name: 'Xe MPV số tự động', description: 'Mitsubishi Xpander, Toyota Innova... ≤ 9 chỗ', icon: 'FaBus', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400&fit=crop' },
      ],

      benefits: [
        { icon: 'FaGraduationCap', title: 'Đào tạo bài bản', desc: 'Chương trình chuẩn Bộ GTVT, giảng viên kinh nghiệm 10+ năm' },
        { icon: 'FaRedo', title: 'Học lại miễn phí', desc: 'Thi không đỗ được học lại hoàn toàn miễn phí đến khi đỗ' },
        { icon: 'FaHeadset', title: 'Hỗ trợ 24/7', desc: 'Giải đáp thắc mắc, hỗ trợ lịch học linh hoạt theo nhu cầu' },
        { icon: 'FaCertificate', title: 'Bằng chuẩn quốc gia', desc: 'Bằng lái do Sở GTVT cấp, có giá trị toàn quốc và quốc tế' },
        { icon: 'FaShieldAlt', title: 'Xe tập đời mới', desc: 'Xe tập lái đời mới, trang bị đầy đủ thiết bị an toàn' },
        { icon: 'FaPercent', title: 'Ưu đãi hấp dẫn', desc: 'Giảm 5% khi đăng ký nhóm từ 3 người, hỗ trợ trả góp 0%' },
      ],

      curriculum: {
        theory: {
          total: '136 giờ lý thuyết',
          items: [
            'Luật Giao thông Đường bộ (56 giờ)',
            'Kỹ thuật lái xe cơ bản (40 giờ)',
            'Phòng tránh tai nạn giao thông (20 giờ)',
            'Đạo đức người lái xe (12 giờ)',
            'Quy trình khởi hành và dừng đỗ (8 giờ)',
          ],
        },
        practice: {
          total: '420 km thực hành',
          items: [
            'Điều khiển xe trong sân (80 km) – Sa hình 9 bài thi',
            'Lái xe trên đường đô thị (200 km)',
            'Lái xe đường trường, đường cao tốc (100 km)',
            'Lái xe ban đêm (40 km)',
          ],
        },
        schedule: [
          { phase: 'Giai đoạn 1', duration: '1 tháng', content: ['Học lý thuyết Luật GTĐB', 'Ôn thi 600 câu lý thuyết', 'Thi sát hạch lý thuyết'] },
          { phase: 'Giai đoạn 2', duration: '2-2.5 tháng', content: ['Học lái xe trong sân sa hình', 'Thực hành 9 bài thi sát hạch', 'Học lái xe đường trường'] },
          { phase: 'Giai đoạn 3', duration: '0.5 tháng', content: ['Ôn tập tổng hợp', 'Thi sát hạch thực hành', 'Nhận bằng lái xe'] },
        ],
      },

      documents: [
        { name: 'CMND/CCCD hoặc Hộ chiếu còn hạn', note: 'Bản photo và bản gốc để đối chiếu' },
        { name: '4 ảnh thẻ 3×4 (nền trắng)', note: 'Chụp trong vòng 6 tháng gần đây' },
        { name: 'Giấy khám sức khỏe đủ điều kiện', note: 'Tại cơ sở y tế được Sở GTVT ủy quyền' },
        { name: 'Đơn đề nghị học lái xe (mẫu)', note: 'Nhận tại văn phòng trung tâm hoặc tải online' },
        { name: 'Lệ phí nộp hồ sơ', note: '200.000đ' },
      ],

      tuition: {
        basePrice: '12.000.000đ',
        options: [
          { label: 'Học phí trọn gói', price: '12.000.000đ', note: 'Bao gồm toàn bộ chi phí đào tạo và thi sát hạch' },
          { label: 'Trả góp 0% (6 tháng)', price: '2.000.000đ/tháng', note: 'Qua ngân hàng đối tác, không lãi suất' },
          { label: 'Nhóm 3 người trở lên', price: '11.400.000đ/người', note: 'Giảm 5% – Liên hệ để được hỗ trợ' },
        ],
        includes: ['Tài liệu học tập', 'Phí thi sát hạch lần đầu', 'Phí làm bằng', 'Bảo hiểm thân thể trong quá trình học'],
        note: 'Học phí chưa bao gồm phí thi lại (nếu có). Học viên được học lại miễn phí.',
      },

      duration: '3 – 3.5 tháng',
      passRate: '97%',
      students: '5.000+',
      nextOpen: '01/07/2026',
    },

    // ──────────────── HẠNG B2 ────────────────
    {
      id: 'hang-b2',
      badge: 'B2',
      name: 'Khóa học lái xe hạng B2',
      shortDesc: 'Dành cho xe số sàn và số tự động dưới 9 chỗ – Phổ biến nhất',
      heroImage: 'https://sathachlaixebinhthuan.com/uploads/news/images/702_cr.png',
      bannerColor: 'from-blue-600 to-indigo-800',

      reasons: {
        title: 'Tại sao nên học hạng B2?',
        subtitle: 'Hạng B2 là lựa chọn phổ biến nhất – Lái được cả xe số sàn lẫn số tự động',
        items: [
          { icon: 'FaCar', title: 'Lái cả 2 loại xe', desc: 'Vừa lái xe số sàn vừa lái xe số tự động – Linh hoạt hơn B1' },
          { icon: 'FaBriefcase', title: 'Thuận lợi công việc', desc: 'Nhiều nhà tuyển dụng yêu cầu bằng B2, mở ra nhiều cơ hội việc làm hơn' },
          { icon: 'FaRoad', title: 'Nâng cấp lên hạng C', desc: 'Có bằng B2 đủ 3 năm là đủ điều kiện để nâng cấp lên hạng C' },
          { icon: 'FaTrophy', title: 'Kỹ năng toàn diện', desc: 'Kỹ năng lái xe hoàn thiện hơn, an toàn và tự tin trong mọi tình huống' },
        ],
      },

      vehicles: [
        { name: 'Xe sedan số sàn & số tự động', description: 'Toyota Vios, Honda Civic, Mazda 3... ≤ 9 chỗ', icon: 'FaCar', image: 'https://images.unsplash.com/photo-1469285994282-454cbe0f2e9d?q=80&w=400&fit=crop' },
        { name: 'Xe SUV số sàn & số tự động', description: 'Toyota Fortuner, Ford Ranger, Mazda CX-5...', icon: 'FaTruck', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&fit=crop' },
        { name: 'Xe bán tải', description: 'Ford Ranger, Mitsubishi Triton, Isuzu D-Max...', icon: 'FaTruck', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&fit=crop' },
      ],

      benefits: [
        { icon: 'FaGraduationCap', title: 'Đào tạo bài bản', desc: 'Chương trình chuẩn Bộ GTVT, giảng viên kinh nghiệm 10+ năm' },
        { icon: 'FaRedo', title: 'Học lại miễn phí', desc: 'Thi không đỗ được học lại hoàn toàn miễn phí đến khi đỗ' },
        { icon: 'FaHeadset', title: 'Hỗ trợ 24/7', desc: 'Giải đáp thắc mắc, hỗ trợ lịch học linh hoạt theo nhu cầu' },
        { icon: 'FaCertificate', title: 'Bằng chuẩn quốc gia', desc: 'Bằng lái do Sở GTVT cấp, có giá trị toàn quốc' },
        { icon: 'FaShieldAlt', title: 'Xe tập đời mới', desc: 'Xe tập lái đời mới, trang bị đầy đủ thiết bị an toàn' },
        { icon: 'FaArrowUp', title: 'Dễ nâng hạng', desc: 'Nền tảng tốt để nâng cấp lên hạng C sau 3 năm' },
      ],

      curriculum: {
        theory: {
          total: '168 giờ lý thuyết',
          items: [
            'Luật Giao thông Đường bộ (56 giờ)',
            'Kỹ thuật lái xe số sàn và số tự động (56 giờ)',
            'Phòng tránh tai nạn giao thông (28 giờ)',
            'Đạo đức người lái xe (16 giờ)',
            'Kỹ thuật sang số, điều khiển ly hợp (12 giờ)',
          ],
        },
        practice: {
          total: '552 km thực hành',
          items: [
            'Điều khiển xe trong sân (120 km) – 11 bài thi sa hình',
            'Lái xe đô thị (250 km)',
            'Lái xe đường trường (130 km)',
            'Lái xe ban đêm (52 km)',
          ],
        },
        schedule: [
          { phase: 'Giai đoạn 1', duration: '1 tháng', content: ['Học lý thuyết Luật GTĐB', 'Ôn thi 600 câu lý thuyết', 'Thi sát hạch lý thuyết'] },
          { phase: 'Giai đoạn 2', duration: '2.5-3 tháng', content: ['Làm quen xe số sàn', 'Học lái xe trong sân sa hình', 'Thực hành 11 bài thi', 'Học lái xe đường trường'] },
          { phase: 'Giai đoạn 3', duration: '0.5 tháng', content: ['Ôn tập tổng hợp', 'Thi sát hạch thực hành', 'Nhận bằng lái xe'] },
        ],
      },

      documents: [
        { name: 'CMND/CCCD hoặc Hộ chiếu còn hạn', note: 'Bản photo và bản gốc để đối chiếu' },
        { name: '4 ảnh thẻ 3×4 (nền trắng)', note: 'Chụp trong vòng 6 tháng gần đây' },
        { name: 'Giấy khám sức khỏe đủ điều kiện', note: 'Tại cơ sở y tế được Sở GTVT ủy quyền' },
        { name: 'Đơn đề nghị học lái xe (mẫu)', note: 'Nhận tại văn phòng hoặc tải online' },
        { name: 'Lệ phí nộp hồ sơ', note: '200.000đ' },
      ],

      tuition: {
        basePrice: '13.500.000đ',
        options: [
          { label: 'Học phí trọn gói', price: '13.500.000đ', note: 'Bao gồm toàn bộ chi phí đào tạo và thi sát hạch' },
          { label: 'Trả góp 0% (6 tháng)', price: '2.250.000đ/tháng', note: 'Qua ngân hàng đối tác, không lãi suất' },
          { label: 'Nhóm 3 người trở lên', price: '12.825.000đ/người', note: 'Giảm 5% – Liên hệ để được hỗ trợ' },
        ],
        includes: ['Tài liệu học tập', 'Phí thi sát hạch lần đầu', 'Phí làm bằng', 'Bảo hiểm thân thể trong quá trình học'],
        note: 'Học phí chưa bao gồm phí thi lại (nếu có). Học viên được học lại miễn phí.',
      },

      duration: '3.5 – 4 tháng',
      passRate: '98%',
      students: '8.000+',
      nextOpen: '01/07/2026',
    },

    {
      id: 'hang-c1',
      badge: 'C1',
      name: 'Khóa học lái xe hạng C1',
      shortDesc: 'Dành cho xe tải có tổng trọng tải trên 3.5 tấn đến 7.5 tấn – Cơ hội việc làm cao',
      heroImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&fit=crop',
      bannerColor: 'from-orange-600 to-red-800',

      reasons: {
        title: 'Tại sao nên học hạng C?',
        subtitle: 'Hạng C mở ra cơ hội việc làm rộng lớn trong lĩnh vực vận tải hàng hóa',
        items: [
          { icon: 'FaTruck', title: 'Lái xe tải hạng nặng', desc: 'Điều khiển xe tải >3.5 tấn, xe đông lạnh, xe chở hàng – Lĩnh vực logistic đang bùng nổ' },
          { icon: 'FaBriefcase', title: 'Nhu cầu tuyển dụng cao', desc: 'Thị trường vận tải hàng hóa thiếu hụt lái xe, mức lương hấp dẫn 15-25 triệu/tháng' },
          { icon: 'FaArrowUp', title: 'Nâng cấp lên hạng D', desc: 'Từ hạng C đủ 3 năm có thể nâng lên hạng D (xe khách)' },
          { icon: 'FaMoneyBillWave', title: 'Thu nhập ổn định', desc: 'Lái xe hàng hóa có thu nhập ổn định, có thể nhận hợp đồng freelance' },
        ],
      },

      vehicles: [
        { name: 'Xe tải nhẹ 3.5-8 tấn', description: 'Isuzu NPR, Hyundai Porter, Kia K250... trọng tải 3.5-8 tấn', icon: 'FaTruck', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=400&fit=crop' },
        { name: 'Xe tải nặng 8-15 tấn', description: 'Hyundai HD170, Dongfeng, Howo... trọng tải 8-15 tấn', icon: 'FaTruck', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&fit=crop' },
        { name: 'Xe đông lạnh, xe chở hàng đặc biệt', description: 'Xe đông lạnh, xe chở gia súc, xe bồn... có trọng tải phù hợp', icon: 'FaTruck', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&fit=crop' },
      ],

      benefits: [
        { icon: 'FaGraduationCap', title: 'Huấn luyện chuyên sâu', desc: 'Kỹ thuật lái xe tải, xử lý tình huống với xe trọng tải lớn' },
        { icon: 'FaRedo', title: 'Học lại miễn phí', desc: 'Thi không đỗ được học lại hoàn toàn miễn phí đến khi đỗ' },
        { icon: 'FaTools', title: 'Kiến thức cơ khí', desc: 'Được hướng dẫn kiểm tra kỹ thuật xe trước khi xuất bến' },
        { icon: 'FaCertificate', title: 'Bằng hạng C toàn quốc', desc: 'Được Sở GTVT cấp, lái được toàn bộ xe tải trong phạm vi quy định' },
        { icon: 'FaShieldAlt', title: 'An toàn tuyệt đối', desc: 'Đào tạo kỹ năng an toàn, phòng ngừa tai nạn nghề nghiệp' },
        { icon: 'FaNetworkWired', title: 'Kết nối việc làm', desc: 'Hỗ trợ giới thiệu việc làm qua mạng lưới doanh nghiệp đối tác' },
      ],

      curriculum: {
        theory: {
          total: '168 giờ lý thuyết',
          items: [
            'Luật Giao thông Đường bộ và quy định xe tải (60 giờ)',
            'Kỹ thuật lái xe hạng nặng (50 giờ)',
            'Kiểm tra kỹ thuật xe trước chuyến đi (20 giờ)',
            'Phòng tránh tai nạn, xử lý sự cố (28 giờ)',
            'Vận chuyển hàng hóa an toàn (10 giờ)',
          ],
        },
        practice: {
          total: '820 km thực hành',
          items: [
            'Điều khiển xe trong sân tập (160 km)',
            'Lái xe tải đô thị (300 km)',
            'Lái xe đường dài, cao tốc (280 km)',
            'Lái xe ban đêm, lái xe điều kiện thời tiết xấu (80 km)',
          ],
        },
        schedule: [
          { phase: 'Giai đoạn 1', duration: '1.5 tháng', content: ['Học lý thuyết Luật GTĐB', 'Kiến thức xe tải, cơ khí cơ bản', 'Thi sát hạch lý thuyết'] },
          { phase: 'Giai đoạn 2', duration: '3 tháng', content: ['Làm quen với xe tải hạng nặng', 'Lái xe trong sân (bài thi sa hình)', 'Lái xe đường trường, đường dài'] },
          { phase: 'Giai đoạn 3', duration: '0.5 tháng', content: ['Ôn tập toàn diện', 'Thi sát hạch thực hành', 'Nhận bằng lái hạng C'] },
        ],
      },

      documents: [
        { name: 'CMND/CCCD hoặc Hộ chiếu còn hạn', note: 'Bản photo và bản gốc để đối chiếu' },
        { name: 'Bằng lái xe hạng B2 (bản photo)', note: 'Cần đủ 3 năm tính từ ngày cấp bằng B2' },
        { name: '4 ảnh thẻ 3×4 (nền trắng)', note: 'Chụp trong vòng 6 tháng gần đây' },
        { name: 'Giấy khám sức khỏe đủ điều kiện', note: 'Tại cơ sở y tế được Sở GTVT ủy quyền' },
        { name: 'Đơn đề nghị học nâng hạng', note: 'Nhận tại văn phòng hoặc tải online' },
        { name: 'Lệ phí nộp hồ sơ', note: '200.000đ' },
      ],

      tuition: {
        basePrice: '15.000.000đ',
        options: [
          { label: 'Học phí trọn gói', price: '15.000.000đ', note: 'Bao gồm toàn bộ chi phí đào tạo và thi sát hạch' },
          { label: 'Trả góp 0% (6 tháng)', price: '2.500.000đ/tháng', note: 'Qua ngân hàng đối tác, không lãi suất' },
          { label: 'Nhóm 3 người trở lên', price: '14.250.000đ/người', note: 'Giảm 5% – Liên hệ để được hỗ trợ' },
        ],
        includes: ['Tài liệu học tập chuyên ngành xe tải', 'Phí thi sát hạch lần đầu', 'Phí làm bằng', 'Bảo hiểm thân thể trong quá trình học'],
        note: 'Yêu cầu đã có bằng B2 tối thiểu 3 năm. Học phí chưa bao gồm phí thi lại nếu có.',
      },

      duration: '4 – 5 tháng',
      passRate: '96%',
      students: '3.500+',
      nextOpen: '15/07/2026',
    },

    // ──────────────── HẠNG C ────────────────
    {
      id: 'hang-c',
      badge: 'C',
      name: 'Khóa học lái xe hạng C',
      shortDesc: 'Dành cho xe tải có tổng trọng tải trên 3.5 tấn – Cơ hội việc làm cao',
      heroImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&fit=crop',
      bannerColor: 'from-orange-600 to-red-800',

      reasons: {
        title: 'Tại sao nên học hạng C?',
        subtitle: 'Hạng C mở ra cơ hội việc làm rộng lớn trong lĩnh vực vận tải hàng hóa',
        items: [
          { icon: 'FaTruck', title: 'Lái xe tải hạng nặng', desc: 'Điều khiển xe tải >3.5 tấn, xe đông lạnh, xe chở hàng – Lĩnh vực logistic đang bùng nổ' },
          { icon: 'FaBriefcase', title: 'Nhu cầu tuyển dụng cao', desc: 'Thị trường vận tải hàng hóa thiếu hụt lái xe, mức lương hấp dẫn 15-25 triệu/tháng' },
          { icon: 'FaArrowUp', title: 'Nâng cấp lên hạng D', desc: 'Từ hạng C đủ 3 năm có thể nâng lên hạng D (xe khách)' },
          { icon: 'FaMoneyBillWave', title: 'Thu nhập ổn định', desc: 'Lái xe hàng hóa có thu nhập ổn định, có thể nhận hợp đồng freelance' },
        ],
      },

      vehicles: [
        { name: 'Xe tải nhẹ 3.5-8 tấn', description: 'Isuzu NPR, Hyundai Porter, Kia K250... trọng tải 3.5-8 tấn', icon: 'FaTruck', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=400&fit=crop' },
        { name: 'Xe tải nặng 8-15 tấn', description: 'Hyundai HD170, Dongfeng, Howo... trọng tải 8-15 tấn', icon: 'FaTruck', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&fit=crop' },
        { name: 'Xe đông lạnh, xe chở hàng đặc biệt', description: 'Xe đông lạnh, xe chở gia súc, xe bồn... có trọng tải phù hợp', icon: 'FaTruck', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&fit=crop' },
      ],

      benefits: [
        { icon: 'FaGraduationCap', title: 'Huấn luyện chuyên sâu', desc: 'Kỹ thuật lái xe tải, xử lý tình huống với xe trọng tải lớn' },
        { icon: 'FaRedo', title: 'Học lại miễn phí', desc: 'Thi không đỗ được học lại hoàn toàn miễn phí đến khi đỗ' },
        { icon: 'FaTools', title: 'Kiến thức cơ khí', desc: 'Được hướng dẫn kiểm tra kỹ thuật xe trước khi xuất bến' },
        { icon: 'FaCertificate', title: 'Bằng hạng C toàn quốc', desc: 'Được Sở GTVT cấp, lái được toàn bộ xe tải trong phạm vi quy định' },
        { icon: 'FaShieldAlt', title: 'An toàn tuyệt đối', desc: 'Đào tạo kỹ năng an toàn, phòng ngừa tai nạn nghề nghiệp' },
        { icon: 'FaNetworkWired', title: 'Kết nối việc làm', desc: 'Hỗ trợ giới thiệu việc làm qua mạng lưới doanh nghiệp đối tác' },
      ],

      curriculum: {
        theory: {
          total: '168 giờ lý thuyết',
          items: [
            'Luật Giao thông Đường bộ và quy định xe tải (60 giờ)',
            'Kỹ thuật lái xe hạng nặng (50 giờ)',
            'Kiểm tra kỹ thuật xe trước chuyến đi (20 giờ)',
            'Phòng tránh tai nạn, xử lý sự cố (28 giờ)',
            'Vận chuyển hàng hóa an toàn (10 giờ)',
          ],
        },
        practice: {
          total: '820 km thực hành',
          items: [
            'Điều khiển xe trong sân tập (160 km)',
            'Lái xe tải đô thị (300 km)',
            'Lái xe đường dài, cao tốc (280 km)',
            'Lái xe ban đêm, lái xe điều kiện thời tiết xấu (80 km)',
          ],
        },
        schedule: [
          { phase: 'Giai đoạn 1', duration: '1.5 tháng', content: ['Học lý thuyết Luật GTĐB', 'Kiến thức xe tải, cơ khí cơ bản', 'Thi sát hạch lý thuyết'] },
          { phase: 'Giai đoạn 2', duration: '3 tháng', content: ['Làm quen với xe tải hạng nặng', 'Lái xe trong sân (bài thi sa hình)', 'Lái xe đường trường, đường dài'] },
          { phase: 'Giai đoạn 3', duration: '0.5 tháng', content: ['Ôn tập toàn diện', 'Thi sát hạch thực hành', 'Nhận bằng lái hạng C'] },
        ],
      },

      documents: [
        { name: 'CMND/CCCD hoặc Hộ chiếu còn hạn', note: 'Bản photo và bản gốc để đối chiếu' },
        { name: 'Bằng lái xe hạng B2 (bản photo)', note: 'Cần đủ 3 năm tính từ ngày cấp bằng B2' },
        { name: '4 ảnh thẻ 3×4 (nền trắng)', note: 'Chụp trong vòng 6 tháng gần đây' },
        { name: 'Giấy khám sức khỏe đủ điều kiện', note: 'Tại cơ sở y tế được Sở GTVT ủy quyền' },
        { name: 'Đơn đề nghị học nâng hạng', note: 'Nhận tại văn phòng hoặc tải online' },
        { name: 'Lệ phí nộp hồ sơ', note: '200.000đ' },
      ],

      tuition: {
        basePrice: '15.000.000đ',
        options: [
          { label: 'Học phí trọn gói', price: '15.000.000đ', note: 'Bao gồm toàn bộ chi phí đào tạo và thi sát hạch' },
          { label: 'Trả góp 0% (6 tháng)', price: '2.500.000đ/tháng', note: 'Qua ngân hàng đối tác, không lãi suất' },
          { label: 'Nhóm 3 người trở lên', price: '14.250.000đ/người', note: 'Giảm 5% – Liên hệ để được hỗ trợ' },
        ],
        includes: ['Tài liệu học tập chuyên ngành xe tải', 'Phí thi sát hạch lần đầu', 'Phí làm bằng', 'Bảo hiểm thân thể trong quá trình học'],
        note: 'Yêu cầu đã có bằng B2 tối thiểu 3 năm. Học phí chưa bao gồm phí thi lại nếu có.',
      },

      duration: '4 – 5 tháng',
      passRate: '96%',
      students: '3.500+',
      nextOpen: '15/07/2026',
    },

    // ──────────────── HẠNG D ────────────────
    {
      id: 'hang-d',
      badge: 'D',
      name: 'Khóa học lái xe hạng D',
      shortDesc: 'Dành cho xe chở người từ 10-30 chỗ ngồi – Nghề nghiệp chuyên nghiệp',
      heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&fit=crop',
      bannerColor: 'from-purple-600 to-violet-800',

      reasons: {
        title: 'Tại sao nên học hạng D?',
        subtitle: 'Hạng D là bằng lái dành cho tài xế xe khách, xe du lịch – Ngành vận tải hành khách',
        items: [
          { icon: 'FaBus', title: 'Lái xe khách, xe du lịch', desc: 'Điều khiển xe từ 10-30 chỗ: xe buýt nhỏ, xe du lịch, xe limousine...' },
          { icon: 'FaBriefcase', title: 'Nghề nghiệp bền vững', desc: 'Nhu cầu lái xe khách, xe du lịch luôn cao – Đặc biệt trong ngành du lịch' },
          { icon: 'FaGlobe', title: 'Cơ hội toàn quốc', desc: 'Làm việc cho hãng xe buýt, công ty du lịch, resort khắp cả nước' },
          { icon: 'FaArrowUp', title: 'Nâng cấp lên hạng E', desc: 'Từ hạng D đủ 3 năm có thể nâng lên hạng E (xe >30 chỗ)' },
        ],
      },

      vehicles: [
        { name: 'Xe 16-20 chỗ (Limousine)', description: 'Ford Transit, Solati, Dcar... xe du lịch cao cấp', icon: 'FaBus', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400&fit=crop' },
        { name: 'Xe khách 24-30 chỗ', description: 'Hyundai County, Samco, Thaco... xe khách tuyến nội tỉnh', icon: 'FaBus', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=400&fit=crop' },
        { name: 'Xe buýt nội đô', description: 'Các loại xe buýt 20-30 chỗ phục vụ giao thông công cộng đô thị', icon: 'FaBus', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400&fit=crop' },
      ],

      benefits: [
        { icon: 'FaGraduationCap', title: 'Đào tạo chuyên nghiệp', desc: 'Kỹ năng phục vụ hành khách, xử lý tình huống trên xe khách' },
        { icon: 'FaRedo', title: 'Học lại miễn phí', desc: 'Thi không đỗ được học lại hoàn toàn miễn phí đến khi đỗ' },
        { icon: 'FaFirstAid', title: 'Kỹ năng sơ cứu', desc: 'Được đào tạo kỹ năng sơ cứu cơ bản cho hành khách khi sự cố' },
        { icon: 'FaCertificate', title: 'Bằng hạng D toàn quốc', desc: 'Bằng lái chính quy, làm việc cho mọi hãng vận tải trong nước' },
        { icon: 'FaShieldAlt', title: 'An toàn hành khách', desc: 'Đào tạo đặc biệt về an toàn, bảo vệ hành khách trong mọi tình huống' },
        { icon: 'FaNetworkWired', title: 'Kết nối việc làm', desc: 'Hỗ trợ tìm việc tại các hãng xe, công ty du lịch đối tác' },
      ],

      curriculum: {
        theory: {
          total: '200 giờ lý thuyết',
          items: [
            'Luật Giao thông và quy định xe khách (70 giờ)',
            'Kỹ thuật lái xe khách, xe du lịch (60 giờ)',
            'Phục vụ và ứng xử với hành khách (30 giờ)',
            'An toàn, phòng cháy chữa cháy (25 giờ)',
            'Sơ cứu y tế cơ bản (15 giờ)',
          ],
        },
        practice: {
          total: '1.000 km thực hành',
          items: [
            'Lái xe trong sân tập (180 km)',
            'Lái xe khách đô thị (350 km)',
            'Lái xe đường dài, đèo núi (380 km)',
            'Lái xe ban đêm (90 km)',
          ],
        },
        schedule: [
          { phase: 'Giai đoạn 1', duration: '1.5 tháng', content: ['Học lý thuyết chuyên sâu xe khách', 'Kỹ năng phục vụ hành khách', 'Thi sát hạch lý thuyết'] },
          { phase: 'Giai đoạn 2', duration: '3.5 tháng', content: ['Lái xe khách trong sân tập', 'Lái xe đường dài, qua đèo', 'Thực hành xử lý tình huống sự cố'] },
          { phase: 'Giai đoạn 3', duration: '0.5 tháng', content: ['Ôn tập toàn diện', 'Thi sát hạch thực hành', 'Nhận bằng lái hạng D'] },
        ],
      },

      documents: [
        { name: 'CMND/CCCD hoặc Hộ chiếu còn hạn', note: 'Bản photo và bản gốc để đối chiếu' },
        { name: 'Bằng lái xe hạng C (bản photo)', note: 'Cần đủ 3 năm tính từ ngày cấp bằng C' },
        { name: '4 ảnh thẻ 3×4 (nền trắng)', note: 'Chụp trong vòng 6 tháng gần đây' },
        { name: 'Giấy khám sức khỏe đủ điều kiện', note: 'Tại cơ sở y tế được Sở GTVT ủy quyền, kiểm tra thị lực kỹ hơn' },
        { name: 'Đơn đề nghị học nâng hạng', note: 'Nhận tại văn phòng hoặc tải online' },
        { name: 'Lệ phí nộp hồ sơ', note: '200.000đ' },
      ],

      tuition: {
        basePrice: '16.000.000đ',
        options: [
          { label: 'Học phí trọn gói', price: '16.000.000đ', note: 'Bao gồm toàn bộ chi phí đào tạo và thi sát hạch' },
          { label: 'Trả góp 0% (8 tháng)', price: '2.000.000đ/tháng', note: 'Qua ngân hàng đối tác, không lãi suất' },
          { label: 'Nhóm 3 người trở lên', price: '15.200.000đ/người', note: 'Giảm 5% – Liên hệ để được hỗ trợ' },
        ],
        includes: ['Tài liệu học tập chuyên ngành xe khách', 'Phí thi sát hạch lần đầu', 'Phí làm bằng', 'Bảo hiểm thân thể trong quá trình học', 'Khóa học kỹ năng mềm phục vụ hành khách'],
        note: 'Yêu cầu đã có bằng C tối thiểu 3 năm. Học phí chưa bao gồm phí thi lại nếu có.',
      },

      duration: '4.5 – 5.5 tháng',
      passRate: '95%',
      students: '2.000+',
      nextOpen: '01/08/2026',
    },
  ],
};
