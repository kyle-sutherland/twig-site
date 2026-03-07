import PageHero from "../components/PageHero";
import ContentSection from "../components/ContentSection";
import Bilingual from "../components/Bilingual";
import SupportForm from "../components/SupportForm";

export const metadata = {
  title: "Support TWIG | Soutenir TWIG",
};

export default function SupportPage() {
  return (
    <main>
      <PageHero
        title={{ en: "Support TWIG", fr: "Soutenir TWIG" }}
        height="short"
      />

      <ContentSection variant="green">
        <div className="max-w-4xl mx-auto">
          <Bilingual
            en={
              <>
                <h2 className="heading text-3xl md:text-5xl mb-6">
                  Help Build Worker Power in the Bush
                </h2>
                <p className="text-lg mb-4">
                  TWIG is a volunteer-run organization fighting for silviculture workers
                  across Canada. We have no corporate backers — only the support of workers
                  and allies who believe in fair conditions in the bush.
                </p>
                <p className="text-lg">
                  A donation or membership directly funds our advocacy work, publications,
                  and outreach to workers in remote camps and contract crews.
                </p>
              </>
            }
            fr={
              <>
                <h2 className="heading text-3xl md:text-5xl mb-6">
                  Aidez à bâtir le pouvoir ouvrier dans la forêt
                </h2>
                <p className="text-lg mb-4">
                  TWIG est une organisation bénévole qui lutte pour les travailleurs
                  en sylviculture partout au Canada. Nous n'avons pas de bailleurs de
                  fonds corporatifs — seulement le soutien de travailleuses, travailleurs
                  et alliés qui croient en des conditions équitables dans la forêt.
                </p>
                <p className="text-lg">
                  Un don ou une adhésion finance directement nos activités de défense
                  des droits, nos publications et notre sensibilisation auprès des
                  travailleurs dans les camps éloignés et les équipes contractuelles.
                </p>
              </>
            }
          />
        </div>
      </ContentSection>

      <ContentSection variant="grey">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading text-3xl mb-8 text-slate-950 text-center">
            <Bilingual en="Choose How to Support" fr="Choisissez comment soutenir" />
          </h2>
          <SupportForm />
        </div>
      </ContentSection>

      <ContentSection variant="green">
        <div className="max-w-4xl mx-auto">
          <Bilingual
            en={
              <>
                <h2 className="heading text-2xl md:text-4xl mb-6">What Your Support Does</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Funds Fireweed zine printing and distribution to remote camps</li>
                </ul>
              </>
            }
            fr={
              <>
                <h2 className="heading text-2xl md:text-4xl mb-6">Ce que votre soutien accomplit</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Finance l'impression et la distribution du zine Fireweed dans les camps éloignés</li>
                </ul>
              </>
            }
          />
        </div>
      </ContentSection>
    </main>
  );
}
