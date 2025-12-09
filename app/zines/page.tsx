import PageHero from "../components/PageHero";
import ContentSection from "../components/ContentSection";
import PDFCard from "../components/PDFCard";
import { publications, getPublicationsByVolume } from "../data/publications";

export default function ZinesPage() {
  const volume1 = getPublicationsByVolume(1);
  const volume2 = getPublicationsByVolume(2);

  return (
    <main>
      <PageHero
        title={{
          en: "Fireweed Publications",
          fr: "Publications Fireweed",
        }}
      />

      <ContentSection variant="green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading text-3xl md:text-5xl mb-6">
            Fireweed: Educational Resources for Tree Workers
          </h2>
          <p className="text-lg mb-6">
            Fireweed is TWIG's publication series, offering comprehensive
            resources on workers' rights, mental health, harm reduction, and
            building safer, more equitable work environments in the silviculture
            industry.
          </p>

          <div className="border-t border-white/20 pt-6 mt-8 mb-6">
            <p className="text-lg mb-2">* * * En français * * *</p>
          </div>

          <p className="text-lg">
            Fireweed est la série de publications de TWIG, offrant des
            ressources complètes sur les droits des travailleurs, la santé
            mentale, la réduction des méfaits et la création d'environnements de
            travail plus sûrs et équitables dans l'industrie sylvicole.
          </p>
        </div>
      </ContentSection>

      <ContentSection variant="grey">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading text-4xl md:text-5xl mb-8 text-center text-gray-900">
            Volume 1 (2021)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volume1.map((pub) => (
              <PDFCard
                key={pub.id}
                coverImage={pub.coverImage}
                title={pub.title}
                description={pub.description}
                pdfUrl={pub.pdfUrl}
                fileSize={pub.fileSize}
              />
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="green">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading text-4xl md:text-5xl mb-8 text-center">
            Volume 2 (2022)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {volume2.map((pub) => (
              <PDFCard
                key={pub.id}
                coverImage={pub.coverImage}
                title={pub.title}
                description={pub.description}
                pdfUrl={pub.pdfUrl}
                fileSize={pub.fileSize}
              />
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="grey">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading text-3xl md:text-4xl mb-6 text-gray-900">
            Want to Contribute?
          </h2>
          <p className="text-gray-900 text-lg mb-6">
            Fireweed is created by and for tree workers. If you have knowledge
            to share, experiences to document, or skills in writing, design, or
            translation, we'd love to hear from you.
          </p>
          <p className="text-gray-900 text-lg mb-8">
            Future volumes could cover topics like organizing strategies,
            environmental justice, equipment guides, or regional-specific
            information. What would you like to see?
          </p>
          <a
            href="mailto:treeworkersindustrialgroup@gmail.com"
            className="inline-block bg-slate-950 outline outline-2 px-8 py-4 text-xl text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </ContentSection>
    </main>
  );
}
