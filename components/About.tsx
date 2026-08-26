const skills = [
  { category: 'Networking', items: ['Cisco SD-WAN / Viptela', 'BGP / OSPF / MPLS', 'IOS XE / XR', 'Network Automation'] },
  { category: 'Infrastructure', items: ['Proxmox VE', 'CML (Cisco Modeling Labs)', 'Docker', 'Linux / WSL'] },
  { category: 'Development', items: ['Python', 'REST APIs', 'Next.js', 'TypeScript'] },
  { category: 'AI & Agents', items: ['Claude / Anthropic SDK', 'OpenAI / Codex', 'Multi-agent systems', 'Prompt engineering'] },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
              About
            </span>
            <h2 className="text-4xl font-bold mt-3 mb-6">
              The person behind<br />the packets
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              <p>
                I&apos;m a network engineer with deep expertise in Cisco SD-WAN (Viptela/Catalyst),
                passionate about building robust, automated network infrastructure.
              </p>
              <p>
                Beyond the day job, I run homelab experiments on Proxmox — from full SD-WAN
                topologies in CML to multi-agent AI systems. I believe the future belongs to
                engineers who can work fluidly across networking, infrastructure, and software.
              </p>
              <p>
                Currently exploring the intersection of AI agents and network operations —
                how LLMs can assist in config generation, troubleshooting, and automation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map(group => (
              <div
                key={group.category}
                className="rounded-xl p-5"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--surface-border)',
                }}
              >
                <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--accent)' }}>
                  {group.category}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.map(item => (
                    <li key={item} className="text-sm" style={{ color: 'var(--muted)' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
