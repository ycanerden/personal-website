import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostMetas, formatDate } from '@/lib/posts';

export function generateStaticParams() {
  const posts = getAllPostMetas();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} - Can Erden`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mt-2 mb-3 tracking-tight leading-snug">
          {post.title}
        </h1>
        <p className="text-xs text-neutral-300 font-mono">{formatDate(post.date)}</p>
      </div>

      <article
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="mt-16 pt-8 border-t border-neutral-100">
        <Link
          href="/blog"
          className="text-sm text-muted hover:text-black transition-colors"
        >
          ← Back to writing
        </Link>
      </div>

      <footer className="mt-16 text-[10px] text-neutral-300 uppercase tracking-widest font-bold">
        © 2026 Can Erden
      </footer>
    </main>
  );
}
