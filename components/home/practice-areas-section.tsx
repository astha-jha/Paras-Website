"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, Building, Scale, FileText, ChevronRight } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function PracticeAreasSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const practiceAreas = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Family Law",
      description:
        "Expert guidance in divorce, child custody, adoption, and other family matters with compassion and understanding.",
      link: "/practice-areas#family-law",
    },
    {
      icon: <Scale className="h-10 w-10 text-primary" />,
      title: "Criminal Law",
      description:
        "Strong defense representation for individuals facing criminal charges, from minor offenses to serious crimes.",
      link: "/practice-areas#criminal-law",
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Corporate Law",
      description:
        "Comprehensive legal services for businesses of all sizes, including formation, compliance, and transactions.",
      link: "/practice-areas#corporate-law",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Civil Law",
      description:
        "Representation in civil disputes, including property matters, contract disputes, and personal injury cases.",
      link: "/practice-areas#civil-law",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Arbitration",
      description:
        "Alternative dispute resolution services to help clients resolve conflicts efficiently outside of court.",
      link: "/practice-areas#arbitration",
    },
    {
      icon: <Scale className="h-10 w-10 text-primary" />,
      title: "Constitutional Law",
      description: "Expertise in constitutional matters, fundamental rights, and public interest litigation.",
      link: "/practice-areas#constitutional-law",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">Practice Areas</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Comprehensive legal services across multiple practice areas, tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {practiceAreas.map((area, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{area.title}</h3>
                <p className="text-slate-700 mb-4">{area.description}</p>
                <Link href={area.link} className="text-primary font-medium inline-flex items-center hover:underline">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <Button asChild size="lg" className="group">
            <Link href="/practice-areas" className="flex items-center">
              View All Practice Areas
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
