import Image from "next/image";
import Link from "next/link";

interface PDFCardProps {
  coverImage: string;
  title: string;
  description: string;
  pdfUrl: string;
  fileSize: string;
  maxWidth?: number;
}

export default function PDFCard({
  coverImage,
  title,
  description,
  pdfUrl,
  fileSize,
  maxWidth = 500,
}: PDFCardProps) {
  return (
    <div
      className="flex flex-col w-full"
      style={{ maxWidth: `${maxWidth}px` }}
    >
      <div className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
        <div className="relative aspect-square">
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
      </div>
      <div className="text-center">
        <h3 className="heading text-xl text-gray-900 mb-2">{title}</h3>
        <Link
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 underline hover:text-gray-600 transition-colors"
        >
          PDF
        </Link>
      </div>
    </div>
  );
}
