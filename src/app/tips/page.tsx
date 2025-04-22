import Image from "next/image";
import Link from "next/link";

// Mock data for cooking tips
const cookingTips = [
  {
    id: 1,
    title: "Perfect Knife Skills",
    image: "https://images.unsplash.com/photo-1570920612388-1493d5e02f0f?q=80&w=2070&auto=format&fit=crop",
    description: "Learn the basics of knife handling and cutting techniques to improve your cooking efficiency.",
    category: "techniques"
  },
  {
    id: 2,
    title: "Mastering Spices",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=2070&auto=format&fit=crop",
    description: "Discover how to balance and combine spices to elevate the flavors in your dishes.",
    category: "ingredients"
  },
  {
    id: 3,
    title: "Food Storage Tips",
    image: "https://images.unsplash.com/photo-1584473457493-17c4c24290c5?q=80&w=2070&auto=format&fit=crop",
    description: "Keep your ingredients fresh longer with these essential food storage techniques.",
    category: "kitchen"
  },
  {
    id: 4,
    title: "Meal Prep Strategies",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
    description: "Save time and eat healthier with these effective meal preparation strategies.",
    category: "planning"
  },
  {
    id: 5,
    title: "Cooking with Cast Iron",
    image: "https://images.unsplash.com/photo-1544794040-a6ab01756a18?q=80&w=2070&auto=format&fit=crop",
    description: "Learn how to properly use, season, and care for cast iron cookware for better cooking results.",
    category: "equipment"
  }
];

// Tip categories
const categories = [
  { name: "All", slug: "" },
  { name: "Techniques", slug: "techniques" },
  { name: "Ingredients", slug: "ingredients" },
  { name: "Kitchen", slug: "kitchen" },
  { name: "Equipment", slug: "equipment" },
  { name: "Planning", slug: "planning" }
];

export default function TipsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Cooking Tips & Techniques</h1>
      
      {/* Categories */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link 
              key={category.slug} 
              href={category.slug ? `/tips/category/${category.slug}` : "/tips"}
              className="px-4 py-2 bg-gray-100 rounded-full hover:bg-amber-100 transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cookingTips.map((tip) => (
          <Link key={tip.id} href={`/tips/${tip.id}`}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
              <div className="relative h-64">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium mb-3 capitalize">
                  {tip.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}