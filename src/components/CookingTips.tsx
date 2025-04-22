import Image from "next/image";
import Link from "next/link";

// Mock data for cooking tips
const cookingTips = [
  {
    id: 1,
    title: "Perfect Knife Skills",
    image: "https://images.unsplash.com/photo-1570920612388-1493d5e02f0f?q=80&w=2070&auto=format&fit=crop",
    description: "Learn the basics of knife handling and cutting techniques to improve your cooking efficiency."
  },
  {
    id: 2,
    title: "Mastering Spices",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=2070&auto=format&fit=crop",
    description: "Discover how to balance and combine spices to elevate the flavors in your dishes."
  },
  {
    id: 3,
    title: "Food Storage Tips",
    image: "https://images.unsplash.com/photo-1584473457493-17c4c24290c5?q=80&w=2070&auto=format&fit=crop",
    description: "Keep your ingredients fresh longer with these essential food storage techniques."
  },
  {
    id: 4,
    title: "Meal Prep Strategies",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
    description: "Save time and eat healthier with these effective meal preparation strategies."
  }
];

export default function CookingTips() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cookingTips.map((tip) => (
        <Link key={tip.id} href={`/tips/${tip.id}`}>
          <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image
                src={tip.image}
                alt={tip.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}