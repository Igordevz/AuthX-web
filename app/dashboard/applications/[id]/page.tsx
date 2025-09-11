"use client"

import { DashboardLayout } from "@/src/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Copy, Eye, EyeOff, Trash2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { getDataDashboard } from "@/context/features/dashboard"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"

type Application = {
  id: string
  name_app: string
  description: string
  createdAt: string
  api_calls: number
  count_usage: number
  last_reset_at: string
  users: any[]
  public_key: string
  secret_key: string
  owner_email: string
}

export default function ApplicationDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [app, setApp] = useState<Application | null>(null)
  const [loading, setLoading] = useState(true)
  const [showApiKey, setShowApiKey] = useState(false)

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getDataDashboard()
        if (data?.bruteData?.app_providers) {
          const foundApp = data.bruteData.app_providers.find((app:any) => app.id === id)
          setApp(foundApp || null)
        }
      } catch (error) {
        console.error("Error loading application:", error)
      } finally {
        setLoading(false)
      }
    }
    if (id) {
      loadData()
    }
  }, [id])

  const handleDeleteProject = () => {
    console.log("Delete project:", id)
    // Implement deletion logic here
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Skeleton className="h-9 w-36 rounded-md" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-48 rounded-md" />
              <Skeleton className="h-5 w-64 rounded-md" />
            </div>
            <Skeleton className="h-6 w-16 rounded-full ml-auto" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-40 rounded-md" />
                <Skeleton className="h-4 w-56 rounded-md" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Skeleton className="h-7 w-20 rounded-md" />
                    <Skeleton className="h-4 w-24 rounded-md" />
                  </div>
                  <div className="space-y-1">
                    <Skeleton className="h-7 w-20 rounded-md" />
                    <Skeleton className="h-4 w-24 rounded-md" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-48 rounded-md" />
                  <Skeleton className="h-4 w-48 rounded-md" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-40 rounded-md" />
                <Skeleton className="h-4 w-56 rounded-md" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24 rounded-md" />
                  <div className="flex items-center gap-2 mt-1">
                    <Skeleton className="h-9 flex-1 rounded-md" />
                    <Skeleton className="h-9 w-9 rounded-md" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24 rounded-md" />
                  <div className="flex items-center gap-2 mt-1">
                    <Skeleton className="h-9 flex-1 rounded-md" />
                    <Skeleton className="h-9 w-9 rounded-md" />
                    <Skeleton className="h-9 w-9 rounded-md" />
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <Skeleton className="h-9 w-32 rounded-md" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  if (!app) {
    return (
      <DashboardLayout>
        <div>Application not found</div>
      </DashboardLayout>
    )
  }

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
            <h1 className="text-3xl font-bold tracking-tight">{app.name_app}</h1>
            <p className="text-muted-foreground">{app.description}</p>
          </div>
          <Badge variant={app.count_usage > 0 ? "default" : "secondary"} className="ml-auto">
            {app.count_usage > 0 ? "active" : "inactive"}
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
                  <div className="text-2xl font-bold">{app.users.length.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{app.api_calls.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">API Requests</div>
                </div>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Last reset:</span>{" "}
                {new Date(app.last_reset_at).toLocaleString()}
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Created:</span>{" "}
                {new Date(app.createdAt).toLocaleDateString()}
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
                  <Input readOnly value={app.public_key} />
                  <Button size="sm" variant="outline">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Secret Key</label>
                <div className="flex items-center gap-2 mt-1">
                  <Input readOnly value={app.secret_key} type={showApiKey ? "text" : "password"} />
                  <Button size="sm" variant="outline" onClick={() => setShowApiKey(!showApiKey)}>
                    {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-600"
                  onClick={handleDeleteProject}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}