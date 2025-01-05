'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

interface MenuItem {
    name: string;
    price: number;
    description: string;
    image: string;
    bestseller?: boolean;
    
  }
  interface MenuCategories {
    [key: string]: MenuItem[];
  }

const categories = ['All Items', 'Hot Coffee', 'Iced Coffee', 'Pastries', 'Breakfast', 'Lunch'];

const menuItems: MenuCategories = {  'Hot Coffee': [
    { name: 'Classic Espresso', price: 3.99, description: 'Pure and intense coffee shot', image: '/coffee5.jpg', bestseller: true },
    { name: 'Cappuccino', price: 4.99, description: 'Espresso with steamed milk foam', image: '/coffee6.jpg', bestseller: true },
    { name: 'Caramel Macchiato', price: 5.49, description: 'Vanilla-flavored drink marked with espresso', image: '/coffee7.jpg' },
  ],
  'Iced Coffee': [
    { name: 'Iced Americano', price: 4.49, description: 'Chilled espresso with cold water', image: '/iced-americano.jpg' },
    { name: 'Frappuccino', price: 5.99, description: 'Blended coffee with whipped cream', image: '/frappuccino.jpg', bestseller: true },
    { name: 'Cold Brew', price: 4.99, description: '12-hour steeped coffee served cold', image: '/cold-brew.jpg' },
  ],
  'Pastries': [
    { name: 'Butter Croissant', price: 3.49, description: 'Flaky, buttery French pastry', image: '/croissant.jpg', bestseller: true },
    { name: 'Chocolate Muffin', price: 3.99, description: 'Rich chocolate chip muffin', image: '/muffin.jpg' },
    { name: 'Danish Pastry', price: 4.49, description: 'Sweet pastry with fruit filling', image: '/danish.jpg' },
  ],
  'Breakfast': [
    { name: 'Avocado Toast', price: 8.99, description: 'Smashed avocado on sourdough', image: '/avocado-toast.jpg', bestseller: true },
    { name: 'Breakfast Sandwich', price: 7.99, description: 'Egg, cheese, and bacon on brioche', image: '/sandwich.jpg' },
    { name: 'Acai Bowl', price: 9.99, description: 'Fresh fruits and granola bowl', image: '/acai.jpg' },
  ],
  'Lunch': [
    { name: 'Chicken Panini', price: 10.99, description: 'Grilled chicken with pesto', image: '/panini.jpg' },
    { name: 'Caesar Salad', price: 9.99, description: 'Classic caesar with croutons', image: '/salad.jpg' },
    { name: 'Quinoa Bowl', price: 11.99, description: 'Healthy grain bowl with veggies', image: '/quinoa.jpg', bestseller: true },
  ],
};

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('Hot Coffee');
  const [searchTerm, setSearchTerm] = useState('');


  const getFilteredItems = () => {
    let items = selectedCategory === 'All Items' 
      ? Object.values(menuItems).flat()
      : menuItems[selectedCategory] || [];

    return items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  const filteredItems = getFilteredItems();
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-amber-50">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[40vh] bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl font-bold mb-4"
              >
                Our Menu
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl"
              >
                Discover our handcrafted selections
              </motion.p>
            </div>
          </div>
        </motion.section>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Search Bar */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-8"
          >
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-96 px-6 py-3 rounded-full border-2 border-amber-200 focus:border-amber-400 focus:outline-none"
            />
          </motion.div>

          {/* Category Navigation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-amber-800 text-white'
                    : 'bg-white text-amber-800 hover:bg-amber-100'
                } transition-colors`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {item.bestseller && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                      Bestseller
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-amber-800 font-bold">${item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-amber-800 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
