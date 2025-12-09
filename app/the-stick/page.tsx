import PageHero from "../components/PageHero";
import ContentSection from "../components/ContentSection";
import BlogPostCard from "../components/BlogPostCard";
import { blogPosts } from "../data/blogPosts";

export default function TheStickPage() {
  // Sort posts by date, newest first
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main>
      <PageHero
        title="The Stick"
        subtitle="Stories and updates from the field"
      />

      <ContentSection variant="grey">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortedPosts.map((post) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
                featuredImage={post.featuredImage}
              />
            ))}
          </div>
        </div>
      </ContentSection>
    </main>
  );
}
