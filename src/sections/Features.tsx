import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const FEATURES = [
  {
    id: 'catalogue',
    title: 'Catalogue produits intelligent',
    desc: "Retrouvez vos références en 2 secondes. Quotio apprend vos produits et les suggère automatiquement dès que vous tapez. Prix, unités, remises — tout est pré-rempli.",
    badge: 'Gain de temps',
    badgeColor: 'blue',
    preview: (
      <div className="space-y-2">
        <div className="bg-slate-700/50 rounded-lg px-3 py-2 text-sm text-slate-300 border border-white/5">
          <span className="text-slate-500 text-xs block mb-1">Description</span>
          <span className="text-blue-400">Bob</span>ine acier Ø800 — 3mm
        </div>
        <div className="bg-white/5 border border-blue-500/30 rounded-lg overflow-hidden">
          {['Bobine acier Ø800 — 3mm · ACR-800-03 · 340€', 'Bobine acier Ø600 — 2mm · ACR-600-02 · 220€', 'Bobine acier Ø1000 — 4mm · ACR-1000-04 · 480€'].map((item, i) => (
            <div key={i} className={`px-3 py-2 text-xs flex justify-between ${i === 0 ? 'bg-blue-500/15 text-blue-300' : 'text-slate-400 hover:bg-white/5'}`}>
              <span>{item.split('·')[0]}</span>
              <span className="text-slate-500 font-mono">{item.split('·')[2]}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'pdf',
    title: 'PDF professionnel en un clic',
    desc: "Votre logo, vos couleurs, votre mise en page. Le devis s'exporte en PDF haute qualité, prêt à envoyer. Le client peut même l'approuver directement depuis un lien.",
    badge: 'Image de marque',
    badgeColor: 'green',
    preview: (
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <div className="w-20 h-6 bg-blue-500/30 rounded mb-1" />
            <div className="text-xs text-slate-500">Votre entreprise</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-white">DEVIS</div>
            <div className="text-xs text-slate-500 font-mono">DEV-2024-089</div>
          </div>
        </div>
        <div className="h-px bg-blue-500/40" />
        <div className="space-y-1">
          {['Bobine acier Ø800', 'Câble cuivre 6mm²', 'Connecteurs RJ45'].map((item, i) => (
            <div key={i} className="flex justify-between text-xs">
              <span className="text-slate-400">{item}</span>
              <span className="text-white font-mono">{['4 080 €', '925 €', '160 €'][i]}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-2 flex justify-between">
          <span className="text-xs text-slate-400">Total TTC</span>
          <span className="text-blue-400 font-bold">6 198 €</span>
        </div>
      </div>
    ),
  },
  {
    id: 'dashboard',
    title: 'Tableau de bord commercial',
    desc: "CA en attente, devis à relancer, taux de conversion — tout est visible en un coup d'œil. Sachez exactement où en est chaque opportunité commerciale.",
    badge: 'Pilotage',
    badgeColor: 'purple',
    preview: (
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[['47K €', 'CA en attente', 'text-blue-400'], ['68%', 'Taux conversion', 'text-green-400'], ['12', 'À relancer', 'text-orange-400']].map(([val, label, color]) => (
            <div key={label} className="bg-white/5 border border-white/8 rounded-xl p-3 text-center">
              <div className={`text-xl font-bold ${color}`}>{val}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {[['Client Dupont SA', 'En attente', '12 400 €', 'yellow'], ['Maintenance ACRO', 'Accepté', '8 200 €', 'green'], ['Métal Provence', 'À relancer', '5 800 €', 'orange']].map(([client, status, amount, color]) => (
            <div key={client} className="flex items-center justify-between bg-white/3 rounded-lg px-3 py-2 text-xs">
              <span className="text-slate-300">{client}</span>
              <span className={`text-${color}-400`}>{status}</span>
              <span className="text-white font-mono">{amount}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

const badgeColors: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
}

export default function Features() {
  const [active, setActive] = useState('catalogue')
  const feature = FEATURES.find(f => f.id === active)!

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">La solution</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Un outil taillé pour votre métier,<br />
            <span className="text-slate-400">pas pour votre comptable</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Tabs */}
            <div className="space-y-3">
              {FEATURES.map(f => (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    active === f.id
                      ? 'bg-slate-950 border-slate-800 shadow-xl'
                      : 'bg-slate-50 border-slate-100 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className={`font-semibold ${active === f.id ? 'text-white' : 'text-slate-900'}`}>
                      {f.title}
                    </h3>
                    <span className={`text-xs px-2.5 py-1 rounded-full border shrink-0 ${badgeColors[f.badgeColor]}`}>
                      {f.badge}
                    </span>
                  </div>
                  {active === f.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-sm text-slate-400 leading-relaxed"
                    >
                      {f.desc}
                    </motion.p>
                  )}
                </button>
              ))}
            </div>

            {/* Preview */}
            <div className="bg-slate-950 border border-white/10 rounded-2xl p-6 min-h-[300px] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25 }}
                >
                  {feature.preview}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
