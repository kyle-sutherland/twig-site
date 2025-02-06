import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative h-screen overflow-hidden" id="banner">
        <Image
          src="/background.jpg"
          alt="Misty mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40">
          <div className="relative h-full flex flex-col items-center justify-center">
            {" "}
            <Image
              src="/logo-large.png"
              alt="TUFF Logo"
              width={400}
              height={400}
              className="animate-fade-in mb-8"
            />
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay text-center max-w-2xl px-4">
              celebrating treeplanter creativity since 2020
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
      <div className="mx-auto bg-green"></div>
    </main>
  );
}
