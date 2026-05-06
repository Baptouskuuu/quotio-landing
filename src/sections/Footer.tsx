export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white font-bold text-lg tracking-tight">Quotio</span>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Quotio · Fait en France 🇫🇷 · Données hébergées en France
        </p>
        <div className="flex gap-5 text-xs text-slate-500">
          <a href="#" className="hover:text-slate-300 transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Confidentialité</a>
          <a href="mailto:baptiste.depreux@orange.fr" className="hover:text-slate-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
