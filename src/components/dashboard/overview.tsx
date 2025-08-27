"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Users, Globe, Key, TrendingUp } from "lucide-react";

const applicationsData = [
  {
    id: 1,
    name: "E-commerce App",
    users: 1250,
    status: "active",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Blog Platform",
    users: 890,
    status: "active",
    lastActive: "5 minutes ago",
  },
  {
    id: 3,
    name: "Portfolio Site",
    users: 340,
    status: "inactive",
    lastActive: "2 days ago",
  },
  {
    id: 4,
    name: "SaaS Dashboard",
    users: 2100,
    status: "active",
    lastActive: "1 hour ago",
  },
];

const chartData = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 600 },
  { name: "Apr", users: 800 },
  { name: "May", users: 1000 },
  { name: "Jun", users: 1200 },
];

const statsData = [
  { title: "Total Users", value: "4,580", icon: Users, change: "+12%" },
  { title: "Active Projects", value: "12", icon: Globe, change: "+2" },
  { title: "API Calls", value: "89.2K", icon: Key, change: "+18%" },
  { title: "Success Rate", value: "99.8%", icon: TrendingUp, change: "+0.2%" },
];

export function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="text-muted-foreground">
          Monitor your applications and track user engagement
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-color">{stat.change}</span> from last
                month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>Monthly user registration trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="rgb(163 230 53)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Applications Overview</CardTitle>
            <CardDescription>
              User distribution across applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={applicationsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="rgb(163 230 53)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Applications List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Applications</CardTitle>
          <CardDescription>
            Manage and monitor your active projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {applicationsData.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{app.name}</h3>
                    <Badge
                      variant={
                        app.status === "active" ? "default" : "secondary"
                      }
                    >
                      {app.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {app.users} users • Last active {app.lastActive}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
