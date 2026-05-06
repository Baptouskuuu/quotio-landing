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
    <section className="bg-slate-950 border-t border-white/5 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-5">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Questions fréquentes</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-16 max-w-3xl mx-auto">
            <Accordion.Root type="single" collapsible>
              {FAQS.map(({ q, a }) => (
                <Accordion.Item
                  key={q}
                  value={q}
                  className="border border-white/[0.08] rounded-2xl overflow-hidden mb-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <Accordion.Trigger className="w-full text-left px-7 py-5 flex justify-between items-center gap-4 text-white font-medium text-base cursor-pointer group">
                    {q}
                    <svg
                      className="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="px-7 pb-6 text-sm text-slate-400 leading-relaxed">
                      {a}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
