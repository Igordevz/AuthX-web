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
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

// Data straight from the API
type Metrics = {
  maxRequests: number;
  activeProjects: number;
  totalUsers: number;
  totalApiCalls: number;
  apiCallsToday: number;
};

type ChartApiUsageByApp = {
  appName: string;
  apiCalls: number;
};

type ChartUsersByApp = {
  appName: string;
  userCount: number;
};

type Charts = {
  apiUsageByApp: ChartApiUsageByApp[];
  usersByApp: ChartUsersByApp[];
  emailVerification: {
    verified: number;
    unverified: number;
  };
};

type AppProvider = {
  id: string;
  name_app: string;
};

type BruteData = {
  app_providers: AppProvider[];
};

// Processed data for UI
type UserChartData = {
  id: string;
  name: string;
  users: number;
};

type ApiUsageChartData = {
  name: string;
  apiCalls: number;
};

export function Overview() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [charts, setCharts] = useState<Charts | null>(null);
  const [bruteData, setBruteData] = useState<BruteData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getDataDashboard();
        setMetrics(data?.metrics ?? null);
        setCharts(data?.charts ?? null);
        setBruteData(data?.bruteData ?? null);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-96 mt-2" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-6 w-6" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-4 w-40 mt-1" />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-48" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-[300px] w-full" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-56" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-[300px] w-full" />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-64" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-9 w-24" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    )
  }

  const userChartData: UserChartData[] =
    charts?.usersByApp
      ?.map((item) => {
        const appProvider = bruteData?.app_providers.find(
          (provider) => provider.name_app === item.appName
        );
        if (!appProvider) return null;

        return {
          name: item.appName,
          users: item.userCount,
          id: appProvider.id,
        };
      })
      .filter((item): item is UserChartData => item !== null) || [];

  const apiUsageChartData: ApiUsageChartData[] =
    charts?.apiUsageByApp?.map((item) => ({
      name: item.appName,
      apiCalls: item.apiCalls,
    })) || [];

  const statsData = [
    {
      title: "Total Users",
      value: metrics?.totalUsers ?? 0,
      icon: Users,
      change: metrics?.totalUsers
        ? `${(metrics.totalUsers * 0.1).toFixed(1)}%`
        : "0%",
    },
    {
      title: "Active Projects",
      value: metrics?.activeProjects ?? 0,
      icon: Globe,
      change: metrics?.activeProjects
        ? `${(metrics.activeProjects * 0.1).toFixed(1)}%`
        : "0%",
    },
    {
      title: "API Calls Today",
      value: metrics?.apiCallsToday ?? 0,
      icon: Key,
      change: metrics?.apiCallsToday
        ? `${(metrics.apiCallsToday * 0.1).toFixed(1)}%`
        : "0%",
    },
    {
      title: "Total API Usage",
      value: metrics?.totalApiCalls ?? 0,
      icon: TrendingUp,
      change: `${
        metrics?.maxRequests
          ? Math.round((metrics.totalApiCalls / metrics.maxRequests) * 100)
          : 0
      }% of limit`,
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
              <LineChart data={userChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="rgb(128, 65, 254)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Usage Overview</CardTitle>
            <CardDescription>
              Number of API calls by application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={apiUsageChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="apiCalls" fill="rgb(128, 65, 254)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Applications</CardTitle>
          <CardDescription>
            Manage and monitor your active projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userChartData.length > 0 ? (
              userChartData.map((app) => (
                <div
                  key={app.id}
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
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/dashboard/applications/${app.id}`}>
                      View Details
                    </Link>
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