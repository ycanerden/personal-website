import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { getAllPostMetas, formatDate } from '@/lib/posts';
import { PixelBetsIcon } from '@/components/icons/PixelBetsIcon';
import { PixelExperienceIcon } from '@/components/icons/PixelExperienceIcon';
import { PixelPhilosophyIcon } from '@/components/icons/PixelPhilosophyIcon';
import { PixelBlogIcon } from '@/components/icons/PixelBlogIcon';
import { PixelArrowIcon } from '@/components/icons/PixelArrowIcon';

export default function Home() {
  const experiences = [
    {
      company: "Rapider AI",
      role: "Head of Growth & Strategy",
      period: "2024 — 2026",
      description: "Led growth for an AI enterprise SaaS startup. Scaled revenue by 3.4x YoY through international GTM strategies and operational restructuring. Reduced operating costs by 56%.",
      link: "https://rapider.ai"
    },
    {
      company: "Gobo",
      role: "Co-Founder",
      period: "2024 — 2025",
      description: "Built an environmental intelligence startup using AI to optimize indoor air quality. Led GTM around WELL and LEED standards, and partnership discussions with SATO.",
      link: "#"
    },
    {
      company: "Koç Holding (Koç Yaşa)",
      role: "Business Development & Strategy",
      period: "2023 — 2024",
      description: "Contributed to the largest MedTech acquisition in Turkey. Managed commercial due diligence and post-merger integration for an 8-figure transaction.",
      link: "https://www.koc.com.tr"
    }
  ];

  const currentBets = [
    {
      name: "Habitat",
      description: "Community-hackathons helping entrepreneurs launch startups through structured evening sessions. Organized events across 3 cities helping 100+ people launch MVPs.",
      link: "https://www.joinhabitat.eu/",
      tag: "Co-Founder"
    },
    {
      name: "Habitat Skills",
      description: "The AI-native Operating System for founders. Turning agents into strategic partners.",
      link: "https://skills.joinhabitat.eu",
      tag: "Founder"
    }
  ];

  const recentPosts = getAllPostMetas().slice(0, 3);

  return (
    <main className="max-w-2xl mx-auto px-6 pt-24 pb-32">
      {/* Header */}
      <section className="mb-16">
        <h1 className="text-2xl font-bold mb-4 tracking-tight">Can Erden</h1>
        <div className="text-muted leading-relaxed space-y-4">
          <p>
            Growth and strategy operator. Currently pursuing a Master&apos;s in Innovation &amp; Entrepreneurship at <span className="text-black">Vlerick Business School</span>.
          </p>
          <p>
            I specialize in AI-native execution, M&amp;A strategy, and scaling early-stage ventures. Based in Leuven, Belgium.
          </p>
        </div>
      </section>

      {/* Building Now */}
      <section className="mb-20">
        <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted mb-8">
          <PixelBetsIcon size={12} />
          Current Bets
        </h2>
        <div className="space-y-10">
          {currentBets.map((project) => (
            <div key={project.name} className="group">
              <Link href={project.link} target="_blank" className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-bold group-hover:underline underline-offset-4">{project.name}</h3>
                    <span className="text-[10px] bg-neutral-100 px-1.5 py-0.5 rounded uppercase font-bold text-neutral-500 tracking-wider">{project.tag}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed max-w-md">{project.description}</p>
                </div>
                <PixelArrowIcon size={16} className="text-neutral-300 group-hover:text-black transition-colors mt-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted mb-8">
          <PixelExperienceIcon size={12} />
          Previous
        </h2>
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.company} className="group">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold">{exp.company}</h3>
                  <span className="text-xs text-muted">/ {exp.role}</span>
                </div>
                <span className="text-xs text-neutral-300 font-mono">{exp.period}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed max-w-md">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="mb-20">
        <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted mb-8">
          <PixelPhilosophyIcon size={12} />
          Philosophy
        </h2>
        <div className="text-sm text-muted leading-relaxed">
          <p>
            I believe the barrier between idea and execution is collapsing.
            My work focuses on the &ldquo;Founder as Director&rdquo; model—leveraging agentic AI
            to scale human strategy and automate the repetitive to focus on the unique.
          </p>
        </div>
      </section>

      {/* Writing */}
      {recentPosts.length > 0 && (
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted">
              <PixelBlogIcon size={12} />
              Writing
            </h2>
            <Link
              href="/blog"
              className="text-xs text-muted hover:text-black transition-colors"
            >
              All posts →
            </Link>
          </div>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <div key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <h3 className="text-sm font-bold group-hover:underline underline-offset-4">
                      {post.title}
                    </h3>
                    <span className="text-xs text-neutral-300 font-mono shrink-0">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Socials */}
      <section className="pt-8 border-t border-neutral-100 flex items-center space-x-6">
        <Link href="https://x.com/ycanerden" target="_blank" className="text-muted hover:text-black transition-colors">
          <Twitter size={20} />
        </Link>
        <Link href="https://github.com/ycanerden" target="_blank" className="text-muted hover:text-black transition-colors">
          <Github size={20} />
        </Link>
        <Link href="https://www.linkedin.com/in/can-erden/" target="_blank" className="text-muted hover:text-black transition-colors">
          <Linkedin size={20} />
        </Link>
        <Link href="mailto:ycanerden@gmail.com" className="text-muted hover:text-black transition-colors">
          <Mail size={20} />
        </Link>
      </section>

      <footer className="mt-32 text-[10px] text-neutral-300 uppercase tracking-widest font-bold">
        © 2026 Can Erden
      </footer>
    </main>
  );
}
