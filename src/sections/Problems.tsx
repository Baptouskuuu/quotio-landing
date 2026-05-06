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
    desc: 'Copier-coller depuis Excel, reformater le tableau Word, corriger les erreurs de calcul à la main. Pour chaque devis. Tous les jours.',
    stat: '45 min',
    statLabel: 'par devis en moyenne',
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
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Zéro visibilité commerciale',
    desc: "Combien de devis en attente ? Lesquels relancer ? Quel est votre taux de conversion ? Personne ne le sait. Parce que tout est éparpillé dans des fichiers et des emails.",
    stat: '68%',
    statLabel: 'des devis ne sont jamais relancés',
  },
]

export default function Problems() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-slate-950 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-5">Le problème</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Vous perdez des affaires<br />
            <span className="text-slate-500">à cause de vos devis</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 mt-20">
          {PAINS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-8 text-center hover:border-white/20 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mx-auto">
                {p.icon}
              </div>
              <div className="text-5xl font-black text-white mb-2 mt-6">{p.stat}</div>
              <div className="text-sm text-red-400 font-medium mb-5">{p.statLabel}</div>
              <h3 className="font-bold text-white text-lg mb-3">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
