import { ArrowRight, Headphones } from 'lucide-react';
import { Button } from './elements/Button';

export function Header() {
  function renderNavLinks() {
    const navItems = ['Products', 'Solutions', 'Services', 'Configure'];

    return navItems.map((item) => (
      <li>
        <a href="/" className="font-medium py-3 px-2 rounded-md transition duration-300 ease-in-out hover:bg-slate-100">
          {item}
        </a>
      </li>
    ));
  }

  return (
    <header className="padded py-2.5 flex items-center justify-between lg:py-6">
      <nav className="flex items-center gap-9">
        <a href="/" className="text-[32px] leading-9 font-bold">soller</a>
        <ul className="hidden gap-4 md:flex">
          {renderNavLinks()}
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

      <img className="absolute top-0 right-0 -z-10 lg:w-[715px]" src="/images/hero-background.png" alt="Man installing solar panel" />
    </header>
  );
}
