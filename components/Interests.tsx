const interests = [
  {
    icon: '🌐',
    title: 'Network Engineering',
    desc: 'SD-WAN, routing protocols, network automation — I find deep satisfaction in building infrastructure that just works.',
  },
  {
    icon: '🤖',
    title: 'AI & Agents',
    desc: 'Multi-agent systems, LLM tooling, and the emerging field of AI-assisted network operations fascinate me.',
  },
  {
    icon: '🏠',
    title: 'Homelab',
    desc: 'Proxmox VE, CML, self-hosted services — my homelab is where ideas meet reality before production.',
  },
  {
    icon: '⚡',
    title: 'Automation',
    desc: 'If I do something twice manually, I automate it. Python scripts, REST APIs, and shell scripting are my tools.',
  },
  {
    icon: '📡',
    title: 'Wireless & RF',
    desc: 'From Wi-Fi 6E to cellular networks — the invisible infrastructure that connects everything.',
  },
  {
    icon: '🔐',
    title: 'Security',
    desc: 'Network security, zero-trust architecture, and the art of keeping systems secure without breaking usability.',
  },
]

export default function Interests() {
  return (
    <section id="interests" className="py-32 px-6" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
          Interests
        </span>
        <h2 className="text-4xl font-bold mt-3 mb-12">What drives me</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {interests.map(item => (
            <div
              key={item.title}
              className="rounded-xl p-6 transition-all duration-200 hover:border-indigo-500/30"
              style={{
                background: 'var(--background)',
                border: '1px solid var(--surface-border)',
              }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
