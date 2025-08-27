import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Users, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Simple Authentication
            <span className="block text-lime-400">No Code Required</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The world's easiest authentication API. Set up login and registration in minutes, even without programming
            knowledge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-400 text-black hover:bg-lime-500">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">5-Minute Setup</h3>
              <p className="text-sm text-muted-foreground">Configure complete authentication in just a few clicks</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">No Programming</h3>
              <p className="text-sm text-muted-foreground">Intuitive visual interface, no code required</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Thousands of Users</h3>
              <p className="text-sm text-muted-foreground">Manage unlimited users with ease</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
