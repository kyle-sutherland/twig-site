import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import ContentSection from "../components/ContentSection";
import FacebookButton from "../components/facebook-button";
import InstagramButton from "../components/instagram-button";

export default function ContactPage() {
  return (
    <main>
      <PageHero title={{ en: "Contact", fr: "Contactez-nous" }} />

      <ContentSection variant="green">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading text-3xl md:text-5xl mb-6">Get in Touch</h2>
            <p className="text-lg mb-6">
              Got questions about TWIG, your work conditions or simply want to
              get in touch?
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="heading text-xl mb-2">Email</h3>
                <a
                  href="mailto:treeworkersindustrialgroup@gmail.com"
                  className="text-lg hover:underline"
                >
                  treeworkersindustrialgroup@gmail.com
                </a>
              </div>

              <div>
                <h3 className="heading text-xl mb-2">Social Media</h3>
                <div className="flex space-x-4">
                  <FacebookButton href="https://www.facebook.com/TreeWorkersIndustrialGroup" />
                  <InstagramButton href="https://www.instagram.com/tree_workers_industrial_group/" />
                </div>
              </div>

              <div>
                <h3 className="heading text-xl mb-2">Become a Member</h3>
                <p className="text-lg mb-3">Wanna become a member?</p>
                <a
                  href="https://forms.gle/cxuJdMJtgmm9QQU89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/0 outline outline-2 px-6 py-3 text-lg outline-offset-0 outline-white hover:text-slate-950 hover:bg-white transition-colors"
                >
                  Join TWIG
                </a>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6 mt-8">
              <p className="text-lg mb-2">* * * En français * * *</p>
            </div>

            <h2 className="heading text-3xl md:text-5xl mb-6 mt-6">
              Prenez contact
            </h2>
            <p className="text-lg mb-6">
              Tu as des questions sur TWIG, tes conditions de travail ou tu
              veux simplement prendre contact?
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="heading text-xl mb-2">Courriel</h3>
                <a
                  href="mailto:treeworkersindustrialgroup@gmail.com"
                  className="text-lg hover:underline"
                >
                  treeworkersindustrialgroup@gmail.com
                </a>
              </div>

              <div>
                <h3 className="heading text-xl mb-2">Réseaux sociaux</h3>
                <div className="flex space-x-4">
                  <FacebookButton href="https://www.facebook.com/TreeWorkersIndustrialGroup" />
                  <InstagramButton href="https://www.instagram.com/tree_workers_industrial_group/" />
                </div>
              </div>

              <div>
                <h3 className="heading text-xl mb-2">Devenir membre</h3>
                <p className="text-lg mb-3">Tu veux devenir membre?</p>
                <a
                  href="https://forms.gle/cxuJdMJtgmm9QQU89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/0 outline outline-2 px-6 py-3 text-lg outline-offset-0 outline-white hover:text-slate-950 hover:bg-white transition-colors"
                >
                  Rejoindre TWIG
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/logo/twig-logo-transparent-white.png"
              alt="TWIG Logo"
              width={400}
              height={400}
              className="animate-fade-in"
            />
          </div>
        </div>
      </ContentSection>
    </main>
  );
}
