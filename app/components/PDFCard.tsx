import Image from "next/image";
import { LinkButton } from "./buttons";

interface PDFCardProps {
  coverImage: string;
  title: string;
  description: string;
  pdfUrl: string;
  fileSize: string;
}

export default function PDFCard({
  coverImage,
  title,
  description,
  pdfUrl,
  fileSize,
}: PDFCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-[3/4]">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center p-6">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <p className="text-white text-sm mb-4">{description}</p>
            <p className="text-white/80 text-xs mb-4">File size: {fileSize}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 p-4 text-center">
        <h3 className="heading text-white text-lg mb-3">{title}</h3>
        <LinkButton
          href={pdfUrl}
          text="Download PDF"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
}
