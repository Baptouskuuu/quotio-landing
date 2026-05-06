import AnimatedSection from '../components/AnimatedSection'

const SECTORS = [
  'Sous-traitance industrielle',
  'Maintenance & SAV',
  'Négoce B2B',
  'Installation technique',
  "Bureau d'études",
  'Distribution industrielle',
]

export default function SocialProof() {
  return (
    <section className="bg-slate-900 border-y border-white/5 py-10 px-6">
      <AnimatedSection>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs text-slate-500 font-medium uppercase tracking-widest mb-6">
            Déjà <span className="text-white font-bold">47 entreprises</span> sur liste d'attente
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SECTORS.map(s => (
              <span
                key={s}
                className="px-4 py-2 rounded-full border border-white/8 text-slate-500 text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
