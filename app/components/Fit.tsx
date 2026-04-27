import Image from "next/image";

const smallPhotos = [
  "/images/TheKilroyProject-51.jpg",
  "/images/zsambek_wedding_styled_shoot-044_web.jpg",
  "/images/TheKilroyProject-295.jpg",
  "/images/Nicol%26Roli-543.jpg",
];

export default function Fit() {
  return (
    <section className="bg-[#F5F3ED] overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[680px] gap-2">

        {/* Bal: nagy fotó */}
        <div className="relative w-full md:w-[42%] h-72 md:h-auto shrink-0">
          <Image
            src="/images/zsambek_wedding_styled_shoot-077_web.jpg"
            alt="Esküvői dekoráció"
            fill
            className="object-cover object-center"
            sizes="42vw"
          />
        </div>

        {/* Jobb: 4 kis fotó + szöveg */}
        <div className="flex flex-col flex-1">

          {/* 4 kis fotó sor */}
          <div className="flex h-44 md:h-52 shrink-0 gap-2">
            {smallPhotos.map((src, i) => (
              <div key={i} className="relative flex-1 overflow-hidden">
                <Image
                  src={src}
                  alt="Esküvői fotó"
                  fill
                  className="object-cover object-center"
                  sizes="15vw"
                />
              </div>
            ))}
          </div>

          {/* Szöveg */}
          <div className="flex flex-col justify-center flex-1 px-10 md:px-14 py-10 md:py-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-[#363025] text-3xl md:text-4xl font-light mb-8 leading-snug">
              Tökéletesen összeillünk, ha…
            </h2>

            <div className="space-y-5">
              <p className="font-[family-name:var(--font-cormorant)] text-[#363025]/75 text-base md:text-[17px] italic leading-relaxed">
                Nem csak egy szervezőt keresel, hanem valakit, aki valóban átérzi, milyen napot álmodtál meg,
                és a legapróbb részletekre is úgy figyel, mintha a saját esküvőjét tervezné.
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-[#363025]/75 text-base md:text-[17px] italic leading-relaxed">
                Nem a sablonos megoldásokban hiszel, hanem abban a természetes harmóniában,
                ahol a stílus, az érzelem és az élmény egymásra talál.
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-[#363025]/75 text-base md:text-[17px] italic leading-relaxed">
                Szeretnéd, hogy a napotok minden pillanata emlékeztessen arra, miért egymást
                választottatok — a kimondott igenben és a mindennapokban is.
              </p>
            </div>

            <a
              href="/szolgaltatasok"
              className="inline-block mt-8 self-start border border-[#363025]/50 text-[#363025] font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase px-7 py-3 hover:bg-[#363025] hover:text-white hover:border-[#363025] transition-all duration-300"
            >
              Ebben tudok nektek segíteni
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
