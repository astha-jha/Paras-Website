"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"

export default function GallerySection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false })
  }, [])

  const images = [
    { src: "/images/gallery1.jpg", alt: "Felicitation Ceremony 2023" },
    { src: "/images/gallery2.jpg", alt: "Panel Discussion at Law Summit" },
    { src: "/images/gallery3.jpg", alt: "Courtroom Session, Delhi High Court" },
    { src: "/images/gallery4.jpg", alt: "Award from Bar Council" },
  ]

  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string }>(null)

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              data-aos="fade-up"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {image.alt}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-3xl w-full bg-white p-4 rounded shadow-lg">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="w-full h-auto rounded"
              />
              <p className="mt-4 text-center text-gray-700">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
