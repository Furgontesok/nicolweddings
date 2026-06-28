import Image from "next/image";

export default function ReferencjakHero() {
  return (
    <div className="pt-16 bg-white">
      <div className="relative overflow-hidden" style={{ height: "55vh", minHeight: 360 }}>
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
      <div className="text-center relative z-10 -mt-[2.5rem] pb-4">
        <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-[6.3rem] font-light text-[#363025] tracking-[0.01em] uppercase">REFERENCIÁK</h1>
        <p className="font-[family-name:var(--font-cormorant)] text-[22px] text-[#363025] italic mt-8 font-light">
          Minden esküvő egy egyedi történet, íme néhány, amelynek részese lehettem.
        </p>
        <p className="font-[family-name:var(--font-cormorant)] text-[22px] text-[#363025] italic mt-1 font-light">
          Merülj el a részletekben, és képzeld el, milyen lenne a Ti nagy napotok.
        </p>
      </div>
    </div>
  );
}
