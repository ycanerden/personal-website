import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  published: boolean;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPostMetas(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: data.slug as string,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        published: (data.published ?? true) as boolean,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getPostBySlug(slug: string): Post | null {
  // Try matching by slug frontmatter value
  const fileNames = fs.readdirSync(postsDirectory);

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) continue;

    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    if (data.slug !== slug) continue;
    if (!(data.published ?? true)) return null;

    const processedContent = remark().use(html).processSync(content);
    const contentHtml = processedContent.toString();

    return {
      slug: data.slug as string,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      published: true,
      contentHtml,
    };
  }

  return null;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
}
