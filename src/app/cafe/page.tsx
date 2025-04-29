export default function CafeLandingPage() {
    return (
      <main className="min-h-screen bg-white text-gray-900">
        <section className="text-center py-24 px-4 bg-gradient-to-br from-yellow-800 to-orange-400 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Brewed to Perfection</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            A warm, welcoming landing page perfect for independent cafes and coffee shops.
          </p>
          <button className="mt-8 bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-orange-100 transition">
            View Menu
          </button>
        </section>
  
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Specialties</h2>
          <ul className="grid md:grid-cols-3 gap-6 text-center">
            <li>☕ Artisan Coffee</li>
            <li>🥐 Fresh Pastries</li>
            <li>🌿 Cozy Ambience</li>
          </ul>
        </section>
  
        <footer className="py-8 text-center bg-gray-100 text-sm">
          &copy; {new Date().getFullYear()} Brew & Co. All rights reserved.
        </footer>
      </main>
    );
  }
  