import Image from "next/image";
import { notFound } from "next/navigation";
import { blogok, getBlogPost } from "../blogok";
import type { Metadata } from "next";
import NavbarSimple from "../../components/NavbarSimple";
import Footer from "../../components/Footer";

function parseBody(text: string): string {
  return text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-[#363025] underline underline-offset-2 hover:text-[#363025]/60 transition-colors">$1</a>'
  );
}

export function generateStaticParams() {
  return blogok.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Nicol Weddings`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://nicolweddings.hu/blog/${post.slug}`,
      siteName: "Nicol Weddings and Events",
      images: [{ url: post.cover, width: 1200, height: 630 }],
      locale: "hu_HU",
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `https://nicolweddings.hu${post.cover}`,
    datePublished: post.date,
    author: { "@type": "Person", name: "Nicol" },
    publisher: {
      "@type": "Organization",
      name: "Nicol Weddings and Events",
      url: "https://nicolweddings.hu",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavbarSimple />
      <main className="bg-[#F5F3ED] min-h-screen pt-[92px]">

        {/* Borítókép */}
        <div className="relative w-full h-[30vh] md:h-[55vh] overflow-hidden">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 60%" }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Tartalom */}
        <article className="max-w-2xl mx-auto px-6 pt-14 pb-6">

          {/* Meta */}
          <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/35 mb-4">
            {new Date(post.date).toLocaleDateString("hu-HU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {/* Cím */}
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#363025] leading-tight tracking-[-0.02em] mb-8">
            {post.title}
          </h1>

          {/* Intro */}
          <p className="font-[family-name:var(--font-quicksand)] text-[16px] text-[#363025]/70 leading-relaxed mb-10 italic border-l-2 border-[#363025]/20 pl-5">
            {post.intro}
          </p>

          {/* Szekciók */}
          {post.sections.map((s, i) => (
            <div key={i} className="mb-10">
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light text-[#363025] mb-4 leading-snug">
                {s.heading}
              </h2>
              <div className="font-[family-name:var(--font-quicksand)] text-[15px] text-[#363025]/65 leading-relaxed space-y-3">
                {s.body.split("\n\n").map((para, j) => (
                  <p key={j} style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{ __html: parseBody(para) }} />
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          {post.cta && (
            <div className="mt-14 pt-10 border-t border-[#363025]/10 text-center">
              <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025] mb-6 italic">
                Kész vagy megtennni az első lépést?
              </p>
              <a
                href={post.cta.href}
                className="inline-block border border-[#363025]/50 text-[#363025] font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
              >
                {post.cta.label}
              </a>
            </div>
          )}

          {/* Vissza */}
          <div className="mt-6 md:mt-12 text-center">
            <a
              href={`/blog#${post.slug}`}
              className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.2em] uppercase text-[#363025]/35 hover:text-[#363025] transition-colors duration-300"
            >
              ← Vissza a bloghoz
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
