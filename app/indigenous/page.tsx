import PageHero from "../components/PageHero";
import ContentSection from "../components/ContentSection";
import PDFCard from "../components/PDFCard";
import Bilingual from "../components/Bilingual";

export default function IndigenousSolidarityPage() {
  return (
    <main>
      <PageHero
        title={{
          en: "Indigenous Solidarity",
          fr: "Solidarité Autochtone",
        }}
      />

      <ContentSection variant="green">
        <div className="max-w-4xl mx-auto">
          <Bilingual
            en={
              <>
                <h2 className="heading text-3xl md:text-5xl mb-6">
                  Our Commitment to Indigenous Solidarity
                </h2>
                <p className="text-lg mb-6">
                  The silviculture industry operates on unceded Indigenous territories
                  across so-called Canada. The Tree Workers' Industrial Group
                  recognizes that meaningful worker solidarity must include solidarity
                  with Indigenous peoples whose lands we work on.
                </p>
                <p className="text-lg mb-6">
                  TWIG is committed to:
                </p>
                <ul className="list-disc list-inside text-lg space-y-3 ml-4 mb-8">
                  <li>Supporting Indigenous sovereignty and land rights</li>
                  <li>
                    Educating tree workers about the colonial history of forestry
                  </li>
                  <li>
                    Respecting Indigenous protocols and relationships to the land
                  </li>
                  <li>Amplifying Indigenous voices in environmental justice</li>
                  <li>
                    Building reciprocal relationships with Indigenous communities
                  </li>
                </ul>
              </>
            }
            fr={
              <>
                <h2 className="heading text-3xl md:text-5xl mb-6">
                  Notre engagement envers la solidarité autochtone
                </h2>
                <p className="text-lg mb-6">
                  L'industrie sylvicole opère sur des territoires autochtones non
                  cédés à travers le soi-disant Canada. Le Groupe industriel des
                  travailleuses et travailleurs du reboisement reconnaît qu'une
                  véritable solidarité ouvrière doit inclure la solidarité avec les
                  peuples autochtones dont nous travaillons sur les terres.
                </p>
                <p className="text-lg mb-6">
                  TWIG s'engage à :
                </p>
                <ul className="list-disc list-inside text-lg space-y-3 ml-4 mb-8">
                  <li>Soutenir la souveraineté autochtone et les droits territoriaux</li>
                  <li>
                    Sensibiliser les travailleuses et travailleurs forestiers à
                    l'histoire coloniale de la foresterie
                  </li>
                  <li>
                    Respecter les protocoles autochtones et les relations au territoire
                  </li>
                  <li>
                    Amplifier les voix autochtones en matière de justice environnementale
                  </li>
                  <li>
                    Bâtir des relations réciproques avec les communautés autochtones
                  </li>
                </ul>
              </>
            }
          />
        </div>
      </ContentSection>

      <ContentSection variant="grey">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl mb-8 text-center text-gray-900">
            <Bilingual en="Resource" fr="Ressource" />
          </h2>
          <p className="text-gray-900 text-lg mb-8 text-center">
            <Bilingual
              en="Download our Indigenous Solidarity zine to learn more about the
              intersection of worker rights and Indigenous sovereignty in the
              forestry industry."
              fr="Téléchargez notre zine Solidarité Autochtone pour en apprendre
              davantage sur les liens entre la solidarité ouvrière et la
              souveraineté autochtone dans l'industrie sylvicole."
            />
          </p>
          <div className="flex justify-center">
            <div className="max-w-sm">
              <PDFCard
                coverImage="/logo/twig-logo-transparent-white.png"
                title="Indigenous Solidarity 2021"
                description="A resource exploring the connections between worker solidarity and Indigenous land rights in the silviculture industry."
                descriptionFr="Une ressource explorant les liens entre la solidarité ouvrière et les droits territoriaux autochtones dans l'industrie sylvicole. (Ce document n'est actuellement disponible qu'en anglais.)"
                pdfUrl="/pdfs/indigenous-solidarity-2021.pdf"
                fileSize="4.2 MB"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="green">
        <div className="max-w-4xl mx-auto text-center">
          <Bilingual
            en={
              <>
                <h2 className="heading text-3xl md:text-4xl mb-6">Learn More</h2>
                <p className="text-lg mb-6">
                  Indigenous solidarity is an ongoing commitment that requires
                  listening, learning, and taking action. If you want to get involved
                  or learn more about TWIG's Indigenous solidarity work, get in touch.
                </p>
                <a
                  href="mailto:treeworkersindustrialgroup@gmail.com"
                  className="inline-block bg-white/0 outline-2 px-8 py-4 text-xl outline-offset-0 outline-white hover:text-slate-950 hover:bg-white transition-colors"
                >
                  Contact Us
                </a>
              </>
            }
            fr={
              <>
                <h2 className="heading text-3xl md:text-4xl mb-6">En savoir plus</h2>
                <p className="text-lg mb-6">
                  La solidarité autochtone est un engagement continu qui exige
                  l'écoute, l'apprentissage et l'action. Si vous souhaitez vous
                  impliquer ou en apprendre davantage sur le travail de solidarité
                  autochtone de TWIG, contactez-nous.
                </p>
                <a
                  href="mailto:treeworkersindustrialgroup@gmail.com"
                  className="inline-block bg-white/0 outline-2 px-8 py-4 text-xl outline-offset-0 outline-white hover:text-slate-950 hover:bg-white transition-colors"
                >
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
