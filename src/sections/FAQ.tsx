import * as Accordion from '@radix-ui/react-accordion'
import AnimatedSection from '../components/AnimatedSection'

const FAQS = [
  {
    q: "C'est vraiment gratuit pendant la bêta ?",
    a: "Oui, totalement. Pendant la phase bêta, vous avez accès à toutes les fonctionnalités sans aucune limitation et sans carte bancaire. En échange, on vous demande des retours pour améliorer le produit.",
  },
  {
    q: "Je dois migrer mes données depuis Excel ?",
    a: "Non. Quotio importe vos listes de produits et clients directement depuis Excel ou CSV en quelques clics. Vos données sont conservées, rien n'est perdu.",
  },
  {
    q: "Est-ce que mes devis sont conformes légalement ?",
    a: "Oui. Quotio génère des devis conformes à la réglementation française : mentions légales obligatoires, TVA, numérotation, validité. Tout est automatique.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Vos données sont hébergées en France, chiffrées en transit et au repos. Nous ne revendons aucune donnée. Conformité RGPD totale.",
  },
  {
    q: "Combien d'utilisateurs peuvent accéder au compte ?",
    a: "Pendant la bêta, l'accès est individuel. Le plan Pro (bientôt) permettra des utilisateurs illimités avec gestion des droits.",
  },
  {
    q: "Puis-je annuler quand je veux ?",
    a: "Oui, sans engagement, sans préavis. Vos données restent exportables à tout moment au format standard.",
  },
]

export default function FAQ() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Questions fréquentes</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <Accordion.Item
                key={q}
                value={q}
                className="border border-slate-100 rounded-xl overflow-hidden"
              >
                <Accordion.Trigger className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 text-slate-900 font-medium text-sm hover:bg-slate-50 transition-colors group cursor-pointer">
                  {q}
                  <svg
                    className="w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-5 pb-4 text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-3">
                    {a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </AnimatedSection>
      </div>
    </section>
  )
}
