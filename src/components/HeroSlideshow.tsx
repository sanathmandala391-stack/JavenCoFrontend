import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchHeroes } from '@/services/api';

export default function HeroSlideshow() {
  const [slides, setSlides] = useState<any[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const getSlides = async () => {
      try {
        const { data } = await fetchHeroes();
        setSlides(data);
      } catch (err) {
        console.error("Error fetching hero slides", err);
      }
    };
    getSlides();
  }, []);

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slides]);

  if (slides.length === 0) return <div className="h-screen bg-brand-charcoal/10" />;

  return (
    <section className="relative h-screen w-full mt-16 md:mt-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide]._id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Real image from Cloudinary via Backend */}
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-brand-off-white text-center px-4">
            <h2 className="text-4xl md:text-7xl font-bold mb-4 tracking-tighter">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg md:text-2xl font-light uppercase tracking-widest">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-brand-black w-8' : 'bg-brand-charcoal/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}