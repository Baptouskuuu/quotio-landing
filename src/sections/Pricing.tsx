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

export default function Pricing() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-4">Tarifs</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Simple. Transparent.
          </h2>
          <p className="text-slate-400 mt-3">Gratuit pendant toute la bêta.</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Bêta */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-2">Bêta</div>
              <div className="text-4xl font-bold text-white mb-1">Gratuit</div>
              <div className="text-slate-400 text-sm mb-6">Pendant toute la période bêta</div>
              <ul className="space-y-3 mb-8">
                {BETA_FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#inscription"
                className="block w-full text-center py-3 rounded-xl border border-white/15 text-white text-sm font-semibold hover:bg-white/5 transition-all"
              >
                Rejoindre la bêta →
              </a>
            </div>

            {/* Pro */}
            <div className="relative bg-blue-600 rounded-2xl p-8 shadow-2xl shadow-blue-500/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                Bientôt disponible
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-blue-200 mb-2">Pro</div>
              <div className="text-4xl font-bold text-white mb-1">
                199 €<span className="text-xl font-normal text-blue-200">/mois</span>
              </div>
              <div className="text-blue-200 text-sm mb-6">Par entreprise · Utilisateurs illimités</div>
              <ul className="space-y-3 mb-8">
                {PRO_FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white">
                    <svg className="w-4 h-4 text-blue-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="block w-full text-center py-3 rounded-xl bg-white/20 text-white text-sm font-semibold opacity-60 cursor-not-allowed"
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
