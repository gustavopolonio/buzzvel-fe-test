import { ArrowRight } from 'lucide-react';
import { Button } from './elements/Button';

export function Hero() {
  return (
    <div className="mt-[310px] py-12 space-y-16">
      <div className="space-y-6 text-center flex flex-col items-center">
        <h1 className="font-bold text-[40px] leading-[44px]">Get the Sun to Power Your Home</h1>
        <p className="text-lg">
          Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat
          turpis scelerisque.
        </p>
        <Button variant="secondary">
          Request a Quote
          <ArrowRight />
        </Button>
      </div>

      <div className="space-y-4">
        <span>
          “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
          orci dui consequat turpis scelerisque faucibus.”
        </span>
        <div className="flex items-center gap-4">
          <img src="/images/mobile/customer1.png" alt="Rwanda Melflor" />
          <div className="flex flex-col">
            <span className="text-lg">Rwanda Melflor</span>
            <span className="text-slate-600">zerowaste.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
