import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  mockAchievements,
  categories,
  getCategoryColor,
  type Category,
  type AchievementStatus,
} from "@/data/mockData";
import { cn } from "@/lib/utils";

const getStatusColor = (status: AchievementStatus) => {
  const colors: Record<AchievementStatus, string> = {
    Verified: "bg-primary/10 text-primary border-primary/20",
    Pending: "bg-extracurricular/10 text-extracurricular border-extracurricular/20",
    Rejected: "bg-destructive/10 text-destructive border-destructive/20",
  };
  return colors[status];
};

export default function Achievements() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredAchievements = mockAchievements.filter((achievement) => {
    const matchesSearch = achievement.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || achievement.category === categoryFilter;
    const matchesStatus =
      statusFilter === "all" || achievement.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">My Achievements</h1>
          <p className="mt-1 text-muted-foreground">
            View and manage all your achievements
          </p>
        </div>

        {/* Filters */}
        <Card className="animate-fade-in">
          <CardContent className="p-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search achievements..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[160px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Verified">Verified</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredAchievements.map((achievement, index) => (
            <Card
              key={achievement.id}
              className="animate-fade-in transition-all duration-200 hover:shadow-lg"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="line-clamp-2 text-base">
                    {achievement.title}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className={cn("shrink-0 text-xs", getCategoryColor(achievement.category))}
                  >
                    {achievement.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {new Date(achievement.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">
                      {achievement.points}
                    </span>
                    <span className="text-xs text-muted-foreground">pts</span>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={cn("text-xs", getStatusColor(achievement.status))}
                >
                  {achievement.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-lg font-medium text-muted-foreground">
              No achievements found
            </p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your filters
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
