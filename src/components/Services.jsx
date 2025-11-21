function Services() {
  const services = [
    {
      title: 'Standard Home Cleaning',
      desc: 'Regular upkeep: dusting, vacuuming, mopping, kitchens, and bathrooms.',
      icon: '🏠',
    },
    {
      title: 'Deep Cleaning',
      desc: 'Full top-to-bottom clean including baseboards, appliances, and grout.',
      icon: '🧹',
    },
    {
      title: 'Move In/Out',
      desc: 'Thorough clean to make moving day a breeze and ensure deposit return.',
      icon: '📦',
    },
    {
      title: 'Office Cleaning',
      desc: 'Keep workspaces spotless with after-hours flexible scheduling.',
      icon: '🏢',
    },
    {
      title: 'Post-Renovation',
      desc: 'Remove dust and debris after construction for a fresh start.',
      icon: '🧰',
    },
    {
      title: 'Eco-friendly',
      desc: 'Green products and methods that are safe for families and pets.',
      icon: '🌿',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
          <p className="text-slate-600 mt-2">Tailored cleaning plans for every space</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-800">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
