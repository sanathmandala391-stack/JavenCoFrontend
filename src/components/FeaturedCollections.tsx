import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {fetchCollections}  from '@/services/api'
 
export default function FeaturedCollections() {
  const [collections, setCollections] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCollections = async () => {
      try {
        const { data } = await fetchCollections()
        setCollections(data)
      } catch (err) {
        console.error("Error fetching featured collections", err)
      } finally {
        setLoading(false)
      }
    }
    getCollections()
  }, [])

  if (loading) return <div className="py-24 text-center">Loading Collections...</div>

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-brand-off-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-5xl font-bold text-brand-black mb-12 md:mb-16 text-center"
        >
          FEATURED COLLECTIONS
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={collection.link || "/shop"}>
                <div className="relative aspect-square bg-brand-charcoal/10 overflow-hidden">
                  {/* Real image from Cloudinary via Backend */}
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
                </div>
                <h3 className="mt-4 text-sm md:text-base font-medium text-brand-black text-center uppercase tracking-wider">
                  {collection.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}