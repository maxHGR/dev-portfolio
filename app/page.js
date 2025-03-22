import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Download } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-primary">Alex</span>
                <br />
                Frontend Developer
              </h1>
              <p className="text-xl text-muted-foreground">
                I build accessible, responsive, and performant web applications with modern technologies.
              </p>
              <div className="flex gap-4">
                <Button>
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <a href="/alex-developer-cv.pdf" download className="inline-flex">
                  <Button variant="outline">
                    Download CV
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:hello@example.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/20 md:order-last order-first mx-auto md:mx-0 max-w-[300px] md:max-w-none">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Developer portrait"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted py-16">
          <div className="container space-y-6">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                About Me
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">My Journey as a Developer</h2>
              <p className="text-muted-foreground">
                A passionate frontend developer with a keen eye for design and user experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8">
              <div className="relative aspect-video overflow-hidden rounded-lg border">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Developer working"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <p>
                  I'm a frontend developer with 5+ years of experience building modern web applications. I specialize in
                  React, Next.js, and TypeScript, with a strong focus on creating accessible and performant user
                  interfaces.
                </p>
                <p>
                  My journey began with a degree in Computer Science, followed by roles at various tech companies where
                  I've had the opportunity to work on diverse projects ranging from e-commerce platforms to SaaS
                  applications.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open source, or
                  sharing my knowledge through blog posts and community events.
                </p>
                <div className="pt-2">
                  <a href="/alex-developer-cv.pdf" download className="inline-flex">
                    <Button variant="outline" size="sm">
                      Download My CV
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-16 space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Skills
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">My Technical Skills</h2>
            <p className="text-muted-foreground">The technologies and tools I use to bring products to life.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
            {[
              { name: "HTML & CSS", description: "Semantic markup and modern CSS" },
              { name: "JavaScript", description: "ES6+, TypeScript, and functional programming" },
              { name: "React", description: "Components, hooks, and state management" },
              { name: "Next.js", description: "Server-side rendering and static site generation" },
              { name: "Tailwind CSS", description: "Utility-first CSS framework" },
              { name: "UI/UX Design", description: "Figma, responsive design, and accessibility" },
              { name: "Testing", description: "Jest, React Testing Library, and Cypress" },
              { name: "Performance", description: "Web vitals optimization and monitoring" },
            ].map((skill, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle>{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{skill.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-muted py-16">
          <div className="container space-y-8">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                Projects
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
              <p className="text-muted-foreground">A selection of my recent projects and collaborations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {[
                {
                  title: "E-commerce Platform",
                  description: "A modern e-commerce platform built with Next.js and Stripe integration.",
                  image: "/placeholder.svg?height=300&width=500",
                  tags: ["Next.js", "Stripe", "Tailwind CSS"],
                },
                {
                  title: "Dashboard UI",
                  description: "An admin dashboard with data visualization and user management.",
                  image: "/placeholder.svg?height=300&width=500",
                  tags: ["React", "TypeScript", "Chart.js"],
                },
                {
                  title: "Mobile App",
                  description: "A cross-platform mobile application built with React Native.",
                  image: "/placeholder.svg?height=300&width=500",
                  tags: ["React Native", "Redux", "Firebase"],
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Visit project</span>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center pt-8">
              <Button variant="outline">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-16 space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Contact
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <p className="text-muted-foreground">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>
          <div className="max-w-md mx-auto pt-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>You can reach me through these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      <Link href="mailto:hello@example.com" className="hover:underline">
                        hello@example.com
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">
                      <Link
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/yourprofile
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Github className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-sm text-muted-foreground">
                      <Link
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/yourusername
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-medium mb-2">Availability</h3>
                  <p className="text-sm text-muted-foreground">
                    I'm currently available for freelance work and open to full-time opportunities.
                  </p>
                  <div className="mt-4">
                    <a href="/alex-developer-cv.pdf" download className="inline-flex">
                      <Button variant="outline" size="sm">
                        Download My CV
                        <Download className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:hello@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

