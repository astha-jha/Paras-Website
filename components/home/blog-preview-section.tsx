"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, User } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function BlogPreviewSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const blogPosts = [
    {
      title: "Understanding Your Rights in Employment Disputes",
      excerpt:
        "An overview of key employment laws and how they protect workers from discrimination, harassment, and wrongful termination.",
      image: "/placeholder.svg?height=300&width=500",
      date: "May 15, 2023",
      author: "Paras Chauhan",
      category: "Employment Law",
      slug: "understanding-employment-rights",
    },
    {
      title: "The Importance of Estate Planning at Any Age",
      excerpt:
        "Why creating a will and establishing power of attorney documents is essential regardless of your age or asset level.",
      image: "/placeholder.svg?height=300&width=500",
      date: "April 22, 2023",
      author: "Paras Chauhan",
      category: "Estate Planning",
      slug: "importance-of-estate-planning",
    },
    {
      title: "Navigating the Complexities of Corporate Compliance",
      excerpt:
        "A guide to help businesses understand and meet their legal obligations in an increasingly regulated environment.",
      image: "/placeholder.svg?height=300&width=500",
      date: "March 10, 2023",
      author: "Paras Chauhan",
      category: "Corporate Law",
      slug: "corporate-compliance-guide",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">Latest Articles</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Stay informed with our latest legal insights, analysis, and commentary on relevant topics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 line-clamp-2">{post.title}</h3>
                <p className="text-slate-700 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  Read more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          {/* <Button asChild size="lg" className="group">
            <Link href="/blog" className="flex items-center">
              View All Articles
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button> */}
        </div>
      </div>
    </section>
  )
}
