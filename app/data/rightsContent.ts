export interface RightsLink {
  title: { en: string; fr: string };
  url: string;
  description: { en: string; fr: string };
}

export interface EmploymentStandard {
  title: { en: string; fr: string };
  content: { en: string; fr: string };
}

export interface Reference {
  title: string;
  url: string;
}

export interface ProvinceRights {
  slug: string;
  name: { en: string; fr: string };
  intro: { en: string; fr: string };
  governmentLinks: RightsLink[];
  ngoLinks: RightsLink[];
  standards: EmploymentStandard[];
  references?: Reference[];
}

export const provinceRights: ProvinceRights[] = [
  {
    slug: "bc",
    name: { en: "British Columbia", fr: "Colombie-Britannique" },
    intro: {
      en: "In British Columbia, workers are protected by the Employment Standards Act, with special rules for silviculture workers paid by piece rate. BC is one of the few provinces whose employment standards explicitly address tree planting — including piece-rate overtime, camp costs, and record-keeping.",
      fr: "En Colombie-Britannique, les travailleurs sont protégés par la Loi sur les normes d'emploi, avec des règles particulières pour les travailleurs en sylviculture payés à la pièce. La C.-B. est l'une des rares provinces dont les normes d'emploi traitent explicitement de la plantation d'arbres — y compris les heures supplémentaires à la pièce, les frais de camp et la tenue de registres.",
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
          en: "Silviculture Workers — Special Rules",
          fr: "Travailleurs en sylviculture — règles particulières",
        },
        url: "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/hiring/silviculture-workers",
        description: {
          en: "Official guide to the special employment standards for silviculture workers, including piece rates and overtime",
          fr: "Guide officiel des normes d'emploi particulières pour les travailleurs en sylviculture, y compris les tarifs à la pièce et les heures supplémentaires",
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
          en: "BC Federation of Labour",
          fr: "Fédération du travail de la C.-B.",
        },
        url: "https://bcfed.ca/",
        description: {
          en: "Central labour body advocating for workers across British Columbia",
          fr: "Organisation syndicale centrale défendant les travailleurs de toute la Colombie-Britannique",
        },
      },
      {
        title: {
          en: "Replant.ca — Employment Standards for Tree Planters",
          fr: "Replant.ca — Normes d'emploi pour les planteurs d'arbres",
        },
        url: "https://www.replant.ca/employmentstandards.html",
        description: {
          en: "Industry resource explaining employment standards as they apply to tree planters",
          fr: "Ressource de l'industrie expliquant les normes d'emploi telles qu'elles s'appliquent aux planteurs d'arbres",
        },
      },
    ],
    standards: [
      {
        title: { en: "Minimum Wage", fr: "Salaire minimum" },
        content: {
          en: "<strong>$18.25/hour</strong> (effective June 1, 2026), adjusted every June 1 based on BC's average inflation<br/>This includes pre-season training, camp meetings, setup time, and most travel time. If you are paid piece rates, your earnings each pay period must average at least minimum wage for all hours worked — employers must top up any shortfall and cannot offset it against better pay periods.",
          fr: "<strong>18,25 $/heure</strong> (en vigueur depuis le 1er juin 2026), ajusté chaque 1er juin selon l'inflation moyenne de la C.-B.<br/>Cela inclut la formation en début de saison, les réunions de camp, le temps de préparation et la plupart des temps de déplacement. Si vous êtes payé à la pièce, vos gains de chaque période de paie doivent équivaloir au moins au salaire minimum pour toutes les heures travaillées — l'employeur doit combler tout écart et ne peut pas le compenser avec de meilleures périodes de paie.",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "If you are paid <strong>piece rates</strong>: for hours between 8 and 12 in a day you must receive the greater of your piece-rate earnings or <strong>1.5 times minimum wage</strong> ($27.38/hour); hours beyond 12 in a day must be paid at <strong>double your piece rate</strong>. If you are paid hourly, standard overtime applies: 1.5 times your wage after 8 hours in a day and double after 12.",
          fr: "Si vous êtes payé <strong>à la pièce</strong> : pour les heures entre 8 et 12 par jour, vous devez recevoir le plus élevé de vos gains à la pièce ou de <strong>1,5 fois le salaire minimum</strong> (27,38 $/heure) ; les heures au-delà de 12 par jour doivent être payées au <strong>double de votre tarif à la pièce</strong>. Si vous êtes payé à l'heure, les heures supplémentaires standard s'appliquent : 1,5 fois votre salaire après 8 heures par jour et le double après 12.",
        },
      },
      {
        title: { en: "Piece Rates and Records", fr: "Tarifs à la pièce et registres" },
        content: {
          en: "Your piece rate must be set before work begins. Employers must keep <strong>daily records</strong> of trees planted, area worked, unit prices, hours worked, and camp costs — and both you and the employer must <strong>sign these records each pay period</strong>. Keep your own daily tally to compare.",
          fr: "Votre tarif à la pièce doit être fixé avant le début du travail. Les employeurs doivent tenir des <strong>registres quotidiens</strong> des arbres plantés, de la superficie travaillée, des prix unitaires, des heures travaillées et des frais de camp — et vous et l'employeur devez <strong>signer ces registres à chaque période de paie</strong>. Tenez votre propre décompte quotidien pour comparer.",
        },
      },
      {
        title: { en: "Camp Costs", fr: "Frais de camp" },
        content: {
          en: "Employers may deduct up to <strong>$25 per day</strong> for camp costs — or the actual cost of a motel room — only with your written agreement. Deductions cannot exceed actual costs.",
          fr: "Les employeurs peuvent déduire jusqu'à <strong>25 $ par jour</strong> pour les frais de camp — ou le coût réel d'une chambre de motel — seulement avec votre accord écrit. Les déductions ne peuvent pas dépasser les coûts réels.",
        },
      },
      {
        title: { en: "Deductions", fr: "Déductions" },
        content: {
          en: "Employers cannot deduct their business costs from your wages — including equipment damage, production mistakes, or missing gear. Any permitted deduction requires proper authorization and must appear on your pay stub.",
          fr: "Les employeurs ne peuvent pas déduire leurs coûts d'entreprise de votre salaire — y compris les dommages à l'équipement, les erreurs de production ou le matériel manquant. Toute déduction permise nécessite une autorisation appropriée et doit figurer sur votre talon de paie.",
        },
      },
      {
        title: { en: "Statutory Holidays", fr: "Jours fériés" },
        content: {
          en: "Workers are entitled to statutory holiday pay. If required to work on a statutory holiday, you receive your average daily wage plus time-and-a-half for hours worked. For silviculture workers, employers may instead pay an additional <strong>4.4% of gross earnings</strong> in lieu of statutory holiday pay — check your pay stubs to make sure you receive one or the other.",
          fr: "Les travailleurs ont droit à une indemnité de jour férié. Si vous êtes obligé de travailler un jour férié, vous recevez votre salaire quotidien moyen plus une fois et demie pour les heures travaillées. Pour les travailleurs en sylviculture, l'employeur peut plutôt verser un supplément de <strong>4,4 % des gains bruts</strong> au lieu de l'indemnité de jour férié — vérifiez vos talons de paie pour vous assurer de recevoir l'un ou l'autre.",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Tree planters are entitled to <strong>4% vacation pay</strong> on all earnings (<strong>6%</strong> after 5 years with the same employer). For silviculture workers this is often paid as a percentage added to each cheque instead of vacation time — it must be clearly indicated on pay stubs.",
          fr: "Les planteurs d'arbres ont droit à une <strong>indemnité de vacances de 4 %</strong> sur tous leurs gains (<strong>6 %</strong> après 5 ans chez le même employeur). Pour les travailleurs en sylviculture, elle est souvent versée en pourcentage ajouté à chaque paie au lieu de vacances — cela doit être clairement indiqué sur les talons de paie.",
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
        url: "https://open.alberta.ca/publications/e09",
        description: {
          en: "Full text of Alberta's Employment Standards Code",
          fr: "Texte complet du Code des normes d'emploi de l'Alberta",
        },
      },
      {
        title: {
          en: "Report Unsafe Work",
          fr: "Signaler un travail dangereux",
        },
        url: "https://www.alberta.ca/report-unsafe-work",
        description: {
          en: "Instructions from the provincial government — if you are concerned about an unsafe work site or conditions, you must report it to your employer or supervisor to determine next steps.",
          fr: "Instructions du gouvernement provincial — si vous êtes préoccupé par un chantier ou des conditions de travail dangereuses, vous devez le signaler à votre employeur ou à votre superviseur afin de déterminer les prochaines étapes.",
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
          en: "<strong>$15.00/hour</strong> (students under 18: $13.00/hour for the first 28 hours in a week)<br/>Alberta's minimum wage has not increased since October 2018 and is now the lowest in Canada. All work hours must be compensated at minimum wage, portal to portal. [1]",
          fr: "<strong>15,00 $/heure</strong> (étudiants de moins de 18 ans : 13,00 $/heure pour les 28 premières heures d'une semaine)<br/>Le salaire minimum de l'Alberta n'a pas augmenté depuis octobre 2018 et est maintenant le plus bas au Canada. Toutes les heures de travail doivent être rémunérées au salaire minimum, du début à la fin de la période de travail (« portail à portail »). [1]",
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
          en: "Employers cannot deduct wages for equipment damage, faulty work, or production mistakes. Such deductions are prohibited under Alberta employment standards. [1]",
          fr: "Les employeurs ne peuvent pas déduire des salaires pour des dommages à l'équipement, un travail défectueux ou des erreurs de production. Ces déductions sont interdites en vertu des normes d'emploi de l'Alberta. [1]",
        },
      },
      {
        title: { en: "Statutory Holiday Pay", fr: "Indemnité de jour férié" },
        content: {
          en: "Most employees are entitled to general holiday pay if the holiday is a regular day of work or if they work on a general holiday that is not a regular day of work. Employees are not entitled to general holiday pay if they worked fewer than <strong>30 workdays</strong> for the employer in the 12 months before the holiday, or if other Alberta employment standards disqualification rules apply. [3]<br/>If you don't work a holiday that falls on a regular workday, you receive your average daily wage. If you work it, you receive <strong>1.5 times your rate</strong> (minimum $22.50/hour at minimum wage) <strong>plus your average daily wage</strong> — or regular pay plus a future paid day off.<br/>See more here: <a href=\"https://www.alberta.ca/alberta-general-holidays\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">alberta.ca/alberta-general-holidays</a>. [3]",
          fr: "La plupart des employés ont droit à l'indemnité de jour férié si le jour férié est un jour de travail habituel ou s'ils travaillent un jour férié qui n'est pas un jour de travail habituel. Les employés n'ont pas droit à l'indemnité de jour férié s'ils ont travaillé moins de <strong>30 jours de travail</strong> pour l'employeur dans les 12 mois précédant le jour férié, ou si d'autres règles d'inadmissibilité des normes d'emploi de l'Alberta s'appliquent. [3]<br/>Si vous ne travaillez pas un jour férié qui tombe un jour de travail habituel, vous recevez votre salaire quotidien moyen. Si vous le travaillez, vous recevez <strong>1,5 fois votre taux</strong> (minimum 22,50 $/heure au salaire minimum) <strong>plus votre salaire quotidien moyen</strong> — ou votre salaire régulier plus un jour de congé payé ultérieur.<br/>Pour en savoir plus : <a href=\"https://www.alberta.ca/alberta-general-holidays\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">alberta.ca/alberta-general-holidays</a>. [3]",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "After <strong>8 hours in a day</strong> or <strong>44 hours in a week</strong>, overtime must be paid at <strong>1.5 times the regular rate</strong>. [4]<br/>However, overtime rules, thresholds, and calculation methods can vary depending on the worker's industry classification, occupation, and any applicable exemptions or averaging arrangements. For workers paid exclusively by piece rate, overtime calculations may be based on minimum wage where no hourly wage rate exists. [4][5]<br/>Overtime exemptions may include managers. [5]",
          fr: "Après <strong>8 heures dans une journée</strong> ou <strong>44 heures dans une semaine</strong>, les heures supplémentaires doivent être payées à <strong>1,5 fois le taux régulier</strong>. [4]<br/>Cependant, les règles, seuils et méthodes de calcul des heures supplémentaires peuvent varier selon la classification de l'industrie, la profession du travailleur, ainsi que les exemptions ou ententes d'étalement applicables. Pour les travailleurs payés exclusivement à la pièce, le calcul des heures supplémentaires peut être basé sur le salaire minimum lorsqu'aucun taux horaire n'existe. [4][5]<br/>Les exemptions aux heures supplémentaires peuvent inclure les cadres. [5]",
        },
      },
      {
        title: { en: "Alberta OHS", fr: "SST de l'Alberta" },
        content: {
          en: "For workplace safety issues including illness, injury, unsafe work refusal, harassment, and sanitation, contact Alberta Occupational Health and Safety (OHS) at <a href=\"https://www.alberta.ca/occupational-health-safety\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">alberta.ca/occupational-health-safety</a>. Workers have the right to refuse unsafe work. [6]",
          fr: "Pour les questions de sécurité au travail, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et l'assainissement, contactez la Santé et sécurité au travail (SST) de l'Alberta à <a href=\"https://www.alberta.ca/occupational-health-safety\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">alberta.ca/occupational-health-safety</a>. Les travailleurs ont le droit de refuser un travail dangereux. [6]",
        },
      },
    ],
    references: [
      {
        title: "Alberta.ca — Employment Standards (minimum wage, deductions) [1]",
        url: "https://www.alberta.ca/employment-standards",
      },
      {
        title: "Alberta.ca — Report Unsafe Work [2]",
        url: "https://www.alberta.ca/report-unsafe-work",
      },
      {
        title: "Alberta.ca — Alberta General Holidays (holiday pay eligibility) [3]",
        url: "https://www.alberta.ca/alberta-general-holidays",
      },
      {
        title: "Alberta.ca — Overtime Hours and Overtime Pay [4]",
        url: "https://www.alberta.ca/overtime-hours-overtime-pay",
      },
      {
        title: "Workforce.com — Overtime Laws by Province (Canada) [5]",
        url: "https://www.workforce.com/ca/resources/overtime-laws-by-province-canada",
      },
      {
        title: "Alberta.ca — Occupational Health and Safety [6]",
        url: "https://www.alberta.ca/occupational-health-safety",
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
          en: "Filing an Employment Standards Claim",
          fr: "Déposer une réclamation relative aux normes d'emploi",
        },
        url: "https://www.ontario.ca/document/your-guide-employment-standards-act-0/filing-claim",
        description: {
          en: "How to file a claim if your rights have been violated. Employment Standards Information Centre: 1-800-531-5551",
          fr: "Comment déposer une réclamation si vos droits ont été violés. Centre d'information sur les normes d'emploi : 1-800-531-5551",
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
          en: "<strong>$17.60/hour</strong>, rising to <strong>$17.95/hour</strong> on October 1, 2026 (adjusted annually based on the Consumer Price Index)<br/>All work hours including training, camp meetings, setup time, and travel time must be compensated at minimum wage. Students under 18 working 28 hours/week or less: $16.60/hour, rising to $16.90 on October 1, 2026.",
          fr: "<strong>17,60 $/heure</strong>, passant à <strong>17,95 $/heure</strong> le 1er octobre 2026 (ajusté annuellement selon l'Indice des prix à la consommation)<br/>Toutes les heures de travail, y compris la formation, les réunions de camp, le temps de préparation et le temps de déplacement, doivent être rémunérées au salaire minimum. Étudiants de moins de 18 ans travaillant 28 heures/semaine ou moins : 16,60 $/heure, passant à 16,90 $ le 1er octobre 2026.",
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
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, contactez le ministère du Travail. Tous les travailleurs ont le droit de refuser un travail dangereux. Le Bureau des conseillers des travailleurs offre des services gratuits pour les questions d'assurance contre les accidents du travail (WSIB).",
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
          en: "<strong>$15.35/hour</strong>, rising to <strong>$15.70/hour</strong> on October 1, 2026<br/>Saskatchewan's minimum wage is indexed annually using a formula that gives equal weight to changes in the Consumer Price Index and the Average Hourly Wage for Saskatchewan. All work hours including training, camp meetings, setup time, and travel time must be compensated at minimum wage.",
          fr: "<strong>15,35 $/heure</strong>, passant à <strong>15,70 $/heure</strong> le 1er octobre 2026<br/>Le salaire minimum de la Saskatchewan est indexé annuellement selon une formule accordant un poids égal aux variations de l'Indice des prix à la consommation et du salaire horaire moyen en Saskatchewan. Toutes les heures de travail, y compris la formation, les réunions de camp, le temps de préparation et le temps de déplacement, doivent être rémunérées au salaire minimum.",
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
          en: "Commission des normes, de l'équité, de la santé et de la sécurité du travail (CNESST)",
          fr: "Commission des normes, de l'équité, de la santé et de la sécurité du travail (CNESST)",
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
          en: "<strong>$16.60/hour</strong> (effective May 1, 2026), adjusted each May 1<br/>All work hours — including pre-season training, camp meetings, setup time, and most travel time — must be compensated at minimum wage, portal to portal (i.e., from the moment you are required to be present until you are released). [1]",
          fr: "<strong>16,60 $/heure</strong> (en vigueur depuis le 1er mai 2026), ajusté chaque 1er mai<br/>Toutes les heures de travail — y compris la formation en début de saison, les réunions de camp, le temps de préparation et la plupart des temps de déplacement — doivent être rémunérées au salaire minimum, du début à la fin de la période de travail (« portail à portail »), c'est-à-dire dès le moment où votre présence est exigée jusqu'à celui où vous êtes libéré. [1]",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "Hours worked beyond <strong>40 hours per week</strong> must be paid at <strong>1.5 times the regular hourly rate</strong> (minimum $24.90/hour at minimum wage). Overtime may also be compensated with equivalent paid leave. Some workers, such as farm workers, are not entitled to the overtime wage increase. [2] For workers who work in a logging operation or a sawmill, a standard work week is <strong>47 hours</strong>. [2] Exemptions may include senior managers. [2]",
          fr: "Les heures travaillées au-delà de <strong>40 heures par semaine</strong> doivent être rémunérées au taux de <strong>1,5 fois le salaire horaire régulier</strong> (minimum 24,90 $/heure au salaire minimum). Les heures supplémentaires peuvent aussi être compensées par un congé équivalent payé. Certains travailleurs, comme les travailleurs agricoles, n'ont pas droit à la majoration pour heures supplémentaires. [2] Pour les travailleurs d'une exploitation forestière ou d'une scierie, la semaine normale de travail est de <strong>47 heures</strong>. [2] Les cadres supérieurs peuvent être exemptés. [2]",
        },
      },
      {
        title: { en: "Maximum Working Hours", fr: "Durée maximale du travail" },
        content: {
          en: "An employee may refuse to work more than <strong>2 hours beyond their regular daily hours</strong> or more than <strong>14 hours of work in a 24-hour period</strong>. An employee may also refuse if the schedule is not set and they must care for a family member. Employees may also refuse work if they were not informed of their schedule at least <strong>5 days in advance</strong>, subject to exceptions under Quebec labour standards law. [3]",
          fr: "Un salarié peut refuser de travailler plus de <strong>2 heures au-delà de ses heures habituelles de travail</strong> ou plus de <strong>14 heures de travail par période de 24 heures</strong>. Le salarié peut aussi refuser de travailler si l'horaire n'est pas fixé pour s'occuper d'un membre de sa famille ou d'un proche. Les salariés peuvent également refuser de travailler s'ils n'ont pas été informés de leur horaire au moins <strong>5 jours à l'avance</strong>, sous réserve des exceptions prévues par les normes du travail du Québec. [3]",
        },
      },
      {
        title: { en: "Deductions", fr: "Déductions" },
        content: {
          en: "An employer may only make deductions from wages if authorized by law, regulation, court order, collective agreement, decree, or a written mandate from the employee. The employer may make deductions from wages if the employee consents thereto in writing, for a specific purpose mentioned in the writing. [4] Arbitrary deductions for equipment damage or production mistakes are not permitted.",
          fr: "L'employeur peut effectuer des déductions sur le salaire seulement si la loi, un règlement, une ordonnance judiciaire, une convention collective, un décret ou un mandat écrit du salarié l'y autorise. L'employeur peut effectuer une retenue sur le salaire si le salarié y consent par écrit, pour une fin spécifique mentionnée dans cet écrit. [4] Les déductions arbitraires pour dommages à l'équipement ou erreurs de production ne sont pas permises.",
        },
      },
      {
        title: { en: "Statutory Holidays", fr: "Jours fériés" },
        content: {
          en: "Quebec has <strong>8 paid statutory holidays</strong> per year. The indemnity for each holiday equals <strong>1/20 of wages earned in the 4 complete pay weeks preceding the holiday week</strong>. If you work on a statutory holiday, you receive your holiday indemnity plus your regular wages for hours worked. To calculate the indemnity, use the <a href=\"https://www.cnesst.gouv.qc.ca/en/working-conditions/leave/statutory-holidays/statutory-holidays\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">CNESST Statutory Holidays Calculator</a> to ensure complete compliance. [5]",
          fr: "Le Québec compte <strong>8 jours fériés chômés et payés</strong> par année. L'indemnité versée pour chaque jour férié est égale à <strong>1/20 du salaire gagné au cours des 4 semaines complètes de paie précédant la semaine du congé</strong>. Si vous travaillez un jour férié, vous recevez votre indemnité de jour férié plus votre salaire régulier pour les heures travaillées. Pour calculer l'indemnité, utilisez le <a href=\"https://www.cnesst.gouv.qc.ca/fr/conditions-travail/conges/jours-feries-chomes-payes/jours-feries-chomes-payes\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">calculateur des jours fériés de la CNESST</a> afin d'assurer une conformité complète. [5]",
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
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact the CNESST at <strong>1-844-838-0808</strong> or visit <a href=\"https://www.cnesst.gouv.qc.ca/en\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">cnesst.gouv.qc.ca</a>. All workers have the right to refuse work if they believe it endangers their health, safety, or physical or psychological integrity. [6]",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, blessures, refus de travail dangereux, harcèlement et problèmes d'assainissement, contactez la CNESST au <strong>1-844-838-0808</strong> ou visitez <a href=\"https://www.cnesst.gouv.qc.ca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">cnesst.gouv.qc.ca</a>. Tous les travailleurs ont le droit de refuser d'exécuter un travail s'ils croient que cela met en danger leur santé, leur sécurité ou leur intégrité physique ou psychologique. [6]",
        },
      },
    ],
    references: [
      {
        title: "CNESST — Labour Standards in Québec (PDF guide, reviewed source document) [1]",
        url: "https://www.cnesst.gouv.qc.ca/sites/default/files/documents/labour-standards-quebec.pdf",
      },
      {
        title: "CNESST — Overtime, Standard Work Week & Farm Workers (interpretation guide) [2]",
        url: "https://www.cnesst.gouv.qc.ca/en/working-conditions/wage-and-pay/wages/overtime",
      },
      {
        title: "Workforce.com — Overtime Laws by Province (Canada) [2]",
        url: "https://www.workforce.com/ca/resources/overtime-laws-by-province-canada",
      },
      {
        title: "CNESST — Right to Refuse to Work [3]",
        url: "https://www.cnesst.gouv.qc.ca/en/working-conditions/work-schedule-and-termination-employment/work-schedule/right-refuse-work",
      },
      {
        title: "CNESST — Section 49, Act Respecting Labour Standards (deductions) [4]",
        url: "https://www.cnesst.gouv.qc.ca/en/node/1147646/interpretation-guide/act-respecting-labour-standards/chapter-iv-larbour-standards-section-391-97/division-i-wages-section-391-511/section-49",
      },
      {
        title: "CNESST — Statutory Holidays Calculator [5]",
        url: "https://www.cnesst.gouv.qc.ca/en/working-conditions/leave/statutory-holidays/statutory-holidays",
      },
      {
        title: "CNESST — Official Website [6]",
        url: "https://www.cnesst.gouv.qc.ca/en",
      },
    ],
  },
  {
    slug: "nova-scotia",
    name: { en: "Nova Scotia", fr: "Nouvelle-Écosse" },
    intro: {
      en: "In Nova Scotia, workers are protected by the Labour Standards Code. Reforestation work falls under the province's special rules for logging and forest operations, so tree planters should pay close attention to the differences — including the exclusion from overtime pay.",
      fr: "En Nouvelle-Écosse, les travailleurs sont protégés par le Code des normes du travail (Labour Standards Code). Le travail de reboisement relève des règles particulières de la province pour les opérations forestières — les planteurs d'arbres doivent porter une attention particulière aux différences, notamment l'exclusion des heures supplémentaires.",
    },
    governmentLinks: [
      {
        title: {
          en: "Nova Scotia Labour Standards",
          fr: "Normes du travail de la Nouvelle-Écosse",
        },
        url: "https://novascotia.ca/lae/employmentrights/",
        description: {
          en: "Official government employment rights information",
          fr: "Informations officielles du gouvernement sur les droits en matière d'emploi",
        },
      },
      {
        title: {
          en: "Logging and Forestry Labour Standards",
          fr: "Normes du travail pour l'exploitation forestière",
        },
        url: "https://novascotia.ca/lae/employmentrights/forestry.asp",
        description: {
          en: "Special rules for logging, forestry, and reforestation workers",
          fr: "Règles particulières pour les travailleurs de l'exploitation forestière et du reboisement",
        },
      },
      {
        title: {
          en: "Minimum Wage Order (Logging and Forest Operations)",
          fr: "Décret sur le salaire minimum (opérations forestières)",
        },
        url: "https://novascotia.ca/just/regulations/regs/lscmwlfo.htm",
        description: {
          en: "Full text of the minimum wage order covering reforestation work",
          fr: "Texte complet du décret sur le salaire minimum couvrant le travail de reboisement",
        },
      },
    ],
    ngoLinks: [
      {
        title: {
          en: "Nova Scotia Federation of Labour",
          fr: "Fédération du travail de la Nouvelle-Écosse",
        },
        url: "https://nslabour.ca/",
        description: {
          en: "Central labour body advocating for workers across Nova Scotia",
          fr: "Organisation syndicale centrale défendant les travailleurs de toute la Nouvelle-Écosse",
        },
      },
      {
        title: {
          en: "Legal Information Society of Nova Scotia",
          fr: "Legal Information Society of Nova Scotia",
        },
        url: "https://www.legalinfo.org/",
        description: {
          en: "Free legal information about employment rights in Nova Scotia",
          fr: "Informations juridiques gratuites sur les droits en matière d'emploi en Nouvelle-Écosse",
        },
      },
      {
        title: {
          en: "Centre for Migrant Worker Rights Nova Scotia",
          fr: "Centre pour les droits des travailleurs migrants de la Nouvelle-Écosse",
        },
        url: "https://www.migrantjusticens.ca/",
        description: {
          en: "Support and labour standards information for migrant and seasonal workers",
          fr: "Soutien et informations sur les normes du travail pour les travailleurs migrants et saisonniers",
        },
      },
    ],
    standards: [
      {
        title: { en: "Minimum Wage", fr: "Salaire minimum" },
        content: {
          en: "<strong>$16.75/hour</strong> (effective April 1, 2026), rising to <strong>$17.00/hour</strong> on October 1, 2026<br/>Nova Scotia has a separate Minimum Wage Order for logging and forest operations that explicitly covers reforestation work. All work hours including training, camp meetings, setup time, and travel time must be compensated at minimum wage. Piece rates (per tree) must work out to at least minimum wage for the hours you worked — the only exemption is for workers paid by wood measurement (board feet or cords) under a written agreement.",
          fr: "<strong>16,75 $/heure</strong> (en vigueur depuis le 1er avril 2026), passant à <strong>17,00 $/heure</strong> le 1er octobre 2026<br/>La Nouvelle-Écosse possède un décret sur le salaire minimum distinct pour les opérations forestières qui couvre explicitement le travail de reboisement. Toutes les heures de travail, y compris la formation, les réunions de camp, le temps de préparation et le temps de déplacement, doivent être rémunérées au salaire minimum. Les tarifs à la pièce (par arbre) doivent équivaloir au moins au salaire minimum pour les heures travaillées — la seule exemption vise les travailleurs payés selon le mesurage du bois (pieds-planche ou cordes) en vertu d'une entente écrite.",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "<strong>Important:</strong> Workers in logging and forest operations — including reforestation — are <strong>not entitled to overtime pay</strong> under Nova Scotia's Labour Standards Code. For most other workers, overtime at <strong>1.5 times the regular wage</strong> applies only after 48 hours in a week. Keep detailed daily records of your hours: no matter how many hours you work, your total pay must equal at least minimum wage for every hour worked.",
          fr: "<strong>Important :</strong> Les travailleurs des opérations forestières — y compris le reboisement — <strong>n'ont pas droit à la rémunération des heures supplémentaires</strong> en vertu du Code des normes du travail de la Nouvelle-Écosse. Pour la plupart des autres travailleurs, les heures supplémentaires à <strong>1,5 fois le salaire régulier</strong> ne s'appliquent qu'après 48 heures par semaine. Tenez un registre quotidien détaillé de vos heures : peu importe le nombre d'heures travaillées, votre paie totale doit équivaloir au moins au salaire minimum pour chaque heure travaillée.",
        },
      },
      {
        title: { en: "Board and Lodging", fr: "Chambre et pension" },
        content: {
          en: "In logging and forest operations, employers may deduct a maximum of <strong>$10.80 per day</strong> from minimum wages for board and lodging. Employers cannot charge you for board or lodging you do not receive, or for meals not eaten.",
          fr: "Dans les opérations forestières, les employeurs peuvent déduire un maximum de <strong>10,80 $ par jour</strong> du salaire minimum pour la chambre et la pension. Les employeurs ne peuvent pas vous facturer une chambre ou une pension que vous ne recevez pas, ni des repas non consommés.",
        },
      },
      {
        title: { en: "Deductions", fr: "Déductions" },
        content: {
          en: "Deductions must be authorized by federal or Nova Scotia law (taxes, CPP, EI), by court order, or by your written consent. Even with written consent, deductions for lodging, uniforms, or meals cannot bring your earnings below minimum wage. Arbitrary deductions for equipment damage or production mistakes are not permitted.",
          fr: "Les déductions doivent être autorisées par une loi fédérale ou néo-écossaise (impôts, RPC, AE), par une ordonnance judiciaire ou par votre consentement écrit. Même avec un consentement écrit, les déductions pour l'hébergement, les uniformes ou les repas ne peuvent pas faire descendre vos gains sous le salaire minimum. Les déductions arbitraires pour dommages à l'équipement ou erreurs de production ne sont pas permises.",
        },
      },
      {
        title: { en: "Statutory Holidays", fr: "Jours fériés" },
        content: {
          en: "Nova Scotia has <strong>6 paid holidays</strong>: New Year's Day, Nova Scotia Heritage Day, Good Friday, Canada Day, Labour Day, and Christmas Day. To qualify, you must have been entitled to pay for at least 15 of the 30 calendar days before the holiday and have worked your scheduled shifts before and after it. If you work on a paid holiday, you receive a regular day's pay plus <strong>1.5 times your regular rate</strong> for hours worked. Remembrance Day is covered separately by the Remembrance Day Act.",
          fr: "La Nouvelle-Écosse compte <strong>6 jours fériés payés</strong> : le jour de l'An, le jour du Patrimoine de la Nouvelle-Écosse, le Vendredi saint, la fête du Canada, la fête du Travail et le jour de Noël. Pour être admissible, vous devez avoir eu droit à une rémunération pendant au moins 15 des 30 jours civils précédant le jour férié et avoir travaillé vos quarts prévus avant et après celui-ci. Si vous travaillez un jour férié, vous recevez une journée normale de salaire plus <strong>1,5 fois votre taux régulier</strong> pour les heures travaillées. Le jour du Souvenir est régi séparément par la Remembrance Day Act.",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Workers are entitled to <strong>4% vacation pay</strong> on all earnings from the start of employment, with 2 weeks of vacation time after each 12 months of work. Vacation pay increases to <strong>6%</strong> at the start of your 8th year of service, and vacation time increases to 3 weeks after completing 8 years. Vacation pay should be clearly indicated on pay stubs.",
          fr: "Les travailleurs ont droit à une <strong>indemnité de vacances de 4 %</strong> sur tous leurs gains dès le début de l'emploi, avec 2 semaines de vacances après chaque période de 12 mois de travail. L'indemnité passe à <strong>6 %</strong> au début de la 8e année de service, et les vacances passent à 3 semaines après 8 années complètes de service. Cela doit être clairement indiqué sur les talons de paie.",
        },
      },
      {
        title: { en: "Workplace Safety", fr: "Sécurité au travail" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact the Safety Branch of the Department of Labour, Skills and Immigration at <strong>1-800-952-2687</strong> (1-800-9LABOUR), available 24/7. Under Section 43 of Nova Scotia's Occupational Health and Safety Act, all workers have the right to refuse work they have reasonable grounds to believe is unsafe. Workplace injuries are covered by WCB Nova Scotia.",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, contactez la Direction de la sécurité du ministère du Travail, des Compétences et de l'Immigration au <strong>1-800-952-2687</strong> (1-800-9LABOUR), disponible 24 heures sur 24, 7 jours sur 7. En vertu de l'article 43 de la Loi sur la santé et la sécurité au travail de la Nouvelle-Écosse, tous les travailleurs ont le droit de refuser un travail qu'ils ont des motifs raisonnables de croire dangereux. Les accidents du travail sont couverts par la WCB Nova Scotia.",
        },
      },
    ],
  },
  {
    slug: "manitoba",
    name: { en: "Manitoba", fr: "Manitoba" },
    intro: {
      en: "In Manitoba, workers are protected by the Employment Standards Code. Unlike some provinces, Manitoba has no special exemption for silviculture workers — general employment standards, including daily and weekly overtime, apply to tree planters.",
      fr: "Au Manitoba, les travailleurs sont protégés par le Code des normes d'emploi. Contrairement à certaines provinces, le Manitoba n'a pas d'exemption particulière pour les travailleurs en sylviculture — les normes d'emploi générales, y compris les heures supplémentaires quotidiennes et hebdomadaires, s'appliquent aux planteurs d'arbres.",
    },
    governmentLinks: [
      {
        title: {
          en: "Manitoba Employment Standards",
          fr: "Normes d'emploi du Manitoba",
        },
        url: "https://www.gov.mb.ca/labour/standards/",
        description: {
          en: "Official government employment standards information. Contact: 204-945-3352 or 1-800-821-4307",
          fr: "Informations officielles du gouvernement sur les normes d'emploi. Contact : 204-945-3352 ou 1-800-821-4307",
        },
      },
      {
        title: {
          en: "The Employment Standards Code",
          fr: "Code des normes d'emploi",
        },
        url: "https://www.canlii.org/en/mb/laws/stat/ccsm-c-e110/latest/",
        description: {
          en: "Full text of Manitoba's Employment Standards Code",
          fr: "Texte complet du Code des normes d'emploi du Manitoba",
        },
      },
      {
        title: {
          en: "Manitoba Workplace Safety and Health",
          fr: "Sécurité et santé au travail du Manitoba",
        },
        url: "https://www.gov.mb.ca/labour/safety/",
        description: {
          en: "Government branch responsible for workplace safety, unsafe work reports, and inspections",
          fr: "Direction gouvernementale responsable de la sécurité au travail, des signalements de travail dangereux et des inspections",
        },
      },
    ],
    ngoLinks: [
      {
        title: {
          en: "Manitoba Federation of Labour",
          fr: "Fédération du travail du Manitoba",
        },
        url: "https://mfl.ca/",
        description: {
          en: "Central labour body advocating for workers across Manitoba",
          fr: "Organisation syndicale centrale défendant les travailleurs de tout le Manitoba",
        },
      },
      {
        title: {
          en: "Community Legal Education Association",
          fr: "Community Legal Education Association",
        },
        url: "https://www.communitylegal.mb.ca/",
        description: {
          en: "Free legal information for Manitobans, including workers' rights and a law phone-in line",
          fr: "Informations juridiques gratuites pour les Manitobains, y compris sur les droits des travailleurs, avec une ligne téléphonique juridique",
        },
      },
    ],
    standards: [
      {
        title: { en: "Minimum Wage", fr: "Salaire minimum" },
        content: {
          en: "<strong>$16.00/hour</strong>, rising to <strong>$16.40/hour</strong> on October 1, 2026<br/>Manitoba's minimum wage is adjusted every October 1 based on inflation. All work hours including training, camp meetings, setup time, and travel time must be compensated at minimum wage.",
          fr: "<strong>16,00 $/heure</strong>, passant à <strong>16,40 $/heure</strong> le 1er octobre 2026<br/>Le salaire minimum du Manitoba est ajusté chaque 1er octobre en fonction de l'inflation. Toutes les heures de travail, y compris la formation, les réunions de camp, le temps de préparation et le temps de déplacement, doivent être rémunérées au salaire minimum.",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "Overtime must be paid at <strong>1.5 times your regular wage</strong> after <strong>8 hours in a day or 40 hours in a week</strong> — one of the strongest overtime standards in Canada. Most employees qualify, including piece-rate and minimum wage earners. There is no silviculture exemption in Manitoba.",
          fr: "Les heures supplémentaires doivent être payées à <strong>1,5 fois votre salaire régulier</strong> après <strong>8 heures par jour ou 40 heures par semaine</strong> — l'une des normes d'heures supplémentaires les plus fortes au Canada. La plupart des employés y ont droit, y compris les travailleurs à la pièce et au salaire minimum. Il n'y a pas d'exemption pour la sylviculture au Manitoba.",
        },
      },
      {
        title: { en: "Deductions", fr: "Déductions" },
        content: {
          en: "Employers can only deduct what is required by law (taxes, CPP, EI) or what you agree to in writing for things that directly benefit you. Deductions for <strong>equipment damage, faulty work, cash shortages, or uniforms are prohibited</strong>. Employers must provide personal protective equipment at no cost to workers.",
          fr: "Les employeurs ne peuvent déduire que ce qui est exigé par la loi (impôts, RPC, AE) ou ce que vous acceptez par écrit pour des choses qui vous profitent directement. Les déductions pour <strong>dommages à l'équipement, travail défectueux, manques de caisse ou uniformes sont interdites</strong>. Les employeurs doivent fournir l'équipement de protection individuelle sans frais aux travailleurs.",
        },
      },
      {
        title: { en: "Room and Board", fr: "Chambre et pension" },
        content: {
          en: "Deductions for room and board require your consent and cannot reduce your earnings below minimum wage by more than <strong>$7 per week for the room</strong> and <strong>$1 per meal</strong>.",
          fr: "Les déductions pour la chambre et la pension nécessitent votre consentement et ne peuvent pas faire descendre vos gains sous le salaire minimum de plus de <strong>7 $ par semaine pour la chambre</strong> et <strong>1 $ par repas</strong>.",
        },
      },
      {
        title: { en: "General Holidays", fr: "Jours fériés généraux" },
        content: {
          en: "Manitoba has <strong>9 general holidays</strong> per year, including Louis Riel Day and Orange Shirt Day. Holiday pay is <strong>5% of your gross wages</strong> (excluding overtime) in the 4 weeks before the holiday. If you work on a general holiday, you receive <strong>1.5 times your regular rate</strong> for hours worked plus your holiday pay. There is no minimum service period to qualify.",
          fr: "Le Manitoba compte <strong>9 jours fériés généraux</strong> par année, y compris la Journée Louis Riel et la Journée du chandail orange. L'indemnité de jour férié est de <strong>5 % de votre salaire brut</strong> (heures supplémentaires exclues) des 4 semaines précédant le jour férié. Si vous travaillez un jour férié, vous recevez <strong>1,5 fois votre taux régulier</strong> pour les heures travaillées plus votre indemnité de jour férié. Aucune période de service minimale n'est requise pour y avoir droit.",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Workers are entitled to <strong>4% vacation pay</strong> and 2 weeks of vacation per year for the first 4 years of employment. After 5 consecutive years with the same employer, this increases to <strong>6% and 3 weeks</strong>. Vacation pay should be clearly indicated on pay stubs.",
          fr: "Les travailleurs ont droit à une <strong>indemnité de vacances de 4 %</strong> et à 2 semaines de vacances par année pour les 4 premières années d'emploi. Après 5 années consécutives chez le même employeur, cela passe à <strong>6 % et 3 semaines</strong>. Cela doit être clairement indiqué sur les talons de paie.",
        },
      },
      {
        title: { en: "Workplace Safety and Health", fr: "Sécurité et santé au travail" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact Manitoba Workplace Safety and Health at <strong>204-957-7233</strong> (204-957-SAFE) in Winnipeg or <strong>1-855-957-7233</strong> toll-free — a safety and health officer is available 24/7. All workers have the right to refuse work they reasonably believe is dangerous to themselves or others.",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, contactez Sécurité et santé au travail du Manitoba au <strong>204-957-7233</strong> (204-957-SAFE) à Winnipeg ou au <strong>1-855-957-7233</strong> sans frais — un agent de sécurité et santé est disponible 24 h sur 24, 7 jours sur 7. Tous les travailleurs ont le droit de refuser un travail qu'ils croient raisonnablement dangereux pour eux-mêmes ou pour autrui.",
        },
      },
    ],
  },
  {
    slug: "new-brunswick",
    name: { en: "New Brunswick", fr: "Nouveau-Brunswick" },
    intro: {
      en: "In New Brunswick, workers are protected by the Employment Standards Act. Tree planters should note that overtime in New Brunswick is calculated at 1.5 times the minimum wage — not your regular wage — one of the weakest overtime standards in the country.",
      fr: "Au Nouveau-Brunswick, les travailleurs sont protégés par la Loi sur les normes d'emploi. Les planteurs d'arbres doivent savoir que les heures supplémentaires au Nouveau-Brunswick sont calculées à 1,5 fois le salaire minimum — et non votre salaire régulier — l'une des normes d'heures supplémentaires les plus faibles au pays.",
    },
    governmentLinks: [
      {
        title: {
          en: "Minimum Wage, Overtime and Reporting Pay",
          fr: "Salaire minimum, heures supplémentaires et salaire minimum de présence au travail",
        },
        url: "https://www.gnb.ca/en/topic/jobs-workplaces/labour-market-workforce/employment-standards/wage-pay.html",
        description: {
          en: "Official government information on wages and pay. Employment Standards Branch: 1-888-452-2687",
          fr: "Informations officielles du gouvernement sur les salaires. Direction des normes d'emploi : 1-888-487-2824",
        },
      },
      {
        title: {
          en: "Employment Standards Act",
          fr: "Loi sur les normes d'emploi",
        },
        url: "https://www.canlii.org/en/nb/laws/stat/snb-1982-c-e-7.2/latest/",
        description: {
          en: "Full text of New Brunswick's Employment Standards Act",
          fr: "Texte complet de la Loi sur les normes d'emploi du Nouveau-Brunswick",
        },
      },
      {
        title: {
          en: "WorkSafeNB",
          fr: "Travail sécuritaire NB",
        },
        url: "https://www.worksafenb.ca/",
        description: {
          en: "Workplace health and safety, injury compensation, and unsafe work reports",
          fr: "Santé et sécurité au travail, indemnisation des blessures et signalements de travail dangereux",
        },
      },
    ],
    ngoLinks: [
      {
        title: {
          en: "New Brunswick Federation of Labour",
          fr: "Fédération des travailleurs et travailleuses du Nouveau-Brunswick",
        },
        url: "https://fednb.ca/",
        description: {
          en: "Central labour body advocating for workers across New Brunswick",
          fr: "Organisation syndicale centrale défendant les travailleurs de tout le Nouveau-Brunswick",
        },
      },
      {
        title: {
          en: "Public Legal Education and Information Service of New Brunswick (PLEIS-NB)",
          fr: "Service public d'éducation et d'information juridiques du Nouveau-Brunswick (SPEIJ-NB)",
        },
        url: "https://legalinfonb.ca/",
        description: {
          en: "Free bilingual legal information, including workplace rights",
          fr: "Informations juridiques bilingues gratuites, y compris sur les droits au travail",
        },
      },
    ],
    standards: [
      {
        title: { en: "Minimum Wage", fr: "Salaire minimum" },
        content: {
          en: "<strong>$15.90/hour</strong> (effective April 1, 2026), adjusted each April based on the Consumer Price Index<br/>All employees paid by salary, commission, or <strong>piece work</strong> must receive at least minimum wage for every hour worked. All work hours including training, camp meetings, setup time, and travel time must be compensated.",
          fr: "<strong>15,90 $/heure</strong> (en vigueur depuis le 1er avril 2026), ajusté chaque avril selon l'Indice des prix à la consommation<br/>Tous les employés payés au salaire, à la commission ou <strong>à la pièce</strong> doivent recevoir au moins le salaire minimum pour chaque heure travaillée. Toutes les heures de travail, y compris la formation, les réunions de camp, le temps de préparation et le temps de déplacement, doivent être rémunérées.",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "<strong>Important:</strong> Overtime applies after <strong>44 hours in a week</strong>, but the required rate is only <strong>1.5 times the minimum wage</strong> (<strong>$23.85/hour</strong> as of April 1, 2026) — not 1.5 times your regular wage. If your regular earnings are already above $23.85/hour, your employer is not required to pay a premium. Banking of overtime hours is prohibited. Keep detailed daily records of your hours.",
          fr: "<strong>Important :</strong> Les heures supplémentaires s'appliquent après <strong>44 heures par semaine</strong>, mais le taux requis n'est que de <strong>1,5 fois le salaire minimum</strong> (<strong>23,85 $/heure</strong> depuis le 1er avril 2026) — et non 1,5 fois votre salaire régulier. Si vos gains réguliers dépassent déjà 23,85 $/heure, votre employeur n'est pas tenu de payer une prime. La mise en banque des heures supplémentaires est interdite. Tenez un registre quotidien détaillé de vos heures.",
        },
      },
      {
        title: { en: "Minimum Reporting Pay", fr: "Salaire minimum de présence au travail" },
        content: {
          en: "If you report to work at your employer's request, you are entitled to a minimum of <strong>3 hours of pay</strong> at the applicable rate (this applies to employees who regularly work more than 3 consecutive hours and earn less than twice the minimum wage).",
          fr: "Si vous vous présentez au travail à la demande de votre employeur, vous avez droit à un minimum de <strong>3 heures de salaire</strong> au taux applicable (cela s'applique aux employés qui travaillent habituellement plus de 3 heures consécutives et gagnent moins de deux fois le salaire minimum).",
        },
      },
      {
        title: { en: "Paid Public Holidays", fr: "Jours fériés payés" },
        content: {
          en: "New Brunswick has <strong>8 paid public holidays</strong>, including New Brunswick Day, Family Day, and Remembrance Day. To qualify, you must be employed for at least 90 calendar days in the 12 months before the holiday and work your scheduled day before and after it. If you work on a public holiday, you receive your regular day's pay plus <strong>1.5 times your regular rate</strong> for hours worked — and all employees, even those who don't qualify, receive 1.5 times their regular rate for holiday hours.",
          fr: "Le Nouveau-Brunswick compte <strong>8 jours fériés payés</strong>, y compris la Fête du Nouveau-Brunswick, le jour de la Famille et le jour du Souvenir. Pour être admissible, vous devez être à l'emploi depuis au moins 90 jours civils dans les 12 mois précédant le jour férié et avoir travaillé votre journée prévue avant et après celui-ci. Si vous travaillez un jour férié, vous recevez votre salaire régulier de la journée plus <strong>1,5 fois votre taux régulier</strong> pour les heures travaillées — et tous les employés, même ceux qui ne sont pas admissibles, reçoivent 1,5 fois leur taux régulier pour les heures d'un jour férié.",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Workers with less than 8 years of service are entitled to <strong>4% vacation pay</strong> and 2 weeks of vacation per year (or 1 day per month worked, whichever is less). After 8 years with the same employer: <strong>6% and 3 weeks</strong>. All accumulated vacation pay must be paid out with your final cheque when employment ends.",
          fr: "Les travailleurs ayant moins de 8 ans de service ont droit à une <strong>indemnité de vacances de 4 %</strong> et à 2 semaines de vacances par année (ou 1 jour par mois travaillé, selon le moindre des deux). Après 8 ans chez le même employeur : <strong>6 % et 3 semaines</strong>. Toute indemnité de vacances accumulée doit être versée avec votre dernier chèque de paie à la fin de l'emploi.",
        },
      },
      {
        title: { en: "Workplace Safety", fr: "Sécurité au travail" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact WorkSafeNB at <strong>1-800-999-9775</strong>. Under New Brunswick's Occupational Health and Safety Act, all workers have the right to refuse work they believe is dangerous to their health or safety. For employment standards questions, call the Employment Standards Branch at 1-888-452-2687 (English) or 1-888-487-2824 (French).",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, contactez Travail sécuritaire NB au <strong>1-800-999-9775</strong>. En vertu de la Loi sur l'hygiène et la sécurité au travail du Nouveau-Brunswick, tous les travailleurs ont le droit de refuser un travail qu'ils croient dangereux pour leur santé ou leur sécurité. Pour les questions sur les normes d'emploi, appelez la Direction des normes d'emploi au 1-888-487-2824 (français) ou au 1-888-452-2687 (anglais).",
        },
      },
    ],
  },
  {
    slug: "pei",
    name: { en: "Prince Edward Island", fr: "Île-du-Prince-Édouard" },
    intro: {
      en: "In Prince Edward Island, workers are protected by the Employment Standards Act — a completely new version of which came into force on June 30, 2026, strengthening overtime, vacation, and sick leave rights. PEI has the highest minimum wage in Atlantic Canada.",
      fr: "À l'Île-du-Prince-Édouard, les travailleurs sont protégés par la Loi sur les normes d'emploi — dont une toute nouvelle version est entrée en vigueur le 30 juin 2026, renforçant les droits aux heures supplémentaires, aux vacances et aux congés de maladie. L'Î.-P.-É. a le salaire minimum le plus élevé du Canada atlantique.",
    },
    governmentLinks: [
      {
        title: {
          en: "Employment Standards in PEI",
          fr: "Normes d'emploi à l'Î.-P.-É.",
        },
        url: "https://www.princeedwardisland.ca/en/information/workforce-and-advanced-learning/employment-standards-in-pei",
        description: {
          en: "Official government employment standards information. Labour and Industrial Relations: 902-368-5550",
          fr: "Informations officielles du gouvernement sur les normes d'emploi. Relations de travail et industrielles : 902-368-5550",
        },
      },
      {
        title: {
          en: "Paid Holidays in PEI",
          fr: "Jours fériés payés à l'Î.-P.-É.",
        },
        url: "https://www.princeedwardisland.ca/en/information/workforce-advanced-learning-and-population/paid-holidays",
        description: {
          en: "Official information on paid holidays and holiday pay",
          fr: "Informations officielles sur les jours fériés et l'indemnité de jour férié",
        },
      },
      {
        title: {
          en: "Employment Standards Act",
          fr: "Loi sur les normes d'emploi",
        },
        url: "https://www.princeedwardisland.ca/sites/default/files/legislation/e-06-2-employment_standards_act.pdf",
        description: {
          en: "Full text of PEI's Employment Standards Act",
          fr: "Texte complet de la Loi sur les normes d'emploi de l'Î.-P.-É.",
        },
      },
    ],
    ngoLinks: [
      {
        title: {
          en: "PEI Federation of Labour",
          fr: "Fédération du travail de l'Î.-P.-É.",
        },
        url: "https://peifed.ca/",
        description: {
          en: "Central labour body advocating for workers across Prince Edward Island",
          fr: "Organisation syndicale centrale défendant les travailleurs de toute l'Île-du-Prince-Édouard",
        },
      },
      {
        title: {
          en: "Community Legal Information",
          fr: "Community Legal Information",
        },
        url: "https://legalinfopei.ca/",
        description: {
          en: "Free legal information for Islanders, including workplace rights. Toll-free: 1-800-240-9798",
          fr: "Informations juridiques gratuites pour les Insulaires, y compris sur les droits au travail. Sans frais : 1-800-240-9798",
        },
      },
    ],
    standards: [
      {
        title: { en: "Minimum Wage", fr: "Salaire minimum" },
        content: {
          en: "<strong>$17.00/hour</strong> (effective April 1, 2026), rising to <strong>$17.30/hour</strong> on October 1, 2026 — the highest minimum wage in Atlantic Canada. All work hours including training, camp meetings, setup time, and travel time must be compensated at minimum wage.",
          fr: "<strong>17,00 $/heure</strong> (en vigueur depuis le 1er avril 2026), passant à <strong>17,30 $/heure</strong> le 1er octobre 2026 — le salaire minimum le plus élevé du Canada atlantique. Toutes les heures de travail, y compris la formation, les réunions de camp, le temps de préparation et le temps de déplacement, doivent être rémunérées au salaire minimum.",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "Under the new Employment Standards Act (in force June 30, 2026), overtime applies after <strong>44 hours in a week</strong> (reduced from 48) at <strong>1.5 times your regular wage</strong>. With a written agreement, you may bank overtime as paid time off at 1.5 hours per overtime hour worked. Employers may only average hours over 2–4 weeks for overtime calculation with your written agreement.",
          fr: "En vertu de la nouvelle Loi sur les normes d'emploi (en vigueur depuis le 30 juin 2026), les heures supplémentaires s'appliquent après <strong>44 heures par semaine</strong> (réduit de 48) à <strong>1,5 fois votre salaire régulier</strong>. Avec une entente écrite, vous pouvez mettre en banque les heures supplémentaires en congé payé à raison de 1,5 heure par heure supplémentaire travaillée. Les employeurs ne peuvent faire la moyenne des heures sur 2 à 4 semaines pour le calcul des heures supplémentaires qu'avec votre accord écrit.",
        },
      },
      {
        title: { en: "Paid Holidays", fr: "Jours fériés payés" },
        content: {
          en: "PEI has <strong>8 paid holidays</strong>, including Islander Day and the National Day for Truth and Reconciliation. Holiday pay is <strong>5% of your regular wages</strong> earned in the 4 weeks before the holiday (excluding overtime). If you work on a paid holiday, you receive <strong>1.5 times your regular wage</strong> for hours worked plus your holiday pay, or regular pay plus a paid day off.",
          fr: "L'Î.-P.-É. compte <strong>8 jours fériés payés</strong>, y compris la Journée des Insulaires et la Journée nationale de la vérité et de la réconciliation. L'indemnité de jour férié est de <strong>5 % de votre salaire régulier</strong> gagné dans les 4 semaines précédant le jour férié (heures supplémentaires exclues). Si vous travaillez un jour férié, vous recevez <strong>1,5 fois votre salaire régulier</strong> pour les heures travaillées plus votre indemnité de jour férié, ou votre salaire régulier plus un jour de congé payé.",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Workers are entitled to <strong>4% vacation pay</strong> and 2 weeks of vacation after 12 months of employment. Under the new Act, the threshold for increased entitlement was reduced from 8 years to <strong>5 years</strong>, after which you receive <strong>6% and 3 weeks</strong>. The new Act also adds specific vacation pay provisions for part-time, seasonal, and short-term employees.",
          fr: "Les travailleurs ont droit à une <strong>indemnité de vacances de 4 %</strong> et à 2 semaines de vacances après 12 mois d'emploi. En vertu de la nouvelle Loi, le seuil d'admissibilité aux droits accrus a été réduit de 8 ans à <strong>5 ans</strong>, après quoi vous recevez <strong>6 % et 3 semaines</strong>. La nouvelle Loi ajoute aussi des dispositions spécifiques d'indemnité de vacances pour les employés à temps partiel, saisonniers et de courte durée.",
        },
      },
      {
        title: { en: "Sick Leave", fr: "Congés de maladie" },
        content: {
          en: "Under the new Act, after 30 days of continuous employment you are entitled to <strong>4 days of unpaid sick leave</strong> per year. Paid sick days accrue with service: <strong>1 paid day</strong> in your second year, <strong>2</strong> in your third, and <strong>3</strong> from your fourth year onward.",
          fr: "En vertu de la nouvelle Loi, après 30 jours d'emploi continu, vous avez droit à <strong>4 jours de congé de maladie non payés</strong> par année. Les jours de maladie payés s'accumulent avec le service : <strong>1 jour payé</strong> dans votre deuxième année, <strong>2</strong> dans votre troisième et <strong>3</strong> à partir de votre quatrième année.",
        },
      },
      {
        title: { en: "Workplace Safety", fr: "Sécurité au travail" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact the Occupational Health and Safety Division of the Workers Compensation Board of PEI at <strong>902-368-5680</strong> or <strong>1-800-237-5049</strong> (toll-free in Atlantic Canada). A 24-hour emergency line is available at 902-628-7513. All workers have the right to refuse work they have reasonable grounds to believe endangers their health or safety.",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, contactez la Division de la santé et de la sécurité au travail de la Commission des accidents du travail de l'Î.-P.-É. au <strong>902-368-5680</strong> ou au <strong>1-800-237-5049</strong> (sans frais au Canada atlantique). Une ligne d'urgence 24 heures est disponible au 902-628-7513. Tous les travailleurs ont le droit de refuser un travail qu'ils ont des motifs raisonnables de croire dangereux pour leur santé ou leur sécurité.",
        },
      },
    ],
  },
  {
    slug: "newfoundland-labrador",
    name: { en: "Newfoundland and Labrador", fr: "Terre-Neuve-et-Labrador" },
    intro: {
      en: "In Newfoundland and Labrador, workers are protected by the Labour Standards Act. Tree planters should note that overtime is calculated at 1.5 times the minimum wage — not your regular wage — and that vacation entitlements only increase after 15 years of service.",
      fr: "À Terre-Neuve-et-Labrador, les travailleurs sont protégés par la Loi sur les normes du travail (Labour Standards Act). Les planteurs d'arbres doivent savoir que les heures supplémentaires sont calculées à 1,5 fois le salaire minimum — et non votre salaire régulier — et que les droits aux vacances n'augmentent qu'après 15 ans de service.",
    },
    governmentLinks: [
      {
        title: {
          en: "Labour Standards Division",
          fr: "Division des normes du travail",
        },
        url: "https://www.gov.nl.ca/gs/labour/",
        description: {
          en: "Official government labour standards information. Contact: 709-729-4834",
          fr: "Informations officielles du gouvernement sur les normes du travail. Contact : 709-729-4834",
        },
      },
      {
        title: {
          en: "Your Rights at Work (Guide)",
          fr: "Vos droits au travail (guide)",
        },
        url: "https://www.gov.nl.ca/gs/files/Your-Rights-At-Work.pdf",
        description: {
          en: "Government guide summarizing labour standards for workers",
          fr: "Guide gouvernemental résumant les normes du travail pour les travailleurs",
        },
      },
      {
        title: {
          en: "Labour Standards Act",
          fr: "Loi sur les normes du travail",
        },
        url: "https://assembly.nl.ca/legislation/sr/statutes/l02.htm",
        description: {
          en: "Full text of the Labour Standards Act",
          fr: "Texte complet de la Loi sur les normes du travail",
        },
      },
    ],
    ngoLinks: [
      {
        title: {
          en: "Newfoundland and Labrador Federation of Labour",
          fr: "Fédération du travail de Terre-Neuve-et-Labrador",
        },
        url: "https://nlfed.ca/",
        description: {
          en: "Central labour body advocating for workers across the province",
          fr: "Organisation syndicale centrale défendant les travailleurs de toute la province",
        },
      },
      {
        title: {
          en: "Workers' Action Network NL",
          fr: "Workers' Action Network NL",
        },
        url: "https://workersactionnl.ca/",
        description: {
          en: "Grassroots network providing information and support for non-unionized workers",
          fr: "Réseau communautaire offrant informations et soutien aux travailleurs non syndiqués",
        },
      },
    ],
    standards: [
      {
        title: { en: "Minimum Wage", fr: "Salaire minimum" },
        content: {
          en: "<strong>$16.35/hour</strong> (effective April 1, 2026), adjusted each April 1 based on the national Consumer Price Index<br/>All work hours including training, camp meetings, setup time, and travel time must be compensated at minimum wage. Employers must pay you at least twice a month, within 7 days of the end of the pay period.",
          fr: "<strong>16,35 $/heure</strong> (en vigueur depuis le 1er avril 2026), ajusté chaque 1er avril selon l'Indice des prix à la consommation national<br/>Toutes les heures de travail, y compris la formation, les réunions de camp, le temps de préparation et le temps de déplacement, doivent être rémunérées au salaire minimum. Les employeurs doivent vous payer au moins deux fois par mois, dans les 7 jours suivant la fin de la période de paie.",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "<strong>Important:</strong> Overtime applies after <strong>40 hours in a week</strong>, but the required rate is only <strong>1.5 times the minimum wage</strong> (<strong>$24.53/hour</strong> as of April 1, 2026) — not 1.5 times your regular wage. If your piece-rate earnings already exceed $24.53/hour, your employer may not owe an overtime premium. Keep detailed daily records of your hours.",
          fr: "<strong>Important :</strong> Les heures supplémentaires s'appliquent après <strong>40 heures par semaine</strong>, mais le taux requis n'est que de <strong>1,5 fois le salaire minimum</strong> (<strong>24,53 $/heure</strong> depuis le 1er avril 2026) — et non 1,5 fois votre salaire régulier. Si vos gains à la pièce dépassent déjà 24,53 $/heure, votre employeur pourrait ne pas devoir de prime d'heures supplémentaires. Tenez un registre quotidien détaillé de vos heures.",
        },
      },
      {
        title: { en: "Paid Holidays", fr: "Jours fériés payés" },
        content: {
          en: "Newfoundland and Labrador has <strong>6 paid holidays</strong>: New Year's Day, Good Friday, Memorial Day (July 1), Labour Day, Remembrance Day, and Christmas Day. If you work on a paid holiday, you are entitled to <strong>twice your regular wages</strong> for that day, or an additional paid day off within 30 days.",
          fr: "Terre-Neuve-et-Labrador compte <strong>6 jours fériés payés</strong> : le jour de l'An, le Vendredi saint, le Jour commémoratif (1er juillet), la fête du Travail, le jour du Souvenir et le jour de Noël. Si vous travaillez un jour férié, vous avez droit au <strong>double de votre salaire régulier</strong> pour cette journée, ou à un jour de congé payé supplémentaire dans les 30 jours.",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Workers are entitled to <strong>4% vacation pay</strong>, with 2 weeks of annual vacation after 12 months of continuous service (if you worked at least 90% of available working hours). Vacation pay increases to <strong>6% and 3 weeks</strong> only after <strong>15 years</strong> with the same employer — the longest threshold in Canada. Vacation pay should be clearly indicated on pay stubs.",
          fr: "Les travailleurs ont droit à une <strong>indemnité de vacances de 4 %</strong>, avec 2 semaines de vacances annuelles après 12 mois de service continu (si vous avez travaillé au moins 90 % des heures de travail disponibles). L'indemnité ne passe à <strong>6 % et 3 semaines</strong> qu'après <strong>15 ans</strong> chez le même employeur — le seuil le plus long au Canada. Cela doit être clairement indiqué sur les talons de paie.",
        },
      },
      {
        title: { en: "Workplace Safety", fr: "Sécurité au travail" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact the Occupational Health and Safety Division at <strong>709-729-4834</strong>, or the 24-hour accident reporting line at 709-729-4444. Under Section 45 of the Occupational Health and Safety Act, all workers have the right to refuse work they reasonably believe is dangerous. Workplace injuries are covered by WorkplaceNL.",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, contactez la Division de la santé et de la sécurité au travail au <strong>709-729-4834</strong>, ou la ligne de signalement d'accidents 24 heures au 709-729-4444. En vertu de l'article 45 de la Loi sur la santé et la sécurité au travail, tous les travailleurs ont le droit de refuser un travail qu'ils croient raisonnablement dangereux. Les accidents du travail sont couverts par WorkplaceNL.",
        },
      },
    ],
  },
];

export function getProvinceBySlug(slug: string): ProvinceRights | undefined {
  return provinceRights.find((p) => p.slug === slug);
}
