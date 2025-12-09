import Image from "next/image";

interface PageHeroProps {
  title: string | { en: string; fr: string };
  subtitle?: string;
  backgroundImage?: string;
  height?: "tall" | "medium" | "short";
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  height = "medium",
}: PageHeroProps) {
  const heightClass = {
    tall: "h-screen",
    medium: "h-[60vh]",
    short: "h-[40vh]",
  }[height];

  const titleText =
    typeof title === "string"
      ? title
      : `${title.en} / ${title.fr}`;

  return (
    <div className={`relative ${heightClass} overflow-hidden`}>
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt={typeof title === "string" ? title : title.en}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800" />
      )}
      <div className="absolute inset-0 bg-black/30">
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <h1 className="heading text-3xl md:text-6xl lg:text-7xl mb-4 animate-fade-in text-center text-white">
            {titleText}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-2xl animate-fade-in-delay text-center text-white max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
