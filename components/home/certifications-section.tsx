"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import AOS from "aos"
import "aos/dist/aos.css"

export default function CertificationsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const certifications = [
    {
      name: "Bar Council of India",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Licensed to practice law throughout India",
    },
    {
      name: "Supreme Court Bar Association",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Authorized to appear before the Supreme Court",
    },
    {
      name: "International Bar Association",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Member of the global legal community",
    },
    {
      name: "Chartered Institute of Arbitrators",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Certified arbitration professional",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Credentials
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">
            Certifications & Affiliations
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Our professional memberships and certifications reflect our commitment to excellence and ethical practice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={cert.name}
                    width={200}
                    height={100}
                    className="max-h-16 w-auto"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{cert.name}</h3>
                <p className="text-slate-700 text-sm">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
