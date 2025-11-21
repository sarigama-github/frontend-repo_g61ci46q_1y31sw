import { useEffect, useState } from 'react'

function Testimonials() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/testimonials`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const fallback = [
    { name: 'Sarah M.', comment: 'They did an amazing job! My apartment has never been cleaner.', rating: 5, city: 'Brooklyn' },
    { name: 'James K.', comment: 'Professional, punctual, and thorough. Highly recommend.', rating: 5, city: 'Queens' },
    { name: 'Priya R.', comment: 'Great service and friendly staff. Booking was easy.', rating: 4, city: 'Jersey City' },
  ]

  const list = items.length ? items : fallback

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">What customers say</h2>
          <p className="text-slate-600 mt-2">We let our work speak for itself</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {loading ? (
            <p className="col-span-3 text-center text-slate-500">Loading...</p>
          ) : (
            list.map((t, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 grid place-items-center font-semibold">
                    {t.name.split(' ')[0][0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.city || 'Local area'}</p>
                  </div>
                </div>
                <div className="mt-4 text-yellow-500">{'★★★★★'.slice(0, t.rating)}</div>
                <p className="mt-3 text-slate-700 text-sm">{t.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
