"use client"

import { useEffect } from "react"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Biography() {
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
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-slate-900">Biography</h2>

            <div className="space-y-4 text-lg text-slate-700">
              <p>
                Dr. Professional is a distinguished expert with over two decades of experience in the field. Throughout
                a remarkable career, they have consistently demonstrated excellence and innovation in professional
                practice.
              </p>

              <p>
                After completing education at prestigious institutions, Dr. Professional embarked on a journey that
                would lead to significant contributions to the field. Their work has been recognized nationally and
                internationally, earning numerous accolades and establishing a reputation for exceptional expertise.
              </p>

              <p>
                Beyond professional accomplishments, Dr. Professional is dedicated to mentoring the next generation of
                practitioners and contributing to the advancement of the field through research, publications, and
                speaking engagements.
              </p>

              <p>
                Dr. Professional's approach combines traditional expertise with innovative methodologies, ensuring
                clients receive the highest quality service tailored to their specific needs.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative" data-aos="fade-left">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/parasImage.jpg"
                alt="Professional portrait"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
