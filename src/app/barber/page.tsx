export default function BarberLandingPage() {
    return (
      <main className="min-h-screen bg-white text-gray-900">
        <section className="text-center py-24 px-4 bg-gradient-to-br from-[#1f1f1f] to-gray-700 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sharp Cuts, Clean Style</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            A stylish, minimalist landing page perfect for barbers and grooming studios.
          </p>
          <button className="mt-8 bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition">
            Book an Appointment
          </button>
        </section>
  
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">What We Offer</h2>
          <ul className="grid md:grid-cols-3 gap-6 text-center">
            <li>✂️ Fades & Trims</li>
            <li>🧼 Hot Towel Shaves</li>
            <li>🧴 Premium Products</li>
          </ul>
        </section>
  
        <footer className="py-8 text-center bg-gray-100 text-sm">
          &copy; {new Date().getFullYear()} The Barber Spot. All rights reserved.
        </footer>
      </main>
    );
  }
  