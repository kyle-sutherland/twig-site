import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  featuredImage?: string;
}

export default function BlogPostCard({
  title,
  date,
  excerpt,
  slug,
  featuredImage,
}: BlogPostCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/the-stick/${slug}`}
      className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      {featuredImage && (
        <div className="relative h-48 w-full">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <time className="text-sm text-gray-600 mb-2 block">{formattedDate}</time>
        <h2 className="heading text-2xl text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
          {title}
        </h2>
        <p className="text-gray-700 text-base leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <span className="inline-block mt-4 text-green-700 font-medium group-hover:underline">
          Read more →
        </span>
      </div>
    </Link>
  );
}
