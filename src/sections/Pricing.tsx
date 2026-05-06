import AnimatedSection from '../components/AnimatedSection'

const BETA_FEATURES = [
  'Devis illimités',
  'Catalogue produits & clients',
  'Export PDF professionnel',
  'Tableau de bord commercial',
  'Lien client partageable',
  'Support prioritaire',
]

const PRO_FEATURES = [
  'Tout ce qui est en Bêta',
  'Multi-utilisateurs',
  'Signature électronique',
  'Intégration comptable',
  'Relances automatiques',
  'API & webhooks',
]

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section className="bg-slate-950 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-5">Tarifs</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Simple. Transparent.
          </h2>
          <p className="text-slate-400 mt-5 text-lg">Gratuit pendant toute la bêta.</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
            {/* Bêta */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center flex flex-col">
              <div className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">Bêta</div>
              <div className="text-6xl font-black text-white mb-3">Gratuit</div>
              <div className="text-slate-400 mb-8">Pendant toute la période bêta</div>
              <ul className="space-y-4 mb-10 text-left">
                {BETA_FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm py-1">
                    <CheckIcon className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#inscription"
                className="mt-auto block w-full text-center py-4 rounded-2xl border border-white/15 text-white font-semibold hover:bg-white/5 transition-all"
              >
                Rejoindre la bêta →
              </a>
            </div>

            {/* Pro */}
            <div className="relative bg-blue-600 rounded-3xl p-10 shadow-2xl shadow-blue-500/20 text-center flex flex-col">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                Bientôt disponible
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-blue-200 mb-4">Pro</div>
              <div className="text-6xl font-black text-white mb-1">
                199 €
              </div>
              <div className="text-xl text-blue-200 mb-3">/mois</div>
              <div className="text-blue-200 mb-8">Par entreprise · Utilisateurs illimités</div>
              <ul className="space-y-4 mb-10 text-left">
                {PRO_FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm py-1">
                    <CheckIcon className="w-4 h-4 text-blue-200 shrink-0" />
                    <span className="text-white">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="mt-auto block w-full text-center py-4 rounded-2xl bg-white/20 text-white font-semibold opacity-60 cursor-not-allowed"
              >
                Bientôt disponible
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
