import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const token = localStorage.getItem("token")

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-brand-off-white/95 backdrop-blur-sm border-b border-brand-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold text-brand-black tracking-wider">
            JAVEN & CO.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-sm font-medium">SHOP</Link>
            <Link to="/about" className="text-sm font-medium">ABOUT</Link>
            <Link to="/contact" className="text-sm font-medium">CONTACT</Link>
            <Link to="/cart" className="text-sm font-medium">CART</Link>

            {/* AUTH LINKS */}
            {!token ? (
              <>
                <Link to="/login" className="text-sm font-medium">LOGIN</Link>
                <Link to="/register" className="text-sm font-medium">REGISTER</Link>
              </>
            ) : (
              <>
                {/* ✅ Added ORDERS link for logged-in users */}
                <Link to="/my-orders" className="text-sm font-medium text-brand-black hover:text-gray-600">
                    ORDERS
                </Link>
                <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-red-600 hover:text-red-800"
                >
                    LOGOUT
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-4 border-t"
          >
            <Link to="/shop" className="block text-sm font-medium">SHOP</Link>
            <Link to="/about" className="block text-sm font-medium">ABOUT</Link>
            <Link to="/contact" className="block text-sm font-medium">CONTACT</Link>
            <Link to="/cart" className="block text-sm font-medium">CART</Link>

            {!token ? (
              <>
                <Link to="/login" className="block text-sm font-medium">LOGIN</Link>
                <Link to="/register" className="block text-sm font-medium">REGISTER</Link>
              </>
            ) : (
              <>
                {/* ✅ Added ORDERS link for mobile */}
                <Link to="/my-orders" className="block text-sm font-medium">ORDERS</Link>
                <button
                    onClick={handleLogout}
                    className="block text-left text-sm font-medium text-red-600"
                >
                    LOGOUT
                </button>
              </>
            )}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
