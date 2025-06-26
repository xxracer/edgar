import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "SL",
    text: "Incredibly fast service! I was locked out of my car at the grocery store, and they arrived in less than 20 minutes. The technician was professional and friendly. Highly recommend!",
    rating: 5,
  },
  {
    name: "Mike R.",
    avatar: "MR",
    text: "Forgot my keys inside my house. The team was a lifesaver. They were careful with my lock and got me back inside without any damage. Fair pricing too.",
    rating: 5,
  },
  {
    name: "Jessica P.",
    avatar: "JP",
    text: "I needed my old safe opened and they handled it with expertise. I was worried it would be a huge issue, but they made it look easy. Very trustworthy and skilled.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
          <p className="text-muted-foreground mt-2 text-lg">Real stories from satisfied clients.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold font-headline">{testimonial.name}</p>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
