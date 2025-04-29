"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Briefcase, GraduationCap, BookOpen } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function ExperienceSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const experiences = [
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Professional Experience",
      description: "Over 20 years of experience in the field with a proven track record of success and excellence.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: "Academic Background",
      description: "Graduated with honors from prestigious institutions with advanced degrees in the field.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Awards & Recognition",
      description: "Recipient of numerous awards and recognitions for outstanding contributions to the profession.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Publications & Research",
      description:
        "Author of several publications and research papers that have contributed significantly to the field.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">Experience & Expertise</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            A comprehensive overview of professional experience, academic background, and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                <p className="text-slate-700">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
