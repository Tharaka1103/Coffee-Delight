import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { UserIcon, ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SparklesText } from './MajicUi/SparklesText';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user data using the token
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token: string) => {
    try {
      const response = await fetch('/api/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        console.error('Failed to fetch user data:', await response.json());
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/';
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/Menu' },
    { name: 'About', href: '/About' },
    { name: 'Contact', href: '/Contact' }
  ];

  const UserSection = () => {
    if (user) {
      return (
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-amber-800 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-amber-700 transition-colors"
          >
            <UserIcon className="h-5 w-5" />
            <span>{user.name}</span>
          </motion.button>

          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
            >
              <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-amber-50">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50"
              >
                Logout
              </button>
            </motion.div>
          )}
        </div>
      );
    }

    return (
      <Link href="/Login">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-800 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-amber-700 transition-colors"
        >
          <UserIcon className="h-5 w-5" />
          <span>Login</span>
        </motion.button>
      </Link>
    );
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-gradient-to-r from-amber-50 via-white to-amber-50 backdrop-blur-sm z-50 shadow-lg"
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">CD</span>
            </div>
            <SparklesText className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text" text="Café Delight" />
            
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
                <Link 
                  href={item.href}
                  className="text-gray-700 hover:text-amber-800 transition-colors font-medium"
                >
                  {item.name}
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full" />
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <UserSection />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 text-amber-800" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-amber-800" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-amber-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link 
                  href="/profile"
                  className="block text-gray-700 hover:text-amber-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block text-gray-700 hover:text-amber-800 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                href="/Login"
                className="block text-gray-700 hover:text-amber-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
