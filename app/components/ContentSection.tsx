import { ReactNode } from "react";

interface ContentSectionProps {
  variant?: "green" | "grey" | "white";
  children: ReactNode;
}

export default function ContentSection({
  variant = "white",
  children,
}: ContentSectionProps) {
  const sectionClass = {
    green: "green-section",
    grey: "grey-section",
    white: "bg-white",
  }[variant];

  return (
    <div className={sectionClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        {children}
      </div>
    </div>
  );
}
