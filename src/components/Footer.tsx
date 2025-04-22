import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Culinary<span className="text-amber-500">Corner</span></h2>
            <p className="text-gray-300 mb-4">
              Discover delicious recipes and cooking tips for every occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-gray-300 hover:text-white transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/tips" className="text-gray-300 hover:text-white transition-colors">
                  Cooking Tips
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Recipe Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recipe Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/recipes/breakfast" className="text-gray-300 hover:text-white transition-colors">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link href="/recipes/lunch" className="text-gray-300 hover:text-white transition-colors">
                  Lunch
                </Link>
              </li>
              <li>
                <Link href="/recipes/dinner" className="text-gray-300 hover:text-white transition-colors">
                  Dinner
                </Link>
              </li>
              <li>
                <Link href="/recipes/desserts" className="text-gray-300 hover:text-white transition-colors">
                  Desserts
                </Link>
              </li>
              <li>
                <Link href="/recipes/vegetarian" className="text-gray-300 hover:text-white transition-colors">
                  Vegetarian
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Get our latest recipes and cooking tips delivered to your inbox.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-amber-500 text-white rounded font-medium hover:bg-amber-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Culinary Corner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}