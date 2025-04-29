"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import AOS from "aos"
import "aos/dist/aos.css"

export default function VideoSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const videos = [
    {
      title: "Professional Insights: Topic 1",
      embedId: "placeholder-1",
    },
    {
      title: "Expert Discussion on Topic 2",
      embedId: "placeholder-2",
    },
    {
      title: "In-depth Analysis: Topic 3",
      embedId: "placeholder-3",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">Media Appearances</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Featured videos from television appearances, interviews, and professional presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Placeholder for video embed */}
                <div className="w-full h-0 pb-[56.25%] relative bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                      <p className="text-sm opacity-70">Video Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                <p className="text-sm text-slate-500">
                  This is a placeholder for a video that would showcase professional expertise and insights.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
