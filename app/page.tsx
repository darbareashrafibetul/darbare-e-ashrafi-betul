import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-950 via-green-900 to-black text-white">
      <Navbar />

      <Hero />

      <Footer />

      <FloatingWhatsapp />
    </main>
  );
}