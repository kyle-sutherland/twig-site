export interface Publication {
  id: string;
  title: string;
  titleFr?: string;
  volume: number;
  issue?: number;
  year: number;
  description: string;
  coverImage: string;
  pdfUrl: string;
  pdfUrlFr?: string;
  fileSize: string;
  fileSizeFr?: string;
  backgroundColor?: string;
}

export const publications: Publication[] = [
  // Volume 1 (2021)
  {
    id: "fireweed-1-1",
    title: "Planters' Rights",
    volume: 1,
    issue: 1,
    year: 2021,
    description:
      "A comprehensive guide to employment rights for tree planters across Canada, covering minimum wage, overtime, deductions, and how to enforce your rights.",
    coverImage: "/covers/planters-rights-cover.png",
    pdfUrl: "/pdfs/fireweed-no1-plantersrights.pdf",
    fileSize: "15 MB",
  },
  {
    id: "fireweed-1-2",
    title: "Mental Health",
    volume: 1,
    issue: 2,
    year: 2021,
    description:
      "Addressing mental health challenges in tree planting, providing resources, coping strategies, and building supportive communities in the bush.",
    coverImage: "/covers/mental-health-cover.png",
    pdfUrl: "/pdfs/fireweed-no2-mentalhealth.pdf",
    fileSize: "5.4 MB",
  },
  {
    id: "fireweed-1-3",
    title: "Sexual Assault Prevention",
    volume: 1,
    issue: 3,
    year: 2021,
    description:
      "Resources and policies for preventing sexual violence in tree planting camps, supporting survivors, and creating safer work environments.",
    coverImage: "/covers/sexual-assualt-prevention-cover.png",
    pdfUrl: "/pdfs/fireweed-no3-sexualassaultprevention.pdf",
    fileSize: "6.7 MB",
  },
  // Volume 2 (2022)
  {
    id: "fireweed-2-1",
    title: "Harm Reduction",
    volume: 2,
    issue: 1,
    year: 2022,
    description:
      "Practical harm reduction strategies for tree planting camps, addressing substance use with compassion and evidence-based approaches.",
    coverImage: "/covers/harm-reduction-cover.png",
    pdfUrl: "/pdfs/harm-reduction.pdf",
    fileSize: "7.3 MB",
  },
  {
    id: "fireweed-2-2",
    title: "Planter's Guide 2022",
    volume: 2,
    issue: 2,
    year: 2022,
    description:
      "The comprehensive 2022 planter's guide covering everything from gear and techniques to rights, contracts, and organizing in the silviculture industry.",
    coverImage: "/covers/planters-guide-cover.png",
    pdfUrl: "/pdfs/planters-guide-2022.pdf",
    fileSize: "76 MB",
  },
  // Volume 3 (2025)
  {
    id: "fireweed-3-1",
    title: "Manual of Unskilled Labour",
    titleFr: "Manuel du travail non qualifié",
    volume: 3,
    issue: 1,
    year: 2025,
    description:
      "A comprehensive manual for unskilled labour in the tree planting industry, available in both English and French.",
    coverImage: "/covers/manualof-unskilled-labour-cover.jpg",
    pdfUrl: "/pdfs/manual-of-unskilled-labour.pdf",
    pdfUrlFr: "/pdfs/manuel-du-travail-non-qualifie-francais-pdf-lisible.pdf",
    fileSize: "9.4 MB",
    fileSizeFr: "12 MB",
  },
];

// Helper functions to organize by volume
export function getPublicationsByVolume(volume: number): Publication[] {
  return publications.filter((pub) => pub.volume === volume);
}

export function getAllVolumes(): number[] {
  return Array.from(new Set(publications.map((pub) => pub.volume))).sort();
}

// Helper function to format title with issue number
export function getFormattedTitle(pub: Publication): string {
  if (pub.issue) {
    return `No. ${pub.issue}: ${pub.title}`;
  }
  return pub.title;
}

export function getFormattedTitleFr(pub: Publication): string | undefined {
  if (pub.titleFr && pub.issue) {
    return `No. ${pub.issue}: ${pub.titleFr}`;
  }
  return pub.titleFr;
}
