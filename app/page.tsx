import Hero from "@/components/home/hero"
import AboutSection from "@/components/home/about-section"
import PracticeAreasSection from "@/components/home/practice-areas-section"
import ExperienceSection from "@/components/home/experience-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import CaseStudiesSection from "@/components/home/case-studies-section"
import BlogPreviewSection from "@/components/home/blog-preview-section"
import FaqSection from "@/components/home/faq-section"
import ContactSection from "@/components/home/contact-section"
import Footer from "@/components/footer"
// import Blog from "@/components/home/blog" // New import
//import Team from "@/components/home/team" // New import
import Contact from "@/components/home/contact-section" // New import

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutSection />
      <PracticeAreasSection />
      <ExperienceSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <BlogPreviewSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}