"use client"

import { useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import AOS from "aos"
import "aos/dist/aos.css"

export default function FAQSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const faqs = [
    {
      question: "What happens during the first consultation?",
      answer:
        "During your initial consultation, we'll discuss your legal concerns in detail, evaluate your case, explain potential legal strategies, and outline the next steps. This is also an opportunity for you to ask questions and determine if our services are the right fit for your needs.",
    },
    {
      question: "What are your fees and payment options?",
      answer:
        "Our fee structure varies depending on the nature and complexity of your case. We offer several payment options, including hourly rates, flat fees for specific services, and contingency arrangements for certain cases. We'll discuss all fee arrangements clearly during your initial consultation.",
    },
    {
      question: "How long will my case take to resolve?",
      answer:
        "The timeline for resolving legal matters varies significantly based on the complexity of the case, court schedules, and whether a settlement can be reached. During your consultation, we'll provide an estimated timeline based on our experience with similar cases.",
    },
    {
      question: "Will my case go to trial?",
      answer:
        "Many legal matters are resolved through negotiation or settlement without going to trial. However, we prepare every case as if it will go to trial to ensure we're in the strongest possible position. We'll advise you on the likelihood of trial based on the specifics of your situation.",
    },
    {
      question: "How often will I receive updates about my case?",
      answer:
        "We believe in maintaining clear communication with our clients. You'll receive regular updates on significant developments in your case, and we're always available to answer questions. We typically schedule check-in meetings at key milestones in your legal matter.",
    },
    {
      question: "Can I switch lawyers if I'm not satisfied with my current representation?",
      answer:
        "Yes, you have the right to change legal representation at any time. If you're considering switching to our firm, we can guide you through the transition process to ensure it happens smoothly and without compromising your case.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Find answers to common questions about our legal services and processes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} data-aos="fade-up" data-aos-delay={index * 50}>
                <AccordionTrigger className="text-left font-medium text-lg py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-slate-700 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
