"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AppointmentForm() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const { toast } = useToast()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Appointment Request Submitted",
        description: "We will contact you shortly to confirm your appointment.",
      })

      // Reset form (in a real app, you would use a form library like react-hook-form)
      const form = e.target as HTMLFormElement
      form.reset()
      setDate(undefined)
    }, 1500)
  }

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-slate-900">Book an Appointment</h2>

            <p className="text-lg text-slate-700 mb-6">
              Fill out the form below to schedule a consultation. We will contact you to confirm your appointment and
              provide any additional information.
            </p>

            <div className="space-y-6 text-slate-700">
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-primary">•</div>
                <p>Please provide your contact information and preferred appointment date and time.</p>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1 text-primary">•</div>
                <p>Appointments are available Monday through Friday, from 9:00 AM to 5:00 PM.</p>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1 text-primary">•</div>
                <p>Include a brief description of your needs to help us prepare for your consultation.</p>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-1 text-primary">•</div>
                <p>We will confirm your appointment within 24 hours of submission.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-100" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-900">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input id="firstName" name="firstName" placeholder="Enter your first name" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-900">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input id="lastName" name="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-900">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email address" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-900">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input id="phone" name="phone" placeholder="Enter your phone number" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => {
                            const day = date.getDay()
                            return day === 0 || day === 6 // Disable weekends
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-900">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please provide any additional information about your appointment request"
                    rows={4}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Submitting..." : "Submit Appointment Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
