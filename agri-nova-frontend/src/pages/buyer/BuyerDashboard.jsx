import { useState } from 'react';
import { 
  Search, Filter, ShoppingCart, MessageSquare, Heart 
} from 'lucide-react';
import ProductCard from '../../components/ProductCard';
import BuyerSidebar from '../../components/BuyerSidebar';

const BuyerDashboard = ({ darkMode, setDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 1000],
    rating: 0
  });

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Organic Wheat',
      farmer: 'Rajesh Farms',
      price: '₹2,150/quintal',
      location: 'Punjab',
      rating: 4.5,
      image: 'https://via.placeholder.com/150',
      quantity: '50 quintals available'
    },
    {
      id: 2,
      name: 'Basmati Rice',
      farmer: 'Singh Agro',
      price: '₹1,890/quintal',
      location: 'Haryana',
      rating: 4.2,
      image: 'https://via.placeholder.com/150',
      quantity: '30 quintals available'
    },
    {
      id: 3,
      name: 'Mustard Seeds',
      farmer: 'Gupta Farms',
      price: '₹5,400/quintal',
      location: 'Rajasthan',
      rating: 4.7,
      image: 'https://via.placeholder.com/150',
      quantity: '20 quintals available'
    }
  ];

  return (
    <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <BuyerSidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className={`sticky top-0 z-10 p-4 border-b ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h1 className="text-2xl font-bold">Marketplace</h1>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Search and Filters */}
          <div className={`p-4 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-sm'}`}>
            <div className="flex items-center mb-4">
              <div className="relative flex-1 mr-4">
                <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              <button className={`p-2 rounded-lg flex items-center ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <Filter className="w-5 h-5 mr-2" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                darkMode={darkMode} 
                onContact={() => console.log('Contact farmer:', product.farmer)}
                onFavorite={() => console.log('Added to favorites:', product.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;