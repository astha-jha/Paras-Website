"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function TeamSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const teamMembers = [
    {
      name: "Paras Chauhan",
      position: "Senior Advocate",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Founder and senior advocate with over 20 years of experience in corporate and constitutional law.",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        email: "mailto:paras@example.com",
      },
    },
    {
      name: "Ananya Sharma",
      position: "Associate Advocate",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializes in family law and civil disputes with 8 years of courtroom experience.",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        email: "mailto:ananya@example.com",
      },
    },
    {
      name: "Vikram Singh",
      position: "Associate Advocate",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Criminal law expert with extensive experience in high-profile defense cases.",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        email: "mailto:vikram@example.com",
      },
    },
    {
      name: "Priya Patel",
      position: "Junior Advocate",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Focuses on corporate law and intellectual property rights protection.",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        email: "mailto:priya@example.com",
      },
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">Meet Our Legal Experts</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Our team of experienced advocates is dedicated to providing exceptional legal representation and counsel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-slate-900">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-slate-700 mb-4 text-sm">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <Link
                    href={member.social.linkedin}
                    className="text-slate-400 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.social.twitter}
                    className="text-slate-400 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.social.facebook}
                    className="text-slate-400 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Facebook`}
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.social.email}
                    className="text-slate-400 hover:text-primary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
