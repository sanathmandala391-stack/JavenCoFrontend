import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fetchProducts } from '@/services/api'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await fetchProducts()
        setProducts(data)
      } catch (err) {
        console.error("Failed to fetch products", err)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  return (
    <main className="min-h-screen bg-brand-off-white">
      <Navbar />
      <div className="pt-24 md:pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 tracking-tighter">COLLECTIONS</h1>
        
        {loading ? (
          <div className="h-64 flex items-center justify-center">LOADING...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <motion.div key={product._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Link to={`/product/${product._id}`} className="group">
                  <div className="aspect-[3/4] bg-brand-charcoal/5 overflow-hidden mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest">{product.name}</h3>
                  <p className="text-brand-charcoal">₹{product.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
