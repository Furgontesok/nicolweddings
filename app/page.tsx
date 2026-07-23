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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Fit />
        <Services />
        <Video />
        <About />
        <ParallaxImage src="/images/fooldal-kep.jpg" />
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
