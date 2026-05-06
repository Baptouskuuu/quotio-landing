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
    <section className="relative min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 pt-28 pb-24 overflow-hidden">

      {/* Animated mesh orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb-1 absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div
          className="orb-2 absolute top-[40%] right-[15%] w-[400px] h-[400px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div
          className="orb-3 absolute bottom-[10%] left-[35%] w-[350px] h-[350px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-400/[0.08] border border-blue-400/20 px-4 py-2 rounded-full mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          Bêta privée — places limitées
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-7"
        >
          <span
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 40%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Vos devis industriels,
          </span>
          <br />
          <span
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            en 5 minutes.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-xl text-slate-400 max-w-lg mx-auto leading-relaxed mb-10"
        >
          Fini Excel. Fini les erreurs. Fini les devis perdus.{' '}
          <span className="text-slate-200">Quotio est le seul logiciel pensé pour les PME industrielles françaises.</span>
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          id="inscription"
          className="max-w-md mx-auto mb-5"
        >
          {done ? (
            <div className="bg-green-500/10 border border-green-500/25 text-green-400 rounded-2xl px-6 py-4 text-sm font-medium flex items-center gap-3">
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              C'est noté ! On vous contacte en priorité dès l'ouverture.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="votre@entreprise.fr"
                className="flex-1 px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.10] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.07] text-sm transition-all duration-200"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-5 py-3.5 bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-200 text-sm whitespace-nowrap disabled:opacity-60 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-blue-500/25"
              >
                {status === 'sending' ? 'Envoi…' : 'Demander l\'accès →'}
              </button>
            </form>
          )}
          {status === 'error' && <p className="text-red-400 text-xs mt-2">Erreur. Réessayez dans un instant.</p>}
          <p className="text-slate-600 text-xs mt-3">Gratuit pendant la bêta · Aucune carte requise · Accès en 48h</p>
        </motion.div>

        {/* Social proof micro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-6 mb-16 text-xs text-slate-500"
        >
          {[
            { icon: '★★★★★', label: '4.9 / 5 sur G2' },
            { icon: '🏭', label: '40+ PME industrielles' },
            { icon: '🔒', label: 'Données hébergées en France' },
          ].map(item => (
            <span key={item.label} className="flex items-center gap-1.5">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </span>
          ))}
        </motion.div>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 56, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Glow behind mockup */}
          <div
            className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
            style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(59,130,246,0.4) 0%, transparent 70%)' }}
          />

          {/* Window chrome */}
          <div className="relative bg-slate-900/80 border border-white/[0.10] rounded-2xl shadow-2xl shadow-black/60 backdrop-blur-sm overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07] bg-slate-900/60">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs text-slate-500 font-mono">Devis #DEV-2024-089 — Bobines acier Ø800</span>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-green-500/15 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">Envoyé</span>
              </div>
            </div>

            {/* App content */}
            <div className="p-5">
              {/* Top info row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
                  <div className="text-xs text-slate-500 mb-1">Client</div>
                  <div className="text-sm text-white font-medium">Dupont Industrie SA</div>
                  <div className="text-xs text-slate-500 mt-0.5">Lyon — 69000</div>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
                  <div className="text-xs text-slate-500 mb-1">Validité</div>
                  <div className="text-sm text-white font-medium">30 jours</div>
                  <div className="text-xs text-slate-500 mt-0.5">Expire le 15/02/2025</div>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
                  <div className="text-xs text-slate-500 mb-1">Statut</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="text-sm text-yellow-400 font-medium">En attente</span>
                  </div>
                </div>
              </div>

              {/* Table header */}
              <div className="grid grid-cols-12 gap-2 px-3 py-2 text-xs text-slate-500 font-medium mb-1">
                <span className="col-span-5">Description</span>
                <span className="col-span-2 font-mono">Réf.</span>
                <span className="col-span-1 text-right">Qté</span>
                <span className="col-span-2 text-right">P.U. HT</span>
                <span className="col-span-2 text-right">Total HT</span>
              </div>

              {/* Table rows */}
              <div className="space-y-1.5 mb-4">
                {[
                  { desc: 'Bobine acier Ø800 — 3mm', ref: 'ACR-800-03', qty: '12', pu: '340,00 €', total: '4 080,00 €', highlight: true },
                  { desc: 'Câble cuivre 6mm² — 100m', ref: 'CU-6MM-100', qty: '5', pu: '185,00 €', total: '925,00 €', highlight: false },
                  { desc: 'Connecteurs RJ45 blindés', ref: 'RJ45-BLD', qty: '50', pu: '3,20 €', total: '160,00 €', highlight: false },
                  { desc: 'Frais de transport', ref: 'TRANSPORT', qty: '1', pu: '0,00 €', total: 'Offert', highlight: false },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-12 gap-2 rounded-xl px-3 py-2.5 text-xs transition-colors ${
                      row.highlight
                        ? 'bg-blue-500/[0.08] border border-blue-500/20 text-slate-200'
                        : 'bg-white/[0.02] border border-transparent text-slate-300'
                    }`}
                  >
                    <span className="col-span-5 truncate text-left">{row.desc}</span>
                    <span className="col-span-2 text-slate-500 font-mono truncate">{row.ref}</span>
                    <span className="col-span-1 text-right text-slate-400">{row.qty}</span>
                    <span className="col-span-2 text-right text-slate-400">{row.pu}</span>
                    <span className={`col-span-2 text-right font-semibold ${row.highlight ? 'text-blue-400' : 'text-slate-200'}`}>{row.total}</span>
                  </div>
                ))}
              </div>

              {/* Footer totals + action */}
              <div className="flex items-end justify-between pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/[0.04] border border-white/[0.08] hover:border-white/20 rounded-lg px-3 py-1.5 transition-all cursor-pointer">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Ajouter une ligne
                  </button>
                </div>
                <div className="text-right space-y-1">
                  <div className="flex justify-between gap-12 text-xs text-slate-400">
                    <span>Total HT</span><span className="text-slate-200 font-medium">5 165,00 €</span>
                  </div>
                  <div className="flex justify-between gap-12 text-xs text-slate-500">
                    <span>TVA 20%</span><span>1 033,00 €</span>
                  </div>
                  <div className="flex justify-between gap-12 text-sm font-bold pt-1 border-t border-white/[0.08]">
                    <span className="text-slate-300">Total TTC</span>
                    <span className="text-blue-400">6 198,00 €</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action bar */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/[0.07] bg-slate-900/40">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Sauvegardé automatiquement
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xs text-slate-400 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-lg hover:border-white/20 transition-all cursor-pointer">
                  Aperçu PDF
                </button>
                <button className="text-xs text-white bg-blue-500 hover:bg-blue-400 px-4 py-1.5 rounded-lg transition-all cursor-pointer font-medium shadow-sm shadow-blue-500/30">
                  Envoyer au client →
                </button>
              </div>
            </div>
          </div>

          {/* Bottom glow line */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-blue-500/20 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
