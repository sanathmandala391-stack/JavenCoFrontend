import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fetchBrands } from '@/services/api'

export default function BrandStory() {
  const [brands, setBrands] = useState<any[]>([])

  useEffect(() => {
    fetchBrands().then(res => setBrands(res.data))
  }, [])

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-brand-off-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Brand Visual - IMAGE ADDED HERE */}
          <div className="relative aspect-square md:aspect-[4/3] bg-brand-charcoal/5 overflow-hidden rounded-sm">
            {brands.length > 0 ? (
              <img 
                src={brands[0].logo} // Displays the first brand image from your Admin data
                alt="Brand Feature"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            ) : (
              // Fallback while loading
              <div className="w-full h-full flex items-center justify-center p-12">
                 <h2 className="text-8xl font-bold text-brand-black/5 absolute rotate-12">JAVEN</h2>
                 <p className="text-brand-charcoal text-center font-light italic">"Minimalism is the ultimate sophistication."</p>
              </div>
            )}
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black">
              OUR STORY
            </h2>
            <p className="text-base md:text-lg text-brand-charcoal leading-relaxed">
              JAVEN & CO. represents a new era of premium streetwear, where minimalism meets modern design. 
              We craft pieces that transcend trends, focusing on quality, comfort, and timeless style.
            </p>
            <p className="text-base md:text-lg text-brand-charcoal leading-relaxed">
              Every garment is thoughtfully designed for the contemporary individual who values both 
              aesthetics and substance.
            </p>

            {/* Dynamic Brand Logos from Backend */}
            {brands.length > 0 && (
              <div className="pt-8 border-t border-brand-charcoal/10">
                <p className="text-xs font-bold tracking-widest text-brand-charcoal/50 mb-4 uppercase">Our Partners</p>
                <div className="flex flex-wrap gap-8 opacity-60">
                  {brands.map((brand) => (
                    <img 
                      key={brand._id} 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all cursor-crosshair"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}