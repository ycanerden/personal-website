import Link from 'next/link';
import { getAllPostMetas, formatDate } from '@/lib/posts';
import { PixelBlogIcon } from '@/components/icons/PixelBlogIcon';

export const metadata = {
  title: 'Writing — Can Erden',
  description: 'Essays on AI-native founding, communities, and building in public.',
};

export default function BlogPage() {
  const posts = getAllPostMetas();

  return (
    <main className="max-w-2xl mx-auto px-6 pt-24 pb-32">
      <div className="mb-16">
        <Link
          href="/"
          className="text-xs text-muted hover:text-black transition-colors"
        >
          ← Can Erden
        </Link>
        <div className="flex items-center gap-2.5 mt-8 mb-2">
          <PixelBlogIcon size={18} className="text-black" />
          <h1 className="text-2xl font-bold tracking-tight">Writing</h1>
        </div>
        <p className="text-sm text-muted">
          Essays on AI-native founding, communities, and building in public.
        </p>
      </div>

      <section>
        <div className="space-y-10">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h2 className="text-sm font-bold group-hover:underline underline-offset-4 transition-colors">
                    {post.title}
                  </h2>
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

      <footer className="mt-32 text-[10px] text-neutral-300 uppercase tracking-widest font-bold">
        © 2026 Can Erden
      </footer>
    </main>
  );
}
