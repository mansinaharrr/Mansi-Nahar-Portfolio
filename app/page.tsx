"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, MessageCircle, FileText, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [activeTab, setActiveTab] = useState("skills")
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
  const tabSectionRef = useRef<HTMLDivElement | null>(null)
  const heroRef = useRef<HTMLDivElement | null>(null)

  const handleMenuClick = (tab: string) => {
    const targetId = tab === 'home' ? 'home' : tab
    const target = document.getElementById(targetId)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
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
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "Snowflake", "MongoDB"] },
    { category: "Frameworks", items: ["FastAPI", "React.js", "Node.js", "Express.js", "SQLAlchemy"] },
    { category: "Data Analytics", items: ["Great Expectations", "Power BI", "KNIME", "Fuzzy Matching"] },
    { category: "Tools", items: ["Git", "Claude Code"] },
    { category: "Authentication and APIs", items: ["JWT Authentication", "REST APIs", "API Integration"] },
  ]

  const projects = [
    {
      title: "Master Data Management",
      description:
        " Developed a centralized Master Data Management platform for data pipeline orchestration, real-time table health monitoring, automated schema and business rule validation using Great Expectations, and fuzzy matching-based entity resolution and deduplication to improve data quality and integrity.",
      tech: ["Python", "React", "Node.Js", "Express", "PostreSQL", "Great Expectations", "Fuzzy Matching"],
      github: "https://github.com/mansinaharrr/MDM",
      live: "#",
    },
    {
      title: "Pet Adoption and Rescue System",
      description: "Developed a full-stack Pet Adoption and Rescue platform for NGOs, featuring pet discovery, rescue center directory, volunteer and donation management, event listings, and secure user authentication to streamline pet adoption and community engagement.",
      tech: ["FastAPI", "Python", "PostreSQL", "SQLAlchemy", "JWT Authentication"],
      github: "https://github.com/mansinaharrr/pet_adoption_platform",
      live: "https://pet-adoption-platform-4x2i.onrender.com/",
    },
    {
      title: "RFID based Payment System",
      description: "Built a contactless payment system tailored for college canteen, using RFID chips embedded in student ID cards.",
      tech: ["React", "Chart.js", "TailWind CSS", "API Integration"],
      github: "#",
      live: "https://quick-tap-pay.lovable.app/",
    },
    {
      title: "AI Resume Analyzer",
      description: "Developed an AI-powered Resume Analyzer with automated ATS scoring, job description matching, LLM-based resume parsing for skill gap analysis and candidate-job alignment, and a secure RESTful backend with authentication, document management, analysis history, and personalized resume recommendations.",
      tech: ["FastAPI", "Python", "PostreSQL", "SQLAlchemy", "JWT Authentication", "GeminiAPI"],
      github: "https://github.com/mansinaharrr/ai-resume-analyzer",
      live: "https://ai-resume-analyzer-rpoc.onrender.com/",
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
      title: "MongoDB Associate Developer",
      issuer: "MongoDB",
      description: "Foundational knowledge of MongoDB, including database design, querying, and administration.",
      file: "/mongodb-associate-developer-certificate.pdf"
    },
  ]

  const accent = isDark ? "#E7C39B" : "#8C4F2C"
  const accentHover = isDark ? "#F0D6AE" : "#7A4325"
  const navText = isDark ? "#E7C39B" : "#5D3D2F"
  const pageBg = isDark ? "bg-[#111111] text-[#F5F1EA]" : "bg-[#F7F4EE] text-[#2A1D16]"
  const sectionBg1 = isDark ? "bg-[#111111]" : "bg-[#F7F4EE]"
  const sectionBg2 = isDark ? "bg-[#181818]" : "bg-[#F2EEE8]"
  const cardClass = isDark ? "border-[#E7C39B]/30 bg-[#1A1A1A] text-[#F5F1EA]" : "border-[#8C4F2C]/20 bg-white/80 text-[#2A1D16]"
  const mutedText = isDark ? "text-[#E5D7C5]" : "text-[#4B3B35]"
  const softText = isDark ? "text-[#F5F1EA]" : "text-[#2A1D16]"

  return (
    <div className={`min-h-screen transition-colors duration-300 ${pageBg}`}>
      <div className={`${isDark ? 'bg-[#111111] text-[#F5F1EA]' : 'bg-[#F7F4EE] text-[#2A1D16]'}`}>
        {/* Hero Section - Split Layout */}
        <section id="home" ref={heroRef} className={`min-h-screen relative overflow-hidden ${isDark ? 'bg-[#111111]' : 'bg-[#f7f4ee]'}`}>
          <div className="absolute top-0 left-0 right-0 z-[200] p-6">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <div className="hidden md:flex" />

                <div className="hidden items-center justify-center gap-4 md:flex">
                  {['skills', 'projects', 'internship', 'certifications', 'connect'].map((section) => (
                    <button
                      key={section}
                      type="button"
                      onClick={() => handleMenuClick(section)}
                      className={`text-sm font-medium uppercase tracking-[0.18em] transition-colors ${isDark ? 'text-[#E7C39B] hover:text-[#F0D6AE]' : 'text-[#5D3D2F] hover:text-[#8C4F2C]'}`}
                    >
                      {section === 'certifications' ? 'Certifications' : section === 'internship' ? 'Internship' : section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-end gap-4">
                  <a href="https://github.com/mansinaharrr" target="_blank" rel="noopener noreferrer" className={`rounded-full p-2 ${isDark ? 'text-[#E7C39B] hover:bg-[#E7C39B]/10' : 'text-[#5D3D2F] hover:bg-[#8C4F2C]/10'}`}>
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/mansi-nahar-s/" target="_blank" rel="noopener noreferrer" className={`rounded-full p-2 ${isDark ? 'text-[#E7C39B] hover:bg-[#E7C39B]/10' : 'text-[#5D3D2F] hover:bg-[#8C4F2C]/10'}`}>
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:mansinahar2020@gmail.com" className={`rounded-full p-2 ${isDark ? 'text-[#E7C39B] hover:bg-[#E7C39B]/10' : 'text-[#5D3D2F] hover:bg-[#8C4F2C]/10'}`}>
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="/Mansi_Resume.pdf" download className={`rounded-full p-2 ${isDark ? 'text-[#E7C39B] hover:bg-[#E7C39B]/10' : 'text-[#5D3D2F] hover:bg-[#8C4F2C]/10'}`}>
                    <FileText className="w-5 h-5" />
                  </a>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsDark(!isDark)}
                    className={`rounded-full border p-2 ${isDark ? 'border-[#E7C39B]/30 bg-[#1A1A1A] hover:bg-[#E7C39B]/10' : 'border-[#8C4F2C]/30 bg-[#F7F4EE] hover:bg-[#8C4F2C]/10'}`}
                  >
                    {isDark ? <Sun className="h-4 w-4 text-[#E7C39B]" /> : <Moon className="h-4 w-4 text-[#5D3D2F]" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-16 md:px-10">
            <div className="grid w-full items-center gap-10 md:grid-cols-[360px_1fr]">
              <div className="flex justify-center md:justify-start">
                <div className="relative h-[260px] w-[260px] overflow-hidden rounded-full border-[6px] border-[#8C4F2C] shadow-[0_30px_80px_rgba(88,52,32,0.18)] md:h-[360px] md:w-[360px]">
                  <Image
                    src="/profile-bg.jpeg"
                    alt="Mansi Nahar S"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <h1
                  className={`text-4xl font-light tracking-[0.14em] md:text-6xl ${isDark ? 'text-[#E7C39B]' : 'text-[#8C4F2C]'}`}
                  style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}
                >
                  MANSI NAHAR S
                </h1>
                <p className={`mt-4 text-xl font-medium md:text-3xl ${isDark ? 'text-[#F5F1EA]' : 'text-black'}`}>
                  Software Engineer
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
            <button
              type="button"
              aria-label="Scroll down"
              onClick={() => {
                const nextSection = document.getElementById('skills')
                nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:-translate-y-1 ${isDark ? 'bg-[#E7C39B] hover:bg-[#F0D6AE]' : 'bg-[#8C4F2C] hover:bg-[#7a4325]'}`}
            >
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </section>

        <section id="skills" className={`${sectionBg1} px-6 py-24 md:px-10`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={`mb-8 text-center text-3xl font-semibold uppercase tracking-[0.2em] md:text-5xl ${isDark ? 'text-[#E7C39B]' : 'text-[#8C4F2C]'}`} style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>
              Skills 
            </h2>
            <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map(({ category, items }) => (
                <article key={category} className={`rounded-md border p-5 ${isDark ? 'border-[#E7C39B]/25 bg-[#1A1A1A]' : 'border-[#8C4F2C]/20 bg-white/70'}`}>
                  <h3 className={`mb-4 text-base font-semibold ${isDark ? 'text-[#E7C39B]' : 'text-[#8C4F2C]'}`}>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className={`rounded border px-2.5 py-1.5 text-sm ${isDark ? 'border-[#E7C39B]/20 bg-[#111111] text-[#F5F1EA]' : 'border-[#8C4F2C]/15 bg-[#F7F4EE] text-[#3d2d2a]'}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={`${sectionBg2} px-6 py-24 md:px-10`}>
          <div className="mx-auto max-w-6xl">
            <h2 className={`mb-12 text-center text-3xl font-semibold uppercase tracking-[0.2em] md:text-5xl ${isDark ? 'text-[#E7C39B]' : 'text-[#8C4F2C]'}`} style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.title} className={`${cardClass} shadow-sm`}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <h3 className={`text-xl font-semibold ${isDark ? 'text-[#E7C39B]' : 'text-[#8C4F2C]'}`}>{project.title}</h3>
                      <div className="flex gap-2">
                        <Button asChild size="sm" variant="secondary" className={`p-2 ${isDark ? 'bg-[#E7C39B]/10 text-[#E7C39B] hover:bg-[#E7C39B]/15' : 'bg-[#8C4F2C]/10 text-[#5D3D2F] hover:bg-[#8C4F2C]/20'}`}>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                        {project.live !== "#" ? (
                          <Button asChild size="sm" variant="secondary" className={`p-2 ${isDark ? 'bg-[#E7C39B]/10 text-[#E7C39B] hover:bg-[#E7C39B]/15' : 'bg-[#8C4F2C]/10 text-[#5D3D2F] hover:bg-[#8C4F2C]/20'}`}>
                            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`}>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" variant="secondary" disabled title="Live demo not available" aria-label={`Live demo unavailable for ${project.title}`} className={`p-2 ${isDark ? 'bg-[#E7C39B]/10 text-[#E7C39B]' : 'bg-[#8C4F2C]/10 text-[#5D3D2F]'}`}>
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <p className={`mb-4 text-sm leading-relaxed ${isDark ? 'text-[#E5D7C5]' : 'text-[#4b3b35]'}`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className={`${isDark ? 'border-[#E7C39B]/30 bg-[#E7C39B]/5 text-[#E7C39B]' : 'border-[#8C4F2C]/30 bg-[#8C4F2C]/5 text-[#5D3D2F]'}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="internship" className={`${sectionBg1} px-6 py-24 md:px-10`}>
          <div className="mx-auto max-w-5xl">
            <h2 className={`mb-12 text-center text-3xl font-semibold uppercase tracking-[0.2em] md:text-5xl ${isDark ? 'text-[#E7C39B]' : 'text-[#8C4F2C]'}`} style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>
              Internships
            </h2>

            <div className="relative mx-auto max-w-3xl">
              <div className={`absolute left-6 top-0 h-full w-px md:left-8 ${isDark ? 'bg-[#E7C39B]/40' : 'bg-[#8C4F2C]/40'}`} />

              <div className="relative mb-8 pl-14 md:pl-20">
                <div className={`absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white shadow-md md:h-16 md:w-16 ${isDark ? 'bg-[#E7C39B] text-[#111111]' : 'bg-[#8C4F2C]'}`}>
                  2025
                </div>
                <Card className={`${cardClass} shadow-sm`}>
                  <CardContent className="p-6">
                    <p className={`mb-2 text-sm font-medium uppercase tracking-[0.15em] ${isDark ? 'text-[#E7C39B]' : 'text-[#8C4F2C]'}`}>Software Engineer Intern</p>
                    <h3 className={`text-2xl font-semibold ${isDark ? 'text-[#F5F1EA]' : 'text-[#2a1d16]'}`}>Analytix Hub Technologies</h3>
                    <p className={`mt-2 text-sm ${isDark ? 'text-[#E7C39B]' : 'text-[#5D3D2F]'}`}>December 2025 – March 2026</p>
                    <p className={`mt-4 text-base leading-relaxed ${isDark ? 'text-[#E5D7C5]' : 'text-[#4b3b35]'}`}>
                      Developed a centralized Master Data Management platform using Node.js and PostgreSQL to orchestrate data
pipelines and monitor table health through a unified dashboard. Integrated Great Expectations for automated
data quality validation and implemented fuzzy matching logic to ensure deduplication and intelligent entity
resolution across datasets.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className={`${sectionBg2} px-6 py-24 md:px-10`}>
          <div className="mx-auto max-w-6xl">
            <h2 className={`mb-12 text-center text-3xl font-semibold uppercase tracking-[0.2em] md:text-5xl ${isDark ? 'text-[#E7C39B]' : 'text-[#8C4F2C]'}`} style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>
              Certifications
            </h2>
            <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-2">
              {certifications.map((cert, idx) => (
                <Card key={idx} className={`${cardClass} shadow-sm`}>
                  <CardContent className="flex min-h-[260px] flex-col p-6 text-center">
                    <h3 className={`mb-2 text-xl font-semibold ${isDark ? 'text-[#E7C39B]' : 'text-[#8C4F2C]'}`}>{cert.title}</h3>
                    <div className={`mb-3 text-sm font-medium ${isDark ? 'text-[#E7C39B]' : 'text-[#5D3D2F]'}`}>{cert.issuer}</div>
                    <p className={`mb-4 flex-1 text-sm leading-relaxed ${isDark ? 'text-[#E5D7C5]' : 'text-[#4b3b35]'}`}>{cert.description}</p>
                    <a href={cert.file} download className={`mt-auto inline-flex items-center justify-center gap-2 rounded px-4 py-3 text-sm font-medium text-white transition ${isDark ? 'bg-[#E7C39B] text-[#111111] hover:bg-[#F0D6AE]' : 'bg-[#8C4F2C] hover:bg-[#7A4325]'}`}>
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" className={`${sectionBg1} px-6 py-24 md:px-10`}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className={`mb-8 text-3xl font-semibold uppercase tracking-[0.2em] md:text-5xl ${isDark ? 'text-[#E7C39B]' : 'text-[#8C4F2C]'}`} style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif' }}>
              Let's Connect
            </h2>
            <p className={`mx-auto max-w-2xl text-lg leading-relaxed ${isDark ? 'text-[#F5F1EA]' : 'text-[#3d2d2a]'}`}>
              Have a project in mind or just want to chat? I’d love to hear from you!
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="mailto:mansinahar2020@gmail.com" className={`inline-flex items-center justify-center rounded px-6 py-3 text-sm font-medium text-white transition ${isDark ? 'bg-[#E7C39B] text-[#111111] hover:bg-[#F0D6AE]' : 'bg-[#8C4F2C] hover:bg-[#7a4325]'}`}>
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
              <a href="https://calendly.com/mansinahar2020/30min" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center rounded border px-6 py-3 text-sm font-medium transition ${isDark ? 'border-[#E7C39B] bg-[#1A1A1A] text-[#E7C39B] hover:bg-[#E7C39B]/5' : 'border-[#8C4F2C] bg-white text-[#5D3D2F] hover:bg-[#8C4F2C]/5'}`}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule Call
              </a>
            </div>
            <p className={`mt-10 text-sm ${isDark ? 'text-[#E7C39B]' : 'text-[#5D3D2F]'}`}>
              You can also reach me directly at <a href="mailto:mansinahar2020@gmail.com" className="underline">mansinahar2020@gmail.com</a> or call me at <a href="tel:+917200443602" className="underline">+91 7200443602</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
