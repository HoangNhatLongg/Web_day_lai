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
  id: string;           // slug: 'hang-a1', 'hang-b-tu-dong', etc.
  badge: string;        // 'A1', 'A', 'B (TĐ)', 'B (SS)', 'C1', 'C', 'D'
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
    { label: 'Xe máy (A, A1)', value: 'moto' },
    { label: 'Hạng B (Ô tô)', value: 'B' },
    { label: 'Hạng C (Xe tải)', value: 'C' },
    { label: 'Hạng D (Xe khách)', value: 'D' },
  ],
  courses: [
    // ──────────────── HẠNG A1 ────────────────
    {
      id: 'hang-a1',
      badge: 'A1',
      name: 'Khóa học lái xe hạng A1',
      shortDesc: 'Xe mô tô hai bánh dung tích dưới 125cm³ hoặc công suất điện ≤ 11kW',
      heroImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&fit=crop',
      bannerColor: '',

      reasons: {
        title: 'Tại sau nên học bằng A1?',
        subtitle: 'Bằng lái xe máy phổ thông nhất, bắt buộc đối với tất cả người điều khiển xe máy trên 50cc',
        items: [
          { icon: 'FaRoad', title: 'Sử dụng trọn đời', desc: 'Bằng lái xe hạng A1 có giá trị vô thời hạn, không cần phải thi lại hay gia hạn' },
          { icon: 'FaShieldAlt', title: 'An toàn & Đúng luật', desc: 'Giúp bạn nắm chắc luật giao thông đường bộ, lái xe tự tin và an toàn hơn' },
          { icon: 'FaTrophy', title: 'Thi dễ dàng', desc: 'Quy trình thi đơn giản với 200 câu lý thuyết và phần thi sa hình vòng số 8 quen thuộc' },
          { icon: 'FaBriefcase', title: 'Cần thiết hàng ngày', desc: 'Giúp bạn di chuyển hợp pháp đi làm, đi học, tránh các khoản phạt hành chính' },
        ],
      },

      vehicles: [
        { name: 'Xe máy dưới 125cc', description: 'Honda Vision, Wave Alpha, Yamaha Sirius... dung tích xi-lanh < 125cc', icon: 'FaMotorcycle', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=400&fit=crop' },
        { name: 'Xe máy điện', description: 'VinFast Feliz, Evo200... công suất động cơ điện ≤ 11kW', icon: 'FaMotorcycle', image: 'https://images.unsplash.com/photo-1620421680010-0766ff230392?q=80&w=400&fit=crop' },
        { name: 'Xe mô tô ba bánh', description: 'Xe mô tô ba bánh dùng riêng cho người khuyết tật', icon: 'FaCar', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=400&fit=crop' },
      ],

      benefits: [
        { icon: 'FaGraduationCap', title: 'Mẹo thi đỗ cao', desc: 'Hướng dẫn mẹo nhớ nhanh 200 câu lý thuyết và thi thực hành vòng số 8 đạt tỷ lệ đỗ 99%' },
        { icon: 'FaRedo', title: 'Học lại miễn phí', desc: 'Học viên chưa đạt được sắp xếp thi lại nhanh chóng và hỗ trợ ôn tập miễn phí' },
        { icon: 'FaClock', title: 'Lịch học linh động', desc: 'Lớp học lý thuyết và tập xe thực hành diễn ra cả ngày thường và cuối tuần' },
        { icon: 'FaCertificate', title: 'Bằng chuẩn Sở GTVT', desc: 'Phôi bằng do Sở Giao thông Vận tải cấp, tích hợp trên ứng dụng VNeID' },
        { icon: 'FaShieldAlt', title: 'Sân tập chất lượng', desc: 'Sân tập rộng rãi, sơn vẽ đúng chuẩn sa hình sát hạch thực tế' },
        { icon: 'FaHeadset', title: 'Hỗ trợ trọn gói', desc: 'Thu hồ sơ tận nơi, chụp ảnh thẻ, khám sức khỏe tại trung tâm' },
      ],

      curriculum: {
        theory: {
          total: '8 giờ lý thuyết',
          items: [
            'Luật giao thông đường bộ mới nhất',
            'Hệ thống biển báo, vạch kẻ đường',
            'Kỹ thuật giải sa hình nhanh',
            'Quy tắc phòng tránh tai nạn khi đi xe máy',
          ],
        },
        practice: {
          total: '4 giờ thực hành',
          items: [
            'Luyện đi vòng số 8 chuẩn sát hạch',
            'Đi đường thẳng cản tầm nhìn',
            'Đi đường quanh co ziczac',
            'Đi đường mấp mô tránh chướng ngại vật',
          ],
        },
        schedule: [
          { phase: 'Giai đoạn 1', duration: '1-2 tuần', content: ['Nộp hồ sơ trực tuyến hoặc trực tiếp', 'Học lý thuyết và thi thử phần mềm', 'Tập thực hành trên sa hình'] },
          { phase: 'Giai đoạn 2', duration: '1 ngày', content: ['Làm bài thi lý thuyết trên máy tính (21/25 câu đạt)', 'Thi thực hành lái xe trên sân cảm biến (80/100 điểm đạt)'] },
          { phase: 'Giai đoạn 3', duration: '1.5 tuần', content: ['Sở GTVT cấp bằng thẻ PET', 'Tự động đồng bộ lên tài khoản VNeID'] },
        ],
      },

      documents: [
        { name: '01 Bản photo CCCD/CMND/Hộ chiếu', note: 'Không cần công chứng, đem theo bản gốc để đối chiếu' },
        { name: '04 Ảnh thẻ 3x4 nền xanh hoặc trắng', note: 'Có hỗ trợ chụp ảnh trực tiếp tại trung tâm' },
        { name: 'Giấy khám sức khỏe lái xe hạng A1', note: 'Khám nhanh tại bệnh viện liên kết của trung tâm' },
        { name: 'Đơn đề nghị sát hạch cấp GPLX', note: 'Được phát và hướng dẫn điền khi nộp hồ sơ' },
      ],

      tuition: {
        basePrice: '750.000đ',
        options: [
          { label: 'Học phí trọn gói', price: '750.000đ', note: 'Đã bao gồm lệ phí đào tạo lý thuyết và thực hành' },
          { label: 'Đăng ký nhóm từ 3 người', price: '690.000đ/người', note: 'Giảm 60.000đ cho mỗi học viên khi đăng ký cùng nhóm' },
          { label: 'Hỗ trợ phòng thi VIP', price: '1.100.000đ', note: 'Bao gồm cả chi phí khám sức khỏe và chụp hình trọn gói' },
        ],
        includes: ['Tài liệu 200 câu hỏi ôn tập', 'Sách luật giao thông & link app thi thử', 'Nước uống và phí sân tập thực hành'],
        note: 'Lưu ý: Học viên nộp thêm lệ phí thi sát hạch của Sở GTVT tại sân thi (khoảng 265.000đ)',
      },

      duration: '2 - 3 tuần',
      passRate: '99%',
      students: '12.000+',
      nextOpen: '25/06/2026',
    },

    // ──────────────── HẠNG A ────────────────
    {
      id: 'hang-a',
      badge: 'A',
      name: 'Khóa học lái xe mô tô hạng A',
      shortDesc: 'Xe mô tô hai bánh dung tích từ 125cm³ trở lên (Phân khối lớn) và hạng A1',
      heroImage: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&fit=crop',
      bannerColor: '',

      reasons: {
        title: 'Chinh phục xe phân khối lớn',
        subtitle: 'Sở hữu tấm bằng hạng A để tự do cầm lái các dòng xe côn tay, xe PKL cực ngầu không giới hạn dung tích',
        items: [
          { icon: 'FaRoad', title: 'Không giới hạn phân khối', desc: 'Điều khiển mọi loại mô tô 2 bánh từ 125cc, 150cc, 300cc cho đến 1000cc+' },
          { icon: 'FaBriefcase', title: 'Thỏa đam mê xê dịch', desc: 'Phù hợp cho các bạn đam mê phượt, chạy xe tour đường dài chuyên nghiệp' },
          { icon: 'FaTrophy', title: 'Tích hợp bằng A1', desc: 'Đã có bằng hạng A thì hoàn toàn được phép chạy mọi xe thuộc hạng A1' },
          { icon: 'FaShieldAlt', title: 'Kỹ năng côn tay chuẩn', desc: 'Huấn luyện kỹ năng côn tay, thăng bằng xe nặng trên sa hình và thực tế' },
        ],
      },

      vehicles: [
        { name: 'Xe mô tô PKL trên 125cc', description: 'Honda CB300R, Kawasaki Z400, Yamaha R6, Harley Davidson... không giới hạn', icon: 'FaMotorcycle', image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=400&fit=crop' },
        { name: 'Xe máy côn tay 150cc', description: 'Yamaha Exciter, Honda Winner, Suzuki Raider... phổ biến', icon: 'FaMotorcycle', image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=400&fit=crop' },
      ],

      benefits: [
        { icon: 'FaShieldAlt', title: 'Xe tập đời mới', desc: 'Tập luyện trên các dòng xe PKL hiện đại, vận hành êm ái, dễ điều khiển' },
        { icon: 'FaGraduationCap', title: 'Giảng viên kỳ cựu', desc: 'Được hướng dẫn bởi giáo viên là biker chuyên nghiệp có nhiều năm chạy tour' },
        { icon: 'FaCertificate', title: 'Bằng lái vô thời hạn', desc: 'Bằng thẻ PET cứng do Sở GTVT cấp, giá trị sử dụng trọn đời' },
        { icon: 'FaRedo', title: 'Tập xe tự do', desc: 'Được vào sân tập xe côn tay trước ngày thi để đảm bảo làm quen xe vững vàng' },
      ],

      curriculum: {
        theory: {
          total: '8 giờ lý thuyết',
          items: [
            'Luật giao thông đường bộ áp dụng cho xe PKL',
            'Quy tắc đi phượt nhóm, đi tour an toàn',
            'Kỹ thuật phanh ABS, kiểm soát lực kéo trên xe lớn',
          ],
        },
        practice: {
          total: '6 giờ thực hành',
          items: [
            'Điều khiển xe mô tô nặng qua vòng số 8 lớn',
            'Kỹ năng giữ thăng bằng trên đường hẹp',
            'Cách dựng xe nặng khi bị đổ an toàn',
            'Kỹ thuật phanh gấp ở tốc độ cao',
          ],
        },
        schedule: [
          { phase: 'Giai đoạn 1', duration: '2 tuần', content: ['Nộp hồ sơ, nhận tài liệu 150 câu hỏi luật', 'Học lý thuyết và tập luyện xe côn tay tại sân tập'] },
          { phase: 'Giai đoạn 2', duration: '1 ngày', content: ['Làm bài thi lý thuyết (23/25 câu đạt)', 'Thi thực hành chạy xe côn tay 250cc trên sa hình'] },
          { phase: 'Giai đoạn 3', duration: '1.5 tuần', content: ['Nhận GPLX hạng A do Sở GTVT cấp'] },
        ],
      },

      documents: [
        { name: '01 Bản photo CCCD/CMND còn hạn', note: 'Đem theo bản gốc để đối chiếu' },
        { name: '04 Ảnh thẻ 3x4 nền xanh hoặc trắng', note: 'Chụp chuẩn không đeo kính' },
        { name: 'Giấy khám sức khỏe lái xe hạng A', note: 'Khám tại bệnh viện được chỉ định' },
      ],

      tuition: {
        basePrice: '2.000.000đ',
        options: [
          { label: 'Học phí trọn gói', price: '2.000.000đ', note: 'Đã bao gồm tiền xăng, xe tập PKL và sân bãi' },
          { label: 'Đã có bằng A1 (Miễn thi lý thuyết)', price: '1.700.000đ', note: 'Chỉ cần thi thực hành, được miễn thi lý thuyết 100%' },
        ],
        includes: ['Tài liệu ôn tập 150 câu', 'Thời gian tập thực hành tự do', 'Hỗ trợ xe côn tay sát hạch'],
        note: 'Chưa bao gồm lệ phí thi sát hạch tại sân thi (khoảng 265.000đ)',
      },

      duration: '3 - 4 tuần',
      passRate: '97%',
      students: '3.000+',
      nextOpen: '05/07/2026',
    },

    // ──────────────── HẠNG B TỰ ĐỘNG ────────────────
    {
      id: 'hang-b-tu-dong',
      badge: 'B (TĐ)',
      name: 'Khóa học lái xe hạng B (Số tự động)',
      shortDesc: 'Ô tô chở người đến 8 chỗ, xe tải ≤ 3.5 tấn số tự động - Phù hợp cho gia đình',
      heroImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&fit=crop',
      bannerColor: '',

      reasons: {
        title: 'Lái xe số tự động nhàn nhã',
        subtitle: 'Sự lựa chọn lý tưởng dành cho những ai chỉ có nhu cầu lái xe gia đình, đi lại trong đô thị đông đúc',
        items: [
          { icon: 'FaCar', title: 'Học nhanh, dễ đỗ', desc: 'Không lo tắt máy, giật cục hay trôi dốc. Thao tác lái xe cực kỳ đơn giản' },
          { icon: 'FaBriefcase', title: 'Xe đô thị tiện lợi', desc: '95% xe hơi gia đình hiện nay là số tự động, lái xe thảnh thơi trong phố' },
          { icon: 'FaShieldAlt', title: 'An toàn tối đa', desc: 'Tập trung hoàn toàn vào việc quan sát đường đi và chân phanh mà không cần sang số' },
          { icon: 'FaClock', title: 'Tiết kiệm thời gian', desc: 'Thời gian làm quen xe và đạt độ nhuần nhuyễn nhanh hơn xe số sàn' },
        ],
      },

      vehicles: [
        { name: 'Xe ô tô số tự động 4-7 chỗ', description: 'Toyota Vios, Hyundai Accent, Mazda 3... số tự động', icon: 'FaCar', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=400&fit=crop' },
        { name: 'Xe SUV/CUV tự động', description: 'Hyundai Tucson, Mazda CX-5, Ford Territory... đời mới', icon: 'FaCar', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&fit=crop' },
      ],

      benefits: [
        { icon: 'FaGraduationCap', title: 'Học thực hành 1 kèm 1', desc: 'Mỗi học viên một xe đời mới cùng giáo viên hướng dẫn sát sao suốt buổi học' },
        { icon: 'FaRedo', title: 'Thi trượt học lại free', desc: 'Cam kết hỗ trợ ôn tập và sắp xếp thi lại miễn phí nếu thi chưa đạt' },
        { icon: 'FaCertificate', title: 'Thời hạn 10 năm', desc: 'Bằng lái xe ô tô hạng B tự động có thời hạn sử dụng lên đến 10 năm' },
        { icon: 'FaShieldAlt', title: 'Học xe đời mới', desc: 'Xe tập đời mới trang bị camera, cảm biến quanh xe và phanh phụ an toàn' },
      ],

      curriculum: {
        theory: {
          total: '168 giờ lý thuyết',
          items: [
            'Luật giao thông đường bộ 600 câu',
            'Kỹ thuật lái xe số tự động an toàn',
            'Đạo đức người lái xe & Văn hóa giao thông',
            'Cấu tạo và sửa chữa xe cơ bản',
          ],
        },
        practice: {
          total: '710 km thực hành (DAT)',
          items: [
            'Lái xe thực tế cabin mô phỏng 3D',
            'Thực hành chạy 11 bài thi sa hình sát hạch',
            'Chạy DAT đường trường 710 km theo quy định Bộ GTVT',
            'Thực hành lái xe ban đêm và đô thị đông đúc',
          ],
        },
        schedule: [
          { phase: 'Giai đoạn 1', duration: '1 tháng', content: ['Học luật giao thông đường bộ', 'Ôn tập 600 câu hỏi và 120 tình huống mô phỏng', 'Thi tốt nghiệp lý thuyết cấp chứng chỉ'] },
          { phase: 'Giai đoạn 2', duration: '2 tháng', content: ['Học lái xe cơ bản tại cabin', 'Chạy đủ 710km đường trường thiết bị DAT', 'Luyện 11 bài thi sa hình sát hạch'] },
          { phase: 'Giai đoạn 3', duration: '0.5 tháng', content: ['Thi thử sa hình trên xe thiết bị cảm biến', 'Thi sát hạch chính thức của Sở GTVT và nhận bằng lái xe'] },
        ],
      },

      documents: [
        { name: '01 Bản photo CCCD/Hộ chiếu còn hạn', note: 'Đem theo bản chính để đối chiếu' },
        { name: '06 Ảnh thẻ 3x4 nền trắng', note: 'Không đeo kính, tóc gọn gàng, áo sơ mi trắng' },
        { name: 'Giấy khám sức khỏe lái xe hạng B', note: 'Do bệnh viện cấp quận trở lên cấp trong vòng 6 tháng' },
      ],

      tuition: {
        basePrice: '12.500.000đ',
        options: [
          { label: 'Học phí trọn gói', price: '12.500.000đ', note: 'Không phát sinh bất kỳ chi phí xăng xe, sân bãi hay giáo viên' },
          { label: 'Hỗ trợ trả góp 0%', price: '2.083.000đ/tháng', note: 'Chia nhỏ thanh toán thành nhiều đợt không mất lãi qua thẻ hoặc ngân hàng' },
          { label: 'Đăng ký nhóm 2 người', price: '12.000.000đ/người', note: 'Giảm trực tiếp 500.000đ cho mỗi học viên' },
        ],
        includes: ['Tài liệu học tập & Ứng dụng thi thử', 'Phí chạy DAT 710km đường trường', 'Bảo hiểm học viên khi lái xe tập', 'Phí làm bằng'],
        note: 'Học phí chưa bao gồm lệ phí thi sát hạch của Sở GTVT (khoảng 765.000đ)',
      },

      duration: '3 – 3.5 tháng',
      passRate: '98%',
      students: '9.500+',
      nextOpen: '01/07/2026',
    },

    // ──────────────── HẠNG B SỐ SÀN ────────────────
    {
      id: 'hang-b-so-san',
      badge: 'B (SS)',
      name: 'Khóa học lái xe hạng B (Số sàn)',
      shortDesc: 'Lái cả xe số sàn và số tự động dưới 8 chỗ, xe tải ≤ 3.5 tấn - Linh hoạt công việc',
      heroImage: 'https://sathachlaixebinhthuan.com/uploads/news/images/702_cr.png',
      bannerColor: '',

      reasons: {
        title: 'Làm chủ mọi loại xe hạng nhẹ',
        subtitle: 'Bằng lái xe số sàn mang lại kỹ năng lái xe toàn diện nhất, cho phép bạn lái cả xe số sàn lẫn tự động',
        items: [
          { icon: 'FaCar', title: 'Lái cả 2 loại xe', desc: 'Vừa lái được xe số sàn vừa lái được xe số tự động - Vô cùng linh hoạt' },
          { icon: 'FaBriefcase', title: 'Thích hợp kinh doanh', desc: 'Rất cần thiết nếu bạn muốn chạy dịch vụ, lái xe taxi, xe công ty hoặc kinh doanh vận tải' },
          { icon: 'FaRoad', title: 'Nâng hạng dễ dàng', desc: 'Có bằng B số sàn đủ 3 năm là đủ điều kiện nâng cấp lên bằng hạng C hoặc D' },
          { icon: 'FaTrophy', title: 'Kỹ năng toàn diện', desc: 'Kiểm soát tốt ly hợp (côn), làm chủ tốc độ và máy móc tối đa' },
        ],
      },

      vehicles: [
        { name: 'Xe ô tô số sàn & tự động', description: 'Toyota Vios MT, Chevrolet Cruze... ô tô số sàn dưới 8 chỗ', icon: 'FaCar', image: 'https://images.unsplash.com/photo-1469285994282-454cbe0f2e9d?q=80&w=400&fit=crop' },
        { name: 'Xe tải dưới 3.500 kg', description: 'Kia K200, Hyundai Porter... số sàn & số tự động', icon: 'FaTruck', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&fit=crop' },
      ],

      benefits: [
        { icon: 'FaGraduationCap', title: 'Chương trình bài bản', desc: 'Đào tạo kỹ năng ép côn, đề-pa khởi hành ngang dốc không lo tụt dốc' },
        { icon: 'FaRedo', title: 'Thi lại thực hành free', desc: 'Nếu thi trượt thực hành, trung tâm hỗ trợ ôn tập và sắp xếp thi lại miễn phí hoàn toàn' },
        { icon: 'FaTools', title: 'Trang bị cabin ảo', desc: 'Học thực hành cabin mô phỏng 3D giúp làm quen xe nhanh chóng' },
        { icon: 'FaCertificate', title: 'Thời hạn 10 năm', desc: 'Bằng lái xe số sàn hạng B có giá trị toàn quốc, thời hạn sử dụng 10 năm' },
      ],

      curriculum: {
        theory: {
          total: '168 giờ lý thuyết',
          items: [
            'Luật giao thông bộ 600 câu',
            'Nguyên lý hoạt động của hộp số sàn & chân côn',
            'Đạo đức người lái xe & Quy tắc ứng xử',
            'Kỹ năng sửa chữa khẩn cấp pan xe',
          ],
        },
        practice: {
          total: '810 km thực hành (DAT)',
          items: [
            'Học côn số nguội tại chỗ',
            'Tập đề-pa khởi hành ngang dốc sa hình',
            'Chạy đường trường DAT đủ 810km bắt buộc',
            'Luyện tập sa hình cảm biến sát hạch 11 bài thi',
          ],
        },
        schedule: [
          { phase: 'Giai đoạn 1', duration: '1 tháng', content: ['Học luật 600 câu lý thuyết', 'Luyện thi thử trên app điện thoại', 'Thi tốt nghiệp lý thuyết chứng chỉ'] },
          { phase: 'Giai đoạn 2', duration: '2 - 2.5 tháng', content: ['Làm quen chân côn, chân phanh', 'Chạy DAT đường trường 810km bắt buộc', 'Ôn tập sa hình sát hạch 11 bài thi'] },
          { phase: 'Giai đoạn 3', duration: '0.5 tháng', content: ['Thi sát hạch lý thuyết & thực hành sa hình, đường trường', 'Nhận GPLX sau 10 ngày thi đỗ'] },
        ],
      },

      documents: [
        { name: '01 Bản photo CCCD/Hộ chiếu còn hạn', note: 'Đem kèm bản gốc để đối chiếu' },
        { name: '06 Ảnh thẻ 3x4 nền trắng', note: 'Mặc áo sơ mi có cổ, chụp không quá 6 tháng' },
        { name: 'Giấy khám sức khỏe lái xe ô tô hạng B', note: 'Tại các cơ sở y tế quận/huyện trở lên' },
      ],

      tuition: {
        basePrice: '13.500.000đ',
        options: [
          { label: 'Học phí trọn gói', price: '13.500.000đ', note: 'Bao gồm toàn bộ chi phí xăng, giáo viên, sân bãi' },
          { label: 'Trả góp 0% lãi suất', price: '2.250.000đ/tháng', note: 'Trả dần trong vòng 6 tháng qua ngân hàng đối tác' },
          { label: 'Đăng ký nhóm 3 người', price: '12.900.000đ/người', note: 'Giảm ngay 600.000đ/người khi nộp hồ sơ chung' },
        ],
        includes: ['Tài liệu luật giao thông', 'Phí chạy DAT 810km', 'Nước uống và phí tập sa hình', 'Lệ phí thi tốt nghiệp'],
        note: 'Chưa bao gồm lệ phí thi sát hạch trực tiếp tại sân thi (khoảng 765.000đ)',
      },

      duration: '3.5 – 4 tháng',
      passRate: '96%',
      students: '15.000+',
      nextOpen: '01/07/2026',
    },

    // ──────────────── HẠNG C1 ────────────────
    {
      id: 'hang-c1',
      badge: 'C1',
      name: 'Khóa học lái xe hạng C1',
      shortDesc: 'Xe tải từ 3.5 tấn đến 7.5 tấn, xe chở người dưới 8 chỗ - Cơ hội nghề nghiệp tốt',
      heroImage: 'https://vcdn1-vnexpress.vnecdn.net/2017/11/17/22894273-1520069774745739-7908-2762-5450-1510889303.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=6z9wKrg4avXw-oSMpbPngA',
      bannerColor: '',

      reasons: {
        title: 'Lựa chọn vận tải tối ưu',
        subtitle: 'Hạng bằng mới tối ưu cho tài xế xe tải tầm trung vận chuyển hàng hóa nội tỉnh và liên tỉnh',
        items: [
          { icon: 'FaTruck', title: 'Lái xe tải trung', desc: 'Được phép điều khiển xe tải từ 3.500 kg lên tới 7.500 kg - Phân khúc xe đông lạnh, xe tải giao hàng rất hot' },
          { icon: 'FaBriefcase', title: 'Cơ hội việc làm cao', desc: 'Rất nhiều công ty logistics và vận chuyển hàng hóa tuyển dụng tài xế hạng C1' },
          { icon: 'FaArrowUp', title: 'Chi phí hợp lý', desc: 'Tiết kiệm chi phí và thời gian học so với bằng hạng C (xe tải > 7.5t) nếu không có nhu cầu chạy xe quá lớn' },
          { icon: 'FaTrophy', title: 'Nâng hạng thuận tiện', desc: 'Đủ niên hạn có thể dễ dàng nâng cấp lên bằng hạng C hoặc hạng D1 (xe khách 10-16 chỗ)' },
        ],
      },

      vehicles: [
        { name: 'Xe tải từ 3.5t đến 7.5t', description: 'Các dòng xe tải thiết kế trung, Isuzu FRR, Hyundai Mighty... đông lạnh', icon: 'FaTruck', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=400&fit=crop' },
        { name: 'Xe ô tô dưới 8 chỗ', description: 'Lái được tất cả các loại xe thuộc quy định của hạng B', icon: 'FaCar', image: 'https://images.unsplash.com/photo-1469285994282-454cbe0f2e9d?q=80&w=400&fit=crop' },
        { name: 'Các loại xe kéo rơ moóc', description: 'Được kéo rơ moóc có khối lượng thiết kế không quá 750 kg', icon: 'FaRoute', image: 'https://vcdn1-vnexpress.vnecdn.net/2017/11/17/22894273-1520069774745739-7908-2762-5450-1510889303.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=6z9wKrg4avXw-oSMpbPngA' },
      ],

      benefits: [
        { icon: 'FaGraduationCap', title: 'Đào tạo xe tải trung', desc: 'Hướng dẫn kỹ năng lái xe tải dài, căn đường trong ngõ hẹp và xử lý góc cua an toàn' },
        { icon: 'FaCertificate', title: 'Thời hạn bằng 10 năm', desc: 'Theo quy định mới nhất, bằng lái hạng C1 có thời hạn sử dụng lên đến 10 năm' },
        { icon: 'FaShieldAlt', title: 'An toàn xếp dỡ hàng', desc: 'Trang bị kiến thức về neo giữ hàng hóa, cân tải trọng xe tránh bị phạt quá tải' },
        { icon: 'FaRedo', title: 'Hỗ trợ thi lại nhanh', desc: 'Hỗ trợ hồ sơ và xếp lịch thi lại nhanh chóng nhất cho học viên nếu chưa đạt' },
      ],

      curriculum: {
        theory: {
          total: '168 giờ lý thuyết',
          items: [
            'Luật giao thông đường bộ xe tải chuyên ngành',
            'Kỹ thuật xếp dỡ hàng hóa và neo buộc an toàn',
            'Nguyên lý cấu tạo phanh khí nén (phanh hơi)',
            'Đạo đức nghề nghiệp người lái xe vận tải',
          ],
        },
        practice: {
          total: '820 km thực hành (DAT)',
          items: [
            'Tập lái xe tải trung trong sa hình cảm biến',
            'Thực hành căn xe qua đường hẹp vuông góc',
            'Chạy DAT 820km đường trường bắt buộc thiết bị định vị',
            'Luyện tập kỹ thuật đỗ xe tải sát vỉa hè, lùi chuồng dọc',
          ],
        },
        schedule: [
          { phase: 'Giai đoạn 1', duration: '1.5 tháng', content: ['Học luật giao thông đường bộ', 'Học kỹ thuật nghiệp vụ vận tải xe tải', 'Thi chứng chỉ tốt nghiệp lý thuyết'] },
          { phase: 'Giai đoạn 2', duration: '2.5 - 3 tháng', content: ['Làm quen xe tải phanh hơi tầm trung', 'Chạy đủ 820km thiết bị giám sát hành trình DAT', 'Tập luyện sa hình sát hạch xe tải C1'] },
          { phase: 'Giai đoạn 3', duration: '0.5 tháng', content: ['Thi sát hạch Sở GTVT (Lý thuyết, Mô phỏng, Sa hình, Đường trường)', 'Nhận bằng lái hạng C1'] },
        ],
      },

      documents: [
        { name: '01 Bản photo CCCD/Hộ chiếu còn hạn', note: 'Đem kèm bản chính để đối chiếu' },
        { name: '06 Ảnh thẻ 3x4 nền trắng', note: 'Ảnh rõ nét chụp gần đây, áo sơ mi lịch sự' },
        { name: 'Giấy khám sức khỏe lái xe hạng C1/C', note: 'Khám tại cơ sở y tế đủ thẩm quyền theo quy định Bộ Y Tế' },
      ],

      tuition: {
        basePrice: '14.500.000đ',
        options: [
          { label: 'Trọn gói cam kết', price: '14.500.000đ', note: 'Đào tạo từ đầu cho người chưa biết lái, cam kết không phát sinh chi phí' },
          { label: 'Trả góp linh hoạt', price: '2.416.000đ/tháng', note: 'Không lãi suất trong vòng 6 tháng qua ngân hàng liên kết' },
          { label: 'Nâng hạng từ bằng B', price: '9.000.000đ', note: 'Dành cho học viên đã có bằng B đủ niên hạn và số km lái xe an toàn' },
        ],
        includes: ['Tài liệu & App ôn thi', 'Phí chạy DAT 820km đường trường', 'Bảo hiểm đào tạo cho học viên', 'Phí thuê xe tập'],
        note: 'Chưa bao gồm lệ phí thi sát hạch của Sở GTVT khi thi (khoảng 765.000đ)',
      },

      duration: '4.5 – 5 tháng',
      passRate: '96%',
      students: '4.500+',
      nextOpen: '15/07/2026',
    },

    // ──────────────── HẠNG C ────────────────
    {
      id: 'hang-c',
      badge: 'C',
      name: 'Khóa học lái xe hạng C',
      shortDesc: 'Xe tải hạng nặng trên 7.5 tấn, xe chuyên dùng, xe hạng B và C1 - Nghề nghiệp vững vàng',
      heroImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&fit=crop',
      bannerColor: '',

      reasons: {
        title: 'Vua đường trường tải nặng',
        subtitle: 'Sở hữu bằng lái xe tải không giới hạn tải trọng, mở ra cơ hội việc làm lương cao trong ngành vận tải logistics',
        items: [
          { icon: 'FaTruck', title: 'Không giới hạn tải trọng', desc: 'Điều khiển mọi dòng xe tải hạng nặng, xe ben, xe bồn lớn trên 7.5 tấn' },
          { icon: 'FaBriefcase', title: 'Lương cao, ổn định', desc: 'Thu nhập tài xế xe tải nặng dao động từ 15-25 triệu/tháng nhờ nhu cầu vận chuyển hàng hóa lớn' },
          { icon: 'FaGlobe', title: 'Chạy xe liên tỉnh', desc: 'Được đào tạo bài bản để lái xe đường dài liên tỉnh, chạy đêm xuyên quốc gia' },
          { icon: 'FaArrowUp', title: 'Nâng hạng lên bằng E, F', desc: 'Nền tảng quan trọng để nâng cấp lên các hạng bằng cao nhất như FC, FE lái container đầu kéo' },
        ],
      },

      vehicles: [
        { name: 'Xe tải nặng trên 7.5t', description: 'Howo, Dongfeng, Hyundai 3-4 chân... tải trọng > 7.5 tấn', icon: 'FaTruck', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=400&fit=crop' },
        { name: 'Xe chuyên dùng', description: 'Xe cần cẩu, xe nâng, xe cứu hộ, xe trộn bê tông... có tải trọng phù hợp', icon: 'FaTools', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400&fit=crop' },
        { name: 'Các loại xe B, C1', description: 'Điều khiển toàn bộ phương tiện thuộc quy định bằng B và C1', icon: 'FaCar', image: 'https://images.unsplash.com/photo-1469285994282-454cbe0f2e9d?q=80&w=400&fit=crop' },
      ],

      benefits: [
        { icon: 'FaGraduationCap', title: 'Huấn luyện sinh động', desc: 'Tập luyện trên cabin mô phỏng 3D hiện đại và thực hành trên xe tải 4 chân thực tế' },
        { icon: 'FaNetworkWired', title: 'Giới thiệu việc làm', desc: 'Hỗ trợ giới thiệu học viên xuất sắc vào các doanh nghiệp logistics đối tác lớn của trung tâm' },
        { icon: 'FaCertificate', title: 'Thời hạn bằng 5 năm', desc: 'Bằng hạng C có thời hạn sử dụng 5 năm, gia hạn đơn giản không cần thi lại' },
        { icon: 'FaRedo', title: 'Ôn tập thực hành free', desc: 'Học viên được hỗ trợ tập thêm giờ cảm biến trước ngày thi lại nếu không may thi chưa đạt' },
      ],

      curriculum: {
        theory: {
          total: '168 giờ lý thuyết',
          items: [
            'Luật giao thông đường bộ nâng cao cho lái xe chuyên nghiệp',
            'Nghiệp vụ vận tải hàng hóa nặng liên tỉnh',
            'Cấu tạo bảo dưỡng động cơ diesel xe tải nặng',
            'Kỹ năng sơ cứu và xử lý sự cố nguy hiểm xe tải nặng',
          ],
        },
        practice: {
          total: '820 km thực hành (DAT)',
          items: [
            'Làm quen xe tải nặng số nhiều tầng (số rùa/thỏ)',
            'Thực hành căn lề, lùi chuồng dọc xe tải lớn',
            'Chạy DAT đường trường 820km bắt buộc ghi nhận thiết bị định vị',
            'Luyện tập lái xe đường đèo dốc hiểm trở và đường trơn trượt',
          ],
        },
        schedule: [
          { phase: 'Giai đoạn 1', duration: '1.5 tháng', content: ['Học luật 600 câu & 120 tình huống mô phỏng trên phần mềm', 'Học nghiệp vụ vận tải và cấu tạo xe tải nặng', 'Thi tốt nghiệp chứng chỉ nghề'] },
          { phase: 'Giai đoạn 2', duration: '3 tháng', content: ['Học số nguội, số nóng xe tải lớn', 'Chạy DAT 820km có thiết bị giám sát', 'Luyện tập 11 bài thi sa hình xe tải hạng C'] },
          { phase: 'Giai đoạn 3', duration: '0.5 tháng', content: ['Thi sát hạch lý thuyết, sa hình & đường trường', 'Nhận bằng lái xe tải hạng C chính thức'] },
        ],
      },

      documents: [
        { name: '01 Bản photo CCCD/Hộ chiếu còn hạn', note: 'Yêu cầu đủ 21 tuổi trở lên tính đến ngày thi' },
        { name: '06 Ảnh thẻ 3x4 nền trắng', note: 'Tóc tai gọn gàng, mặc áo sơ mi' },
        { name: 'Giấy khám sức khỏe lái xe hạng C', note: 'Có xét nghiệm ma túy âm tính bắt buộc' },
      ],

      tuition: {
        basePrice: '16.000.000đ',
        options: [
          { label: 'Học phí trọn gói', price: '16.000.000đ', note: 'Không phát sinh thêm chi phí dã ngoại đường trường hay xăng xe' },
          { label: 'Học trả góp', price: '2.666.000đ/tháng', note: 'Thanh toán đợt đầu chỉ từ 4.000.000đ để nhập học ngay' },
          { label: 'Nâng hạng từ B2 lên C', price: '10.000.000đ', note: 'Yêu cầu 3 năm kinh nghiệm lái xe an toàn và đủ tuổi' },
        ],
        includes: ['Tài liệu & PM ôn thi độc quyền', 'Phí chạy DAT 820km xe tải nặng', 'Phí làm bằng thẻ PET', 'Bảo hiểm'],
        note: 'Học viên nộp thêm lệ phí thi sát hạch cho sân thi vào ngày thi (khoảng 765.000đ)',
      },

      duration: '5 – 5.5 tháng',
      passRate: '95%',
      students: '6.000+',
      nextOpen: '01/08/2026',
    },

    // ──────────────── HẠNG D ────────────────
    {
      id: 'hang-d',
      badge: 'D',
      name: 'Khóa học lái xe hạng D',
      shortDesc: 'Xe ô tô chở người từ 10-30 chỗ ngồi, xe hạng B, C1, C - Sự nghiệp tài xế du lịch',
      heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&fit=crop',
      bannerColor: '',

      reasons: {
        title: 'Vận tải hành khách chuyên nghiệp',
        subtitle: 'Sự nghiệp tài xế xe du lịch, xe khách, limousine cao cấp mang lại thu nhập vững vàng cho gia đình',
        items: [
          { icon: 'FaBus', title: 'Lái xe khách đến 30 chỗ', desc: 'Điều khiển các dòng xe du lịch 16 chỗ, xe limousine, xe buýt nhỏ, xe khách 29 chỗ' },
          { icon: 'FaBriefcase', title: 'Việc làm ổn định', desc: 'Nhu cầu tuyển dụng lái xe limousine chạy tuyến, lái xe du lịch lữ hành cực kỳ lớn' },
          { icon: 'FaGlobe', title: 'Thu nhập hấp dẫn', desc: 'Thu nhập trung bình từ 18-28 triệu/tháng bao gồm lương cứng và tiền thưởng/tip du lịch' },
          { icon: 'FaArrowUp', title: 'Nâng lên hạng E dễ dàng', desc: 'Đủ niên hạn bằng hạng D có thể dễ dàng nâng hạng lên E để lái xe giường nằm trên 30 chỗ' },
        ],
      },

      vehicles: [
        { name: 'Xe khách từ 10-30 chỗ', description: 'Ford Transit, Hyundai Solati, Samco, Thaco 29 chỗ...', icon: 'FaBus', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400&fit=crop' },
        { name: 'Các loại xe B, C1, C', description: 'Cho phép lái tất cả các dòng xe con và xe tải mọi trọng tải', icon: 'FaCar', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=400&fit=crop' },
      ],

      benefits: [
        { icon: 'FaGraduationCap', title: 'Đào tạo kỹ năng mềm', desc: 'Huấn luyện kỹ năng ứng xử văn minh với hành khách và lái xe êm ái chống say xe' },
        { icon: 'FaFirstAid', title: 'Sơ cứu y tế cơ bản', desc: 'Được học khóa sơ cấp cứu cơ bản và kỹ năng xử lý sự cố cháy nổ trên xe khách' },
        { icon: 'FaRedo', title: 'Tập xe chip miễn phí', desc: 'Được tặng thêm giờ tập xe thiết bị cảm biến (xe chip) trước kỳ thi chính thức' },
        { icon: 'FaShieldAlt', title: 'An toàn hành khách', desc: 'Đào tạo đặt biệt về an toàn chủ động, kỹ thuật phanh đổ đèo bảo vệ hành khách' },
      ],

      curriculum: {
        theory: {
          total: '200 giờ lý thuyết',
          items: [
            'Luật giao thông xe khách nâng cao',
            'Kỹ năng phục vụ hành khách & giao tiếp ứng xử',
            'An toàn phòng cháy chữa cháy trên xe ô tô chở người',
            'Quy tắc vận hành phanh khí nén an toàn',
          ],
        },
        practice: {
          total: '1.000 km thực hành (DAT)',
          items: [
            'Thực hành lái xe khách trong sa hình sát hạch',
            'Chạy DAT đường trường 1000km xe khách ghi nhận định vị',
            'Kỹ năng căn lề chuẩn khi đón trả khách dừng đỗ',
            'Lái xe ban đêm và đường đèo nguy hiểm mô phỏng',
          ],
        },
        schedule: [
          { phase: 'Giai đoạn 1', duration: '1.5 tháng', content: ['Học luật giao thông & nghiệp vụ vận tải hành khách', 'Kiểm tra kỹ năng phục vụ', 'Thi lấy chứng chỉ tốt nghiệp nghề'] },
          { phase: 'Giai đoạn 2', duration: '3 tháng', content: ['Học lái xe khách trong sân tập sa hình', 'Chạy đủ 1000km DAT đường trường', 'Luyện tập sa hình cảm biến xe khách hạng D'] },
          { phase: 'Giai đoạn 3', duration: '0.5 tháng', content: ['Tham dự kỳ thi sát hạch Sở GTVT', 'Nhận bằng lái xe khách hạng D'] },
        ],
      },

      documents: [
        { name: '01 Bản photo CCCD còn hạn', note: 'Yêu cầu đủ 24 tuổi trở lên' },
        { name: '01 Bản photo bằng tốt nghiệp THCS trở lên', note: 'Bắt buộc đối với nâng hạng D (công chứng)' },
        { name: '01 Bản photo GPLX hiện có (B2 hoặc C)', note: 'Bằng hiện tại đang sử dụng, đủ niên hạn 3-5 năm' },
        { name: 'Giấy khám sức khỏe lái xe hạng D', note: 'Khám theo đúng mẫu quy định có xét nghiệm chất kích thích' },
      ],

      tuition: {
        basePrice: '17.000.000đ',
        options: [
          { label: 'Trọn gói nâng hạng từ C', price: '12.000.000đ', note: 'Yêu cầu có bằng C tối thiểu 3 năm và 50.000km lái xe an toàn' },
          { label: 'Trọn gói nâng hạng từ B2', price: '14.000.000đ', note: 'Yêu cầu có bằng B2 tối thiểu 5 năm và 100.000km lái xe an toàn' },
          { label: 'Học trực tiếp từ đầu', price: '17.000.000đ', note: 'Chỉ dành cho học viên đủ tuổi và trình độ học vấn theo luật' },
        ],
        includes: ['Tài liệu ôn thi chuyên ngành', 'Phí chạy DAT 1000km xe khách', 'Lệ phí tốt nghiệp chứng chỉ nghề'],
        note: 'Học viên nộp thêm lệ phí thi sát hạch tại sân thi (khoảng 765.000đ)',
      },

      duration: '4.5 – 5.5 tháng',
      passRate: '95%',
      students: '2.500+',
      nextOpen: '01/08/2026',
    },
  ],
};
