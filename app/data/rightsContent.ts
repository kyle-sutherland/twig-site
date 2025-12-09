export interface RightsLink {
  title: string;
  url: string;
  description: string;
}

export interface EmploymentStandard {
  title: string;
  content: string;
}

export interface ProvinceRights {
  slug: string;
  name: { en: string; fr: string };
  intro: { en: string; fr: string };
  governmentLinks: RightsLink[];
  ngoLinks: RightsLink[];
  standards: EmploymentStandard[];
}

export const provinceRights: ProvinceRights[] = [
  {
    slug: "bc",
    name: { en: "British Columbia", fr: "Colombie-Britannique" },
    intro: {
      en: "In British Columbia, workers are protected by the Employment Standards Act. Tree planters have specific rights regarding wages, overtime, and working conditions.",
      fr: "En Colombie-Britannique, les travailleurs sont protégés par la Loi sur les normes d'emploi. Les planteurs d'arbres ont des droits spécifiques concernant les salaires, les heures supplémentaires et les conditions de travail.",
    },
    governmentLinks: [
      {
        title: "BC Employment Standards",
        url: "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice",
        description: "Official government employment standards information",
      },
      {
        title: "Employment Standards Act",
        url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/00_96113_01",
        description: "Full text of the Employment Standards Act",
      },
      {
        title: "Silviculture Exception Regulations",
        url: "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/forms-resources/igm/esa-part-4-section-37",
        description: "Specific regulations for silviculture workers",
      },
    ],
    ngoLinks: [
      {
        title: "Worker Solidarity Network",
        url: "https://www.workersolidarity.ca/",
        description: "Summarized employment standards information and support",
      },
      {
        title: "BC Employment Standards Coalition",
        url: "https://www.bcemploymentstandards.ca/",
        description: "Legal support and resources for workers",
      },
    ],
    standards: [
      {
        title: "Minimum Wage",
        content:
          "<strong>$16.75/hour</strong> (effective June 1, 2023)<br/>This includes pre-season training, camp meetings, setup time, and most travel time. All work time must be compensated at minimum wage.",
      },
      {
        title: "Overtime",
        content:
          "Hours beyond 8 per day require premium pay at <strong>1.5 times minimum wage</strong>. Hours exceeding 12 per day must be paid at <strong>double the minimum wage rate</strong>.",
      },
      {
        title: "Camp Costs",
        content:
          "Employers may deduct up to <strong>$25 per day</strong> for camp or motel costs with written agreement. Deductions cannot exceed actual costs.",
      },
      {
        title: "Deductions",
        content:
          "Employers cannot make deductions for equipment damage, production mistakes, or other arbitrary reasons without proper authorization and documentation.",
      },
      {
        title: "Statutory Holidays",
        content:
          "Workers are entitled to statutory holiday pay. If required to work on a statutory holiday, you receive your average daily wage plus time-and-a-half for hours worked.",
      },
      {
        title: "Vacation Pay",
        content:
          "Tree planters are entitled to <strong>4% vacation pay</strong> on all earnings. This should be clearly indicated on pay stubs.",
      },
      {
        title: "WorkSafeBC",
        content:
          "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact WorkSafeBC. All workers have the right to refuse unsafe work.",
      },
    ],
  },
  {
    slug: "alberta",
    name: { en: "Alberta", fr: "Alberta" },
    intro: {
      en: "In Alberta, tree planters are protected under the Employment Standards Code. Understanding your rights is essential for fair treatment and proper compensation.",
      fr: "En Alberta, les planteurs d'arbres sont protégés par le Code des normes d'emploi. Comprendre vos droits est essentiel pour un traitement équitable et une rémunération appropriée.",
    },
    governmentLinks: [
      {
        title: "Alberta Employment Standards",
        url: "https://www.alberta.ca/employment-standards",
        description: "Official government employment standards information",
      },
      {
        title: "Employment Standards Code",
        url: "https://www.alberta.ca/employment-standards-code",
        description: "Full text of Alberta's Employment Standards Code",
      },
    ],
    ngoLinks: [
      {
        title: "Alberta Federation of Labour",
        url: "https://www.afl.org/",
        description: "Summarized employment standards and worker support",
      },
      {
        title: "Alberta Workers' Health Centre",
        url: "https://www.workershealthcentre.ca/",
        description: "Information on legal rights and workplace health",
      },
    ],
    standards: [
      {
        title: "Minimum Wage",
        content:
          "<strong>$15.00/hour</strong> (students under 18: $13.00/hour)<br/>All work hours including training, camp meetings, setups, and travel time must be compensated at minimum wage.",
      },
      {
        title: "Lodging & Meal Deductions",
        content:
          "Employers may reduce wages with written authorization:<br/>• Up to <strong>$4.41 per day</strong> for lodging<br/>• Up to <strong>$3.35 per meal</strong> consumed<br/>Deductions cannot apply to meals not eaten.",
      },
      {
        title: "Equipment Damage",
        content:
          "Employers <strong>cannot deduct wages</strong> for equipment damage or production mistakes. Such deductions are prohibited under Alberta employment standards.",
      },
      {
        title: "Statutory Holiday Pay",
        content:
          "After 30 days with the same employer, workers qualify for holiday compensation. If working the holiday, employees receive average daily wage plus time-and-a-half pay (approximately $22.50/hour at minimum wage).",
      },
      {
        title: "Overtime",
        content:
          "After 8 hours in a day or 44 hours in a week, overtime must be paid at <strong>1.5 times the regular rate</strong>.",
      },
      {
        title: "Alberta OHS",
        content:
          "For workplace safety issues including illness, injury, unsafe work refusal, harassment, and sanitation, contact Alberta Occupational Health and Safety (OHS). Workers have the right to refuse unsafe work.",
      },
    ],
  },
  {
    slug: "quebec",
    name: { en: "Quebec", fr: "Québec" },
    intro: {
      en: "Employment standards information for Quebec is currently being compiled. If you have expertise in Quebec labour law or French translation skills, we'd love your help!",
      fr: "Les informations sur les normes d'emploi pour le Québec sont en cours de compilation. Si vous avez une expertise en droit du travail québécois ou des compétences en traduction, nous aimerions votre aide!",
    },
    governmentLinks: [
      {
        title: "Commission des normes du travail",
        url: "https://www.cnesst.gouv.qc.ca/",
        description: "Official Quebec employment standards commission",
      },
    ],
    ngoLinks: [],
    standards: [
      {
        title: "Coming Soon / À venir",
        content:
          "We are working to compile comprehensive employment standards information for Quebec tree planters. If you can help contribute content or translations, please contact us at treeworkersindustrialgroup@gmail.com.",
      },
    ],
  },
];

export function getProvinceBySlug(slug: string): ProvinceRights | undefined {
  return provinceRights.find((p) => p.slug === slug);
}
