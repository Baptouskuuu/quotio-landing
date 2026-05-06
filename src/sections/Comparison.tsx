import AnimatedSection from '../components/AnimatedSection'

const ROWS = [
  ['Créer un devis', '30-60 minutes', '5 minutes'],
  ['Erreurs de calcul', 'Fréquentes', 'Zéro'],
  ['Catalogue produits', 'Fichier Excel à part', 'Intégré et synchronisé'],
  ['PDF professionnel', 'Mise en forme manuelle', 'Généré automatiquement'],
  ['Suivi des devis', 'Introuvable', 'Tableau de bord en temps réel'],
  ['Relances clients', 'Oubliées', 'Rappels automatiques'],
  ['Partage client', 'Pièce jointe email', 'Lien sécurisé, accessible partout'],
]

export default function Comparison() {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">La différence</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Avant vs Après Quotio
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-3 bg-slate-900 text-white text-sm font-semibold">
              <div className="px-5 py-4 text-slate-400"></div>
              <div className="px-5 py-4 text-center text-red-400">❌ Avant</div>
              <div className="px-5 py-4 text-center text-green-400">✓ Avec Quotio</div>
            </div>
            {ROWS.map(([label, before, after], i) => (
              <div
                key={label}
                className={`grid grid-cols-3 text-sm border-t border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
              >
                <div className="px-5 py-4 font-medium text-slate-700">{label}</div>
                <div className="px-5 py-4 text-center text-slate-400">{before}</div>
                <div className="px-5 py-4 text-center text-slate-900 font-medium">{after}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
