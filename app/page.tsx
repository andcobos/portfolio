"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const sections = [heroRef, aboutRef, projectsRef, skillsRef]

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
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="pt-24 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    <span className="sr-only">Andrea Cobos - </span>
                    Software
                    <span className="block bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent">
                      Developer
                    </span>
                  </h1>
                </div>
                <p className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-xl text-gray-600 leading-relaxed">
                  Passionate about creating innovative solutions and building exceptional digital experiences.
                </p>
                <div className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 flex space-x-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-200">
                    View Projects
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Download CV
                  </Button>
                </div>
              </div>

              {/* Isometric Elements */}
              <figure className="relative" aria-label="Decorative isometric design elements">
                <div className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700">
                  <div className="relative w-80 h-80 mx-auto">
                    {/* Main Cube */}
                    <div className="absolute inset-0 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl shadow-2xl transform perspective-1000 rotateX-12 rotateY-12"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-lg transform rotate-45 hover:rotate-90 transition-transform duration-500"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-lg transform -rotate-12 hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-lg animate-bounce"></div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-4xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <p className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-xl text-gray-600 max-w-3xl mx-auto">
                I'm a passionate software developer with a love for creating clean, efficient, and user-friendly
                applications.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend Development</h3>
                  <p className="text-gray-600">
                    Creating responsive and interactive user interfaces with modern frameworks.
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend Development</h3>
                  <p className="text-gray-600">
                    Building robust APIs and server-side applications with scalable architecture.
                  </p>
                </CardContent>
              </Card>

              <Card className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Development</h3>
                  <p className="text-gray-600">
                    Developing cross-platform mobile applications with native performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-xl text-gray-600">
                Here are some of my recent projects that showcase my skills and creativity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
                  tech: ["React", "Node.js", "MongoDB"],
                  gradient: "from-emerald-400 to-emerald-600",
                },
                {
                  title: "Task Management App",
                  description: "Collaborative task management tool with real-time updates",
                  tech: ["Next.js", "Socket.io", "PostgreSQL"],
                  gradient: "from-purple-400 to-purple-600",
                },
                {
                  title: "Weather Dashboard",
                  description: "Beautiful weather app with location-based forecasts",
                  tech: ["React", "API Integration", "Chart.js"],
                  gradient: "from-orange-400 to-orange-600",
                },
              ].map((project, index) => (
                <article
                  key={index}
                  className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 group hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 overflow-hidden"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 hover:bg-white/30 text-white border-0"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 hover:bg-white/30 text-white border-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 text-4xl font-bold text-gray-900 mb-4">
                Skills & Technologies
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "JavaScript", level: 90, color: "emerald" },
                { name: "React", level: 85, color: "purple" },
                { name: "Node.js", level: 80, color: "orange" },
                { name: "Python", level: 75, color: "pink" },
                { name: "TypeScript", level: 85, color: "emerald" },
                { name: "Next.js", level: 80, color: "purple" },
                { name: "MongoDB", level: 70, color: "orange" },
                { name: "PostgreSQL", level: 75, color: "pink" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="scroll-animate opacity-0 transform translate-y-8 transition-all duration-700 group"
                >
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600 h-2 rounded-full transition-all duration-1000 group-hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>

            <div className="flex justify-center space-x-6 mb-12">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full transform hover:scale-110 transition-all duration-200">
                <Mail className="w-6 h-6" />
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full transform hover:scale-110 transition-all duration-200">
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-full transform hover:scale-110 transition-all duration-200">
                <Github className="w-6 h-6" />
              </Button>
            </div>

            <Button className="bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-700 hover:to-purple-700 text-white px-12 py-4 rounded-lg text-lg transform hover:scale-105 transition-all duration-200">
              Get In Touch
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Portfolio. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
