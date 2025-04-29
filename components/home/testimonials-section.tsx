"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const testimonials = [
    {
      quote:
        "Paras Chauhan provided exceptional legal representation during my divorce proceedings. His expertise and compassionate approach made a difficult time much easier to navigate.",
      author: "Rajesh Kumar",
      position: "Family Law Client",
      rating: 5,
    },
    {
      quote:
        "I was facing serious criminal charges and Paras Chauhan's strategic defense was instrumental in achieving a favorable outcome. His knowledge of criminal law is impressive.",
      author: "Amit Singh",
      position: "Criminal Defense Client",
      rating: 5,
    },
    {
      quote:
        "Our company has relied on Paras Chauhan for all our legal matters for the past five years. His business acumen combined with legal expertise has been invaluable to our growth.",
      author: "Priya Sharma",
      position: "CEO, Tech Solutions Ltd.",
      rating: 5,
    },
    {
      quote:
        "The property dispute I was involved in seemed impossible to resolve until I hired Paras Chauhan. His methodical approach and negotiation skills resulted in a settlement that exceeded my expectations.",
      author: "Vikram Mehta",
      position: "Civil Law Client",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">
            Client Success Stories
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Hear from our clients about their experiences and the results we've achieved for them.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
          <div className="overflow-hidden">
            <div className="transition-all duration-500 ease-in-out">
              <Card className="border-none shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <Quote className="h-12 w-12 text-primary/20 mb-6" />
                  <p className="text-xl md:text-2xl font-playfair italic mb-8 text-slate-800">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">
                        {testimonials[currentIndex].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{testimonials[currentIndex].author}</p>
                      <p className="text-sm text-slate-500">{testimonials[currentIndex].position}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.84-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
