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
  id: string;
  title: string;
  url: string;
  location?: string;
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
      {
        title: {
          en: "How to Report an Injury and What to Expect",
          fr: "Comment signaler une blessure et à quoi s'attendre",
        },
        url: "https://www.worksafebc.com/en/claims/report-workplace-injury-illness/how-workers-report-workplace-injury-illness",
        description: {
          en: "Helpful instructions from WorkSafeBC.",
          fr: "Instructions utiles de WorkSafeBC.",
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
          en: "<strong>$18.25/hour</strong> (effective June 1, 2026), adjusted every June 1 based on BC's average inflation<br/>All work hours are paid portal to portal. <a href=\"#bc-ref-5\" class=\"citation-link\">[5]</a> If you are paid piece rates, your earnings each pay period must average at least minimum wage for all hours worked — employers must top up any shortfall and cannot offset it against better pay periods.",
          fr: "<strong>18,25 $/heure</strong> (en vigueur depuis le 1er juin 2026), ajusté chaque 1er juin selon l'inflation moyenne de la C.-B.<br/>Toutes les heures de travail sont rémunérées du début à la fin de la période de travail (« portail à portail »). <a href=\"#bc-ref-5\" class=\"citation-link\">[5]</a> Si vous êtes payé à la pièce, vos gains de chaque période de paie doivent équivaloir au moins au salaire minimum pour toutes les heures travaillées — l'employeur doit combler tout écart et ne peut pas le compenser avec de meilleures périodes de paie.",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "If you are paid <strong>piece rates</strong>: for hours between 8 and 12 in a day you must receive the greater of your piece-rate earnings or <strong>1.5 times minimum wage</strong> ($27.38/hour); hours beyond 12 in a day must be paid at <strong>double your piece rate</strong>. <a href=\"#bc-ref-5\" class=\"citation-link\">[5]</a><br/>If you are paid hourly, hours beyond <strong>8 per day (up to 12 hours)</strong> require premium pay at <strong>1.5 times your regular wage</strong>. Hours exceeding <strong>12 per day</strong> must be paid at <strong>double your regular wage rate</strong>. <a href=\"#bc-ref-4\" class=\"citation-link\">[4]</a><br/>Overtime exemptions may include managers. <a href=\"#bc-ref-4\" class=\"citation-link\">[4]</a>",
          fr: "Si vous êtes payé <strong>à la pièce</strong> : pour les heures entre 8 et 12 par jour, vous devez recevoir le plus élevé de vos gains à la pièce ou de <strong>1,5 fois le salaire minimum</strong> (27,38 $/heure) ; les heures au-delà de 12 par jour doivent être payées au <strong>double de votre tarif à la pièce</strong>. <a href=\"#bc-ref-5\" class=\"citation-link\">[5]</a><br/>Si vous êtes payé à l'heure, les heures au-delà de <strong>8 heures par jour (jusqu'à 12 heures)</strong> doivent être payées à <strong>1,5 fois votre salaire régulier</strong>. Les heures au-delà de <strong>12 heures par jour</strong> doivent être payées au <strong>double de votre taux de salaire régulier</strong>. <a href=\"#bc-ref-4\" class=\"citation-link\">[4]</a><br/>Les exemptions aux heures supplémentaires peuvent inclure les cadres. <a href=\"#bc-ref-4\" class=\"citation-link\">[4]</a>",
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
          en: "Employers cannot deduct their business costs from your wages — including equipment damage, production mistakes, or missing gear. Any permitted deduction requires proper authorization and must appear on your pay stub. Employers cannot make deductions for equipment damage, production mistakes, or other arbitrary reasons. <a href=\"#bc-ref-2\" class=\"citation-link\">[2]</a>",
          fr: "Les employeurs ne peuvent pas déduire leurs coûts d'entreprise de votre salaire — y compris les dommages à l'équipement, les erreurs de production ou le matériel manquant. Toute déduction permise nécessite une autorisation appropriée et doit figurer sur votre talon de paie. Les employeurs ne peuvent pas effectuer de déductions pour des dommages à l'équipement, des erreurs de production ou d'autres motifs arbitraires. <a href=\"#bc-ref-2\" class=\"citation-link\">[2]</a>",
        },
      },
      {
        title: { en: "Statutory Holidays", fr: "Jours fériés" },
        content: {
          en: "Under BC employment standards regulations for silviculture workers, most standard statutory holiday provisions do not apply if the employer instead provides statutory holiday compensation equal to <strong>4.4% of gross earnings</strong> on each pay cheque, or, for piece-rate workers, compensation calculated using a <strong>1.044 multiplier</strong> on the applicable piece rate. <a href=\"#bc-ref-3\" class=\"citation-link\">[3]</a> Check your pay stubs to make sure you receive this compensation.",
          fr: "En vertu de la réglementation des normes d'emploi de la C.-B. applicable aux travailleurs en sylviculture, la plupart des dispositions habituelles sur les jours fériés ne s'appliquent pas si l'employeur verse plutôt une indemnité de jour férié équivalant à <strong>4,4 % des gains bruts</strong> à chaque paie ou, pour les travailleurs payés à la pièce, une compensation calculée à l'aide d'un <strong>multiplicateur de 1,044</strong> appliqué au tarif à la pièce applicable. <a href=\"#bc-ref-3\" class=\"citation-link\">[3]</a> Vérifiez vos talons de paie pour vous assurer de recevoir cette compensation.",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Under BC employment standards regulations for silviculture workers, standard vacation pay provisions do not apply if the employer instead provides vacation pay equal to <strong>4% of gross earnings</strong> on each pay cheque, increasing to <strong>6%</strong> after five consecutive years of employment. For piece-rate workers, employers may instead provide compensation calculated using a <strong>1.04 multiplier</strong> on the applicable piece rate, increasing to <strong>1.06</strong> after five consecutive years. <a href=\"#bc-ref-3\" class=\"citation-link\">[3]</a> This must be clearly indicated on pay stubs.",
          fr: "En vertu de la réglementation des normes d'emploi de la C.-B. applicable aux travailleurs en sylviculture, les dispositions habituelles sur l'indemnité de vacances ne s'appliquent pas si l'employeur verse plutôt une indemnité de vacances équivalant à <strong>4 % des gains bruts</strong> à chaque paie, augmentant à <strong>6 %</strong> après cinq années consécutives d'emploi. Pour les travailleurs payés à la pièce, l'employeur peut plutôt verser une compensation calculée à l'aide d'un <strong>multiplicateur de 1,04</strong> appliqué au tarif à la pièce applicable, augmentant à <strong>1,06</strong> après cinq années consécutives. <a href=\"#bc-ref-3\" class=\"citation-link\">[3]</a> Cela doit être clairement indiqué sur les talons de paie.",
        },
      },
      {
        title: { en: "WorkSafeBC", fr: "WorkSafeBC" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact WorkSafeBC. All workers have the right to refuse unsafe work. If you're injured on the job, see WorkSafeBC's guidance on how to report it. <a href=\"#bc-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "Pour les préoccupations de santé et de sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, communiquez avec WorkSafeBC. Tous les travailleurs ont le droit de refuser un travail dangereux. Si vous êtes blessé au travail, consultez les instructions de WorkSafeBC sur la façon de le signaler. <a href=\"#bc-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
    ],
    // Note: worksafebc.com and gov.bc.ca pages expose no readable content-section anchor ids
    // (verified via curl, not just WebFetch, which 403s on these domains) — WorkSafeBC's
    // headings use opaque server-generated GUIDs with no static label to match reliably, and
    // gov.bc.ca pages have no heading ids at all. References link to the plain page URL.
    references: [
      {
        id: "bc-ref-1",
        title: "WorkSafeBC — How to Report an Injury and What to Expect [1]",
        url: "https://www.worksafebc.com/en/claims/report-workplace-injury-illness/how-workers-report-workplace-injury-illness",
      },
      {
        id: "bc-ref-2",
        title: "BC Gov — Employment Standards, Deductions [2]",
        url: "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/wages/deductions",
      },
      {
        id: "bc-ref-3",
        title: "BC Gov — Employment Standards Regulation, Part 7 §37.9 (Silviculture Workers) [3]",
        url: "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/forms-resources/igm/esr-part-7-section-37-9",
      },
      {
        id: "bc-ref-4",
        title: "Workforce.com — Overtime Laws by Province (Canada), British Columbia section [4]",
        url: "https://www.workforce.com/ca/resources/overtime-laws-by-province-canada",
      },
      {
        id: "bc-ref-5",
        title: "BC Gov — Hiring Silviculture Workers [5]",
        url: "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/hiring/silviculture-workers",
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
          en: "<strong>$15.00/hour</strong> (students under 18: $13.00/hour for the first 28 hours in a week)<br/>Alberta's minimum wage has not increased since October 2018 and is now the lowest in Canada. All work hours must be compensated at minimum wage, portal to portal. <a href=\"#ab-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "<strong>15,00 $/heure</strong> (étudiants de moins de 18 ans : 13,00 $/heure pour les 28 premières heures d'une semaine)<br/>Le salaire minimum de l'Alberta n'a pas augmenté depuis octobre 2018 et est maintenant le plus bas au Canada. Toutes les heures de travail doivent être rémunérées au salaire minimum, du début à la fin de la période de travail (« portail à portail »). <a href=\"#ab-ref-1\" class=\"citation-link\">[1]</a>",
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
          en: "Employers cannot deduct wages for equipment damage, faulty work, or production mistakes. Such deductions are prohibited under Alberta employment standards. <a href=\"#ab-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "Les employeurs ne peuvent pas déduire des salaires pour des dommages à l'équipement, un travail défectueux ou des erreurs de production. Ces déductions sont interdites en vertu des normes d'emploi de l'Alberta. <a href=\"#ab-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
      {
        title: { en: "Statutory Holiday Pay", fr: "Indemnité de jour férié" },
        content: {
          en: "Most employees are entitled to general holiday pay if the holiday is a regular day of work or if they work on a general holiday that is not a regular day of work. Employees are not entitled to general holiday pay if they worked fewer than <strong>30 workdays</strong> for the employer in the 12 months before the holiday, or if other Alberta employment standards disqualification rules apply. <a href=\"#ab-ref-3\" class=\"citation-link\">[3]</a><br/>If you don't work a holiday that falls on a regular workday, you receive your average daily wage. If you work it, you receive <strong>1.5 times your rate</strong> (minimum $22.50/hour at minimum wage) <strong>plus your average daily wage</strong> — or regular pay plus a future paid day off.<br/>See more here: <a href=\"https://www.alberta.ca/alberta-general-holidays\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">alberta.ca/alberta-general-holidays</a>. <a href=\"#ab-ref-3\" class=\"citation-link\">[3]</a>",
          fr: "La plupart des employés ont droit à l'indemnité de jour férié si le jour férié est un jour de travail habituel ou s'ils travaillent un jour férié qui n'est pas un jour de travail habituel. Les employés n'ont pas droit à l'indemnité de jour férié s'ils ont travaillé moins de <strong>30 jours de travail</strong> pour l'employeur dans les 12 mois précédant le jour férié, ou si d'autres règles d'inadmissibilité des normes d'emploi de l'Alberta s'appliquent. <a href=\"#ab-ref-3\" class=\"citation-link\">[3]</a><br/>Si vous ne travaillez pas un jour férié qui tombe un jour de travail habituel, vous recevez votre salaire quotidien moyen. Si vous le travaillez, vous recevez <strong>1,5 fois votre taux</strong> (minimum 22,50 $/heure au salaire minimum) <strong>plus votre salaire quotidien moyen</strong> — ou votre salaire régulier plus un jour de congé payé ultérieur.<br/>Pour en savoir plus : <a href=\"https://www.alberta.ca/alberta-general-holidays\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">alberta.ca/alberta-general-holidays</a>. <a href=\"#ab-ref-3\" class=\"citation-link\">[3]</a>",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "After <strong>8 hours in a day</strong> or <strong>44 hours in a week</strong>, overtime must be paid at <strong>1.5 times the regular rate</strong>. <a href=\"#ab-ref-4\" class=\"citation-link\">[4]</a><br/>However, overtime rules, thresholds, and calculation methods can vary depending on the worker's industry classification, occupation, and any applicable exemptions or averaging arrangements. For workers paid exclusively by piece rate, overtime calculations may be based on minimum wage where no hourly wage rate exists. <a href=\"#ab-ref-4\" class=\"citation-link\">[4]</a><a href=\"#ab-ref-5\" class=\"citation-link\">[5]</a><br/>Overtime exemptions may include managers. <a href=\"#ab-ref-5\" class=\"citation-link\">[5]</a>",
          fr: "Après <strong>8 heures dans une journée</strong> ou <strong>44 heures dans une semaine</strong>, les heures supplémentaires doivent être payées à <strong>1,5 fois le taux régulier</strong>. <a href=\"#ab-ref-4\" class=\"citation-link\">[4]</a><br/>Cependant, les règles, seuils et méthodes de calcul des heures supplémentaires peuvent varier selon la classification de l'industrie, la profession du travailleur, ainsi que les exemptions ou ententes d'étalement applicables. Pour les travailleurs payés exclusivement à la pièce, le calcul des heures supplémentaires peut être basé sur le salaire minimum lorsqu'aucun taux horaire n'existe. <a href=\"#ab-ref-4\" class=\"citation-link\">[4]</a><a href=\"#ab-ref-5\" class=\"citation-link\">[5]</a><br/>Les exemptions aux heures supplémentaires peuvent inclure les cadres. <a href=\"#ab-ref-5\" class=\"citation-link\">[5]</a>",
        },
      },
      {
        title: { en: "Alberta OHS", fr: "SST de l'Alberta" },
        content: {
          en: "For workplace safety issues including illness, injury, unsafe work refusal, harassment, and sanitation, contact Alberta Occupational Health and Safety (OHS) at <a href=\"https://www.alberta.ca/occupational-health-safety\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">alberta.ca/occupational-health-safety</a>. Workers have the right to refuse unsafe work. <a href=\"#ab-ref-6\" class=\"citation-link\">[6]</a>",
          fr: "Pour les questions de sécurité au travail, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et l'assainissement, contactez la Santé et sécurité au travail (SST) de l'Alberta à <a href=\"https://www.alberta.ca/occupational-health-safety\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">alberta.ca/occupational-health-safety</a>. Les travailleurs ont le droit de refuser un travail dangereux. <a href=\"#ab-ref-6\" class=\"citation-link\">[6]</a>",
        },
      },
    ],
    // Note: alberta.ca and workforce.com pages expose no content-section anchor ids in their
    // raw HTML (verified via curl, not just WebFetch) — only nav/footer boilerplate ids exist.
    // Deep-linking via URL fragment isn't possible for these sources; the exact section is
    // named in the title text instead so the citation is still as specific as the source allows.
    references: [
      {
        id: "ab-ref-1",
        title: "Alberta.ca — Employment Standards, \"Deductions from earnings\" and \"Minimum wage\" sections [1]",
        url: "https://www.alberta.ca/employment-standards",
      },
      {
        id: "ab-ref-2",
        title: "Alberta.ca — Report Unsafe Work [2]",
        url: "https://www.alberta.ca/report-unsafe-work",
      },
      {
        id: "ab-ref-3",
        title: "Alberta.ca — Alberta General Holidays, \"Eligibility\" section [3]",
        url: "https://www.alberta.ca/alberta-general-holidays",
      },
      {
        id: "ab-ref-4",
        title: "Alberta.ca — Overtime Hours and Overtime Pay, \"Basic rules\" and \"Employee eligibility\" sections [4]",
        url: "https://www.alberta.ca/overtime-hours-overtime-pay",
      },
      {
        id: "ab-ref-5",
        title: "Workforce.com — Overtime Laws by Province (Canada), Alberta section [5]",
        url: "https://www.workforce.com/ca/resources/overtime-laws-by-province-canada",
      },
      {
        id: "ab-ref-6",
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
          en: "<strong>$17.60/hour</strong>, rising to <strong>$17.95/hour</strong> on October 1, 2026 (adjusted annually based on the Consumer Price Index)<br/>All work hours are paid portal to portal. Students under 18 working 28 hours/week or less: $16.60/hour, rising to $16.90 on October 1, 2026.",
          fr: "<strong>17,60 $/heure</strong>, passant à <strong>17,95 $/heure</strong> le 1er octobre 2026 (ajusté annuellement selon l'Indice des prix à la consommation)<br/>Toutes les heures de travail sont rémunérées du début à la fin de la période de travail (« portail à portail »). Étudiants de moins de 18 ans travaillant 28 heures/semaine ou moins : 16,60 $/heure, passant à 16,90 $ le 1er octobre 2026.",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "Under <strong>Part VIII, Section 22</strong> of Ontario's Employment Standards Act, most employees are entitled to overtime pay after <strong>44 hours worked in a work week</strong> at <strong>1.5 times their regular rate of pay</strong> (minimum $26.40/hour at minimum wage). The legislation refers to an employee's \"regular rate\" and does not specifically discuss tree planting or piece-rate compensation systems in these overtime provisions. <a href=\"#on-ref-1\" class=\"citation-link\">[1]</a> Employees can receive time off in lieu at 1.5 hours per hour of overtime worked with written agreement.<br/>Overtime exemptions may include managers and supervisors whose work is primarily managerial. <a href=\"#on-ref-2\" class=\"citation-link\">[2]</a>",
          fr: "En vertu de la <strong>partie VIII, article 22</strong> de la Loi de 2000 sur les normes d'emploi de l'Ontario, la plupart des employés ont droit à une rémunération des heures supplémentaires après <strong>44 heures travaillées dans une semaine de travail</strong>, à <strong>1,5 fois leur taux de salaire régulier</strong> (minimum 26,40 $/heure au salaire minimum). La loi fait référence au « taux de salaire régulier » de l'employé et ne traite pas spécifiquement de la plantation d'arbres ou des systèmes de rémunération à la pièce dans ces dispositions sur les heures supplémentaires. <a href=\"#on-ref-1\" class=\"citation-link\">[1]</a> Les employés peuvent recevoir un congé compensatoire à raison de 1,5 heure par heure supplémentaire travaillée avec accord écrit.<br/>Les exemptions aux heures supplémentaires peuvent inclure les cadres et les superviseurs dont le travail est principalement de nature administrative. <a href=\"#on-ref-2\" class=\"citation-link\">[2]</a>",
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
          en: "Under <strong>Section 13</strong> of Ontario's Employment Standards Act, employers may generally only make deductions that are required by law, authorized by a court order, or authorized in writing by the employee. Even with written authorization, employers generally cannot deduct for faulty work, lost property, or cash shortages. <a href=\"#on-ref-3\" class=\"citation-link\">[3]</a>",
          fr: "En vertu de l'<strong>article 13</strong> de la Loi de 2000 sur les normes d'emploi de l'Ontario, l'employeur ne peut généralement effectuer que des déductions exigées par la loi, autorisées par une ordonnance judiciaire, ou autorisées par écrit par le salarié. Même avec une autorisation écrite, l'employeur ne peut généralement pas déduire pour un travail défectueux, la perte de biens ou des manques de caisse. <a href=\"#on-ref-3\" class=\"citation-link\">[3]</a>",
        },
      },
      {
        title: { en: "Room and Board", fr: "Chambre et pension" },
        content: {
          en: "Employers may count the provision of room and board toward minimum wage requirements, but only if the employee actually received meals and occupied the room. Specific amounts set by the government can be deemed as wages for room and board provided. <a href=\"#on-ref-4\" class=\"citation-link\">[4]</a>",
          fr: "Les employeurs peuvent comptabiliser la fourniture de chambre et pension dans les exigences de salaire minimum, mais seulement si l'employé a effectivement pris les repas et occupé la chambre. Des montants spécifiques fixés par le gouvernement peuvent être considérés comme salaire pour la chambre et pension fournies. <a href=\"#on-ref-4\" class=\"citation-link\">[4]</a>",
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
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact the <a href=\"https://www.ontario.ca/page/ministry-labour-immigration-training-skills-development\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">Ministry of Labour, Immigration, Training and Skills Development</a>. <a href=\"#on-ref-5\" class=\"citation-link\">[5]</a> All workers have the right to refuse unsafe work. The <a href=\"https://www.owa.gov.on.ca/en/about/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">Office of the Worker Adviser</a> provides free services for workplace insurance matters. <a href=\"#on-ref-6\" class=\"citation-link\">[6]</a>",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, contactez le <a href=\"https://www.ontario.ca/page/ministry-labour-immigration-training-skills-development\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">ministère du Travail, de l'Immigration, de la Formation et du Développement des compétences</a>. <a href=\"#on-ref-5\" class=\"citation-link\">[5]</a> Tous les travailleurs ont le droit de refuser un travail dangereux. Le <a href=\"https://www.owa.gov.on.ca/en/about/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">Bureau des conseillers des travailleurs</a> offre des services gratuits pour les questions d'assurance contre les accidents du travail (WSIB). <a href=\"#on-ref-6\" class=\"citation-link\">[6]</a>",
        },
      },
    ],
    // Note: ontario.ca pages do have real content-section anchor ids (unlike alberta.ca,
    // cnesst.gouv.qc.ca, gov.bc.ca, and worksafebc.com, which lack usable anchors — verified
    // via curl). The Room and Board citation uses the verified #room anchor on the minimum-wage
    // guide page; the pasted #section-2 fragment did not correspond to a real anchor there.
    references: [
      {
        id: "on-ref-1",
        title: "Ontario.ca — Your Guide to the Employment Standards Act, Overtime Pay [1]",
        url: "https://www.ontario.ca/document/your-guide-employment-standards-act-0/overtime-pay",
      },
      {
        id: "on-ref-2",
        title: "Workforce.com — Overtime Laws by Province (Canada), Ontario section [2]",
        url: "https://www.workforce.com/ca/resources/overtime-laws-by-province-canada",
      },
      {
        id: "on-ref-3",
        title: "Ontario.ca — Your Guide to the Employment Standards Act, Payment of Wages, \"Deductions from wages\" section [3]",
        url: "https://www.ontario.ca/document/your-guide-employment-standards-act-0/payment-wages#deductions",
      },
      {
        id: "on-ref-4",
        title: "Ontario.ca — Your Guide to the Employment Standards Act, Minimum Wage, \"How provision of room and board affects minimum wage\" section [4]",
        url: "https://www.ontario.ca/document/your-guide-employment-standards-act-0/minimum-wage#room",
      },
      {
        id: "on-ref-5",
        title: "Ontario.ca — Ministry of Labour, Immigration, Training and Skills Development [5]",
        url: "https://www.ontario.ca/page/ministry-labour-immigration-training-skills-development",
      },
      {
        id: "on-ref-6",
        title: "Office of the Worker Adviser — About the OWA [6]",
        url: "https://www.owa.gov.on.ca/en/about/",
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
          en: "<strong>$15.35/hour</strong>, rising to <strong>$15.70/hour</strong> on October 1, 2026<br/>Saskatchewan's minimum wage is indexed annually using a formula that gives equal weight to changes in the Consumer Price Index and the Average Hourly Wage for Saskatchewan. All work hours are paid portal to portal. <a href=\"#sk-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "<strong>15,35 $/heure</strong>, passant à <strong>15,70 $/heure</strong> le 1er octobre 2026<br/>Le salaire minimum de la Saskatchewan est indexé annuellement selon une formule accordant un poids égal aux variations de l'Indice des prix à la consommation et du salaire horaire moyen en Saskatchewan. Toutes les heures de travail sont rémunérées du début à la fin de la période de travail (« portail à portail »). <a href=\"#sk-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "Overtime must be paid at <strong>1.5 times the regular wage rate</strong> (minimum $23.03/hour at minimum wage). Daily overtime: after 8 hours in a day (or after 10 hours if scheduled for four 10-hour days). Weekly overtime: after 40 hours in a regular week or 32 hours in a week with a statutory holiday. Employees receive whichever is greater – daily or weekly overtime. <a href=\"#sk-ref-2\" class=\"citation-link\">[2]</a>",
          fr: "Les heures supplémentaires doivent être payées à <strong>1,5 fois le taux de salaire régulier</strong> (minimum 23,03 $/heure au salaire minimum). Heures supplémentaires quotidiennes : après 8 heures par jour (ou après 10 heures si l'horaire prévoit quatre journées de 10 heures). Heures supplémentaires hebdomadaires : après 40 heures dans une semaine normale ou 32 heures dans une semaine avec un jour férié. Les employés reçoivent le montant le plus élevé — quotidien ou hebdomadaire. <a href=\"#sk-ref-2\" class=\"citation-link\">[2]</a>",
        },
      },
      {
        title: {
          en: "Maximum Hours and Consent",
          fr: "Heures maximales et consentement",
        },
        content: {
          en: "Employers must get employee consent to work more than <strong>44 hours in a week</strong> (or 36 hours in a week with a statutory holiday). Employees cannot be disciplined for refusing unless there is an emergency. Employees must receive at least 8 consecutive hours of rest in any 24-hour period. <a href=\"#sk-ref-2\" class=\"citation-link\">[2]</a>",
          fr: "Les employeurs doivent obtenir le consentement de l'employé pour travailler plus de <strong>44 heures par semaine</strong> (ou 36 heures lors d'une semaine avec un jour férié). Les employés ne peuvent pas être sanctionnés pour avoir refusé, sauf en cas d'urgence. Les employés doivent bénéficier d'au moins 8 heures de repos consécutives sur toute période de 24 heures. <a href=\"#sk-ref-2\" class=\"citation-link\">[2]</a>",
        },
      },
      {
        title: { en: "Deductions", fr: "Déductions" },
        content: {
          en: "Employers can only deduct: statutory deductions (taxes, CPP, EI), employee pension/RRSP payments, benefit plan payments, voluntary charitable donations, and voluntary savings plans. Arbitrary deductions for equipment damage or production mistakes are not permitted without proper authorization. <a href=\"#sk-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "Les employeurs ne peuvent déduire que : les déductions légales (impôts, RPC, AE), les cotisations de retraite/REER de l'employé, les paiements au régime d'avantages sociaux, les dons de bienfaisance volontaires et les plans d'épargne volontaires. Les déductions arbitraires pour dommages à l'équipement ou erreurs de production ne sont pas permises sans autorisation appropriée. <a href=\"#sk-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
      {
        title: { en: "Statutory Holidays", fr: "Jours fériés" },
        content: {
          en: "Saskatchewan has 10 statutory holidays per year. Employees receive <strong>5% of wages earned in the 28 days before a holiday</strong> as holiday pay. If required to work on a statutory holiday, employees receive <strong>1.5 times their regular rate</strong> for all hours worked plus their statutory holiday pay. <a href=\"#sk-ref-3\" class=\"citation-link\">[3]</a>",
          fr: "La Saskatchewan compte 10 jours fériés par année. Les employés reçoivent <strong>5 % des salaires gagnés dans les 28 jours précédant le congé</strong> comme indemnité de jour férié. Si vous êtes obligé de travailler un jour férié, vous recevez <strong>1,5 fois votre taux régulier</strong> pour toutes les heures travaillées plus votre indemnité de jour férié. <a href=\"#sk-ref-3\" class=\"citation-link\">[3]</a>",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Employees receive a minimum of <strong>3 weeks vacation</strong> after each year of employment (or <strong>4 weeks</strong> after 10 years with the same employer). Vacation pay is calculated as <strong>5.77% of wages</strong> for employees with 1-9 years of service. <a href=\"#sk-ref-4\" class=\"citation-link\">[4]</a>",
          fr: "Les employés reçoivent un minimum de <strong>3 semaines de vacances</strong> après chaque année d'emploi (ou <strong>4 semaines</strong> après 10 ans chez le même employeur). L'indemnité de vacances est calculée à <strong>5,77 % des salaires</strong> pour les employés ayant 1 à 9 ans de service. <a href=\"#sk-ref-4\" class=\"citation-link\">[4]</a>",
        },
      },
      {
        title: { en: "WorkSafe Saskatchewan", fr: "Travail sécuritaire Saskatchewan" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact WorkSafe Saskatchewan at 1-800-667-7590. All workers have the right to refuse unsafe work. WorkSafe Saskatchewan is a partnership between the Saskatchewan Workers' Compensation Board and the Ministry of Labour Relations and Workplace Safety. <a href=\"#sk-ref-5\" class=\"citation-link\">[5]</a>",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, contactez Travail sécuritaire Saskatchewan au 1-800-667-7590. Tous les travailleurs ont le droit de refuser un travail dangereux. Travail sécuritaire Saskatchewan est un partenariat entre la Commission des accidents du travail de la Saskatchewan et le Ministère des Relations du travail et de la sécurité au travail. <a href=\"#sk-ref-5\" class=\"citation-link\">[5]</a>",
        },
      },
    ],
    // Note: saskatchewan.ca pages expose no content-section anchor ids in their raw HTML
    // (verified via curl) — references link to the most specific sub-page available instead.
    references: [
      {
        id: "sk-ref-1",
        title: "Saskatchewan.ca — Employment Standards (minimum wage, deductions) [1]",
        url: "https://www.saskatchewan.ca/business/employment-standards",
      },
      {
        id: "sk-ref-2",
        title: "Saskatchewan.ca — Overtime (hours of work, consent, rest periods) [2]",
        url: "https://www.saskatchewan.ca/business/employment-standards/overtime",
      },
      {
        id: "sk-ref-3",
        title: "Saskatchewan.ca — Public (Statutory) Holidays [3]",
        url: "https://www.saskatchewan.ca/business/employment-standards/public-statutory-holidays",
      },
      {
        id: "sk-ref-4",
        title: "Saskatchewan.ca — Annual Vacation and Vacation Pay [4]",
        url: "https://www.saskatchewan.ca/business/employment-standards/vacations-and-vacation-pay/annual-vacation-and-vacation-pay",
      },
      {
        id: "sk-ref-5",
        title: "Saskatchewan.ca — Ministry of Labour Relations and Workplace Safety [5]",
        url: "https://www.saskatchewan.ca/government/government-structure/ministries/labour-relations-and-workplace-safety",
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
          en: "<strong>$16.60/hour</strong> (effective May 1, 2026), adjusted each May 1<br/>All work hours — including pre-season training, camp meetings, setup time, and most travel time — must be compensated at minimum wage, portal to portal (i.e., from the moment you are required to be present until you are released). <a href=\"#qc-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "<strong>16,60 $/heure</strong> (en vigueur depuis le 1er mai 2026), ajusté chaque 1er mai<br/>Toutes les heures de travail — y compris la formation en début de saison, les réunions de camp, le temps de préparation et la plupart des temps de déplacement — doivent être rémunérées au salaire minimum, du début à la fin de la période de travail (« portail à portail »), c'est-à-dire dès le moment où votre présence est exigée jusqu'à celui où vous êtes libéré. <a href=\"#qc-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "Hours worked beyond <strong>40 hours per week</strong> must be paid at <strong>1.5 times the regular hourly rate</strong> (minimum $24.90/hour at minimum wage). Overtime may also be compensated with equivalent paid leave. Some workers, such as farm workers, are not entitled to the overtime wage increase. <a href=\"#qc-ref-2\" class=\"citation-link\">[2]</a><a href=\"#qc-ref-3\" class=\"citation-link\">[3]</a> For workers who work in a logging operation or a sawmill, a standard work week is <strong>47 hours</strong>. <a href=\"#qc-ref-2\" class=\"citation-link\">[2]</a> Exemptions may include senior managers. <a href=\"#qc-ref-2\" class=\"citation-link\">[2]</a><a href=\"#qc-ref-3\" class=\"citation-link\">[3]</a>",
          fr: "Les heures travaillées au-delà de <strong>40 heures par semaine</strong> doivent être rémunérées au taux de <strong>1,5 fois le salaire horaire régulier</strong> (minimum 24,90 $/heure au salaire minimum). Les heures supplémentaires peuvent aussi être compensées par un congé équivalent payé. Certains travailleurs, comme les travailleurs agricoles, n'ont pas droit à la majoration pour heures supplémentaires. <a href=\"#qc-ref-2\" class=\"citation-link\">[2]</a><a href=\"#qc-ref-3\" class=\"citation-link\">[3]</a> Pour les travailleurs d'une exploitation forestière ou d'une scierie, la semaine normale de travail est de <strong>47 heures</strong>. <a href=\"#qc-ref-2\" class=\"citation-link\">[2]</a> Les cadres supérieurs peuvent être exemptés. <a href=\"#qc-ref-2\" class=\"citation-link\">[2]</a><a href=\"#qc-ref-3\" class=\"citation-link\">[3]</a>",
        },
      },
      {
        title: { en: "Maximum Working Hours", fr: "Durée maximale du travail" },
        content: {
          en: "An employee may refuse to work more than <strong>2 hours beyond their regular daily hours</strong> or more than <strong>14 hours of work in a 24-hour period</strong>. An employee may also refuse if the schedule is not set and they must care for a family member. Employees may also refuse work if they were not informed of their schedule at least <strong>5 days in advance</strong>, subject to exceptions under Quebec labour standards law. <a href=\"#qc-ref-4\" class=\"citation-link\">[4]</a>",
          fr: "Un salarié peut refuser de travailler plus de <strong>2 heures au-delà de ses heures habituelles de travail</strong> ou plus de <strong>14 heures de travail par période de 24 heures</strong>. Le salarié peut aussi refuser de travailler si l'horaire n'est pas fixé pour s'occuper d'un membre de sa famille ou d'un proche. Les salariés peuvent également refuser de travailler s'ils n'ont pas été informés de leur horaire au moins <strong>5 jours à l'avance</strong>, sous réserve des exceptions prévues par les normes du travail du Québec. <a href=\"#qc-ref-4\" class=\"citation-link\">[4]</a>",
        },
      },
      {
        title: { en: "Deductions", fr: "Déductions" },
        content: {
          en: "An employer may only make deductions from wages if authorized by law, regulation, court order, collective agreement, decree, or a written mandate from the employee. The employer may make deductions from wages if the employee consents thereto in writing, for a specific purpose mentioned in the writing. <a href=\"#qc-ref-5\" class=\"citation-link\">[5]</a> Arbitrary deductions for equipment damage or production mistakes are not permitted.",
          fr: "L'employeur peut effectuer des déductions sur le salaire seulement si la loi, un règlement, une ordonnance judiciaire, une convention collective, un décret ou un mandat écrit du salarié l'y autorise. L'employeur peut effectuer une retenue sur le salaire si le salarié y consent par écrit, pour une fin spécifique mentionnée dans cet écrit. <a href=\"#qc-ref-5\" class=\"citation-link\">[5]</a> Les déductions arbitraires pour dommages à l'équipement ou erreurs de production ne sont pas permises.",
        },
      },
      {
        title: { en: "Statutory Holidays", fr: "Jours fériés" },
        content: {
          en: "Quebec has <strong>8 paid statutory holidays</strong> per year. The indemnity for each holiday equals <strong>1/20 of wages earned in the 4 complete pay weeks preceding the holiday week</strong>. If you work on a statutory holiday, you receive your holiday indemnity plus your regular wages for hours worked. <a href=\"#qc-ref-7\" class=\"citation-link\">[7]</a> To calculate the indemnity, use the <a href=\"https://www.cnesst.gouv.qc.ca/en/working-conditions/leave/statutory-holidays/calculating-indemnity-statutory-holiday\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">CNESST guide to calculating the statutory holiday indemnity</a> to ensure complete compliance. <a href=\"#qc-ref-6\" class=\"citation-link\">[6]</a>",
          fr: "Le Québec compte <strong>8 jours fériés chômés et payés</strong> par année. L'indemnité versée pour chaque jour férié est égale à <strong>1/20 du salaire gagné au cours des 4 semaines complètes de paie précédant la semaine du congé</strong>. Si vous travaillez un jour férié, vous recevez votre indemnité de jour férié plus votre salaire régulier pour les heures travaillées. <a href=\"#qc-ref-7\" class=\"citation-link\">[7]</a> Pour calculer l'indemnité, consultez le <a href=\"https://www.cnesst.gouv.qc.ca/fr/conditions-travail/conges/jours-feries/calculer-indemnites-pour-un-jour-ferie\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">guide de la CNESST sur le calcul de l'indemnité de jour férié</a> afin d'assurer une conformité complète. <a href=\"#qc-ref-6\" class=\"citation-link\">[6]</a>",
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
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact the CNESST at <strong>1-844-838-0808</strong> or visit <a href=\"https://www.cnesst.gouv.qc.ca/en\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">cnesst.gouv.qc.ca</a>. All workers have the right to refuse work if they believe it endangers their health, safety, or physical or psychological integrity. <a href=\"#qc-ref-8\" class=\"citation-link\">[8]</a>",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, blessures, refus de travail dangereux, harcèlement et problèmes d'assainissement, contactez la CNESST au <strong>1-844-838-0808</strong> ou visitez <a href=\"https://www.cnesst.gouv.qc.ca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">cnesst.gouv.qc.ca</a>. Tous les travailleurs ont le droit de refuser d'exécuter un travail s'ils croient que cela met en danger leur santé, leur sécurité ou leur intégrité physique ou psychologique. <a href=\"#qc-ref-8\" class=\"citation-link\">[8]</a>",
        },
      },
    ],
    // Note: cnesst.gouv.qc.ca content pages generally expose no usable content-section anchor
    // ids either (verified via curl on the overtime, right-to-refuse, and Section 49 pages —
    // only footer boilerplate ids exist). Where a page links out to a more specific dedicated
    // sub-page for the exact fact cited, that more specific URL is used instead of the general
    // landing page. The PDF guide's page numbers were verified by downloading it directly
    // (WebFetch 403s on this file; a plain curl with a browser User-Agent succeeds) and
    // extracting text per-page with `pdftotext -layout`, splitting on the \f page-break marker.
    references: [
      {
        id: "qc-ref-1",
        title: "CNESST — Labour Standards in Québec (PDF guide), general minimum-wage guidance [1]",
        url: "https://www.cnesst.gouv.qc.ca/sites/default/files/documents/labour-standards-quebec.pdf",
      },
      {
        id: "qc-ref-2",
        title: "CNESST — Labour Standards in Québec (PDF guide), \"Overtime\" section, p. 8 [2]",
        url: "https://www.cnesst.gouv.qc.ca/sites/default/files/documents/labour-standards-quebec.pdf#page=8",
        location: "p. 8",
      },
      {
        id: "qc-ref-3",
        title: "Workforce.com — Overtime Laws by Province (Canada), Quebec section [3]",
        url: "https://www.workforce.com/ca/resources/overtime-laws-by-province-canada",
      },
      {
        id: "qc-ref-4",
        title: "CNESST — Right to Refuse to Work [4]",
        url: "https://www.cnesst.gouv.qc.ca/en/working-conditions/work-schedule-and-termination-employment/work-schedule/right-refuse-work",
      },
      {
        id: "qc-ref-5",
        title: "CNESST — Labour Standards in Québec (PDF guide), \"Deductions\" section (Article 49), p. 6 [5]",
        url: "https://www.cnesst.gouv.qc.ca/sites/default/files/documents/labour-standards-quebec.pdf#page=6",
        location: "p. 6",
      },
      {
        id: "qc-ref-6",
        title: "CNESST — Calculating the Indemnity for a Statutory Holiday [6]",
        url: "https://www.cnesst.gouv.qc.ca/en/working-conditions/leave/statutory-holidays/calculating-indemnity-statutory-holiday",
      },
      {
        id: "qc-ref-7",
        title: "CNESST — Labour Standards in Québec (PDF guide), statutory holiday indemnity calculation, p. 10 [7]",
        url: "https://www.cnesst.gouv.qc.ca/sites/default/files/documents/labour-standards-quebec.pdf#page=10",
        location: "p. 10",
      },
      {
        id: "qc-ref-8",
        title: "CNESST — Official Website [8]",
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
          en: "<strong>$16.75/hour</strong> (effective April 1, 2026), rising to <strong>$17.00/hour</strong> on October 1, 2026<br/>Nova Scotia has a separate Minimum Wage Order for logging and forest operations that explicitly covers reforestation work. All work hours are paid portal to portal. <a href=\"#ns-ref-1\" class=\"citation-link\">[1]</a> Piece rates (per tree) must work out to at least minimum wage for the hours you worked — the only exemption is for workers paid by wood measurement (board feet or cords) under a written agreement. <a href=\"#ns-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "<strong>16,75 $/heure</strong> (en vigueur depuis le 1er avril 2026), passant à <strong>17,00 $/heure</strong> le 1er octobre 2026<br/>La Nouvelle-Écosse possède un décret sur le salaire minimum distinct pour les opérations forestières qui couvre explicitement le travail de reboisement. Toutes les heures de travail sont rémunérées du début à la fin de la période de travail (« portail à portail »). <a href=\"#ns-ref-1\" class=\"citation-link\">[1]</a> Les tarifs à la pièce (par arbre) doivent équivaloir au moins au salaire minimum pour les heures travaillées — la seule exemption vise les travailleurs payés selon le mesurage du bois (pieds-planche ou cordes) en vertu d'une entente écrite. <a href=\"#ns-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "<strong>Important:</strong> Workers in logging and forest operations — including reforestation — are <strong>not entitled to overtime pay</strong> under Nova Scotia's Labour Standards Code. <a href=\"#ns-ref-2\" class=\"citation-link\">[2]</a> For most other workers, overtime at <strong>1.5 times the regular wage</strong> applies only after 48 hours in a week. Keep detailed daily records of your hours: no matter how many hours you work, your total pay must equal at least minimum wage for every hour worked.",
          fr: "<strong>Important :</strong> Les travailleurs des opérations forestières — y compris le reboisement — <strong>n'ont pas droit à la rémunération des heures supplémentaires</strong> en vertu du Code des normes du travail de la Nouvelle-Écosse. <a href=\"#ns-ref-2\" class=\"citation-link\">[2]</a> Pour la plupart des autres travailleurs, les heures supplémentaires à <strong>1,5 fois le salaire régulier</strong> ne s'appliquent qu'après 48 heures par semaine. Tenez un registre quotidien détaillé de vos heures : peu importe le nombre d'heures travaillées, votre paie totale doit équivaloir au moins au salaire minimum pour chaque heure travaillée.",
        },
      },
      {
        title: { en: "Board and Lodging", fr: "Chambre et pension" },
        content: {
          en: "In logging and forest operations, employers may deduct a maximum of <strong>$10.80 per day</strong> from minimum wages for board and lodging. Employers cannot charge you for board or lodging you do not receive, or for meals not eaten. <a href=\"#ns-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "Dans les opérations forestières, les employeurs peuvent déduire un maximum de <strong>10,80 $ par jour</strong> du salaire minimum pour la chambre et la pension. Les employeurs ne peuvent pas vous facturer une chambre ou une pension que vous ne recevez pas, ni des repas non consommés. <a href=\"#ns-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
      {
        title: { en: "Deductions", fr: "Déductions" },
        content: {
          en: "Deductions must be authorized by federal or Nova Scotia law (taxes, CPP, EI), by court order, or by your written consent. Even with written consent, deductions for lodging, uniforms, or meals cannot bring your earnings below minimum wage. Arbitrary deductions for equipment damage or production mistakes are not permitted. <a href=\"#ns-ref-3\" class=\"citation-link\">[3]</a>",
          fr: "Les déductions doivent être autorisées par une loi fédérale ou néo-écossaise (impôts, RPC, AE), par une ordonnance judiciaire ou par votre consentement écrit. Même avec un consentement écrit, les déductions pour l'hébergement, les uniformes ou les repas ne peuvent pas faire descendre vos gains sous le salaire minimum. Les déductions arbitraires pour dommages à l'équipement ou erreurs de production ne sont pas permises. <a href=\"#ns-ref-3\" class=\"citation-link\">[3]</a>",
        },
      },
      {
        title: { en: "Statutory Holidays", fr: "Jours fériés" },
        content: {
          en: "Nova Scotia has <strong>6 paid holidays</strong>: New Year's Day, Nova Scotia Heritage Day, Good Friday, Canada Day, Labour Day, and Christmas Day. To qualify, you must have been entitled to pay for at least 15 of the 30 calendar days before the holiday and have worked your scheduled shifts before and after it. If you work on a paid holiday, you receive a regular day's pay plus <strong>1.5 times your regular rate</strong> for hours worked. Remembrance Day is covered separately by the Remembrance Day Act. <a href=\"#ns-ref-3\" class=\"citation-link\">[3]</a>",
          fr: "La Nouvelle-Écosse compte <strong>6 jours fériés payés</strong> : le jour de l'An, le jour du Patrimoine de la Nouvelle-Écosse, le Vendredi saint, la fête du Canada, la fête du Travail et le jour de Noël. Pour être admissible, vous devez avoir eu droit à une rémunération pendant au moins 15 des 30 jours civils précédant le jour férié et avoir travaillé vos quarts prévus avant et après celui-ci. Si vous travaillez un jour férié, vous recevez une journée normale de salaire plus <strong>1,5 fois votre taux régulier</strong> pour les heures travaillées. Le jour du Souvenir est régi séparément par la Remembrance Day Act. <a href=\"#ns-ref-3\" class=\"citation-link\">[3]</a>",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Workers are entitled to <strong>4% vacation pay</strong> on all earnings from the start of employment, with 2 weeks of vacation time after each 12 months of work. Vacation pay increases to <strong>6%</strong> at the start of your 8th year of service, and vacation time increases to 3 weeks after completing 8 years. Vacation pay should be clearly indicated on pay stubs. <a href=\"#ns-ref-3\" class=\"citation-link\">[3]</a>",
          fr: "Les travailleurs ont droit à une <strong>indemnité de vacances de 4 %</strong> sur tous leurs gains dès le début de l'emploi, avec 2 semaines de vacances après chaque période de 12 mois de travail. L'indemnité passe à <strong>6 %</strong> au début de la 8e année de service, et les vacances passent à 3 semaines après 8 années complètes de service. Cela doit être clairement indiqué sur les talons de paie. <a href=\"#ns-ref-3\" class=\"citation-link\">[3]</a>",
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
    // Note: novascotia.ca pages expose no content-section anchor ids in their raw HTML
    // (verified via curl) — references link to the most specific page available instead.
    references: [
      {
        id: "ns-ref-1",
        title: "Nova Scotia — Minimum Wage Order (Logging and Forest Operations) [1]",
        url: "https://novascotia.ca/just/regulations/regs/lscmwlfo.htm",
      },
      {
        id: "ns-ref-2",
        title: "Nova Scotia — Logging and Forestry Labour Standards (overtime exclusion) [2]",
        url: "https://novascotia.ca/lae/employmentrights/forestry.asp",
      },
      {
        id: "ns-ref-3",
        title: "Nova Scotia — Labour Standards (employment rights: deductions, holidays, vacation) [3]",
        url: "https://novascotia.ca/lae/employmentrights/",
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
          en: "<strong>$16.00/hour</strong>, rising to <strong>$16.40/hour</strong> on October 1, 2026<br/>Manitoba's minimum wage is adjusted every October 1 based on inflation. All work hours are paid portal to portal. <a href=\"#mb-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "<strong>16,00 $/heure</strong>, passant à <strong>16,40 $/heure</strong> le 1er octobre 2026<br/>Le salaire minimum du Manitoba est ajusté chaque 1er octobre en fonction de l'inflation. Toutes les heures de travail sont rémunérées du début à la fin de la période de travail (« portail à portail »). <a href=\"#mb-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "Overtime must be paid at <strong>1.5 times your regular wage</strong> after <strong>8 hours in a day or 40 hours in a week</strong> — one of the strongest overtime standards in Canada. Most employees qualify, including piece-rate and minimum wage earners. There is no silviculture exemption in Manitoba. <a href=\"#mb-ref-2\" class=\"citation-link\">[2]</a>",
          fr: "Les heures supplémentaires doivent être payées à <strong>1,5 fois votre salaire régulier</strong> après <strong>8 heures par jour ou 40 heures par semaine</strong> — l'une des normes d'heures supplémentaires les plus fortes au Canada. La plupart des employés y ont droit, y compris les travailleurs à la pièce et au salaire minimum. Il n'y a pas d'exemption pour la sylviculture au Manitoba. <a href=\"#mb-ref-2\" class=\"citation-link\">[2]</a>",
        },
      },
      {
        title: { en: "Deductions", fr: "Déductions" },
        content: {
          en: "Employers can only deduct what is required by law (taxes, CPP, EI) or what you agree to in writing for things that directly benefit you. Deductions for <strong>equipment damage, faulty work, cash shortages, or uniforms are prohibited</strong>. Employers must provide personal protective equipment at no cost to workers. <a href=\"#mb-ref-3\" class=\"citation-link\">[3]</a>",
          fr: "Les employeurs ne peuvent déduire que ce qui est exigé par la loi (impôts, RPC, AE) ou ce que vous acceptez par écrit pour des choses qui vous profitent directement. Les déductions pour <strong>dommages à l'équipement, travail défectueux, manques de caisse ou uniformes sont interdites</strong>. Les employeurs doivent fournir l'équipement de protection individuelle sans frais aux travailleurs. <a href=\"#mb-ref-3\" class=\"citation-link\">[3]</a>",
        },
      },
      {
        title: { en: "Room and Board", fr: "Chambre et pension" },
        content: {
          en: "Deductions for room and board require your consent and cannot reduce your earnings below minimum wage by more than <strong>$7 per week for the room</strong> and <strong>$1 per meal</strong>. <a href=\"#mb-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "Les déductions pour la chambre et la pension nécessitent votre consentement et ne peuvent pas faire descendre vos gains sous le salaire minimum de plus de <strong>7 $ par semaine pour la chambre</strong> et <strong>1 $ par repas</strong>. <a href=\"#mb-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
      {
        title: { en: "General Holidays", fr: "Jours fériés généraux" },
        content: {
          en: "Manitoba has <strong>9 general holidays</strong> per year, including Louis Riel Day and Orange Shirt Day. Holiday pay is <strong>5% of your gross wages</strong> (excluding overtime) in the 4 weeks before the holiday. If you work on a general holiday, you receive <strong>1.5 times your regular rate</strong> for hours worked plus your holiday pay. There is no minimum service period to qualify. <a href=\"#mb-ref-4\" class=\"citation-link\">[4]</a>",
          fr: "Le Manitoba compte <strong>9 jours fériés généraux</strong> par année, y compris la Journée Louis Riel et la Journée du chandail orange. L'indemnité de jour férié est de <strong>5 % de votre salaire brut</strong> (heures supplémentaires exclues) des 4 semaines précédant le jour férié. Si vous travaillez un jour férié, vous recevez <strong>1,5 fois votre taux régulier</strong> pour les heures travaillées plus votre indemnité de jour férié. Aucune période de service minimale n'est requise pour y avoir droit. <a href=\"#mb-ref-4\" class=\"citation-link\">[4]</a>",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Workers are entitled to <strong>4% vacation pay</strong> and 2 weeks of vacation per year for the first 4 years of employment. After 5 consecutive years with the same employer, this increases to <strong>6% and 3 weeks</strong>. Vacation pay should be clearly indicated on pay stubs. <a href=\"#mb-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "Les travailleurs ont droit à une <strong>indemnité de vacances de 4 %</strong> et à 2 semaines de vacances par année pour les 4 premières années d'emploi. Après 5 années consécutives chez le même employeur, cela passe à <strong>6 % et 3 semaines</strong>. Cela doit être clairement indiqué sur les talons de paie. <a href=\"#mb-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
      {
        title: { en: "Workplace Safety and Health", fr: "Sécurité et santé au travail" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact Manitoba Workplace Safety and Health at <strong>204-957-7233</strong> (204-957-SAFE) in Winnipeg or <strong>1-855-957-7233</strong> toll-free — a safety and health officer is available 24/7. All workers have the right to refuse work they reasonably believe is dangerous to themselves or others. <a href=\"#mb-ref-5\" class=\"citation-link\">[5]</a>",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, contactez Sécurité et santé au travail du Manitoba au <strong>204-957-7233</strong> (204-957-SAFE) à Winnipeg ou au <strong>1-855-957-7233</strong> sans frais — un agent de sécurité et santé est disponible 24 h sur 24, 7 jours sur 7. Tous les travailleurs ont le droit de refuser un travail qu'ils croient raisonnablement dangereux pour eux-mêmes ou pour autrui. <a href=\"#mb-ref-5\" class=\"citation-link\">[5]</a>",
        },
      },
    ],
    // Note: gov.mb.ca pages expose no content-section anchor ids in their raw HTML
    // (verified via curl) — references link to the dedicated factsheet pages instead.
    references: [
      {
        id: "mb-ref-1",
        title: "Manitoba — Employment Standards (minimum wage, room and board, vacation) [1]",
        url: "https://www.gov.mb.ca/labour/standards/",
      },
      {
        id: "mb-ref-2",
        title: "Manitoba — Employment Standards Factsheet: Overtime [2]",
        url: "https://www.gov.mb.ca/labour/standards/doc,overtime,factsheet.html",
      },
      {
        id: "mb-ref-3",
        title: "Manitoba — Employment Standards Factsheet: Deductions [3]",
        url: "https://www.gov.mb.ca/labour/standards/doc,deductions,factsheet.html",
      },
      {
        id: "mb-ref-4",
        title: "Manitoba — Employment Standards Factsheet: General Holidays [4]",
        url: "https://www.gov.mb.ca/labour/standards/doc,gen-holidays-after-april-30-07,factsheet.html",
      },
      {
        id: "mb-ref-5",
        title: "Manitoba — Workplace Safety and Health [5]",
        url: "https://www.gov.mb.ca/labour/safety/",
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
          en: "<strong>$15.90/hour</strong> (effective April 1, 2026), adjusted each April based on the Consumer Price Index<br/>All employees paid by salary, commission, or <strong>piece work</strong> must receive at least minimum wage for every hour worked. All work hours are paid portal to portal. <a href=\"#nb-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "<strong>15,90 $/heure</strong> (en vigueur depuis le 1er avril 2026), ajusté chaque avril selon l'Indice des prix à la consommation<br/>Tous les employés payés au salaire, à la commission ou <strong>à la pièce</strong> doivent recevoir au moins le salaire minimum pour chaque heure travaillée. Toutes les heures de travail sont rémunérées du début à la fin de la période de travail (« portail à portail »). <a href=\"#nb-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "<strong>Important:</strong> Overtime applies after <strong>44 hours in a week</strong>, but the required rate is only <strong>1.5 times the minimum wage</strong> (<strong>$23.85/hour</strong> as of April 1, 2026) — not 1.5 times your regular wage. If your regular earnings are already above $23.85/hour, your employer is not required to pay a premium. Banking of overtime hours is prohibited. Keep detailed daily records of your hours. <a href=\"#nb-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "<strong>Important :</strong> Les heures supplémentaires s'appliquent après <strong>44 heures par semaine</strong>, mais le taux requis n'est que de <strong>1,5 fois le salaire minimum</strong> (<strong>23,85 $/heure</strong> depuis le 1er avril 2026) — et non 1,5 fois votre salaire régulier. Si vos gains réguliers dépassent déjà 23,85 $/heure, votre employeur n'est pas tenu de payer une prime. La mise en banque des heures supplémentaires est interdite. Tenez un registre quotidien détaillé de vos heures. <a href=\"#nb-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
      {
        title: { en: "Minimum Reporting Pay", fr: "Salaire minimum de présence au travail" },
        content: {
          en: "If you report to work at your employer's request, you are entitled to a minimum of <strong>3 hours of pay</strong> at the applicable rate (this applies to employees who regularly work more than 3 consecutive hours and earn less than twice the minimum wage). <a href=\"#nb-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "Si vous vous présentez au travail à la demande de votre employeur, vous avez droit à un minimum de <strong>3 heures de salaire</strong> au taux applicable (cela s'applique aux employés qui travaillent habituellement plus de 3 heures consécutives et gagnent moins de deux fois le salaire minimum). <a href=\"#nb-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
      {
        title: { en: "Paid Public Holidays", fr: "Jours fériés payés" },
        content: {
          en: "New Brunswick has <strong>8 paid public holidays</strong>, including New Brunswick Day, Family Day, and Remembrance Day. To qualify, you must be employed for at least 90 calendar days in the 12 months before the holiday and work your scheduled day before and after it. If you work on a public holiday, you receive your regular day's pay plus <strong>1.5 times your regular rate</strong> for hours worked — and all employees, even those who don't qualify, receive 1.5 times their regular rate for holiday hours. <a href=\"#nb-ref-2\" class=\"citation-link\">[2]</a>",
          fr: "Le Nouveau-Brunswick compte <strong>8 jours fériés payés</strong>, y compris la Fête du Nouveau-Brunswick, le jour de la Famille et le jour du Souvenir. Pour être admissible, vous devez être à l'emploi depuis au moins 90 jours civils dans les 12 mois précédant le jour férié et avoir travaillé votre journée prévue avant et après celui-ci. Si vous travaillez un jour férié, vous recevez votre salaire régulier de la journée plus <strong>1,5 fois votre taux régulier</strong> pour les heures travaillées — et tous les employés, même ceux qui ne sont pas admissibles, reçoivent 1,5 fois leur taux régulier pour les heures d'un jour férié. <a href=\"#nb-ref-2\" class=\"citation-link\">[2]</a>",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Workers with less than 8 years of service are entitled to <strong>4% vacation pay</strong> and 2 weeks of vacation per year (or 1 day per month worked, whichever is less). After 8 years with the same employer: <strong>6% and 3 weeks</strong>. All accumulated vacation pay must be paid out with your final cheque when employment ends. <a href=\"#nb-ref-2\" class=\"citation-link\">[2]</a>",
          fr: "Les travailleurs ayant moins de 8 ans de service ont droit à une <strong>indemnité de vacances de 4 %</strong> et à 2 semaines de vacances par année (ou 1 jour par mois travaillé, selon le moindre des deux). Après 8 ans chez le même employeur : <strong>6 % et 3 semaines</strong>. Toute indemnité de vacances accumulée doit être versée avec votre dernier chèque de paie à la fin de l'emploi. <a href=\"#nb-ref-2\" class=\"citation-link\">[2]</a>",
        },
      },
      {
        title: { en: "Workplace Safety", fr: "Sécurité au travail" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact WorkSafeNB at <strong>1-800-999-9775</strong>. Under New Brunswick's Occupational Health and Safety Act, all workers have the right to refuse work they believe is dangerous to their health or safety. For employment standards questions, call the Employment Standards Branch at 1-888-452-2687 (English) or 1-888-487-2824 (French). <a href=\"#nb-ref-3\" class=\"citation-link\">[3]</a>",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, contactez Travail sécuritaire NB au <strong>1-800-999-9775</strong>. En vertu de la Loi sur l'hygiène et la sécurité au travail du Nouveau-Brunswick, tous les travailleurs ont le droit de refuser un travail qu'ils croient dangereux pour leur santé ou leur sécurité. Pour les questions sur les normes d'emploi, appelez la Direction des normes d'emploi au 1-888-487-2824 (français) ou au 1-888-452-2687 (anglais). <a href=\"#nb-ref-3\" class=\"citation-link\">[3]</a>",
        },
      },
    ],
    // Note: gnb.ca pages expose no content-section anchor ids in their raw HTML
    // (verified via curl) — references link to the most specific page available instead.
    references: [
      {
        id: "nb-ref-1",
        title: "GNB.ca — Minimum Wage, Overtime and Minimum Pay for Reporting for Work [1]",
        url: "https://www.gnb.ca/en/topic/jobs-workplaces/labour-market-workforce/employment-standards/wage-pay.html",
      },
      {
        id: "nb-ref-2",
        title: "Employment Standards Act, SNB 1982, c E-7.2 (CanLII) — public holidays, vacation pay [2]",
        url: "https://www.canlii.org/en/nb/laws/stat/snb-1982-c-e-7.2/latest/",
      },
      {
        id: "nb-ref-3",
        title: "WorkSafeNB — workplace health and safety [3]",
        url: "https://www.worksafenb.ca/",
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
          en: "<strong>$17.00/hour</strong> (effective April 1, 2026), rising to <strong>$17.30/hour</strong> on October 1, 2026 — the highest minimum wage in Atlantic Canada. All work hours are paid portal to portal. <a href=\"#pei-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "<strong>17,00 $/heure</strong> (en vigueur depuis le 1er avril 2026), passant à <strong>17,30 $/heure</strong> le 1er octobre 2026 — le salaire minimum le plus élevé du Canada atlantique. Toutes les heures de travail sont rémunérées du début à la fin de la période de travail (« portail à portail »). <a href=\"#pei-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "Under the new Employment Standards Act (in force June 30, 2026), overtime applies after <strong>44 hours in a week</strong> (reduced from 48) at <strong>1.5 times your regular wage</strong>. With a written agreement, you may bank overtime as paid time off at 1.5 hours per overtime hour worked. Employers may only average hours over 2–4 weeks for overtime calculation with your written agreement. <a href=\"#pei-ref-1\" class=\"citation-link\">[1]</a><a href=\"#pei-ref-3\" class=\"citation-link\">[3]</a>",
          fr: "En vertu de la nouvelle Loi sur les normes d'emploi (en vigueur depuis le 30 juin 2026), les heures supplémentaires s'appliquent après <strong>44 heures par semaine</strong> (réduit de 48) à <strong>1,5 fois votre salaire régulier</strong>. Avec une entente écrite, vous pouvez mettre en banque les heures supplémentaires en congé payé à raison de 1,5 heure par heure supplémentaire travaillée. Les employeurs ne peuvent faire la moyenne des heures sur 2 à 4 semaines pour le calcul des heures supplémentaires qu'avec votre accord écrit. <a href=\"#pei-ref-1\" class=\"citation-link\">[1]</a><a href=\"#pei-ref-3\" class=\"citation-link\">[3]</a>",
        },
      },
      {
        title: { en: "Paid Holidays", fr: "Jours fériés payés" },
        content: {
          en: "PEI has <strong>8 paid holidays</strong>, including Islander Day and the National Day for Truth and Reconciliation. Holiday pay is <strong>5% of your regular wages</strong> earned in the 4 weeks before the holiday (excluding overtime). If you work on a paid holiday, you receive <strong>1.5 times your regular wage</strong> for hours worked plus your holiday pay, or regular pay plus a paid day off. <a href=\"#pei-ref-2\" class=\"citation-link\">[2]</a>",
          fr: "L'Î.-P.-É. compte <strong>8 jours fériés payés</strong>, y compris la Journée des Insulaires et la Journée nationale de la vérité et de la réconciliation. L'indemnité de jour férié est de <strong>5 % de votre salaire régulier</strong> gagné dans les 4 semaines précédant le jour férié (heures supplémentaires exclues). Si vous travaillez un jour férié, vous recevez <strong>1,5 fois votre salaire régulier</strong> pour les heures travaillées plus votre indemnité de jour férié, ou votre salaire régulier plus un jour de congé payé. <a href=\"#pei-ref-2\" class=\"citation-link\">[2]</a>",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Workers are entitled to <strong>4% vacation pay</strong> and 2 weeks of vacation after 12 months of employment. Under the new Act, the threshold for increased entitlement was reduced from 8 years to <strong>5 years</strong>, after which you receive <strong>6% and 3 weeks</strong>. The new Act also adds specific vacation pay provisions for part-time, seasonal, and short-term employees. <a href=\"#pei-ref-1\" class=\"citation-link\">[1]</a><a href=\"#pei-ref-3\" class=\"citation-link\">[3]</a>",
          fr: "Les travailleurs ont droit à une <strong>indemnité de vacances de 4 %</strong> et à 2 semaines de vacances après 12 mois d'emploi. En vertu de la nouvelle Loi, le seuil d'admissibilité aux droits accrus a été réduit de 8 ans à <strong>5 ans</strong>, après quoi vous recevez <strong>6 % et 3 semaines</strong>. La nouvelle Loi ajoute aussi des dispositions spécifiques d'indemnité de vacances pour les employés à temps partiel, saisonniers et de courte durée. <a href=\"#pei-ref-1\" class=\"citation-link\">[1]</a><a href=\"#pei-ref-3\" class=\"citation-link\">[3]</a>",
        },
      },
      {
        title: { en: "Sick Leave", fr: "Congés de maladie" },
        content: {
          en: "Under the new Act, after 30 days of continuous employment you are entitled to <strong>4 days of unpaid sick leave</strong> per year. Paid sick days accrue with service: <strong>1 paid day</strong> in your second year, <strong>2</strong> in your third, and <strong>3</strong> from your fourth year onward. <a href=\"#pei-ref-1\" class=\"citation-link\">[1]</a><a href=\"#pei-ref-3\" class=\"citation-link\">[3]</a>",
          fr: "En vertu de la nouvelle Loi, après 30 jours d'emploi continu, vous avez droit à <strong>4 jours de congé de maladie non payés</strong> par année. Les jours de maladie payés s'accumulent avec le service : <strong>1 jour payé</strong> dans votre deuxième année, <strong>2</strong> dans votre troisième et <strong>3</strong> à partir de votre quatrième année. <a href=\"#pei-ref-1\" class=\"citation-link\">[1]</a><a href=\"#pei-ref-3\" class=\"citation-link\">[3]</a>",
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
    // Note: princeedwardisland.ca pages expose no content-section anchor ids in their raw HTML
    // (verified via curl) — references link to the most specific page available instead.
    references: [
      {
        id: "pei-ref-1",
        title: "PrinceEdwardIsland.ca — Employment Standards in PEI [1]",
        url: "https://www.princeedwardisland.ca/en/information/workforce-and-advanced-learning/employment-standards-in-pei",
      },
      {
        id: "pei-ref-2",
        title: "PrinceEdwardIsland.ca — Paid Holidays [2]",
        url: "https://www.princeedwardisland.ca/en/information/workforce-advanced-learning-and-population/paid-holidays",
      },
      {
        id: "pei-ref-3",
        title: "PEI Employment Standards Act (PDF, new Act in force June 30, 2026) [3]",
        url: "https://www.princeedwardisland.ca/sites/default/files/legislation/e-06-2-employment_standards_act.pdf",
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
          en: "<strong>$16.35/hour</strong> (effective April 1, 2026), adjusted each April 1 based on the national Consumer Price Index<br/>All work hours are paid portal to portal. <a href=\"#nl-ref-1\" class=\"citation-link\">[1]</a> Employers must pay you at least twice a month, within 7 days of the end of the pay period.",
          fr: "<strong>16,35 $/heure</strong> (en vigueur depuis le 1er avril 2026), ajusté chaque 1er avril selon l'Indice des prix à la consommation national<br/>Toutes les heures de travail sont rémunérées du début à la fin de la période de travail (« portail à portail »). <a href=\"#nl-ref-1\" class=\"citation-link\">[1]</a> Les employeurs doivent vous payer au moins deux fois par mois, dans les 7 jours suivant la fin de la période de paie.",
        },
      },
      {
        title: { en: "Overtime", fr: "Heures supplémentaires" },
        content: {
          en: "<strong>Important:</strong> Overtime applies after <strong>40 hours in a week</strong>, but the required rate is only <strong>1.5 times the minimum wage</strong> (<strong>$24.53/hour</strong> as of April 1, 2026) — not 1.5 times your regular wage. If your piece-rate earnings already exceed $24.53/hour, your employer may not owe an overtime premium. Keep detailed daily records of your hours. <a href=\"#nl-ref-1\" class=\"citation-link\">[1]</a><a href=\"#nl-ref-2\" class=\"citation-link\">[2]</a>",
          fr: "<strong>Important :</strong> Les heures supplémentaires s'appliquent après <strong>40 heures par semaine</strong>, mais le taux requis n'est que de <strong>1,5 fois le salaire minimum</strong> (<strong>24,53 $/heure</strong> depuis le 1er avril 2026) — et non 1,5 fois votre salaire régulier. Si vos gains à la pièce dépassent déjà 24,53 $/heure, votre employeur pourrait ne pas devoir de prime d'heures supplémentaires. Tenez un registre quotidien détaillé de vos heures. <a href=\"#nl-ref-1\" class=\"citation-link\">[1]</a><a href=\"#nl-ref-2\" class=\"citation-link\">[2]</a>",
        },
      },
      {
        title: { en: "Paid Holidays", fr: "Jours fériés payés" },
        content: {
          en: "Newfoundland and Labrador has <strong>6 paid holidays</strong>: New Year's Day, Good Friday, Memorial Day (July 1), Labour Day, Remembrance Day, and Christmas Day. If you work on a paid holiday, you are entitled to <strong>twice your regular wages</strong> for that day, or an additional paid day off within 30 days. <a href=\"#nl-ref-2\" class=\"citation-link\">[2]</a>",
          fr: "Terre-Neuve-et-Labrador compte <strong>6 jours fériés payés</strong> : le jour de l'An, le Vendredi saint, le Jour commémoratif (1er juillet), la fête du Travail, le jour du Souvenir et le jour de Noël. Si vous travaillez un jour férié, vous avez droit au <strong>double de votre salaire régulier</strong> pour cette journée, ou à un jour de congé payé supplémentaire dans les 30 jours. <a href=\"#nl-ref-2\" class=\"citation-link\">[2]</a>",
        },
      },
      {
        title: { en: "Vacation Pay", fr: "Indemnité de vacances" },
        content: {
          en: "Workers are entitled to <strong>4% vacation pay</strong>, with 2 weeks of annual vacation after 12 months of continuous service (if you worked at least 90% of available working hours). Vacation pay increases to <strong>6% and 3 weeks</strong> only after <strong>15 years</strong> with the same employer — the longest threshold in Canada. Vacation pay should be clearly indicated on pay stubs. <a href=\"#nl-ref-2\" class=\"citation-link\">[2]</a><a href=\"#nl-ref-3\" class=\"citation-link\">[3]</a>",
          fr: "Les travailleurs ont droit à une <strong>indemnité de vacances de 4 %</strong>, avec 2 semaines de vacances annuelles après 12 mois de service continu (si vous avez travaillé au moins 90 % des heures de travail disponibles). L'indemnité ne passe à <strong>6 % et 3 semaines</strong> qu'après <strong>15 ans</strong> chez le même employeur — le seuil le plus long au Canada. Cela doit être clairement indiqué sur les talons de paie. <a href=\"#nl-ref-2\" class=\"citation-link\">[2]</a><a href=\"#nl-ref-3\" class=\"citation-link\">[3]</a>",
        },
      },
      {
        title: { en: "Workplace Safety", fr: "Sécurité au travail" },
        content: {
          en: "For health and safety concerns including illness, injury, unsafe work refusal, harassment, and sanitation issues, contact the Occupational Health and Safety Division at <strong>709-729-4834</strong>, or the 24-hour accident reporting line at 709-729-4444. Under Section 45 of the Occupational Health and Safety Act, all workers have the right to refuse work they reasonably believe is dangerous. Workplace injuries are covered by WorkplaceNL. <a href=\"#nl-ref-1\" class=\"citation-link\">[1]</a>",
          fr: "Pour les préoccupations de santé et sécurité, y compris les maladies, les blessures, le refus de travail dangereux, le harcèlement et les problèmes d'assainissement, contactez la Division de la santé et de la sécurité au travail au <strong>709-729-4834</strong>, ou la ligne de signalement d'accidents 24 heures au 709-729-4444. En vertu de l'article 45 de la Loi sur la santé et la sécurité au travail, tous les travailleurs ont le droit de refuser un travail qu'ils croient raisonnablement dangereux. Les accidents du travail sont couverts par WorkplaceNL. <a href=\"#nl-ref-1\" class=\"citation-link\">[1]</a>",
        },
      },
    ],
    // Note: gov.nl.ca and assembly.nl.ca pages expose no content-section anchor ids in their
    // raw HTML (verified via curl) — references link to the most specific page available instead.
    references: [
      {
        id: "nl-ref-1",
        title: "Gov.nl.ca — Labour Standards Division [1]",
        url: "https://www.gov.nl.ca/gs/labour/",
      },
      {
        id: "nl-ref-2",
        title: "Gov.nl.ca — Your Rights at Work (PDF guide) [2]",
        url: "https://www.gov.nl.ca/gs/files/Your-Rights-At-Work.pdf",
      },
      {
        id: "nl-ref-3",
        title: "Labour Standards Act, RSNL 1990, c L-2 [3]",
        url: "https://assembly.nl.ca/legislation/sr/statutes/l02.htm",
      },
    ],
  },
];

export function getProvinceBySlug(slug: string): ProvinceRights | undefined {
  return provinceRights.find((p) => p.slug === slug);
}
