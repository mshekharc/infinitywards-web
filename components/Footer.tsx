export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center text-sm"
      style={{
        color: 'var(--muted)',
        borderTop: '1px solid var(--surface-border)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>
          <span style={{ color: 'var(--accent)' }}>∞</span> InfinityWards — Mrigank Shekhar Chaubey
        </span>
        <div className="flex gap-6">
          <a
            href="mailto:mriganksc@infinitywards.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
