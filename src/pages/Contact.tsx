import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <main className="min-h-screen bg-brand-off-white">
      <Navbar />
      
      <div className="pt-24 md:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-brand-black mb-12 text-center"
          >
            CONTACT
          </motion.h1>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-brand-charcoal/30 bg-transparent text-brand-black placeholder-brand-charcoal/50 focus:outline-none focus:border-brand-black transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-brand-charcoal/30 bg-transparent text-brand-black placeholder-brand-charcoal/50 focus:outline-none focus:border-brand-black transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-brand-charcoal/30 bg-transparent text-brand-black placeholder-brand-charcoal/50 focus:outline-none focus:border-brand-black transition-colors"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={8}
                className="w-full px-4 py-3 border border-brand-charcoal/30 bg-transparent text-brand-black placeholder-brand-charcoal/50 focus:outline-none focus:border-brand-black transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-brand-black text-brand-off-white font-medium uppercase tracking-wider hover:bg-brand-charcoal transition-colors"
            >
              SEND MESSAGE
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center space-y-4"
          >
            <p className="text-brand-charcoal">
              Or reach us directly at
            </p>
            <p className="text-brand-black font-medium">
              hello@javenco.com
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

