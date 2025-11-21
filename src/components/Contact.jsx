import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus({ ok: true, message: 'Thanks! We will reach out shortly.' })
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Contact us</h2>
            <p className="text-slate-600 mb-6">Questions about our services or pricing? Send us a message.</p>
            <form onSubmit={submit} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <button disabled={loading} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60">
                {loading ? 'Sending...' : 'Send message'}
              </button>
              {status && (
                <p className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.message}</p>
              )}
            </form>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb250YWN0fGVufDB8MHx8fDE3NjM3MTI3MjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Contact" className="w-full h-[380px] object-cover" />
            </div>
            <div className="mt-6 text-slate-700 text-sm">
              <p><span className="font-semibold">Hours:</span> Mon-Sat 8am - 8pm</p>
              <p><span className="font-semibold">Service areas:</span> Citywide + Suburbs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
