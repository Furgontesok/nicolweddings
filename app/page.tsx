import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fit from "./components/Fit";
import Services from "./components/Services";
import ReferencesPreview from "./components/ReferencesPreview";
import Video from "./components/Video";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Ebook from "./components/Ebook";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParallaxImage from "./components/ParallaxImage";

export const metadata: Metadata = {
  title: "Nicol Weddings and Events — Esküvőszervező Magyarország",
  description: "Gőz-Csongrádi Nicol esküvőszervező és dekorátor. Teljes körű esküvőszervezés, 30 napos koordináció és tanácsadás. Álmai esküvője valóra válik.",
  alternates: { canonical: "https://www.nicolweddings.hu" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nicol Weddings and Events",
  description: "Esküvőszervező és dekorátor szolgáltatások Magyarországon.",
  url: "https://www.nicolweddings.hu",
  telephone: "+36305444676",
  email: "nicol.weddings@gmail.com",
  address: { "@type": "PostalAddress", addressCountry: "HU" },
  founder: { "@type": "Person", name: "Gőz-Csongrádi Nicol" },
  sameAs: [
    "https://www.instagram.com/nicolweddings",
    "https://www.facebook.com/nicolweddings",
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <Fit />
        <Services />
        <Video />
        <About />
        <ParallaxImage src="/images/fooldal-kep.jpg" alt="Esküvői hangulat — Nicol Weddings esküvőszervező Magyarország" />
        <div className="h-6 md:h-16 bg-[#D6D8CA]" />
        <Testimonials />
        <ReferencesPreview />
        <Ebook />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
