import { ArrowRight, Headphones } from 'lucide-react';
import { Button } from './elements/Button';

export function Header() {
  return (
    <header className="padded py-2.5 flex items-center justify-between lg:py-6">
      <nav className="flex items-center gap-9">
        <span className="text-[32px] leading-9 font-bold">soller</span>
        <ul className="hidden gap-4 md:flex">
          <li>
            <a href="/" className="font-medium py-3 px-2">Products</a>
          </li>
          <li>
            <a href="/" className="font-medium py-3 px-2">Solutions</a>
          </li>
          <li>
            <a href="/" className="font-medium py-3 px-2">Services</a>
          </li>
          <li>
            <a href="/" className="font-medium py-3 px-2">Configure</a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-10">
        <span className="flex items-center gap-4 text-sky-700 font-medium">
          <Headphones />
          {' '}
          555 818 282
        </span>
        <Button variant="secondary" className="hidden xl:flex">
          Request a Quote
          <ArrowRight />
        </Button>
      </div>

      <img className="absolute top-0 right-0 -z-10 lg:w-[715px]" src="/images/mobile/hero-background.png" alt="Man installing solar panel" />
    </header>
  );
}
