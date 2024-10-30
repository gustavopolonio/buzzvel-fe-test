import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface Slide {
  content: string
  author: {
    avatarUrl: string
    name: string
    about: string
  }
}

interface CarouselProps {
  slides: Slide[]
}

export function Carousel({
  slides,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function nextSlide() {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  function prevSlide() {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  return (
    <div className="mt-16 relative w-full mx-auto space-y-16">
      <div className="overflow-hidden">
        <div
          className="flex items-center transition-transform duration-500 ease-in-out sm:gap-6 sm:ml-6 xl:ml-20"
          style={
            {
              transform: screenWidth < 640
                ? `translateX(calc(${(currentSlide + 1) * 6}% + (-${currentSlide * 100}%)))`
                : `translateX(-${(currentSlide * 364) + (currentSlide * 24)}px)`,
            }
          }
        >
          {slides.map((slide, i) => (
            <div
              key={slide.author.name}
              className={`w-[94%] flex-shrink-0 flex flex-col bg-white rounded-lg pt-28 pb-8 px-8 space-y-8 h-fit shadow-image sm:w-[364px] ${currentSlide === i && 'lg:pt-32 lg:pb-14'}`}
            >
              <p className="text-start h-44">{slide.content}</p>
              <div className="flex items-center gap-2">
                <img
                  src={slide.author.avatarUrl}
                  alt={slide.author.name}
                />
                <div className="flex flex-col items-start">
                  <span>{slide.author.name}</span>
                  <span className="text-sm text-slate-600">{slide.author.about}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6 lg:padded lg:justify-start">
        <Button onClick={prevSlide} rounded>
          <ArrowLeft />
        </Button>

        <Button onClick={nextSlide} rounded>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
