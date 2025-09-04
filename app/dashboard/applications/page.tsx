"use client"

import { DashboardLayout } from "@/src/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, Activity, Calendar } from "lucide-react"
import Link from "next/link"
import { getDataDashboard } from "@/context/features/dashboard"
import { useEffect, useState } from "react"

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

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getDataDashboard()
        if (data?.bruteData?.app_providers) {
          setApplications(data.bruteData.app_providers)
        }
      } catch (error) {
        console.error("Error loading applications:", error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Applications</h1>
            <p className="text-muted-foreground">Manage and monitor your authentication applications</p>
          </div>
          <Button className="bg-color hover:bg-lime-500">New Application</Button>
        </div>

        {loading ? (
          <div>Loading applications...</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <Card key={app.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{app.name_app}</CardTitle>
                    <Badge variant={app.count_usage > 0 ? "default" : "secondary"}>
                      {app.count_usage > 0 ? "active" : "inactive"}
                    </Badge>
                  </div>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{app.users.length} users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <span>{app.api_calls.toLocaleString()} requests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Created {new Date(app.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Last reset: {new Date(app.last_reset_at).toLocaleString()}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Link href={`/dashboard/applications/${app.id}`}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
