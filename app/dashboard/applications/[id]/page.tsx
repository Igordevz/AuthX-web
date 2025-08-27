"use client"

import { DashboardLayout } from "@/src/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Copy, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// This would normally come from your API/database
const getApplicationData = (id: string) => ({
  id,
  name: "E-commerce Store",
  description: "Authentication system for online store",
  status: "active",
  users: 1247,
  requests: 15420,
  lastActivity: "2 hours ago",
  createdAt: "2024-01-15",
  apiKey: "sk_live_51234567890abcdef",
  publicKey: "pk_live_09876543210fedcba",
  webhookUrl: "https://your-app.com/webhook",
})

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  const app = getApplicationData(params.id)
  const [showApiKey, setShowApiKey] = useState(false)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard/applications">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Applications
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{app.name}</h1>
            <p className="text-muted-foreground">{app.description}</p>
          </div>
          <Badge variant={app.status === "active" ? "default" : "secondary"} className="ml-auto">
            {app.status}
          </Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Application Statistics</CardTitle>
              <CardDescription>Current usage and performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">{app.users.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{app.requests.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">API Requests</div>
                </div>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Last activity:</span> {app.lastActivity}
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Created:</span> {new Date(app.createdAt).toLocaleDateString()}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Configuration</CardTitle>
              <CardDescription>Keys and endpoints for this application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Public Key</label>
                <div className="flex items-center gap-2 mt-1">
                  <code className="flex-1 rounded bg-muted px-2 py-1 text-sm">{app.publicKey}</code>
                  <Button size="sm" variant="outline">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Secret Key</label>
                <div className="flex items-center gap-2 mt-1">
                  <code className="flex-1 rounded bg-muted px-2 py-1 text-sm">
                    {showApiKey ? app.apiKey : "sk_live_••••••••••••••••"}
                  </code>
                  <Button size="sm" variant="outline" onClick={() => setShowApiKey(!showApiKey)}>
                    {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Webhook URL</label>
                <div className="flex items-center gap-2 mt-1">
                  <code className="flex-1 rounded bg-muted px-2 py-1 text-sm">{app.webhookUrl}</code>
                  <Button size="sm" variant="outline">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
