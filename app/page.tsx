"use client"
import { useEffect, useRef } from "react"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import GetToKnowMe from "@/components/sections/GetToKnowMe"  
import { Contact } from "@/components/sections/Contacts"
import { NavBar } from "@/components/sections/NavBar"
import { Footer } from "@/components/sections/Footer"

export default function Portfolio() {
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const knowMeRef = useRef<HTMLElement>(null)  

  useEffect(() => {
    const handleScroll = () => {
      const sections = [heroRef, aboutRef, projectsRef, skillsRef, knowMeRef]

      sections.forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0

          if (isVisible) {
            const elements = ref.current.querySelectorAll(".scroll-animate")
            elements.forEach((el, index) => {
              const element = el as HTMLElement
              const delay = index * 100
              setTimeout(() => {
                element.style.opacity = "1"
                element.style.transform = "translateY(0)"
              }, delay)
            })
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <NavBar />
      <main>
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Skills ref={skillsRef} />
        <GetToKnowMe ref={knowMeRef} />
        <Contact ref={useRef<HTMLElement>(null)} />
      </main>
      <Footer />
    </div>
  )
}
