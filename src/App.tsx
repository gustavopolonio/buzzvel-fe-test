import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Reviews } from './components/Reviews';
import { Section1 } from './components/Section1';
import { Section2 } from './components/Section2';
import { Section3 } from './components/Section3';
import { Section4 } from './components/Section4';

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Reviews />
      <Section4 />
      <Footer />
    </>
  );
}
