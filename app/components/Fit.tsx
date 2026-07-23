import Image from "next/image";

export default function Fit() {
  return (
    <section className="bg-[#F5F3ED] overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[680px]">

        {/* Bal: kép */}
        <div className="relative w-full md:w-1/2 h-[420px] md:h-auto shrink-0">
          <Image
            src="/images/proba/H88A4354b.jpg"
            alt="Esküvői dekoráció"
            fill
            className="object-cover"
            style={{ objectPosition: "center 65%" }}
            sizes="48vw"
          />
        </div>

        {/* Jobb: szöveg */}
        <div className="flex flex-col justify-center flex-1 px-10 md:px-16 pt-6 pb-14 md:py-14">
<h2 className="font-[family-name:var(--font-cormorant)] text-[#363025] text-[1.7rem] md:text-4xl font-light mb-10 leading-snug whitespace-nowrap">
            Tökéletesen összeillünk, ha…
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="w-px shrink-0 bg-[#363025]/20 self-stretch" />
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/70 text-[15px] leading-[1.9]">
                Nem csak egy szervezőt keresel, hanem valakit, aki valóban átérzi, milyen napot álmodtál meg,
                és a legapróbb részletekre is úgy figyel, mintha a saját esküvőjét tervezné.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="w-px shrink-0 bg-[#363025]/20 self-stretch" />
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/70 text-[15px] leading-[1.9]">
                Nem a sablonos megoldásokban hiszel, hanem abban a természetes harmóniában,
                ahol a stílus, az érzelem és az élmény egymásra talál.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="w-px shrink-0 bg-[#363025]/20 self-stretch" />
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/70 text-[15px] leading-[1.9]">
                Szeretnéd, hogy a napotok minden pillanata emlékeztessen arra, miért egymást
                választottatok, a kimondott igenben és a mindennapokban is.
              </p>
            </div>
          </div>

          <a
            href="/szolgaltatasok"
            className="inline-block mt-10 self-start border border-[#363025]/50 text-[#363025] font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#363025] hover:text-white hover:border-[#363025] transition-all duration-300 whitespace-nowrap"
          >
            Ebben tudok nektek segíteni
          </a>
        </div>
      </div>
    </section>
  );
}
