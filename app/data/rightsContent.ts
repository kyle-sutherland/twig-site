export interface RightsLink {
  title: { en: string; fr: string };
  url: string;
  description: { en: string; fr: string };
}

export interface EmploymentStandard {
  title: { en: string; fr: string };
  content: { en: string; fr: string };
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
        title: {
          en: "BC Employment Standards",
          fr: "Normes d'emploi de la C.-B.",
        },
        url: "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice",
        description: {
          en: "Official government employment standards information",
          fr: "Informations officielles du gouvernement sur les normes d'emploi",
        },
      },
      {
        title: {
          en: "Employment Standards Act",
          fr: "Loi sur les normes d'emploi",
        },
        url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/00_96113_01",
        description: {
          en: "Full text of the Employment Standards Act",
          fr: "Texte complet de la Loi sur les normes d'emploi",
        },
      },
      {
        title: {
          en: "Silviculture Exception Regulations",
          fr: "Règlements d'exception pour la sylviculture",
        },
        url: "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/forms-resources/igm/esa-part-4-section-37",
        description: {
          en: "Specific regulations for silviculture workers",
          fr: "Règlements spécifiques aux travailleurs en sylviculture",
        },
      },
    ],
    ngoLinks: [
      {
        title: {
          en: "Worker Solidarity Network",
          fr: "Réseau de solidarité des travailleurs",
        },
        url: "https://www.workersolidarity.ca/",
        description: {
          en: "Summarized employment standards information and support",
          fr: "Informations résumées sur les normes d'emploi et soutien",
        },
      },
      {
        title: {
          en: "BC Employment Standards Coalition",
          fr: "Coalition des normes d'emploi de la C.-B.",
        },
        url: "https://www.bcemploymentstandards.ca/",
        description: {
          en: "Legal support and resources for workers",
          fr: "Soutien juridique et ressources pour les travailleurs",
        },
      },
    ],
    standards: [
      {
        title: { en: "Minimum Wage", fr: "Salaire minimum" },
        content: {
          en: "<strong>$17.85/hour</strong> (effective June 1, 2025)<br/>This includes pre-season training, camp meetings, setup time, and most travel time. All work time must be compensated at minimum wage.",
          fr: "<strong>17,85 $/heure</strong> (en vigueur depuis le 1er juin 2025)<br/>Cela inclut la formation en début de saison, les réunions de camp, le temps de préparation et la plupart des temps de déplacement. Tout le temps de travail doit être rémunéré au salaire minimum.",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "Hours beyond 8 per day (up to 12 hours) require premium pay at <strong>1.5 times your regular wage</strong> (minimum $26.78/hour at minimum wage). Hours exceeding 12 per day must be paid at <strong>double your regular wage rate</strong> (minimum $35.70/hour at minimum wage).",
          fr: "Les heures au-delà de 8 par jour (jusqu'à 12 heures) nécessitent une prime de <strong>1,5 fois votre salaire régulier</strong> (minimum 26,78 $/heure au salaire minimum). Les heures dépassant 12 par jour doivent être payées au <strong>double de votre taux de salaire régulier</strong> (minimum 35,70 $/heure au salaire minimum).",
        },
      },
      {
        title: { en: "Camp Costs", fr: "Frais de camp" },
        content: {
          en: "Employers may deduct up to <strong>$25 per day</strong> for camp or motel costs with written agreement. Deductions cannot exceed actual costs.",
          fr: "Les employeurs peuvent déduire jusqu'à <strong>25 $ par jour</strong> pour les frais de camp ou de motel avec accord écrit. Les déductions ne peuvent pas dépasser les coûts réels.",
        },
      },
      {
        title: { en: "Deductions", fr: "Déductions" },
        content: {
          en: "Employers cannot make deductions for equipment damage, production mistakes, or other arbitrary reasons without proper authorization and documentation.",
          fr: "Les employeurs ne peuvent pas effectuer de déductions pour des dommages à l'équipement, des erreurs de production ou d'autres raisons arbitraires sans autorisation et documentation appropriées.",
        },
      },
      {
        title: { en: "Statutory Holidays", fr: "Jours fériés" },
        content: {
          en: "Workers are entitled to statutory holiday pay. If required to work on a statutory holiday, you receive your average daily wage plus time-and-a-half for hours worked.",
          fr: "Les travailleurs ont droit à une indemnité de jour férié. Si vous êtes obligé de travailler un jour férié, vous recevez votre salaire quotidien moyen plus une fois et demie pour les heures travaillées.",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Tree planters are entitled to <strong>4% vacation pay</strong> on all earnings. This should be clearly indicated on pay stubs.",
          fr: "Les planteurs d'arbres ont droit à une <strong>indemnité de vacances de 4 %</strong> sur tous leurs gains. Cela doit être clairement indiqué sur les talons de paie.",
        },
      },
      {
        title: { en: "WorkSafeBC", fr: "WorkSafeBC" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact WorkSafeBC. All workers have the right to refuse unsafe work.",
          fr: "Pour les préoccupations de santé et de sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, communiquez avec WorkSafeBC. Tous les travailleurs ont le droit de refuser un travail dangereux.",
        },
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
        title: {
          en: "Alberta Employment Standards",
          fr: "Normes d'emploi de l'Alberta",
        },
        url: "https://www.alberta.ca/employment-standards",
        description: {
          en: "Official government employment standards information",
          fr: "Informations officielles du gouvernement sur les normes d'emploi",
        },
      },
      {
        title: {
          en: "Employment Standards Code",
          fr: "Code des normes d'emploi",
        },
        url: "https://www.alberta.ca/employment-standards-code",
        description: {
          en: "Full text of Alberta's Employment Standards Code",
          fr: "Texte complet du Code des normes d'emploi de l'Alberta",
        },
      },
    ],
    ngoLinks: [
      {
        title: {
          en: "Alberta Federation of Labour",
          fr: "Fédération du travail de l'Alberta",
        },
        url: "https://www.afl.org/",
        description: {
          en: "Summarized employment standards and worker support",
          fr: "Résumé des normes d'emploi et soutien aux travailleurs",
        },
      },
      {
        title: {
          en: "Alberta Workers' Health Centre",
          fr: "Centre de santé des travailleurs de l'Alberta",
        },
        url: "https://www.workershealthcentre.ca/",
        description: {
          en: "Information on legal rights and workplace health",
          fr: "Informations sur les droits légaux et la santé au travail",
        },
      },
    ],
    standards: [
      {
        title: { en: "Minimum Wage", fr: "Salaire minimum" },
        content: {
          en: "<strong>$15.00/hour</strong> (students under 18: $13.00/hour)<br/>All work hours including training, camp meetings, setups, and travel time must be compensated at minimum wage.",
          fr: "<strong>15,00 $/heure</strong> (étudiants de moins de 18 ans : 13,00 $/heure)<br/>Toutes les heures de travail, y compris la formation, les réunions de camp, les préparations et le temps de déplacement, doivent être rémunérées au salaire minimum.",
        },
      },
      {
        title: {
          en: "Lodging & Meal Deductions",
          fr: "Déductions pour hébergement et repas",
        },
        content: {
          en: "Employers may reduce wages with written authorization:<br/>• Up to <strong>$4.41 per day</strong> for lodging<br/>• Up to <strong>$3.35 per meal</strong> consumed<br/>Deductions cannot apply to meals not eaten.",
          fr: "Les employeurs peuvent réduire les salaires avec autorisation écrite :<br/>• Jusqu'à <strong>4,41 $ par jour</strong> pour l'hébergement<br/>• Jusqu'à <strong>3,35 $ par repas</strong> consommé<br/>Les déductions ne s'appliquent pas aux repas non pris.",
        },
      },
      {
        title: { en: "Equipment Damage", fr: "Dommages à l'équipement" },
        content: {
          en: "Employers <strong>cannot deduct wages</strong> for equipment damage or production mistakes. Such deductions are prohibited under Alberta employment standards.",
          fr: "Les employeurs <strong>ne peuvent pas déduire des salaires</strong> pour des dommages à l'équipement ou des erreurs de production. Ces déductions sont interdites en vertu des normes d'emploi de l'Alberta.",
        },
      },
      {
        title: { en: "Statutory Holiday Pay", fr: "Indemnité de jour férié" },
        content: {
          en: "After 30 days with the same employer, workers qualify for holiday compensation. If working the holiday, employees receive average daily wage plus time-and-a-half pay (minimum $22.50/hour at minimum wage rate).",
          fr: "Après 30 jours chez le même employeur, les travailleurs ont droit à une indemnité de congé. Si vous travaillez le jour férié, vous recevez votre salaire quotidien moyen plus une fois et demie (minimum 22,50 $/heure au salaire minimum).",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "After 8 hours in a day or 44 hours in a week, overtime must be paid at <strong>1.5 times the regular rate</strong>.",
          fr: "Après 8 heures par jour ou 44 heures par semaine, les heures supplémentaires doivent être payées à <strong>1,5 fois le taux régulier</strong>.",
        },
      },
      {
        title: { en: "Alberta OHS", fr: "SST de l'Alberta" },
        content: {
          en: "For workplace safety issues including illness, injury, unsafe work refusal, harassment, and sanitation, contact Alberta Occupational Health and Safety (OHS). Workers have the right to refuse unsafe work.",
          fr: "Pour les questions de sécurité au travail, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et l'assainissement, contactez la Santé et sécurité au travail (SST) de l'Alberta. Les travailleurs ont le droit de refuser un travail dangereux.",
        },
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
        title: {
          en: "Your Guide to the Employment Standards Act",
          fr: "Guide de la Loi sur les normes d'emploi",
        },
        url: "https://www.ontario.ca/document/your-guide-employment-standards-act-0",
        description: {
          en: "Official government employment standards guide",
          fr: "Guide officiel du gouvernement sur les normes d'emploi",
        },
      },
      {
        title: {
          en: "Employment Standards Act, 2000",
          fr: "Loi de 2000 sur les normes d'emploi",
        },
        url: "https://www.ontario.ca/laws/statute/00e41",
        description: {
          en: "Full text of the Employment Standards Act",
          fr: "Texte complet de la Loi sur les normes d'emploi",
        },
      },
      {
        title: {
          en: "Employment Standards Information Centre",
          fr: "Centre d'information sur les normes d'emploi",
        },
        url: "https://www.ontario.ca/page/employment-standards-information-centre",
        description: {
          en: "Contact for general information: 1-800-531-5551",
          fr: "Pour information générale : 1-800-531-5551",
        },
      },
    ],
    ngoLinks: [
      {
        title: {
          en: "Workers Action Centre",
          fr: "Centre d'action des travailleurs",
        },
        url: "https://www.workersactioncentre.org/",
        description: {
          en: "Support for workers experiencing workplace violations. Information Line: 416-531-0778",
          fr: "Soutien aux travailleurs victimes de violations en milieu de travail. Ligne d'information : 416-531-0778",
        },
      },
      {
        title: {
          en: "Community Legal Education Ontario (CLEO)",
          fr: "Éducation juridique communautaire Ontario (CLEO)",
        },
        url: "https://www.cleo.on.ca/",
        description: {
          en: "Clear legal information about employment rights",
          fr: "Informations juridiques claires sur les droits en matière d'emploi",
        },
      },
      {
        title: {
          en: "Workers Health and Safety Legal Clinic",
          fr: "Clinique juridique de santé et sécurité au travail",
        },
        url: "https://workers-safety.ca/",
        description: {
          en: "Legal services for workplace health and safety issues",
          fr: "Services juridiques pour les questions de santé et sécurité au travail",
        },
      },
    ],
    standards: [
      {
        title: { en: "Minimum Wage", fr: "Salaire minimum" },
        content: {
          en: "<strong>$17.60/hour</strong> (effective October 1, 2025)<br/>All work hours including training, camp meetings, setup time, and travel time must be compensated at minimum wage. Students under 18 working 28 hours/week or less: $16.60/hour.",
          fr: "<strong>17,60 $/heure</strong> (en vigueur depuis le 1er octobre 2025)<br/>Toutes les heures de travail, y compris la formation, les réunions de camp, le temps de préparation et le temps de déplacement, doivent être rémunérées au salaire minimum. Étudiants de moins de 18 ans travaillant 28 heures/semaine ou moins : 16,60 $/heure.",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "Overtime is calculated weekly, not daily. Hours beyond <strong>44 per week</strong> require premium pay at <strong>1.5 times your regular wage</strong> (minimum $26.40/hour at minimum wage). Employees can receive time off in lieu at 1.5 hours per hour of overtime worked with written agreement.",
          fr: "Les heures supplémentaires sont calculées par semaine, non par jour. Les heures au-delà de <strong>44 par semaine</strong> nécessitent une prime de <strong>1,5 fois votre salaire régulier</strong> (minimum 26,40 $/heure au salaire minimum). Les employés peuvent recevoir un congé compensatoire à raison de 1,5 heure par heure supplémentaire travaillée avec accord écrit.",
        },
      },
      {
        title: { en: "Maximum Hours", fr: "Heures maximales" },
        content: {
          en: "The maximum daily hours are <strong>8 hours per day</strong> (or the established regular workday if longer) unless agreed to in writing. Maximum weekly hours are <strong>48 hours per week</strong> unless the employee provides written consent.",
          fr: "Les heures maximales quotidiennes sont de <strong>8 heures par jour</strong> (ou la journée de travail régulière établie si elle est plus longue) sauf accord écrit. Les heures hebdomadaires maximales sont de <strong>48 heures par semaine</strong> sauf consentement écrit de l'employé.",
        },
      },
      {
        title: { en: "Deductions", fr: "Déductions" },
        content: {
          en: "Employers can only make three types of deductions: statutory deductions (taxes, CPP, EI), court-ordered deductions, or deductions with written authorization. Even with authorization, employers cannot deduct for faulty work or cash shortages when the employee did not have sole access.",
          fr: "Les employeurs ne peuvent effectuer que trois types de déductions : les déductions légales (impôts, RPC, AE), les déductions ordonnées par un tribunal, ou les déductions avec autorisation écrite. Même avec autorisation, les employeurs ne peuvent pas déduire pour un travail défectueux ou des manques de caisse lorsque l'employé n'avait pas accès exclusif.",
        },
      },
      {
        title: { en: "Room and Board", fr: "Chambre et pension" },
        content: {
          en: "Employers may count the provision of room and board toward minimum wage requirements, but only if the employee actually received meals and occupied the room. Specific amounts set by the government can be deemed as wages for room and board provided.",
          fr: "Les employeurs peuvent comptabiliser la fourniture de chambre et pension dans les exigences de salaire minimum, mais seulement si l'employé a effectivement pris les repas et occupé la chambre. Des montants spécifiques fixés par le gouvernement peuvent être considérés comme salaire pour la chambre et pension fournies.",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Tree planters are entitled to <strong>4% vacation pay</strong> on all earnings (or 6% after 5 years with same employer). This should be clearly indicated on pay stubs and applies to all employees including hourly, salary, and commission-based workers.",
          fr: "Les planteurs d'arbres ont droit à une <strong>indemnité de vacances de 4 %</strong> sur tous leurs gains (ou 6 % après 5 ans chez le même employeur). Cela doit être clairement indiqué sur les talons de paie et s'applique à tous les employés, y compris les travailleurs horaires, salariés et à commission.",
        },
      },
      {
        title: { en: "Workplace Safety", fr: "Sécurité au travail" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact the Ministry of Labour. All workers have the right to refuse unsafe work. The Office of the Worker Adviser provides free services for workplace insurance matters.",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, contactez le ministère du Travail. Tous les travailleurs ont le droit de refuser un travail dangereux. Le Bureau du conseiller des travailleurs offre des services gratuits pour les questions d'assurance-emploi.",
        },
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
        title: {
          en: "Employment Standards",
          fr: "Normes d'emploi",
        },
        url: "https://www.saskatchewan.ca/business/employment-standards",
        description: {
          en: "Official government employment standards information",
          fr: "Informations officielles du gouvernement sur les normes d'emploi",
        },
      },
      {
        title: {
          en: "The Saskatchewan Employment Act",
          fr: "Loi sur l'emploi en Saskatchewan",
        },
        url: "https://www.sasklabourrelationsboard.com/-/media/project/lrb/documents/publications-and-policies/statues-and-regulations/s15-1.pdf",
        description: {
          en: "Full text of The Saskatchewan Employment Act",
          fr: "Texte complet de la Loi sur l'emploi en Saskatchewan",
        },
      },
      {
        title: {
          en: "Ministry of Labour Relations and Workplace Safety",
          fr: "Ministère des Relations du travail et de la sécurité au travail",
        },
        url: "https://www.saskatchewan.ca/government/government-structure/ministries/labour-relations-and-workplace-safety",
        description: {
          en: "Government ministry responsible for employment standards",
          fr: "Ministère gouvernemental responsable des normes d'emploi",
        },
      },
    ],
    ngoLinks: [
      {
        title: {
          en: "Saskatchewan Federation of Labour",
          fr: "Fédération du travail de la Saskatchewan",
        },
        url: "https://sfl.sk.ca/",
        description: {
          en: "Major labour organization providing advocacy and support for workers",
          fr: "Grande organisation syndicale offrant défense des droits et soutien aux travailleurs",
        },
      },
      {
        title: {
          en: "Injured Worker Appeal Services (IWAS)",
          fr: "Services d'appel des travailleurs accidentés (IWAS)",
        },
        url: "https://www.saskatchewan.ca/government/directory?ou=7b9c1827-43dd-4f1c-bcbb-3a638ea9d346",
        description: {
          en: "Free, independent services for Workers' Compensation Board claims",
          fr: "Services gratuits et indépendants pour les demandes à la Commission des accidents du travail",
        },
      },
    ],
    standards: [
      {
        title: { en: "Minimum Wage", fr: "Salaire minimum" },
        content: {
          en: "<strong>$15.35/hour</strong> (effective October 1, 2025)<br/>Saskatchewan's minimum wage is indexed annually using a formula that gives equal weight to changes in the Consumer Price Index and Average Hourly Wage for Saskatchewan. All work hours including training, camp meetings, setup time, and travel time must be compensated at minimum wage.",
          fr: "<strong>15,35 $/heure</strong> (en vigueur depuis le 1er octobre 2025)<br/>Le salaire minimum de la Saskatchewan est indexé annuellement selon une formule accordant un poids égal aux variations de l'Indice des prix à la consommation et du salaire horaire moyen en Saskatchewan. Toutes les heures de travail, y compris la formation, les réunions de camp, le temps de préparation et le temps de déplacement, doivent être rémunérées au salaire minimum.",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "Overtime must be paid at <strong>1.5 times the regular wage rate</strong> (minimum $23.03/hour at minimum wage). Daily overtime: after 8 hours in a day (or after 10 hours if scheduled for four 10-hour days). Weekly overtime: after 40 hours in a regular week or 32 hours in a week with a statutory holiday. Employees receive whichever is greater – daily or weekly overtime.",
          fr: "Les heures supplémentaires doivent être payées à <strong>1,5 fois le taux de salaire régulier</strong> (minimum 23,03 $/heure au salaire minimum). Heures supplémentaires quotidiennes : après 8 heures par jour (ou après 10 heures si l'horaire prévoit quatre journées de 10 heures). Heures supplémentaires hebdomadaires : après 40 heures dans une semaine normale ou 32 heures dans une semaine avec un jour férié. Les employés reçoivent le montant le plus élevé — quotidien ou hebdomadaire.",
        },
      },
      {
        title: {
          en: "Maximum Hours and Consent",
          fr: "Heures maximales et consentement",
        },
        content: {
          en: "Employers must get employee consent to work more than <strong>44 hours in a week</strong> (or 36 hours in a week with a statutory holiday). Employees cannot be disciplined for refusing unless there is an emergency. Employees must receive at least 8 consecutive hours of rest in any 24-hour period.",
          fr: "Les employeurs doivent obtenir le consentement de l'employé pour travailler plus de <strong>44 heures par semaine</strong> (ou 36 heures lors d'une semaine avec un jour férié). Les employés ne peuvent pas être sanctionnés pour avoir refusé, sauf en cas d'urgence. Les employés doivent bénéficier d'au moins 8 heures de repos consécutives sur toute période de 24 heures.",
        },
      },
      {
        title: { en: "Deductions", fr: "Déductions" },
        content: {
          en: "Employers can only deduct: statutory deductions (taxes, CPP, EI), employee pension/RRSP payments, benefit plan payments, voluntary charitable donations, and voluntary savings plans. Arbitrary deductions for equipment damage or production mistakes are not permitted without proper authorization.",
          fr: "Les employeurs ne peuvent déduire que : les déductions légales (impôts, RPC, AE), les cotisations de retraite/REER de l'employé, les paiements au régime d'avantages sociaux, les dons de bienfaisance volontaires et les plans d'épargne volontaires. Les déductions arbitraires pour dommages à l'équipement ou erreurs de production ne sont pas permises sans autorisation appropriée.",
        },
      },
      {
        title: { en: "Statutory Holidays", fr: "Jours fériés" },
        content: {
          en: "Saskatchewan has 10 statutory holidays per year. Employees receive <strong>5% of wages earned in the 28 days before a holiday</strong> as holiday pay. If required to work on a statutory holiday, employees receive <strong>1.5 times their regular rate</strong> for all hours worked plus their statutory holiday pay.",
          fr: "La Saskatchewan compte 10 jours fériés par année. Les employés reçoivent <strong>5 % des salaires gagnés dans les 28 jours précédant le congé</strong> comme indemnité de jour férié. Si vous êtes obligé de travailler un jour férié, vous recevez <strong>1,5 fois votre taux régulier</strong> pour toutes les heures travaillées plus votre indemnité de jour férié.",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Employees receive a minimum of <strong>3 weeks vacation</strong> after each year of employment (or <strong>4 weeks</strong> after 10 years with the same employer). Vacation pay is calculated as <strong>5.77% of wages</strong> for employees with 1-9 years of service.",
          fr: "Les employés reçoivent un minimum de <strong>3 semaines de vacances</strong> après chaque année d'emploi (ou <strong>4 semaines</strong> après 10 ans chez le même employeur). L'indemnité de vacances est calculée à <strong>5,77 % des salaires</strong> pour les employés ayant 1 à 9 ans de service.",
        },
      },
      {
        title: { en: "WorkSafe Saskatchewan", fr: "Travail sécuritaire Saskatchewan" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact WorkSafe Saskatchewan at 1-800-667-7590. All workers have the right to refuse unsafe work. WorkSafe Saskatchewan is a partnership between the Saskatchewan Workers' Compensation Board and the Ministry of Labour Relations and Workplace Safety.",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, contactez Travail sécuritaire Saskatchewan au 1-800-667-7590. Tous les travailleurs ont le droit de refuser un travail dangereux. Travail sécuritaire Saskatchewan est un partenariat entre la Commission des accidents du travail de la Saskatchewan et le Ministère des Relations du travail et de la sécurité au travail.",
        },
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
        title: {
          en: "Commission des normes de l'équité de la santé et de la sécurité du travail (CNESST)",
          fr: "Commission des normes de l'équité de la santé et de la sécurité du travail (CNESST)",
        },
        url: "https://www.cnesst.gouv.qc.ca/",
        description: {
          en: "Official commission for labour standards and occupational health and safety",
          fr: "Commission officielle des normes du travail et de la santé et sécurité au travail",
        },
      },
      {
        title: {
          en: "Loi sur les normes du travail",
          fr: "Loi sur les normes du travail",
        },
        url: "https://www.legisquebec.gouv.qc.ca/fr/document/lc/N-1.1",
        description: {
          en: "Full text of the Labour Standards Act",
          fr: "Texte complet de la Loi sur les normes du travail",
        },
      },
      {
        title: {
          en: "Working Conditions — CNESST",
          fr: "Conditions de travail — CNESST",
        },
        url: "https://www.cnesst.gouv.qc.ca/fr/conditions-travail",
        description: {
          en: "Detailed information on working conditions in Quebec",
          fr: "Informations détaillées sur les conditions de travail au Québec",
        },
      },
    ],
    ngoLinks: [
      {
        title: {
          en: "Fédération des travailleurs et travailleuses du Québec (FTQ)",
          fr: "Fédération des travailleurs et travailleuses du Québec (FTQ)",
        },
        url: "https://ftq.qc.ca/",
        description: {
          en: "Largest labour federation in Quebec, representing over 600,000 members",
          fr: "Plus grande centrale syndicale au Québec, représentant plus de 600 000 membres",
        },
      },
      {
        title: {
          en: "Au bas de l'échelle",
          fr: "Au bas de l'échelle",
        },
        url: "https://www.aubasdelechelle.ca/",
        description: {
          en: "Organization defending the rights of non-unionized workers",
          fr: "Organisme de défense des droits des personnes non syndiquées",
        },
      },
      {
        title: {
          en: "Centrale des syndicats du Québec (CSQ)",
          fr: "Centrale des syndicats du Québec (CSQ)",
        },
        url: "https://www.lacsq.org/",
        description: {
          en: "Union organization representing 225,000 people",
          fr: "Organisation syndicale représentant 225 000 personnes",
        },
      },
    ],
    standards: [
      {
        title: { en: "Minimum Wage", fr: "Salaire minimum" },
        content: {
          en: "<strong>$16.10/hour</strong> (effective May 1, 2025)<br/>All work hours including pre-season training, camp meetings, setup time, and most travel time must be compensated at minimum wage.",
          fr: "<strong>16,10 $/heure</strong> (en vigueur depuis le 1er mai 2025)<br/>Toutes les heures de travail, y compris la formation en début de saison, les réunions de camp, le temps de préparation et la plupart des temps de déplacement doivent être rémunérées au salaire minimum.",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "Hours worked beyond <strong>40 hours per week</strong> must be paid at <strong>1.5 times the regular hourly rate</strong> (minimum $24.15/hour at minimum wage). Overtime may also be compensated with equivalent paid leave.",
          fr: "Les heures travaillées au-delà de <strong>40 heures par semaine</strong> doivent être rémunérées au taux de <strong>1,5 fois le salaire horaire régulier</strong> (minimum 24,15 $/heure au salaire minimum). Les heures supplémentaires peuvent aussi être compensées par un congé équivalent payé.",
        },
      },
      {
        title: { en: "Maximum Working Hours", fr: "Durée maximale du travail" },
        content: {
          en: "An employee may refuse to work more than <strong>2 hours beyond their regular daily hours</strong> or more than <strong>14 hours of work in a 24-hour period</strong>. An employee may also refuse if the schedule is not set and they must care for a family member.",
          fr: "Un salarié peut refuser de travailler plus de <strong>2 heures au-delà de ses heures habituelles de travail</strong> ou plus de <strong>14 heures de travail par période de 24 heures</strong>. Le salarié peut aussi refuser de travailler si l'horaire n'est pas fixé pour s'occuper d'un membre de sa famille ou d'un proche.",
        },
      },
      {
        title: { en: "Deductions", fr: "Déductions" },
        content: {
          en: "An employer may only make deductions from wages if authorized by law, regulation, court order, collective agreement, decree, or a written mandate from the employee. Arbitrary deductions for equipment damage or production mistakes are not permitted.",
          fr: "L'employeur peut effectuer des déductions sur le salaire seulement si la loi, un règlement, une ordonnance judiciaire, une convention collective, un décret ou un mandat écrit du salarié l'y autorise. Les déductions arbitraires pour dommages à l'équipement ou erreurs de production ne sont pas permises.",
        },
      },
      {
        title: { en: "Statutory Holidays", fr: "Jours fériés" },
        content: {
          en: "Quebec has <strong>8 paid statutory holidays</strong> per year. The indemnity for each holiday equals <strong>1/20 of wages earned in the 4 complete pay weeks preceding the holiday week</strong>. If you work on a statutory holiday, you receive your holiday indemnity plus your regular wages for hours worked.",
          fr: "Le Québec compte <strong>8 jours fériés chômés et payés</strong> par année. L'indemnité versée pour chaque jour férié est égale à <strong>1/20 du salaire gagné au cours des 4 semaines complètes de paie précédant la semaine du congé</strong>. Si vous travaillez un jour férié, vous recevez votre indemnité de jour férié plus votre salaire régulier pour les heures travaillées.",
        },
      },
      {
        title: { en: "Annual Leave", fr: "Vacances annuelles" },
        content: {
          en: "After 1 year of continuous service: <strong>2 consecutive weeks of vacation</strong> (4% of gross wages). After 3 years of continuous service: <strong>3 consecutive weeks of vacation</strong> (6% of gross wages). An employer cannot replace vacation with compensatory indemnity, except as provided in a collective agreement.",
          fr: "Après 1 an de service continu : <strong>2 semaines de vacances continues</strong> (4% du salaire brut). Après 3 ans de service continu : <strong>3 semaines de vacances continues</strong> (6% du salaire brut). L'employeur ne peut remplacer les vacances par une indemnité compensatoire, sauf exceptions prévues dans une convention collective.",
        },
      },
      {
        title: { en: "Occupational Health and Safety (CNESST)", fr: "Santé et sécurité au travail (CNESST)" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact the CNESST at <strong>1-844-838-0808</strong>. All workers have the right to refuse work if they believe it endangers their health, safety, or physical or psychological integrity.",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, blessures, refus de travail dangereux, harcèlement et problèmes d'assainissement, contactez la CNESST au <strong>1-844-838-0808</strong>. Tous les travailleurs ont le droit de refuser d'exécuter un travail s'ils croient que cela met en danger leur santé, leur sécurité ou leur intégrité physique ou psychologique.",
        },
      },
    ],
  },
];

export function getProvinceBySlug(slug: string): ProvinceRights | undefined {
  return provinceRights.find((p) => p.slug === slug);
}
