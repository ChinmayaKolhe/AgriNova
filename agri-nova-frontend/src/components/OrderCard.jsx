import { Package, Truck, Check, Clock, X, MessageSquare } from 'lucide-react';

const OrderCard = ({ order, darkMode, onTrack, onReorder, onContact }) => {
  const getStatusDetails = () => {
    switch(order.status) {
      case 'delivered':
        return {
          icon: <Check className="w-5 h-5 text-green-500" />,
          text: 'Delivered',
          color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
        };
      case 'shipped':
        return {
          icon: <Truck className="w-5 h-5 text-blue-500" />,
          text: 'Shipped',
          color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
        };
      case 'processing':
        return {
          icon: <Clock className="w-5 h-5 text-yellow-500" />,
          text: 'Processing',
          color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
        };
      case 'cancelled':
        return {
          icon: <X className="w-5 h-5 text-red-500" />,
          text: 'Cancelled',
          color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
        };
      default:
        return {
          icon: <Package className="w-5 h-5 text-gray-500" />,
          text: 'Pending',
          color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
        };
    }
  };

  const status = getStatusDetails();

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-colors ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="p-4 border-b dark:border-gray-700">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {order.product}
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Order #{order.id} • {order.date}
            </p>
          </div>
          <div className={`text-xs px-2 py-1 rounded-full ${status.color}`}>
            <div className="flex items-center">
              {status.icon}
              <span className="ml-1">{status.text}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Farmer</p>
            <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {order.farmer}
            </p>
          </div>
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Quantity</p>
            <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {order.quantity}
            </p>
          </div>
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Price</p>
            <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {order.price}
            </p>
          </div>
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Order Date</p>
            <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {order.date}
            </p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          {order.status === 'shipped' && (
            <button
              onClick={onTrack}
              className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              <Truck className="w-4 h-4 mr-2" />
              <span className="text-sm">Track Order</span>
            </button>
          )}
          
          {order.status === 'delivered' && (
            <button
              onClick={onReorder}
              className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center ${
                darkMode 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              <Package className="w-4 h-4 mr-2" />
              <span className="text-sm">Reorder</span>
            </button>
          )}
          
          <button
            onClick={onContact}
            className={`p-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-blue-400' 
                : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;