"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import AOS from "aos"
import "aos/dist/aos.css"

export default function GallerySection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Professional event 1",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Professional event 2",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Professional event 3",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Professional event 4",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Professional event 5",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Professional event 6",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">Gallery</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            A collection of moments from professional events, conferences, and speaking engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <div className="relative">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
