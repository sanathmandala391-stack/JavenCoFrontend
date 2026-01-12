/*import { useEffect, useState } from 'react';
import { fetchMyOrders } from '@/services/api';
import Navbar from '@/components/Navbar';

const STEPS = ['Order Confirmed', 'Shipped', 'Delivered'];

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchMyOrders().then((res) => setOrders(res.data));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-32 pb-20 px-4 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 italic uppercase tracking-tighter">My Orders</h1>
        
        {orders.map((order: any) => (
          <div key={order._id} className="bg-white p-6 border mb-6 shadow-sm">
            <div className="flex justify-between mb-6 border-b pb-4">
              <span className="text-xs font-mono text-gray-400">ID: {order._id.slice(-8).toUpperCase()}</span>
              <span className="font-bold text-green-600">₹{order.totalAmount}</span>
            </div>

            {/* --- 3-STEP TRACKER --- *//*
            <div className="space-y-4">
              {STEPS.map((step, index) => {
                // Find how far along the order is
                const currentStatusIndex = STEPS.indexOf(order.status);
                const isCompleted = index <= currentStatusIndex;

                return (
                  <div key={step} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`h-3 w-3 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}`} />
                      {index < STEPS.length - 1 && (
                        <div className={`w-[2px] h-8 ${isCompleted && index < currentStatusIndex ? 'bg-green-500' : 'bg-gray-200'}`} />
                      )}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${isCompleted ? 'text-black' : 'text-gray-300'}`}>
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}*/
import { useEffect, useState } from 'react';
import { fetchMyOrders } from '@/services/api';
import Navbar from '@/components/Navbar';

const STEPS = ['Order Confirmed', 'Shipped', 'Delivered'];

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyOrders()
      .then((res) => setOrders(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-brand-off-white">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl font-bold tracking-[0.5em] animate-pulse">JAVEN</h1>
        <p className="text-[10px] uppercase tracking-widest text-gray-400">Syncing Orders...</p>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-32 pb-20 px-4 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 italic uppercase tracking-tighter">My Orders</h1>
        {orders.map((order: any) => (
          <div key={order._id} className="bg-white p-6 border mb-6 shadow-sm">
            <div className="flex justify-between mb-6 border-b pb-4">
              <span className="text-xs font-mono text-gray-400 uppercase">ID: {order._id.slice(-8)}</span>
              <span className="font-bold text-green-600">₹{order.totalAmount}</span>
            </div>
            <div className="space-y-4">
              {STEPS.map((step, index) => {
                const currentStatusIndex = STEPS.indexOf(order.status);
                const isCompleted = index <= currentStatusIndex;
                return (
                  <div key={step} className="flex items-center gap-4">
                    <div className={`h-3 w-3 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}`} />
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${isCompleted ? 'text-black' : 'text-gray-300'}`}>{step}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}