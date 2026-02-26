import Link from 'next/link';
import { getAllPostMetas, formatDate } from '@/lib/posts';
import { PixelPhilosophyIcon } from '@/components/icons/PixelPhilosophyIcon';
import { PixelBlogIcon } from '@/components/icons/PixelBlogIcon';
import { PixelBetsIcon } from '@/components/icons/PixelBetsIcon';

export default function Home() {
  const recentPosts = getAllPostMetas().slice(0, 3);

  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">
      {/* Bio */}
      <section className="mb-16">
        <h1 className="text-2xl font-bold mb-4 tracking-tight">Can Erden</h1>
        <p className="text-sm text-muted leading-relaxed">
          Growth and strategy operator working with AI-native founders.
          Co-founder of Habitat and founder of Habitat Skills, based in Leuven,
          Belgium.
        </p>
      </section>

      {/* Current focus */}
      <section className="mb-20">
        <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted mb-4">
          <PixelBetsIcon size={12} />
          Current Focus
        </h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Right now I&apos;m focused on <span className="text-black">Habitat</span>, our
            community hackathons where founders ship MVPs together, and{' '}
            <span className="text-black">Habitat Skills</span>, a complementary AI-native OS
            that helps them keep that momentum between cohorts.
          </p>
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
            My work focuses on the &ldquo;Founder as Director&rdquo; model, leveraging
            agentic AI to scale human strategy and automate the repetitive so
            founders can stay in high-leverage conversations and decisions.
          </p>
          <p className="mt-3">
            Habitat and Habitat Skills are my experiments in this model: tools
            and communities that compress the distance between a founder&apos;s
            conviction and a version in the world.
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

      <footer className="mt-32 text-[10px] text-neutral-300 uppercase tracking-widest font-bold">
        © 2026 Can Erden
      </footer>
    </main>
  );
}
