export interface Publication {
  id: string;
  title: string;
  volume: number;
  issue?: number;
  year: number;
  description: string;
  coverImage: string;
  pdfUrl: string;
  fileSize: string;
}

export const publications: Publication[] = [
  // Volume 1 (2021)
  {
    id: "fireweed-1-1",
    title: "Fireweed No. 1: Planters' Rights",
    volume: 1,
    issue: 1,
    year: 2021,
    description:
      "A comprehensive guide to employment rights for tree planters across Canada, covering minimum wage, overtime, deductions, and how to enforce your rights.",
    coverImage: "/covers/fireweed-1-cover.png",
    pdfUrl: "/pdfs/fireweed-no1-plantersrights.pdf",
    fileSize: "15 MB",
  },
  {
    id: "fireweed-1-2",
    title: "Fireweed No. 2: Mental Health",
    volume: 1,
    issue: 2,
    year: 2021,
    description:
      "Addressing mental health challenges in tree planting, providing resources, coping strategies, and building supportive communities in the bush.",
    coverImage: "/covers/fireweed-2-cover.png",
    pdfUrl: "/pdfs/fireweed-no2-mentalhealth.pdf",
    fileSize: "5.4 MB",
  },
  {
    id: "fireweed-1-3",
    title: "Fireweed No. 3: Sexual Assault Prevention",
    volume: 1,
    issue: 3,
    year: 2021,
    description:
      "Resources and policies for preventing sexual violence in tree planting camps, supporting survivors, and creating safer work environments.",
    coverImage: "/covers/fireweed-3-cover.png",
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
];

// Helper functions to organize by volume
export function getPublicationsByVolume(volume: number): Publication[] {
  return publications.filter((pub) => pub.volume === volume);
}

export function getAllVolumes(): number[] {
  return Array.from(new Set(publications.map((pub) => pub.volume))).sort();
}
