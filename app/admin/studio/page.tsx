"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

type FontFamily = "cormorant" | "nunito" | "quicksand" | "italianno";
type TextAlign = "left" | "center" | "right";
type TemplateId = "quote" | "photo-text" | "tips" | "minimal" | "blank" | "helyszin";

type TextLayer = {
  id: string;
  text: string;
  font: FontFamily;
  size: number;
  color: string;
  align: TextAlign;
  italic: boolean;
  tracking: string;
  uppercase: boolean;
  y: number; // % from top
};

type Format = "instagram" | "a5";

type Slide = {
  id: string;
  format: Format;
  bg: "color" | "image";
  bgColor: string;
  bgImage: string | null;
  bgOverlay: number; // 0-100
  layers: TextLayer[];
  showLogo: boolean;
  logoColor: "dark" | "white";
};

const FORMATS: Record<Format, { W: number; H: number; exportW: number; exportH: number; label: string }> = {
  instagram: { W: 540, H: 675, exportW: 1080, exportH: 1350, label: "Instagram (4:5)" },
  a5:        { W: 480, H: 680, exportW: 1748, exportH: 2480, label: "A5 szórólap" },
};

// ─── Templates ────────────────────────────────────────────────────────────────

const FONT_MAP: Record<FontFamily, string> = {
  cormorant: "var(--font-cormorant)",
  nunito: "var(--font-nunito)",
  quicksand: "var(--font-quicksand)",
  italianno: "var(--font-italianno)",
};

function makeId() {
  return Math.random().toString(36).slice(2, 8);
}

function makeSlide(template: TemplateId): Slide {
  const base: Slide = {
    id: makeId(),
    format: "instagram",
    bg: "color",
    bgColor: "#F5F3ED",
    bgImage: null,
    bgOverlay: 0,
    layers: [],
    showLogo: true,
    logoColor: "dark",
  };

  if (template === "quote") {
    return {
      ...base,
      layers: [
        { id: makeId(), text: '„Az esküvő egy pillanat,\naz emlék örök.”', font: "cormorant", size: 28, color: "#363025", align: "center", italic: true, tracking: "normal", uppercase: false, y: 35 },
        { id: makeId(), text: "— Nicol Weddings", font: "nunito", size: 11, color: "#363025", align: "center", italic: false, tracking: "0.25em", uppercase: true, y: 65 },
      ],
    };
  }

  if (template === "photo-text") {
    return {
      ...base,
      bg: "color",
      bgColor: "#363025",
      bgOverlay: 45,
      layers: [
        { id: makeId(), text: "Minden esküvő\negy egyedi történet", font: "cormorant", size: 34, color: "#ffffff", align: "center", italic: true, tracking: "normal", uppercase: false, y: 32 },
        { id: makeId(), text: "Nicol Weddings & Events", font: "nunito", size: 10, color: "rgba(255,255,255,0.65)", align: "center", italic: false, tracking: "0.3em", uppercase: true, y: 70 },
      ],
      showLogo: true,
      logoColor: "white",
    };
  }

  if (template === "tips") {
    return {
      ...base,
      bgColor: "#F5F3ED",
      layers: [
        { id: makeId(), text: "5 tipp az esküvőd\ntervezéséhez", font: "cormorant", size: 30, color: "#363025", align: "center", italic: false, tracking: "normal", uppercase: false, y: 15 },
        { id: makeId(), text: "01  Tűzz ki dátumot legalább 12 hónappal előre\n02  Határozd meg a stílusod és a hangulatot\n03  Állítsd össze a vendéglistát\n04  Válassz helyszínt és fotóst\n05  Bízd a részleteket szakértőre", font: "quicksand", size: 13, color: "#363025", align: "left", italic: false, tracking: "normal", uppercase: false, y: 38 },
      ],
    };
  }

  if (template === "minimal") {
    return {
      ...base,
      bgColor: "#ffffff",
      layers: [
        { id: makeId(), text: "ESKÜVŐSZERVEZÉS", font: "nunito", size: 11, color: "#363025", align: "center", italic: false, tracking: "0.4em", uppercase: true, y: 28 },
        { id: makeId(), text: "Gőz-Csongrádi\nNicol", font: "cormorant", size: 48, color: "#363025", align: "center", italic: true, tracking: "normal", uppercase: false, y: 42 },
        { id: makeId(), text: "nicolweddings.hu", font: "nunito", size: 10, color: "#363025", align: "center", italic: false, tracking: "0.2em", uppercase: false, y: 72 },
      ],
    };
  }

  return base; // blank
}

function makeHelyszinCarousel(): Slide[] {
  const base = (bgColor = "#F5F3ED"): Omit<Slide, "layers"> => ({
    id: makeId(), format: "instagram", bg: "color", bgColor, bgImage: null, bgOverlay: 0, showLogo: true, logoColor: "dark",
  });

  const num = (n: string): TextLayer => ({
    id: makeId(), text: n, font: "nunito", size: 11, color: "#363025", align: "center",
    italic: false, tracking: "0.4em", uppercase: true, y: 12,
  });
  const title = (t: string, y = 28): TextLayer => ({
    id: makeId(), text: t, font: "cormorant", size: 30, color: "#363025", align: "center",
    italic: true, tracking: "normal", uppercase: false, y,
  });
  const body = (t: string, y = 52): TextLayer => ({
    id: makeId(), text: t, font: "quicksand", size: 13, color: "#363025", align: "center",
    italic: false, tracking: "normal", uppercase: false, y,
  });

  return [
    {
      ...base(),
      layers: [
        { id: makeId(), text: "5+1 dolog, amire figyelj", font: "cormorant", size: 34, color: "#363025", align: "center", italic: true, tracking: "normal", uppercase: false, y: 30 },
        { id: makeId(), text: "esküvőhelyszín\nválasztásánál", font: "cormorant", size: 34, color: "#363025", align: "center", italic: true, tracking: "normal", uppercase: false, y: 44 },
        body("Ezeket kérdezd meg, mielőtt\naláírod a szerződést.", 68),
      ],
    },
    {
      ...base(),
      layers: [
        num("01"),
        title("Férőhely és\nelrendezés"),
        body("Kérd el az alaprajzot, és nézd meg hogyan\nfér el az asztalelrendezés, a tánctér,\na büfé és a fotóssarok.\nFontos, hogy maradjon elég tér a mozgásra."),
      ],
    },
    {
      ...base(),
      layers: [
        num("02"),
        title("Catering"),
        body("Saját konyha vagy külső cateringet\nis hozhatsz?\n\nHa csak a saját partnerükkel dolgozhatsz,\nnem lesz lehetőséged árban vagy menüben\nalkudozni. Mindig kérdezz rá előre."),
      ],
    },
    {
      ...base(),
      layers: [
        num("03"),
        title("Időbeli korlátok"),
        body("Meddig tarthat a buli?\n\nSok helyszínnek éjféli vagy 2 órás\nzárási szabálya van. Ha te hajnalig tervezel,\nez döntő szempont.\nA zenére és a programokra is kihat."),
      ],
    },
    {
      ...base(),
      layers: [
        num("04"),
        title("Időjárás backup"),
        body("Mi történik, ha esik?\n\nKérdezd meg: van-e fedett terasz\nvagy belső terem alternatíva?\nEgy kültéri esküvőnél ez nem opció,\nhanem kötelező kérdés."),
      ],
    },
    {
      ...base(),
      layers: [
        num("05"),
        title("Hangulat és stílus"),
        body("Az a helyszín a legjobb, amelyik\nmár önmagában meséd részévé válik.\n\nNézd meg különböző napszakokban.\nEgy esős délutáni látogatás sokat elárul."),
      ],
    },
    {
      ...base(),
      layers: [
        num("+1"),
        title("Rejtett költségek", 26),
        body("Kérdezz rá mindenre, ami nincs\nbenne az ajánlatban.\n\nTerítő, szék, dekorációs díj, óvadék,\ntakarítás. Ezek könnyen 200-400 ezret\ntesznek hozzá az árhoz.", 46),
        { id: makeId(), text: "Ha bizonytalan vagy, segítek végiggondolni.\nÍrj nekem!", font: "quicksand", size: 13, color: "#363025", align: "center", italic: true, tracking: "normal", uppercase: false, y: 78 },
      ],
    },
  ];
}

function makeA5Flyer(): Slide {
  return {
    id: makeId(),
    format: "a5",
    bg: "color",
    bgColor: "#F5F3ED",
    bgImage: null,
    bgOverlay: 0,
    showLogo: true,
    logoColor: "dark",
    layers: [
      { id: makeId(), text: "ESKÜVŐSZERVEZŐ & KOORDINÁTOR", font: "nunito", size: 9, color: "#363025", align: "center", italic: false, tracking: "0.3em", uppercase: true, y: 20 },
      { id: makeId(), text: "Gőz-Csongrádi\nNicol", font: "cormorant", size: 52, color: "#363025", align: "center", italic: true, tracking: "normal", uppercase: false, y: 28 },
      { id: makeId(), text: "Teljes körű esküvőszervezés\n30 nap a nagy napig\nEsküvői tanácsadás\nEgyéb rendezvények", font: "quicksand", size: 13, color: "#363025", align: "center", italic: false, tracking: "0.05em", uppercase: false, y: 54 },
      { id: makeId(), text: "nicol.weddings@gmail.com\n+36 30 544 4676\nnicolweddings.hu", font: "nunito", size: 10, color: "#363025", align: "center", italic: false, tracking: "0.1em", uppercase: false, y: 76 },
    ],
  };
}

// ─── Slide Canvas ─────────────────────────────────────────────────────────────

function SlideCanvas({ slide, scale = 1 }: { slide: Slide; scale?: number }) {
  const { W, H } = FORMATS[slide.format ?? "instagram"];

  return (
    <div
      style={{
        width: W * scale,
        height: H * scale,
        position: "relative",
        overflow: "hidden",
        background: slide.bgColor,
        flexShrink: 0,
      }}
    >
      {/* Background image */}
      {slide.bgImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={slide.bgImage}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}

      {/* Overlay */}
      {slide.bgOverlay > 0 && (
        <div style={{ position: "absolute", inset: 0, background: `rgba(0,0,0,${slide.bgOverlay / 100})` }} />
      )}

      {/* Text layers */}
      {slide.layers.map(layer => (
        <div
          key={layer.id}
          style={{
            position: "absolute",
            left: "8%",
            right: "8%",
            top: `${layer.y}%`,
            fontFamily: FONT_MAP[layer.font],
            fontSize: layer.size * scale,
            color: layer.color,
            textAlign: layer.align,
            fontStyle: layer.italic ? "italic" : "normal",
            letterSpacing: layer.tracking,
            textTransform: layer.uppercase ? "uppercase" : "none",
            whiteSpace: "pre-line",
            lineHeight: 1.45,
            zIndex: 10,
          }}
        >
          {layer.text}
        </div>
      ))}

      {/* Logo */}
      {slide.showLogo && (
        <div style={{
          position: "absolute",
          bottom: 24 * scale,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 20,
        }}>
          <Image
            src={slide.logoColor === "white" ? "/images/horizontal_white.svg" : "/images/horizontal_black.svg"}
            alt="Nicol Weddings"
            width={100 * scale}
            height={30 * scale}
            style={{ objectFit: "contain", opacity: 0.75 }}
            unoptimized
          />
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const TEMPLATES: { id: string; label: string; desc: string; carousel?: true; a5?: true }[] = [
  { id: "quote", label: "Idézet", desc: "Elegáns, középre igazított idézet" },
  { id: "photo-text", label: "Fotó + szöveg", desc: "Sötét háttér, fehér szöveg" },
  { id: "tips", label: "Tippek", desc: "Edukatív tartalom, számozott lista" },
  { id: "minimal", label: "Minimál", desc: "Fehér, elegáns névkártya stílus" },
  { id: "helyszin", label: "Helyszín carousel", desc: "5+1 szempont — 7 dia", carousel: true },
  { id: "blank", label: "Üres", desc: "Kezdj a nulláról" },
  { id: "szorólap", label: "A5 szórólap", desc: "Névjegy stílusú nyomtatható flyer", a5: true },
];

const labelCls = "font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/40 mb-1 block";
const inputCls = "w-full bg-[#F5F3ED] border border-[#363025]/10 px-3 py-2 font-[family-name:var(--font-nunito)] text-[12px] text-[#363025] focus:outline-none focus:border-[#363025]/30 transition-colors";

export default function StudioPage() {
  const [slides, setSlides] = useState<Slide[]>([makeSlide("quote")]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [exporting, setExporting] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const bgFileRef = useRef<HTMLInputElement>(null);

  const slide = slides[activeSlide];

  function updateSlide(patch: Partial<Slide>) {
    setSlides(prev => prev.map((s, i) => i === activeSlide ? { ...s, ...patch } : s));
  }

  function updateLayer(id: string, patch: Partial<TextLayer>) {
    updateSlide({ layers: slide.layers.map(l => l.id === id ? { ...l, ...patch } : l) });
  }

  function addLayer() {
    const newLayer: TextLayer = {
      id: makeId(),
      text: "Új szöveg",
      font: "cormorant",
      size: 24,
      color: "#363025",
      align: "center",
      italic: false,
      tracking: "normal",
      uppercase: false,
      y: 50,
    };
    updateSlide({ layers: [...slide.layers, newLayer] });
    setActiveLayer(newLayer.id);
  }

  function deleteLayer(id: string) {
    updateSlide({ layers: slide.layers.filter(l => l.id !== id) });
    if (activeLayer === id) setActiveLayer(null);
  }

  function addSlide() {
    const newSlide = makeSlide("blank");
    setSlides(prev => [...prev, newSlide]);
    setActiveSlide(slides.length);
    setActiveLayer(null);
  }

  function deleteSlide(idx: number) {
    if (slides.length === 1) return;
    setSlides(prev => prev.filter((_, i) => i !== idx));
    setActiveSlide(Math.max(0, idx - 1));
    setActiveLayer(null);
  }

  const handleBgImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => updateSlide({ bgImage: ev.target?.result as string, bg: "image" });
    reader.readAsDataURL(file);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide, slides]);

  async function exportSlides() {
    setExporting(true);
    try {
      const { toPng } = await import("html-to-image");
      for (let i = 0; i < slides.length; i++) {
        setActiveSlide(i);
        await new Promise(r => setTimeout(r, 200));
        if (!canvasRef.current) continue;
        const fmt = FORMATS[slides[i].format ?? "instagram"];
        const dataUrl = await toPng(canvasRef.current, { width: fmt.exportW, height: fmt.exportH, pixelRatio: fmt.exportW / fmt.W });
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = slides[i].format === "a5" ? `nicol-szorólap-${i + 1}.png` : `nicol-poszt-${i + 1}.png`;
        a.click();
        await new Promise(r => setTimeout(r, 300));
      }
    } catch (err) {
      console.error(err);
      alert("Exportálás sikertelen");
    }
    setExporting(false);
  }

  const layer = slide.layers.find(l => l.id === activeLayer);

  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F3ED]">

      {/* ── Bal sáv: sablonok + dia lista ── */}
      <div className="w-56 shrink-0 bg-white border-r border-[#363025]/8 flex flex-col">
        <div className="px-5 pt-6 pb-4 border-b border-[#363025]/8">
          <p className={labelCls}>Admin</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025]">Studio</h1>
        </div>

        {/* Sablonok */}
        <div className="px-4 pt-4 pb-3 border-b border-[#363025]/8">
          <button
            onClick={() => setShowTemplates(v => !v)}
            className="w-full font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.2em] uppercase py-2.5 border border-[#363025]/25 text-[#363025]/50 hover:border-[#363025]/50 hover:text-[#363025] transition-all duration-200"
          >
            + Sablon
          </button>
          {showTemplates && (
            <div className="mt-2 flex flex-col gap-1">
              {TEMPLATES.map(t => (
                <button
                  key={t.id}
                  onClick={() => {
                    if (t.carousel) {
                      const newSlides = makeHelyszinCarousel();
                      setSlides(prev => [...prev, ...newSlides]);
                      setActiveSlide(slides.length);
                    } else if (t.a5) {
                      const newSlide = makeA5Flyer();
                      setSlides(prev => [...prev, newSlide]);
                      setActiveSlide(slides.length);
                    } else {
                      const newSlide = makeSlide(t.id as TemplateId);
                      setSlides(prev => [...prev, newSlide]);
                      setActiveSlide(slides.length);
                    }
                    setActiveLayer(null);
                    setShowTemplates(false);
                  }}
                  className="text-left px-3 py-2 bg-[#F5F3ED] hover:bg-[#EEECEA] transition-colors"
                >
                  <p className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]">{t.label}</p>
                  <p className="font-[family-name:var(--font-nunito)] text-[9px] text-[#363025]/40 mt-0.5">{t.desc}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Diák */}
        <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2">
          {slides.map((s, i) => (
            <div
              key={s.id}
              onClick={() => { setActiveSlide(i); setActiveLayer(null); }}
              className={`relative cursor-pointer border-2 transition-all ${activeSlide === i ? "border-[#363025]" : "border-transparent hover:border-[#363025]/20"}`}
            >
              <div className="scale-[0.95] origin-top">
                <SlideCanvas slide={s} scale={0.18} />
              </div>
              <div className="absolute bottom-1 left-1.5 font-[family-name:var(--font-nunito)] text-[8px] text-[#363025]/50 bg-white/80 px-1 rounded">
                {i + 1}
              </div>
              {slides.length > 1 && (
                <button
                  onClick={e => { e.stopPropagation(); deleteSlide(i); }}
                  className="absolute top-1 right-1 w-4 h-4 bg-white/80 text-[#363025]/40 hover:text-red-500 text-[10px] flex items-center justify-center rounded"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Dia hozzáadás + export */}
        <div className="p-4 border-t border-[#363025]/8 flex flex-col gap-2">
          <button
            onClick={addSlide}
            className="w-full font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.15em] uppercase py-2 border border-[#363025]/20 text-[#363025]/40 hover:text-[#363025] hover:border-[#363025]/50 transition-all"
          >
            + Dia
          </button>
          <button
            onClick={exportSlides}
            disabled={exporting}
            className="w-full font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.15em] uppercase py-2.5 bg-[#363025] text-white hover:bg-[#363025]/80 transition-colors disabled:opacity-50"
          >
            {exporting ? "Exportálás..." : `↓ Letöltés (${slides.length})`}
          </button>
        </div>
      </div>

      {/* ── Középső: canvas ── */}
      <div className="flex-1 flex items-center justify-center overflow-auto p-8">
        <div ref={canvasRef} style={{ width: 540, height: 675 }}>
          <SlideCanvas slide={slide} scale={1} />
        </div>
      </div>

      {/* ── Jobb sáv: szerkesztő ── */}
      <div className="w-64 shrink-0 bg-white border-l border-[#363025]/8 flex flex-col overflow-y-auto">
        <div className="px-5 pt-5 pb-3 border-b border-[#363025]/8">
          <p className={labelCls}>Dia {activeSlide + 1} beállítások</p>
          <div className="flex gap-1 mt-2">
            {(Object.entries(FORMATS) as [Format, typeof FORMATS[Format]][]).map(([key, val]) => (
              <button
                key={key}
                onClick={() => updateSlide({ format: key })}
                className={`flex-1 py-1 font-[family-name:var(--font-nunito)] text-[9px] tracking-wide uppercase border transition-colors ${slide.format === key ? "border-[#363025] text-[#363025] bg-[#363025]/5" : "border-[#363025]/15 text-[#363025]/35"}`}
              >
                {key === "instagram" ? "4:5" : "A5"}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 border-b border-[#363025]/8 space-y-3">
          <div>
            <label className={labelCls}>Háttér</label>
            <div className="flex gap-2">
              <button
                onClick={() => updateSlide({ bg: "color", bgImage: null })}
                className={`flex-1 py-1.5 font-[family-name:var(--font-nunito)] text-[10px] tracking-wide uppercase border transition-colors ${slide.bg === "color" ? "border-[#363025] text-[#363025] bg-[#363025]/5" : "border-[#363025]/20 text-[#363025]/40"}`}
              >
                Szín
              </button>
              <button
                onClick={() => bgFileRef.current?.click()}
                className={`flex-1 py-1.5 font-[family-name:var(--font-nunito)] text-[10px] tracking-wide uppercase border transition-colors ${slide.bg === "image" ? "border-[#363025] text-[#363025] bg-[#363025]/5" : "border-[#363025]/20 text-[#363025]/40"}`}
              >
                Kép
              </button>
              <input ref={bgFileRef} type="file" accept="image/*" className="hidden" onChange={handleBgImage} />
            </div>
          </div>

          {slide.bg === "color" && (
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={slide.bgColor}
                onChange={e => updateSlide({ bgColor: e.target.value })}
                className="w-8 h-8 border border-[#363025]/15 cursor-pointer rounded"
              />
              <input
                type="text"
                value={slide.bgColor}
                onChange={e => updateSlide({ bgColor: e.target.value })}
                className={`${inputCls} flex-1`}
              />
            </div>
          )}

          {slide.bg === "image" && (
            <div>
              <label className={labelCls}>Sötétítés: {slide.bgOverlay}%</label>
              <input
                type="range" min={0} max={80} value={slide.bgOverlay}
                onChange={e => updateSlide({ bgOverlay: Number(e.target.value) })}
                className="w-full accent-[#363025]"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <label className={labelCls + " mb-0"}>Logó</label>
            <button
              onClick={() => updateSlide({ showLogo: !slide.showLogo })}
              className={`w-10 h-5 rounded-full transition-colors relative ${slide.showLogo ? "bg-[#363025]" : "bg-[#363025]/20"}`}
            >
              <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${slide.showLogo ? "right-0.5" : "left-0.5"}`} />
            </button>
          </div>

          {slide.showLogo && (
            <div className="flex gap-2">
              {(["dark", "white"] as const).map(c => (
                <button
                  key={c}
                  onClick={() => updateSlide({ logoColor: c })}
                  className={`flex-1 py-1.5 font-[family-name:var(--font-nunito)] text-[10px] uppercase border transition-colors ${slide.logoColor === c ? "border-[#363025] text-[#363025]" : "border-[#363025]/20 text-[#363025]/40"}`}
                >
                  {c === "dark" ? "Sötét" : "Fehér"}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Szöveg rétegek */}
        <div className="p-4 border-b border-[#363025]/8">
          <div className="flex items-center justify-between mb-2">
            <p className={labelCls + " mb-0"}>Szöveg rétegek</p>
            <button onClick={addLayer} className="font-[family-name:var(--font-nunito)] text-[10px] text-[#363025]/50 hover:text-[#363025] transition-colors">+ Hozzáad</button>
          </div>
          <div className="flex flex-col gap-1">
            {slide.layers.map((l, i) => (
              <div
                key={l.id}
                onClick={() => setActiveLayer(activeLayer === l.id ? null : l.id)}
                className={`flex items-center gap-2 px-3 py-2 cursor-pointer border transition-colors ${activeLayer === l.id ? "border-[#363025]/40 bg-[#363025]/3" : "border-[#363025]/10 hover:border-[#363025]/20"}`}
              >
                <span className="font-[family-name:var(--font-nunito)] text-[9px] text-[#363025]/30 shrink-0">#{i + 1}</span>
                <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025] flex-1 truncate">{l.text.slice(0, 18)}</span>
                <button onClick={e => { e.stopPropagation(); deleteLayer(l.id); }} className="text-[#363025]/20 hover:text-red-400 text-sm">×</button>
              </div>
            ))}
          </div>
        </div>

        {/* Aktív réteg szerkesztő */}
        {layer && (
          <div className="p-4 space-y-3">
            <p className={labelCls}>Szöveg tartalma</p>
            <textarea
              value={layer.text}
              onChange={e => updateLayer(layer.id, { text: e.target.value })}
              rows={4}
              className={`${inputCls} resize-none`}
            />

            <div>
              <label className={labelCls}>Betűtípus</label>
              <select value={layer.font} onChange={e => updateLayer(layer.id, { font: e.target.value as FontFamily })} className={inputCls}>
                <option value="cormorant">Cormorant (elegáns)</option>
                <option value="nunito">Nunito (száraz)</option>
                <option value="quicksand">Quicksand (folyó)</option>
                <option value="italianno">Italianno (kézírásos)</option>
              </select>
            </div>

            <div className="flex gap-2">
              <div className="flex-1">
                <label className={labelCls}>Méret</label>
                <input type="number" min={8} max={80} value={layer.size} onChange={e => updateLayer(layer.id, { size: Number(e.target.value) })} className={inputCls} />
              </div>
              <div className="flex-1">
                <label className={labelCls}>Szín</label>
                <input type="color" value={layer.color.startsWith("rgba") ? "#ffffff" : layer.color} onChange={e => updateLayer(layer.id, { color: e.target.value })} className="w-full h-[38px] border border-[#363025]/10 cursor-pointer" />
              </div>
            </div>

            <div>
              <label className={labelCls}>Igazítás</label>
              <div className="flex gap-1">
                {(["left", "center", "right"] as TextAlign[]).map(a => (
                  <button key={a} onClick={() => updateLayer(layer.id, { align: a })}
                    className={`flex-1 py-1.5 font-[family-name:var(--font-nunito)] text-[10px] border transition-colors ${layer.align === a ? "border-[#363025] text-[#363025] bg-[#363025]/5" : "border-[#363025]/15 text-[#363025]/40"}`}>
                    {a === "left" ? "←" : a === "center" ? "↔" : "→"}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button onClick={() => updateLayer(layer.id, { italic: !layer.italic })}
                className={`flex-1 py-1.5 font-[family-name:var(--font-nunito)] text-[10px] italic border transition-colors ${layer.italic ? "border-[#363025] bg-[#363025]/5 text-[#363025]" : "border-[#363025]/15 text-[#363025]/40"}`}>
                Dőlt
              </button>
              <button onClick={() => updateLayer(layer.id, { uppercase: !layer.uppercase })}
                className={`flex-1 py-1.5 font-[family-name:var(--font-nunito)] text-[10px] uppercase border transition-colors ${layer.uppercase ? "border-[#363025] bg-[#363025]/5 text-[#363025]" : "border-[#363025]/15 text-[#363025]/40"}`}>
                AA
              </button>
            </div>

            <div>
              <label className={labelCls}>Függőleges pozíció: {layer.y}%</label>
              <input type="range" min={5} max={90} value={layer.y}
                onChange={e => updateLayer(layer.id, { y: Number(e.target.value) })}
                className="w-full accent-[#363025]"
              />
            </div>

            <div>
              <label className={labelCls}>Betűköz</label>
              <select value={layer.tracking} onChange={e => updateLayer(layer.id, { tracking: e.target.value })} className={inputCls}>
                <option value="normal">Normal</option>
                <option value="0.1em">Kis (+)</option>
                <option value="0.2em">Közepes (++)</option>
                <option value="0.35em">Nagy (+++)</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
