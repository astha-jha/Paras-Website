"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Career() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const careerMilestones = [
    {
      period: "2018 - Present",
      position: "Senior Professional",
      organization: "Premier Organization",
      description:
        "Leading initiatives and providing expert guidance on complex matters. Overseeing a team of professionals and mentoring junior colleagues.",
    },
    {
      period: "2012 - 2018",
      position: "Professional Specialist",
      organization: "Respected Institution",
      description:
        "Specialized in handling challenging cases and developing innovative approaches to problem-solving. Contributed to significant advancements in the field.",
    },
    {
      period: "2008 - 2012",
      position: "Associate Professional",
      organization: "Established Firm",
      description:
        "Gained extensive experience working on diverse cases and collaborating with senior professionals. Developed expertise in specialized areas.",
    },
    {
      period: "2005 - 2008",
      position: "Junior Professional",
      organization: "Leading Company",
      description:
        "Began professional career with foundational work and training. Quickly demonstrated aptitude and potential for advancement.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">Professional Career</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            A journey of professional growth, achievement, and continuous advancement in the field.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>

          <div className="space-y-12">
            {careerMilestones.map((milestone, index) => (
              <div key={index} className="relative" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                <div
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
                    <Card className="shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-sm font-medium text-primary mb-1">{milestone.period}</div>
                        <h3 className="text-xl font-bold mb-1 text-slate-900">{milestone.position}</h3>
                        <div className="text-slate-600 font-medium mb-3">{milestone.organization}</div>
                        <p className="text-slate-700">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for alternate layout */}
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
