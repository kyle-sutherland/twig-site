import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import ContentSection from "@/app/components/ContentSection";
import { getProvinceBySlug } from "@/app/data/rightsContent";

export default function AlbertaRightsPage() {
  const albertaData = getProvinceBySlug("alberta");

  if (!albertaData) {
    return <div>Content not found</div>;
  }

  return (
    <main>
      <PageHero title="Know Your Rights - Alberta" height="short" />

      <ContentSection variant="white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/rights"
            className="text-green-700 hover:underline inline-flex items-center mb-8"
          >
            ← Back to all provinces
          </Link>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-800">{albertaData.intro.en}</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="grey">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl mb-6 text-gray-900">
            Government Resources
          </h2>
          <div className="space-y-4">
            {albertaData.governmentLinks.map((link, index) => (
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
            Non-Governmental Resources
          </h2>
          <div className="space-y-4">
            {albertaData.ngoLinks.map((link, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-lg">
                <h3 className="heading text-xl mb-2">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {link.title} →
                  </a>
                </h3>
                <p>{link.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="grey">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl mb-8 text-gray-900">
            Key Employment Standards
          </h2>
          <div className="space-y-6">
            {albertaData.standards.map((standard, index) => (
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
            Questions About Your Rights?
          </h2>
          <p className="text-lg mb-8">
            If you're facing issues with employment standards violations or have
            questions about your specific situation, get in touch with TWIG. We
            can help connect you with resources and support.
          </p>
          <a
            href="mailto:treeworkersindustrialgroup@gmail.com"
            className="inline-block bg-white/0 outline outline-2 px-8 py-4 text-xl outline-offset-0 outline-white hover:text-slate-950 hover:bg-white transition-colors"
          >
            Contact TWIG
          </a>
        </div>
      </ContentSection>
    </main>
  );
}
