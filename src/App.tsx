import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwpbgvnq'

const PAINS = [
  {
    icon: '⏱',
    title: '45 minutes par devis',
    desc: 'Copier-coller depuis Excel, reformater, corriger les erreurs de calcul. À chaque fois.',
  },
  {
    icon: '😬',
    title: 'Des erreurs qui coûtent cher',
    desc: 'Un prix oublié, une remise mal appliquée, une référence erronée. Le client s\'en rend compte avant vous.',
  },
  {
    icon: '🗂',
    title: 'Aucune visibilité commerciale',
    desc: 'Impossible de savoir combien de devis sont en attente, lesquels relancer, quel est votre taux de transformation.',
  },
]

const FEATURES = [
  {
    icon: '⚡',
    title: 'Devis en moins de 5 minutes',
    desc: 'Catalogue produits intégré, calculs automatiques, PDF professionnel. Envoi direct au client.',
  },
  {
    icon: '🏭',
    title: 'Pensé pour l\'industrie',
    desc: 'Références techniques, unités métier (kg, ml, bobines…), remises fournisseurs. Pas un outil générique bricolé.',
  },
  {
    icon: '📊',
    title: 'Tableau de bord commercial',
    desc: 'CA en attente, taux de conversion, relances à faire. Vous savez où en est chaque opportunité.',
  },
]

const FOR_WHO = [
  'Sous-traitants industriels',
  'Sociétés de maintenance et SAV',
  'Négociants et distributeurs B2B',
  'Installateurs techniques',
  "Bureaux d'études et prestataires",
]

function EmailForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) onSuccess()
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="votre@email.fr"
        className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 text-sm"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-colors text-sm whitespace-nowrap disabled:opacity-60 cursor-pointer"
      >
        {status === 'sending' ? 'Envoi…' : 'Je veux tester →'}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-xs mt-1 w-full">Une erreur est survenue. Réessayez.</p>
      )}
    </form>
  )
}

function SuccessBanner() {
  return (
    <div className="w-full max-w-md mx-auto bg-green-500/20 border border-green-500/30 text-green-300 rounded-lg px-6 py-4 text-sm font-medium text-center">
      ✓ C'est noté ! On vous contacte en priorité dès l'ouverture.
    </div>
  )
}

export default function App() {
  const [done, setDone] = useState(false)

  return (
    <div className="min-h-screen">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <span className="text-xl font-bold tracking-tight text-slate-900">Quotio</span>
        <a
          href="#inscription"
          className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
          Accès anticipé →
        </a>
      </nav>

      {/* Hero */}
      <section className="bg-slate-900 text-white px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full mb-6">
            Bêta privée — places limitées
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Vos devis B2B industriels,<br />
            <span className="text-blue-400">en 5 minutes chrono.</span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
            Le premier logiciel de devis pensé pour les PME industrielles françaises.
            Fini Excel, fini les erreurs, fini les devis qui dorment dans les brouillons.
          </p>
          <div id="inscription" className="max-w-md mx-auto">
            {done ? <SuccessBanner /> : <EmailForm onSuccess={() => setDone(true)} />}
          </div>
          <p className="text-slate-500 text-xs mt-4">Gratuit pendant la bêta · Aucune carte requise · Accès en 48h</p>
        </div>
      </section>

      {/* Problèmes */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Le problème</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
            Vous perdez des affaires à cause de vos devis
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {PAINS.map(p => (
              <div key={p.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">La solution</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
            Un outil taillé pour votre métier,<br />pas pour votre comptable
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {FEATURES.map(f => (
              <div key={f.title} className="rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Pour qui</p>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Conçu pour les PME industrielles françaises
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {FOR_WHO.map(w => (
              <span key={w} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 shadow-sm">
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Prêt à gagner du temps sur chaque devis ?
          </h2>
          <p className="text-slate-400 mb-8 text-sm">
            Les premiers inscrits bénéficient d'un accès gratuit étendu et d'un accompagnement personnalisé.
          </p>
          {done ? (
            <SuccessBanner />
          ) : (
            <EmailForm onSuccess={() => setDone(true)} />
          )}
          <p className="text-slate-600 text-xs mt-4">Gratuit pendant la bêta · Aucune carte requise</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-xs text-slate-400 border-t border-slate-100">
        © {new Date().getFullYear()} Quotio · Fait en France 🇫🇷
      </footer>

    </div>
  )
}
