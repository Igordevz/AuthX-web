"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Zap, ArrowUp, CreditCard, Rocket } from "lucide-react";
import { getDataDashboard } from "@/context/features/dashboard";
import { Skeleton } from "@/components/ui/skeleton";

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

export function Usage() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [charts, setCharts] = useState<Charts | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const currentUsage = metrics ? (metrics.apiCallsToday / metrics.maxRequests) * 100 : 0;


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
  const plans = [
    {
      name: "Pro Plan",
      price: "$29/month",
      features: [
        "50,000 API calls",
        "Priority support",
        "Advanced analytics",
        "Custom domains",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99/month",
      features: [
        "Unlimited API calls",
        "24/7 support",
        "Custom integrations",
        "SLA guarantee",
      ],
      popular: false,
    },
    {
      name: "Turbo Boost",
      price: "$9/month",
      features: [
        "Extra 25,000 API calls",
        "Faster response times",
        "Extended rate limits",
      ],
      popular: false,
    },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-96 mt-2" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-48" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-2 w-full" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-4 w-32" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-24" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-8 w-24" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
              <Skeleton className="h-9 w-full" />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-full" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-12 w-full" />
          </CardContent>
        </Card>

        <div>
          <Skeleton className="h-7 w-64 mb-4" />
          <div className="grid gap-4 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <Skeleton className="h-8 w-24 mt-2" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                  <Skeleton className="h-9 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Usage & Billing</h1>
        <p className="text-muted-foreground">
          Monitor your API usage and upgrade your plan
        </p>
      </div>

      {/* Current Usage */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Current Usage
            </CardTitle>
            <CardDescription>API calls this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Used</span>
                <span>
                  {metrics?.apiCallsToday.toLocaleString()} /{" "}
                  {metrics?.maxRequests.toLocaleString()}
                </span>
              </div>
              <Progress value={currentUsage} className="h-2" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Badge variant={currentUsage > 80 ? "destructive" : "secondary"}>
                {Math.round(currentUsage)}% used
              </Badge>
              <span className="text-muted-foreground">
                {metrics ? metrics.maxRequests - metrics.apiCallsToday : 0} calls remaining
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Current Plan
            </CardTitle>
            <CardDescription>Free tier</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-2xl font-bold">$0/month</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 10,000 API calls/month</li>
                <li>• Basic support</li>
                <li>• Standard rate limits</li>
              </ul>
            </div>
            <Button className="w-full bg-color hover:bg-color/90 text-white">
              <ArrowUp className="h-4 w-4 mr-2" />
              Upgrade Plan
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Usage Forecast</CardTitle>
          <CardDescription>
            Based on your current usage pattern, you'll use approximately{" "}
            {metrics ? Math.round((metrics.apiCallsToday / new Date().getDate()) * 30) : 0} calls this
            month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>0</span>
              <span>25K</span>
              <span>50K</span>
              <span>100K+</span>
            </div>
            <div className="relative">
              <div className="h-2 bg-muted rounded-full">
                <div
                  className="h-2 bg-color rounded-full transition-all duration-300"
                  style={{
                    width: `${metrics ? Math.min((metrics.apiCallsToday / 100000) * 100, 100) : 0}%`,
                  }}
                />
              </div>
              <div
                className="absolute top-0 w-4 h-4 bg-color rounded-full border-2 border-white shadow-lg transform -translate-y-1"
                style={{
                  left: `${metrics ? Math.min((metrics.apiCallsToday / 100000) * 100, 100) : 0}%`,
                  marginLeft: "-8px",
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade Cards */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Turbocharge Your Project</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.popular ? "border-color shadow-lg" : ""}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    {plan.name}
                  </CardTitle>
                  {plan.popular && (
                    <Badge className="bg-color text-white">Popular</Badge>
                  )}
                </div>
                <CardDescription className="text-2xl font-bold text-foreground">
                  {plan.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-color rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-color hover:bg-color/90 text-white" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular ? "Upgrade Now" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
