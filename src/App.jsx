import Header from "./components/Header";
import Hero from "./components/Hero";
import MissionStrip from "./components/MissionStrip";
import ProductSection from "./components/ProductSection";
import SolutionsSection from "./components/SolutionsSection";
import SignalSection from "./components/SignalSection";
import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = {
  "--neurion-green": "#38B26D",
  "--neurion-cyan": "#30C7D9",
  "--neurion-graphite": "#1F252B",
  "--neurion-surface": "#F7F9FA",
};

export default function App() {
  return (
    <main style={theme} className="min-h-screen bg-[#FCFDFC] text-[#1F252B] antialiased">
      <Header />
      <Hero />
      <MissionStrip />
      <ProductSection />
      <SolutionsSection />
      <SignalSection />
      <AboutSection />
      <Contact />
      <Footer />
    </main>
  );
}
