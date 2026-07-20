import PageHero from '../components/PageHero';
import ContentSection from '../components/ContentSection';
import PDFCard from '../components/PDFCard';
import Bilingual from '../components/Bilingual';
import {
  getPublicationsByVolume,
  getFormattedTitle,
  getFormattedTitleFr,
} from '../data/publications';

export default function ZinesPage() {
  const volume1 = getPublicationsByVolume(1);
  const volume2 = getPublicationsByVolume(2);
  const volume3 = getPublicationsByVolume(3);

  return (
    <main>
      <PageHero
        title={{
          en: 'Fireweed Publications',
          fr: 'Publications Fireweed',
        }}
        backgroundImage='/photo/njbc.png'
      />

      <ContentSection variant='grey'>
        <div className='max-w-4xl mx-auto text-center'>
          <Bilingual
            en={
              <>
                <h2 className='heading text-3xl md:text-5xl mb-6 text-gray-900'>
                  Fireweed: The Planters' Zine!
                </h2>
                <p className='text-lg mb-6 text-gray-900'>
                  Fireweed is TWIG's zine series, offering informative resources
                  on workers' rights, mental health, harm reduction, and
                  building safer, more equitable work environments in the
                  silviculture industry.
                </p>
              </>
            }
            fr={
              <>
                <h2 className='heading text-3xl md:text-5xl mb-6 text-gray-900'>
                  Fireweed: Le Zine des Plantateurs!
                </h2>
                <p className='text-lg text-gray-900'>
                  Fireweed est la série de publications de TWIG, offrant des
                  ressources informatives sur les droits des travailleurs, la
                  santé mentale, la réduction des méfaits et la création
                  d'environnements de travail plus sûrs et équitables dans
                  l'industrie sylvicole.
                </p>
              </>
            }
          />
        </div>
      </ContentSection>

      <ContentSection variant='grey'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='heading text-4xl md:text-5xl mb-8 text-center text-gray-900'>
            Volume 3 (2025)
          </h2>
          <div className='flex justify-center max-w-2xl mx-auto'>
            {volume3.map((pub) => (
              <PDFCard
                key={pub.id}
                coverImage={pub.coverImage}
                title={getFormattedTitle(pub)}
                titleFr={getFormattedTitleFr(pub)}
                description={pub.description}
                descriptionFr={pub.descriptionFr}
                pdfUrl={pub.pdfUrl}
                pdfUrlFr={pub.pdfUrlFr}
                fileSize={pub.fileSize}
                fileSizeFr={pub.fileSizeFr}
                backgroundColor={pub.backgroundColor}
              />
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection variant='grey'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='heading text-4xl md:text-5xl mb-8 text-center text-gray-900'>
            Volume 2 (2022)
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto'>
            {volume2.map((pub) => (
              <PDFCard
                key={pub.id}
                coverImage={pub.coverImage}
                title={getFormattedTitle(pub)}
                titleFr={getFormattedTitleFr(pub)}
                description={pub.description}
                pdfUrl={pub.pdfUrl}
                pdfUrlFr={pub.pdfUrlFr}
                fileSize={pub.fileSize}
                fileSizeFr={pub.fileSizeFr}
                backgroundColor={pub.backgroundColor}
              />
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection variant='grey'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='heading text-4xl md:text-5xl mb-8 text-center text-gray-900'>
            Volume 1 (2021)
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
            {volume1.map((pub) => (
              <PDFCard
                key={pub.id}
                coverImage={pub.coverImage}
                title={getFormattedTitle(pub)}
                titleFr={getFormattedTitleFr(pub)}
                description={pub.description}
                pdfUrl={pub.pdfUrl}
                pdfUrlFr={pub.pdfUrlFr}
                fileSize={pub.fileSize}
                fileSizeFr={pub.fileSizeFr}
                backgroundColor={pub.backgroundColor}
              />
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection variant='grey'>
        <div className='max-w-4xl mx-auto text-center'>
          <Bilingual
            en={
              <>
                <h2 className='heading text-3xl md:text-4xl mb-6 text-gray-900'>
                  Want to Contribute?
                </h2>
                <p className='text-gray-900 text-lg mb-6'>
                  Fireweed is created by and for tree planters. If you have
                  knowledge to share, experiences to document, or skills in
                  writing, design, or translation, we'd love to hear from you.
                </p>
                <p className='text-gray-900 text-lg mb-8'>
                  Future volumes could cover topics like organizing strategies,
                  environmental justice, equipment guides, or regional-specific
                  information. What would you like to see?
                </p>
                <a
                  href='mailto:treeworkersindustrialgroup@gmail.com'
                  className='inline-block bg-slate-950 outline-2 px-8 py-4 text-xl text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors'>
                  Get in Touch
                </a>
              </>
            }
            fr={
              <>
                <h2 className='heading text-3xl md:text-4xl mb-6 text-gray-900'>
                  Vous voulez contribuer?
                </h2>
                <p className='text-gray-900 text-lg mb-6'>
                  Fireweed est créé par et pour les plantateurs d'arbres. Si
                  vous avez des connaissances à partager, des expériences à
                  documenter ou des compétences en rédaction, conception ou
                  traduction, nous serions ravis de vous entendre.
                </p>
                <p className='text-gray-900 text-lg mb-8'>
                  Les volumes futurs pourraient couvrir des sujets tels que les
                  stratégies d'organisation, la justice environnementale, les
                  guides d'équipement ou des informations spécifiques à une
                  région. Qu'aimeriez-vous voir?
                </p>
                <a
                  href='mailto:treeworkersindustrialgroup@gmail.com'
                  className='inline-block bg-slate-950 outline-2 px-8 py-4 text-xl text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors'>
                  Contactez-nous
                </a>
              </>
            }
          />
        </div>
      </ContentSection>
    </main>
  );
}
