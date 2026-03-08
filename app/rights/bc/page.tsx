import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import ContentSection from "@/app/components/ContentSection";
import Bilingual from "@/app/components/Bilingual";
import { getProvinceBySlug } from "@/app/data/rightsContent";

export default function BCRightsPage() {
  const data = getProvinceBySlug("bc");

  if (!data) {
    return <div>Content not found</div>;
  }

  return (
    <main>
      <PageHero
        title={{ en: "Know Your Rights — British Columbia", fr: "Connaissez vos droits — Colombie-Britannique" }}
        height="short"
      />

      <ContentSection variant="white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/rights"
            className="text-green-700 hover:underline inline-flex items-center mb-8"
          >
            <Bilingual en="← Back to all provinces" fr="← Retour à toutes les provinces" />
          </Link>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-800">
              <Bilingual en={data.intro.en} fr={data.intro.fr} />
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="grey">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl mb-6 text-gray-900">
            <Bilingual en="Government Resources" fr="Ressources gouvernementales" />
          </h2>
          <div className="space-y-4">
            {data.governmentLinks.map((link, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="heading text-xl text-gray-900 mb-2">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:underline"
                  >
                    <Bilingual en={`${link.title.en} →`} fr={`${link.title.fr} →`} />
                  </a>
                </h3>
                <p className="text-gray-700">
                  <Bilingual en={link.description.en} fr={link.description.fr} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="green">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl mb-6">
            <Bilingual en="Non-Governmental Resources" fr="Ressources non gouvernementales" />
          </h2>
          <div className="space-y-4">
            {data.ngoLinks.map((link, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="heading text-xl text-gray-900 mb-2">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:underline"
                  >
                    <Bilingual en={`${link.title.en} →`} fr={`${link.title.fr} →`} />
                  </a>
                </h3>
                <p className="text-gray-700">
                  <Bilingual en={link.description.en} fr={link.description.fr} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="grey">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl mb-8 text-gray-900">
            <Bilingual en="Key Employment Standards" fr="Normes d'emploi essentielles" />
          </h2>
          <div className="space-y-6">
            {data.standards.map((standard, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="heading text-2xl text-gray-900 mb-3">
                  <Bilingual en={standard.title.en} fr={standard.title.fr} />
                </h3>
                <Bilingual
                  en={<div className="text-gray-800 text-lg" dangerouslySetInnerHTML={{ __html: standard.content.en }} />}
                  fr={<div className="text-gray-800 text-lg" dangerouslySetInnerHTML={{ __html: standard.content.fr }} />}
                />
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading text-3xl md:text-4xl mb-6">
            <Bilingual en="Questions About Your Rights?" fr="Des questions sur vos droits ?" />
          </h2>
          <p className="text-lg mb-8">
            <Bilingual
              en="If you're facing issues with employment standards violations or have questions about your specific situation, get in touch with TWIG. We can help connect you with resources and support."
              fr="Si vous faites face à des violations des normes du travail ou avez des questions sur votre situation spécifique, contactez TWIG. Nous pouvons vous aider à vous connecter avec des ressources et du soutien."
            />
          </p>
          <a
            href="mailto:treeworkersindustrialgroup@gmail.com"
            className="inline-block bg-white/0 outline outline-2 px-8 py-4 text-xl outline-offset-0 outline-white hover:text-slate-950 hover:bg-white transition-colors"
          >
            <Bilingual en="Contact TWIG" fr="Contactez TWIG" />
          </a>
        </div>
      </ContentSection>
    </main>
  );
}
