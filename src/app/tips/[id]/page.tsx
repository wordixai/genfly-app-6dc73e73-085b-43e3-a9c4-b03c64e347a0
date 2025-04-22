import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Mock data for a single cooking tip
const tipData = {
  id: 1,
  title: "Perfect Knife Skills: The Foundation of Cooking",
  image: "https://images.unsplash.com/photo-1570920612388-1493d5e02f0f?q=80&w=2070&auto=format&fit=crop",
  category: "techniques",
  description: "Mastering knife skills is essential for any home cook. Proper technique not only makes cooking more efficient but also safer and more enjoyable.",
  content: [
    {
      heading: "The Importance of Good Knife Skills",
      text: "Good knife skills are the foundation of cooking. They allow you to prepare ingredients more quickly, create uniform pieces that cook evenly, and reduce the risk of injury. Taking the time to learn proper knife techniques will transform your cooking experience."
    },
    {
      heading: "Choosing the Right Knife",
      text: "A chef's knife (8-10 inches) is the most versatile and essential knife in your kitchen. Look for one that feels comfortable in your hand and has good balance. A paring knife for small, precise tasks and a serrated knife for bread and tomatoes are also valuable additions to your collection."
    },
    {
      heading: "The Proper Grip",
      text: "Hold the knife by pinching the blade between your thumb and forefinger, with your remaining fingers wrapped around the handle. This 'pinch grip' gives you the most control and precision. Your other hand should form a 'claw' with fingers tucked under and thumb behind to hold the food steady while keeping your fingertips safe."
    },
    {
      heading: "Basic Cutting Techniques",
      subheadings: [
        {
          title: "The Slice",
          description: "For a basic slice, position the tip of the knife on the cutting board and use a forward-down motion, letting the knife do the work. Keep the tip of the knife on the board and use a rocking motion for efficiency."
        },
        {
          title: "The Dice",
          description: "To dice an ingredient, first cut it into slices, then stack those slices and cut them into strips. Finally, turn the strips 90 degrees and cut across them to create cubes."
        },
        {
          title: "The Julienne",
          description: "Similar to dicing, but cutting into thin matchstick-sized pieces. Slice the ingredient thinly, stack the slices, and cut them into thin strips."
        },
        {
          title: "The Chiffonade",
          description: "Perfect for leafy herbs and greens. Stack the leaves, roll them tightly, and slice thinly to create ribbon-like strips."
        }
      ]
    },
    {
      heading: "Knife Maintenance",
      text: "Keep your knives sharp with regular honing (using a honing steel) and occasional sharpening. Wash knives by hand immediately after use and store them in a knife block, on a magnetic strip, or with blade guards to protect the edges."
    },
    {
      heading: "Practice Makes Perfect",
      text: "Like any skill, knife techniques improve with practice. Start slowly, focusing on proper form rather than speed. As you become more comfortable, you'll naturally become faster and more precise."
    }
  ],
  relatedTips: [2, 3, 5]
};

export default function TipPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the tip based on the id
  const tip = tipData;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <Link href="/tips" className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-500 mb-8">
        <ArrowLeft size={18} />
        Back to All Tips
      </Link>

      {/* Tip Header */}
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
        <Image
          src={tip.image}
          alt={tip.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
          <span className="inline-block px-3 py-1 bg-amber-500 text-white rounded-full text-sm font-medium mb-3 capitalize">
            {tip.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{tip.title}</h1>
        </div>
      </div>

      {/* Tip Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">{tip.description}</p>
            
            {tip.content.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                {section.text && <p>{section.text}</p>}
                
                {section.subheadings && (
                  <div className="mt-4 space-y-4">
                    {section.subheadings.map((subheading, idx) => (
                      <div key={idx}>
                        <h3 className="text-xl font-semibold mb-2">{subheading.title}</h3>
                        <p>{subheading.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
            <h3 className="text-xl font-bold mb-4">Quick Summary</h3>
            <ul className="space-y-2">
              {tip.content.map((section, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                  <span>{section.heading}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Share This Tip</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-blue-600 text-white rounded-full">FB</button>
                <button className="p-2 bg-sky-500 text-white rounded-full">TW</button>
                <button className="p-2 bg-red-600 text-white rounded-full">PT</button>
                <button className="p-2 bg-green-600 text-white rounded-full">WA</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}