import Link from "next/link"
import Image from "next/image"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Download } from "lucide-react"


import picture from "./assets/picture/Bewerbungsfoto.png"

import htmlIcon from "./assets/skill-icons/html.svg"
import cssIcon from "./assets/skill-icons/css.svg"
import javascriptIcon from "./assets/skill-icons/javascript.svg"
import reactIcon from "./assets/skill-icons/react.svg"
import tailwindIcon from "./assets/skill-icons/tailwind.svg"
import reduxIcon from "./assets/skill-icons/redux.svg"
import nextjsIcon from "./assets/skill-icons/nextjs.svg"
import uiuxIcon from "./assets/skill-icons/uiux.svg"
import blockchainIcon from "./assets/skill-icons/blockchain.svg"

import ecommerceProject from "./assets/projects/buether.png"
import weatherChatProject from "./assets/projects/ai-weather.png"
import recipeFinderProject from "./assets/projects/recipe-finder.png"
import newsFeedProject from "./assets/projects/news-feed.png"

import aboutmeIllustration from "./assets/illustrations/computer-illustration(2).avif"

export default function PortfolioPage() {
  const containerStyle = "container min-w-full px-2 sm:px-8"; 

  const skillIcons = {
    html: htmlIcon,
    css: cssIcon,
    javascript: javascriptIcon,
    react: reactIcon,
    tailwind: tailwindIcon,
    redux: reduxIcon,
    nextjs: nextjsIcon,
    blockchain: blockchainIcon,
    uiux: uiuxIcon,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className={`${containerStyle} flex h-16 items-center justify-between`}>
          
          <div className="basis-2/6 font-bold text-xl">
            <Link href="/">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
          </div>

          <nav className="basis-2/6 flex justify-center hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="basis-2/6 flex justify-end items-center gap-4">
            <Link
              href="https://github.com/maxHGR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors">
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/h%C3%B6ger-maximilian/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className={`${containerStyle} pb-16  pt-5 md:pt-2 space-y-8`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-primary">Maximilian,</span>
                <br />
                Frontend Developer
              </h1>
              <p className="text-xl text-muted-foreground">
                I build accessible, responsive, and performant web applications with modern technologies.
              </p>
              <div className="flex justify-start gap-x-3">
                <Link href="/#projects">
                  <Button>
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="/cv/cv-maximilian-hoeger.pdf" download className="inline-flex">
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
                <Link href="https://www.linkedin.com/in/h%C3%B6ger-maximilian/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:maxhgr3@gmail.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className="relative aspect-square flex justify-center items-center overflow-hidden rounded-full  md:order-last order-first mx-auto md:mx-0 max-w-[300px] md:max-w-none">
              <Image
                src={picture}
                alt="Developer portrait"
                width={500}
                height={500}
                className="object-fit rounded-full border-4 border-primary/20"
                priority />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted py-16 ">
          <div className={`${containerStyle} space-y-6`}>
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
              <div className="relative aspect-video">
                <Image
                  src={aboutmeIllustration}
                  alt="Developer working"
                  width={500}
                  height={300}
                  className="object-cover rounded-lg mx-auto" />
              </div>
              <div className="p-2 space-y-4 leading-loose tracking-wide">
                <p>
                  I'm a frontend developer who builds modern web applications. I specialize in
                  React, Next.js and Tailwind CSS, with a strong focus on creating accessible and performant user
                  interfaces.
                </p>
                <p>
                  My journey began with a web development course, followed by learning the fundamentals of computer systems and various technologies 
                  which I used to work on diverse projects ranging from e-commerce to blockchain.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, reading tech articles, or
                  learning about computer systems .
                </p>
                <div className="pb-2 pt-5">
                  <a href="/cv/cv-maximilian-hoeger.pdf" download className="inline-flex">
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
        <section id="skills" className={`${containerStyle} py-16 space-y-8`}>
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Skills
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">My Technical Skills</h2>
            <p className="text-muted-foreground">The technologies and tools I use to bring products to life.</p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
            {[
              { name: "HTML", description: "Semantic markup and accessability", icon: skillIcons.html },
              { name: "CSS", description: "Modern and responsive CSS styling", icon: skillIcons.css },
              { name: "JavaScript", description: "ES6+, TypeScript, and functional programming", icon: skillIcons.javascript },
              { name: "React", description: "Components, hooks, and state management", icon: skillIcons.react },
              { name: "Next.js", description: "Server-side rendering and static site generation", icon: skillIcons.nextjs },
              { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: skillIcons.tailwind },
              { name: "UI/UX", description: "Responsive design and intuitive navigation that increases user experience", icon: skillIcons.uiux },
              { name: "Blockchain", description: "Blockchain technology, NFTs and Smart Contracts", icon: skillIcons.blockchain },
            ].map((skill, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{skill.name}</CardTitle>
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={50}
                      height={50}
                      className="object-contain mr-[5%]" />                       
                  </div>
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
          <div className={`${containerStyle} space-y-8`}>
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                Projects
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
              <p className="text-muted-foreground">A selection of my projects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {[
                {
                  title: "E-commerce Platform",
                  description: "A modern e-commerce platform built with Next.js, Redux and Stripe integration. ",
                  image: ecommerceProject,
                  url: "https://buether.vercel.app/",
                  github: "https://github.com/maxHGR/buether-clothing",
                  tags: ["React", "Next.js", "Stripe", "REST API", "Tailwind CSS", "Redux", "Firebase"],
                },
                {
                  title: "News Feed",
                  description: "News feed application that fetches articles from various sources.",
                  image: newsFeedProject,
                  url: "https://pulswire.vercel.app/",
                  github: "https://github.com/maxHGR/news-feed",
                  tags: ["React", "Next.js", "REST API", "CSS", "Tailwind CSS"],
                },
                {
                  title: "Recipe Finder",
                  description: "Recipe App which let´s you find recipes based on ingredients you have at home.",
                  image: recipeFinderProject,
                  url: "https://react-recipe-app-chi.vercel.app",
                  github: "https://github.com/maxHGR/recipe-app",
                  tags: ["React", "CSS"],
                },
                {
                  title: "AI Weather Chat",
                  description: "A chatbot that provides real-time weather updates using AI and OpenWeather API.",
                  image: weatherChatProject,
                  url: "https://ai-chatbot-mauve-eight.vercel.app",
                  github: "https://github.com/maxHGR/ai-chatbot",
                  tags: ["React", "TypeScript", "Tailwind CSS","OpenAI API"],
                },
                
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover" />
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
                  <CardFooter className="flex justify-end">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href={project.url} target="blank" rel="noopener noreferrer">
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Visit project</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`${containerStyle} py-16 space-y-8`}>
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
                      <Link href="mailto:maxhgr3@gmail.com" className="hover:underline">
                        maxhgr3@gmail.com
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
                        href="https://www.linkedin.com/in/h%C3%B6ger-maximilian/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline">
                        https://www.linkedin.com/in/höger-maximilian/
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
                        href="https://github.com/maxHGR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline">
                        github.com/maxHGR
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-medium mb-2">Availability</h3>
                  <p className="text-sm text-muted-foreground">
                    I'm currently available for freelance work and open to full-time opportunities.
                  </p>
                  <div className="mt-8 flex justify-end">
                    <a href="/cv/cv-maximilian-hoeger.pdf" download className="inline-flex">
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
        <div
          className={`${containerStyle} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/maxHGR" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/h%C3%B6ger-maximilian/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:maxhgr3@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

