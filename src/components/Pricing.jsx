function Pricing() {
  const tiers = [
    { name: 'Studio/1BR', price: 89, features: ['Up to 2 hours', '1 cleaner', 'Supplies included', 'Kitchen & bath'] },
    { name: '2-3BR Home', price: 129, features: ['Up to 3.5 hours', '2 cleaners', 'Supplies included', 'All rooms'] },
    { name: 'Deep Clean', price: 199, features: ['4-6 hours', '2 cleaners', 'Inside appliances', 'Baseboards & more'] },
  ]

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Transparent Pricing</h2>
          <p className="text-slate-600 mt-2">Simple packages. No surprises.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800">{tier.name}</h3>
              <p className="mt-4 text-4xl font-extrabold text-slate-900">
                ${tier.price}
                <span className="text-base font-medium text-slate-500"> / flat</span>
              </p>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#booking" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book this</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
