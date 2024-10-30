import { useState } from 'react';
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

  function nextSlide() {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  function prevSlide() {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  return (
    <div className="mt-16 relative w-full max-w-md mx-auto space-y-16">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(${(currentSlide + 1) * 6}% + (-${currentSlide * 100}%)))` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.author.name}
              className="w-[94%] flex-shrink-0 flex flex-col bg-white rounded-lg pt-28 pb-8 px-8 space-y-8 h-fit"
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

      <div className="flex justify-center gap-6">
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
