"use client";

import React from "react";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    title: "Modern Workspace",
    description: "Ciptakan lingkungan kerja yang inspiratif dengan desain minimalis dan fungsionalitas tinggi."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
    title: "Creative Collaboration",
    description: "Kolaborasi adalah kunci inovasi. Kami membangun ruang yang mendukung pertukaran ide tanpa batas."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    title: "Eco-Friendly Design",
    description: "Menghadirkan nuansa alam ke dalam ruangan untuk meningkatkan kesejahteraan dan produktivitas."
  }
];


export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [nextSlide, isHovered]);

  return (
    <section 
      className="relative w-full mx-auto h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-[2.5rem] shadow-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />
          
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-linear"
            style={{ transform: index === currentIndex ? 'scale(1)' : 'scale(1.1)' }}
          />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 text-white">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
              <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">Featured Project</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl leading-tight">
              {slide.title}
            </h2>
            <p className="text-slate-200 text-lg md:text-xl max-w-xl mb-8 leading-relaxed opacity-90">
              {slide.description}
            </p>
            <button className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg">
              Learn More
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      ))}

      {}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-blue-600 shadow-xl"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-blue-600 shadow-xl"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 right-12 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentIndex 
                ? "w-10 h-2.5 bg-blue-500" 
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};