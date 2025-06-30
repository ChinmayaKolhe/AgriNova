import { useState } from 'react';
import { Package, Clock, Check, X, Truck, ChevronDown } from 'lucide-react';
import OrderCard from '../../components/OrderCard';

const Orders = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample orders data
  const orders = [
    {
      id: 'ORD-1001',
      product: 'Organic Wheat',
      farmer: 'Rajesh Farms',
      quantity: '10 quintals',
      price: '₹21,500',
      status: 'delivered',
      date: '2023-06-15',
      image: 'https://source.unsplash.com/random/300x200/?wheat'
    },
    {
      id: 'ORD-1002',
      product: 'Basmati Rice',
      farmer: 'Singh Agro',
      quantity: '5 quintals',
      price: '₹9,450',
      status: 'shipped',
      date: '2023-06-20',
      image: 'https://source.unsplash.com/random/300x200/?rice'
    },
    {
      id: 'ORD-1003',
      product: 'Fresh Tomatoes',
      farmer: 'Gupta Produce',
      quantity: '50 kg',
      price: '₹2,000',
      status: 'processing',
      date: '2023-06-25',
      image: 'https://source.unsplash.com/random/300x200/?tomato'
    },
    {
      id: 'ORD-1004',
      product: 'Alphonso Mangoes',
      farmer: 'Mango King',
      quantity: '20 kg',
      price: '₹2,400',
      status: 'cancelled',
      date: '2023-05-10',
      image: 'https://source.unsplash.com/random/300x200/?mango'
    }
  ];

  // Filter orders based on active tab
  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(order => order.status === activeTab);

  const getStatusIcon = (status) => {
    switch(status) {
      case 'delivered': return <Check className="w-4 h-4 text-green-500" />;
      case 'shipped': return <Truck className="w-4 h-4 text-blue-500" />;
      case 'processing': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'cancelled': return <X className="w-4 h-4 text-red-500" />;
      default: return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <Package className="mr-2" /> My Orders
      </h1>
      
      {/* Order Status Tabs */}
      <div className={`flex overflow-x-auto mb-6 pb-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border-b`}>
        {['all', 'processing', 'shipped', 'delivered', 'cancelled'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-shrink-0 px-4 py-2 mr-2 font-medium rounded-t-lg flex items-center ${
              activeTab === tab
                ? darkMode
                  ? 'bg-gray-700 text-white border-b-2 border-blue-400'
                  : 'bg-white text-blue-600 border-b-2 border-blue-500'
                : darkMode
                  ? 'text-gray-400 hover:text-gray-300'
                  : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {getStatusIcon(tab)}
            <span className="ml-2 capitalize">{tab}</span>
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map(order => (
            <OrderCard 
              key={order.id} 
              order={order} 
              darkMode={darkMode}
              onTrack={() => console.log('Track order:', order.id)}
              onReorder={() => console.log('Reorder:', order.id)}
              onContact={() => console.log('Contact farmer:', order.farmer)}
            />
          ))
        ) : (
          <div className={`p-8 text-center rounded-lg ${
            darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
          }`}>
            <p>No orders found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;