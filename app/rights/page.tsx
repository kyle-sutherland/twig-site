import Link from 'next/link';
import PageHero from '../components/PageHero';
import ContentSection from '../components/ContentSection';
import Bilingual from '../components/Bilingual';

export default function RightsHubPage() {
  return (
    <main>
      <PageHero
        title={{
          en: 'Know Your Rights',
          fr: 'Connaissez vos droits',
        }}
        backgroundImage='/photo/mountaindawn.jpg'
      />

      <ContentSection variant='green'>
        <div className='max-w-4xl mx-auto'>
          <Bilingual
            en={
              <>
                <h2 className='heading text-3xl md:text-5xl mb-6'>
                  Employment Standards for Tree Workers
                </h2>
                <p className='text-lg mb-6'>
                  When you work in so-called Canada, you are entitled to minimal
                  work conditions. These vary from province to province, and
                  employment standards are not the same across the country.
                </p>
                <p className='text-lg mb-6'>
                  It is crucial to keep track daily of the trees you plant, the
                  piece rates paid, hours worked, and any deductions made.
                  Documentation is your strongest tool when enforcing your
                  rights.
                </p>
                <p className='text-lg'>
                  This guide is intended as a general educational summary of
                  employment standards and is not legal advice. Employment rules
                  can vary depending on the province, industry, occupation, and
                  individual circumstances involved. While we aim to keep this
                  information accurate and up to date, workers should consult
                  the linked legislation, official government resources, or a
                  qualified legal professional for guidance on specific
                  situations.
                </p>
              </>
            }
            fr={
              <>
                <h2 className='heading text-3xl md:text-5xl mb-6'>
                  Normes d'emploi pour les travailleurs forestiers
                </h2>
                <p className='text-lg mb-6'>
                  Lorsque vous travaillez dans le soi-disant Canada, vous avez
                  droit à des conditions de travail minimales. Celles-ci varient
                  d'une province à l'autre, et les normes d'emploi ne sont pas
                  les mêmes dans tout le pays.
                </p>
                <p className='text-lg mb-6'>
                  Il est crucial de suivre quotidiennement les arbres que vous
                  plantez, les tarifs à la pièce payés, les heures travaillées
                  et toute déduction effectuée. La documentation est votre
                  meilleur outil pour faire respecter vos droits.
                </p>
                <p className='text-lg'>
                  Ce guide se veut un résumé éducatif général des normes
                  d'emploi et ne constitue pas un avis juridique. Les règles
                  d'emploi peuvent varier selon la province, le secteur
                  d'activité, la profession et les circonstances individuelles.
                  Bien que nous cherchions à maintenir ces renseignements exacts
                  et à jour, les travailleurs devraient consulter la législation
                  liée, les ressources officielles du gouvernement ou un
                  professionnel du droit qualifié pour obtenir des conseils sur
                  des situations particulières.
                </p>
              </>
            }
          />
        </div>
      </ContentSection>

      <ContentSection variant='grey'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='heading text-3xl md:text-4xl mb-8 text-center text-gray-900'>
            <Bilingual
              en='Select Your Province'
              fr='Choisissez votre province'
            />
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Alberta Card */}
            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <h3 className='heading text-2xl text-gray-900 mb-4'>Alberta</h3>
              <p className='text-gray-700 mb-6'>
                <Bilingual
                  en='Employment standards and worker protections specific to Alberta.'
                  fr="Normes d'emploi et protections des travailleurs spécifiques à l'Alberta."
                />
              </p>
              <Link
                href='/rights/alberta'
                className='inline-block bg-slate-950 outline-2 px-6 py-3 text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors'>
                <Bilingual
                  en='Learn More →'
                  fr='En savoir plus →'
                />
              </Link>
            </div>

            {/* BC Card */}
            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <h3 className='heading text-2xl text-gray-900 mb-4'>
                <Bilingual
                  en='British Columbia'
                  fr='Colombie-Britannique'
                />
              </h3>
              <p className='text-gray-700 mb-6'>
                <Bilingual
                  en='Comprehensive employment standards information for tree workers in BC.'
                  fr="Informations complètes sur les normes d'emploi pour les travailleurs forestiers en C.-B."
                />
              </p>
              <Link
                href='/rights/bc'
                className='inline-block bg-slate-950 outline-2 px-6 py-3 text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors'>
                <Bilingual
                  en='Learn More →'
                  fr='En savoir plus →'
                />
              </Link>
            </div>

            {/* Manitoba Card */}
            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <h3 className='heading text-2xl text-gray-900 mb-4'>Manitoba</h3>
              <p className='text-gray-700 mb-6'>
                <Bilingual
                  en='Employment standards and worker protections specific to Manitoba.'
                  fr="Normes d'emploi et protections des travailleurs spécifiques au Manitoba."
                />
              </p>
              <Link
                href='/rights/manitoba'
                className='inline-block bg-slate-950 outline-2 px-6 py-3 text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors'>
                <Bilingual
                  en='Learn More →'
                  fr='En savoir plus →'
                />
              </Link>
            </div>

            {/* New Brunswick Card */}
            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <h3 className='heading text-2xl text-gray-900 mb-4'>
                <Bilingual
                  en='New Brunswick'
                  fr='Nouveau-Brunswick'
                />
              </h3>
              <p className='text-gray-700 mb-6'>
                <Bilingual
                  en='Employment standards and worker protections specific to New Brunswick.'
                  fr="Normes d'emploi et protections des travailleurs spécifiques au Nouveau-Brunswick."
                />
              </p>
              <Link
                href='/rights/new-brunswick'
                className='inline-block bg-slate-950 outline-2 px-6 py-3 text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors'>
                <Bilingual
                  en='Learn More →'
                  fr='En savoir plus →'
                />
              </Link>
            </div>

            {/* Newfoundland & Labrador Card */}
            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <h3 className='heading text-2xl text-gray-900 mb-4'>
                <Bilingual
                  en='Newfoundland and Labrador'
                  fr='Terre-Neuve-et-Labrador'
                />
              </h3>
              <p className='text-gray-700 mb-6'>
                <Bilingual
                  en='Employment standards and worker protections specific to Newfoundland and Labrador.'
                  fr="Normes d'emploi et protections des travailleurs spécifiques à Terre-Neuve-et-Labrador."
                />
              </p>
              <Link
                href='/rights/newfoundland-labrador'
                className='inline-block bg-slate-950 outline-2 px-6 py-3 text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors'>
                <Bilingual
                  en='Learn More →'
                  fr='En savoir plus →'
                />
              </Link>
            </div>

            {/* Nova Scotia Card */}
            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <h3 className='heading text-2xl text-gray-900 mb-4'>
                <Bilingual
                  en='Nova Scotia'
                  fr='Nouvelle-Écosse'
                />
              </h3>
              <p className='text-gray-700 mb-6'>
                <Bilingual
                  en='Employment standards and worker protections specific to Nova Scotia.'
                  fr='Normes du travail et protections des travailleurs spécifiques à la Nouvelle-Écosse.'
                />
              </p>
              <Link
                href='/rights/nova-scotia'
                className='inline-block bg-slate-950 outline-2 px-6 py-3 text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors'>
                <Bilingual
                  en='Learn More →'
                  fr='En savoir plus →'
                />
              </Link>
            </div>

            {/* Ontario Card */}
            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <h3 className='heading text-2xl text-gray-900 mb-4'>Ontario</h3>
              <p className='text-gray-700 mb-6'>
                <Bilingual
                  en='Employment standards and worker protections specific to Ontario.'
                  fr="Normes d'emploi et protections des travailleurs spécifiques à l'Ontario."
                />
              </p>
              <Link
                href='/rights/ontario'
                className='inline-block bg-slate-950 outline-2 px-6 py-3 text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors'>
                <Bilingual
                  en='Learn More →'
                  fr='En savoir plus →'
                />
              </Link>
            </div>

            {/* PEI Card */}
            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <h3 className='heading text-2xl text-gray-900 mb-4'>
                <Bilingual
                  en='Prince Edward Island'
                  fr='Île-du-Prince-Édouard'
                />
              </h3>
              <p className='text-gray-700 mb-6'>
                <Bilingual
                  en='Employment standards and worker protections specific to PEI.'
                  fr="Normes d'emploi et protections des travailleurs spécifiques à l'Î.-P.-É."
                />
              </p>
              <Link
                href='/rights/pei'
                className='inline-block bg-slate-950 outline-2 px-6 py-3 text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors'>
                <Bilingual
                  en='Learn More →'
                  fr='En savoir plus →'
                />
              </Link>
            </div>

            {/* Quebec Card */}
            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <h3 className='heading text-2xl text-gray-900 mb-4'>
                <Bilingual
                  en='Quebec'
                  fr='Québec'
                />
              </h3>
              <p className='text-gray-700 mb-6'>
                <Bilingual
                  en='Employment standards and worker protections specific to Quebec.'
                  fr='Normes du travail et protections des travailleurs spécifiques au Québec.'
                />
              </p>
              <Link
                href='/rights/quebec'
                className='inline-block bg-slate-950 outline-2 px-6 py-3 text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors'>
                <Bilingual
                  en='Learn More →'
                  fr='En savoir plus →'
                />
              </Link>
            </div>

            {/* Saskatchewan Card */}
            <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
              <h3 className='heading text-2xl text-gray-900 mb-4'>
                Saskatchewan
              </h3>
              <p className='text-gray-700 mb-6'>
                <Bilingual
                  en='Employment standards and worker protections specific to Saskatchewan.'
                  fr="Normes d'emploi et protections des travailleurs spécifiques à la Saskatchewan."
                />
              </p>
              <Link
                href='/rights/saskatchewan'
                className='inline-block bg-slate-950 outline-2 px-6 py-3 text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors'>
                <Bilingual
                  en='Learn More →'
                  fr='En savoir plus →'
                />
              </Link>
            </div>
          </div>
        </div>
      </ContentSection>
    </main>
  );
}
