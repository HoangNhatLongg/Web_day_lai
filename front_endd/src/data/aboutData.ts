// ============================================================
// MOCK DATA - Trang Giới Thiệu
// Để đổi sang API: thay thế export const bằng fetch/axios call
// ví dụ: export const fetchAboutData = () => axios.get('/api/about')
// ============================================================

export interface HeroData {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  backgroundImage: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string; // icon name
}

export interface MissionItem {
  icon: string;
  title: string;
  description: string;
}

export interface HistoryItem {
  year: string;
  title: string;
  description: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  description: string;
  image: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  year: string;
  icon: string;
}

export interface FacilityItem {
  title: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  name: string;
  course: string;
  rating: number;
  content: string;
  avatar: string;
}

export interface AboutPageData {
  hero: HeroData;
  stats: StatItem[];
  mission: {
    sectionTitle: string;
    sectionDescription: string;
    items: MissionItem[];
  };
  history: {
    sectionTitle: string;
    sectionDescription: string;
    founded: string;
    items: HistoryItem[];
  };
  values: {
    sectionTitle: string;
    sectionDescription: string;
    items: ValueItem[];
  };
  team: {
    sectionTitle: string;
    sectionDescription: string;
    members: TeamMember[];
  };
  certificates: {
    sectionTitle: string;
    items: CertificateItem[];
  };
  facilities: {
    sectionTitle: string;
    sectionDescription: string;
    items: FacilityItem[];
  };
  testimonials: {
    sectionTitle: string;
    items: TestimonialItem[];
  };
  ctaBanner: {
    title: string;
    description: string;
    primaryBtn: string;
    secondaryBtn: string;
    phone: string;
  };
}

// ============================================================
// DỮ LIỆU MOCK - Chỉnh sửa nội dung tại đây
// ============================================================
export const aboutPageData: AboutPageData = {
  hero: {
    badge: 'Thành lập từ năm 2005',
    title: 'Trung tâm đào tạo lái xe',
    titleHighlight: 'GDNN Phú Giáo',
    description:
      'Hơn 20 năm kinh nghiệm đào tạo lái xe chuyên nghiệp, chúng tôi tự hào là đơn vị được tin tưởng bởi hàng chục nghìn học viên trên toàn quốc. Chất lượng đào tạo – Tận tâm phục vụ – Cam kết đầu ra.',
    backgroundImage: '/hero_bg.png',
  },

  stats: [
    { value: '20+', label: 'Năm kinh nghiệm', icon: 'FaCalendarAlt' },
    { value: '15.000+', label: 'Học viên đã tốt nghiệp', icon: 'FaUserGraduate' },
    { value: '98%', label: 'Tỷ lệ đỗ sát hạch', icon: 'FaTrophy' },
    { value: '5', label: 'Cơ sở toàn quốc', icon: 'FaMapMarkerAlt' },
  ],

  mission: {
    sectionTitle: 'Sứ Mệnh & Tầm Nhìn',
    sectionDescription: 'Định hướng phát triển bền vững, vì một cộng đồng giao thông an toàn',
    items: [
      {
        icon: 'FaBullseye',
        title: 'Sứ Mệnh',
        description:
          'Đào tạo những người lái xe có kỹ năng, trách nhiệm và ý thức an toàn giao thông cao. Chúng tôi không chỉ dạy lái xe mà còn xây dựng văn hóa giao thông văn minh cho cộng đồng.',
      },
      {
        icon: 'FaEye',
        title: 'Tầm Nhìn',
        description:
          'Trở thành trung tâm đào tạo lái xe hàng đầu Đông Nam Á, ứng dụng công nghệ tiên tiến vào quy trình đào tạo, mang lại trải nghiệm học tập tốt nhất cho mọi học viên.',
      },
      {
        icon: 'FaHandshake',
        title: 'Cam Kết',
        description:
          'Cam kết 100% chất lượng đầu ra. Học viên chưa thi đỗ được học lại miễn phí. Học phí minh bạch, không phát sinh chi phí ẩn. Hỗ trợ tận tình trong suốt quá trình học.',
      },
    ],
  },

  history: {
    sectionTitle: 'Lịch Sử Hình Thành',
    sectionDescription: 'Hành trình 20 năm xây dựng và phát triển',
    founded: '2005',
    items: [
      {
        year: '2005',
        title: 'Thành lập trung tâm',
        description:
          'Trung tâm GDNN Phú Giáo chính thức được thành lập tại Bình Dương với 2 xe tập lái và 50 học viên khóa đầu tiên.',
      },
      {
        year: '2010',
        title: 'Mở rộng quy mô',
        description:
          'Đầu tư thêm sân tập, nâng số lượng xe lên 30 chiếc. Đạt mốc 3.000 học viên tốt nghiệp. Được Sở GTVT Bình Dương công nhận đơn vị đào tạo xuất sắc.',
      },
      {
        year: '2015',
        title: 'Đạt chuẩn quốc gia',
        description:
          'Được Bộ GTVT cấp chứng nhận trung tâm đạt chuẩn quốc gia. Khai trương cơ sở thứ 2 tại TP.HCM. Đội xe nâng lên 80 chiếc đời mới.',
      },
      {
        year: '2020',
        title: 'Ứng dụng công nghệ',
        description:
          'Triển khai hệ thống học lý thuyết online, cabin mô phỏng lái xe thực tế ảo (VR). Tỷ lệ đỗ sát hạch đạt 98%, cao nhất tỉnh Bình Dương.',
      },
      {
        year: '2025',
        title: 'Hướng tới tương lai',
        description:
          'Kỷ niệm 20 năm thành lập, mở thêm cơ sở thứ 5 tại Đà Nẵng. Hơn 15.000 học viên tốt nghiệp, là đối tác đào tạo của nhiều doanh nghiệp lớn.',
      },
    ],
  },

  values: {
    sectionTitle: 'Giá Trị Cốt Lõi',
    sectionDescription: 'Những nguyên tắc định hướng mọi hoạt động của chúng tôi',
    items: [
      {
        icon: 'FaShieldAlt',
        title: 'An Toàn Là Số 1',
        description:
          'Mọi quyết định, mọi chương trình đào tạo đều đặt an toàn lên hàng đầu. Xe tập lái được kiểm tra định kỳ, sân tập đạt chuẩn an toàn tuyệt đối.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
      },
      {
        icon: 'FaGraduationCap',
        title: 'Chất Lượng Đào Tạo',
        description:
          'Chương trình giảng dạy chuẩn Bộ GTVT, kết hợp phương pháp hiện đại. Giảng viên được đào tạo bài bản, cập nhật kiến thức định kỳ.',
        color: 'text-green-600',
        bg: 'bg-green-50',
      },
      {
        icon: 'FaHeart',
        title: 'Tận Tâm Phục Vụ',
        description:
          'Đặt lợi ích học viên lên trên hết. Hỗ trợ 24/7, giải đáp mọi thắc mắc. Đồng hành cùng học viên từ ngày đầu đến khi cầm bằng lái.',
        color: 'text-red-600',
        bg: 'bg-red-50',
      },
      {
        icon: 'FaLightbulb',
        title: 'Đổi Mới Sáng Tạo',
        description:
          'Không ngừng cải tiến phương pháp giảng dạy. Ứng dụng công nghệ VR, AI vào đào tạo. Luôn tiên phong trong lĩnh vực giáo dục nghề nghiệp.',
        color: 'text-yellow-600',
        bg: 'bg-yellow-50',
      },
      {
        icon: 'FaUsers',
        title: 'Cộng Đồng & Kết Nối',
        description:
          'Xây dựng cộng đồng cựu học viên vững mạnh. Kết nối học viên với cơ hội việc làm. Đồng hành cùng doanh nghiệp trong công tác đào tạo nhân lực.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
      },
      {
        icon: 'FaLeaf',
        title: 'Trách Nhiệm Xã Hội',
        description:
          'Góp phần xây dựng văn hóa giao thông an toàn. Tổ chức các buổi tuyên truyền ATGT miễn phí. Hỗ trợ học bổng cho học viên có hoàn cảnh khó khăn.',
        color: 'text-teal-600',
        bg: 'bg-teal-50',
      },
    ],
  },

  team: {
    sectionTitle: 'Ban Lãnh Đạo',
    sectionDescription: 'Đội ngũ lãnh đạo giàu kinh nghiệm, tâm huyết với nghề',
    members: [
      {
        name: 'Ông Nguyễn Văn Phúc',
        role: 'Giám đốc điều hành',
        experience: '25 năm kinh nghiệm trong lĩnh vực đào tạo',
        description:
          'Người sáng lập trung tâm, với tầm nhìn chiến lược và tâm huyết xây dựng nền tảng đào tạo lái xe chuyên nghiệp tại Việt Nam.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
      },
      {
        name: 'Bà Trần Thị Lan',
        role: 'Phó Giám đốc Đào tạo',
        experience: '18 năm kinh nghiệm trong giảng dạy',
        description:
          'Chuyên gia hàng đầu về phương pháp đào tạo lái xe, người xây dựng chương trình giảng dạy chuẩn quốc gia tại trung tâm.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      },
      {
        name: 'Ông Lê Hoàng Minh',
        role: 'Trưởng phòng Kỹ thuật',
        experience: '20 năm kinh nghiệm kỹ thuật xe',
        description:
          'Quản lý toàn bộ đội xe và cơ sở vật chất. Đảm bảo 100% xe tập lái luôn ở trạng thái tốt nhất, an toàn nhất cho học viên.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
      },
      {
        name: 'Bà Phạm Ngọc Hà',
        role: 'Giám đốc Marketing',
        experience: '12 năm trong lĩnh vực truyền thông',
        description:
          'Chịu trách nhiệm xây dựng thương hiệu và phát triển cộng đồng học viên. Người đồng hành cùng hàng nghìn học viên trên hành trình học lái xe.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
      },
    ],
  },

  certificates: {
    sectionTitle: 'Chứng Chỉ & Công Nhận',
    items: [
      {
        title: 'Chứng nhận Trung tâm đào tạo đạt chuẩn quốc gia',
        issuer: 'Bộ Giao thông Vận tải',
        year: '2015',
        icon: 'FaMedal',
      },
      {
        title: 'ISO 9001:2015 - Hệ thống quản lý chất lượng',
        issuer: 'Bureau Veritas Certification',
        year: '2018',
        icon: 'FaCertificate',
      },
      {
        title: 'Đơn vị xuất sắc trong đào tạo lái xe',
        issuer: 'Sở GTVT Bình Dương',
        year: '2023',
        icon: 'FaTrophy',
      },
      {
        title: 'Top 10 Trung tâm đào tạo lái xe uy tín',
        issuer: 'Vietnam Education Awards',
        year: '2024',
        icon: 'FaStar',
      },
    ],
  },

  facilities: {
    sectionTitle: 'Cơ Sở Vật Chất',
    sectionDescription: 'Trang thiết bị hiện đại, đáp ứng tiêu chuẩn đào tạo quốc gia',
    items: [
      {
        title: 'Sân tập sa hình đạt chuẩn',
        description: 'Sân tập rộng 5.000m², mô phỏng đầy đủ các tình huống giao thông thực tế theo tiêu chuẩn Bộ GTVT.',
        image: 'https://daylaixebienhoa.com.vn/public/userfiles/images/nhap-lieu-v2/cvbst89asdac174.jpg',
      },
      {
        title: 'Cabin mô phỏng VR',
        description: 'Hệ thống cabin lái xe mô phỏng thực tế ảo, giúp học viên làm quen với các tình huống nguy hiểm trong môi trường an toàn.',
        image: 'https://static.luatvietnam.vn/uploaded/Images/Standard/2022/04/29/hoc-lai-xe-o-to-voi-cabin-mo-phong_2904152124.jpg',
      },
      {
        title: 'Phòng học lý thuyết hiện đại',
        description: 'Phòng học trang bị màn hình LED 4K, hệ thống âm thanh chuẩn, điều hòa không khí. Sức chứa 50-100 học viên mỗi phòng.',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIVFRUXFRgaGBgYFxgeFxodHRoXGBgXFhoYHyggGholHR0XITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0vLS8tLy0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4AMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAQIHAP/EAEQQAAIBAgQDBgMEBggGAwEAAAECEQADBBIhMQVBUQYTImFxgTKRoRRCscEHI1Ji0fAVM0NygpKy4RZTc6LC8SQ0Y6P/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QALREAAgIBAwMCBQMFAAAAAAAAAAECEQMSITEEQVETkSIyYXHwFIGxBUKhwfH/2gAMAwEAAhEDEQA/AGeWtSlb5axFSHIilalKIymvC2TyrABgKmW35VOuFY/dPypnwHG4UqyXULMDuCRp8x/JoisTZKxlo7G20znJIWdAd6gFvrtWJsFPX5efr5VoVotrfl/PlWO6rGsFIPWvSaINqte5P/usawd3NDux8vw+utG3Lfl70K4rDoiz+VZkVnLXslAcX8ZX9UYYgyqggndmVAdN9TRq24oPjV1bdsFudy0PfvFP5UaFiiY9krZVrEmtg3lQMZArYCvBvKpFIrBIzWpmpmWsEa1jEOteSt69WMWrgPE8LZt+O1mfmTBn0nakfG8aL10sihVMQo2FLyaxNazDSayKHF4da2F2sAJy6aGi8JamBSo3aIsYsg6GKNgLhgMAGhI0Ilz+709W29Aa341iFmAFECJgUPc4otmxCXUuOx1bUH3HKBpVfuY4vuaexJM9iACf5n2oZ19v55VN3npWs+lCieoh161kOfKpCPKvZPI/KtQLNNen8fevT1Hy2phw/Ad4G/WIkcnJE/SgmmY0NagkVyIoFhTN0ka0GbVK0PFg+WsixOwmdo3qb7PTDh+Ccz3ZZSRvGvPYkafSskUsSYnCk+EqDJ0BJ6azpod9NaGt5kOQOGidDqVHIMdM3LfX13q1f8HXLgP6zU7/ABH1DQ0fOov+CktWyGvW1MGFVZB9QP4mmowisWy0ae341I1ojenvCrxwhPdFT4QPhgQOQHKhcbfa47O0S2//AKpWjWLBbPSs5KMCV7JQCAMNqiNGYi0TsJP1oC7w/EHllHVjH03rGPNejnQ93HqOYqYcCY/FcPooj6t/CibHAEH3JPVpP00FY1i5McGOmvpJoqyjt90j10/3qTF28hyqSAI2iPpW2Dk7k7mlsIcbA6Vo2GHSmXd1nuqwBQcL6/M1p3DDYmnXc142KJhHd7wDQ/ShsPirpGYNbYHn4h5VYWw9C8BwCmwND8dwb/8A6OKrig5ukc/UZY4o6pC8Y65ztofR/wCIqQcQfnZb2YH8xT4cEJ2VveB+Nans637I/wCz+NW9GX090c66nG/PsxQnFAN7dwf4Z/Amt/6YTmWHqjfwo5+BsN1P+U/iDXv6Hn4XB8pYH5Hf2mt6M/Bv1GF/3fyCLxm2f7RffT8akXHWzs6n/EK2fg7dR8/4ioLnAyd1U/5DQ9Oa7BWTE+JL3CTeHL6VFmoN+zwH9mB6CPwNDcOwpNtG1GZVMSeYmpTVcnRjp8MsmFtobbO11Qw2VgST7imVjtHbS2oW1LRrMZfOANx61UxhyOZ+de7o9TSaqK0WDF9o7r6ZoHQaCltzFlt9aWXlcAwfmKNwOHzAE8wK2uzUbK0mirOEZtgfw/GpeFWRLkR8ZGnkAI+lO7NqgYW2uFHmY9KLt8NQcp9aYLbrbJWCLzhBOmgG0ULcS2Ocn5n6VPxvht24JtXRbPMsoIjynQH2qsXuzF9z+txBYedzweyIDRMH4vidm1ozKp/eZR9N/pSW/wBp7FzwLLhvCQqMRB0Mk7j0Bo7C9jbCbkf4Umfdz+VG4bhNvM4GbKuWNeqzrGlBphEd9p5R0HoIEbURwiw5RS65SRJHQnUin6YFF2UCpQlLQSPLXstOHwynef8AMT+M1C2BHJj8l/ICq+mxdQvC17LRbYIjZx7qfxBqFrLjkp9CfzFbQzakQMlT9krMWSQAf114az/zHP51E4I3B+lGdlD+quDpfu/+J/OjG0zn6hKUf3GwT9wb/wDutSn7nXY+n+9TLc/dI9qx3w8/kafY5aydrIcn7h5HcaVqbKsdVbnvyoouK1F0decUydcCSi3vJAL4JCIhvx3/AJ/GoE4Wk/1jn1FNBeU8x/O9Z7wdRVFmmlSYixQ8C+3wxVAmGPUz+E1VeEWf1Fr/AKSf6RV5Zh1FU/gw/wDj2f8ApJ/pFQyycnbO7popXSNXs1C1qmLLULpUTpF123pWbONW3kWZJG2U8tNTP5Gp7ycqW3sATczAsQwEfu7SfptHM700FHuJJvsN8JxVZKgEmSemhJ9951jWmtvHtyVR8z/CqT2cIz3WeVm4QAQZgZVn5n61ZbF4aa3DryXTZjrpt4T8x1qixt70FySG4xVw849hRFgkrJJ586U2rxUGEcmObdFzDc9dPej7/wDV2pbJLrpLa7+Hw7++lUjj3Fckb3H38LGOZiPYk0HcxOseAaZtXEwDqYE6ULcs2hqbttiguk5QpYBzBME6RIk855ULicTZQ3FbvP1Vkq0gAFS0SDqZlo/3q6wXxft+fQm8tcjEYtGYIGklcw0MZeRmIr2BGt0/vgfK2goPAvbN9lVSGt21WcwiIRwIH97fyNMeHjR/+q/0MflXLnjppF4S1GxWsZamK1jLUBwwtWpNaE1gmukRnmNQsa2Y1ExrCgXFcaLYUEEl2yCOpBMnyEUX2YYZL++mIJ03+C0agx2GRwGZQSklSeRykSPYmt+yDf8A2B/+4P8A/GzSPklmr09iwKunxN71goeTH6VuGrwYdRTHDTNSp18X0rGRv2vpW+cdRXiw6iiCzTKeo8tKwUP7vyqTN51jMOtYZEWU9F38/p7VVOCf/Xs/9JP9Iq3k1T+Bn/49n/pJ/pFSmdnT9wwitGWtzWDUzqBMQAASdI60XYw8qBy0qtdu8Kj2U7wAqHmDOpykDQETAzc+lN+zdzJgLbLLRYlQJJ+GVA110gChe9BcdrJL1vKygAfCJ1I+8vTymt0Vz91fcP8Ast+cfXyqa1NyG0G2lHWcKeo+tdMZUiTiCCw+oBUaNHh6qAN/OaNxTQLINsv4gdDGUj7x677eVEJhj1FbrfAERtpTrJvuBw8Ct7wKx9nWGRmI0iQTCmANyB860v3G8RWwhJthuUlpHhbbbeZ5U2OJHQ1E+KHQ03qrx/IPTfkV4V7xuvnUBMoywNZhJkzrrm+Qovho8BPV7h+btXnxQ6VvwwfqUPUT89a58stVFYKiQisRUhFaxURzW20qD5D8K1JpRje0OGwtm29+8qBgAN2J0GyoCT8qKwHErV9O8s3FuL1Uzr0PMHyNdCZNoLJqNjWSajd9KIDNzY+h/Coeyjf1/m9s/O2o/Kqrd/SPghcyZnZZINwL4B5xOYjzANP+y2JUG5LCCtkjXQ6NqPlSt7ksqehlpVtPu1mdD8Mj+f4UJ9rt/tL9a2GPtftD/Kf4UdjlUZ/UKI/ufz/IrS4CTI7vlvUP9I2uv/af4Vj+krXX/tP8KZSoHpy8BKySfgiOW/v5TWTb8l/mKE/pO31P+WsHilvqflQcrGWOXgKC+Q3qqcDP/wAez/0k/wBIqwDiSefyrknFe3T4MWbKWlbLZtls06ygMLG2nPX0qctzpwxauzo5NaXHgUPgsYLtpLq7OisPRgDB+dVPtX2wtW7bJYcXbrHLCGcvUyPwHWkXJcsV6xbxFsB/FO/sddPaK0wGKW3dFpZI+8CdpmP502pB2L481zDnvE7sqYBIYBwR8Wp3nMDBoHjPGhhyLgJIDgtEeIErCzy2b5neDXVOUdN+SUIybrwdDtYgBiPMemwFFpcXWc+/U9Y69a5x2O7cDE3jZayFYgshBkGAJGokaCfaug2sWDOZWULuxIA6zIMx6xUkWSsZYfGg8juB86UYrE3g7ZVt5ZGWT4tfikSKVYDt/gHvLYS42Z2Cqcpyk7CDyknSRzrbEm53jlcUyjOhy5UIUAQyidfFpqduVYAS1y6MsYdDNyDDqMq/tjXU76VDdxF1VdhhJZXhFFweJdfFMactPOvXRfMkXQf1srKrATXwiAZ5anpWmIa/lYr3JfP4c2YCNd/Pb5Gsagn7Y/elDaIQJmz5tJ08MR66zyp9gFi1bH7i/gKrdy4+a5mCwEMEb7DzM6zyHKrTbEKB5D8KnMZGJEgczP03rQONNd6oHHf0pWLN427dp7yoYa4rhQTscg1zRtJjn61auAcVsY20t+w7FASIOhBHJh1j8aRphTOA4y3YFtVUXM0yH0ygakpE6jn7z1Bt/wChmy4xF4ljlNmMusEh1yt7eID1NUPDXZOWNHIBHrsR5zXZuyfDreHtMhSCToyuZK8pnfUk69arTXAtruW9zG+nrS/iipdtXLfeBc6MsjWMwImB60qfCszRbLHSfFCsPXafUUs43ifssB4LsCVEzoOZjlS+pctK5Np2s5DxDAth7jW7mrKSAAdDro09Dy9au/YjtktnNbxAyqLQCMNdLeYhI5khjB8gKVcRwhxmJDnMZWPAASI28MSViRPKpcV2TcYdn1DAoFDQCZYAg/Oi3TphUbVoPx/6ScQz/qLdtEB0D+It/eIiPQfOrn2T7UW8aCAMl1RLJM6bFkPNZj0kVxG9aZGKkEEGrP8AozsrcxsXFzKbT7jQGVj8KN7WLXY7MzAbkD1NQtjLQ3uIPVl/jWF4PZG1tfkKkHD7YPw/U0uoFEQ4hZO122f8a/xrH2+1/wAxP8wok4ROn1NCXDbW5kNnP4M3hyyNY1B39qDnXYNG39JWh94+ysfwFcy/SFh7PcYdpPfrbRGA+7Cz4zyOwg/lXRrXFrOUOMFfKkBgVCAREz4iNI1rl4sPdW6Lh0zhl8Dt45loUCTMsOggbSJaDUlb2Nuh9h+04u8PNpU7l/s7IpBOUQpUFdJAIG/nVBscMvW7y5gEKMplthBBiD+G1WNbQt2yZulVAAFywbfhzZgqyzZgNR/i9KWYvi7XmLMQSTrp9KaK1PbgL2W50LBcXt3dHKOvJWA0/wAJ0Pypdxnh1u4yp3ZZHMmB4bZWSCdZAOsRPMVSVuRzqyC5dOE74BSqMbTMXAILZHEKyEbDedIMxNNkx0tjY95JFKx1w27rongCuQIOuhInMNTXRuyHaD7TgzhMR31wvntrcUEmCIEs2mYSYk9BS7B9l/tyLcZWtwAuaN40MRMjnPnWvEOz74LKqM5XXKwUTmJ2JyFg3oQNN6isnY6Fgdtvj8+xXL+KsYe/+pSXtP4bmoGZDIYKNdCBz+dWLhH6QCWjEWUYMfFctrDjzKj4o9QdOdVDjvBfs3dg3UdnU5lVlJtsCAUeCddd6Fa6FhV9z1/2p4pJHNJuzs2MfCd1exFru7sWwpNtyWPwqoYqZ6eelc+4X2mxAuqTecqpgpPhCnRtP2hJIPI1XrGKIIyzmOmkyfKOfLTyq48T4YbtpLiWhbvGC4n4uo3I31ip5JaSuKGu65Ohqh/WOLrOrhAo0yjQCVI3mpO0P6QcHhnNo57zDRxbCkLyKsSQCfIT51R+yeOuC1cwolCAxTMCApO+vTOc3vVLwFl7dw5ll0JkEExBgn/egskZfsGWKUa+o94nwLD3nuNh3jO7OgOgCmDlK8tSfTTlV8/ReLWGwrWWvWjea4zsobUfCo330AOnWqRwrDXb7FbbEFtSNQpI2JPLTT3priOzGIEAZLpI1h1GU9DnIn1FWwYozW8vz7nL1GScH8MPz7FZ7I8JV71rvVMllZV1iAZzH5T7V0vEKV2Y/wA+lUt+1Zz95bw9q22XLoXIiZ+EkfMRWjdrr5IkJHMZYn3nSnxNx+Y6cnTylwWo4rxBW1B0In3Ug8jIqh9obiK7ZL1y6Bu1yc2YEyvKBVmx7G7hxdVYzAssjSUbX1hhFAWuCW7gOJuMWCFS65ZDTIBJJ2mBrMxzmnyJfMc8bXwsI7KYrurRcwO81ExOUba8gd6uQ4RdxFjMsAOsrmJBPNTBG0xVEwXFh9oQgLAdA0iRDMEjp97T0rq9jGkiPlr7wPaoyfYePkqOB/R7bNzNi7S3FKDUXbiw0sWByxMSOfXat7fZ/CYfEtYw39a6y9vOWZVHQkyoM8z0ovtr2q+y2MqEPdu+G2Nz/fI3kbRzJAqr8JwfE8JdQrZLNeOa4e7uE7Tlu3I8IBJJjc7E8ljsGTtnR8F3hQd4jKw3kfWRofapTRlvGMqiROm+wPoNSPQ60mWx3ly5rpmkabSASD7zUcupK4qwxS7g/aHj1rB2u8uGZMKoiSfc1zfj3bW9eabMWvBl0aWIJmJjfSvfpestbxFoZjlNqQOhDGSPM6fKqErmqY03G3yLLnYfYLj2IylRfuRGUrnMREQvTTlVq4H22xIZbQI1kSddgSDqJI0Gk9TXPFuAbe/8aK4febvEyzOYRG++vtvTyhGSpoCbQ+452xfFEJeJhSRKqs8/SRMc9N6nwnAcTirYuIB3aIiKzFAAqzAbINCJ+94us1jh3BEt2vtJYPmuOjKVhrZGvUyCCDOmhFF8U4mcKlu5YJQsCAUMCSZLGNzp1GtCFR2gFvyPrPYBAFC91iXZZ0vup88oXKsf4mNGcN7PjCMTdtIGBDKud3A38UOxAflI1AG+tV3s9xa5i3t3LjZGN0pmQayqBgwA2J233POasGNc27bC47O3iJJ3MzHvEVOcpN07OvBCPzFhTGZ/hgn+dd9RWl3GFdLiiD5ae8zpXPeI9oreHRf1fe3IAGb4R7kGeemnqOcI7ZY8qAttYIHw2rhj5uRPoKTQy76mKdFj4l2ZwV4fCLShiSAQvi5j01nTTWq3xXsnhhcQ2XDqAe8BfMB0gqQcx6Tyr3EcPiXVblzKoZmzSqlgoA8QPxKdCMoPSYrR7wt2wgbp8RksxEmT1/IAU0Mcm9Wrbwc05xfEaCeG8Cw1tgyhswGhZp94imdhSswwOsEMWjy1nn58+dI8Pf8AOm+GuAjXYiD+R/nrXSSTrgbWbgMiBmHl7x50mu8Me9iC5NtbYAllI7zbYr1JB1PTnRmHWOeo09dZHvr+NB27VnDFhbPiY5mB00MkKusQNvn7QeKGvUUeaenSWjhAw9n+pQqTEkkyfXWB6AU5XEBtgJ9K5rY48xulVUhV0Jidf2RO59OtWjh+LLakR7fjB0/nSrrZbHO3YPgf0YJ/a4hyeYtqqj2LZvwpuv6PMCFMrcbTc3G/8Yq123BrOIEqR1FR1Mu5y8lZGEtYjCd0oCG2hCgSRAGoXnqB84rkXGsX3fgs3rj2yqkufCG5bAkkAyNeYOlWKxx27aOSYQ8xuR0J/GrT2b4Xg79slrFpmBMyoM5jmmDpqR81pH1GnZgWHVuc27IWVv3bneeILbkDqcy66dI+tdNscVVLDXXbKFtkk9GUSB68q34xwWzbtM1i1btECT3aKpI5jwjX/aua4vEXMVcXCKSLfeS7epAg6RprHmfKjGevcEo6NiydjcLcxmJbiOJyQJFlXJCyNJG4CrrvuxJ5VfXxFofHadf7r5rXrzge1Q8MK2kVIKIoCgpOURyuW+X95fWKPazlGdMpU/eUyv01FPyIDmw8Shtqp1+J2HrOYAH0E0J2ex83mBYkvmkGdIJjU76D60l47xi6uJsJaWP1g7wAkghiE8WgiAWOvMAzG4Vni4tYh0YOct19EBz6MdVPTz86ElSNyb/pr4cGs2b43Rih9G1+hH1rjprvHaG8cbgLrhMiaQSZaQ4BJXKAvWZ9q5Bxbg5V5QSp+lLjydmFw2tCcGnnZOwbmIHRFdz7KR+JFLPsL/smr92U4J3OGa82rXbbgx9wA6A689fkKo5oTSywXrNpbd1LdqBA0ZyTmEMTz1IyDcVV+M4JWw6pqIgnKoJEsfu6SfEJ1nQ1dMQSiFozjSdBPIT7b+1VMXUZUZriLKuY1YfGzPqP2QJPpoaSDo1CHDW3s4VcjwwxWZWIIggW4kETyqy/b++QnMFA0YCTqQDAmND5xsZ2pRxJluYVTbaR3hOYgqdMuoBOp51nhhAtMohbt227gMTnJSQjAmIEq8gn+0mma1FMeRxGnDZS4z2zlJVidZkKpyrryEDWnvDe1ts+G8itOm5U7a7GDVG4GcR34F0OBku7hgP6txz0O9C4i5cdhFplYZwWAEsDpsFHTcyfOmfR296vyP69fKPu1HEPGQmbJMoDyGmgpLYNl9cVdISCypbXM5bxCGOmWNDqTMxR+L0wdk5guXvFkgEAZtvLpPKkN/h/e5yrA5E0ifE3xEqNfujL60a0qiLk2G8Ms5VEmSRr09qa2rtKeFo4thXBDKYg7xy+lFkxRGGgxUUu47eaLV1CAysVJKg/vKYOhght+tRyzEKASxMADcmrXwzg1sLluBbzc1OtsHbQTL89TA8jvQklW4LfYqPC+IX77tdu3WOoBO0kA/swDoAJPSrhgrrAA6lepGk+v8TQPGXTCg92lu3AnS1bBB8iFmaA4BZuXYv3rrvqcoZmOpjQSdlGnqT0oRarZAfIf2T7aXMI/wBkxwZQpyq7bp0D/tJ0YfUajpn20MhIMiJBHpOnWuV8Z4jhcVl71WuFdiq5GjpJMkeU15ONrhUCWbLZOQa9dgewbbnAik1RGplf4pxhbrFhlUHUguDB8o2pjwPieIsQ9kA5xCkwQQWRee3iKjXrRf8AxHcy5RZwypvl7hCuvWZn3mh/tgYQFW2QVKoghP6220qs6GV2GkUmmD2/kbXLmyTtLxziNkKbzlVuZhC5dNNsyaT0HkaW9jsbkvZUbKGA1gbiZUgjVSDPMCKL7TYLG4nKqWr9xBqQbcLm2BBAHImtez/Y3GpiUuvZyora5nTUEEEQpJo68cVu0gaZyfDZc+B9rLd3ZUaDEBsjwJ1yyVYaHYDanK8VtIxgC0SJnvcs+RR0k/KKR3ezBS896xkDMqhS8nIQCCyqBGaIEzy86oPFOG4hr9xGW4SpJLAs0jkxGwB0NLHPCTqLGeKUVckXK4uF+0jEveZritmCi6GGgIjKltTGs78qNt9o+7dlUs7X2NwgKBAgKN5IWAB1qLsz2es90Cucz8SuRIPMHTbX61YcN2etgtcFsTHiaJMDqelc0+t30pP2/wClo9NtboTX+KOlh7aKAmRv1aiZ0MqMxJk1XDbGsAttspJEnKJA2167VZuMOXYWrZKIQwmCruwWSuWA4AHQanfQao8VhoWCzIhVTFy53QKO8kqlsySrcj5124unlkSlk2OeeVQbUNyAYNxqyqigtOdlHwEBhEzOs7bA1b8Fh1u4bu1bZchKg78yMwE/Kqlawo8RRHuH9b/V2QFlSJ8d3cMm+9O7ON7t4JUasADcuXLpIHeDwoQJKMfUqK6P00aqPJF5pPkZY7DMylZA2kwdROo3qoWOzpthLch+6VjtE94X5a8pFXtcWCpLW2jqwFsaRJGZy2oIIBH3hvyEODBdriXA6sAsDVRlmYYASddalLFLGrCpKRScVwmURVBEOXEsTyAGp3Gu1Jbrn+kV0JQZbYIGgEBJOnmSfWrzftBLiW833Mok+LkfcwDQ/wDQ1oXe87szz1b6LOUUljUJeFTJ1MBHkawDlj863tYFTIggSJ8zy/E/OmxVRauEIQQCCxywdYJABnXzFDYPiAI/V920EzqTB89P5ig+DUI+P4iMGkf8y4uupgO6nf0qrW8XcHwuw5aGB05Vb+2VsnDIQB8TMcu3xOWMfU1RQ5q0WqEZYuzdu/fu92vimCWY+FFG7sd+ggCTyroOG4Jh7aiU7xubXNj/AHbY0A/vFvyqncOu/YMMtw2i9y9JI1ARNQCxA06D/FTFeP4vuO+CWoC5ykHMLZJAbfXZjy0E0knJ/LsOvqWYYUAyiW0/u2rK+sEJNex18IhLEkDkSY9ANqpZ7b3L2W3atAXG0LHUDnIGvrr02oJ+IIl4M73MReU/ejIrAx8O2hjY8thvQWOcuWFyRLxm+bNy0pKl0TxgRoxZj7GCF57UVY4ujgAABgp1ZWJAGrMSGy8yddyfOkvE4e07R4xcVtfiIeQ4nn48rR++alw+Ethe4uM63rgBJUKQN2S28mY2Jj93pTtOOzEuy64PsKojPeZj+6oUfUtTW32Pw5jMHeP2nP8A4xVjRKnRK8D1skuZHsrDjXYT4Xsxhl/sU91k/Npp9gsMqCEUL6AD8Kyoqe3Ri2+WZpLhE1u0GOViRI/mK2bhSD7pPmTH0j86hu3lUeJgscyQI85NR2e0mFhs9+yCsSc6xrMHU689NY+RMsyndrc58jkt0wu1YVNlX2Gv+/zpdxbszYxDZ7ieKIJ11Ez4wCM3v70u4j+kXA2/gZrp/cRo+bQPrVb4j+lK6dLFgLOgNwyfYCB9TWx9P1DdxTX+CGrvZdWw+D4ekWrKMxhiAsDUquYqgJJ8oJ0pRxXjN24e7a7klrtvIHFs7ZkJRM7kwOqk1XuI4x2Oa4zXT8DKqrmBKgORyCsMsREMWra7ddFZjdNoRYuEWwltQ3wzLEsRG8V9R0+KOOK2V9zjyTlJ8m2MuNkNzK0MqXiWIw6Shy3JGtw6byaBBSSlt7fxOg7mx3hy3BnQm62/i0miMMtnvNFV/wBe6EhXutDpI8TwsE8ooPE418i6EeBATcuBRNu+qE5bUcjt0q7ZKjW5eYwb1qZNtib9+F8Sm2/gQa6gfTetMLimCiHKqqBiuHti2v6qVuAu2uaCNdJoM3GIcpyF8/qrfIXwT4rmhjrUl9PGVfL/AF15SHcu3jt5x4E0pbGoc4LEW1bRQ7qY0m7cJVFdfE3hUsnyKCm/DceXuZJGUAgAa6r1YaDn4R0NVLDX2AVmzZcuHbxRatzJttoPEdDFWXsxgyztcLaKCoj4ZaC0CNIj18eu1Tyy+B2GC3G2JwCMczIpYDRoGb2O9B3cKOv506FqoXtDnXBZ0FH47c7uxiNNcwA/xZIJ6CSflVJbDXEud7aKgQNQ0DYSpBjQma6J2vwMWbrIrMz5AQNR4TvHLSdRXOeN6XSo0GRDHLnM01sKLOzG7YsNGWVb03IYDrv9RQn2b7GqtbVe9uSxcici7KqdCdSfX0ojhcumFQQbRBa5m5IuclpGobYSOvTSiMXie9t3C0Gcty3G4WQsEfs5OfUHpXdhni1Ri4/f/X59CMk92Vt3ZnNxnbvD9/MZ9NNh5DSicNjGW73rjPK5GiPEkZShX4SIjSBWwtiskgdK9aeHFJU0iKbXcD4bgshY2srNlEeLKx8QOUB410nwk8tdTG93ggtvlzIFnwszDVTqpIGoJBB1isveSRBGYbVJi+8GU5SBlA8QOsaCQ3y16VwdRKWLeLW/uUjUuSe3w5VIlyX3GgVSRqAJJLAxyPyqu8Nt3mvBu7ZnZjM6Ak76nnrNWDA3wCIMEdBp56Hr86kOGNskqzSLrMpAEBXMmdyWA1G3L38+WWUt5FNNcF+v9rMMn3mb0WP9RFAX+3q/ctT5lj+CjX51yR+J3DsVX0A/OtE7y5uXYeWY/hXPH+mxXzM6ZdZJ8I6Ri+31/wC73aewn/uLfhS3/ifE39BiG9mYDcD7sTuKrmD4Y2+XJp9/T6AE/OKZYIC0cgfMu5IgazEwCfKrS6bBBfDuyfr5JcsJvByRmcknn0996D4j4QCJJgkk6wARtPlmPtTO4UY6Bj70r44sI3hICqJgjQEkE+eh2pYpLgVtvkT8Te6txlzMFzGOWnqK37P25xNtmaQkuZM/CC0+kgE+QNLrl9rrksSAxBaAYAGkx5CuhcG4basLFsm4SwhtJywGMDrlzeHnrXQpraNCaW02TYrG5FKnQgnrOVAJWR8SG6dxtm+WmIxYb4VVDcwxgd2XeVYMpk9Q0g9DS7GMMh1XSyCQrgDPdedUfVfY86g4djWYlYLBbrqpkx4wwgsCABIAEnXSAapdMnQ2xPFmuO0P97DPlZwmpIB8K/nWc8k92q6d6f1aF2g30nxtpyNA4NwuRGJLh7auAttjFsZpUDlmJ1jXSmFlrhQBcPinm3dRi4NtCGaVgkKp6702pd2Cg98GA2RxvdvWybt3SLo7weFfOK2s6LnE/Bbu/q7YQTbOS6GdueWoLKYkk5bVm1JtGVhmzJu8jMBO2vSsv2Ze+ZxF244ljlzBU8RzHwrJPLmNqV54IKg2AY7G2UY2rYD3CLtsZZu3IJFy2QTpI20BrpPZ6yTh1n4iWYgghhmZjDZgDPmQPSq/gOE2rCkW1W2I8RXw6ebfERHUmvdn8UP6Qa1bTREEsJ3Orq3UQVMdVPtzZMuvYrGFFodDWht0yvWZoO5ZqI9AboK5z2s7I3GuPct6hoAhSYG8EAEjXmBXT2t1BdAAJPKsnRqOaYjDXbeAFtLbNddRbIgjKg/rD4oMMdK04RgLqgXLkqws93lnVgNQSRsZnmeVXn7BcfxG5lDagKozARoCzT66Ab0Nf4VbHiliwmCzEmfQ7D0im1Ao5xh8fduhmOCDLJOZWa1E66mch9SKbYfAoyz3C5yBAZzcGm5+LKTM7AU9xFq2tpXeNgoMgHNtlHvWLaZAJE9eg8o8qd5p1Vv3BpQrsYS4ioAVVgGnIoQb9F20IHtW+J4fnCZpBVmjXynWdxoabFxKNP3og6RIK6H1IqfHIFCsBoHWfITB+k0lhK2OFoN2J8gAB84/KphhJYwY0EDXlpvz2HzqynAo+kwTQ78M7u4nRiV68pGm42AoWajlg0ggKBpOVRoPeTPvTkXwcpXWBuP94FWWzw/Cr8GGHq5Yn5HKKYYeV+EJb6ZFCn8D+NPce7M9+BBw7g2IvmEsXW9Br/D61jF9m8UjwcNdGwjKSdCSdtzVjXNmzZ2kbEMZ+UwK0N9hrnYep094ihrj4NRXsKIBEEEaa7/LlVd7ROzBtDAIneNNIPKf41aeP4Rb6+JmV4OQzIJAJyg7qYkxJBjlyrnBR3tru31JzayDOg35g6jeivKAVvA4x7Lh0MMPw5g10LCYzvrCAjKXUCGMBi5iVI+Eqocg7Q4Fc5v2ijFWEFSQfar9grwKKf3RHy0oyyem1KgxjrVWa8RFy64S2GZrl0lR+qIC2xAOYiQAdZOlH8P7MWrS5bh7+4dWksLIbecog3CJ+98qh7PsFNxxpLd2NgAoAZo8pI96bWuJ2lmXVt4CAsRG/wAMyaMsrl8oulLkPwNk2RFtsgPJIUfJYBoiJMnU9SdaT3uO2wNEun4dckfEYX4yp1NQHtQswLF4xm27snw/FoH5VP05vsG0WOyviBB11EfnUuKxdu0M1xgo8zv5Ac6rL8fvHw27Qta6tcZSwhc5IQeUc9ztQljDZmGfM9xiqksdSWFpcuvwgm5AXQTGnOnjhfcDmuxc8TcCorXHtWUZcym7LOw0graTUjUbkRppUn6OMAP12JBLq9xu7ciMyyfEByBMxqdCKX9hMBaxV/E3byW7xsMli3mVWChZJKAjSXz6geldFAiANB05UkqWwy3IriVA60WRQ9+1zFIMCMtJeNYsBktEMA5MtlJUBYJDEaAnlPnTthQ9+3IosAve4CN/lS7EJ5U0bDxtURscj/PtQMVxMODmUwcrnQx5MDr67+VSNbQbk+wJP/d/PrRa2SLrqBMhW8+YP5fOpY8vz/CiYAfDjKSEnSdSfXlEUS+HN2wZOhSVA5aSNdz7zU/2QMIMgHoY/CiOEcMWzbW0pJRRAnUx0mtZgjh9tbltHicygnyJGo+dexvCUuZJzrkdXGViBK7SNo8q14AMqMh3t3HWffMPowpqr0AnNsM3h9OVFW2nrVFftiw+C0oPViW+mlJ8dxi9d+N2I6TC/wCUQPpVVi8sTUdLxfHcNaHjurPRZY/JZj3pDje2trUJbd/MkAfnVEJ616aZY4oGplssdp2vXrKm2qAXBqCTyKga+v0qTs1hO7a8SCPGVA8hsR86qFsmRB1kR68qvnCnlFYmSQCZ3nKJHzmhJVwZbiHtfgofvQIDAZvXUA+4H086j4RxS4V7sW85C+EjkNvF5VacTaF3wMJDKR/v7b1VsHgms9+jKc0ZRHOQxzL101FDaSphtp7E3E8UFFm0zagFnI2BY8/LSflTbCWkVQAVIC3ipJbUABZgECZ9KozCirfEroXIHOXKVg6wCZgTtr0q0fh2Easvdu0JUaA5sONAgnKM3PO1eklBM+JG0M/2t2Bo2UbfumqgOPuPhUA5s05nP3csatQb8Sun+0caAaMRtttTahdJesbjFQHOwAJuRJABBvQRBEnwqPhUaUBg+04GJS5bXw2u9IYzJdhcCHXXICyEg6nJyqmQSaZcOtRvsapDG5/Yz2O29k+E/YThYOl6wVuknU3C63LbGNzFx1meQ86vFcX4J2gdbNnDtJ7m8HtsN8uVwbbeQLAjyEchXYj6zXJmxuEqZWLTWxIzRWubpWKxNRHI7lvnUBT+TRlaOk1jC26selQtammTW53qP7KKBit4u1lv2zE5gy6+gYH/ALfrTNMIWr3GeD3LpstbuhO7vK7ArOdRum+k9abqtEFCy3w0c6k+xxsxH4UwisZawaEXDOGXLV2+7Xc63WVlXLGQgQ2s+KdOm1MitE5KzlitYT//2Q==',
      },
      {
        title: 'Đội xe đời mới',
        description: 'Hơn 120 xe tập lái các hạng B1, B2, C, D đời mới nhất. Xe được bảo dưỡng định kỳ, trang bị đầy đủ thiết bị an toàn.',
        image: 'data:image/jpeg;base64,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',
      },
    ],
  },

  testimonials: {
    sectionTitle: 'Học Viên Nói Gì Về Chúng Tôi',
    items: [
      {
        name: 'Nguyễn Hoàng Anh',
        course: 'Học viên khóa B2',
        rating: 5,
        content:
          'Thầy dạy rất nhiệt tình, dễ hiểu. Cơ sở vật chất tốt, xe tập lái đời mới. Mình đã thi đỗ ngay lần đầu. Rất cảm ơn Trung tâm GDNN Phú Giáo!',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
      },
      {
        name: 'Trần Minh Châu',
        course: 'Học viên khóa C',
        rating: 5,
        content:
          'Lúc đầu mình khá lo lắng vì chưa có kinh nghiệm lái xe. Nhưng các thầy cô ở đây rất kiên nhẫn, chỉ dạy từng bước. Sau 4 tháng, mình đã tự tin cầm vô lăng xe tải!',
        avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=150&auto=format&fit=crop',
      },
      {
        name: 'Lê Thị Phương',
        course: 'Học viên khóa B1',
        rating: 5,
        content:
          'Học phí hợp lý, môi trường học thân thiện. Đặc biệt ấn tượng với hệ thống cabin VR - cảm giác thực tế như lái xe thật. Sẽ giới thiệu cho bạn bè!',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
      },
      {
        name: 'Phạm Quốc Bảo',
        course: 'Học viên khóa D',
        rating: 5,
        content:
          'Công ty tôi đã cho 20 nhân viên học tại đây, tất cả đều thi đỗ. Sẽ tiếp tục hợp tác với Trung tâm cho các khóa tiếp theo. Rất chuyên nghiệp!',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
      },
    ],
  },

  ctaBanner: {
    title: 'Sẵn sàng bắt đầu hành trình của bạn?',
    description:
      'Đăng ký tư vấn miễn phí ngay hôm nay. Chúng tôi sẽ giúp bạn chọn khóa học phù hợp nhất và tư vấn lộ trình học tập tối ưu.',
    primaryBtn: 'Đăng ký tư vấn ngay',
    secondaryBtn: 'Xem các khóa học',
    phone: '1900 1234',
  },
};
