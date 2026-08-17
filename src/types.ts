export interface CourseModule {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
  duration?: string;
  topics: string[];
  toolsCovered: string[];
  practicalAssignment: string;
}

export interface AITool {
  id: string;
  name: string;
  category: string;
  description: string;
  iconType: string;
  badge?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  companyPlaceholder?: string;
  roleType: string;
  location: string;
  experienceLevel: string;
  keySkills: string[];
  isPlaceholder?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  imageUrl: string;
}

export interface CertificateRecord {
  id: string;
  certificateNumber: string;
  studentName: string;
  courseName: string;
  issueDate: string;
  gradeOrStatus: string;
  verificationStatus: 'verified' | 'pending' | 'unverified';
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  courseInterestedIn: string;
  preferredBatch?: string;
  message: string;
}
