import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fit from "./components/Fit";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Video from "./components/Video";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Ebook from "./components/Ebook";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Fit />
        <Services />
        <Gallery />
        <Video />
        <About />
        <Testimonials />
        <Ebook />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
