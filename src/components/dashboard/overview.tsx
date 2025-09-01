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
import { getDataDashboard } from "@/context/features/dashboard";
import { useEffect, useState } from "react";

type Metrics = {
  active_projects: number;
  total_api_usage: number;
  total_users: number;
  usage_today: number;
};

type ChartApiUsageByApp = {
  name_app: string;
  api_calls: number;
};

type ChartUsersByApp = {
  name_app: string;
  total_users: number;
};

type Charts = {
  api_usage_by_app: ChartApiUsageByApp[];
  users_by_app: ChartUsersByApp[];
};

type ChartDataItem = {
  name: string;
  users: number;
};

export function Overview() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [charts, setCharts] = useState<Charts | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getDataDashboard();
        console.log("this data to /overview", data);
        setMetrics(data?.metrics ?? null);
        setCharts(data?.charts ?? null);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading dashboard data...</p>;
  }

  const chartData: ChartDataItem[] =
    charts?.users_by_app?.map((item) => ({
      name: item.name_app,
      users: item.total_users,
    })) || [];

  const applicationsData: ChartDataItem[] =
    charts?.api_usage_by_app?.map((item) => ({
      name: item.name_app,
      users: item.api_calls,
    })) || [];

  const statsData = [
    {
      title: "Total Users",
      value: metrics?.total_users ?? 0,
      icon: Users,
      change: metrics?.total_users
        ? `${(metrics.total_users * 0.1).toFixed(1)}%`
        : "0%",
    },
    {
      title: "Active Projects",
      value: metrics?.active_projects ?? 0,
      icon: Globe,
      change: metrics?.active_projects
        ? `${(metrics.active_projects * 0.1).toFixed(1)}%`
        : "0%",
    },
    {
      title: "API Calls Today",
      value: metrics?.usage_today ?? 0,
      icon: Key,
      change: metrics?.usage_today
        ? `${(metrics.usage_today * 0.1).toFixed(1)}%`
        : "0%",
    },
    {
      title: "Total API Usage",
      value: metrics?.total_api_usage ?? 0,
      icon: TrendingUp,
      change: "/100 to limit",
    },
  ];

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
                <span className="text-color">{stat.change}</span> usage
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>User distribution by application</CardDescription>
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

        {/* Applications Overview */}
        <Card>
          <CardHeader>
            <CardTitle>API Usage Overview</CardTitle>
            <CardDescription>
              Number of API calls by application
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
            {chartData.length > 0 ? (
              chartData.map((app, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{app.name}</h3>
                      <Badge
                        variant={app.users > 0 ? "default" : "secondary"}
                      >
                        {app.users > 0 ? "active" : "inactive"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {app.users} users
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground">
                No applications found
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
