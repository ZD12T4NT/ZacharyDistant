// src/app/gym/page.tsx

export default function GymLandingPage() {
    return (
      <main className="min-h-screen bg-white text-gray-900">
        <section className="text-center py-24 px-4 bg-gradient-to-br from-black to-gray-900 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Level Up Your Fitness</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            A modern landing page for gyms & personal trainers. Clean, fast, mobile-first.
          </p>
          <button className="mt-8 bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition">
            Join Now
          </button>
        </section>
  
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Us</h2>
          <ul className="grid md:grid-cols-3 gap-6 text-center">
            <li>🏋️ 24/7 Access</li>
            <li>💪 Certified Trainers</li>
            <li>🔥 Group Classes</li>
          </ul>
        </section>
  
        <footer className="py-8 text-center bg-gray-100 text-sm">
          &copy; {new Date().getFullYear()} Your Gym Name. All rights reserved.
        </footer>
      </main>
    );
  }
  