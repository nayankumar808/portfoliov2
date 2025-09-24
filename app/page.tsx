"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

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
      name: "Blogging Application",
      description: "A mdeium like Blogging Application.",
      image: "Blogging-App.png",
      liveUrl: "https://blogging-app-nayankumar808s-projects.vercel.app/",
      codeUrl: "https://github.com/nayankumar808/blogging_app",
      tech: ["React", "Hono"],
      stackLine: "React, Hono, Cloudflare Workers ,Postgres",
      urlLabel: "https://blogging-app-nayankumar808s-projects.vercel.app/",
    },

    // add more here…
  ];

  const experiences = [
    {
      title: "Genrative Ai intern",
      company: "Id fresh foods",
      period: "Jul 2025 – Present",
      color: "bg-purple-500",
    },
    {
      title: "Frontend Developer Intern",
      company: "AcuTech Solutions",
      period: "Sep 2024 – Jan 2025",
      color: "bg-blue-500",
    },
  ];

  // helper to keep the same centered width everywhere (960px)
  const WRAP = "mx-auto w-full max-w-[960px] px-4 sm:px-6";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[960px] h-96 bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div
          className={`${WRAP} py-3 sm:py-4 flex items-center justify-between`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <Mail className="h-4 w-4 shrink-0" />
            <a
              href="mailto:nayans808@gmail.com"
              className="text-primary hover:underline text-sm sm:text-base truncate"
            >
              nayans808@gmail.com
            </a>
          </div>

          {/* icon-only button is size="icon" for perfect square */}
          <Button
            variant="ghost"
            size="icon"
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="shrink-0"
          >
            {theme === "dark" ? (
              // Moon icon for dark mode
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            ) : (
              // Sun icon for light mode
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            )}
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className={`${WRAP} text-center`}>
          <div className="mb-4 sm:mb-6 flex justify-center">
            <Image
              src="/professional-developer-avatar.png"
              alt="Nayan Kumar"
              width={80}
              height={80}
              className="rounded-2xl"
              priority
            />
          </div>

          <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-foreground">Nayan Kumar!</span>
          </h1>

          <div className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl text-muted-foreground">
            I'm a{" "}
            <span className="font-semibold text-primary">
              Full Stack Developer
            </span>
            <Badge
              variant="secondary"
              className="ml-2 sm:ml-3 border-green-500/30 bg-green-500/20 text-green-400 text-xs sm:text-sm"
            >
              • Open to work
            </Badge>
          </div>

          <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg text-muted-foreground px-2">
            Feel free to explore my portfolio and reach out — I'd love to
            connect!
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row px-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50
                         dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
            >
              <a
                href="https://drive.google.com/file/d/1vew28Xa3SNu-qDILmA-UsQfqsmst8ZKe/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>

            <Button size="lg" className="w-full sm:w-auto text-base">
              <a href="mailto:nayans808@gmail.com">Book a call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 sm:py-16">
        <div className={WRAP}>
          <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
          <p className="mt-2 text-muted-foreground">
            Technologies and tools I work with.
          </p>

          <div
            className="relative mt-6 sm:mt-8 w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="animate-marquee [--marquee-duration:28s] hover:[animation-play-state:paused]">
              <div className="flex items-center gap-3 whitespace-nowrap">
                {skills.map((skill, i) => (
                  <Badge
                    key={`a-${skill}-${i}`}
                    variant="secondary"
                    className="shrink-0 px-3 sm:px-4 py-2 text-xs sm:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
                {skills.map((skill, i) => (
                  <Badge
                    key={`b-${skill}-${i}`}
                    variant="secondary"
                    className="shrink-0 px-3 sm:px-4 py-2 text-xs sm:text-sm"
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

      {/* Projects (list-style container) */}
      <section className="py-12 sm:py-16">
        <div className={WRAP}>
          <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
          <p className="mt-2 text-muted-foreground">
            Selected work featuring full-stack apps, UI polish, and performance.
          </p>

          <Card className="mt-6 sm:mt-8 overflow-hidden rounded-2xl">
            <ul className="divide-y">
              {projects.map((p, idx) => (
                <li
                  key={p.name}
                  className="group flex flex-col sm:grid sm:grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] items-start gap-3 sm:gap-4 p-4 sm:items-center transition-colors hover:bg-muted/30"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] w-full sm:w-auto overflow-hidden rounded-lg ring-1 ring-border">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 160px"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      priority={idx < 2}
                    />
                  </div>

                  {/* Right content */}
                  <div className="min-w-0 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold break-words">
                          {p.name}
                        </h3>
                        {p.stackLine && (
                          <p className="mt-1 text-sm text-muted-foreground">
                            {p.stackLine}
                          </p>
                        )}
                        {p.urlLabel && (
                          <Link
                            href={p.liveUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-1 block text-sm break-all ${
                              p.liveUrl
                                ? "text-muted-foreground underline-offset-4 hover:underline"
                                : "pointer-events-none opacity-50"
                            }`}
                            aria-disabled={!p.liveUrl}
                          >
                            {p.urlLabel}
                          </Link>
                        )}
                      </div>

                      <div className="flex gap-3 text-sm shrink-0">
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
                          Code{" "}
                          {/* using GitHub mark from text keeps it minimal */}
                        </Link>
                      </div>
                    </div>

                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {p.description}
                    </p>

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

      {/* Experience */}
      <section className="py-12 sm:py-16">
        <div className={WRAP}>
          <h2 className="mb-2 text-2xl sm:text-3xl font-bold">Experience</h2>
          <p className="mb-6 sm:mb-8 text-muted-foreground">Recent roles</p>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-3 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className={`h-3 w-3 rounded-full ${exp.color}`} />
                  {index < experiences.length - 1 && (
                    <div className="mt-2 h-12 sm:h-16 w-px bg-border" />
                  )}
                </div>
                <div className="flex-1 pb-6 sm:pb-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    {exp.title}
                  </h3>
                  {exp.company && (
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {exp.company}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 sm:py-16">
        <div className={WRAP}>
          <h2 className="mb-2 text-2xl sm:text-3xl font-bold">Contact</h2>
          <p className="mb-6 sm:mb-8 text-muted-foreground">
            Let's build something great together.
          </p>

          <Card className="p-4 sm:p-8">
            <p className="mb-4 sm:mb-6 text-muted-foreground">
              Prefer DMs? Reach me on X (Twitter) — I'm quick to respond.
            </p>

            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full sm:w-auto bg-transparent"
              >
                <a
                  href="https://x.com/nayan909sha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  @nayan909sha
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full sm:w-auto bg-transparent"
              >
                <a
                  href="https://www.linkedin.com/in/nayan-kumar8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full sm:w-auto bg-transparent"
              >
                <a
                  href="https://github.com/nayankumar808"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full sm:w-auto bg-transparent"
              >
                <a href="tel:+919097174433">
                  <Phone className="mr-2 h-4 w-4" />
                  +91 9097174433
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Or email:{" "}
              <a
                href="mailto:nayans808@gmail.com"
                className="text-primary hover:underline break-all"
              >
                nayans808@gmail.com
              </a>
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 sm:py-8">
        <div
          className={`${WRAP} flex flex-col items-center justify-between gap-3 sm:gap-4 sm:flex-row`}
        >
          <p className="text-sm text-muted-foreground">© 2025 Nayan Kumar</p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/nayan-kumar8/"
              className="text-muted-foreground transition-colors hover:text-foreground text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nayankumar808"
              className="text-muted-foreground transition-colors hover:text-foreground text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
