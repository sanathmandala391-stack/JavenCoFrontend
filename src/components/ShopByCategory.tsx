import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TopImg from '@/assets/images/Top.jpg'
import BottomImg from '@/assets/images/bottom.jpg'
import AccessImg from '@/assets/images/Acess.jpg'
import OutwearImg from '@/assets/images/outwear.jpg'
interface CategoryItem {
  name: string;
  image: string;
  path: string;
}

export default function ShopByCategory() {
  // SET PERMANENT IMAGES HERE
  // Make sure these files exist in your: public/images/ folder
const [categories] = useState<CategoryItem[]>([
  { name: 'TOPS', path: 'tops', image: TopImg },
  { name: 'BOTTOMS', path: 'bottoms', image: BottomImg },
  { name: 'ACCESSORIES', path: 'accessories', image: AccessImg },
  { name: 'OUTERWEAR', path: 'outerwear', image: OutwearImg }
])

  return (
    <section className="py-16 md:py-24 px-4 bg-brand-off-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center uppercase tracking-tighter">
          SHOP BY CATEGORY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* This Link ensures clicking 'TOPS' goes specifically to the tops collection */}
              <Link to={`/shop?category=${cat.path}`}>
                <div className="relative aspect-[3/2] bg-zinc-200 flex items-center justify-center group overflow-hidden border border-gray-100">
                  
                  {/* THE PERMANENT IMAGE */}
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* DARK OVERLAY (Makes text readable over any image) */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                    <h3 className="text-2xl md:text-4xl font-bold text-white tracking-[0.2em] uppercase z-10">
                      {cat.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}