import { DashboardLayout } from "@/src/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, Activity, Calendar } from "lucide-react"
import Link from "next/link"

const applications = [
  {
    id: "app-1",
    name: "E-commerce Store",
    description: "Authentication system for online store",
    status: "active",
    users: 1247,
    requests: 15420,
    lastActivity: "2 hours ago",
    createdAt: "2024-01-15",
  },
  {
    id: "app-2",
    name: "Mobile App",
    description: "User authentication for iOS/Android app",
    status: "active",
    users: 892,
    requests: 8930,
    lastActivity: "5 minutes ago",
    createdAt: "2024-02-03",
  },
  {
    id: "app-3",
    name: "SaaS Platform",
    description: "Multi-tenant authentication system",
    status: "inactive",
    users: 45,
    requests: 234,
    lastActivity: "3 days ago",
    createdAt: "2024-03-10",
  },
]

export default function ApplicationsPage() {
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((app) => (
            <Card key={app.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{app.name}</CardTitle>
                  <Badge variant={app.status === "active" ? "default" : "secondary"}>{app.status}</Badge>
                </div>
                <CardDescription>{app.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{app.users.toLocaleString()} users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-muted-foreground" />
                    <span>{app.requests.toLocaleString()} requests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Created {new Date(app.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">Last activity: {app.lastActivity}</div>

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
      </div>
    </DashboardLayout>
  )
}
