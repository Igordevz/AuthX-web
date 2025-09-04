import { Card, CardContent } from "@/components/ui/card"
import { Shield, Key, Mail, Smartphone, Globe, BarChart3 } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "End-to-end encryption and attack protection",
    },
    {
      icon: Key,
      title: "Social Login",
      description: "Google, Facebook, GitHub and more platforms",
    },
    {
      icon: Mail,
      title: "Email Verification",
      description: "Automatic account confirmation via email",
    },
    {
      icon: Smartphone,
      title: "2FA Authentication",
      description: "Extra security layer with two-factor authentication",
    },
    {
      icon: Globe,
      title: "Global API",
      description: "Servers worldwide for maximum speed",
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Complete reports about your users",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional authentication features without technical complexity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-violet-400/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
