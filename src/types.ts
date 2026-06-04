export interface ServiceStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  name: string;
  description: string;
  checklist: string[]; // Hồ sơ cần chuẩn bị
  steps: ServiceStep[]; // Các bước thực hiện
  duration: string; // Thời gian giải quyết
  fee: string; // Lệ phí
  category: string; // Phân nhóm để dễ tìm kiếm
  iconName: string; // Loại icon từ lucide
  videoUrl?: string; // Link nhúng video YouTube hướng dẫn
}

export interface QuickTutorialSlide {
  id: number;
  title: string;
  description: string;
  imageAlt: string;
  illustrationSvg: string; // Direct SVG representing the step for rich modern visual look
}

export interface Statistics {
  visitorsCount: number;
  successGuidesCount: number;
  totalServicesCount: number;
}
