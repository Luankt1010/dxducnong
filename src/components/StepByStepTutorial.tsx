import React, { useState } from 'react';
import { 
  LogIn, 
  Search, 
  Upload, 
  CreditCard, 
  Check, 
  CheckSquare, 
  ArrowRight, 
  HelpCircle, 
  Smartphone, 
  BookOpen, 
  QrCode, 
  FileText, 
  FileCheck, 
  Settings, 
  AlertCircle,
  Eye,
  RefreshCw,
  Mail,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StepItem {
  id: string;
  label: string;
  title: string;
  description: string;
  subInstructions?: string[];
  tips?: string;
  mockType: string;
}

interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  steps: StepItem[];
}

export const StepByStepTutorial: React.FC = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const chapters: Chapter[] = [
    {
      id: 'dang-nhap',
      title: 'Đăng Nhập VNeID',
      subtitle: 'Truy cập & các cách đăng nhập',
      icon: <LogIn size={16} />,
      steps: [
        {
          id: 'b1',
          label: 'Bước 1',
          title: 'Truy cập & Nhấp Đăng nhập',
          description: 'Công dân truy cập vào Cổng Dịch vụ công Quốc gia để chính thức làm thủ tục hành chính trực tuyến.',
          subInstructions: [
            'Dùng trình duyệt trên điện thoại hoặc máy tính truy cập địa chỉ: https://dichvucong.gov.vn/',
            'Quan sát phía góc trên cùng bên phải màn hình hiển thị, tìm và chọn nút "Đăng nhập".'
          ],
          tips: 'Bà con nên bấm trực tiếp từ các liên kết chính thức để tránh giả mạo.',
          mockType: 'browser-home'
        },
        {
          id: 'b2',
          label: 'Bước 2',
          title: 'Chọn phương thức VNeID',
          description: 'Hệ thống hiển thị bảng lựa chọn cổng đăng nhập. Hãy chọn tài khoản chính thống cấp bởi Bộ Công an.',
          subInstructions: [
            'Chọn mục "Tài khoản Định danh điện tử cấp bởi Bộ Công an dành cho Công dân (VNeID)".',
            'Đây là phương thức an toàn và liên thông 100% dữ liệu dân cư giúp bà con không cần điền tay lại thông tin cá nhân.'
          ],
          tips: 'Dịch vụ công quốc gia đã đồng bộ hoàn toàn với tài khoản VNeID từ tháng 7/2024.',
          mockType: 'choice-vneid'
        },
        {
          id: 'b3a',
          label: 'Bước 3a',
          title: 'Đăng nhập bằng Mật khẩu',
          description: 'Sử dụng trực tiếp số Căn cước công dân và mật khẩu ứng dụng định danh hiện tại của mình.',
          subInstructions: [
            'Nhập chính xác Số định danh cá nhân (Số CCCD gồm 12 chữ số) vào ô tài khoản.',
            'Nhập Mật khẩu của ứng dụng VNeID rồi ấn chọn nút "Đăng nhập".',
            'Nhập mã OTP (gồm 6 chữ số) gửi về số điện thoại đăng ký định danh để hoàn tất xác thực bảo mật.'
          ],
          tips: 'Không chia sẻ mật khẩu VNeID hoặc mã OTP điện thoại cho bất kỳ ai!',
          mockType: 'login-password'
        },
        {
          id: 'b3b',
          label: 'Bước 3b',
          title: 'Đăng nhập bằng cách quét mã QR',
          description: 'Cách nhanh nhất và miễn cực không phải nhập mật khẩu rườm rà ngay trên thiết bị điện thoại.',
          subInstructions: [
            'Mở ứng dụng VNeID cài trên điện thoại thiết bị di động cá nhân của mình và tiến hành đăng nhập.',
            'Chọn biểu tượng chức năng quét mã QR tại thanh công cụ phía dưới cùng của ứng dụng VNeID.',
            'Hướng camera điện thoại quét vào mã QR hiển thị trên màn hình máy tính.',
            'Nhập mã bảo mật (Passcode) trên điện thoại để hoàn tất đồng bộ đăng nhập tự động.'
          ],
          tips: 'Điện thoại cần kết nối mạng 3G/4G/Wifi ổn định khi tiến hành quét mã nhé.',
          mockType: 'login-qr'
        }
      ]
    },
    {
      id: 'tim-thu-tuc',
      title: 'Tìm & Chọn Thủ Tục',
      subtitle: 'Tìm kiếm & chỉ định nơi xử lý',
      icon: <Search size={16} />,
      steps: [
        {
          id: 'b4',
          label: 'Bước 4',
          title: 'Tìm kiếm thủ tục hành chính',
          description: 'Hệ thống lưu trữ hàng ngàn dịch vụ công. Gõ từ khóa cụ thể để hệ thống thu hẹp nhanh kết quả.',
          subInstructions: [
            'Sau khi đăng nhập và hiển thị tên mình ở góc phải, chọn phần Thủ tục hành chính trên trang.',
            'Tìm thanh tìm kiếm lớn ở trang chủ, nhập từ khóa ngắn cần làm (ví dụ: "khai sinh", "kết hôn", "khai tử"...).',
            'Chọn đúng thủ tục từ danh sách hiển thị gợi ý (ví dụ: Đăng ký khai sinh trực tuyến liên thông).'
          ],
          tips: 'Mẹo nhập từ khóa: Gõ không dấu hoặc viết tắt ngắn gọn, hệ thống vẫn liên tưởng chính xác.',
          mockType: 'search-proc'
        },
        {
          id: 'b5',
          label: 'Bước 5',
          title: 'Xem chi tiết & Chọn địa bàn nộp',
          description: 'Đọc kỹ thông tin pháp lý hướng dẫn về thời gian giải quyết, lệ phí nộp của từng hình thức.',
          subInstructions: [
            'Xem chi tiết Thủ tục để nắm trình tự nộp Trực tiếp, Bưu điện hay Trực tuyến.',
            'Chọn Tỉnh/Thành phố (Tỉnh Quảng Ngãi), Phường/Xã (Xã Dục Nông) nơi thụ lý giải quyết.',
            'Chọn nút "Đồng ý" để xác nhận cấu hình nộp hồ sơ gửi về chính xác địa phương hành chính.'
          ],
          tips: 'Cực kỳ quan trọng: Chọn đúng tỉnh Quảng Ngãi và xã Dục Nông để hồ sơ về đúng cán bộ Một cửa xã xử lý.',
          mockType: 'detail-locality'
        },
        {
          id: 'b6',
          label: 'Bước 6',
          title: 'Nhấn nút Nộp trực tuyến',
          description: 'Hệ thống chuẩn bị đầy đủ trường dữ liệu biểu mẫu. Nhấp vào đây để mở giao diện điền tờ khai chính thức.',
          subInstructions: [
            'Sau khi đã chọn đơn vị hành chính phù hợp, quan sát nút hành động lớn màu xanh lá/xanh dương.',
            'Nhấp vào nút "Nộp trực tuyến" để kích hoạt cơ sở chuyển thông tin sang phân trang khai báo tiếp.'
          ],
          tips: 'Nếu nút bị mờ, bà con kiểm tra xem mình đã chọn đầy đủ địa bàn hành chính ở Bước 5 chưa.',
          mockType: 'submit-action'
        }
      ]
    },
    {
      id: 'ke-khai-dinh-kem',
      title: 'Kê Khai & Hồ Sơ',
      subtitle: 'Nhập thông tin & đính kèm tài liệu',
      icon: <Upload size={16} />,
      steps: [
        {
          id: 'b7a',
          label: 'Bước 7a',
          title: 'Nhập thông tin & Chọn giao kết quả',
          description: 'Cổng thông tin tự động liên kết (ví dụ chuyển tiếp Cổng Hà Nội hoặc tỉnh Quảng Ngãi) để nhập đơn.',
          subInstructions: [
            'Hệ thống tự điền dữ liệu cá nhân của người nộp lấy từ cơ sở định danh VNeID.',
            'Tích chọn vào ô vuông "Đăng ký nhận kết quả tại nhà qua dịch vụ bưu chính" nếu muốn Bưu điện chuyển phát tận nơi.',
            'Màn hình hiển thị Form thông tin: Nhập chuẩn xác Địa chỉ nhận và Số điện thoại liên lạc của gia đình.'
          ],
          tips: 'Nếu không tích chọn, bà con vui lòng tự thu xếp thời gian lên trực tiếp trụ sở tư pháp để ký và nhận bản cứng.',
          mockType: 'post-preference'
        },
        {
          id: 'b7b',
          label: 'Bước 7b',
          title: 'Nhập chi tiết thông tin hồ sơ',
          description: 'Bổ sung những thông tin chuyên biệt còn thiếu mà VNeID chưa lưu giữ.',
          subInstructions: [
            'Thực hiện điền đầy đủ các thông tin nhân thân bắt buộc (đều có ký hiệu dấu hoa thị đỏ *).',
            'Ví dụ đăng ký khai sinh: Cần nhập thông tin mẹ đẻ, thời gian sinh bé, họ tên bé dự kiến...'
          ],
          tips: 'Chữ viết có dấu tiếng Việt phải ghi khớp tuyệt đối 100% với giấy chứng sinh và CCCD.',
          mockType: 'fill-form'
        },
        {
          id: 'b7c',
          label: 'Bước 7c',
          title: 'Thành phần hồ sơ & Ký số',
          description: 'Đính kèm các giấy tờ chứng minh pháp lý quan trọng để cán bộ kiểm đối chiếu thẩm định.',
          subInstructions: [
            'Bà con kéo xuống phần "Thành phần hồ sơ" để xem danh sách tài liệu bắt buộc nộp.',
            'Các tài liệu có ký hiệu (*) đỏ bắt buộc phải chụp ảnh đính kèm điện thoại mới gửi đi được.',
            'Nếu sở hữu Chứng thư chữ ký số cá nhân, nhấp vào biểu tượng Ký số cạnh tệp tin tài liệu để ký điện tử.'
          ],
          tips: 'Sử dụng máy ảnh điện thoại chụp ngang, giữ tay không rung để ảnh giấy tờ rõ nét, không bị nhòa.',
          mockType: 'doc-checklist'
        },
        {
          id: 'b7f',
          label: 'Bước 7f',
          title: '3 nguồn đính kèm tài liệu',
          description: 'Hệ thống hỗ trợ đính kèm linh hoạt từ nhiều kho lưu giữ khác nhau rất tiện lợi cho công dân.',
          subInstructions: [
            'Nguồn 1: Tải trực tiếp tệp tin ảnh chụp, tài liệu PDF lưu sẵn trên điện thoại hoặc máy tính.',
            'Nguồn 2: Tải biểu mẫu file mẫu đính kèm do hệ thống cung cấp sẵn để điền rồi ký chụp lại.',
            'Nguồn 3: Chọn trực tiếp từ "Kho tài liệu điện tử cá nhân" nếu bà con đã từng nộp hồ sơ trực tuyến trước đây.'
          ],
          tips: 'Sử dụng nguồn Kho dữ liệu điện tử giúp tiết kiệm rất nhiều dung lượng mạng và không cần chụp ảnh lại.',
          mockType: 'doc-resources'
        }
      ]
    },
    {
      id: 'thanh-toan-hoan-thanh',
      title: 'Thanh Toán & Gửi',
      subtitle: 'Thanh toán lệ phí & Gửi hồ sơ',
      icon: <CreditCard size={16} />,
      steps: [
        {
          id: 'b7g',
          label: 'Bước 7g',
          title: 'Thanh toán lệ phí (nếu có)',
          description: 'Nhanh chóng đóng tiền lệ phí dịch vụ công hoàn toàn trực tuyến qua ngân hàng hoặc ví điện tử.',
          subInstructions: [
            'Bấm chọn chuyển sang Tab "Phí, Lệ phí" cạnh thông tin tờ khai đang nhập để rà soát chi phí cụ thể.',
            'Sau khi chọn nút gửi, hệ thống xuất hiện nút đóng phí: "Thanh toán" và "Thanh toán quốc gia".',
            'Chọn Thanh toán thường: Hệ thống đưa đến màn hình quét ví điện tử (Momo, VNPay...) hoặc thẻ ngân hàng.',
            'Chọn Thanh toán quốc gia: Kết nối thanh toán tập trung của Cổng Bộ Tài chính bảo mật cao.'
          ],
          tips: 'Nhiều dịch vụ công hộ tịch như Khai sinh, Khai tử được miễn phí hoàn toàn lệ phí đăng ký.',
          mockType: 'payment-flows'
        },
        {
          id: 'b7h',
          label: 'Bước 7h',
          title: 'Hoàn thành nộp & Kho trạng thái',
          description: 'Xác nhận gửi hồ sơ để cán bộ tiếp nhận thụ lý tức thì. Quản lý toàn bộ tiến trình nộp dễ dàng.',
          subInstructions: [
            'Sau khi kiểm tra khớp, click nút "Lưu và nộp hồ sơ". Lúc này hồ sơ được khóa và tự động chuyển về máy của cán bộ xã.',
            'Nếu chọn "Lưu hồ sơ": Hồ sơ vẫn ở dạng nháp trong mục chờ nộp, bà con có thể chỉnh sửa thêm sau đó mới ấn gửi.',
            'Bấm chọn "Thông tin cá nhân / Tài khoản" để theo dõi 8 kho thư mục hồ sơ (Hồ sơ chờ tiếp nhận, Đang xử lý, Chờ bổ sung...)'
          ],
          tips: 'Hãy ghi sổ tay lại "Mã hồ sơ" có dạng mã vạch xuất hiện ở màn hình để tra cứu nhanh khi cần.',
          mockType: 'folders-tracking'
        }
      ]
    },
    {
      id: 'quan-ly-tra-cuu',
      title: 'Quản Lý & Tra Cứu',
      subtitle: 'Tương tác hồ sơ & Tìm kiếm kết quả',
      icon: <CheckSquare size={16} />,
      steps: [
        {
          id: 'b8',
          label: 'Bước 8',
          title: 'Thao tác với hồ sơ đã nộp',
          description: 'Các quyền năng tương tác trực tiếp với hồ sơ đã gửi đi giúp tháo gỡ vướng mắc phát sinh.',
          subInstructions: [
            'Tính năng "Xem chi tiết": Theo dõi lịch trình thời gian cụ thể của từng cán bộ đang thụ lý.',
            'Tính năng "Phiếu hẹn trả": Xem giấy điện tử báo ngày lấy kết quả chính thức.',
            'Tính năng "Yêu cầu rút hồ sơ": Đề xuất hoàn trả hồ sơ trong trường hợp không muốn thực hiện nữa.',
            'Tính năng "Cập nhật hồ sơ": Vào sửa và ký gửi lại tệp tin nếu hồ sơ chưa được cán bộ xã bấm tiếp nhận.',
            'Tính năng "Bổ sung hồ sơ": Thu nhỏ việc đính kèm các giấy tờ còn thiếu khi cán bộ bắn thông báo yêu cầu.'
          ],
          tips: 'Cán bộ xã sẽ gửi thông báo bổ sung qua tin nhắn SMS nếu giấy tờ bà con chụp bị mờ hoặc thiếu.',
          mockType: 'action-hub'
        },
        {
          id: 'b9',
          label: 'Bước 9',
          title: 'Tra cứu thanh toán lệ phí',
          description: 'Đóng lệ phí bổ sung nhanh chóng cho hồ sơ đang xử lý bằng cổng kiểm kết nối công cộng.',
          subInstructions: [
            'Không cần đăng nhập, chọn chuyên mục "Thanh toán trực tuyến" ngay trên thanh công cụ của Cổng.',
            'Nhập chính xác 12-15 chữ số "Mã hồ sơ" in trên phiếu thu, nhập mã bảo mật Captcha ngẫu nhiên.',
            'Nhấp "Tra cứu", hệ thống hiển thị chi tiết hóa đơn, nhấp chọn phương thức thanh toán trực tuyến để nộp.'
          ],
          tips: 'Đóng lệ phí trực tuyến đúng hạn giúp hồ sơ được giải quyết đúng ngày ghi trên giấy hẹn.',
          mockType: 'payment-lookup'
        },
        {
          id: 'tcqg_1',
          label: 'Tra cứu QG 1',
          title: 'Tìm tiến độ bằng Mã hồ sơ',
          description: 'Cách nhanh nhất để kiểm tra hồ sơ đang ở đâu, cán bộ nào đang giải quyết trên Cổng Quốc gia.',
          subInstructions: [
            'Bà con chọn mục "Thông tin và dịch vụ" hiển thị trên thanh menu chính của Cổng.',
            'Nhấp tiếp mục con "Tra cứu hồ sơ", tiến hành điền Mã hồ sơ và Mã xác nhận hiển thị rồi kích chọn nút "Tra cứu".'
          ],
          tips: 'Bà con có thể thực hiện kiểm tra này bất cứ lúc nào, cập nhật thời gian thực 24/7.',
          mockType: 'national-lookup-m1'
        },
        {
          id: 'tcqg_2',
          label: 'Tra cứu QG 2',
          title: 'Kiểm tra tập trung trong Tài khoản',
          description: 'Hỗ trợ việc liệt kê danh sách tổng hợp mọi yêu cầu hành chính của cá nhân đã từng nộp.',
          subInstructions: [
            'Công dân tiến hành Đăng nhập tài khoản VNeID của mình trên Cổng Quốc gia.',
            'Nhấn chọn phần "Thông tin tài khoản" (biểu tượng tên cá nhân của bà con ở góc trên bên phải màn hình).'
          ],
          tips: 'Cách này giúp quản lý tất cả hồ sơ gọn gàng mà không cần phải ghi nhớ từng mã hồ sơ rời rạc.',
          mockType: 'national-lookup-m2'
        },
        {
          id: 'tcqg_3',
          label: 'Tra cứu QG 3',
          title: 'Đọc chi tiết nộp & Phản ánh kiến nghị',
          description: 'Cung cấp quyền theo dõi chuyên sâu để công dân thực hiện quyền giám sát chất lượng dịch vụ.',
          subInstructions: [
            'Chọn mục "Xem chi tiết" để hiển thị quy trình 5 bước giải quyết và cán bộ trực tiếp ký duyệt hồ sơ.',
            'Chọn "Xem giấy tờ" để tải lại hoặc kết xuất lưu các văn bản, giấy khai sinh bản số hóa tiện cất giữ.',
            'Chọn nút "Gửi PAKN" để trực tiếp phản ánh kiến nghị lên quản lý Cổng dịch vụ công nếu cán bộ gây khó dễ hoặc giải quyết quá hạn.',
            'Chọn "Thanh toán lệ phí" để đóng nhanh tiền phí ngay tại phiếu chi tiết nếu hồ sơ báo phát sinh phí.'
          ],
          tips: 'Cổng gửi PAKN là kênh giám sát minh bạch, giúp bảo đảm quyền lợi tối đa cho bà con nhân dân.',
          mockType: 'national-lookup-m3'
        }
      ]
    }
  ];

  const currentChapter = chapters[activeChapterIndex];
  const currentStep = currentChapter.steps[activeStepIndex];

  const handleNext = () => {
    if (activeStepIndex < currentChapter.steps.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    } else if (activeChapterIndex < chapters.length - 1) {
      setActiveChapterIndex(activeChapterIndex + 1);
      setActiveStepIndex(0);
    } else {
      // Loop back to start
      setActiveChapterIndex(0);
      setActiveStepIndex(0);
    }
  };

  const handlePrev = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(activeStepIndex - 1);
    } else if (activeChapterIndex > 0) {
      const prevChapter = chapters[activeChapterIndex - 1];
      setActiveChapterIndex(activeChapterIndex - 1);
      setActiveStepIndex(prevChapter.steps.length - 1);
    } else {
      // Loop to end
      const lastChapter = chapters[chapters.length - 1];
      setActiveChapterIndex(chapters.length - 1);
      setActiveStepIndex(lastChapter.steps.length - 1);
    }
  };

  const handleChapterClick = (index: number) => {
    setActiveChapterIndex(index);
    setActiveStepIndex(0);
  };

  // Helper for rendering highly stylized and realistic mock interactive UIs 
  const renderInteractiveMock = (type: string) => {
    switch (type) {
      case 'browser-home':
        return (
          <div className="w-full bg-slate-100 rounded-xl border border-slate-300 shadow-md overflow-hidden font-sans text-[11px] text-slate-800">
            {/* Top Browser Bar */}
            <div className="bg-slate-200 px-3 py-1.5 flex items-center gap-1.5 border-b border-slate-300">
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 block"></span>
              </div>
              <div className="bg-white px-3 py-0.5 rounded-md flex-1 text-center scale-95 origin-center border border-slate-300 flex items-center justify-center gap-1">
                <span className="text-emerald-600 font-bold">https://</span>
                <span className="font-semibold text-slate-600">dichvucong.gov.vn</span>
              </div>
            </div>
            {/* Page Header */}
            <div className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white px-4 py-2.5 flex justify-between items-center">
              <span className="font-extrabold tracking-wider uppercase text-[10px]">CỔNG DỊCH VỤ CÔNG QUỐC GIA</span>
              <button className="bg-yellow-400 text-red-950 font-black px-3 py-1 rounded text-[10px] uppercase shadow border border-yellow-300 animate-pulse flex items-center gap-1">
                <LogIn size={10} strokeWidth={3} /> Đăng nhập
              </button>
            </div>
            {/* Page Hero Content */}
            <div className="p-4 bg-white space-y-3 min-h-[160px] flex flex-col justify-center items-center text-center">
              <span className="bg-red-50 text-red-700 font-extrabold px-2.5 py-0.5 rounded-full border border-red-200">Bà Con Chú Ý</span>
              <p className="font-black text-slate-900 text-[13px] leading-tight">Nộp hồ sơ dễ dàng, thuận tiện ngay tại nhà</p>
              <div className="w-32 h-1 bg-yellow-500 rounded-full"></div>
              <p className="text-slate-500 max-w-[240px] leading-relaxed">Bộ phận Tiếp nhận và Trả kết quả hiện đã số hóa mọi thủ tục liên thông định danh quốc gia.</p>
            </div>
          </div>
        );

      case 'choice-vneid':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-300 shadow-md p-4 space-y-3 font-sans text-slate-800 text-[11px]">
            <h5 className="font-black text-slate-900 border-b border-slate-100 pb-2 uppercase text-center text-red-700">CHỌN TÀI KHOẢN ĐĂNG NHẬP</h5>
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 opacity-60 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center font-bold text-slate-600 text-[10px]">DVC</div>
                <div>
                  <span className="font-bold block text-slate-600">Tài khoản Cổng DVC cũ</span>
                  <span className="text-[10px] text-slate-400 block">Đã ngừng hỗ trợ từ 01/07/2024</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-gradient-to-r from-red-50 to-amber-50 border-2 border-red-500 shadow-sm flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center font-black text-xs shadow-md border border-yellow-400">V</div>
                <div className="flex-1">
                  <span className="font-extrabold block text-red-950 uppercase tracking-wide">Tài khoản Định danh điện tử (VNeID)</span>
                  <span className="text-[9px] text-red-700 font-bold block mt-0.5 flex items-center gap-0.5">
                     Cấp bởi Bộ Công an • Khuyên dùng
                  </span>
                </div>
                <div className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-[8px]">
                  ✓
                </div>
              </div>
            </div>
          </div>
        );

      case 'login-password':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-300 shadow-md p-4 space-y-3 font-sans text-slate-800 text-[11px] max-w-sm mx-auto">
            {/* VNeID Mini Header */}
            <div className="flex justify-between items-center bg-[#AC1F24] p-2 rounded-lg text-white">
              <span className="text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                🛡️ VNeID ĐĂNG NHẬP
              </span>
              <span className="text-[9px] text-yellow-300 font-bold">CỤC C06 BỘ CÔNG AN</span>
            </div>
            
            <div className="space-y-2.5 py-1">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Số định danh cá nhân (CCCD)</label>
                <div className="relative">
                  <input 
                    type="text" 
                    disabled 
                    value="051096001234" 
                    className="w-full bg-slate-50 border border-slate-300 px-2.5 py-1.5 rounded-lg font-mono text-slate-700 font-bold text-[12px] focus:outline-none"
                  />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[9px] font-bold uppercase">Nhập CCCD</span>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Mật khẩu VNeID</label>
                <input 
                  type="password" 
                  disabled 
                  value="••••••••••••••" 
                  className="w-full bg-slate-50 border border-slate-300 px-2.5 py-1.5 rounded-lg text-slate-700 font-mono tracking-widest text-[12px] focus:outline-none"
                />
              </div>

              {/* Secure Token Info */}
              <div className="flex items-center gap-1.5 text-[9px] font-semibold text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                <Check size={11} className="stroke-[3]" /> Tự phát sinh mã bảo mật xác thực OTP 6 số bảo vệ
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-2 rounded-lg text-[10px] uppercase shadow-md transition-all active:scale-95 border border-red-500 flex items-center justify-center gap-2">
                <LogIn size={11} /> Xác nhận Đăng nhập
              </button>
            </div>
          </div>
        );

      case 'login-qr':
        return (
          <div className="w-full bg-slate-50 rounded-xl border border-slate-300 shadow-md p-4 space-y-4 font-sans text-[11px] text-slate-800">
            <h5 className="font-extrabold text-[#AC1F24] uppercase text-center border-b border-slate-200 pb-2">Đăng Nhập Hoặc Quét QR qua Ứng Dụng VNeID</h5>
            <div className="grid grid-cols-2 gap-3 items-center">
              {/* Laptop Screen Side with QR */}
              <div className="bg-white p-2 rounded-lg border border-slate-300 flex flex-col items-center justify-center space-y-1.5">
                <span className="text-[7px] font-extrabold text-slate-400 uppercase tracking-widest">MÀN HÌNH KHÓA</span>
                <div className="p-1.5 bg-slate-100 rounded-md border border-dashed border-red-400 relative">
                  <QrCode size={48} className="text-slate-800" />
                  <div className="absolute inset-0 bg-red-500/10 border border-red-500/80 animate-ping rounded m-1.5" style={{ animationDuration: '3s' }}></div>
                </div>
                <span className="text-[8px] font-bold text-red-650 bg-red-50 px-1 py-0.5 rounded text-center">Quét QR VNeID</span>
              </div>
              {/* Phone Mockup Side with camera scanning */}
              <div className="bg-slate-900 text-white p-2.5 rounded-2xl border-2 border-slate-700 flex flex-col items-center justify-between min-h-[120px] shadow">
                <div className="w-8 h-1 bg-slate-700 rounded-full mb-1"></div>
                <div className="flex-1 w-full bg-black rounded-lg p-1.5 flex flex-col items-center justify-center space-y-1 relative border border-slate-800 overflow-hidden">
                  <Smartphone size={16} className="text-emerald-400" />
                  <span className="text-[7px] font-bold text-emerald-400 uppercase tracking-wider block">CAMERA VNeID</span>
                  {/* Scanning bounds */}
                  <div className="w-10 h-10 border-2 border-emerald-400 border-dashed rounded relative animate-pulse"></div>
                  <span className="text-[6px] text-slate-400">Căn khung quét vào mã QR</span>
                </div>
                <span className="text-[7px] font-black tracking-widest uppercase mt-1 text-center block text-slate-400">ỨNG DỤNG VNEID DI ĐỘNG</span>
              </div>
            </div>
          </div>
        );

      case 'search-proc':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-305 shadow-md p-4 space-y-3.5 font-sans text-[11px] text-slate-800">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#E65100] uppercase tracking-wider block">TRA CỨU THỦ TỤC HÀNH CHÍNH</span>
              <p className="text-[12px] font-black text-slate-900 leading-tight">Nhập tiêu đề hoặc tên bộ ngành cần làm hồ sơ</p>
            </div>
            
            <div className="space-y-2">
              <div className="relative">
                <input 
                  type="text" 
                  disabled 
                  value="Đăng ký khai sinh|" 
                  className="w-full bg-slate-50 border border-[#0056B3] px-3 py-2 rounded-xl text-[12px] font-bold text-slate-800 focus:outline-none"
                />
                <button className="absolute right-2 top-1.5 bg-[#0056B3] text-white p-1 rounded-lg">
                  <Search size={12} className="stroke-[3]" />
                </button>
              </div>

              {/* Search Suggestions drop-down dropdown */}
              <div className="border border-slate-200 rounded-lg p-1.5 space-y-1 shadow-sm bg-white">
                <div className="p-1 px-2.5 rounded bg-blue-50/50 text-blue-900 flex items-center justify-between border-l-2 border-blue-600">
                  <span className="font-extrabold">1. Đăng ký khai sinh trực tuyến liên thông</span>
                  <span className="text-[8px] bg-blue-200/50 px-1 py-0.2 rounded font-bold uppercase text-blue-700">Liên thông</span>
                </div>
                <div className="p-1 px-2.5 rounded text-slate-500 hover:text-slate-800">
                  <span>2. Đăng ký nhận nuôi con nuôi</span>
                </div>
                <div className="p-1 px-2.5 rounded text-slate-500 hover:text-slate-800">
                  <span>3. Đăng ký nhận cha, mẹ, con định cư</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'detail-locality':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-300 shadow-md p-4 space-y-3 font-sans text-[11px] text-slate-800">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-2.5 rounded-r-lg">
              <h6 className="font-extrabold text-[#0056B3] uppercase text-[10px]">ĐỊA BÀN HÀNH CHÍNH ÁP DỤNG</h6>
              <p className="text-[10px] text-slate-600 mt-0.5">Xác định chuẩn cơ quan một cửa thụ lý hồ sơ của bạn</p>
            </div>

            <div className="space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="block text-[8px] font-bold text-slate-450 uppercase mb-0.5">Tỉnh / Thành Phố</span>
                  <div className="bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg text-[10px] font-bold text-slate-800 flex justify-between">
                    <span>Tỉnh Quảng Ngãi</span>
                    <span>▼</span>
                  </div>
                </div>
                <div>
                  <span className="block text-[8px] font-bold text-slate-450 uppercase mb-0.5">UBND Cấp Xã</span>
                  <div className="bg-amber-50 border-2 border-amber-400 px-2 py-1 rounded-lg text-[10px] font-extrabold text-blue-900 flex justify-between">
                    <span>Xã Dục Nông</span>
                    <span>▼</span>
                  </div>
                </div>
              </div>

              {/* Fact Sheets info cards */}
              <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-150 flex justify-between gap-1">
                <div>
                  <span className="text-[8px] font-bold uppercase text-slate-400 block">Thời Gian</span>
                  <span className="text-[9px] font-bold text-slate-700 block mt-0.5">Trong 1 ngày</span>
                </div>
                <div>
                  <span className="text-[8px] font-bold uppercase text-slate-400 block">Lệ Phí</span>
                  <span className="text-[9px] font-bold text-emerald-600 block mt-0.5">Miễn Phí</span>
                </div>
                <div>
                  <span className="text-[8px] font-bold uppercase text-slate-400 block">Cách Nộp</span>
                  <span className="text-[9px] font-bold text-slate-700 block mt-0.5">Trực tuyến 100%</span>
                </div>
              </div>

              <button className="w-full bg-[#0056B3] text-white font-extrabold py-2 rounded-lg uppercase tracking-wider text-[10px] shadow flex items-center justify-center gap-1.5">
                <Check size={12} className="stroke-[3]" /> Đồng ý nộp hồ sơ trực tuyến
              </button>
            </div>
          </div>
        );

      case 'submit-action':
        return (
          <div className="w-full bg-slate-50 rounded-xl border border-slate-300 shadow-md p-4 space-y-4 font-sans text-[11px] text-slate-800 text-center flex flex-col justify-center items-center min-h-[160px]">
            <span className="bg-indigo-50 border border-indigo-200 rounded-full px-3 py-1 font-extrabold text-indigo-700 text-[10px] uppercase">
              Xác Nhận Đầy Đủ Địa Bàn Pháp Lý
            </span>
            <p className="font-extrabold text-slate-700 text-xs max-w-[200px] leading-relaxed">
              Nhấp nút dưới đây để kích hoạt hệ thống xuất tờ khai điện tử liên thông tương ứng
            </p>
            <div className="relative group">
              {/* Highlight Ring around button */}
              <div className="absolute inset-0 bg-[#0056B3]/30 rounded-xl filter blur-md animate-pulse"></div>
              
              <button className="relative bg-gradient-to-r from-blue-700 to-indigo-650 text-white font-black px-7 py-3 rounded-xl uppercase text-[12px] shadow-xl border border-white/20 flex items-center gap-2">
                <FileCheck size={14} /> NỘP TRỰC TUYẾN <ArrowRight size={14} className="stroke-[3]" />
              </button>
            </div>
          </div>
        );

      case 'post-preference':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-300 shadow-md p-4 space-y-3 font-sans text-[11px] text-slate-800">
            <h6 className="font-black text-slate-900 border-b border-slate-100 pb-2 uppercase text-[10px] text-blue-950 flex items-center gap-1">
              🏢 HÌNH THỨC NHẬN KẾT QUẢ HỒ SƠ
            </h6>

            <div className="space-y-3">
              {/* Checkbox item */}
              <label className="flex items-start gap-2.5 p-2 rounded-lg bg-blue-50/50 border border-blue-200 cursor-pointer">
                <input type="checkbox" defaultChecked disabled className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 mt-0.5" />
                <div className="flex-1">
                  <span className="font-extrabold block text-slate-800">Đăng ký nhận kết quả tại nhà qua bưu điện (EMS)</span>
                  <span className="text-[8px] text-slate-500 block mt-0.5">Nhân viên bưu tá sẽ gửi bản giấy có đóng dấu mộc tận cửa nhà.</span>
                </div>
              </label>

              {/* Sub-form fields expanded */}
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-2">
                <div>
                  <span className="block text-[8px] font-bold text-slate-400 uppercase mb-0.5">Địa chỉ nhận kết quả chính xác (*)</span>
                  <input type="text" disabled value="Số nhà 45, Thôn 3, Xã Dục Nông, Tỉnh Quảng Ngãi" className="w-full bg-white border border-slate-200 px-2 py-1 rounded text-[10px] text-slate-700 font-medium focus:outline-none" />
                </div>
                <div>
                  <span className="block text-[8px] font-bold text-slate-400 uppercase mb-0.5">Số điện thoại liên hệ nhận thư (*)</span>
                  <input type="text" disabled value="0914.888.XXX" className="w-full bg-white border border-slate-200 px-2 py-1 rounded text-[10px] text-slate-700 font-mono tracking-widest focus:outline-none" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'fill-form':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-300 shadow-md p-4 space-y-3 font-sans text-[11px] text-slate-800">
            <div className="flex justify-between items-center border-b border-slate-150 pb-2">
              <span className="font-extrabold text-blue-900 text-[10px] uppercase">TỜ KHAI KHAI SINH LIÊN THÔNG ĐIỆN TỬ</span>
              <span className="text-[8px] bg-red-100 text-red-700 font-extrabold px-2 py-0.5 rounded">Mục bắt buộc (*)</span>
            </div>

            <div className="space-y-2 py-1">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[8px] font-extrabold text-slate-500 uppercase mb-0.5">Họ tên bé dự định đặt (*) </label>
                  <input type="text" disabled value="NGUYỄN MINH ANH" className="w-full bg-slate-50 border border-slate-205 px-2 py-1.5 rounded-lg text-[10px] font-bold focus:outline-none text-slate-800" />
                </div>
                <div>
                  <label className="block text-[8px] font-extrabold text-slate-500 uppercase mb-0.5">Ngày sinh của bé (*)</label>
                  <input type="text" disabled value="03/06/2026" className="w-full bg-slate-50 border border-slate-205 px-2 py-1.5 rounded-lg text-[10px] font-mono focus:outline-none text-slate-705" />
                </div>
              </div>

              <div>
                <label className="block text-[8px] font-extrabold text-slate-500 uppercase mb-0.5">Nơi sinh (Cơ sở y tế chứng sinh) (*)</label>
                <input type="text" disabled value="Bệnh viện đa khoa Quảng Ngãi" className="w-full bg-slate-50 border border-slate-205 px-2 py-1.5 rounded-lg text-[10px] focus:outline-none text-slate-800" />
              </div>

              <div>
                <label className="block text-[8px] font-extrabold text-slate-500 uppercase mb-0.5">Thông tin của Mẹ đẻ (*)</label>
                <input type="text" disabled value="TRẦN THỊ B - CCCD: 051198004567" className="w-full bg-slate-50 border border-slate-205 px-2 py-1.5 rounded-lg text-[10px] focus:outline-none text-slate-800" />
              </div>
            </div>
            
            <div className="flex justify-end gap-1.5 pt-1">
              <span className="text-[8px] font-black tracking-wider text-slate-400 px-2 py-1 bg-slate-100 rounded">HOÀN TẤT KÊ KHAI</span>
            </div>
          </div>
        );

      case 'doc-checklist':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-350 shadow-md p-3 space-y-2.5 font-sans text-[11px] text-slate-800">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="font-extrabold text-slate-900 uppercase text-[9px]">DANH SÁCH TÀI LIỆU ĐÍNH KÈM</span>
              <span className="text-[8px] text-slate-450">Tải tệp định dạng JPG, PNG, PDF</span>
            </div>

            <div className="space-y-2.5">
              {/* Document slot 1 */}
              <div className="p-2 rounded-lg border border-emerald-300 bg-emerald-50/50 flex items-center justify-between gap-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-red-650 text-xs mt-0.5">*</span>
                  <div>
                    <span className="font-extrabold block text-slate-700 text-[10px]">1. Giấy chứng sinh bản gốc</span>
                    <span className="text-[8px] text-slate-450 block font-mono">Size: 1.4 MB • Dung lượng nộp hợp lệ</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 hover:scale-105 transition-all">
                  <span className="text-[8px] text-emerald-800 bg-emerald-100/80 px-2 py-1 rounded font-bold uppercase flex items-center gap-0.5">
                     Tải lên thành công ✓
                  </span>
                </div>
              </div>

              {/* Document slot 2 */}
              <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between gap-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-red-650 text-xs mt-0.5">*</span>
                  <div>
                    <span className="font-extrabold block text-slate-700 text-[10px]">2. Giấy chứng nhận kết hôn</span>
                    <span className="text-[8px] text-slate-450 block font-mono">Bản gốc chụp ảnh hoặc bản sao công chứng</span>
                  </div>
                </div>
                <button className="bg-[#0056B3] hover:bg-blue-700 text-white font-extrabold px-2.5 py-1 rounded text-[9px] uppercase shadow-sm flex items-center gap-1">
                  <Upload size={10} /> Đính kèm file
                </button>
              </div>

              {/* Digital sign option option */}
              <div className="p-2 bg-purple-50 rounded-lg border border-purple-200 flex items-center justify-between">
                <span className="text-[9px] font-extrabold text-purple-950 flex items-center gap-1">
                   Bạn muốn ký số tài liệu đính kèm?
                </span>
                <button className="bg-purple-650 hover:bg-purple-700 text-white font-bold p-1 rounded-md text-[9px] flex items-center gap-1">
                  🛡️ Sử dụng Chữ ký số
                </button>
              </div>
            </div>
          </div>
        );

      case 'doc-resources':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-300 shadow-md p-4 space-y-3 font-sans text-[11px] text-slate-800 max-w-sm mx-auto">
            <span className="text-[9px] font-extrabold text-[#0056B3] bg-blue-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider block w-fit">
              LỰA CHỌN NGUỒN TÀI LIỆU SỐ HÓA
            </span>

            <div className="grid grid-cols-3 gap-2 py-1">
              <div className="p-2.5 rounded-lg border border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 transition-all text-center flex flex-col items-center justify-center space-y-1.5">
                <Smartphone size={16} className="text-slate-650" />
                <span className="font-extrabold text-[8px] leading-tight block">File trên Thiết bị</span>
              </div>

              <div className="p-2.5 rounded-lg border border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 transition-all text-center flex flex-col items-center justify-center space-y-1.5">
                <FileText size={16} className="text-slate-650" />
                <span className="font-extrabold text-[8px] leading-tight block">Mẫu Sẵn Hệ Thống</span>
              </div>

              <div className="p-2.5 rounded-lg border-2 border-red-500 bg-red-50 text-red-950 text-center flex flex-col items-center justify-center space-y-1.5 shadow-sm relative">
                <div className="absolute -top-1.5 -right-1 bg-red-650 text-white text-[7px] font-black px-1 rounded-full border border-white">
                  Mới
                </div>
                <BookOpen size={16} strokeWidth={2.5} className="text-red-600" />
                <span className="font-black text-[8px] leading-tight block">Kho dữ liệu VNeID</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 text-center leading-relaxed">
              * Kho tài liệu số hóa VNeID cho phép liên thông lấy ngay các giấy tờ đã nộp ở các bộ xử lý trước, không phải chụp lại mướt mát thời gian.
            </p>
          </div>
        );

      case 'payment-flows':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-300 shadow-md p-4 space-y-3 font-sans text-[11px] text-slate-800">
            <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
              <span className="font-extrabold text-slate-900 text-[10px] uppercase">CHI TIẾT PHÍ, LỆ PHÍ HỒ SƠ</span>
              <span className="text-[9px] font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Mã vạch: DVC-2026-NONG</span>
            </div>

            <div className="space-y-2 py-1.5">
              <div className="flex justify-between text-[11px] font-bold">
                <span>1. Lệ phí giải quyết thủ tục</span>
                <span>0 VNĐ (Miễn phí)</span>
              </div>
              <div className="flex justify-between text-[11px] font-bold border-b border-dashed border-slate-150 pb-1.5">
                <span>2. Phí dịch vụ bưu chính EMS về nhà</span>
                <span>15.000 VNĐ</span>
              </div>
              <div className="flex justify-between text-[12px] font-black text-[#D32F2F] pt-0.5">
                <span>TỔNG TIÊN CẦN THANH TOÁN:</span>
                <span>15.000 VNĐ</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button className="bg-slate-800 text-white font-extrabold py-2 rounded-lg text-[9px] uppercase tracking-wide shadow flex items-center justify-center gap-1">
                <CreditCard size={10} /> Thanh toán
              </button>
              <button className="bg-gradient-to-r from-red-600 to-amber-600 text-white font-extrabold py-2 rounded-lg text-[9px] uppercase tracking-wide shadow-md border border-yellow-500/30 flex items-center justify-center gap-1 animate-pulse">
                👑 Thanh toán quốc gia
              </button>
            </div>
          </div>
        );

      case 'folders-tracking':
        return (
          <div className="w-full bg-slate-50 rounded-xl border border-slate-300 shadow-md p-4 space-y-3 font-sans text-[11px] text-slate-800">
            <div className="flex items-center justify-between border-b border-black/10 pb-2">
              <span className="font-black text-blue-950 uppercase text-[10px]">HỒ SƠ CỦA BẠN TRONG TÀI KHOẢN</span>
              <span className="text-[9px] font-bold text-slate-400 font-mono">8 Thư mục kiểm soát</span>
            </div>

            {/* Folder Badges Grid style */}
            <div className="grid grid-cols-4 gap-1.5 py-1">
              <div className="bg-white p-1.5 rounded-lg border border-slate-200 text-center shadow-sm">
                <span className="block font-black text-slate-900 text-xs">15</span>
                <span className="text-[8px] text-slate-500 font-medium block scale-90 whitespace-nowrap overflow-hidden">Tất cả hồ sơ</span>
              </div>
              <div className="bg-slate-100 p-1.5 rounded-lg border border-slate-200 text-center opacity-85">
                <span className="block font-black text-slate-500 text-xs">0</span>
                <span className="text-[8px] text-slate-500 font-medium block scale-90 whitespace-nowrap overflow-hidden">Chờ nộp</span>
              </div>
              <div className="bg-blue-50 p-1.5 rounded-lg border border-blue-200 text-center">
                <span className="block font-black text-[#0056B3] text-xs">2</span>
                <span className="text-[8px] text-[#0056B3] font-bold block scale-90 whitespace-nowrap overflow-hidden">Chờ tiếp nhận</span>
              </div>
              <div className="bg-yellow-50 p-1.5 rounded-lg border border-yellow-300 text-center animate-pulse">
                <span className="block font-black text-yellow-800 text-xs">1</span>
                <span className="text-[8px] text-yellow-800 font-bold block scale-90 whitespace-nowrap overflow-hidden">Đang xử lý</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-1.5">
              <div className="bg-red-50 p-1.5 rounded-lg border border-red-200 text-center">
                <span className="block font-black text-red-700 text-xs">0</span>
                <span className="text-[8px] text-red-650 font-bold block scale-90 whitespace-nowrap overflow-hidden">Từ chối</span>
              </div>
              <div className="bg-green-50 p-1.5 rounded-lg border border-green-300 text-center">
                <span className="block font-black text-emerald-800 text-xs">12</span>
                <span className="text-[8px] text-emerald-800 font-bold block scale-90 whitespace-nowrap text-ellipsis overflow-hidden">Hoàn thành</span>
              </div>
              <div className="bg-amber-50 p-1.5 rounded-lg border border-amber-300 text-center">
                <span className="block font-black text-amber-800 text-xs">0</span>
                <span className="text-[8px] text-amber-800 font-medium block scale-90 whitespace-nowrap text-ellipsis overflow-hidden">Chờ bổ sung</span>
              </div>
              <div className="bg-indigo-50 p-1.5 rounded-lg border border-indigo-200 text-center">
                <span className="block font-black text-indigo-800 text-xs">0</span>
                <span className="text-[8px] text-indigo-800 font-medium block scale-90 whitespace-nowrap text-ellipsis overflow-hidden">Chờ thanh toán</span>
              </div>
            </div>
          </div>
        );

      case 'action-hub':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-300 shadow-md p-4 space-y-3.5 font-sans text-[11px] text-slate-800">
            <div className="flex justify-between items-center bg-[#1E3A8A] text-white p-2 rounded-lg">
              <span className="font-bold text-[9px] uppercase tracking-wider">HỒ SƠ: ĐĂNG KÝ KHAI SINH</span>
              <span className="bg-yellow-400 text-slate-900 font-black px-2 py-0.2 rounded text-[8px] uppercase">
                YÊU CẦU BỔ SUNG GẤP
              </span>
            </div>

            <p className="text-[10px] text-red-650 bg-red-50 border border-red-150 rounded p-2 text-left leading-relaxed">
              💡 <b>Phản hồi cán bộ: "Ảnh chụp giấy chứng sinh gốc bị mờ, bà con vui lòng chụp phẳng đứng camera không rung và sắc nét để phòng Tư pháp nộp phê duyệt dân cư."</b>
            </p>

            <div className="flex flex-wrap gap-1.5 justify-center py-0.5">
              <button className="bg-slate-100 border border-slate-300 font-bold px-2 py-1.5 rounded text-[9px] text-slate-700">Xem chi tiết</button>
              <button className="bg-slate-100 border border-slate-300 font-bold px-2 py-1.5 rounded text-[9px] text-slate-700">Phiếu hẹn</button>
              <button className="bg-slate-100 border border-slate-300 font-bold px-2 py-1.5 rounded text-[9px] text-red-600">Rút hồ sơ</button>
              <button className="bg-red-600 font-extrabold text-white px-2.5 py-1.5 rounded shadow-sm text-[9px] uppercase flex items-center gap-0.5 animate-bounce">
                ✏️ Bổ sung hồ sơ
              </button>
            </div>
          </div>
        );

      case 'payment-lookup':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-300 shadow-md p-4 space-y-3.5 font-sans text-[11px] text-slate-800 max-w-sm mx-auto">
            <div className="text-center space-y-1">
              <span className="text-[#0D47A1] font-black uppercase text-[10px] block">THANH TOÁN LỆ PHÍ KHÔNG CẦN ĐĂNG NHẬP</span>
              <p className="text-slate-500">Tra cứu nhanh hóa đơn dịch vụ công trực tiếp</p>
            </div>

            <div className="space-y-3.5 border border-slate-150 p-3 rounded-lg bg-slate-50">
              <div>
                <label className="block text-[8px] font-bold text-slate-450 uppercase mb-0.5 font-mono">Số hồ sơ / Mã định danh tờ khai (*)</label>
                <input type="text" disabled value="QNG-2026.000.123" className="w-full bg-white border border-slate-300 px-2.5 py-1.5 rounded text-[11px] font-mono tracking-widest text-slate-800 font-bold focus:outline-none" />
              </div>
              
              <div>
                <label className="block text-[8px] font-bold text-slate-450 uppercase mb-0.5">Mã bảo mật (*)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" disabled value="X8KD" className="w-full bg-white border border-slate-300 px-2.5 py-1 rounded text-[10px] font-mono text-center font-bold focus:outline-none" />
                  <span className="bg-slate-300 border border-slate-400 font-black tracking-widest text-[#2E7D32] italic text-center rounded flex items-center justify-center select-none text-[12px] opacity-75">
                    X 8 K D
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#0d47a1] text-white font-extrabold py-2 rounded uppercase text-[10px] shadow border-b-2 border-blue-900 flex items-center justify-center gap-1">
                <Search size={11} /> Tra cứu chi phí & đóng lệ phí
              </button>
            </div>
          </div>
        );

      case 'national-lookup-m1':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-300 shadow-md p-4 space-y-3 font-sans text-[11px] text-slate-800">
            <span className="text-[9px] font-extrabold text-blue-800 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider block w-fit">
               Tra cứu trên Cổng Quốc Gia
            </span>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 space-y-3">
              <div>
                <label className="block text-[8px] font-bold text-slate-450 uppercase mb-0.5 font-mono">Mã hồ sơ của bạn</label>
                <input type="text" disabled value="QNG-109.824.908" className="w-full bg-white border border-slate-300 px-2 py-1 rounded font-mono font-bold text-slate-800 text-[11px] focus:outline-none" />
              </div>
              <div>
                <label className="block text-[8px] font-bold text-slate-450 uppercase mb-0.5">Mã bảo mật</label>
                <input type="text" disabled value="Z6A9" className="w-full bg-white border border-slate-300 px-2 py-1 rounded font-mono text-slate-800 text-[11px] focus:outline-none" />
              </div>
              <button className="w-full bg-[#B71C1C] text-white font-black py-2 rounded uppercase text-[10px] shadow-sm flex items-center justify-center gap-1">
                <Search size={11} /> TRA CỨU HỒ SƠ QUỐC GIA
              </button>
            </div>
          </div>
        );

      case 'national-lookup-m2':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-305 shadow-md p-4 space-y-3 font-sans text-[11px] text-slate-800">
            <div className="flex items-center justify-between border-b pb-1.5">
              <span className="font-extrabold text-emerald-700 text-[9px] uppercase">✓ ĐÃ ĐĂNG NHẬP THÀNH CÔNG VNeID</span>
              <span className="text-[8px] text-slate-400">Cổng Dịch Vụ Công Quốc Gia</span>
            </div>
            
            <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-black text-sm border-2 border-blue-200 shadow-sm">
                A
              </div>
              <div className="flex-1">
                <span className="font-extrabold text-[12px] block text-slate-900">NGUYỄN VĂN A</span>
                <span className="text-[9px] text-slate-500 block">Số định danh (CCCD): 051096001234</span>
              </div>
              <div className="text-right">
                <span className="text-[8px] text-white bg-slate-800 px-1.5 py-0.5 rounded font-black uppercase tracking-wider block">
                  Định danh mức 2
                </span>
              </div>
            </div>

            <div className="bg-blue-50/50 p-2 rounded-lg border border-blue-150 inline-flex items-center gap-1.5 text-blue-900 w-full hover:scale-103 transition-transform cursor-pointer">
              <span className="p-1 rounded bg-blue-650 text-white flex-shrink-0">👤</span>
              <div className="text-left flex-1">
                <span className="font-black text-[10px] block">Cá nhân / Thông tin tài khoản</span>
                <span className="text-[8px] text-blue-700 block">Quản lý toàn bộ danh mục thông tin hồ sơ thủ tục của riêng mình</span>
              </div>
              <ChevronRight size={14} className="text-blue-500" />
            </div>
          </div>
        );

      case 'national-lookup-m3':
        return (
          <div className="w-full bg-white rounded-xl border border-slate-300 shadow-md p-4 space-y-3 font-sans text-[11px] text-slate-800">
            <h6 className="font-extrabold text-slate-900 border-b pb-2 uppercase text-[10px] flex items-center justify-between">
              <span>HỒ SƠ KHAI SINH LIÊN THÔNG ĐÃ TIẾP NHẬN</span>
              <span className="bg-emerald-100 text-emerald-800 px-2 py-0.2 rounded font-black text-[8px]">ĐÃ ĐỒNG Ý</span>
            </h6>

            <div className="space-y-2 py-1 text-slate-650 leading-relaxed text-[10px]">
              <div><b>Mã số nộp:</b> QNG-109.824.908</div>
              <div><b>Cơ quan tiếp nhận:</b> Tư pháp hộ tịch, Ủy ban nhân dân Xã Dục Nông, Tỉnh Quảng Ngãi</div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
              <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 font-bold py-1.5 rounded text-[9px] text-slate-700 flex items-center justify-center gap-0.5">
                <Eye size={10} /> Xem giấy tờ nộp
              </button>
              <button className="bg-slate-105 hover:bg-slate-200 border border-slate-300 font-bold py-1.5 rounded text-[9px] text-slate-705 flex items-center justify-center gap-0.5">
                📁 Chi tiết quy trình
              </button>
              <button className="bg-red-50 hover:bg-red-100 border border-red-200 text-[#D32F2F] font-bold py-1.5 rounded text-[9px] flex items-center justify-center gap-0.5">
                 Gửi phản ánh PAKN
              </button>
              <button className="bg-green-50 hover:bg-green-100 border border-green-200 text-emerald-800 font-bold py-1.5 rounded text-[9px] flex items-center justify-center gap-0.5">
                 Thanh toán lệ phí
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full bg-[#1e293b] text-white p-4 rounded-xl min-h-[150px] flex items-center justify-center">
            <span>Sơ đồ mô phỏng chi tiết</span>
          </div>
        );
    }
  };

  return (
    <div id="step-by-step-tutorial-section" className="bg-gradient-to-br from-blue-900 to-[#103D7C] rounded-3xl p-5 md:p-8 text-white shadow-2xl relative border border-blue-400/20">
      
      {/* Background radial effects */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute left-10 top-10 w-48 h-48 bg-yellow-400/5 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="relative z-10 space-y-6">
        
        {/* Title area */}
        <div className="border-b border-white/10 pb-5 space-y-2">
          <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-blue-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-widest shadow-md">
            <HelpCircle size={12} className="stroke-[3]" /> HƯỚNG DẪN TRỰC QUAN CHI TIẾT
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
            Hướng dẫn nộp hồ sơ trực tuyến trên dịch vụ công quốc gia
          </h2>
          <p className="text-xs text-blue-200 font-semibold leading-relaxed max-w-4xl">
            Sơ đồ các bước thao tác nộp, kê khai đính kèm hồ sơ chứng minh, thanh toán trực tuyến và tra cứu tiến độ xử lý hồ sơ chi tiết nhất dành cho bà con.
          </p>
        </div>

        {/* Categories Tab Selector with icons */}
        <div className="flex flex-wrap gap-2 bg-blue-950/40 p-1.5 rounded-2xl border border-white/10 overflow-x-auto justify-start sm:justify-between items-center">
          {chapters.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => handleChapterClick(idx)}
              className={`text-xs font-black px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeChapterIndex === idx
                  ? 'bg-yellow-400 text-blue-950 shadow-md font-extrabold'
                  : 'text-blue-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              {ch.icon}
              <span className="uppercase tracking-wider">{ch.title}</span>
            </button>
          ))}
        </div>

        {/* Split Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 5 Columns - Step Selector Navigation & Descriptions */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-blue-950/30 rounded-2xl p-4 border border-white/10 space-y-3">
              <span className="text-[10px] font-extrabold text-yellow-300 uppercase tracking-widest block font-mono">
                {currentChapter.title} — {currentChapter.subtitle}
              </span>
              
              {/* Vertical steps navigation list inside active Chapter */}
              <div className="space-y-2">
                {currentChapter.steps.map((step, idx) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      activeStepIndex === idx
                        ? 'bg-blue-600/60 border border-blue-400 text-white shadow-inner font-extrabold'
                        : 'bg-white/5 hover:bg-white/10 border border-transparent text-blue-150'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center ${
                        activeStepIndex === idx ? 'bg-yellow-400 text-blue-950' : 'bg-white/10 text-white'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="text-xs font-extrabold uppercase leading-snug">{step.title}</span>
                    </div>
                    <ChevronRight size={14} className={activeStepIndex === idx ? 'text-yellow-400' : 'text-blue-300 opacity-60'} />
                  </button>
                ))}
              </div>
            </div>

            {/* Pagination Back/Next button controllers below steps navigation list */}
            <div className="flex gap-3 justify-between items-center pt-2">
              <button
                onClick={handlePrev}
                className="bg-white/5 hover:bg-white/10 text-white font-bold text-xs p-3 px-4 rounded-xl flex items-center gap-1.5 cursor-pointer border border-white/10 transition-transform active:scale-95"
              >
                <ChevronLeft size={16} />
                Trước đó
              </button>
              
              <button
                onClick={handleNext}
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-black text-xs p-3 px-5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-lg shadow-yellow-400/15 transition-transform active:scale-95"
              >
                Tiếp tục
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT 7 Columns - Active Step Descriptions & Screenshots Virtual Mockups */}
          <div className="lg:col-span-7 bg-white/5 rounded-3xl p-5 md:p-6 border border-white/10 space-y-6">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeChapterIndex}-${activeStepIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {/* Step indicator header */}
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs font-black text-yellow-300 uppercase tracking-widest font-mono">
                    {currentStep.label}
                  </span>
                  <span className="text-[10px] bg-blue-500/30 text-blue-100 font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                    Quy Trình Chuẩn Quốc Gia
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                    {currentStep.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-semibold">
                    {currentStep.description}
                  </p>
                </div>

                {/* Vertical bullet listing directions detail */}
                {currentStep.subInstructions && (
                  <div className="space-y-2 bg-blue-950/20 p-4 rounded-xl border border-white/5 font-medium">
                    <span className="text-[9px] font-black uppercase text-yellow-300 tracking-wider block mb-1">Thao tác nộp hồ sơ chi tiết:</span>
                    <ul className="space-y-1.5 text-xs text-blue-150">
                      {currentStep.subInstructions.map((sub, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckSquare size={13} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pro Tip Highlight box */}
                {currentStep.tips && (
                  <div className="bg-amber-400/10 border border-amber-400/25 rounded-xl p-3.5 flex items-start gap-2.5 text-amber-120">
                    <div className="p-1 rounded bg-amber-400/20 text-yellow-300 mt-0.5">
                      <AlertCircle size={13} className="stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-yellow-400 uppercase tracking-wider block">Mẹo nhỏ quan trọng:</span>
                      <span className="text-xs text-amber-100 font-semibold block leading-relaxed mt-0.5">{currentStep.tips}</span>
                    </div>
                  </div>
                )}

                {/* Detailed Mock visualization component screenshot */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[9px] font-black uppercase text-blue-200 tracking-wide block">
                     Hình ảnh minh họa trực quan:
                  </span>
                  <div className="rounded-2xl overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center p-3 sm:p-5 shadow-lg relative group">
                    {renderInteractiveMock(currentStep.mockType)}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </div>
  );
};
