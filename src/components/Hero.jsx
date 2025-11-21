function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40"/>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-40"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Sparkling homes, without the hassle
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              On-demand professional cleaning services for homes and offices. Flexible scheduling, trusted cleaners, and a 100% satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#booking" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow">
                Book a Cleaning
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-slate-800 border border-slate-200 hover:bg-slate-50">
                Explore Services
              </a>
            </div>
            <p className="mt-6 text-slate-500 text-sm">Trusted by hundreds of busy households and businesses.</p>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGVhbmluZ3xlbnwwfDB8fHwxNzYzNzEyNzIzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Cleaning" className="w-full h-[360px] object-cover"/>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-200 p-4 w-64">
              <p className="text-sm text-slate-600">Average rating</p>
              <p className="text-2xl font-bold text-slate-900">4.9/5</p>
              <p className="text-xs text-slate-500">from 500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
