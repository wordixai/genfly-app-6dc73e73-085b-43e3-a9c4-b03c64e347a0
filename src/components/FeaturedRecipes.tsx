import Image from "next/image";
import Link from "next/link";
import { Clock, Users } from "lucide-react";

// Mock data for featured recipes
const featuredRecipes = [
  {
    id: 1,
    title: "Creamy Garlic Parmesan Pasta",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop",
    prepTime: "25 mins",
    servings: 4,
    category: "dinner",
    description: "A rich and creamy pasta dish that's perfect for a quick weeknight dinner."
  },
  {
    id: 2,
    title: "Avocado & Egg Breakfast Toast",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080&auto=format&fit=crop",
    prepTime: "15 mins",
    servings: 2,
    category: "breakfast",
    description: "Start your day with this nutritious and delicious avocado toast topped with a perfectly cooked egg."
  },
  {
    id: 3,
    title: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2127&auto=format&fit=crop",
    prepTime: "30 mins",
    servings: 4,
    category: "desserts",
    description: "Indulge in this decadent chocolate dessert with a warm, gooey center."
  }
];

export default function FeaturedRecipes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredRecipes.map((recipe) => (
        <Link key={recipe.id} href={`/recipes/${recipe.category}/${recipe.id}`}>
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{recipe.servings} servings</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}