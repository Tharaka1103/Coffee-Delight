import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {

  const FacebookIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);
const socialLinks = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
];


  const quickLinks = [
    'Our Story', 'Careers', 'Gift Cards', 'FAQs', 'Privacy Policy', 'Terms of Service'
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white"
    >
      {/* Newsletter Section */}
      <div className="border-b border-amber-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Join Our Coffee Club</h3>
              <p className="text-amber-200">Get 10% off your first order and weekly updates!</p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-l-lg w-full md:w-auto focus:outline-none text-gray-800"
              />
              <button className="bg-amber-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-amber-500 transition-colors">
                Subscribe
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Café Delight</h2>
            <p className="text-amber-200 mb-6">
              Serving premium coffee and delightful experiences since 2010. Every cup tells a story.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="bg-amber-700 p-2 rounded-full hover:bg-amber-600 transition-colors"
                >
                  <Icon/>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  className="hover:text-amber-300 transition-colors"
                >
                  <Link href="#">{link}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-amber-400" />
                <span>123 Coffee Street, Café City, CC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-amber-400" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon  className="h-5 w-5 text-amber-400" />
                <span>hello@cafedelight.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <ClockIcon className="h-5 w-5 text-amber-400" />
                <div>
                  <p className="font-semibold">Mon-Fri</p>
                  <p className="text-amber-200">7:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <ClockIcon className="h-5 w-5 text-amber-400" />
                <div>
                  <p className="font-semibold">Sat-Sun</p>
                  <p className="text-amber-200">8:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-amber-200 text-sm">
              © 2024 Café Delight. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="hover:text-amber-300 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-amber-300 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-amber-300 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
