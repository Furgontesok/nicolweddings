import Image from "next/image";

export default function ReferencjakHero() {
  return (
    <div className="pt-[72px] lg:pt-[86px] 2xl:pt-[64px] bg-white">
      <div className="relative overflow-hidden h-[35vh] md:h-[50vh] lg:h-[55vh] 2xl:h-[62vh]" style={{ minHeight: 200 }}>
        <Image
          src="/images/referenciak-header.jpg"
          alt="Referenciák"
          fill
          className="object-cover object-[60%]"
          sizes="100vw"
          priority
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
          style={{ height: "35%", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.75))" }}
        />
      </div>
      <div className="text-center relative z-10 -mt-[2rem] md:-mt-[3rem] lg:-mt-[5rem] pb-12">
        <h1 className="font-[family-name:var(--font-cormorant)] text-[2.5rem] md:text-[4.5rem] lg:text-[6.3rem] 2xl:text-[5.2rem] font-light text-[#363025] tracking-[0.01em] uppercase">REFERENCIÁK</h1>
        <p className="font-[family-name:var(--font-cormorant)] text-[18px] lg:text-[22px] text-[#363025] italic mt-8 font-light">
          Minden esküvő egy egyedi történet, íme néhány, amelynek részese lehettem.
        </p>
        <div className="md:hidden w-10 h-px bg-[#363025]/20 mx-auto mt-4 mb-3" />
        <p className="font-[family-name:var(--font-cormorant)] text-[18px] lg:text-[22px] text-[#363025] italic mt-0 font-light">
          Merülj el a részletekben, és képzeld el,{" "}
          <br className="md:hidden" />milyen lenne a Ti nagy napotok.
        </p>
      </div>
    </div>
  );
}
