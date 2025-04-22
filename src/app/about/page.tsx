import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Culinary Corner</h1>
      
      {/* Our Story */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Culinary Corner was born from a passion for cooking and a desire to share culinary knowledge with home cooks around the world. What started as a small blog in 2015 has grown into a comprehensive cooking resource visited by millions of food enthusiasts each month.
            </p>
            <p className="text-gray-700">
              Our mission is simple: to make cooking accessible, enjoyable, and rewarding for everyone. We believe that good food brings people together, and that anyone can learn to cook delicious meals with the right guidance and inspiration.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
              alt="Cooking in kitchen"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2068&auto=format&fit=crop"
                alt="Chef Sarah Johnson"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-amber-500 font-medium mb-4">Executive Chef & Founder</p>
              <p className="text-gray-600">
                With over 15 years of culinary experience, Sarah brings professional expertise and a passion for teaching to Culinary Corner.
              </p>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=2080&auto=format&fit=crop"
                alt="Chef Michael Chen"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
              <p className="text-amber-500 font-medium mb-4">Recipe Developer</p>
              <p className="text-gray-600">
                Michael specializes in fusion cuisine and brings global flavors to our recipe collection with his innovative approach to cooking.
              </p>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1607631568010-a87245c0dbd8?q=80&w=2070&auto=format&fit=crop"
                alt="Emily Rodriguez"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Emily Rodriguez</h3>
              <p className="text-amber-500 font-medium mb-4">Food Photographer</p>
              <p className="text-gray-600">
                Emily captures the beauty of food through her lens, creating stunning visuals that inspire our readers to get cooking.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="mb-16 bg-amber-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-gray-700">
              Every recipe is thoroughly tested to ensure reliable, delicious results in your kitchen.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Accessibility</h3>
            <p className="text-gray-700">
              We believe good cooking should be accessible to everyone, regardless of skill level or background.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-gray-700">
              We foster a supportive community where food lovers can share their experiences and learn from each other.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Readers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4 italic">
              "Culinary Corner has transformed my cooking. The recipes are easy to follow and always turn out delicious. I've gone from a kitchen novice to confidently hosting dinner parties!"
            </p>
            <p className="font-bold">- Jessica T.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4 italic">
              "The cooking tips section is a goldmine of information. I've learned so many techniques that have made me a better cook. Thank you for making cooking approachable and fun!"
            </p>
            <p className="font-bold">- Marcus L.</p>
          </div>
        </div>
      </section>
    </div>
  );
}