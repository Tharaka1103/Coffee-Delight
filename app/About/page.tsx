'use client';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-amber-800">Our Story</h1>
              <p className="text-gray-600 mt-2">Crafting Moments, One Cup at a Time</p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="/coffee7.jpg"
                  alt="Café Interior"
                  className="rounded-lg w-full md:w-1/2 h-64 object-cover"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-amber-700 mb-4">Our Beginning</h2>
                  <p className="text-gray-600">
                    Founded in 2020, Café Delight began with a simple mission: to create a warm, 
                    welcoming space where quality coffee meets exceptional service. Our passion 
                    for coffee and community drives everything we do.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="/coffee6.jpg"
                  alt="Coffee Making"
                  className="rounded-lg w-full md:w-1/2 h-64 object-cover"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-amber-700 mb-4">Our Craft</h2>
                  <p className="text-gray-600">
                    We source our beans from sustainable farms worldwide, roasting them to 
                    perfection in small batches. Our baristas are trained in the art of coffee-making, 
                    ensuring each cup meets our high standards.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <h2 className="text-2xl font-semibold text-amber-700 mb-4">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-amber-50 rounded-lg"
                  >
                    <h3 className="font-semibold text-amber-800">Quality</h3>
                    <p className="text-gray-600">Never compromising on our ingredients or service</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-amber-50 rounded-lg"
                  >
                    <h3 className="font-semibold text-amber-800">Community</h3>
                    <p className="text-gray-600">Creating a welcoming space for everyone</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-amber-50 rounded-lg"
                  >
                    <h3 className="font-semibold text-amber-800">Sustainability</h3>
                    <p className="text-gray-600">Committed to environmental responsibility</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
