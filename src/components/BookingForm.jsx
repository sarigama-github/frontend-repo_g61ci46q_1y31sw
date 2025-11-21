import { useState } from 'react'

function BookingForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', service_type: 'Standard Home Cleaning', date: '', time: '', notes: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus({ ok: true, message: 'Booking received! We will confirm shortly.' })
        setForm({ name: '', email: '', phone: '', address: '', service_type: 'Standard Home Cleaning', date: '', time: '', notes: '' })
      } else {
        throw new Error(data.detail || 'Failed to submit')
      }
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Request a quote</h2>
            <p className="text-slate-600 mb-6">Tell us about your space and preferred time. We’ll get back within minutes.</p>
            <form onSubmit={submit} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Full name</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Service type</label>
                  <select name="service_type" value={form.service_type} onChange={handleChange} className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                    <option>Standard Home Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move In/Out</option>
                    <option>Office Cleaning</option>
                    <option>Post-Renovation</option>
                    <option>Eco-friendly</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Address</label>
                <input name="address" value={form.address} onChange={handleChange} required className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Preferred date</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Time window</label>
                  <input name="time" value={form.time} onChange={handleChange} placeholder="e.g. 9am - 12pm" className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Notes</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows="3" className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <button disabled={loading} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60">
                {loading ? 'Submitting...' : 'Submit request'}
              </button>
              {status && (
                <p className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.message}</p>
              )}
            </form>
          </div>
          <div className="lg:pl-10">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img src="https://images.unsplash.com/photo-1535892085269-9afff54b2a6b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWFtJTIwY2xlYW5pbmd8ZW58MHwwfHx8MTc2MzcxMjcyNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Team cleaning" className="w-full h-[420px] object-cover" />
            </div>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Fully insured and background-checked cleaners</li>
              <li>• Eco-friendly products available upon request</li>
              <li>• No contracts. Cancel anytime</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingForm
