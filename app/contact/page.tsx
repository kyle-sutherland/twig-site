import Image from "next/image";
import ContentSection from "../components/ContentSection";
import Bilingual from "../components/Bilingual";

export default function ContactPage() {
  return (
    <main>
      <ContentSection variant="grey">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-12">
            <Image
              src="/logo/twig-logo-transparent.png"
              alt="TWIG Logo"
              width={400}
              height={400}
              className="animate-fade-in"
            />
          </div>

          <h1 className="heading text-4xl md:text-6xl mb-8">Contact</h1>

          <Bilingual
            en={
              <div className="text-lg space-y-6 mb-12">
                <p>
                  Got questions about TWIG, your work conditions or simply want to get in touch? Reach out via our{" "}
                  <a
                    href="https://www.facebook.com/TreeWorkersIndustrialGroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black/70"
                  >
                    Facebook page
                  </a>
                  ,{" "}
                  <a
                    href="https://www.instagram.com/tree_workers_industrial_group/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black/70"
                  >
                    Instagram
                  </a>
                  , or email us at{" "}
                  <a
                    href="mailto:treeworkersindustrialgroup@gmail.com"
                    className="underline hover:text-black/70"
                  >
                    treeworkersindustrialgroup@gmail.com
                  </a>
                  .
                </p>
                <p>
                  Wanna become a member? Fill out{" "}
                  <a
                    href="https://forms.gle/cxuJdMJtgmm9QQU89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black/70"
                  >
                    this form
                  </a>
                  .
                </p>
              </div>
            }
            fr={
              <div className="text-lg space-y-6 mb-12">
                <p>
                  Tu as des questions sur TWIG, tes conditions de travail ou tu veux simplement prendre contact? Contacte-nous via{" "}
                  <a
                    href="https://www.facebook.com/TreeWorkersIndustrialGroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black/70"
                  >
                    notre page Facebook
                  </a>
                  ,{" "}
                  <a
                    href="https://www.instagram.com/tree_workers_industrial_group/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black/70"
                  >
                    Instagram
                  </a>
                  , ou envoie-nous un courriel à{" "}
                  <a
                    href="mailto:treeworkersindustrialgroup@gmail.com"
                    className="underline hover:text-black/70"
                  >
                    treeworkersindustrialgroup@gmail.com
                  </a>
                  .
                </p>
                <p>
                  Tu veux devenir membre? Remplis{" "}
                  <a
                    href="https://forms.gle/cxuJdMJtgmm9QQU89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black/70"
                  >
                    ce formulaire
                  </a>
                  .
                </p>
              </div>
            }
          />
        </div>
      </ContentSection>
    </main>
  );
}
