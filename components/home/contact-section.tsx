"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Address",
      details: "123 Professional Avenue, Suite 456, City, Country",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "contact@professional.com",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Office Hours",
      details: "Monday - Friday: 9:00 AM - 5:00 PM",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">Contact Information</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Get in touch to schedule a consultation or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
              <p className="text-slate-700">{item.details}</p>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <Button asChild size="lg">
            <Link href="/book-appointment">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
