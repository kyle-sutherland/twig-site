import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import ContentSection from "@/app/components/ContentSection";
import { blogPosts } from "@/app/data/blogPosts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      <PageHero title={post.title} height="short" />

      <ContentSection variant="white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/the-stick"
              className="text-green-700 hover:underline inline-flex items-center"
            >
              ← Back to all posts
            </Link>
          </div>

          <div className="mb-8">
            <p className="text-gray-600 text-sm mb-2">
              By {post.author} • {formattedDate}
            </p>
          </div>

          {post.featuredImage && (
            <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <article
            className="prose prose-lg max-w-none prose-headings:font-['Ayuthaya'] prose-headings:text-gray-900 prose-p:text-gray-800 prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-800 prose-li:text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/the-stick"
              className="text-green-700 hover:underline inline-flex items-center text-lg"
            >
              ← Back to all posts
            </Link>
          </div>
        </div>
      </ContentSection>
    </main>
  );
}
