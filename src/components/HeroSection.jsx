import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage1 from '../assets/images/scrollbar-header/hero--1.svg';
import heroImage2 from '../assets/images/scrollbar-header/hero--2.svg';
import heroImage3 from '../assets/images/scrollbar-header/hero--3.svg';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: heroImage1,
        },
        {
            image: heroImage2,
        },
        {
            image: heroImage3,
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden bg-gray-100">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt=""
                        className="w-full h-full object-contain"
                    />
                </div>
            ))}

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-3 rounded-full shadow-lg transition-all cursor-pointer w-8 h-8 md:w-12 md:h-12 flex items-center justify-center"
            >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
            </button>

            <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-3 rounded-full shadow-lg transition-all cursor-pointer w-8 h-8 md:w-12 md:h-12 flex items-center justify-center"
            >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 md:gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`rounded-full transition-all cursor-pointer ${index === currentSlide 
                            ? 'bg-secondary w-4 h-1.5 md:w-6 md:h-2.5' 
                            : 'bg-white/50 w-1.5 h-1.5 md:w-2.5 md:h-2.5'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
