import Image from "next/image";
import ContactForm from "./components/contact-form";
import Link from "next/link";
import FacebookButton from "./components/facebook-button";
import InstagramButton from "./components/instagram-button";

export default function Home() {
  return (
    <main>
      <div className="relative h-screen overflow-hidden" id="banner">
        <Image
          src="/photo/IMG_1832.jpeg"
          alt="Misty mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10">
          <div className="relative h-full flex flex-col items-center justify-center">
            {" "}
            <Image
              src="/logo/twig-logo-transparent-white.png"
              alt="TUFF Logo"
              width={400}
              height={400}
              className="animate-fade-in mb-16"
            />
            <p className="heading text-2xl md:text-7xl mb-8 animate-fade-in-delay text-center px-4">
              TREE WORKER INDUSTRIAL GROUP
            </p>
            <div className="animate-bounce mt-16">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center">
        <div className="green-section">
          <div className="max-w-7xl flex flex-col md:flex-row mx-auto px-4 py-24 text-lg space-x-6">
            <div className="w-3/4">
              <p className="pb-10">
                Tree Workers’ Industrial Group is a grassroots advocacy group
                that is pushing for worker representation in the silviculture
                industry. Founded in October of 2018, T.W.I.G. has grown to
                include members spanning the range of colonially-called Canada
                and has been involved in collective action at multiple planting
                companies – advocating and promoting the legal rights of
                workers, developing policies and awareness of sexual violence
                for tree-planting companies, and returning over $60,000 of
                stolen wages to the pockets of workers.
              </p>
              <p className="pb-10">
                Our mission is to support workers from the bottom up and to
                build solidarity and representation across company lines. We are
                volunteer-run and are spearheading a sectoral culture shift
                toward worker empowerment and transparency. We aim to educate
                and empower workers to both support each other and be critical
                of the colonial, patriarchal and capitalist aspects of this
                industry and the harm they cause.
              </p>
              <p className="pb-10">* * * En français * * *</p>
              <p className="pb-10">
                Tree Workers’ Industrial Group (Groupe industriel des
                travailleuses et travailleurs du reboisement) est un groupe de
                défense d’intérêts par et pour les travailleuses et travailleurs
                de l’industrie silvicole. Fondé en octobre 2018, TWIG a depuis
                réuni des membres dans l’ensemble du soi-disant Canada et a été
                impliqué dans des actions collectives dans plusieurs compagnies
                de reboisement – faisant connaître et reconnaître les droits des
                travailleuses et travailleurs, développant des politiques et une
                sensibilisation à la violence sexuelle dans l’industrie, en plus
                de remettre plus de 60 000 $ en salaires volés dans les poches
                de travailleuses et travailleurs !
              </p>
              <p className="pb-10">
                Notre mission est de soutenir les travailleuses et travailleurs
                à partir de la base et de construire une solidarité et une
                représentation au-delà des frontières entre les entreprises.
                Notre groupe est autogéré bénévolement par ses membres et nous
                souhaitons être le fer de lance d’un changement de culture
                sectoriel encourageant la transparence et la reprise de pouvoir
                par les travailleuses et travailleurs. Nous visons à se
                co-éduquer et à nous donner les moyens, en tant que
                travailleuses et travailleurs, de nous soutenir mutuellement et
                de critiquer les aspects coloniaux, patriarcaux et capitalistes
                de cette industrie, notamment en reconnaissant les dommages
                qu’ils causent.
              </p>
            </div>
            <div className="flex w-1/4 items-center justify-center">
              <Image
                src="/logo/twig-logo-transparent-white.png"
                alt="Twig logo"
                width={300}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="h-80 w-full">
          <Image
            src="/photo/01512.jpg"
            alt="black and white photo of tree planting bags"
            className="w-full h-full object-cover"
            width={1050}
            height={500}
          />
        </div>
        <div className="text-gray-950 grey-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-12 lg:py-16">
              <div className="pb-4">
                <p className="heading md:text-7xl pb-2">
                  WANT TO BECOME A MEMBER?
                </p>
                <p className="text-lg">
                  Have questions about... blah blah blah let's get in touch
                  about it! Some one will reach out to within a week or an
                  undetermined about of time in the planting season
                </p>
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-10 space-x-4 space-y-4">
                <div className="lg:w-1/2">
                  <ContactForm></ContactForm>
                </div>
                <div>
                  <Image
                    src="/graphic/credit-print-from-stef-galltheythem_shovel-print-inverted.png"
                    alt="shovel print"
                    width={500}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white">
          <div className="py-12 items-center justify-center flex flex-col lg:flex-row space-y-6 lg:space-x-10 lg:space-y-0">
            <div>
              <Image
                src="/logo/twig-logo-transparent-white.png"
                alt="twig logo"
                width={300}
                height={300}
              />
            </div>
            <div className="z-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
              <FacebookButton href="https://www.facebook.com" />
              <InstagramButton href="https://www.instagram.com" />
              <Link href="mailto:treeworkersindustrialgroup@gmail.com">
                treeworkersindustrialgroup@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
