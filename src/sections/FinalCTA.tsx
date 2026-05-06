import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrejkrle'

interface Props {
  onSuccess: () => void
  done: boolean
}

export default function FinalCTA({ onSuccess, done }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
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
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-orange-400 bg-orange-400/10 border border-orange-400/20 px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
            Il reste 23 places en bêta
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Prêt à gagner 2 heures<br />par jour sur vos devis ?
          </h2>
          <p className="text-slate-400 mb-10">
            Rejoignez les premières PME industrielles à tester Quotio.<br />
            Accès gratuit, accompagnement personnalisé, aucun engagement.
          </p>

          <div className="max-w-md mx-auto">
            {done ? (
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-6 py-5 text-sm font-medium">
                ✓ Parfait ! On vous contacte dans les 48h pour votre accès.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="votre@entreprise.fr"
                  className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-all"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-6 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all text-sm whitespace-nowrap disabled:opacity-60 hover:scale-105 cursor-pointer"
                >
                  {status === 'sending' ? 'Envoi…' : 'Je veux accès →'}
                </button>
              </form>
            )}
            {status === 'error' && <p className="text-red-400 text-xs mt-2">Erreur. Réessayez.</p>}
            <p className="text-slate-600 text-xs mt-3">Gratuit · Sans carte bancaire · Accès en 48h</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
