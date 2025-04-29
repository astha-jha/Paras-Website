"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden" data-aos="fade-right">
            <Image
              //src="/placeholder.svg?height=800&width=600"
              src="/paras.jpg"
              alt="Paras Chauhan portrait"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="text-white font-poppins">
                <p className="text-sm font-medium mb-1">Advocate</p>
                <p className="text-2xl font-bold">Paras Chauhan</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-slate-900">
              Dedicated to Providing Exceptional Legal Services
            </h2>

            <p className="text-lg text-slate-700 mb-6">
              With over 15 years of experience, Paras Chauhan has established a reputation for excellence in legal
              practice. Specializing in various areas of law including family, criminal, corporate, and civil matters,
              he provides comprehensive legal solutions tailored to each client's unique needs.
            </p>

            <p className="text-lg text-slate-700 mb-8">
              Paras Chauhan is committed to upholding the highest standards of legal ethics and professional conduct.
              His approach combines thorough legal knowledge with strategic thinking to achieve the best possible
              outcomes for his clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="group">
                <Link href="/about" className="flex items-center">
                  Read Full Biography
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/book-appointment">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
