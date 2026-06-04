import { ServiceDetail, QuickTutorialSlide } from '../types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'khai-sinh',
    name: 'Đăng ký khai sinh',
    description: 'Thủ tục đăng ký khai sinh trực tuyến liên thông để cấp giấy khai sinh, đăng ký cư trú và cấp thẻ bảo hiểm y tế miễn phí cho trẻ sơ sinh.',
    checklist: [
      'Giấy chứng sinh bản gốc (do bệnh viện, cơ sở y tế cấp hoặc chụp ảnh rõ nét)',
      'Giấy chứng nhận kết hôn của cha mẹ (ảnh chụp bản gốc hoặc bản sao có chứng thực)',
      'Thông tin định danh cá nhân/Căn cước công dân của cha và mẹ để xác thực dữ liệu'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Đăng nhập Cổng Dịch vụ công',
        description: 'Truy cập Cổng Dịch vụ công Quốc gia hoặc của tỉnh Quảng Ngãi, đăng nhập bằng tài khoản VNeID định danh cấp độ 2.'
      },
      {
        stepNumber: 2,
        title: 'Chọn Dịch vụ liên thông',
        description: 'Tìm kiếm từ khóa "Khai sinh liên thông", chọn thủ tục "Đăng ký khai sinh, đăng ký cư trú và cấp thẻ bảo hiểm y tế cho trẻ dưới 6 tuổi".'
      },
      {
        stepNumber: 3,
        title: 'Kê khai thông tin tờ khai',
        description: 'Nhập chính xác họ tên dự định đặt cho con, ngày giờ sinh, nơi sinh và điền đầy đủ thông tin nhân thân của cha và mẹ.'
      },
      {
        stepNumber: 4,
        title: 'Đính kèm hồ sơ chứng minh',
        description: 'Chụp hình phẳng, không lóa sáng Giấy chứng sinh bản gốc, Giấy chứng nhận kết hôn và tải lên hệ thống đúng vị trí.'
      },
      {
        stepNumber: 5,
        title: 'Phê duyệt & Nhận kết quả tại nhà',
        description: 'Cán bộ hộ tịch xã Dục Nông thẩm định hồ sơ trực tuyến. Kết quả bản giấy sẽ được bưu điện chuyển phát trực tiếp về tận nhà bạn.'
      }
    ],
    duration: 'Trong vòng 1 ngày làm việc (ngay sau khi tiếp nhận hồ sơ đúng và đủ)',
    fee: 'Miễn phí hoàn toàn cho mọi công dân',
    category: 'Hộ tịch',
    iconName: 'Baby',
    videoUrl: 'https://www.youtube.com/embed/F885rifEq7U'
  },
  {
    id: 'ket-hon',
    name: 'Đăng ký kết hôn',
    description: 'Nộp hồ sơ trực tuyến chuẩn bị thủ tục kết hôn cho nam nữ đủ tuổi pháp luật, giúp tiết kiệm thời gian kê khai trực tiếp tại xã.',
    checklist: [
      'Ảnh chụp hai mặt Căn cước công dân của cả hai bên nam và nữ',
      'Giấy xác nhận tình trạng hôn nhân/độc thân (nếu một trong hai bên cư trú ở ngoài xã Dục Nông)',
      'Quyết định hoặc bản án ly hôn của Tòa án có hiệu lực pháp luật (nếu thuộc trường hợp đã từng ly hôn)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Đăng nhập hệ thống một bên',
        description: 'Vợ hoặc Chồng tương lai đăng nhập vào Cổng Dịch vụ công tỉnh Quảng Ngãi bằng VNeID định danh điện tử cấp 2.'
      },
      {
        stepNumber: 2,
        title: 'Điền thông tin hai bên',
        description: 'Chọn dịch vụ "Đăng ký kết hôn", hoàn tất thông tin cá nhân của cả bên nam và bên nữ chính xác theo Căn cước công dân.'
      },
      {
        stepNumber: 3,
        title: 'Đính kèm giấy xác nhận độc thân',
        description: 'Nếu vợ hoặc chồng ở địa phương khác, thực hiện tải ảnh chụp bản gốc Giấy xác nhận tình trạng hôn nhân lên hệ thống.'
      },
      {
        stepNumber: 4,
        title: 'UBND Xã thẩm định hồ sơ',
        description: 'Công chức Tư pháp - Hộ tịch xã Dục Nông đối chiếu cơ sở dữ liệu dân cư quốc gia để thẩm định tính pháp lý trực tuyến.'
      },
      {
        stepNumber: 5,
        title: 'Ký trực tiếp & nhận Giấy kết hôn',
        description: 'Nhận lịch hẹn qua điện thoại, cả hai vợ chồng mang Căn cước gốc đến UBND Xã để ký trực tiếp vào Sổ hộ tịch và nhận ngay 2 bản Giấy kết hôn gốc.'
      }
    ],
    duration: 'Xử lý trong ngày làm việc (sau khi nộp đầy đủ hồ sơ trực tuyến và ký trực tiếp)',
    fee: 'Miễn phí hoàn toàn đối với công dân Việt Nam đăng ký trong nước',
    category: 'Hộ tịch',
    iconName: 'Heart',
    videoUrl: 'https://www.youtube.com/embed/x_-gWKYVAwM'
  },
  {
    id: 'khai-tu',
    name: 'Đăng ký khai tử',
    description: 'Thủ tục đăng ký khai tử trực tuyến, liên thông xóa đăng ký thường trú và giải quyết chế độ tử tuất/hỗ trợ chi phí mai táng.',
    checklist: [
      'Giấy báo tử bản gốc hoặc giấy tờ thay thế Giấy báo tử (do bệnh viện, cơ quan công an hoặc UBND cấp có thẩm quyền cấp)',
      'Thông tin Căn cước công dân/số định danh cá nhân của người đã mất',
      'Giấy tờ hoặc ảnh chụp chứng minh quan hệ gia đình (nếu là người thân đi khai tử thay)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Đăng nhập cổng Dịch vụ công',
        description: 'Người đi đăng ký khai tử đăng nhập Cổng Dịch vụ công Quốc gia sử dụng định danh điện tử VNeID cấp 2.'
      },
      {
        stepNumber: 2,
        title: 'Chọn thủ tục liên thông',
        description: 'Tìm kiếm tục "Đăng ký khai tử liên thông", chọn gói dịch vụ liên thông xóa thường trú và hỗ trợ chi phí mai táng.'
      },
      {
        stepNumber: 3,
        title: 'Kê khai thông tin người mất',
        description: 'Điền chi tiết thông tin của người đi khai tử và thông tin cá nhân, ngày giờ chết, nguyên nhân chết của người đã khuất.'
      },
      {
        stepNumber: 4,
        title: 'Tải tài liệu Giấy báo tử',
        description: 'Dùng máy ảnh điện thoại chụp cận cảnh, sắc nét Giấy báo tử bản gốc rồi đính kèm lên hệ thống cổng thông tin.'
      },
      {
        stepNumber: 5,
        title: 'Xác nhận phê duyệt & Trả giấy',
        description: 'Cán bộ hộ tịch xã Dục Nông kiểm tra, cập nhật trạng thái dân cư và ký số. Giấy chứng tử gốc được gửi về nhà hoặc nhận trực tiếp.'
      }
    ],
    duration: 'Trong vòng 1 ngày làm việc (sau khi nhận đủ hồ sơ trực tuyến hợp lệ)',
    fee: 'Miễn phí hoàn toàn',
    category: 'Hộ tịch',
    iconName: 'UserMinus',
    videoUrl: 'https://www.youtube.com/embed/SOlYf73kVVs'
  },
  {
    id: 'can-cuoc-duoi-14',
    name: 'Cấp thẻ căn cước (dưới 14 tuổi)',
    description: 'Thực hiện đăng ký thủ tục cấp thẻ căn cước lần đầu cho trẻ em từ 0 đến dưới 14 tuổi trực tuyến tiện lợi thông qua đại diện hợp pháp.',
    checklist: [
      'Tài khoản định danh điện tử VNeID của cha, mẹ hoặc người đại diện hợp pháp của trẻ',
      'Thông tin số định danh cá nhân của bé dưới 14 tuổi (đã được cấp giấy khai sinh)',
      'Trực tiếp đưa trẻ từ 6 đến dưới 14 tuổi tới Công an huyện để thu nhận ảnh chân dung, mống mắt và vân tay'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Đăng nhập VNeID người đại diện',
        description: 'Cha, mẹ hoặc người giám hộ hợp pháp đăng nhập ứng dụng VNeID trên điện thoại cá nhân (đạt mức độ 2).'
      },
      {
        stepNumber: 2,
        title: 'Khởi tạo hồ sơ cấp thẻ căn cước',
        description: 'Vào phần "Thủ tục hành chính", chọn "Cấp thẻ căn cước" và chọn đối tượng là người dưới 14 tuổi, nhập số định danh của con.'
      },
      {
        stepNumber: 3,
        title: 'Thực hiện đối với trẻ dưới 6 tuổi',
        description: 'Với trẻ từ 0 - 6 tuổi: Không cần lấy thông tin sinh trắc học. Hệ thống tự động xử lý thông tin đăng ký hoàn toàn trực tuyến 100%.'
      },
      {
        stepNumber: 4,
        title: 'Thu nhận sinh trắc trẻ 6 - 14 tuổi',
        description: 'Với trẻ từ 6 đến dưới 14 tuổi: Đặt lịch hẹn, đưa bé tới cơ quan Công an du nhập cận cảnh vân tay, mống mắt và ảnh khuôn mặt.'
      },
      {
        stepNumber: 5,
        title: 'Nhận thẻ căn cước bưu điện',
        description: 'Sau khi hoàn thành xử lý dữ liệu quốc gia, thẻ căn cước nhựa cứng thông minh của bé được Bưu điện phát trực tiếp về gia đình ở xã Dục Nông.'
      }
    ],
    duration: '7 ngày làm việc kể từ ngày hoàn tất nộp hồ sơ hoặc thu nhận sinh trắc học thành công',
    fee: 'Miễn phí hoàn toàn đối với trường hợp cấp thẻ căn cước lần đầu',
    category: 'Căn cước',
    iconName: 'IdCard',
    videoUrl: 'https://www.youtube.com/embed/xnByLESrV-Q'
  }
];

export const TUTORIAL_SLIDES: QuickTutorialSlide[] = [
  {
    id: 1,
    title: 'Bước 1: Tải ứng dụng hoặc Truy cập trang dịch vụ',
    description: 'Người dân mở điện thoại, tìm ứng dụng VNeID từ kho ứng dụng (Ch Play/App Store) hoặc sử dụng máy tính truy cập địa chỉ dichvucong.gov.vn.',
    imageAlt: 'Truy cập trang Cổng Dịch vụ công Quốc gia',
    illustrationSvg: `
      <svg viewBox="0 0 400 240" class="w-full h-full text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="380" height="220" rx="12" fill="#EBF5FF" stroke="#1D4ED8" stroke-width="4"/>
        <rect x="40" y="40" width="320" height="130" rx="8" fill="#FFFFFF" stroke="#3B82F6" stroke-width="2"/>
        <line x1="40" y1="65" x2="360" y2="65" stroke="#3B82F6" stroke-width="2"/>
        <circle cx="55" cy="52" r="5" fill="#EF4444"/>
        <circle cx="70" cy="52" r="5" fill="#F59E0B"/>
        <circle cx="85" cy="52" r="5" fill="#10B981"/>
        <rect x="100" y="47" width="200" height="10" rx="5" fill="#F3F4F6"/>
        <text x="110" y="55" font-family="sans-serif" font-size="7" fill="#9CA3AF" font-weight="bold">dichvucong.gov.vn</text>
        <rect x="80" y="85" width="240" height="15" rx="4" fill="#3B82F6"/>
        <text x="120" y="95" font-family="sans-serif" font-size="10" fill="#FFFFFF" font-weight="bold">CỔNG DỊCH VỤ CÔNG QUỐC GIA</text>
        <rect x="130" y="115" width="140" height="35" rx="6" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="1.5"/>
        <rect x="145" y="125" width="110" height="15" rx="3" fill="#10B981"/>
        <text x="165" y="136" font-family="sans-serif" font-size="8" fill="#FFFFFF" font-weight="bold">ĐĂNG NHẬP VNeID</text>
        <rect x="190" y="195" width="20" height="15" fill="#3B82F6"/>
        <line x1="170" y1="210" x2="230" y2="210" stroke="#1D4ED8" stroke-width="3"/>
      </svg>
    `
  },
  {
    id: 2,
    title: 'Bước 2: Tìm kiếm dịch vụ công cần thực hiện',
    description: 'Nhập tên thủ tục hành chính bạn mong muốn làm vào ô tìm kiếm lớn ở màn hình trang chủ (Ví dụ: "khai sinh", "kết hôn", "khai tử", "căn cước"...).',
    imageAlt: 'Nhập từ khóa tìm kiếm thủ tục hành chính',
    illustrationSvg: `
      <svg viewBox="0 0 400 240" class="w-full h-full text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="380" height="220" rx="12" fill="#EBF5FF" stroke="#1D4ED8" stroke-width="4"/>
        <rect x="40" y="40" width="320" height="140" rx="6" fill="#FFFFFF" stroke="#3B82F6" stroke-width="2"/>
        <text x="60" y="75" font-family="sans-serif" font-size="12" fill="#1E3A8A" font-weight="bold">Tìm kiếm dịch vụ công:</text>
        <rect x="60" y="90" width="250" height="35" rx="6" fill="#F9FAFB" stroke="#3B82F6" stroke-width="3"/>
        <text x="80" y="112" font-family="sans-serif" font-size="12" fill="#111827">Đăng ký khai sinh|</text>
        <circle cx="285" cy="107" r="8" fill="none" stroke="#EF4444" stroke-width="2.5"/>
        <line x1="290" y1="112" x2="300" y2="122" stroke="#EF4444" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="60" y="140" width="250" height="30" rx="4" fill="#EFF6FF"/>
        <text x="70" y="158" font-family="sans-serif" font-size="9" fill="#2563EB">Kết quả: Đăng ký khai sinh trực tiếp trực tuyến liên thông cấp tỉnh...</text>
      </svg>
    `
  },
  {
    id: 3,
    title: 'Bước 3: Điền các thông tin trực tuyến chính xác',
    description: 'Điền các thông tin của bạn vào các trường tờ khai định sẵn. Kiểm tra kỹ Họ tên, số định danh, ngày sinh và địa chỉ cư trú của gia đình.',
    imageAlt: 'Nhập tờ khai điện tử định sẵn',
    illustrationSvg: `
      <svg viewBox="0 0 400 240" class="w-full h-full text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="380" height="220" rx="12" fill="#EBF5FF" stroke="#1D4ED8" stroke-width="4"/>
        <rect x="40" y="30" width="320" height="160" rx="6" fill="#FFFFFF" stroke="#3B82F6" stroke-width="2"/>
        <text x="60" y="55" font-family="sans-serif" font-size="10" fill="#1E3A8A" font-weight="bold">TỜ KHAI TRỰC TUYẾN (Ví dụ)</text>
        <text x="60" y="80" font-family="sans-serif" font-size="8" fill="#374151">Họ và tên: NGUYỄN VĂN A</text>
        <line x1="160" y1="81" x2="300" y2="81" stroke="#D1D5DB" stroke-width="1.5"/>
        <text x="60" y="105" font-family="sans-serif" font-size="8" fill="#374151">Số Căn cước: 051096001234</text>
        <line x1="160" y1="106" x2="300" y2="106" stroke="#D1D5DB" stroke-width="1.5"/>
        <text x="60" y="130" font-family="sans-serif" font-size="8" fill="#374151">Địa chỉ: Xã Dục Nông, Quảng Ngãi</text>
        <line x1="160" y1="131" x2="300" y2="131" stroke="#D1D5DB" stroke-width="1.5"/>
        <rect x="140" y="150" width="120" height="25" rx="5" fill="#10B981"/>
        <text x="175" y="166" font-family="sans-serif" font-size="9" fill="#FFFFFF" font-weight="bold">BƯỚC TIẾP THEO</text>
      </svg>
    `
  },
  {
    id: 4,
    title: 'Bước 4: Sử dụng điện thoại chụp ảnh các loại hồ sơ giấy',
    description: 'Đặt giấy tờ (Sổ đỏ, Giấy khai sinh cũ, Giấy chứng sinh...) phẳng trên bàn phẳng, nơi đủ sáng không bóng lóa và ấn máy ảnh chụp lại rõ nét rồi tải file lên.',
    imageAlt: 'Chụp hình giấy tờ tùy thân',
    illustrationSvg: `
      <svg viewBox="0 0 400 240" class="w-full h-full text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="380" height="220" rx="12" fill="#EBF5FF" stroke="#1D4ED8" stroke-width="4"/>
        <rect x="50" y="40" width="160" height="120" rx="4" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/>
        <text x="70" y="70" font-family="sans-serif" font-size="10" fill="#B45309" font-weight="bold">GIẤY CHỨNG SINH</text>
        <line x1="70" y1="90" x2="190" y2="90" stroke="#F59E0B" stroke-width="2"/>
        <line x1="70" y1="110" x2="190" y2="110" stroke="#F59E0B" stroke-width="2"/>
        <line x1="70" y1="130" x2="140" y2="130" stroke="#F59E0B" stroke-width="2"/>
        <g transform="translate(230, 30)">
          <rect x="0" y="0" width="110" height="160" rx="14" fill="#374151" stroke="#111827" stroke-width="2"/>
          <rect x="5" y="15" width="100" height="125" rx="6" fill="#F3F4F6"/>
          <circle cx="55" cy="150" r="6" fill="#FFFFFF"/>
          <rect x="12" y="30" width="86" height="85" rx="3" fill="#FFFBEB" stroke="#D97706"/>
          <circle cx="55" cy="72" r="14" fill="none" stroke="#10B981" stroke-width="2"/>
          <line x1="45" y1="72" x2="65" y2="72" stroke="#10B981" stroke-width="2"/>
          <line x1="55" y1="62" x2="55" y2="82" stroke="#10B981" stroke-width="2"/>
          <text x="32" y="125" font-family="sans-serif" font-size="7" fill="#1F2937" font-weight="bold">Tải ảnh hồ sơ</text>
        </g>
      </svg>
    `
  },
  {
    id: 5,
    title: 'Bước 5: Nhận kết quả giải quyết thuận tiện',
    description: 'Sau khi kiểm duyệt, cổng dịch vụ sẽ trả file bản số hóa có ký số vào điện thoại, hoặc nhân viên bưu điện gửi bản giấy gốc đến tận nhà tại xã Dục Nông.',
    imageAlt: 'Nhận kết quả hành chính tại nhà',
    illustrationSvg: `
      <svg viewBox="0 0 400 240" class="w-full h-full text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="380" height="220" rx="12" fill="#EBF5FF" stroke="#1D4ED8" stroke-width="4"/>
        <path d="M 80,180 L 150,110 L 220,180 Z" fill="#D1FAE5" stroke="#10B981" stroke-width="2"/>
        <rect x="120" y="130" width="60" height="50" fill="#F9FAFB" stroke="#10B981" stroke-width="2"/>
        <rect x="140" y="155" width="15" height="25" fill="#34D399"/>
        <path d="M 230,120 L 330,120 L 310,180 L 210,180 Z" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
        <text x="235" y="150" font-family="sans-serif" font-size="14" fill="#FFFFFF" font-weight="bold">BƯU ĐIỆN</text>
        <circle cx="280" cy="150" r="15" fill="#EF4444"/>
        <path d="M 273,150 L 278,155 L 288,145" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        <text x="60" y="70" font-family="sans-serif" font-size="14" fill="#111827" font-weight="bold">Bưu điện giao hồ sơ đến tận nhà của bạn!</text>
      </svg>
    `
  }
];

export const QUICK_LOOKUP_DATA = [
  {
    keywords: ['em be', 'giay chung sinh', 'sinh con', 'dang ky khai sinh', 'co con', 'lam khai sinh', 'con moi sinh', 'khai sinh'],
    title: 'Đăng ký Khai sinh sơ sinh liên thông',
    targetServiceId: 'khai-sinh',
    summary: 'Chuẩn bị Giấy chứng sinh bản gốc phát hành từ bệnh viện, ảnh chụp Giấy đăng ký kết hôn của cha mẹ để hệ thống tự cấp thẻ BHYT miễn phí cho em bé.'
  },
  {
    keywords: ['ket hon', 'lay vo', 'lay chong', 'co dau', 'chu re', 'hon nhan', 'doc than', 'giay ket hon', 'tinh trang hon nhan'],
    title: 'Đăng ký Kết hôn trực tuyến',
    targetServiceId: 'ket-hon',
    summary: 'Chụp hình bản gốc Căn cước công dân của 2 vợ chồng và Giấy xác nhận độc thân (nếu sống ở xã ngoài). Nộp đơn duyệt trước rồi cùng lên xã Dục Nông ký sổ lấy bản gốc cứng.'
  },
  {
    keywords: ['khai tu', 'nguoi mat', 'bao tu', 'giay chung tu', 'qua doi', 'mat', 'xoa ho khau', 'mai tang'],
    title: 'Đăng ký Khai tử liên thông',
    targetServiceId: 'khai-tu',
    summary: 'Cần nộp Giấy báo tử bản gốc của bệnh viện/cơ quan công an, ghi nhận thông tin nhân thân người đã mất để tự động làm thủ tục liên thông xóa cư trú.'
  },
  {
    keywords: ['cccd cho tre', 'can cuoc tre em', 'can cuoc duoi 14', 'lam can cuoc con', 'chup anh be', 'sinh trac', 'mong mat be'],
    title: 'Cấp thẻ Căn cước cho trẻ dưới 14 tuổi',
    targetServiceId: 'can-cuoc-duoi-14',
    summary: 'Nhờ VNeID của cha mẹ nộp hồ sơ. Trẻ dưới 6 tuổi: Làm hoàn toàn online 100%. Trẻ từ 6-14 tuổi: Đặt lịch hẹn lên Công an để thu thập ảnh chân dung, mống mắt và vân tay.'
  }
];
