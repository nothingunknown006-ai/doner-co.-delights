import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Story } from "@/components/site/Story";
import { Menu } from "@/components/site/Menu";
import { SignatureFood } from "@/components/site/SignatureFood";
import { Locations } from "@/components/site/Locations";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <Story />
      <SignatureFood />
      <Menu />
      <Locations />
      <Footer />
    </main>
  );
};

export default Index;
