import { useState } from 'react'
import { motion } from 'framer-motion'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrejkrle'

interface Props {
  onSuccess: () => void
  done: boolean
}

export default function Hero({ onSuccess, done }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) onSuccess()
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="relative min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-2/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-400/10 border border-blue-400/20 px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
          Bêta privée — places limitées
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6"
        >
          <span className="text-white">Vos devis industriels,</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            en 5 minutes.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Fini Excel. Fini les erreurs. Fini les devis perdus.
          <br />
          Quotio est le seul logiciel pensé pour les <span className="text-white">PME industrielles françaises</span>.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          id="inscription"
          className="max-w-md mx-auto"
        >
          {done ? (
            <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-6 py-4 text-sm font-medium">
              ✓ C'est noté ! On vous contacte en priorité dès l'ouverture.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="votre@entreprise.fr"
                className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white/8 text-sm transition-all"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all text-sm whitespace-nowrap disabled:opacity-60 hover:scale-105 cursor-pointer"
              >
                {status === 'sending' ? 'Envoi…' : 'Je veux accès →'}
              </button>
            </form>
          )}
          {status === 'error' && <p className="text-red-400 text-xs mt-2">Erreur. Réessayez.</p>}
          <p className="text-slate-600 text-xs mt-3">Gratuit pendant la bêta · Aucune carte requise · Accès en 48h</p>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-16 relative"
        >
          <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-4 backdrop-blur-sm shadow-2xl shadow-black/50">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-slate-500 font-mono">Devis #DEV-2024-089 — Bobines acier Ø800</span>
            </div>
            {/* Simulated app UI */}
            <div className="grid grid-cols-12 gap-2 text-xs">
              <div className="col-span-8 space-y-2">
                {[
                  { desc: 'Bobine acier Ø800 — 3mm', ref: 'ACR-800-03', qty: '12', pu: '340,00 €', total: '4 080,00 €' },
                  { desc: 'Câble cuivre 6mm² — 100m', ref: 'CU-6MM-100', qty: '5', pu: '185,00 €', total: '925,00 €' },
                  { desc: 'Connecteurs RJ45 blindés', ref: 'RJ45-BLD', qty: '50', pu: '3,20 €', total: '160,00 €' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-12 gap-2 bg-slate-700/40 rounded-lg px-3 py-2 text-slate-300">
                    <span className="col-span-5 truncate text-left">{row.desc}</span>
                    <span className="col-span-2 text-slate-500 font-mono truncate">{row.ref}</span>
                    <span className="col-span-1 text-right">{row.qty}</span>
                    <span className="col-span-2 text-right">{row.pu}</span>
                    <span className="col-span-2 text-right text-blue-400 font-medium">{row.total}</span>
                  </div>
                ))}
              </div>
              <div className="col-span-4 bg-slate-700/30 rounded-xl p-3 space-y-2 text-right">
                <div className="text-slate-400">Total HT <span className="text-white font-bold block text-base">5 165,00 €</span></div>
                <div className="text-slate-400">TVA 20% <span className="text-slate-300 block">1 033,00 €</span></div>
                <div className="border-t border-white/10 pt-2 text-slate-400">Total TTC <span className="text-blue-400 font-bold block text-lg">6 198,00 €</span></div>
                <button className="w-full mt-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs rounded-lg py-1.5">
                  Envoyer PDF →
                </button>
              </div>
            </div>
          </div>
          {/* Glow under mockup */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-blue-600/20 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
