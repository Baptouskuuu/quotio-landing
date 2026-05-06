import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrejkrle'

interface Props {
  onSuccess: () => void
  done: boolean
}

function AnimatedCounter({ from, to, duration = 1.5 }: { from: number; to: number; duration?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(from)
  const rounded = useTransform(count, v => Math.round(v))

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, to, { duration, ease: 'easeOut' })
    return controls.stop
  }, [inView, count, to, duration])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export default function FinalCTA({ onSuccess, done }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
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
    <section className="relative bg-slate-950 py-32 lg:py-40 px-6 overflow-hidden border-t border-white/[0.05]">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div
          className="absolute top-0 left-1/4 w-[250px] h-[250px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Urgency badge with animated counter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-flex items-center gap-2.5 text-sm font-semibold text-orange-400 bg-orange-400/[0.08] border border-orange-400/20 px-5 py-2.5 rounded-full mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
          </span>
          <AnimatedCounter from={50} to={23} duration={2} /> places restantes en bêta
        </motion.div>

        {/* Glassmorphism card */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.10] rounded-3xl p-10 sm:p-12 shadow-2xl shadow-black/30"
        >
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
            <span
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Prêt à gagner 2 heures
              <br />
              par jour sur vos devis ?
            </span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto">
            Rejoignez les premières PME industrielles à tester Quotio.{' '}
            <span className="text-slate-300">Accès gratuit, accompagnement personnalisé, aucun engagement.</span>
          </p>

          {/* Form */}
          <div className="max-w-md mx-auto">
            {done ? (
              <div className="bg-green-500/10 border border-green-500/25 text-green-400 rounded-2xl px-6 py-5 text-sm font-medium flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Parfait ! On vous contacte dans les 48h pour votre accès.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="votre@entreprise.fr"
                  className="flex-1 px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.10] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.08] text-sm transition-all duration-200"
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
            <p className="text-slate-600 text-xs mt-4">Gratuit · Sans carte bancaire · Accès en 48h</p>
          </div>

          {/* Trust signals */}
          <div className="mt-10 pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-4">
            {[
              { icon: '🔒', label: 'Données sécurisées', sub: 'Hébergées en France' },
              { icon: '⚡', label: 'Mise en route rapide', sub: 'Moins de 30 minutes' },
              { icon: '🤝', label: 'Support dédié', sub: 'Réponse en 2h ouvrées' },
            ].map(item => (
              <div key={item.label} className="text-center">
                <div className="text-xl mb-1.5">{item.icon}</div>
                <div className="text-xs font-medium text-slate-300">{item.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-600 text-xs mt-6"
        >
          Déjà 40+ PME industrielles sur liste d'attente · Pas de spam, jamais
        </motion.p>
      </div>
    </section>
  )
}
