"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

export default function GalleryPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const sliderImages = [
    { src: "/images/gallery1.jpg", alt: "Felicitation Ceremony 2023" },
    { src: "/images/gallery2.jpg", alt: "Panel Discussion at Law Summit" },
    { src: "/images/gallery3.jpg", alt: "Courtroom Session, Delhi High Court" },
    { src: "/images/gallery4.jpg", alt: "Award from Bar Council" },
  ]

  const mediaPresenceImages = [
    { src: "/images/media1.jpg", title: "Featured in National Law Journal" },
    { src: "/images/media2.jpg", title: "TV Panel Debate on Legal Reforms" },
    { src: "/images/media3.jpg", title: "Keynote Speech at LegalTech Summit" },
    { src: "/images/media4.jpg", title: "Awarded Advocate of the Year" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="w-full py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-center mb-6"
            data-aos="fade-up"
          >
            Gallery
          </h1>
          <p
            className="text-lg text-center max-w-3xl mx-auto text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore our collection of highlights from Paras Chauhan’s distinguished legal journey.
          </p>
        </div>
      </div>

      {/* Image Slider Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center max-w-2xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Memorable Moments</h2>
            <p className="text-gray-600 text-base md:text-lg">
              A glimpse into milestones, events, and recognitions over the years.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            className="max-w-6xl mx-auto"
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide key={index} className="w-80 cursor-pointer">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-base md:text-lg font-medium text-center py-3 px-2">
                    {image.alt}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Media Presence Section */}
      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center max-w-2xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Media Presence</h2>
            <p className="text-gray-600 text-base md:text-lg">
              Recognized by the press and legal community across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-aos="fade-up">
            {mediaPresenceImages.map((item, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-md bg-white"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md font-semibold text-slate-800">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
