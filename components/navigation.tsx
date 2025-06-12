"use client"

import Link from "next/link"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function Navigation() {
  // Initialize smooth scrolling
  useSmoothScroll()

  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
        Özellikler
      </Link>
      <Link href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">
        Faydalar
      </Link>
      <Link href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors">
        Demo
      </Link>
    </nav>
  )
}
