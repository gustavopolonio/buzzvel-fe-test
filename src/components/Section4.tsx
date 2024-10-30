import { ArrowRight } from 'lucide-react';
import { Button } from './elements/Button';

export function Section4() {
  return (
    <section className="py-12 text-center flex flex-col items-center bg-purple-900 relative md:bg-purple-700 md:text-start">
      <div className="padded md:flex md:gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-amber-300 font-medium lg:text-xl">Get the Sun to power your home</span>
          <h2 className="text-white mt-2 font-bold text-[32px] leading-9 sm:w-[80%] lg:w-full lg:text-[56px] lg:leading-[60px] lg:font-extrabold">All the power that you need for your house is now available</h2>
        </div>
        <div className="mt-6 space-y-4 flex flex-col items-center z-10 md:shrink-0">
          <Button>
            Request a Quote
            <ArrowRight />
          </Button>
          <span className="block text-white lg:text-lg">Egestas fringilla aliquam leo</span>
        </div>
      </div>
      <div className="z-10 mt-16 sm:w-[80%] sm:max-w-4xl">
        <img className="w-full" src="/images/macbook.png" alt="Mackbook" />
      </div>
      <img className="absolute left-0 bottom-0 z-0 md:right-0 md:top-0 md:left-auto md:rotate-180" src="/images/feature4-circle.png" alt="" />
    </section>
  );
}
