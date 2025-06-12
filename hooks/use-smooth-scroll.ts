"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    // Handle anchor links with smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      // Check if this is a hash link for the current page
      if (anchor.hash && anchor.origin + anchor.pathname === window.location.origin + window.location.pathname) {
        e.preventDefault()

        const targetElement = document.querySelector(anchor.hash)
        if (targetElement) {
          // Smooth scroll to the element
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100, // Offset for header
            behavior: "smooth",
          })

          // Update URL without reload
          window.history.pushState(null, "", anchor.hash)
        }
      }
    }

    // Add event listener
    document.addEventListener("click", handleAnchorClick)

    // Clean up
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])
}
