/*import { useState, useEffect } from 'react';
import { createOrder, getCart } from '@/services/api';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CheckoutPage() {
  const [address, setAddress] = useState('');
  const [cart, setCart] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Load cart summary on mount to show the user their total
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await getCart();
        if (!data || data.items.length === 0) navigate('/shop');
        setCart(data);
      } catch (err) {
        navigate('/cart');
      }
    };
    fetchCart();
  }, [navigate]);

  const subtotal = cart?.items?.reduce((acc: number, item: any) => 
    acc + (item.productId?.price * item.quantity), 0) || 0;

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Create Order (Backend now handles cart clearing and total calc)
      await createOrder({ address });

      alert("ORDER PLACED! Thank you for shopping.");
      navigate('/shop');
    } catch (err: any) {
      alert(err.response?.data?.message || "Checkout failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-brand-off-white flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 max-w-xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-10 uppercase tracking-tighter italic">Checkout</h1>
        
        <div className="bg-white border border-gray-100 p-8 shadow-sm">
          {/* Order Summary Preview *//*
          <div className="mb-8 border-b pb-6">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Your Order</h2>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{cart?.items?.length} Items</span>
              <span className="text-xl font-bold">₹{subtotal.toLocaleString()}</span>
            </div>
          </div>

          <form onSubmit={handleCheckout} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold mb-3 uppercase tracking-widest">Shipping Address</label>
              <textarea 
                placeholder="Full Address, City, State, Pincode"
                className="w-full p-4 border border-gray-200 focus:border-black focus:outline-none transition-colors min-h-[120px]" 
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-black text-white py-5 font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all disabled:bg-gray-400"
              >
                {loading ? 'PROCESSING...' : 'PLACE ORDER'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}*/
import { useState, useEffect } from 'react';
import { createOrder, getCart } from '@/services/api';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

export default function CheckoutPage() {
  const [address, setAddress] = useState('');
  const [cart, setCart] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCart().then(({ data }) => {
      if (!data || data.items.length === 0) navigate('/shop');
      setCart(data);
    }).catch(() => navigate('/cart'));
  }, [navigate]);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createOrder({ address });
      alert("ORDER PLACED!");
      navigate('/shop');
    } catch (err: any) {
      alert(err.response?.data?.message || "Checkout failed.");
    } finally {
      setLoading(false);
    }
  };

  const subtotal = cart?.items?.reduce((acc: number, item: any) => acc + (item.productId?.price * item.quantity), 0) || 0;

  return (
    <main className="min-h-screen bg-brand-off-white flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 max-w-xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-10 uppercase tracking-tighter italic">Checkout</h1>
        <div className="bg-white border p-8 shadow-sm">
          <div className="mb-8 border-b pb-6 flex justify-between items-center">
            <span className="text-sm font-medium">{cart?.items?.length} Items</span>
            <span className="text-xl font-bold">₹{subtotal.toLocaleString()}</span>
          </div>

          <form onSubmit={handleCheckout} className="space-y-6">
            <textarea placeholder="Shipping Address" className="w-full p-4 border border-gray-200 min-h-[120px] focus:outline-none" onChange={(e) => setAddress(e.target.value)} required />
            <button type="submit" disabled={loading} className="w-full bg-black text-white py-5 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-4">
              {loading ? <><div className="button-loader" /> PROCESSING...</> : 'PLACE ORDER'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}