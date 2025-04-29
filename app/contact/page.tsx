import ContactSection from "@/components/home/contact-section"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-center mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Contact Us
          </h1>
          <p
            className="text-lg text-center max-w-3xl mx-auto text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Reach out to us for any inquiries, assistance, or further information. We're here to help!
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}