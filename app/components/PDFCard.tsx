"use client";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../context/LanguageContext";

interface PDFCardProps {
  coverImage: string;
  title: string;
  titleFr?: string;
  description: string;
  pdfUrl: string;
  pdfUrlFr?: string;
  fileSize: string;
  fileSizeFr?: string;
  maxWidth?: number;
  backgroundColor?: string;
}

export default function PDFCard({
  coverImage,
  title,
  titleFr,
  description,
  pdfUrl,
  pdfUrlFr,
  fileSize,
  fileSizeFr,
  backgroundColor = "black",
}: PDFCardProps) {
  const { lang } = useLang();

  const displayTitle = lang === "fr" && titleFr ? titleFr : title;
  const displayPdfUrl = lang === "fr" && pdfUrlFr ? pdfUrlFr : pdfUrl;
  const displayFileSize = lang === "fr" && fileSizeFr ? fileSizeFr : fileSize;

  return (
    <div className="flex flex-col w-full min-w-0 max-w-2xl">
      <div className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
        <div className="relative">
          <Image
            src={coverImage}
            alt={title}
            width={1200}
            height={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            style={{ width: "100%", height: "auto", minWidth: "300px" }}
            className="block"
          />
          <div className="absolute inset-0 flex items-start justify-center overflow-hidden pointer-events-none">
            <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out w-full h-full bg-black/70 flex items-start justify-center pt-6 px-6">
              <div className="text-center">
                <p className="text-white text-sm mb-4">{description}</p>
                <p className="text-white/80 text-xs mb-4">
                  File size: {displayFileSize}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="heading text-xl text-gray-900 mb-2">{displayTitle}</h3>
        <Link
          href={displayPdfUrl}
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
