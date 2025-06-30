import { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import ProductCard from '../../components/ProductCard';

const Marketplace = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: '',
    maxPrice: '',
    location: '',
    rating: 0
  });

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Organic Wheat',
      farmer: 'Rajesh Farms',
      price: 2150,
      location: 'Punjab',
      rating: 4.5,
      image: 'https://source.unsplash.com/random/300x200/?wheat',
      quantity: '50 quintals',
      category: 'grains'
    },
    {
      id: 2,
      name: 'Basmati Rice',
      farmer: 'Singh Agro',
      price: 1890,
      location: 'Haryana',
      rating: 4.2,
      image: 'https://source.unsplash.com/random/300x200/?rice',
      quantity: '30 quintals',
      category: 'grains'
    },
    {
      id: 3,
      name: 'Fresh Tomatoes',
      farmer: 'Gupta Produce',
      price: 40,
      location: 'Maharashtra',
      rating: 4.7,
      image: 'https://source.unsplash.com/random/300x200/?tomato',
      quantity: '200 kg',
      category: 'vegetables'
    },
    {
      id: 4,
      name: 'Alphonso Mangoes',
      farmer: 'Mango King',
      price: 120,
      location: 'Maharashtra',
      rating: 4.8,
      image: 'https://source.unsplash.com/random/300x200/?mango',
      quantity: '100 kg',
      category: 'fruits'
    }
  ];

  // Filter products based on search and filters
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.farmer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filters.category === 'all' || product.category === filters.category;
    const matchesPrice = (!filters.minPrice || product.price >= filters.minPrice) && 
                        (!filters.maxPrice || product.price <= filters.maxPrice);
    const matchesLocation = !filters.location || product.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesRating = product.rating >= filters.rating;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesLocation && matchesRating;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Marketplace</h1>
      
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
              placeholder="Search products or farmers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
              }`}
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-lg flex items-center ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <Filter className="w-5 h-5 mr-2" />
            <span>Filters</span>
            {showFilters ? <ChevronUp className="w-5 h-5 ml-1" /> : <ChevronDown className="w-5 h-5 ml-1" />}
          </button>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className={`p-4 mt-2 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${
            darkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div>
              <label className={`block text-sm font-medium mb-1 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
                className={`w-full p-2 rounded border ${
                  darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'
                }`}
              >
                <option value="all">All Categories</option>
                <option value="grains">Grains</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="dairy">Dairy</option>
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-1 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Price Range</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                  className={`w-1/2 p-2 rounded border ${
                    darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'
                  }`}
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                  className={`w-1/2 p-2 rounded border ${
                    darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'
                  }`}
                />
              </div>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-1 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Location</label>
              <input
                type="text"
                placeholder="State or region"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                className={`w-full p-2 rounded border ${
                  darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'
                }`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-1 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Min Rating</label>
              <select
                value={filters.rating}
                onChange={(e) => setFilters({...filters, rating: Number(e.target.value)})}
                className={`w-full p-2 rounded border ${
                  darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300'
                }`}
              >
                <option value="0">Any rating</option>
                <option value="3">3+ stars</option>
                <option value="4">4+ stars</option>
                <option value="4.5">4.5+ stars</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              darkMode={darkMode}
              onContact={() => console.log('Contact farmer:', product.farmer)}
              onFavorite={() => console.log('Added to favorites:', product.id)}
            />
          ))}
        </div>
      ) : (
        <div className={`p-8 text-center rounded-lg ${
          darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
        }`}>
          <p>No products match your search criteria. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
};

export default Marketplace;