"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Moon, Sun } from "lucide-react";
import { ReactNode, useState, useEffect, useRef } from "react";
import { Button } from "@chakra-ui/react";
import { JSX, SVGProps } from "react";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [images, setImages] = useState([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real Next.js app, you'd typically fetch this data from an API
    // For this example, we'll simulate fetching image paths
    const imagePaths = [
      "/images/gallery/petrol.jpg",
      "/images/gallery/pp.jpg",
      "/images/gallery/rockstar.jpg",
      "/images/gallery/zapas.jpg",
      "/images/gallery/sol.jpg",
      "/images/gallery/7up.jpeg",
    ];
    setImages(imagePaths);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-purple-100 to-pink-100"
      }`}
    >
      <header
        className={`px-4 lg:px-6 h-20 flex items-center ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Image
              src="/images/logo.png"
              alt="Su Rótulo en 3D Logo"
              width={210}
              height={60}
              className={`h-12 w-auto ${darkMode ? "filter invert" : ""}`}
            />
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link
              className={`text-sm ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-purple-600 hover:text-purple-950"
              } font-medium transition-colors`}
              href="#contact"
            >
              Contact
            </Link>
            <Button
              onClick={toggleDarkMode}
              size="sm"
              variant="ghost"
              aria-label="Toggle dark mode"
              className={`p-2 ${
                darkMode
                  ? "text-yellow-200 hover:bg-gray-700"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section
          className={`w-full py-12 md:py-24 lg:py-32 xl:py-48 ${
            darkMode
              ? "bg-gray-800"
              : "bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
          } text-white`}
        >
          <div className="container mx-auto px-4 md:px-6 max-w-screen-lg">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Elevate Your Brand with Premium 3D Signage
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl text-purple-100">
                  Crafting eye-catching 3D signs and custom designs that make
                  your business stand out. Quality, creativity, and impact - all
                  in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="gallery"
          ref={galleryRef}
          className={`w-full py-12 md:py-24 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 ${
              darkMode ? "text-white" : "text-purple-600"
            }`}
          >
            Our Work Gallery
          </h2>
          <div
            className="flex animate-scroll"
            style={{
              width: `${images.length * 100}%`,
              animationDuration: `${images.length * 10}s`,
            }}
          >
            {images.concat(images).map((src, index) => (
              <div key={index} className="flex-shrink-0 w-screen px-2">
                <Image
                  src={src}
                  alt={`Gallery image ${(index % images.length) + 1}`}
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-lg object-cover w-full h-64"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475)
                  )}`}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </section>

        <section
          id="services"
          className={`w-full py-12 md:py-24 lg:py-32 ${
            darkMode
              ? "bg-gray-900"
              : "bg-gradient-to-b from-pink-100 to-purple-100"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6 max-w-screen-lg">
            <h2
              className={`text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 ${
                darkMode ? "text-white" : "text-purple-600"
              }`}
            >
              Our Services
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                icon={
                  <SignpostIcon
                    className={`h-10 w-10 ${
                      darkMode ? "text-purple-400" : "text-purple-500"
                    }`}
                  />
                }
                title="Signboards"
                description="Eye-catching 3D signage solutions to make your brand pop."
                darkMode={darkMode}
              />
              <ServiceCard
                icon={
                  <CubeIcon
                    className={`h-10 w-10 ${
                      darkMode ? "text-pink-400" : "text-pink-500"
                    }`}
                  />
                }
                title="Custom Designs"
                description="Unique 3D designs tailored to your brand identity and needs."
                darkMode={darkMode}
              />
              <ServiceCard
                icon={
                  <PenToolIcon
                    className={`h-10 w-10 ${
                      darkMode ? "text-red-400" : "text-red-500"
                    }`}
                  />
                }
                title="3D Modeling"
                description="Professional 3D modeling services for various applications."
                darkMode={darkMode}
              />
              <ServiceCard
                icon={
                  <ShirtIcon
                    className={`h-10 w-10 ${
                      darkMode ? "text-orange-400" : "text-orange-500"
                    }`}
                  />
                }
                title="Printed Products"
                description="High-quality printed products for promotional needs."
                darkMode={darkMode}
              />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={`w-full py-12 md:py-24 lg:py-32 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6 max-w-screen-lg">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className={`text-3xl font-bold tracking-tighter sm:text-5xl ${
                    darkMode ? "text-white" : "text-purple-600"
                  }`}
                >
                  Get in Touch
                </h2>
                <p
                  className={`max-w-[900px] ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  } md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed`}
                >
                  Ready to elevate your brand with 3D signage? Contact us for a
                  free consultation and quote.
                </p>
              </div>

              <div className="flex space-x-4">
                <SocialLink
                  href="https://www.instagram.com/su.rotulo/?locale=zh-TW&hl=am-et"
                  icon={<Instagram className="h-6 w-6" />}
                  label="Instagram"
                  darkMode={darkMode}
                />
                <SocialLink
                  href="https://www.facebook.com/Surotulopuntoes/"
                  icon={<Facebook className="h-6 w-6" />}
                  label="Facebook"
                  darkMode={darkMode}
                />
                <SocialLink
                  href="tel:+34 637 436 773"
                  icon={<Phone className="h-6 w-6" />}
                  label="Phone"
                  darkMode={darkMode}
                />
                <SocialLink
                  href="mailto:surotulo@yahoo.es"
                  icon={<Mail className="h-6 w-6" />}
                  label="Email"
                  darkMode={darkMode}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={`flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-purple-100"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between max-w-screen-lg">
          <p
            className={`text-xs ${
              darkMode ? "text-gray-400" : "text-purple-600"
            }`}
          >
            © 2024 Su Rótulo en 3D. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className={`text-xs hover:underline underline-offset-4 ${
                darkMode ? "text-gray-400" : "text-purple-600"
              }`}
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className={`text-xs hover:underline underline-offset-4 ${
                darkMode ? "text-gray-400" : "text-purple-600"
              }`}
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
  darkMode: boolean;
};

function ServiceCard({ icon, title, description, darkMode }: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col items-center space-y-4 text-center ${
        darkMode ? "bg-gray-800" : "bg-white"
      } p-6 rounded-xl shadow-lg transition-transform hover:scale-105`}
    >
      <div
        className={`p-4 ${
          darkMode ? "bg-gray-700" : "bg-purple-100"
        } rounded-full`}
      >
        {icon}
      </div>
      <h3
        className={`text-xl font-bold ${
          darkMode ? "text-white" : "text-purple-500"
        }`}
      >
        {title}
      </h3>
      <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
        {description}
      </p>
    </div>
  );
}

type SocialLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
  darkMode: boolean;
};

function SocialLink({ href, icon, label, darkMode }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className={`${
        darkMode
          ? "text-gray-300 hover:text-white"
          : "text-purple-600 hover:text-purple-700"
      } transition-colors`}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  );
}

function SignpostIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3v3" />
      <path d="M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z" />
      <path d="M18.5 6h3" />
      <path d="M2 9.5h3" />
      <path d="M12 13v8" />
    </svg>
  );
}

function CubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m21.12 6.4-7.12 4.16v7.53L21.12 14V6.4Z" />
      <path d="m2.88 6.4 7.12 4.16v7.53L2.88 14V6.4Z" />
      <path d="m2.88 6.4 9.12-5.3 9.12 5.3" />
    </svg>
  );
}

function PenToolIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function ShirtIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
