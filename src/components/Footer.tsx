import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-off-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">JAVEN & CO.</h3>
            <p className="text-sm text-brand-off-white/70">
              Premium minimal streetwear
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">SHOP</h4>
            <ul className="space-y-2 text-sm text-brand-off-white/70">
              <li>
                <Link to="/shop" className="hover:text-brand-off-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop?category=tops" className="hover:text-brand-off-white transition-colors">
                  Tops
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bottoms" className="hover:text-brand-off-white transition-colors">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link to="/shop?category=accessories" className="hover:text-brand-off-white transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">COMPANY</h4>
            <ul className="space-y-2 text-sm text-brand-off-white/70">
              <li>
                <Link to="/about" className="hover:text-brand-off-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-off-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">LEGAL</h4>
            <ul className="space-y-2 text-sm text-brand-off-white/70">
              <li>
                <Link to="/privacy" className="hover:text-brand-off-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-brand-off-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-charcoal text-center text-sm text-brand-off-white/70">
          <p>&copy; {new Date().getFullYear()} JAVEN & CO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

