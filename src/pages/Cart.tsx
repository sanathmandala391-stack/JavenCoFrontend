import { useState, useEffect } from 'react';
import { getCart, removeFromCart } from '@/services/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const [cart, setCart] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      setLoading(true);
      const { data } = await getCart();
      // Safety: If data is null or undefined, set empty items array
      setCart(data || { items: [] });
    } catch (err) {
      console.error("Cart fetch failed:", err);
      setCart({ items: [] });
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (productId: string) => {
    if (!productId) return;
    
    try {
      setIsUpdating(true);
      // Calls your API service: API.delete(`/cart/${productId}`)
      await removeFromCart(productId);
      
      // Re-fetch data to ensure UI matches Database exactly
      await loadCart();
    } catch (err) {
      console.error("Remove Error:", err);
      alert("Failed to remove item. Please refresh.");
    } finally {
      setIsUpdating(false);
    }
  };

  // Bulletproof Image Helper
  const getImg = (item: any) => {
    const product = item.productId;
    if (!product) return '';
    return product.image || product.imageUrl || product.image?.secure_url || '';
  };

  // Safe subtotal calculation
  const subtotal = cart?.items?.reduce((acc: number, item: any) => {
    const price = item.productId?.price || 0;
    return acc + (price * item.quantity);
  }, 0) || 0;

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-brand-off-white">
      <div className="animate-pulse font-bold tracking-[0.3em] uppercase text-xs">Syncing Bag...</div>
    </div>
  );

  return (
    <main className="min-h-screen bg-brand-off-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 px-4 max-w-6xl mx-auto w-full">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12 italic">Your Bag</h1>

        {!cart || cart.items.length === 0 ? (
          <div className="py-24 text-center border-2 border-dashed border-gray-200 bg-white/50">
            <p className="text-gray-400 uppercase tracking-widest text-xs mb-6">Your bag is currently empty</p>
            <Link to="/shop" className="bg-black text-white px-12 py-4 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-zinc-800 transition-all">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* ITEM LIST */}
            <div className="lg:col-span-2 space-y-10">
              {cart.items.map((item: any, index: number) => {
                // Skip rendering if product data is missing
                if (!item.productId) return null;

                return (
                  <div 
                    // FIX: Use item._id or index for key to avoid duplicate key errors
                    key={item._id || `${item.productId._id}-${index}`} 
                    className="flex gap-6 border-b border-black/5 pb-10 items-center animate-fadeIn"
                  >
                    {/* Image Container */}
                    <div className="w-24 h-32 md:w-32 md:h-44 bg-white shrink-0 overflow-hidden border border-gray-100">
                      <img 
                        src={getImg(item)} 
                        className="w-full h-full object-cover"
                        alt={item.productId.name}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="font-bold uppercase text-lg tracking-tight leading-tight">
                          {item.productId.name}
                        </h2>
                        <p className="font-bold text-lg">₹{item.productId.price?.toLocaleString()}</p>
                      </div>
                      
                      <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-6">
                        Quantity: {item.quantity}
                      </div>

                      <button 
                        // FIX: Pass the PRODUCT ID to the remove function
                        onClick={() => handleRemove(item.productId._id)}
                        disabled={isUpdating}
                        className="text-[10px] font-bold underline uppercase tracking-[0.2em] hover:text-red-600 transition-colors disabled:opacity-50"
                      >
                        {isUpdating ? 'Updating...' : 'Remove Item'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ORDER SUMMARY */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 border border-gray-100 shadow-sm sticky top-32">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 pb-4 border-b border-black/5">Order Summary</h3>
                
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-xs uppercase tracking-wider">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-bold">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs uppercase tracking-wider">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-green-600 font-bold italic">Free</span>
                  </div>
                </div>

                <div className="flex justify-between border-t border-black pt-6 mb-10">
                  <span className="font-bold uppercase text-sm tracking-tighter">Total</span>
                  <span className="text-3xl font-bold tracking-tighter">₹{subtotal.toLocaleString()}</span>
                </div>

                <Link 
                  to="/checkout" 
                  className="block w-full bg-black text-white text-center py-6 font-bold uppercase text-[11px] tracking-[0.25em] hover:bg-zinc-800 transition-all active:scale-[0.98]"
                >
                  Proceed to Checkout
                </Link>
                
                <p className="text-[9px] text-center text-gray-400 mt-6 leading-relaxed uppercase tracking-widest">
                  Secure Payment Gateway • All Taxes Included
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}