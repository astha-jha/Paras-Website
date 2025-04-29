"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Scale } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-800 text-white pt-20">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/bgm2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center justify-center" data-aos="fade-down">
            <Scale className="h-12 w-12 text-yellow-500" /> {/* Changed logo color to yellow */}
          </div>

          <h1
  className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-serif mb-6 leading-tight text-white"
  data-aos="fade-up"
>
  Paras Chauhan
</h1>

          <h2 className="text-2xl md:text-3xl text-yellow-500 font-poppins mb-6" data-aos="fade-up" data-aos-delay="100">
            Advocate & Legal Consultant
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8" data-aos="fade-up" data-aos-delay="200">
            Providing exceptional legal representation with integrity, expertise, and a commitment to client success
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8" data-aos="fade-up" data-aos-delay="300">
            <span className="px-4 py-2 bg-primary/20 rounded-full text-sm font-medium">Family Law</span>
            <span className="px-4 py-2 bg-primary/20 rounded-full text-sm font-medium">Criminal Law</span>
            <span className="px-4 py-2 bg-primary/20 rounded-full text-sm font-medium">Corporate Law</span>
            <span className="px-4 py-2 bg-primary/20 rounded-full text-sm font-medium">Civil Law</span>
            <span className="px-4 py-2 bg-primary/20 rounded-full text-sm font-medium">Arbitration</span>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 group">
              <Link href="/practice-areas" className="flex items-center">
                Explore Practice Areas
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/book-appointment">Book a Consultation</Link>
            </Button>
          </div> */}

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}