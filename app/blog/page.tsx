import Image from "next/image";
import { blogok } from "./blogok";
import type { Metadata } from "next";
import NavbarSimple from "../components/NavbarSimple";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blog | Nicol Weddings and Events",
  description:
    "Esküvőszervezési tippek, inspiráció és tanácsok Nicol tollából. Minden, amit egy menyasszonynak tudnia érdemes a nagy napra készülve.",
  openGraph: {
    title: "Blog | Nicol Weddings and Events",
    description:
      "Esküvőszervezési tippek, inspiráció és tanácsok Nicol tollából.",
    url: "https://nicolweddings.hu/blog",
    siteName: "Nicol Weddings and Events",
    locale: "hu_HU",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <NavbarSimple />
      <main className="bg-[#F5F3ED] min-h-screen">

        {/* Hero fejléc */}
        <div className="pt-16 bg-[#F5F3ED]">
          <div className="relative overflow-hidden md:h-[55vh] h-[25vh]" style={{ minHeight: 150 }}>
            <Image
              src="/images/fooldal-referenciak/5..jpg"
              alt="Nicol Weddings blog — Esküvőszervezési tippek és inspiráció"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
              style={{ height: "40%", background: "linear-gradient(to bottom, transparent, rgba(245,243,237,0.9))" }}
            />
          </div>
          <div className="text-center relative z-10 -mt-[2rem] md:-mt-[5rem] pb-4">
            <h1 className="font-[family-name:var(--font-cormorant)] text-[2.5rem] md:text-[6.3rem] font-light text-[#363025] tracking-[0.01em] uppercase">
              Blog
            </h1>
          </div>
        </div>

        {/* Bejegyzések */}
        <section className="max-w-5xl mx-auto px-6 pt-4 md:pt-10 pb-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {[...blogok].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => (
            <a
              key={post.slug}
              id={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white overflow-hidden hover:shadow-md transition-shadow duration-300 outline-none focus:outline-none"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: post.coverPosition ?? "center 75%" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="px-8 py-7">
                <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/35 mb-3">
                  {new Date(post.date).toLocaleDateString("hu-HU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025] leading-snug mb-3">
                  {post.title}
                </h2>
                <p className="font-[family-name:var(--font-quicksand)] text-[13px] text-[#363025]/55 leading-relaxed line-clamp-3">
                  {post.description}
                </p>
                <span className="inline-block mt-5 font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.2em] uppercase text-[#363025]/50 group-hover:text-[#363025] transition-colors duration-300">
                  Elolvasom →
                </span>
              </div>
            </a>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
