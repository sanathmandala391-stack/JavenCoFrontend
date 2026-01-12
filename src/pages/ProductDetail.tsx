import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductById, addToCart } from '@/services/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // State Management
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdding, setIsAdding] = useState(false);

  const sizes = ['S', 'M', 'L', 'XL'];

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;
      try {
        setLoading(true);
        setError(null);
        const { data } = await getProductById(id);
        
        // Safety check: If data is HTML (common error), throw error
        if (typeof data === 'string' && data.includes('<!doctype html>')) {
          throw new Error("Invalid API Response: Received HTML instead of JSON");
        }
        
        setProduct(data);
      } catch (err: any) {
        console.error("Fetch Error:", err);
        setError(err.response?.data?.message || "Could not load product details.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  // Bulletproof Cloudinary Image Resolver
  const getImageUrl = () => {
    if (!product) return '';
    const img = product.image || product.imageUrl;
    if (typeof img === 'string') return img;
    if (img?.secure_url) return img.secure_url;
    if (img?.url) return img.url;
    return 'https://via.placeholder.com/600x800?text=No+Image+Found';
  };

  const handleAdd = async () => {
    // 1. Validation Checks
    if (!localStorage.getItem('token')) {
      alert("Please login to add items to your bag.");
      navigate('/login');
      return;
    }

    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    try {
      setIsAdding(true);
      const productId = product._id || product.id;
      
      // 2. API Call
      await addToCart(productId, quantity);
      
      alert(`${product.name} added to bag!`);
      navigate('/cart');
    } catch (err: any) {
      console.error("Cart Error:", err.response?.data || err.message);
      const msg = err.response?.data?.message || "Failed to add to bag. Try again.";
      alert(msg);
      
      if (err.response?.status === 401) navigate('/login');
    } finally {
      setIsAdding(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-brand-off-white">
      <div className="animate-pulse text-sm font-bold tracking-[0.3em] uppercase">Loading Product...</div>
    </div>
  );

  if (error || !product) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-off-white px-4 text-center">
      <h2 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Something went wrong</h2>
      <p className="text-gray-500 mb-8">{error || "Product not found."}</p>
      <Link to="/shop" className="border-b-2 border-black pb-1 font-bold text-sm uppercase">Back to Collection</Link>
    </div>
  );

  return (
    <main className="min-h-screen bg-brand-off-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 px-4 md:px-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* IMAGE SECTION */}
          <div className="bg-white border border-gray-100 p-2 shadow-sm aspect-[3/4] overflow-hidden group">
            <img 
              src={getImageUrl()} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x800?text=Image+Not+Found'; }}
            />
          </div>

          {/* DETAILS SECTION */}
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{product.category || 'Collection'}</span>
              <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mt-2 mb-4 leading-none">
                {product.name}
              </h1>
              <p className="text-2xl font-medium">₹{product.price?.toLocaleString()}</p>
            </div>

            <div className="space-y-10">
              {/* DESCRIPTION */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">The Details</h3>
                <p className="text-gray-600 leading-relaxed max-w-md">
                  {product.description || "Premium minimalist essential. Crafted for durability and style."}
                </p>
              </div>

              {/* SIZE SELECTOR */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-12 w-16 border text-xs font-bold transition-all duration-300 ${
                        selectedSize === size ? 'bg-black text-white border-black' : 'bg-white border-gray-200 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-gray-200">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-gray-50 border-r border-gray-200">−</button>
                  <span className="px-6 font-bold text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-50 border-l border-gray-200">+</button>
                </div>
              </div>

              {/* CTA */}
              <button 
                onClick={handleAdd}
                disabled={isAdding}
                className={`w-full py-5 font-bold uppercase tracking-[0.2em] transition-all ${
                  isAdding ? 'bg-gray-400 cursor-not-allowed' : 'bg-black text-white hover:bg-zinc-800 active:scale-[0.98]'
                }`}
              >
                {isAdding ? 'Adding...' : selectedSize ? 'Add to Bag' : 'Choose a Size'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}