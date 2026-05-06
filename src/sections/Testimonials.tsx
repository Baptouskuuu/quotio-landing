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
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">Témoignages</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Ils ont changé leur façon de devis-er
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={0.1 * i}>
              <div className="h-full bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col hover:shadow-md hover:border-slate-200 transition-all">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role} · {t.company}</p>
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
