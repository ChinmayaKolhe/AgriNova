import { Heart, Search, ChevronDown } from 'lucide-react';
import ProductCard from '../../components/ProductCard';

const Favorites = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  // Sample favorite products
  const favorites = [
    {
      id: 1,
      name: 'Organic Wheat',
      farmer: 'Rajesh Farms',
      price: 2150,
      location: 'Punjab',
      rating: 4.5,
      image: 'https://source.unsplash.com/random/300x200/?wheat',
      quantity: '50 quintals',
      addedDate: '2023-06-10'
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
      addedDate: '2023-06-15'
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
      addedDate: '2023-05-20'
    }
  ];

  // Filter and sort favorites
  const filteredFavorites = favorites
    .filter(fav => 
      fav.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      fav.farmer.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'recent') return new Date(b.addedDate) - new Date(a.addedDate);
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <Heart className="mr-2 text-red-500" /> Favorites
      </h1>
      
      {/* Search and Sort */}
      <div className={`p-4 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-sm'}`}>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="relative flex-1 mb-4 md:mb-0 md:mr-4">
            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search favorites..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
              }`}
            />
          </div>
          
          <div className="flex items-center">
            <span className={`mr-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`appearance-none pl-3 pr-8 py-2 rounded border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                }`}
              >
                <option value="recent">Recently Added</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
              </select>
              <div className={`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Favorites Grid */}
      {filteredFavorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFavorites.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              darkMode={darkMode}
              isFavorite={true}
              onRemoveFavorite={() => console.log('Remove favorite:', product.id)}
              onContact={() => console.log('Contact farmer:', product.farmer)}
            />
          ))}
        </div>
      ) : (
        <div className={`p-8 text-center rounded-lg ${
          darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
        }`}>
          <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
          <p>No favorites found. Start adding products to your favorites!</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;