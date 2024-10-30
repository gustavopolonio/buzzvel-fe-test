import { ArrowRight } from 'lucide-react';
import { Button } from './elements/Button';

export function Section4() {
  return (
    <section className="py-12 text-center flex flex-col items-center bg-purple-900 relative">
      <span className="padded text-amber-300 font-medium">Get the Sun to power your home</span>
      <h2 className="padded text-white mt-2 font-bold text-[32px] leading-9">All the power that you need for your house is now available</h2>
      <Button className="mt-6">
        Request a Quote
        <ArrowRight />
      </Button>
      <span className="mt-4 text-white">Egestas fringilla aliquam leo</span>
      <img className="mt-16 z-10" src="/images/mobile/macbook.png" alt="Mackbook" />
      <img className="absolute left-0 bottom-0 z-0" src="/images/mobile/feature4-circle.png" alt="" />
    </section>
  );
}
