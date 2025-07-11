"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, MessageCircle, FileText, Menu, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const [activeTab, setActiveTab] = useState("skills")
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
  const [menuOpen, setMenuOpen] = useState(false)
  const tabSectionRef = useRef<HTMLDivElement | null>(null)
  const heroRef = useRef<HTMLDivElement | null>(null)
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null)

  const handleMenuClick = (tab: string) => {
    if (tab === 'home') {
      setMenuOpen(false)
      setActiveOverlay(null)
      heroRef.current?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    setActiveOverlay(tab)
    setMenuOpen(false)
  }

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  useEffect(() => {
    const idx = ["skills", "projects", "testimonials", "connect"].indexOf(activeTab)
    const node = tabRefs.current[idx]
    if (node) {
      setUnderlineStyle({
        left: node.offsetLeft,
        width: node.offsetWidth
      })
    }
  }, [activeTab])

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "Node.js",
    "C",
    "C++",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Git",
    "GitHub",
    "Vercel",
  ]

  const projects = [
    {
      title: "Faculty Publication Management System",
      description:
        " A web-based solution designed to handle faculty publication data. Offers features like submission tracking, admin approvals, and record management.",
      tech: ["JSP", "Java", "MySQL"],
      github: "https://github.com/mansinaharrr/Faculty-Publication-Management-System",
      live: "#",
    },
    {
      title: "Pet Adoption and Rescue System",
      description: "Developed a database-driven platform to support rescue centers in managing pet adoptions.",
      tech: ["Node.js", "React.js", "TypeScript", "TailWind CSS", "MySQL"],
      github: "https://github.com/mansinaharrr/Pet-Adoption-and-Rescue-System",
      live: "https://pet-adoption-and-rescue-system.vercel.app/",
    },
    {
      title: "RFID based Payment System",
      description: "Built a contactless payment system tailored for college canteen, using RFID chips embedded in student ID cards.",
      tech: ["React", "Chart.js", "TailWind CSS", "API Integration"],
      github: "#",
      live: "https://quick-tap-pay.lovable.app/",
    },
    {
      title: "AI Recipe Generator",
      description: "Developed a personalized recipe recommendation tool using the OpenAI API to suggest meals based on available ingredients.",
      tech: ["React", "OpenAI API"],
      github: "#",
      live: "#",
    },
  ]

  const experience = [
    {
      title: "Senior UI/UX Designer",
      company: "TechCorp Inc.",
      period: "Jan 2024 - Present",
      description:
        "Led design systems and user experience for multiple high-impact products. Collaborated with cross-functional teams to deliver pixel-perfect interfaces.",
      current: true,
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2022 - 2023",
      description:
        "Developed and maintained scalable web applications. Improved application performance by 40% and mentored junior developers.",
      current: false,
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description:
        "Created responsive web applications and collaborated with design teams to implement modern user interfaces.",
      current: false,
    },
  ]

  // Replace testimonials with certifications
  const certifications = [
    {
      title: "Introduction to Databases",
      issuer: "Coursera",
      description: "Understands fundamental database concepts, including relational models, SQL querying, normalization, and transaction processing.",
      file: "/coursera-intro-databases-certificate.pdf"
    },
    {
      title: "C++ Programming",
      issuer: "Udemy",
      description: "Foundational knowledge of C++ programming, including data types, functions, OOP, memory management, and STL.",
      file: "/udemy-cpp-certificate.pdf"
    },
    {
      title: "Graphic Design",
      issuer: "Image Creations",
      description: "Hands-on experience with visual design, branding, and layout using Adobe Photoshop, Illustrator, and InDesign.",
      file: "/image-certificate.pdf"
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""}`}>
      <div className={`${isDark ? 'bg-black text-white' : 'bg-[#F3E6B3] text-black'}`}>
        {/* Hero Section - Full Screen Background */}
        <section ref={heroRef} className="min-h-screen relative overflow-hidden">
          {/* Background Image - Full Screen */}
          <div className="absolute inset-0">
            <Image
              src="/profile-bg.jpeg"
              alt="Your Photo"
              fill
              className="object-cover object-[center_30%]"
              priority
              quality={100}
            />
            {/* Subtle dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </div>
          {/* Hamburger Menu */}
          <button
            className="absolute top-6 left-6 z-[9999] p-2 rounded-md bg-black/40 hover:bg-black/70 text-white"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="w-7 h-7" />
          </button>
          {/* Drawer Overlay */}
          <div className={`fixed inset-0 z-50 flex`} style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}>
            <div className={`bg-white/5 w-64 h-full p-8 flex flex-col gap-6 shadow-lg transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <button className="self-end mb-8 text-white text-2xl" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
              <button className="text-[rgba(255,230,165,1)] text-lg font-semibold text-left" onClick={() => handleMenuClick('home')}>Home</button>
              <button className="text-[rgba(255,230,165,1)] text-lg font-semibold text-left" onClick={() => handleMenuClick('skills')}>Skills</button>
              <button className="text-[rgba(255,230,165,1)] text-lg font-semibold text-left" onClick={() => handleMenuClick('projects')}>Projects</button>
              <button className="text-[rgba(255,230,165,1)] text-lg font-semibold text-left" onClick={() => handleMenuClick('testimonials')}>Certifications</button>
              <button className="text-[rgba(255,230,165,1)] text-lg font-semibold text-left" onClick={() => handleMenuClick('connect')}>Connect</button>
            </div>
            <div
              className={`flex-1 transition-colors duration-300 ${menuOpen ? 'bg-black/60' : 'bg-black/0'}`}
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* Top Navigation Bar (Header) - Only in Hero Section */}
          {(!activeOverlay || activeOverlay === 'home') && (
            <div className="absolute top-0 left-0 right-0 z-[200] p-6">
              <div className="flex justify-end items-center max-w-7xl mx-auto">
                {/* Social Icons & Theme Toggle */}
                <div className="flex items-center gap-4">
                  <a href="https://github.com/mansinaharrr" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-cyan-400 hover:bg-white/10 rounded-full">
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/mansi-nahar-s/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-cyan-400 hover:bg-white/10 rounded-full">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href="mailto:mansinahar2020@gmail.com" className="p-2 hover:text-cyan-400 hover:bg-white/10 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                  <a href="/Mansi Nahar CV.pdf" download className="p-2 hover:text-cyan-400 hover:bg-white/10 rounded-full">
                    <FileText className="w-5 h-5 text-white" />
                  </a>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsDark(!isDark)}
                    className="p-2 bg-black/10 backdrop-blur-sm hover:bg-black/20 border border-white/20 rounded-full"
                  >
                    {isDark ? <Sun className="h-4 w-4 text-white" /> : <Moon className="h-4 w-4 text-white" />}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Large Centered Name - Moved Further Down */}
          <div className="absolute inset-0 flex items-end justify-center pb-8 z-10">
            <div className="text-center">
              <h1
                className="text-5xl md:text-6xl font-light tracking-widest text-[#F3E6B3] mb-2 drop-shadow-2xl text-center"
                style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}
              >
                MANSI NAHAR S
              </h1>
              <p className="text-lg md:text-2xl font-normal text-white text-center drop-shadow-lg">
                Frontend Developer
              </p>
            </div>
          </div>
        </section>

        {/* Overlay Section for Skills, Projects, Testimonials, Connect */}
        {activeOverlay && activeOverlay !== 'home' && (
          <div key={activeOverlay} className="fixed inset-0 z-[100] flex flex-col bg-black/90 text-white animate-slide-in-left-to-right">
            {/* Hamburger always visible and on top */}
            <div className="fixed top-6 left-6 z-[9999]">
              <button
                className="p-2 rounded-md bg-black/40 hover:bg-black/70 text-white"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
            {/* Geometric Grid Top Left */}
            <svg className="absolute top-0 left-0 w-40 h-40 opacity-30 pointer-events-none" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#F3E6B3" strokeWidth="1" className="grid-opacity-pulse">
                <line x1="0" y1="40" x2="160" y2="40"/>
                <line x1="0" y1="80" x2="160" y2="80"/>
                <line x1="0" y1="120" x2="160" y2="120"/>
                <line x1="40" y1="0" x2="40" y2="160"/>
                <line x1="80" y1="0" x2="80" y2="160"/>
                <line x1="120" y1="0" x2="120" y2="160"/>
                <line x1="0" y1="0" x2="160" y2="160"/>
                <line x1="160" y1="0" x2="0" y2="160"/>
              </g>
            </svg>
            {/* Geometric Grid Bottom Right */}
            <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-30 pointer-events-none" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#F3E6B3" strokeWidth="1" className="grid-opacity-pulse">
                <line x1="0" y1="40" x2="160" y2="40"/>
                <line x1="0" y1="80" x2="160" y2="80"/>
                <line x1="0" y1="120" x2="160" y2="120"/>
                <line x1="40" y1="0" x2="40" y2="160"/>
                <line x1="80" y1="0" x2="80" y2="160"/>
                <line x1="120" y1="0" x2="120" y2="160"/>
                <line x1="0" y1="0" x2="160" y2="160"/>
                <line x1="160" y1="0" x2="0" y2="160"/>
              </g>
            </svg>
            {/* Section Content */}
            <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto px-4 py-12">
              {activeOverlay === 'skills' && (
                <>
                  <h2 className="text-4xl md:text-5xl font-serif text-center mb-6" style={{ color: 'rgba(255,230,165,1)', fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>SKILLS & EXPERTISE</h2>
                  <div className="max-w-2xl mx-auto text-center mb-8">
                    <p className="text-lg leading-relaxed text-gray-300">
                      I specialize in modern web development with a focus on creating intuitive user interfaces and scalable applications. My expertise spans across frontend and backend technologies.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-6 py-3 bg-white/20 text-white rounded-full text-sm font-medium transition-all duration-200`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </>
              )}
              {activeOverlay === 'projects' && (
                <>
                  <h2 className="text-4xl md:text-5xl font-serif text-center mb-6" style={{ color: 'rgba(255,230,165,1)', fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>PROJECTS</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
                    {projects.map((project) => (
                      <Card
                        key={project.title}
                        className="bg-black/60 text-white border-white/20 hover:border-[#F3E6B3] hover:opacity-70 transition-all duration-300 group max-w-md mx-auto w-full"
                      >
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-l font-semibold text-[rgba(255,230,165,1)]">{project.title}</h3>
                            <div className="flex gap-2">
                              <Button size="sm" variant="secondary" className="p-2">
                                <Github className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="secondary" className="p-2">
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs border-[rgba(255,230,165,1)] text-white">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}
              {activeOverlay === 'testimonials' && (
                <>
                  <h2 className="text-4xl md:text-5xl font-serif text-center mb-6" style={{ color: 'rgba(255,230,165,1)', fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>CERTIFICATIONS</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
                    {certifications.map((cert, idx) => (
                      <Card key={idx} className="bg-black/60 text-white border-white/20 hover:border-[#F3E6B3] transition-all duration-300 group max-w-xs mx-auto w-full">
                        <CardContent className="p-6 text-center flex flex-col justify-between h-full min-h-[260px]">
                          <h3 className="text-xl font-serif mb-2 text-[rgba(255,230,165,1)]">{cert.title}</h3>
                          <div className="text-sm font-medium mb-2 text-gray-300">{cert.issuer}</div>
                          <div className="flex-1 flex flex-col">
                            <p className="text-gray-400 text-sm mb-4 flex-1">{cert.description}</p>
                            <div className="mt-auto">
                              <a href={cert.file} download className="inline-flex items-center gap-2 px-3 py-2 rounded bg-black/30 border border-[rgba(255,230,165,1)] text-[rgba(255,230,165,1)] hover:bg-[rgba(255,230,165,0.1)] transition-all w-full justify-center">
                                <Download className="w-4 h-4" />
                                <span className="text-sm">Download</span>
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}
              {activeOverlay === 'connect' && (
                <>
                  <h2 className="text-4xl md:text-5xl font-serif text-center mb-6" style={{ color: 'rgba(255,230,165,1)', fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>LET'S CONNECT</h2>
                  <div className="max-w-2xl mx-auto text-center mb-8">
                    <p className="text-lg leading-relaxed text-gray-300">
                      Have a project in mind or just want to chat? I'd love to hear from you!
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <div className="p-1 border-2 border-[rgba(255,230,165,1)] rounded-lg inline-block">
                      <a
                        href="mailto:mansinahar2020@gmail.com"
                        className="border-[rgba(255,230,165,1)] text-[rgba(255,230,165,1)] hover:bg-[rgba(255,230,165,0.2)] hover:text-black px-5 py-3 bg-black/20 backdrop-blur-sm flex items-center justify-center rounded"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </div>
                    <div className="p-1 border-2 border-[rgba(255,230,165,1)] rounded-lg inline-block">
                      <a
                        href="https://calendly.com/mansinahar2020/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-[rgba(255,230,165,1)] text-[rgba(255,230,165,1)] hover:bg-[rgba(255,230,165,0.2)] hover:text-black px-8 py-3 bg-black/20 backdrop-blur-sm flex items-center justify-center rounded"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Schedule Call
                      </a>
                    </div>
                  </div>
                  <p className="mt-8 text-xs text-gray-400">
                    You can also reach me directly at <a href="mailto:mansinahar2020@gmail.com" className="underline">mansinahar2020@gmail.com</a> or call me at <a href="tel:+917200443602" className="underline">+91 7200443602</a>
                  </p>
                </>
              )}
            </div>
            {/* Drawer Overlay for navigation (same as hero) */}
            <div className={`fixed inset-0 z-[10000] flex`} style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}>
              <div className={`bg-white/5 w-64 h-full p-8 flex flex-col gap-6 shadow-lg transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <button className="self-end mb-8 text-white text-2xl" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
                <button className="text-[rgba(255,230,165,1)] text-lg font-semibold text-left" onClick={() => handleMenuClick('home')}>Home</button>
                <button className="text-[rgba(255,230,165,1)] text-lg font-semibold text-left" onClick={() => handleMenuClick('skills')}>Skills</button>
                <button className="text-[rgba(255,230,165,1)] text-lg font-semibold text-left" onClick={() => handleMenuClick('projects')}>Projects</button>
                <button className="text-[rgba(255,230,165,1)] text-lg font-semibold text-left" onClick={() => handleMenuClick('testimonials')}>Certifications</button>
                <button className="text-[rgba(255,230,165,1)] text-lg font-semibold text-left" onClick={() => handleMenuClick('connect')}>Connect</button>
              </div>
              <div
                className={`flex-1 transition-colors duration-300 ${menuOpen ? 'bg-black/60' : 'bg-black/0'}`}
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
