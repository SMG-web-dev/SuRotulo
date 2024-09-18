import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, Play } from "lucide-react"

// import { Button } from "@/components/ui/button"
import { Button } from "@chakra-ui/react";
import { JSX, SVGProps } from "react";
import { JSX, SVGProps } from "react";
import { JSX, SVGProps } from "react";
import { JSX, SVGProps } from "react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-white shadow-md">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/logo.png"
            alt="Su Rótulo en 3D Logo"
            width={200}
            height={50}
            className="h-12 w-auto"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#video">
            Our Work
          </Link>
          <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Elevate Your Brand with Premium 3D Signage
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl text-purple-100">
                  Crafting eye-catching 3D signs and custom designs that make your business stand out. Quality, creativity, and impact - all in one place.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-purple-600 hover:bg-purple-100">Get a Quote</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                  Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="video" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-purple-600">See Our Work in Action</h2>
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-lg">
              <div className="w-full h-full flex items-center justify-center">
                <Button className="flex items-center space-x-2">
                  <Play className="w-6 h-6" />
                  <span>Play Promo Video</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-100 to-purple-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-600">Our Services</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                icon={<SignpostIcon className="h-10 w-10 text-purple-500" />}
                title="3D Signboards"
                description="Eye-catching 3D signage solutions to make your brand pop."
              />
              <ServiceCard
                icon={<CubeIcon className="h-10 w-10 text-pink-500" />}
                title="Custom 3D Designs"
                description="Unique 3D designs tailored to your brand identity and needs."
              />
              <ServiceCard
                icon={<PenToolIcon className="h-10 w-10 text-red-500" />}
                title="3D Modeling"
                description="Professional 3D modeling services for various applications."
              />
              <ServiceCard
                icon={<ShirtIcon className="h-10 w-10 text-orange-500" />}
                title="3D Printed Products"
                description="High-quality 3D printed products for promotional needs."
              />
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-600">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to elevate your brand with 3D signage? Contact us for a free consultation and quote.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-purple-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-purple-600 text-white hover:bg-purple-700" type="submit">Subscribe to Newsletter</Button>
                </form>
              </div>
              <div className="flex space-x-4">
                <SocialLink href="https://instagram.com" icon={<Instagram className="h-6 w-6" />} label="Instagram" />
                <SocialLink href="https://facebook.com" icon={<Facebook className="h-6 w-6" />} label="Facebook" />
                <SocialLink href="tel:+1234567890" icon={<Phone className="h-6 w-6" />} label="Phone" />
                <SocialLink href="mailto:info@example.com" icon={<Mail className="h-6 w-6" />} label="Email" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-purple-100">
        <p className="text-xs text-gray-500">© 2023 Su Rótulo en 3D. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-purple-600" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-purple-600" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
      <div className="p-4 bg-purple-100 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold text-purple-600">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}

function SocialLink({ href, icon, label }) {
  return (
    <Link href={href} className="text-purple-600 hover:text-purple-700 transition-colors">
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  )
}

function SignpostIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v3" />
      <path d="M18.5 13h-13L2 9.5 5.5 6h13L22 9.5 18.5 13Z" />
      <path d="M12 13v8" />
    </svg>
  )
}

function CubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 6.14a8 8 0 0 1-8.88 0l-1.99-1.33a1 1 0 0 1-.38-1.13l.89-3.36a1 1 0 0 1 .99-.74h16.92a1 1 0 0 1 .99.74l.89 3.36a1 1 0 0 1-.38 1.13Z" />
      <path d="m7.62 5.55 5.38 3.59a1 1 0 0 0 1.1 0l5.38-3.59a1 1 0 0 0 0-1.66l-5.38-3.59a1 1 0 0 0-1.1 0L7.62 3.89a1 1 0 0 0 0 1.66Z" />
    </svg>
  )
}

function PenToolIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  )
}

function ShirtIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}