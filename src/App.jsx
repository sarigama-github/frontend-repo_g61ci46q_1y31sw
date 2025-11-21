import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import BookingForm from './components/BookingForm'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
        <BookingForm />
        <Contact />
      </main>
      <footer className="py-10 bg-slate-900 text-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} CrystalClean. All rights reserved.</p>
          <div className="text-sm text-slate-400">Made with care and eco-friendly products.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
