"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AcademicQualifications() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const qualifications = [
    {
      degree: "Doctorate",
      field: "Specialized Field",
      institution: "Prestigious University",
      year: "2005",
      description:
        "Completed doctoral studies with distinction, focusing on advanced research in the specialized field.",
    },
    {
      degree: "Master's Degree",
      field: "Professional Field",
      institution: "Renowned University",
      year: "2002",
      description: "Graduated with honors, specializing in key aspects of the professional field with research focus.",
    },
    {
      degree: "Bachelor's Degree",
      field: "Foundation Field",
      institution: "Esteemed University",
      year: "2000",
      description: "Established strong foundational knowledge and skills, graduating at the top of the class.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">Academic Qualifications</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            A strong educational foundation that has prepared for excellence in professional practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualifications.map((qualification, index) => (
            <Card key={index} className="shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div className="text-sm font-medium text-primary mb-1">{qualification.year}</div>
                <h3 className="text-xl font-bold mb-1 text-slate-900">{qualification.degree}</h3>
                <div className="text-slate-600 font-medium mb-1">{qualification.field}</div>
                <div className="text-slate-500 text-sm mb-3">{qualification.institution}</div>
                <p className="text-slate-700">{qualification.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
