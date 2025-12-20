import { Trophy, Star, Clock, Award } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { AchievementLineChart } from "@/components/dashboard/AchievementLineChart";
import { PointsBarChart } from "@/components/dashboard/PointsBarChart";
import { CategoryPieChart } from "@/components/dashboard/CategoryPieChart";
import { RecentAchievements } from "@/components/dashboard/RecentAchievements";
import { mockAchievements, categoryStats } from "@/data/mockData";

export default function Dashboard() {
  const totalAchievements = mockAchievements.length;
  const totalPoints = categoryStats.reduce((sum, cat) => sum + cat.points, 0);
  const pendingCount = mockAchievements.filter((a) => a.status === "Pending").length;
  const verifiedCount = mockAchievements.filter((a) => a.status === "Verified").length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="mt-1 text-muted-foreground">
            Track your achievements and progress
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            title="Total Achievements"
            value={totalAchievements}
            icon={Trophy}
            trend="2 this month"
            trendUp
          />
          <SummaryCard
            title="Points Earned"
            value={totalPoints}
            icon={Star}
            trend="+120 this month"
            trendUp
          />
          <SummaryCard
            title="Pending Approval"
            value={pendingCount}
            icon={Clock}
          />
          <SummaryCard
            title="Certificates"
            value={verifiedCount}
            icon={Award}
            trend="All verified"
            trendUp
          />
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          <AchievementLineChart />
          <PointsBarChart />
        </div>

        {/* Bottom Row */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentAchievements />
          </div>
          <CategoryPieChart />
        </div>
      </div>
    </DashboardLayout>
  );
}
