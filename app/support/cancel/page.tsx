import ContentSection from "../../components/ContentSection";
import Bilingual from "../../components/Bilingual";
import { LinkButton } from "../../components/buttons";

export const metadata = {
  title: "Payment Cancelled | Paiement annulé",
};

export default function CancelPage() {
  return (
    <main>
      <ContentSection variant="grey">
        <div className="max-w-2xl mx-auto text-center py-12">
          <h1 className="heading text-4xl md:text-5xl mb-6 text-slate-950">
            <Bilingual en="Payment Cancelled" fr="Paiement annulé" />
          </h1>

          <div className="text-lg text-gray-700 mb-8">
            <Bilingual
              en={
                <p>
                  No payment was taken. You can try again whenever you&rsquo;re ready —
                  every contribution makes a difference for workers in the bush.
                </p>
              }
              fr={
                <p>
                  Aucun paiement n&rsquo;a été effectué. Vous pouvez réessayer quand vous
                  le souhaitez — chaque contribution fait une différence pour les
                  travailleurs dans la forêt.
                </p>
              }
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/support" text="Try Again" />
            <LinkButton href="/" text="Return Home" />
          </div>
        </div>
      </ContentSection>
    </main>
  );
}
