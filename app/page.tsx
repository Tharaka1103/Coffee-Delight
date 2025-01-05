'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { StarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { SparklesText } from './Components/MajicUi/SparklesText';
import { MorphingText } from './Components/MajicUi/morphingText';
import confetti from "canvas-confetti";
import { Button } from "./Components/ui/button";
export default function Home() {
  const menuHighlights = [
    { name: 'Signature Latte', price: '$4.99', image: '/coffee4.jpg' },
    { name: 'Croissant Supreme', price: '$3.99', image: '/coffee2.jpg' },
    { name: 'Avocado Toast', price: '$8.99', image: '/coffee1.jpg' },
  ];

  const reviews = [
    { author: 'Sarah M.', rating: 5, text: 'Best coffee in town!' },
    { author: 'John D.', rating: 5, text: 'Amazing atmosphere and friendly staff.' },
    { author: 'Emma L.', rating: 5, text: 'Perfect spot for remote work.' },
  ];
  const texts = [
    "Experience The Perfect Blend of Comfort and Taste",
    "Discover the Art of Coffee",
    "Indulge in the Finest Coffee Experience",
    "Elevate Your Coffee Journey",
    "Savor the Rich Flavors of Coffee",
    "A Journey Through Coffee's World",
    "Elevate Your Coffee Experience",
  ];

  const Confetti = () => {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;
  
      const interval = window.setInterval(() => {
        const timeLeft = animationEnd - Date.now();
  
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
  
        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);
    };
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-screen relative flex items-center justify-center"
        >
          <Image
            src="/hero-bg.jpg"
            alt="Café atmosphere"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative text-center text-white z-10 w-full"
          >
            <SparklesText text="Café Delight" />
             <MorphingText className="mt-5 mb-1" texts={texts} />
            <motion.button
            onClick={Confetti}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors"
            >
              Order Online
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Quick Info Section */}
<section className="bg-white-100 py-16">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { Icon: ClockIcon, title: "Open Daily", text: "7:00 AM - 8:00 PM" },
      { Icon: MapPinIcon, title: "Location", text: "123 Coffee Street" },
      { Icon: StarIcon, title: "Rated 4.9", text: "500+ Reviews" }
    ].map((item) => (
      <motion.div
        key={item.title}
        whileHover={{ scale: 1.05 }}
        className="relative group"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-yellow-200 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div className="relative flex items-center space-x-4 px-7 py-6 rounded-lg leading-none divide-x divide-gray-600">
          <div className="flex items-center space-x-4">
            <item.Icon className="h-8 w-8 text-amber-600" />
            <div>
              <h3 className="font-bold text-amber-800">{item.title}</h3>
              <p className="text-slate-600">{item.text}</p>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>


        {/* Menu Highlights */}
        {/* Menu Highlights */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">Popular Items</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {menuHighlights.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ scale: 1.02 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4 bg-white shadow-lg rounded-xl mt-[-2rem] relative mx-4 backdrop-blur-sm bg-white/90">
              <h3 className="font-bold text-lg text-amber-800">{item.name}</h3>
              <p className="text-amber-600 font-semibold">{item.price}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* Reviews Section */}
        <section className="bg-amber-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <motion.div
                  key={review.author}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <p className="font-semibold">{review.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
