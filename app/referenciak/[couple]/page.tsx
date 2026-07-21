import NavbarSimple from "../../components/NavbarSimple";
import Footer from "../../components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GalleryWithLightbox from "./GalleryWithLightbox";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

type Vendor = { label: string; handle?: string; handles?: string[]; plain?: string };
type Testimonial = { quote: string; text: string };

const coupleData: Record<string, {
  name: string;
  folder: string;
  count: number;
  ext: string;
  headerImage?: string;
  headerPosition?: string;
  vendors?: Vendor[];
  testimonial?: Testimonial;
}> = {
  "bia-bence": {
    name: "Bia & Bence",
    headerImage: "/images/header-bia-bence.jpg",
    folder: "Bia%20%26%20Bence",
    count: 26,
    ext: ".jpg",
    vendors: [
      { label: "Helyszín", handle: "kilroy_events" },
      { label: "Fotó", handle: "weddingsbybettinakertesz" },
      { label: "Film", handle: "ferencvoltarniszt" },
      { label: "Dekor", handle: "blooming_sentiments_picnic" },
      { label: "Székek", handle: "amerikaiszek.hu" },
      { label: "Tányér, evőeszköz, pohár", handle: "lamesaeventrental" },
      { label: "Csillár állvány, csillár, kapu", handle: "bucekfabrication" },
      { label: "Grafika", handle: "bluebirddesign_graphic" },
      { label: "Menyasszonyi ruha", handle: "winonacouture" },
      { label: "Öltöny", handle: "bonostore.hu" },
      { label: "Sminkes", handle: "makeup_bycsilla" },
      { label: "Fodrász", handle: "beautifulhairbygabo" },
      { label: "Gyűrűk, ékszerek", handle: "noordia_official" },
      { label: "Fejdísz, fülbevaló", handle: "inventino_" },
      { label: "Porsche", handle: "wsclassics" },
      { label: "Napágyak", handle: "tavoloevents.budapest" },
    ],
  },
  "betti-levi": {
    name: "Betti & Levi",
    headerImage: "/images/header-betti-levi.jpg",
    folder: "Betti%20%26%20Levi",
    count: 21,
    ext: ".jpg",
    vendors: [
      { label: "Helyszín", handle: "schariothbirtok" },
      { label: "Fotó/Film", handle: "sweetlightwedding" },
      { label: "Dekor", handle: "naturalweddingdecor" },
      { label: "Székek", handle: "amerikaiszek.hu" },
      { label: "Tányér, evőeszköz, pohár", handle: "lamesaeventrental" },
      { label: "Grafika", handle: "varrorekafotografika" },
      { label: "Terítő, szalvéta", handle: "textilmuhely" },
      { label: "Menyasszonyi ruha", handle: "winonacouture" },
      { label: "Szmoking", handle: "lavardhungary" },
      { label: "Sminkes", handle: "egykismakeup" },
      { label: "Fodrász", handle: "gabriellaillyeshair" },
      { label: "Gyűrűk, ékszerek", handle: "ensoekszer" },
    ],
  },
  "nicol-roli": {
    name: "Nicol & Roli",
    headerImage: "/images/header-nicol-roli.jpg",
    headerPosition: "center 80%",
    folder: "Nicol%20%26%20Roli",
    count: 26,
    ext: ".-min.jpg",
    vendors: [
      { label: "Helyszín", handle: "polyakborbirtok" },
      { label: "Fotó", handle: "rabloczkyandras" },
      { label: "Film", handle: "drone4u" },
      { label: "Dekor", handle: "ankaildiko_dekor" },
      { label: "Ceremóniamester", handle: "drazsee" },
      { label: "Szertartás", handle: "barbara.ceremonymaster" },
      { label: "Fény- és hangtechnika", handle: "eventech_solutions" },
      { label: "Desszert, torta", handle: "tortapalota" },
      { label: "Smink", handle: "livridegofficial" },
      { label: "Haj", handle: "demenyi_oliver" },
      { label: "Welcome zene", handle: "jaszandris" },
      { label: "Tánc", handle: "bkproductions.hu" },
      { label: "Aznapi koordináció", handle: "weddingsbylillakalmar" },
      { label: "Fotóautomata", handle: "photofuncompany" },
    ],
  },
  "vivi-bence": {
    name: "Vivi & Bence",
    headerImage: "/images/header-vivi-bence.jpg",
    folder: "Vivi%20%26%20Bence",
    count: 19,
    ext: "..jpg",
    vendors: [
      { label: "Helyszín", plain: "Zsámbéki Romtemplom" },
      { label: "Fotó", handle: "zoltan.tarnavolgyi.weddings" },
      { label: "Film", handle: "molly.erdelyi" },
      { label: "Dekor", handle: "makvirag_virag" },
      { label: "Asztal, székek", handle: "amerikaiszek.hu" },
      { label: "Tányér, evőeszköz", handle: "lamesaeventrental" },
      { label: "Dekorációs kiegészítők, csillárok", handle: "bucekfabrication" },
      { label: "Csillár állványok", handles: ["bucekfabrication", "the_balloon_budapest"] },
      { label: "Grafika", handle: "tothagiiii" },
      { label: "Terítő, szalvéta", handle: "textilmuhely" },
      { label: "Gyertyák", handle: "lumenicandles" },
      { label: "Menyasszonyi ruha", handle: "millaasfashion" },
      { label: "Öltöny", handle: "digel_store_budapest" },
      { label: "Sminkes", handle: "livridegofficial" },
      { label: "Fodrász", handle: "beautifulhairbygabo" },
      { label: "Gyűrűk, ékszerek", handle: "noordia_official" },
    ],
  },
  "panni-sanyi": {
    name: "Panni & Sanyi",
    headerImage: "/images/header-panni-sanyi.jpg",
    headerPosition: "center 30%",
    folder: "Panni%20%26%20Sanyi",
    count: 22,
    ext: ".jpg",
    vendors: [
      { label: "Helyszín", handle: "ivica_porta" },
      { label: "Fotó", handle: "anitadajkawedding" },
      { label: "Dekor", handle: "blooming_sentiments_picnic" },
      { label: "Posztamensek, állványok", handle: "bucekfabrication" },
      { label: "Szikragép", handle: "bankutinorbert" },
      { label: "Menyasszonyi ruha", handle: "winonacouture" },
      { label: "Öltöny", handle: "badlabudapest" },
      { label: "Sminkes", handle: "makeup_bycsilla" },
      { label: "Fülbevaló", handle: "sposafiorente" },
      { label: "Torta", handle: "baranyipekseg" },
    ],
  },
  "ani-peti": {
    name: "Ani & Peti",
    headerImage: "/images/header-ani-peti.jpg",
    folder: "Ani%20%26%20Peti%20esk%C3%BCv%C5%91%20referenci%C3%A1k%20album",
    count: 17,
    ext: ".jpg",
    vendors: [
      { label: "Helyszín", handle: "kinfolk_cottage" },
      { label: "Fotó", handle: "julian_gyula_zacsfalvi" },
      { label: "Film", handle: "szabim" },
      { label: "Dekor", handle: "viragalom" },
      { label: "Ceremóniamester", handle: "pallagiakoscm" },
      { label: "Catering", handle: "pearl_event_and_wedding" },
      { label: "Tányér, pohár, evőeszköz", handle: "lamesaeventrental" },
      { label: "Fény- és hangtechnika", handle: "s4yhu" },
      { label: "Smink", handle: "rebekanagymakeup" },
      { label: "Haj", handle: "kittyh.hairstylist" },
      { label: "Menyasszonyi ruha", handle: "szonja.mezei" },
      { label: "Torta", handle: "sutike.muhely" },
      { label: "Photo bus", handle: "forestandfield.photobus" },
    ],
  },
  "reka-adam": {
    name: "Réka & Ádám",
    headerImage: "/images/header-reka-adam.jpg",
    folder: "R%C3%A9ka%20%26%20%C3%81d%C3%A1m",
    count: 23,
    ext: ".jpg",
    vendors: [
      { label: "Helyszín", handle: "hilltop_borbirtok_etterem" },
      { label: "Fotó/Film", handle: "bellonpictures" },
      { label: "Dekor", handle: "makvirag_virag" },
      { label: "Ceremóniamester", handle: "akos_buzer" },
      { label: "Szertartásvezető", handle: "barbara.ceremonymaster" },
      { label: "Tányér, pohár, evőeszköz", handle: "lamesaeventrental" },
      { label: "Fény- és hangtechnika", handle: "s4yhu" },
      { label: "Smink", handle: "livridegofficial" },
      { label: "Haj", handle: "sebokdorina_hair" },
      { label: "Szaxofon", handle: "csobanszendrody" },
      { label: "Menyasszonyi ruha", handle: "gloriosaszalon" },
      { label: "Torta", handle: "nem.piskota" },
      { label: "Photo box", handle: "photofuncompany" },
    ],
    testimonial: {
      quote: "A nagy napunkon minden gördülékenyen zajlott, Nicol mindenhol ott volt és odafigyelt, hogy ne csússzon hiba a terveinkbe.",
      text: "Nicol óriási segítség volt számunkra, és nagyon örülünk, hogy ő kísért végig az esküvőnk szervezésén. Nemcsak a feladatokban segített, hanem tartotta a kapcsolatot a szolgáltatókkal is, ami nagy terhet vett le a vállunkról. A nagy napunkon minden gördülékenyen zajlott, Nicol mindenhol ott volt és odafigyelt, hogy ne csússzon hiba a terveinkbe. Nagyon lelkiismeretes, precíz, és mindenben lehet rá számítani. Őszintén ajánljuk mindenkinek.",
    },
  },
};

async function getSupabaseData(slug: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;

  const sb = createClient(url, key);

  const { data: couple } = await sb
    .from("couples")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!couple) return null;

  const [{ data: imgs }, { data: vends }] = await Promise.all([
    sb.from("couple_images").select("*").eq("couple_id", couple.id).order("display_order"),
    sb.from("couple_vendors").select("*").eq("couple_id", couple.id).order("display_order"),
  ]);

  return { couple, images: imgs ?? [], vendors: vends ?? [] };
}

export async function generateMetadata({ params }: { params: Promise<{ couple: string }> }): Promise<Metadata> {
  const { couple } = await params;
  const sb = await getSupabaseData(couple);
  const name = sb?.couple?.name ?? coupleData[couple]?.name;
  if (!name) return {};
  return { title: `${name} — Nicol Weddings and Events` };
}

export default async function CouplePage({ params }: { params: Promise<{ couple: string }> }) {
  const { couple } = await params;

  const sbData = await getSupabaseData(couple);
  const fallback = coupleData[couple];

  if (!sbData && !fallback) notFound();

  // Determine what to render
  const name = sbData?.couple?.name ?? fallback?.name ?? "";
  const headerPosition = sbData?.couple?.header_position ?? fallback?.headerPosition ?? "center";

  // Header image: prefer Supabase header image, then fallback hardcoded
  const headerImg = sbData?.images?.find((i: { is_header: boolean }) => i.is_header)?.url
    ?? sbData?.couple?.header_image_url
    ?? fallback?.headerImage
    ?? sbData?.images?.[0]?.url;

  // Gallery images
  const galleryImages: string[] = sbData && sbData.images.length > 0
    ? sbData.images.map((i: { url: string }) => i.url)
    : fallback
      ? Array.from({ length: fallback.count }, (_, i) => `/images/${fallback.folder}/${i + 1}${fallback.ext}`)
      : [];

  // Vendors
  const vendors: Vendor[] = sbData && sbData.vendors.length > 0
    ? sbData.vendors.map((v: { label: string; handle?: string; plain?: string }) => ({
        label: v.label,
        handle: v.handle || undefined,
        plain: v.plain || undefined,
      }))
    : fallback?.vendors ?? [];

  // Testimonial
  const testimonial: Testimonial | undefined =
    (sbData?.couple?.testimonial_quote && sbData?.couple?.testimonial_text)
      ? { quote: sbData.couple.testimonial_quote, text: sbData.couple.testimonial_text }
      : fallback?.testimonial;

  return (
    <>
      <NavbarSimple />

      {/* Header */}
      <div className="pt-16 relative h-[55vh] overflow-hidden">
        {headerImg && (
          <Image
            src={headerImg}
            alt={name}
            fill
            className="object-cover"
            style={{ objectPosition: headerPosition }}
            sizes="100vw"
            priority
            unoptimized={headerImg.startsWith("https://")}
          />
        )}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-[family-name:var(--font-nunito)] text-[13px] tracking-[0.35em] uppercase text-white/60 mb-3">
            Galéria
          </p>
          <h1 className="font-[family-name:var(--font-italianno)] text-6xl md:text-7xl text-white">
            {name.replace(' & ', ' &  ')}
          </h1>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="bg-[#F5F3ED] py-16 px-6">
        <GalleryWithLightbox images={galleryImages} name={name} />
      </section>

      {/* Vendors */}
      {vendors.length > 0 && (
        <section className="bg-[#F5F3ED] pb-20 px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-12 h-px bg-[#363025]/20 mx-auto mb-10" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light tracking-normal uppercase text-[#363025]/30 mb-8">
              Szolgáltatók
            </h2>
            <div className="space-y-3">
              {vendors.map((v, i) => (
                <p key={i} className="font-[family-name:var(--font-quicksand)] text-[18px] text-[#363025]">
                  {v.label}:{" "}
                  {v.plain && <span>{v.plain}</span>}
                  {v.handle && (
                    <a href={`https://www.instagram.com/${v.handle}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#363025]/50 transition-colors duration-200">
                      @{v.handle}
                    </a>
                  )}
                  {v.handles && v.handles.map((h, j) => (
                    <span key={j}>
                      {j > 0 && " & "}
                      <a href={`https://www.instagram.com/${h}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#363025]/50 transition-colors duration-200">
                        @{h}
                      </a>
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <section className="bg-[#F5F3ED] pb-6 text-center">
        <a
          href={`/referenciak#${couple}`}
          className="inline-block font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.3em] uppercase text-[#363025]/50 hover:text-[#363025] transition-colors duration-300"
        >
          ← Vissza a referenciákhoz
        </a>
      </section>

      <Footer />
    </>
  );
}
