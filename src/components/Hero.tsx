import { ArrowRight } from 'lucide-react';
import { Button } from './elements/Button';

export function Hero() {
  return (
    <div className="padded mt-[310px] py-12 space-y-16 md:mt-0 md:max-w-[480px] md:py-8 lg:max-w-[600px] xl:max-w-[750px]">
      <div className="space-y-6 text-center flex flex-col items-center md:text-start md:items-start">
        <h1 className="font-bold text-[40px] leading-[44px] lg:text-7xl lg:font-extrabold">Get the Sun to Power Your Home</h1>
        <p className="text-md lg:text-2xl">
          Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat
          turpis scelerisque.
        </p>
        <Button variant="secondary">
          Request a Quote
          <ArrowRight />
        </Button>
      </div>

      <div className="space-y-4">
        <span className="lg:text-lg">
          “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
          orci dui consequat turpis scelerisque faucibus.”
        </span>
        <div className="flex items-center gap-4">
          <img src="/images/customer1.png" alt="Rwanda Melflor" />
          <div className="flex flex-col">
            <span className="text-lg">Rwanda Melflor</span>
            <span className="text-slate-600">zerowaste.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
