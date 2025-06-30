import { ShoppingCart } from 'lucide-react';

const BuyProducts = ({ darkMode }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <ShoppingCart className="mr-2" /> Buy Farm Products
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product listings would go here */}
      </div>
    </div>
  );
};

export default BuyProducts;