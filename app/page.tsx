import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import History from "./components/History";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrayerTimings from "./components/PrayerTimings";
import Map from "./components/Map";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import Videos from "./components/Videos";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-950 via-green-900 to-black text-white">
      <Navbar />

      <Hero />

      <About />

      <Gallery />

      <History />

      <Contact />

      <PrayerTimings />

      <Map />

      <FloatingWhatsapp />

      <Videos />

      <Footer />
      
      <ScrollToTop />
    </main>
  );
}