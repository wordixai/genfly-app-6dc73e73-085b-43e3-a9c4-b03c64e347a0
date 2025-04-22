import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ChefHat, Printer } from "lucide-react";

// Mock recipe data - in a real app, this would come from a database
const recipeData = {
  id: 1,
  title: "Creamy Garlic Parmesan Pasta",
  image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop",
  prepTime: "10 mins",
  cookTime: "15 mins",
  servings: 4,
  difficulty: "Easy",
  description: "A rich and creamy pasta dish that's perfect for a quick weeknight dinner. This garlic parmesan pasta is incredibly flavorful and ready in under 30 minutes.",
  ingredients: [
    "8 oz fettuccine pasta",
    "2 tablespoons butter",
    "4 cloves garlic, minced",
    "1 cup heavy cream",
    "1 cup grated Parmesan cheese",
    "1/2 teaspoon salt",
    "1/4 teaspoon black pepper",
    "2 tablespoons fresh parsley, chopped",
    "Red pepper flakes (optional)"
  ],
  instructions: [
    "Bring a large pot of salted water to a boil. Add pasta and cook according to package instructions until al dente. Reserve 1/2 cup of pasta water before draining.",
    "While pasta is cooking, melt butter in a large skillet over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant, being careful not to burn it.",
    "Reduce heat to medium-low and add heavy cream. Simmer for 3-4 minutes until it starts to thicken slightly.",
    "Gradually whisk in the Parmesan cheese until melted and smooth. Season with salt and pepper.",
    "Add the drained pasta to the sauce and toss to coat. If the sauce is too thick, add a splash of the reserved pasta water to reach desired consistency.",
    "Garnish with chopped parsley and red pepper flakes if desired. Serve immediately."
  ],
  tips: [
    "For extra protein, add grilled chicken or sautéed shrimp.",
    "Fresh Parmesan cheese works best for this recipe, but pre-grated will work in a pinch.",
    "The sauce will continue to thicken as it cools, so don't worry if it seems a bit thin at first."
  ],
  nutrition: {
    calories: 520,
    protein: "15g",
    carbs: "42g",
    fat: "32g"
  }
};

export default function RecipePage({ params }: { params: { category: string, id: string } }) {
  // In a real app, you would fetch the recipe based on the category and id
  const recipe = recipeData;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/recipes" className="hover:text-amber-500">Recipes</Link>
        {" > "}
        <Link href={`/recipes/${params.category}`} className="hover:text-amber-500 capitalize">
          {params.category}
        </Link>
        {" > "}
        <span>{recipe.title}</span>
      </div>

      {/* Recipe Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-amber-500" />
              <div>
                <p className="text-sm text-gray-500">Prep Time</p>
                <p className="font-medium">{recipe.prepTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-amber-500" />
              <div>
                <p className="text-sm text-gray-500">Cook Time</p>
                <p className="font-medium">{recipe.cookTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-amber-500" />
              <div>
                <p className="text-sm text-gray-500">Servings</p>
                <p className="font-medium">{recipe.servings}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat size={20} className="text-amber-500" />
              <div>
                <p className="text-sm text-gray-500">Difficulty</p>
                <p className="font-medium">{recipe.difficulty}</p>
              </div>
            </div>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
            <Printer size={18} />
            Print Recipe
          </button>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ingredients */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <ol className="space-y-6">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p>{instruction}</p>
              </li>
            ))}
          </ol>

          {/* Chef's Tips */}
          <div className="mt-12 bg-amber-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Chef's Tips</h3>
            <ul className="space-y-2">
              {recipe.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition Information */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Nutrition Information</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Calories</p>
                <p className="font-bold text-lg">{recipe.nutrition.calories}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Protein</p>
                <p className="font-bold text-lg">{recipe.nutrition.protein}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Carbs</p>
                <p className="font-bold text-lg">{recipe.nutrition.carbs}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Fat</p>
                <p className="font-bold text-lg">{recipe.nutrition.fat}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}