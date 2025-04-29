"use client"

import { useEffect } from "react"
import { Briefcase, Award, Scale } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function TimelineSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const timelineEvents = [
    {
      year: "2022",
      title: "Designated Senior Advocate",
      description: "Honored with the prestigious designation of Senior Advocate in recognition of exceptional legal expertise and contributions to the field.",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      year: "2018",
      title: "Founded Chauhan Law Associates",
      description: "Established a full-service law firm specializing in corporate, constitutional, and criminal law.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
    },
    {
      year: "2015",
      title: "Supreme Court Authorization",
      description: "Received authorization to practice before the Supreme Court of India.",
      icon: <Scale className="h-6 w-6 text-primary" />,
    },
    {
      year: "2010",
      title: "Bar Council Registration",
      description: "Registered with the Bar Council and began practice as an advocate.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
    },
    {
      year: "2008",
      title: "Law Degree",
      description: "Graduated with honors from National Law University with an LL.B. degree.",
      \
