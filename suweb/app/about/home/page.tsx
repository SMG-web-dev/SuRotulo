import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Play } from "lucide-react";
import { ReactNode } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { JSX, SVGProps } from "react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Image
              src="/images/logo.png"
              alt="Su Rótulo en 3D Logo"
              width={210}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm text-purple-600 font-medium hover:text-purple-950 transition-colors"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="text-sm text-purple-600 font-medium hover:text-purple-950 transition-colors"
              href="#video"
            >
              Our Work
            </Link>
            <Link
              className="text-sm text-purple-600 font-medium hover:text-purple-950 transition-colors"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-lg">
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
                <Button className="bg-white text-purple-600 hover:bg-purple-100 box-border">
                  Get a Quote
                </Button>
                <Button colorScheme='teal' variant='ghost'
                >
                  Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="video" className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-lg">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-purple-600">
              See Our Work in Action
            </h2>
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

        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-100 to-purple-100"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-screen-lg">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-600">
              Our Services
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                icon={<SignpostIcon className="h-10 w-10 text-purple-500" />}
                title="Signboards"
                description="Eye-catching 3D signage solutions to make your brand pop."
              />
              <ServiceCard
                icon={<CubeIcon className="h-10 w-10 text-pink-500" />}
                title="Custom Designs"
                description="Unique 3D designs tailored to your brand identity and needs."
              />
              <ServiceCard
                icon={<PenToolIcon className="h-10 w-10 text-red-500" />}
                title="3D Modeling"
                description="Professional 3D modeling services for various applications."
              />
              <ServiceCard
                icon={<ShirtIcon className="h-10 w-10 text-orange-500" />}
                title="Printed Products"
                description="High-quality printed products for promotional needs."
              />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-screen-lg">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-600">
                  Get in Touch
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to elevate your brand with 3D signage? Contact us for a free consultation and quote.
                </p>
              </div>

              <div className="flex space-x-4">
                <SocialLink
                  href="https://www.instagram.com/su.rotulo/?locale=zh-TW&hl=am-et"
                  icon={<Instagram className="h-6 w-6" />}
                  label="Instagram"
                />
                <SocialLink
                  href="https://www.facebook.com/Surotulopuntoes/"
                  icon={<Facebook className="h-6 w-6" />}
                  label="Facebook"
                />
                <SocialLink
                  href="tel:+34 637 436 773"
                  icon={<Phone className="h-6 w-6" />}
                  label="Phone"
                />
                <SocialLink
                  href="mailto:surotulo@yahoo.es"
                  icon={<Mail className="h-6 w-6" />}
                  label="Email"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-purple-100">
        <div className="container mx-auto flex items-center justify-between max-w-screen-lg">
          <p className="text-xs text-purple-600">
            © 2024 Su Rótulo en 3D. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 text-purple-600"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 text-purple-600"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
      <div className="p-4 bg-purple-100 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold text-purple-500">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}

type SocialLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
};

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="text-purple-600 hover:text-purple-700 transition-colors"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  );
}

function SignpostIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-signpost"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 14h10l3 -3l-3 -3h-10v-4" />
      <path d="M6 20v-16" />
      <path d="M6 20h6" />
    </svg>
  );
}

function CubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-cube"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="12 3 20 7 12 11 4 7 12 3" />
      <polyline points="12 12 20 8 20 16 12 20 4 16 4 8 12 12" />
    </svg>
  );
}

function PenToolIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-pen-tool"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 19l7 -7 2 2 -7 7 -2 0l-2 -2l7 -7" />
      <path d="M5 5l14 14" />
      <path d="M6 7l4 4" />
    </svg>
  );
}

function ShirtIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-shirt"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 7l3 -3a6 6 0 0 1 10 0l3 3v14h-4v-7h-8v7h-4v-14" />
      <path d="M10 7h4v7h-4z" />
    </svg>
  );
}