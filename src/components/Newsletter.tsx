"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <div className="bg-amber-50 rounded-xl p-8 md:p-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Culinary Community</h2>
        <p className="text-gray-700 mb-8">
          Subscribe to our newsletter and receive weekly recipes, cooking tips, and exclusive content directly in your inbox.
        </p>

        {isSubmitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg">
            <p className="font-medium">Thank you for subscribing!</p>
            <p className="text-sm mt-1">Check your inbox for a confirmation email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="bg-amber-500 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-amber-600 transition-colors"
            >
              Subscribe <Send size={18} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}