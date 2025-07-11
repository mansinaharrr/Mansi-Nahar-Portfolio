"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, MessageCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const [activeTab, setActiveTab] = useState("skills")
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "Exceptional developer with great attention to detail. Delivered projects ahead of schedule consistently.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Mike Chen",
      role: "CTO at StartupXYZ",
      content: "One of the most talented developers I've worked with. Great problem-solving skills and team player.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""}`}>
      <div className={`${isDark ? 'bg-black text-white' : 'bg-[#F3E6B3] text-black'}`}>
        {/* Hero Section - Full Screen Background */}
        <section className="min-h-screen relative overflow-hidden">
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
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Top Navigation Bar */}
          <div className="absolute top-0 left-0 right-0 z-50 p-6">
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

        {/* Technical Grid SVG Top Left Corner (after hero, before tabs) */}
        <section className="relative w-full h-0">
          <svg className="absolute top-0 left-0 w-40 h-40 opacity-30 pointer-events-none" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke={isDark ? '#F3E6B3' : '#000'} strokeWidth="1">
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
        </section>

        {/* Tabbed Navigation Section */}
        <section className={`py-12 ${isDark ? 'bg-black' : 'bg-[#F3E6B3]'}`}>
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 relative" style={{ position: 'relative' }}>
              {[
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "testimonials", label: "Testimonials" },
                { id: "connect", label: "Connect" },
              ].map((tab, idx) => (
                <button
                  key={tab.id}
                  ref={el => { tabRefs.current[idx] = el; }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-btn px-8 py-4 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm ${
                    activeTab === tab.id
                      ? `${isDark ? 'text-white' : 'text-black'} border border-gray-600`
                      : `bg-black/20 ${isDark ? 'text-gray-300 hover:text-white hover:bg-black/40' : 'text-black hover:text-black hover:bg-black/10'}`
                  }`}
                  style={{ position: 'relative' }}
                >
                  {tab.label}
                </button>
              ))}
              <div
                className="tab-underline"
                style={{
                  left: underlineStyle.left,
                  width: underlineStyle.width,
                  position: 'absolute',
                  bottom: 0,
                  height: '3px',
                  background: isDark ? 'rgba(255,230,165,1)' : '#000',
                  borderRadius: '2px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: 1
                }}
              />
            </div>

            {/* Tab Content */}
            <div key={activeTab} className="min-h-[400px] animate-fade-in-down">
              {/* Skills Tab */}
              {activeTab === "skills" && (
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  {/* Left Side - Labels and Title */}
                  <div className="space-y-6 mt-20 ml-20">
                    <p className={`${isDark ? 'text-[rgba(255,230,165,1)]' : 'text-black'} text-sm font-medium tracking-wider uppercase`}>
                      TECHNICAL SKILLS
                    </p>
                    <h2
                      className={`lg:text-4xl xl:text-5xl font-serif leading-tight ${isDark ? 'text-white' : 'text-black'} text-3xl`}
                      style={{ fontFamily: "Playfair Display, Cormorant Garamond, serif" }}
                    >
                      SKILLS &<br />
                      EXPERTISE
                    </h2>
                  </div>

                  {/* Right Side - Description and Skills */}
                  <div className="space-y-8">
                    <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-neutral-800'}`}>
                      I specialize in modern web development with a focus on creating intuitive user interfaces and
                      scalable applications. My expertise spans across frontend and backend technologies.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-6 py-3 ${isDark ? 'bg-white/20' : 'bg-black/60'} text-white rounded-full text-sm font-medium transition-all duration-200`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Projects Tab */}
              {activeTab === "projects" && (
                <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
                  {/* Left Side - Title */}
                  <div className="space-y-6 mt-20 ml-20">
                    <p className={`${isDark ? 'text-[rgba(255,230,165,1)]' : 'text-black'} text-sm font-medium tracking-wider uppercase`}>
                      PROJECTS
                    </p>
                    <h2
                      className={`lg:text-4xl xl:text-5xl font-serif leading-tight ${isDark ? 'text-white' : 'text-black'} text-3xl`}
                      style={{ fontFamily: "Playfair Display, Cormorant Garamond, serif" }}
                    >
                      FEATURED<br />PROJECTS
                    </h2>
                  </div>
                  {/* Right Side - Project Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project) => (
                      <Card
                        key={project.title}
                        className="bg-black/60 text-white border-white/20 hover:border-[#F3E6B3] hover:opacity-70 transition-all duration-300 group w-full"
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
                </div>
              )}

              {/* Testimonials Tab */}
              {activeTab === "testimonials" && (
                <div className="space-y-8">
                  <h2 className={`text-3xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-black'}`}>What People Say</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                      <Card key={index} className="bg-black/40 backdrop-blur-md border-white/20">
                        <CardContent className="p-8">
                          <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                          <div className="flex items-center gap-4">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={60}
                              height={60}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <div className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>{testimonial.name}</div>
                              <div className="text-sm text-gray-400">{testimonial.role}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Connect Tab */}
              {activeTab === "connect" && (
                <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
                  {/* Left Side - Title */}
                  <div className="space-y-6 mt-20 ml-20">
                    <p className={`${isDark ? 'text-[rgba(255,230,165,1)]' : 'text-black'} text-sm font-medium tracking-wider uppercase`}>
                      CONNECT
                    </p>
                    <h2
                      className={`lg:text-4xl xl:text-5xl font-serif leading-tight ${isDark ? 'text-white' : 'text-black'} text-3xl`}
                      style={{ fontFamily: "Playfair Display, Cormorant Garamond, serif" }}
                    >
                      LET'S<br />CONNECT
                    </h2>
                  </div>
                  {/* Right Side - Connect Card */}
                  <div className="max-w-2xl mx-auto">
                    <Card className="bg-black/40 backdrop-blur-md border-white/20">
                      <CardContent className="p-12 text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Mail className="w-10 h-10 text-white" />
                        </div>
                        <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Ready to Work Together?</h3>
                        <p className="text-gray-300 mb-8">
                        Have a project in mind or just want to chat? I'd love to hear from you!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                           {isDark ? (
                             <div className="p-1 border-2 border-[rgba(255,230,165,1)] rounded-lg inline-block">
                               <a
                                 href="mailto:mansinahar2020@gmail.com"
                                 className="border-[rgba(255,230,165,1)] text-[rgba(255,230,165,1)] hover:bg-[rgba(255,230,165,0.2)] hover:text-black px-5 py-3 bg-black/20 backdrop-blur-sm flex items-center justify-center rounded"
                               >
                                 <Mail className="w-4 h-4 mr-2" />
                                 Send Email
                               </a>
                             </div>
                           ) : (
                             <div className="p-1 border-2 border-black rounded-lg inline-block">
                               <a
                                 href="mailto:mansinahar2020@gmail.com"
                                 className="border-black text-black hover:bg-black/10 px-8 py-3 bg-transparent flex items-center justify-center rounded"
                               >
                                 <Mail className="w-4 h-4 mr-2" />
                                 Send Email
                               </a>
                             </div>
                           )}
                           {isDark ? (
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
                           ) : (
                             <div className="p-1 border-2 border-black rounded-lg inline-block">
                               <a
                                 href="https://calendly.com/mansinahar2020/30min"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="border-black text-black hover:bg-black/10 px-8 py-3 bg-transparent flex items-center justify-center rounded"
                               >
                                 <MessageCircle className="w-4 h-4 mr-2" />
                                 Schedule Call
                               </a>
                             </div>
                           )}
                        </div>
                        <p className="mt-8 text-xs text-gray-400">
                          You can also reach me directly at <a href="mailto:mansinahar2020@gmail.com" className="underline">mansinahar2020@gmail.com</a> or call me at <a href="tel:+917200443602" className="underline">+91 7200443602</a>
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        {/* Bottom Right Grid */}
        <section className="relative w-full h-0">
          <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-30 pointer-events-none" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke={isDark ? '#F3E6B3' : '#000'} strokeWidth="1">
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
        </section>
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-gray-900 dark:bg-black">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-300">© 2024 Mansi Nahar S. Crafted with passion and precision.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
