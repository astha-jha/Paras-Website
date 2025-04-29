"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Users, Globe } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Achievements() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const achievementCategories = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Awards & Honors",
      items: [
        "Distinguished Professional Award, 2022",
        "Excellence in Practice Award, 2019",
        "Outstanding Contribution Award, 2017",
        "Innovation Recognition, 2015",
      ],
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Publications & Research",
      items: [
        "Author of 'Professional Excellence' (2021)",
        "Co-author of 'Innovative Approaches' (2018)",
        "Published 15+ research papers in leading journals",
        "Contributing editor for Professional Quarterly",
      ],
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Professional Memberships",
      items: [
        "Fellow, National Association of Professionals",
        "Member, International Professional Society",
        "Board Member, Regional Professional Council",
        "Advisory Committee, Professional Standards Board",
      ],
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Speaking Engagements",
      items: [
        "Keynote Speaker, International Conference (2023)",
        "Panel Expert, National Symposium (2022)",
        "Guest Lecturer at leading universities",
        "Regular speaker at industry events and seminars",
      ],
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            A collection of professional accomplishments, contributions, and recognition in the field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementCategories.map((category, index) => (
            <Card key={index} className="shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="mr-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                </div>

                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
