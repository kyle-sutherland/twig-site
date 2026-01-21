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
          "<strong>$17.85/hour</strong> (effective June 1, 2025)<br/>This includes pre-season training, camp meetings, setup time, and most travel time. All work time must be compensated at minimum wage.",
      },
      {
        title: "Overtime",
        content:
          "Hours beyond 8 per day (up to 12 hours) require premium pay at <strong>1.5 times your regular wage</strong> (minimum $26.78/hour at minimum wage). Hours exceeding 12 per day must be paid at <strong>double your regular wage rate</strong> (minimum $35.70/hour at minimum wage).",
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
          "After 30 days with the same employer, workers qualify for holiday compensation. If working the holiday, employees receive average daily wage plus time-and-a-half pay (minimum $22.50/hour at minimum wage rate).",
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
    slug: "ontario",
    name: { en: "Ontario", fr: "Ontario" },
    intro: {
      en: "In Ontario, workers are protected by the Employment Standards Act, 2000. Tree planters have specific rights regarding wages, overtime, and working conditions.",
      fr: "En Ontario, les travailleurs sont protégés par la Loi de 2000 sur les normes d'emploi. Les planteurs d'arbres ont des droits spécifiques concernant les salaires, les heures supplémentaires et les conditions de travail.",
    },
    governmentLinks: [
      {
        title: "Your Guide to the Employment Standards Act",
        url: "https://www.ontario.ca/document/your-guide-employment-standards-act-0",
        description: "Official government employment standards guide",
      },
      {
        title: "Employment Standards Act, 2000",
        url: "https://www.ontario.ca/laws/statute/00e41",
        description: "Full text of the Employment Standards Act",
      },
      {
        title: "Employment Standards Information Centre",
        url: "https://www.ontario.ca/page/employment-standards-information-centre",
        description: "Contact for general information: 1-800-531-5551",
      },
    ],
    ngoLinks: [
      {
        title: "Workers Action Centre",
        url: "https://www.workersactioncentre.org/",
        description: "Support for workers experiencing workplace violations. Information Line: 416-531-0778",
      },
      {
        title: "Community Legal Education Ontario (CLEO)",
        url: "https://www.cleo.on.ca/",
        description: "Clear legal information about employment rights",
      },
      {
        title: "Workers Health and Safety Legal Clinic",
        url: "https://workers-safety.ca/",
        description: "Legal services for workplace health and safety issues",
      },
    ],
    standards: [
      {
        title: "Minimum Wage",
        content:
          "<strong>$17.60/hour</strong> (effective October 1, 2025)<br/>All work hours including training, camp meetings, setup time, and travel time must be compensated at minimum wage. Students under 18 working 28 hours/week or less: $16.60/hour.",
      },
      {
        title: "Overtime",
        content:
          "Overtime is calculated weekly, not daily. Hours beyond <strong>44 per week</strong> require premium pay at <strong>1.5 times your regular wage</strong> (minimum $26.40/hour at minimum wage). Employees can receive time off in lieu at 1.5 hours per hour of overtime worked with written agreement.",
      },
      {
        title: "Maximum Hours",
        content:
          "The maximum daily hours are <strong>8 hours per day</strong> (or the established regular workday if longer) unless agreed to in writing. Maximum weekly hours are <strong>48 hours per week</strong> unless the employee provides written consent.",
      },
      {
        title: "Deductions",
        content:
          "Employers can only make three types of deductions: statutory deductions (taxes, CPP, EI), court-ordered deductions, or deductions with written authorization. Even with authorization, employers cannot deduct for faulty work or cash shortages when the employee did not have sole access.",
      },
      {
        title: "Room and Board",
        content:
          "Employers may count the provision of room and board toward minimum wage requirements, but only if the employee actually received meals and occupied the room. Specific amounts set by the government can be deemed as wages for room and board provided.",
      },
      {
        title: "Vacation Pay",
        content:
          "Tree planters are entitled to <strong>4% vacation pay</strong> on all earnings (or 6% after 5 years with same employer). This should be clearly indicated on pay stubs and applies to all employees including hourly, salary, and commission-based workers.",
      },
      {
        title: "Workplace Safety",
        content:
          "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact the Ministry of Labour. All workers have the right to refuse unsafe work. The Office of the Worker Adviser provides free services for workplace insurance matters.",
      },
    ],
  },
  {
    slug: "saskatchewan",
    name: { en: "Saskatchewan", fr: "Saskatchewan" },
    intro: {
      en: "In Saskatchewan, workers are protected by The Saskatchewan Employment Act. Tree planters have specific rights regarding wages, overtime, and working conditions.",
      fr: "En Saskatchewan, les travailleurs sont protégés par la Loi sur l'emploi en Saskatchewan. Les planteurs d'arbres ont des droits spécifiques concernant les salaires, les heures supplémentaires et les conditions de travail.",
    },
    governmentLinks: [
      {
        title: "Employment Standards",
        url: "https://www.saskatchewan.ca/business/employment-standards",
        description: "Official government employment standards information",
      },
      {
        title: "The Saskatchewan Employment Act",
        url: "https://www.sasklabourrelationsboard.com/-/media/project/lrb/documents/publications-and-policies/statues-and-regulations/s15-1.pdf",
        description: "Full text of The Saskatchewan Employment Act",
      },
      {
        title: "Ministry of Labour Relations and Workplace Safety",
        url: "https://www.saskatchewan.ca/government/government-structure/ministries/labour-relations-and-workplace-safety",
        description: "Government ministry responsible for employment standards",
      },
    ],
    ngoLinks: [
      {
        title: "Saskatchewan Federation of Labour",
        url: "https://sfl.sk.ca/",
        description: "Major labour organization providing advocacy and support for workers",
      },
      {
        title: "Injured Worker Appeal Services (IWAS)",
        url: "https://www.saskatchewan.ca/government/directory?ou=7b9c1827-43dd-4f1c-bcbb-3a638ea9d346",
        description: "Free, independent services for Workers' Compensation Board claims",
      },
    ],
    standards: [
      {
        title: "Minimum Wage",
        content:
          "<strong>$15.35/hour</strong> (effective October 1, 2025)<br/>Saskatchewan's minimum wage is indexed annually using a formula that gives equal weight to changes in the Consumer Price Index and Average Hourly Wage for Saskatchewan. All work hours including training, camp meetings, setup time, and travel time must be compensated at minimum wage.",
      },
      {
        title: "Overtime",
        content:
          "Overtime must be paid at <strong>1.5 times the regular wage rate</strong> (minimum $23.03/hour at minimum wage). Daily overtime: after 8 hours in a day (or after 10 hours if scheduled for four 10-hour days). Weekly overtime: after 40 hours in a regular week or 32 hours in a week with a statutory holiday. Employees receive whichever is greater – daily or weekly overtime.",
      },
      {
        title: "Maximum Hours and Consent",
        content:
          "Employers must get employee consent to work more than <strong>44 hours in a week</strong> (or 36 hours in a week with a statutory holiday). Employees cannot be disciplined for refusing unless there is an emergency. Employees must receive at least 8 consecutive hours of rest in any 24-hour period.",
      },
      {
        title: "Deductions",
        content:
          "Employers can only deduct: statutory deductions (taxes, CPP, EI), employee pension/RRSP payments, benefit plan payments, voluntary charitable donations, and voluntary savings plans. Arbitrary deductions for equipment damage or production mistakes are not permitted without proper authorization.",
      },
      {
        title: "Statutory Holidays",
        content:
          "Saskatchewan has 10 statutory holidays per year. Employees receive <strong>5% of wages earned in the 28 days before a holiday</strong> as holiday pay. If required to work on a statutory holiday, employees receive <strong>1.5 times their regular rate</strong> for all hours worked plus their statutory holiday pay.",
      },
      {
        title: "Vacation Pay",
        content:
          "Employees receive a minimum of <strong>3 weeks vacation</strong> after each year of employment (or <strong>4 weeks</strong> after 10 years with the same employer). Vacation pay is calculated as <strong>5.77% of wages</strong> for employees with 1-9 years of service.",
      },
      {
        title: "WorkSafe Saskatchewan",
        content:
          "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact WorkSafe Saskatchewan at 1-800-667-7590. All workers have the right to refuse unsafe work. WorkSafe Saskatchewan is a partnership between the Saskatchewan Workers' Compensation Board and the Ministry of Labour Relations and Workplace Safety.",
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
