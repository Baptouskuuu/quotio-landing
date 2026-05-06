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
    <section className="bg-slate-900 border-y border-white/5 py-12 px-6">
      <AnimatedSection>
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          <p className="text-center text-sm text-slate-400 font-medium">
            Déjà <span className="text-white font-bold">47 entreprises</span> sur liste d'attente
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SECTORS.map(s => (
              <span
                key={s}
                className="px-4 py-2 rounded-full border border-white/10 text-slate-400 text-xs font-medium"
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
