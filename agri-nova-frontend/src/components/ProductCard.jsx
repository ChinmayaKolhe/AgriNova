import { 
  ShoppingCart, MessageSquare, Heart, Star 
} from 'lucide-react';

const ProductCard = ({ product, darkMode, onContact, onFavorite }) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {product.name}
          </h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {product.rating}
            </span>
          </div>
        </div>
        
        <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {product.farmer} • {product.location}
        </p>
        
        <p className={`text-xl font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          {product.price}
        </p>
        
        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {product.quantity}
        </p>
        
        <div className="flex space-x-2">
          <button
            onClick={() => console.log('Add to cart:', product.id)}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            <span className="text-sm">Buy</span>
          </button>
          
          <button
            onClick={onContact}
            className={`p-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-blue-400' 
                : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
            }`}
            title="Contact Farmer"
          >
            <MessageSquare className="w-4 h-4" />
          </button>
          
          <button
            onClick={onFavorite}
            className={`p-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-red-400' 
                : 'bg-gray-100 hover:bg-gray-200 text-red-600'
            }`}
            title="Add to Favorites"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;