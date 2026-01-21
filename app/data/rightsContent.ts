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
      en: "In Quebec, workers are protected by the Loi sur les normes du travail (Labour Standards Act). Tree planters have specific rights regarding wages, overtime, and working conditions.",
      fr: "Au Québec, les travailleurs et travailleuses sont protégés par la Loi sur les normes du travail. Les planteurs d'arbres ont des droits spécifiques concernant les salaires, les heures supplémentaires et les conditions de travail.",
    },
    governmentLinks: [
      {
        title: "Commission des normes de l'équité de la santé et de la sécurité du travail (CNESST)",
        url: "https://www.cnesst.gouv.qc.ca/",
        description: "Commission officielle des normes du travail et de la santé et sécurité au travail",
      },
      {
        title: "Loi sur les normes du travail",
        url: "https://www.legisquebec.gouv.qc.ca/fr/document/lc/N-1.1",
        description: "Texte complet de la Loi sur les normes du travail",
      },
      {
        title: "Conditions de travail - CNESST",
        url: "https://www.cnesst.gouv.qc.ca/fr/conditions-travail",
        description: "Informations détaillées sur les conditions de travail au Québec",
      },
    ],
    ngoLinks: [
      {
        title: "Fédération des travailleurs et travailleuses du Québec (FTQ)",
        url: "https://ftq.qc.ca/",
        description: "Plus grande centrale syndicale au Québec, représentant plus de 600 000 membres",
      },
      {
        title: "Au bas de l'échelle",
        url: "https://www.aubasdelechelle.ca/",
        description: "Organisme de défense des droits des personnes non syndiquées",
      },
      {
        title: "Centrale des syndicats du Québec (CSQ)",
        url: "https://www.lacsq.org/",
        description: "Organisation syndicale représentant 225 000 personnes",
      },
    ],
    standards: [
      {
        title: "Salaire minimum",
        content:
          "<strong>16,10 $/heure</strong> (en vigueur depuis le 1er mai 2025)<br/>Toutes les heures de travail, y compris la formation en début de saison, les réunions de camp, le temps de préparation et la plupart des temps de déplacement doivent être rémunérées au salaire minimum.",
      },
      {
        title: "Heures supplémentaires",
        content:
          "Les heures travaillées au-delà de <strong>40 heures par semaine</strong> doivent être rémunérées au taux de <strong>1,5 fois le salaire horaire régulier</strong> (minimum 24,15 $/heure au salaire minimum). Les heures supplémentaires peuvent aussi être compensées par un congé équivalent payé.",
      },
      {
        title: "Durée maximale du travail",
        content:
          "Un salarié peut refuser de travailler plus de <strong>2 heures au-delà de ses heures habituelles de travail</strong> ou plus de <strong>14 heures de travail par période de 24 heures</strong>. Le salarié peut aussi refuser de travailler si l'horaire n'est pas fixé pour s'occuper d'un membre de sa famille ou d'un proche.",
      },
      {
        title: "Déductions",
        content:
          "L'employeur peut effectuer des déductions sur le salaire seulement si la loi, un règlement, une ordonnance judiciaire, une convention collective, un décret ou un mandat écrit du salarié l'y autorise. Les déductions arbitraires pour dommages à l'équipement ou erreurs de production ne sont pas permises.",
      },
      {
        title: "Jours fériés",
        content:
          "Le Québec compte <strong>8 jours fériés chômés et payés</strong> par année. L'indemnité versée pour chaque jour férié est égale à <strong>1/20 du salaire gagné au cours des 4 semaines complètes de paie précédant la semaine du congé</strong>. Si vous travaillez un jour férié, vous recevez votre indemnité de jour férié plus votre salaire régulier pour les heures travaillées.",
      },
      {
        title: "Vacances annuelles",
        content:
          "Après 1 an de service continu : <strong>2 semaines de vacances continues</strong> (4% du salaire brut). Après 3 ans de service continu : <strong>3 semaines de vacances continues</strong> (6% du salaire brut). L'employeur ne peut remplacer les vacances par une indemnité compensatoire, sauf exceptions prévues dans une convention collective.",
      },
      {
        title: "Santé et sécurité au travail (CNESST)",
        content:
          "Pour les préoccupations de santé et sécurité, y compris les maladies, blessures, refus de travail dangereux, harcèlement et problèmes d'assainissement, contactez la CNESST au <strong>1-844-838-0808</strong>. Tous les travailleurs ont le droit de refuser d'exécuter un travail s'ils croient que cela met en danger leur santé, leur sécurité ou leur intégrité physique ou psychologique.",
      },
    ],
  },
];

export function getProvinceBySlug(slug: string): ProvinceRights | undefined {
  return provinceRights.find((p) => p.slug === slug);
}
