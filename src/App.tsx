// eslint

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Reviews } from './components/Reviews';
import { Section1 } from './components/Section1';
import { Section2 } from './components/Section2';
import { Section3 } from './components/Section3';

export function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Reviews />
    </div>
  );
}
