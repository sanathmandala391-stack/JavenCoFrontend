/*import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Added Link
import { loginUser } from '@/services/api';
import Navbar from '@/components/Navbar';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await loginUser({ email, password });
      localStorage.setItem('token', data.token);
      alert('Login Successful');
      navigate('/shop');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Login Failed');
    }finally{
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-brand-off-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="max-w-md w-full space-y-6 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-center">LOGIN</h1>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full bg-brand-black text-white py-3 hover:bg-brand-charcoal transition-colors">
            ENTER
          </button>

          {/* Registration Link Section *//*
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link 
              to="/register" 
              className="font-semibold text-brand-black hover:underline"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}*/
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '@/services/api';
import Navbar from '@/components/Navbar';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await loginUser({ email, password });
      localStorage.setItem('token', data.token);
      navigate('/shop');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Login Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-brand-off-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="max-w-md w-full space-y-6 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-center tracking-tighter">LOGIN</h1>
          <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 focus:outline-none" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 focus:outline-none" onChange={(e) => setPassword(e.target.value)} required />
          
          <button disabled={loading} className="w-full bg-brand-black text-white py-3 flex items-center justify-center gap-3 hover:bg-brand-charcoal transition-colors">
            {loading ? <div className="button-loader" /> : "ENTER"}
          </button>
          
          <p className="text-center text-sm text-gray-600">
            Don't have an account? <Link to="/register" className="font-semibold text-brand-black hover:underline">Register here</Link>
          </p>
        </form>
      </div>
    </main>
  );
}