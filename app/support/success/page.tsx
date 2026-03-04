import ContentSection from "../../components/ContentSection";
import Bilingual from "../../components/Bilingual";
import { LinkButton } from "../../components/buttons";

export const metadata = {
  title: "Thank You | Merci",
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  await searchParams; // session_id available for future use (e.g., session lookup)

  return (
    <main>
      <ContentSection variant="grey">
        <div className="max-w-2xl mx-auto text-center py-12">
          {/* Checkmark icon */}
          <svg
            className="w-16 h-16 mx-auto mb-6 text-green-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h1 className="heading text-4xl md:text-5xl mb-6 text-slate-950">
            <Bilingual en="Thank you!" fr="Merci !" />
          </h1>

          <div className="text-lg text-gray-700 mb-8">
            <Bilingual
              en={
                <p>
                  Your payment was successful. You&rsquo;ll receive a confirmation
                  email from Stripe shortly. Your support keeps TWIG independent
                  and helps workers in the bush.
                </p>
              }
              fr={
                <p>
                  Votre paiement a été effectué avec succès. Vous recevrez un courriel
                  de confirmation de Stripe sous peu. Votre soutien maintient TWIG
                  indépendant et aide les travailleurs dans la forêt.
                </p>
              }
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/support" text="Make Another Donation" />
            <LinkButton href="/" text="Return Home" />
          </div>
        </div>
      </ContentSection>
    </main>
  );
}
