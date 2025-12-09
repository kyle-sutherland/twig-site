import Link from "next/link";
import PageHero from "../components/PageHero";
import ContentSection from "../components/ContentSection";
import { LinkButton } from "../components/buttons";

export default function RightsHubPage() {
  return (
    <main>
      <PageHero
        title={{
          en: "Know Your Rights",
          fr: "Connaissez vos droits",
        }}
      />

      <ContentSection variant="green">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading text-3xl md:text-5xl mb-6">
            Employment Standards for Tree Workers
          </h2>
          <p className="text-lg mb-6">
            When you work in so-called Canada, you are entitled to minimal work
            conditions. These vary from province to province, and employment
            standards are not the same across the country.
          </p>
          <p className="text-lg mb-6">
            It is crucial to keep track daily of the trees you plant, the piece
            rates paid, hours worked, and any deductions made. Documentation is
            your strongest tool when enforcing your rights.
          </p>

          <div className="border-t border-white/20 pt-6 mt-8 mb-6">
            <p className="text-lg mb-2">* * * En français * * *</p>
          </div>

          <p className="text-lg mb-6">
            Lorsque vous travaillez dans le soi-disant Canada, vous avez droit à
            des conditions de travail minimales. Celles-ci varient d'une
            province à l'autre, et les normes d'emploi ne sont pas les mêmes
            dans tout le pays.
          </p>
          <p className="text-lg">
            Il est crucial de suivre quotidiennement les arbres que vous
            plantez, les tarifs à la pièce payés, les heures travaillées et
            toute déduction effectuée. La documentation est votre meilleur outil
            pour faire respecter vos droits.
          </p>
        </div>
      </ContentSection>

      <ContentSection variant="grey">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl mb-8 text-center text-gray-900">
            Select Your Province / Choisissez votre province
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* BC Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="heading text-2xl text-gray-900 mb-4">
                British Columbia
              </h3>
              <p className="heading text-xl text-gray-700 mb-4">
                Colombie-Britannique
              </p>
              <p className="text-gray-700 mb-6">
                Comprehensive employment standards information for tree workers
                in BC.
              </p>
              <Link
                href="/rights/bc"
                className="inline-block bg-slate-950 outline outline-2 px-6 py-3 text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Alberta Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="heading text-2xl text-gray-900 mb-4">Alberta</h3>
              <p className="heading text-xl text-gray-700 mb-4">Alberta</p>
              <p className="text-gray-700 mb-6">
                Employment standards and worker protections specific to Alberta.
              </p>
              <Link
                href="/rights/alberta"
                className="inline-block bg-slate-950 outline outline-2 px-6 py-3 text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Quebec Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="heading text-2xl text-gray-900 mb-4">Quebec</h3>
              <p className="heading text-xl text-gray-700 mb-4">Québec</p>
              <p className="text-gray-700 mb-6">
                Information coming soon. Nous recherchons des contributeurs.
              </p>
              <Link
                href="/rights/quebec"
                className="inline-block bg-slate-950 outline outline-2 px-6 py-3 text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 transition-colors"
              >
                À venir →
              </Link>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading text-3xl md:text-4xl mb-6">
            Want to Help Add Your Province?
          </h2>
          <p className="text-lg mb-8">
            We're working to compile comprehensive rights information for all
            provinces where tree planting occurs. If you have knowledge of
            employment standards in your region or can help with translations,
            we'd love to hear from you.
          </p>
          <a
            href="mailto:treeworkersindustrialgroup@gmail.com"
            className="inline-block bg-white/0 outline outline-2 px-8 py-4 text-xl outline-offset-0 outline-white hover:text-slate-950 hover:bg-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </ContentSection>
    </main>
  );
}
