import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockAchievements, getCategoryColor, type AchievementStatus } from "@/data/mockData";
import { cn } from "@/lib/utils";

const getStatusColor = (status: AchievementStatus) => {
  const colors: Record<AchievementStatus, string> = {
    Verified: "bg-primary/10 text-primary border-primary/20",
    Pending: "bg-extracurricular/10 text-extracurricular border-extracurricular/20",
    Rejected: "bg-destructive/10 text-destructive border-destructive/20",
  };
  return colors[status];
};

export function RecentAchievements() {
  const recentAchievements = mockAchievements.slice(0, 5);

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-center">Points</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentAchievements.map((achievement) => (
              <TableRow key={achievement.id} className="transition-colors hover:bg-muted/50">
                <TableCell className="font-medium">{achievement.title}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={cn("text-xs", getCategoryColor(achievement.category))}
                  >
                    {achievement.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {new Date(achievement.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </TableCell>
                <TableCell className="text-center font-semibold">{achievement.points}</TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant="outline"
                    className={cn("text-xs", getStatusColor(achievement.status))}
                  >
                    {achievement.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
