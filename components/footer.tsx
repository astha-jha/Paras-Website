import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Paras Chauhan</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Dedicated to providing exceptional legal services with integrity, expertise, and a commitment to client
              success.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/practice-areas#family-law" className="text-gray-400 hover:text-white transition-colors">
                  Family Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#criminal-law" className="text-gray-400 hover:text-white transition-colors">
                  Criminal Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#corporate-law" className="text-gray-400 hover:text-white transition-colors">
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#civil-law" className="text-gray-400 hover:text-white transition-colors">
                  Civil Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#arbitration" className="text-gray-400 hover:text-white transition-colors">
                  Arbitration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="text-gray-400 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-0.5" />
                <span className="text-gray-400">123 Legal Chambers, High Court Road, New Delhi, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">contact@paraschauhan.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Paras Chauhan, Advocate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
