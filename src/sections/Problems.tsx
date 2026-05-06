import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PAINS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
    title: '45 minutes perdues par devis',
    desc: 'Copier-coller depuis Excel, reformater le tableau Word, corriger les erreurs à la main. Pour chaque devis. Tous les jours.',
    stat: '45 min',
    statLabel: 'par devis en moyenne',
    gradientFrom: 'from-red-500/20',
    gradientTo: 'to-red-500/5',
    borderColor: 'border-red-500/15',
    iconBg: 'bg-gradient-to-br from-red-500/20 to-red-500/5',
    iconBorder: 'border-red-500/20',
    iconColor: 'text-red-400',
    statColor: 'from-red-300 to-red-500',
    labelColor: 'text-red-400/80',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
    title: 'Des erreurs qui coûtent cher',
    desc: "Un prix oublié, une remise mal appliquée, une référence erronée. Le client s'en rend compte avant vous — ou vous perdez de la marge sans le savoir.",
    stat: '1 sur 3',
    statLabel: 'devis contient une erreur',
    gradientFrom: 'from-orange-500/20',
    gradientTo: 'to-orange-500/5',
    borderColor: 'border-orange-500/15',
    iconBg: 'bg-gradient-to-br from-orange-500/20 to-orange-500/5',
    iconBorder: 'border-orange-500/20',
    iconColor: 'text-orange-400',
    statColor: 'from-orange-300 to-orange-500',
    labelColor: 'text-orange-400/80',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Zéro visibilité commerciale',
    desc: "Combien de devis en attente ? Lesquels relancer ? Quel est votre taux de conversion ? Personne ne le sait. Tout est éparpillé dans des fichiers et des emails.",
    stat: '68%',
    statLabel: 'des devis ne sont jamais relancés',
    gradientFrom: 'from-rose-500/20',
    gradientTo: 'to-rose-500/5',
    borderColor: 'border-rose-500/15',
    iconBg: 'bg-gradient-to-br from-rose-500/20 to-rose-500/5',
    iconBorder: 'border-rose-500/20',
    iconColor: 'text-rose-400',
    statColor: 'from-rose-300 to-rose-500',
    labelColor: 'text-rose-400/80',
  },
]

export default function Problems() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-slate-950 py-32 lg:py-40 px-6 border-t border-white/[0.05]">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(239,68,68,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-400/80 bg-red-400/[0.08] border border-red-400/15 px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
            Le problème
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            <span
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Vous perdez des affaires
            </span>
            <br />
            <span className="text-slate-500">à cause de vos devis</span>
          </h2>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
            Ce ne sont pas vos prix, ni votre savoir-faire. C'est le processus qui fuit.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {PAINS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative bg-white/[0.03] border ${p.borderColor} rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 shadow-xl shadow-black/20 overflow-hidden`}
            >
              {/* Card inner glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${p.iconBg} border ${p.iconBorder} flex items-center justify-center ${p.iconColor} mb-8 relative z-10`}>
                {p.icon}
              </div>

              {/* Big stat */}
              <div className="relative z-10 mb-1">
                <span
                  className="text-6xl font-black tracking-tight"
                  style={{
                    background: `linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {p.stat}
                </span>
              </div>
              <div className={`text-sm font-medium ${p.labelColor} mb-5 relative z-10`}>{p.statLabel}</div>

              {/* Divider */}
              <div className="h-px bg-white/[0.06] mb-5" />

              <h3 className="font-bold text-white text-base mb-3 relative z-10">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed relative z-10">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            <span className="text-slate-300 font-medium">La bonne nouvelle :</span>{' '}
            ces trois problèmes ont la même solution.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
