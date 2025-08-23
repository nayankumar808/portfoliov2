"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Code,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const skills = [
    "React",
    "Next.js",
    "Express",
    "Node Js",
    "GitHub",
    "MongoDB",
    "Tailwind CSS",
  ];

  const projects = [
    {
      name: "Eleweight",
      description: "Your personal fitness coach with AI plans.",
      image: "/eleweight.png",
      liveUrl: "https://eleweight.in/home",
      codeUrl: "https://github.com/you/eleweight",
      tech: ["React", "Node.js"],
      stackLine: "React, Node.js, Express, MongoDB",
      urlLabel: "https://www.eleweight.in/home",
    },
    // {
    //   name: "Cloud Clipper",
    //   description: "Next.js, Tailwind CSS, SnapVideo API",
    //   tech: ["Next.js", "Tailwind CSS"],
    //   image: "/placeholder-vcrj4.png",
    //   liveUrl: "https://cloudclipper.vercel.app/",
    //   codeUrl: "#",
    // },
    // {
    //   name: "takeUforward Landing Page",
    //   description: "Next.js, Tailwind CSS",
    //   tech: ["Next.js", "Tailwind CSS"],
    //   image: "/educational-platform-landing-page.png",
    //   liveUrl: "https://takeuforward.karank.tech/",
    //   codeUrl: "#",
    // },
    // {
    //   name: "ZenOps Landing Page",
    //   description: "Next.js, Tailwind CSS",
    //   tech: ["Next.js", "Tailwind CSS"],
    //   image: "/placeholder-0euhl.png",
    //   liveUrl: "https://zen-ops.vercel.app/",
    //   codeUrl: "#",
    // },
    // {
    //   name: "HY-Krox Agency Landing Page",
    //   description: "Next.js, Tailwind CSS",
    //   tech: ["Next.js", "Tailwind CSS"],
    //   image: "/digital-agency-landing-page.png",
    //   liveUrl: "https://hy-krox.vercel.app/",
    //   codeUrl: "#",
    // },
  ];

  const experiences = [
    {
      title: "Genrative Ai intern",
      company: "Id fresh foods",
      period: "Jul 2025 – Present",
      color: "bg-purple-500",
    },
    {
      title: "Frontend Developer",
      company: "AcuTech Solutions",
      period: "Sep 2024 – Jan 2025",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:nayans808@gmail.com"
              className="text-primary hover:underline"
            >
              nayans808@gmail.com
            </a>
          </div>
          <Button variant="ghost" size="sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Image
                src="/professional-developer-avatar.png"
                alt="Karan Kendre"
                width={80}
                height={80}
                className="rounded-2xl"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-foreground">Nayan Kumar!</span>
          </h1>

          <div className="text-xl md:text-2xl mb-6 text-muted-foreground">
            I'm a <span className="text-foreground font-semibold"></span>{" "}
            <span className="text-primary font-semibold">
              Full Stack Developer
            </span>
            <Badge
              variant="secondary"
              className="ml-3 bg-green-500/20 text-green-400 border-green-500/30"
            >
              • Open to work
            </Badge>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Feel free to explore my portfolio and reach out — I'd love to
            connect!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-neutral-900 border-neutral-200 hover:bg-neutral-50
             dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
              type="button"
            >
              <a
                href="https://drive.google.com/file/d/1Jg_KOfcXxwdJtnDofV5ENkdUF46V5WCS/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>
            <Button
              size="lg"
              className="text-base bg-primary hover:bg-primary/90"
            >
              <a href="mailto:nayans808@gmail.com">Book a call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground mb-8">
            Technologies and tools I work with.
          </p>

          <div
            className="relative w-full overflow-hidden"
            /* optional: fade edges (WebKit needs -webkit-mask-image) */
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            {/* Adjust speed here: 20s faster, 40s slower */}
            <div className="animate-marquee [--marquee-duration:28s] hover:[animation-play-state:paused]">
              {/* Track must be nowrap and contents must not shrink */}
              <div className="flex flex-row items-center gap-3 whitespace-nowrap">
                {/* Original list */}
                {skills.map((skill, i) => (
                  <Badge
                    key={`a-${skill}-${i}`}
                    variant="secondary"
                    className="px-4 py-2 text-sm shrink-0 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}

                {/* Duplicate list (aria-hidden so screen readers don’t repeat it) */}
                {skills.map((skill, i) => (
                  <Badge
                    key={`b-${skill}-${i}`}
                    variant="secondary"
                    className="px-4 py-2 text-sm shrink-0 cursor-default"
                    aria-hidden="true"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-muted-foreground mt-2">
            Selected work featuring full-stack apps, UI polish, and performance.
          </p>

          {/* Outer container like the screenshot */}
          <Card className="mt-10 overflow-hidden rounded-2xl border">
            <ul className="divide-y">
              {projects.map((p, idx) => (
                <li
                  key={p.name}
                  className="group grid grid-cols-[120px_1fr] items-center gap-4 p-4 transition-colors hover:bg-muted/30 md:grid-cols-[160px_1fr]"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg ring-1 ring-border">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      alt={p.name}
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      priority={idx < 2}
                    />
                  </div>

                  {/* Right content */}
                  <div className="min-w-0">
                    {/* Header row: title left, Live/Code right */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-lg font-semibold">
                          {p.name}
                        </h3>
                        {p.stackLine && (
                          <p className="text-muted-foreground mt-1 text-sm">
                            {p.stackLine}
                          </p>
                        )}
                        {p.urlLabel && (
                          <Link
                            href={p.liveUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-1 block truncate text-sm ${
                              p.liveUrl
                                ? "text-muted-foreground underline-offset-4 hover:underline"
                                : "pointer-events-none opacity-50"
                            }`}
                          >
                            {p.urlLabel}
                          </Link>
                        )}
                      </div>

                      <div className="shrink-0 space-x-3 text-sm">
                        <Link
                          href={p.liveUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer external nofollow"
                          className={`inline-flex items-center gap-1 underline-offset-4 hover:underline ${
                            !p.liveUrl && "pointer-events-none opacity-40"
                          }`}
                          aria-disabled={!p.liveUrl}
                        >
                          Live <ExternalLink className="h-3.5 w-3.5" />
                        </Link>

                        <Link
                          href={p.codeUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer external"
                          className={`inline-flex items-center gap-1 underline-offset-4 hover:underline ${
                            !p.codeUrl && "pointer-events-none opacity-40"
                          }`}
                          aria-disabled={!p.codeUrl}
                        >
                          Code <Github className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
                      {p.description}
                    </p>

                    {/* Tech pills */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <p className="text-muted-foreground mb-8">Recent roles</p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${exp.color}`} />
                  {index < experiences.length - 1 && (
                    <div className="w-px h-16 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  {exp.company && (
                    <p className="text-muted-foreground">{exp.company}</p>
                  )}
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground mb-8">
            Let's build something great together.
          </p>

          <Card className="p-8">
            <p className="text-muted-foreground mb-6">
              Prefer DMs? Reach me on X (Twitter) — I'm quick to respond.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://x.com/nayan909sha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  @nayan909sha
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/nayan-kumar8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/nayankumar808"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Or email:{" "}
              <a
                href="mailto:nayans808@gmail.com"
                className="text-primary hover:underline"
              >
                nayans808@gmail.com
              </a>
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Nayan Kumar</p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/nayan-kumar8/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nayankumar808"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
