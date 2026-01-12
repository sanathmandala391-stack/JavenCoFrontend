import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-off-white">
      <Navbar />
      
      <div className="pt-24 md:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-brand-black mb-12 text-center"
          >
            ABOUT
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Hero Image */}
            <div className="relative aspect-video bg-brand-charcoal/10 mb-12">
              {/* Placeholder for about hero image - blank as requested */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-brand-charcoal/30 text-xs">About Hero Image</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-base md:text-lg text-brand-charcoal leading-relaxed">
                JAVEN & CO. was founded with a vision to redefine premium streetwear through 
                minimalism and thoughtful design. We believe that great fashion doesn't need 
                to shout—it speaks through quality, comfort, and timeless style.
              </p>

              <p className="text-base md:text-lg text-brand-charcoal leading-relaxed">
                Our commitment extends beyond aesthetics. Every piece in our collection is 
                crafted with sustainable practices and premium materials, ensuring that your 
                investment in style is also an investment in quality and longevity.
              </p>

              <p className="text-base md:text-lg text-brand-charcoal leading-relaxed">
                We design for the modern individual who values both form and function, who 
                appreciates the subtle details that make a garment exceptional, and who seeks 
                to build a wardrobe that transcends seasonal trends.
              </p>
            </div>

            {/* Additional Image */}
            <div className="relative aspect-[4/3] bg-brand-charcoal/10 mt-12">
              {/* Placeholder for additional about image - blank as requested */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-brand-charcoal/30 text-xs">About Image</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

