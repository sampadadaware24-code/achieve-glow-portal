export type Category = "Academic" | "Sports" | "Cultural" | "Extra-curricular";

export type AchievementStatus = "Verified" | "Pending" | "Rejected";

export interface Achievement {
  id: string;
  title: string;
  category: Category;
  date: string;
  description: string;
  points: number;
  status: AchievementStatus;
  certificate?: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  studentId: string;
  department: string;
  year: string;
  avatar?: string;
}

export interface MonthlyStats {
  month: string;
  achievements: number;
  points: number;
}

export interface CategoryStats {
  category: Category;
  count: number;
  points: number;
  color: string;
}

export const mockStudent: StudentProfile = {
  id: "1",
  name: "Rahul Sharma",
  email: "rahul.sharma@college.edu",
  studentId: "STU2024001",
  department: "Computer Science",
  year: "3rd Year",
};

export const mockAchievements: Achievement[] = [
  {
    id: "1",
    title: "First Place in National Coding Competition",
    category: "Academic",
    date: "2024-12-15",
    description: "Won first place in the national-level coding hackathon organized by TechFest.",
    points: 100,
    status: "Verified",
  },
  {
    id: "2",
    title: "Gold Medal in Inter-College Football",
    category: "Sports",
    date: "2024-12-10",
    description: "Led the college team to victory in the inter-college football championship.",
    points: 80,
    status: "Verified",
  },
  {
    id: "3",
    title: "Best Actor Award - Annual Drama Festival",
    category: "Cultural",
    date: "2024-11-28",
    description: "Received best actor award for the performance in the annual cultural fest.",
    points: 60,
    status: "Verified",
  },
  {
    id: "4",
    title: "Organized Tech Workshop for Juniors",
    category: "Extra-curricular",
    date: "2024-11-20",
    description: "Successfully organized a 3-day workshop on web development for junior students.",
    points: 50,
    status: "Verified",
  },
  {
    id: "5",
    title: "Published Research Paper",
    category: "Academic",
    date: "2024-11-15",
    description: "Published a research paper on machine learning in an international journal.",
    points: 120,
    status: "Verified",
  },
  {
    id: "6",
    title: "State Level Badminton Runner-up",
    category: "Sports",
    date: "2024-11-08",
    description: "Secured second place in the state-level badminton singles tournament.",
    points: 70,
    status: "Pending",
  },
  {
    id: "7",
    title: "Classical Dance Performance",
    category: "Cultural",
    date: "2024-10-25",
    description: "Performed classical dance at the inter-university cultural exchange program.",
    points: 40,
    status: "Verified",
  },
  {
    id: "8",
    title: "Community Service - Tree Plantation Drive",
    category: "Extra-curricular",
    date: "2024-10-15",
    description: "Led a team of 50 students in the college tree plantation initiative.",
    points: 35,
    status: "Verified",
  },
  {
    id: "9",
    title: "Dean's List Recognition",
    category: "Academic",
    date: "2024-10-01",
    description: "Recognized on the Dean's List for outstanding academic performance.",
    points: 90,
    status: "Verified",
  },
  {
    id: "10",
    title: "Photography Contest Winner",
    category: "Cultural",
    date: "2024-09-20",
    description: "Won the college-level photography contest with a nature photography series.",
    points: 45,
    status: "Pending",
  },
  {
    id: "11",
    title: "Marathon Participation - 10K Run",
    category: "Sports",
    date: "2024-09-15",
    description: "Completed the 10K city marathon with a timing under 50 minutes.",
    points: 30,
    status: "Verified",
  },
  {
    id: "12",
    title: "Mentorship Program Lead",
    category: "Extra-curricular",
    date: "2024-09-01",
    description: "Led the peer mentorship program for freshmen orientation.",
    points: 55,
    status: "Verified",
  },
];

export const monthlyStats: MonthlyStats[] = [
  { month: "Jul", achievements: 2, points: 85 },
  { month: "Aug", achievements: 3, points: 120 },
  { month: "Sep", achievements: 4, points: 165 },
  { month: "Oct", achievements: 3, points: 180 },
  { month: "Nov", achievements: 4, points: 280 },
  { month: "Dec", achievements: 3, points: 240 },
];

export const categoryStats: CategoryStats[] = [
  { category: "Academic", count: 4, points: 310, color: "hsl(142, 76%, 36%)" },
  { category: "Sports", count: 3, points: 180, color: "hsl(199, 89%, 48%)" },
  { category: "Cultural", count: 3, points: 145, color: "hsl(280, 68%, 60%)" },
  { category: "Extra-curricular", count: 3, points: 140, color: "hsl(38, 92%, 50%)" },
];

export const categories: Category[] = ["Academic", "Sports", "Cultural", "Extra-curricular"];

export const getCategoryColor = (category: Category): string => {
  const colors: Record<Category, string> = {
    Academic: "bg-academic text-primary-foreground",
    Sports: "bg-sports text-primary-foreground",
    Cultural: "bg-cultural text-primary-foreground",
    "Extra-curricular": "bg-extracurricular text-primary-foreground",
  };
  return colors[category];
};

export const getCategoryBorderColor = (category: Category): string => {
  const colors: Record<Category, string> = {
    Academic: "border-academic",
    Sports: "border-sports",
    Cultural: "border-cultural",
    "Extra-curricular": "border-extracurricular",
  };
  return colors[category];
};
