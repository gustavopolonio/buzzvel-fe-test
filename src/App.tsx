import { HelmetProvider } from 'react-helmet-async';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Reviews } from './components/Reviews';
import { Section1 } from './components/Section1';
import { Section2 } from './components/Section2';
import { Section3 } from './components/Section3';
import { Section4 } from './components/Section4';
import { SEO } from './components/SEO';

export function App() {
  return (
    <HelmetProvider>
      <SEO
        title="Soller | Power your home"
        description="Soller offers complete solar energy solutions for homes, providing savings and sustainability. Discover how to harness the power of the sun and reduce your energy bills with our specialized service."
        keywords="Soller, solar panels, solar energy, home solar power, renewable energy, sustainable energy, solar solutions, energy savings"
        name="Soller"
        type="website"
      />

      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Reviews />
      <Section4 />
      <Footer />
    </HelmetProvider>
  );
}
