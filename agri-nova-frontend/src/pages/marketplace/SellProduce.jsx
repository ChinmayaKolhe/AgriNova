import { Package } from 'lucide-react';

const SellProduce = ({ darkMode }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <Package className="mr-2" /> Sell Your Produce
      </h1>
      
      <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-xl font-bold mb-4">List Your Products</h2>
        {/* Product listing form */}
      </div>
    </div>
  );
};

export default SellProduce;