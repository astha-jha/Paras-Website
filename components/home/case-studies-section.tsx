"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Award, Scale, Gavel } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function CaseStudiesSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const caseStudies = [
    {
      icon: <Scale className="h-10 w-10 text-primary" />,
      title: "High-Profile Corporate Dispute",
      category: "Corporate Law",
      description:
        "Successfully represented a major corporation in a complex contractual dispute, resulting in a favorable settlement that protected the client's business interests and reputation.",
      link: "/case-studies/corporate-dispute",
    },
    {
      icon: <Gavel className="h-10 w-10 text-primary" />,
      title: "Landmark Constitutional Case",
      category: "Constitutional Law",
      description:
        "Argued a significant constitutional matter before the Supreme Court, establishing an important precedent that strengthened fundamental rights protections.",
      link: "/case-studies/constitutional-case",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Complex Family Property Division",
      category: "Family Law",
      description:
        "Navigated a challenging high-asset divorce case, ensuring equitable distribution of property and securing favorable custody arrangements for our client.",
      link: "/case-studies/family-property",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">Notable Case Studies</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Explore some of our most significant cases and the successful outcomes we've achieved for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                  {caseStudy.icon}
                </div>
                <div className="text-sm font-medium text-primary mb-2">{caseStudy.category}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{caseStudy.title}</h3>
                <p className="text-slate-700 mb-4">{caseStudy.description}</p>
                <Link
                  href={caseStudy.link}
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  Read full case study
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <Button asChild size="lg" className="group">
            <Link href="/case-studies" className="flex items-center">
              View All Case Studies
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
