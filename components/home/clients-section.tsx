"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import AOS from "aos"
import "aos/dist/aos.css"

export default function ClientsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const clients = [
    { name: "Client 1", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Client 2", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Client 3", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Client 4", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Client 5", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Client 6", logo: "/placeholder.svg?height=100&width=200" },
  ]

  const testimonials = [
    {
      quote:
        "Dr. Professional provided exceptional service and demonstrated remarkable expertise in handling our case.",
      author: "John Smith",
      position: "CEO, Company Name",
    },
    {
      quote:
        "Working with Dr. Professional was a transformative experience. The level of knowledge and professionalism is unmatched.",
      author: "Jane Doe",
      position: "Director, Organization Name",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">Clients & Testimonials</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Trusted by leading organizations and individuals across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={200}
                height={100}
                className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
              <CardContent className="p-6">
                <svg className="h-8 w-8 text-primary mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg mb-4 italic text-slate-700">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
