import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Founder, TechStart",
      content:
        "Amazing! I was able to integrate authentication into my React app in less than 30 minutes. The API is so straightforward!",
      rating: 5,
      avatar: "/professional-woman.png",
    },
    {
      name: "John Santos",
      role: "Designer, CreativeStudio",
      content:
        "As a frontend developer, I was dreading building an auth system. AuthAPI's ready-to-use endpoints made it a breeze. I recommend it!",
      rating: 5,
      avatar: "/man-designer.png",
    },
    {
      name: "Ana Costa",
      role: "Entrepreneur",
      content:
        "I saved months of development. The interface is intuitive and the support is exceptional. Worth every penny!",
      rating: 5,
      avatar: "/woman-entrepreneur.png",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thousands of people have already simplified their authentication with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-lime-400 text-lime-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-lime-400/10 px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-lime-400 text-lime-400" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">based on 2,847 reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
