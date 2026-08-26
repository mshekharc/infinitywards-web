const achievements = [
  {
    year: '2026',
    title: 'Full SD-WAN Lab — End-to-End Verified',
    desc: 'Designed and deployed a complete Cisco SD-WAN topology in CML with centralized control policies, AAR, hub-and-spoke, and data policies — all verified with live traffic.',
  },
  {
    year: '2026',
    title: 'Multi-Agent AI Studio',
    desc: 'Integrated Claude Code, OpenAI Codex, and Cursor into a unified dev environment with shared authentication — eliminating repeated auth prompts across tools.',
  },
  {
    year: '2025',
    title: 'Cisco SD-WAN Expertise',
    desc: 'Deep hands-on expertise in Cisco Catalyst SD-WAN (Viptela) — vManage REST API, OMP, TLOC, policy engine, and certificate lifecycle management.',
  },
  {
    year: '2025',
    title: 'Homelab Proxmox Infrastructure',
    desc: 'Built a production-grade homelab on Proxmox VE hosting CML, multiple VMs, and AI workloads — enabling full network simulation without cloud costs.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
          Achievements
        </span>
        <h2 className="text-4xl font-bold mt-3 mb-12">Milestones</h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-[68px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'var(--surface-border)' }}
          />

          <div className="space-y-8">
            {achievements.map((a, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="hidden md:flex flex-col items-center gap-2 shrink-0 w-16 pt-1">
                  <span className="text-sm font-mono font-semibold" style={{ color: 'var(--accent)' }}>
                    {a.year}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                </div>
                <div
                  className="flex-1 rounded-xl p-6"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--surface-border)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="md:hidden text-xs font-mono font-semibold"
                      style={{ color: 'var(--accent)' }}
                    >
                      {a.year}
                    </span>
                    <h3 className="font-semibold">{a.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
