import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import CookingTips from "@/components/CookingTips";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image 
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
          alt="Cooking hero image" 
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Culinary Corner</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">Discover delicious recipes and cooking tips for every occasion</p>
          <Link 
            href="/recipes" 
            className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            Explore Recipes <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Recipes</h2>
        <FeaturedRecipes />
        <div className="text-center mt-10">
          <Link 
            href="/recipes" 
            className="inline-flex items-center gap-2 text-lg font-medium border-b-2 border-black pb-1 hover:opacity-80 transition-opacity"
          >
            View all recipes <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Cooking Tips */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Cooking Tips & Techniques</h2>
          <CookingTips />
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-16">
        <Newsletter />
      </section>
    </div>
  );
}