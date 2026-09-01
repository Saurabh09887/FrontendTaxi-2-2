import CitiesSection from "../sections/CitiesSection";
import FaqSection from "../sections/FaqSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import Driver from "./Driver";
import Vehicles from "./Vehicles";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Vehicles embedded />
      <Driver embedded />
      <FeaturesSection />
      <CitiesSection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
};

export default Home;
