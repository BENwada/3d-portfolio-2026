import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./components/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechSatck from "./sections/TechStack";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechSatck />
    </>
  );
};

export default App;
