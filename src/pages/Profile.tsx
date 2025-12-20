import { useState } from "react";
import { User, Mail, IdCard, Building, Calendar, Edit2, Save, X } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  mockStudent,
  mockAchievements,
  categoryStats,
  getCategoryColor,
} from "@/data/mockData";
import { cn } from "@/lib/utils";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(mockStudent);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setProfile(mockStudent);
    setIsEditing(false);
  };

  const recentAchievements = mockAchievements.slice(0, 5);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          <p className="mt-1 text-muted-foreground">
            Manage your personal information
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <Card className="animate-fade-in lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Personal Information</CardTitle>
              {!isEditing ? (
                <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                  <Edit2 className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleSave}>
                    <Save className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleCancel}>
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="bg-primary text-2xl font-bold text-primary-foreground">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold text-foreground">{profile.name}</h2>
                  <p className="text-muted-foreground">{profile.studentId}</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profile.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentId" className="flex items-center gap-2">
                    <IdCard className="h-4 w-4 text-muted-foreground" />
                    Student ID
                  </Label>
                  <Input
                    id="studentId"
                    name="studentId"
                    value={profile.studentId}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department" className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    Department
                  </Label>
                  <Input
                    id="department"
                    name="department"
                    value={profile.department}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Year
                  </Label>
                  <Input
                    id="year"
                    name="year"
                    value={profile.year}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Achievement Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {categoryStats.map((stat) => (
                <div
                  key={stat.category}
                  className="flex items-center justify-between rounded-lg bg-muted/50 p-3"
                >
                  <div>
                    <p className="font-medium text-foreground">{stat.category}</p>
                    <p className="text-sm text-muted-foreground">
                      {stat.count} achievements
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">{stat.points}</p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Achievement History */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Achievement History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className="flex items-start gap-4 border-l-2 border-primary/30 pl-4 transition-colors hover:border-primary"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-medium text-foreground">
                        {achievement.title}
                      </h4>
                      <Badge
                        variant="secondary"
                        className={cn("shrink-0 text-xs", getCategoryColor(achievement.category))}
                      >
                        {achievement.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {new Date(achievement.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-foreground">
                      {achievement.points}
                    </span>
                    <span className="text-xs text-muted-foreground"> pts</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
