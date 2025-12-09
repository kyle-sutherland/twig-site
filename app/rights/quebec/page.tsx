import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import ContentSection from "@/app/components/ContentSection";
import { getProvinceBySlug } from "@/app/data/rightsContent";

export default function QuebecRightsPage() {
  const quebecData = getProvinceBySlug("quebec");

  if (!quebecData) {
    return <div>Content not found</div>;
  }

  return (
    <main>
      <PageHero
        title={{
          en: "Know Your Rights - Quebec",
          fr: "Connaissez vos droits - Québec",
        }}
        height="short"
      />

      <ContentSection variant="white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/rights"
            className="text-green-700 hover:underline inline-flex items-center mb-8"
          >
            ← Back to all provinces / Retour
          </Link>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-800">{quebecData.intro.en}</p>
          </div>
          <div className="prose prose-lg max-w-none mb-12 pt-6 border-t border-gray-300">
            <p className="text-lg text-gray-800">{quebecData.intro.fr}</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="grey">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl mb-6 text-gray-900">
            Government Resources / Ressources gouvernementales
          </h2>
          <div className="space-y-4">
            {quebecData.governmentLinks.map((link, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="heading text-xl text-gray-900 mb-2">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:underline"
                  >
                    {link.title} →
                  </a>
                </h3>
                <p className="text-gray-700">{link.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="green">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl mb-6 text-center">
            Coming Soon / À venir
          </h2>
          <div className="space-y-6">
            {quebecData.standards.map((standard, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-lg">
                <h3 className="heading text-2xl mb-3">{standard.title}</h3>
                <p className="text-lg">{standard.content}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="grey">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading text-3xl md:text-4xl mb-6 text-gray-900">
            Can You Help? / Pouvez-vous aider?
          </h2>
          <p className="text-gray-900 text-lg mb-4">
            We need contributors who understand Quebec employment law or can
            help translate content into French.
          </p>
          <p className="text-gray-900 text-lg mb-8">
            Nous avons besoin de contributeurs qui comprennent le droit du
            travail québécois ou qui peuvent aider à traduire le contenu en
            français.
          </p>
          <a
            href="mailto:treeworkersindustrialgroup@gmail.com"
            className="inline-block bg-slate-950 outline outline-2 px-8 py-4 text-xl text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors"
          >
            Contact Us / Contactez-nous
          </a>
        </div>
      </ContentSection>
    </main>
  );
}
