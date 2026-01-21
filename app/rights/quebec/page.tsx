import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import ContentSection from "@/app/components/ContentSection";
import Bilingual from "@/app/components/Bilingual";
import { getProvinceBySlug } from "@/app/data/rightsContent";

export default function QuebecRightsPage() {
  const quebecData = getProvinceBySlug("quebec");

  if (!quebecData) {
    return <div>Contenu non trouvé</div>;
  }

  return (
    <main>
      <PageHero title="Connaissez vos droits - Québec" height="short" />

      <ContentSection variant="white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/rights"
            className="text-green-700 hover:underline inline-flex items-center mb-8"
          >
            ← Retour à toutes les provinces
          </Link>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-800">{quebecData.intro.fr}</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="grey">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl mb-6 text-gray-900">
            Ressources gouvernementales
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
          <h2 className="heading text-3xl md:text-4xl mb-6">
            Ressources non gouvernementales
          </h2>
          <div className="space-y-4">
            {quebecData.ngoLinks.map((link, index) => (
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

      <ContentSection variant="grey">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl mb-8 text-gray-900">
            Normes du travail essentielles
          </h2>
          <div className="space-y-6">
            {quebecData.standards.map((standard, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="heading text-2xl text-gray-900 mb-3">
                  {standard.title}
                </h3>
                <div
                  className="text-gray-800 text-lg"
                  dangerouslySetInnerHTML={{ __html: standard.content }}
                />
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading text-3xl md:text-4xl mb-6">
            Des questions sur vos droits?
          </h2>
          <p className="text-lg mb-8">
            Si vous faites face à des violations des normes du travail ou avez
            des questions sur votre situation spécifique, contactez TWIG. Nous
            pouvons vous aider à vous connecter avec des ressources et du
            soutien.
          </p>
          <a
            href="mailto:treeworkersindustrialgroup@gmail.com"
            className="inline-block bg-white/0 outline outline-2 px-8 py-4 text-xl outline-offset-0 outline-white hover:text-slate-950 hover:bg-white transition-colors"
          >
            Contactez TWIG
          </a>
        </div>
      </ContentSection>
    </main>
  );
}
