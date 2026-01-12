// components/OrderStatusTracker.tsx
const steps = ['Order Confirmed', 'Shipped', 'Delivered'];

export default function OrderStatusTracker({ currentStatus }: { currentStatus: string }) {
  const currentIndex = steps.indexOf(currentStatus);

  return (
    <div className="space-y-6 py-4">
      {steps.map((step, index) => (
        <div key={step} className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            {/* The Circle */}
            <div className={`h-4 w-4 rounded-full border-2 ${
              index <= currentIndex ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300'
            }`} />
            
            {/* The Vertical Line */}
            {index < steps.length - 1 && (
              <div className={`w-[2px] h-12 ${
                index < currentIndex ? 'bg-green-500' : 'bg-gray-200'
              }`} />
            )}
          </div>

          <div className="flex flex-col">
            <span className={`text-sm font-bold uppercase tracking-wider ${
              index <= currentIndex ? 'text-black' : 'text-gray-400'
            }`}>
              {step}
            </span>
            {index <= currentIndex && (
              <span className="text-[10px] text-gray-500">
                {index === currentIndex ? "In Progress" : "Completed"}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}