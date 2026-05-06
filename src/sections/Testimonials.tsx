import AnimatedSection from '../components/AnimatedSection'

const TESTIMONIALS = [
  {
    name: 'Marc Thiébaut',
    role: 'Directeur commercial',
    company: 'Métal Pro Services',
    avatar: 'MT',
    color: 'bg-blue-500',
    text: "On passait 2 heures par jour sur les devis. Avec Quotio, c'est 20 minutes. On a gagné un commercial à temps plein sans embaucher.",
  },
  {
    name: 'Sophie Renard',
    role: 'Gérante',
    company: 'Electro Maintenance PACA',
    avatar: 'SR',
    color: 'bg-purple-500',
    text: "Nos clients reçoivent maintenant un PDF professionnel avec notre logo. On a décroché deux gros contrats qu'on aurait perdus avec notre vieux Word.",
  },
  {
    name: 'Julien Cassagne',
    role: 'Responsable achats',
    company: 'Distribution Ind. Lyon',
    avatar: 'JC',
    color: 'bg-green-500',
    text: "Le catalogue fournisseur intégré nous fait gagner un temps fou. On retrouve n'importe quelle référence en 3 secondes. Fini les erreurs de prix.",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">Témoignages</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Ils ont changé leur façon de devis-er
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-8 mt-16">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={0.1 * i}>
              <div className="h-full bg-gradient-to-b from-slate-50 to-white border border-slate-100 rounded-3xl p-8 flex flex-col hover:shadow-xl hover:border-slate-200 transition-all">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 text-base leading-relaxed flex-1 my-6">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-base shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
