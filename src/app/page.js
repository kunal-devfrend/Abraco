import Header from "./components/Header";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import MenuHighlights from "./components/Menu";
import Shop from "./components/Shop";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutSection/>
    <MenuHighlights/>
    <Shop/>
    <Contact/>
    </>
  );
}
