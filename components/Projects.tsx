const projects = [
  {
    title: 'CML SD-WAN Lab',
    description: 'Full Cisco SD-WAN topology in Cisco Modeling Labs — vManage, vSmart, vBond, and C8000v edges with centralized policies, AAR, hub-and-spoke, and VPN segmentation.',
    tags: ['Cisco SD-WAN', 'CML', 'Python', 'REST API'],
    status: 'Active',
  },
  {
    title: 'Agent Studio',
    description: 'Multi-agent workspace integrating Claude Code, OpenAI Codex CLI, and Cursor with unified authentication and shared API key management.',
    tags: ['Claude API', 'OpenAI', 'Next.js', 'Python'],
    status: 'Active',
  },
  {
    title: 'Network Automation Scripts',
    description: 'Python-based automation for SD-WAN policy management via vManage REST API — certificate lifecycle, OMP verification, and policy deployment.',
    tags: ['Python', 'REST API', 'SD-WAN', 'Automation'],
    status: 'Active',
  },
  {
    title: 'InfinityWards.com',
    description: 'This site — a dynamic full-stack personal portfolio built with Next.js, Tailwind CSS, and Supabase. Deployed on Vercel with custom domain.',
    tags: ['Next.js', 'Supabase', 'Vercel', 'TypeScript'],
    status: 'Live',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
          Projects
        </span>
        <h2 className="text-4xl font-bold mt-3 mb-12">Things I&apos;ve built</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div
              key={p.title}
              className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:border-indigo-500/30"
              style={{
                background: 'var(--background)',
                border: '1px solid var(--surface-border)',
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span
                  className="shrink-0 text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: p.status === 'Live' ? 'rgba(34,197,94,0.1)' : 'rgba(99,102,241,0.1)',
                    color: p.status === 'Live' ? '#22c55e' : 'var(--accent)',
                    border: `1px solid ${p.status === 'Live' ? 'rgba(34,197,94,0.2)' : 'rgba(99,102,241,0.2)'}`,
                  }}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      background: 'var(--surface)',
                      color: 'var(--muted)',
                      border: '1px solid var(--surface-border)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
