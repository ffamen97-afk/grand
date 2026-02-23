export function renderRules(container) {
    const rules = [
        {
            title: '1. General Rules',
            items: [
                'Respect all players and staff members at all times.',
                'No hacking, exploiting, or using third-party software for an unfair advantage.',
                'Microphone is required for RolePlay.',
                'Do not break character (OOC) under any circumstances unless authorized by staff.'
            ]
        },
        {
            title: '2. RolePlay Rules',
            items: [
                'Value your life (NVL) - You must act realistically when your life is in danger.',
                'No Random Deathmatch (RDM) - You must have a valid RP reason to attack someone.',
                'No Vehicle Deathmatch (VDM) - Using vehicles as weapons without valid RP is prohibited.',
                'Meta-gaming is strictly forbidden. Do not use outside information in-game.'
            ]
        },
        {
            title: '3. Safe Zones',
            items: [
                'Hospitals, Police Stations, and Spawn areas are strictly Safe Zones.',
                'No criminal activities (robbing, kidnapping, shooting) may occur or flee into Safe Zones.',
                'Baiting police or other players into Safe Zones is not allowed.'
            ]
        }
    ];

    container.innerHTML = `
        <div class="max-w-4xl mx-auto px-6 py-20 w-full">
            <div class="text-center mb-16 view-enter">
                <h1 class="font-display text-4xl font-bold uppercase tracking-wide mb-4">Server Rules</h1>
                <p class="text-zinc-400">Read carefully. Ignorance of the rules is not an excuse.</p>
            </div>

            <div class="space-y-8">
                ${rules.map((rule, idx) => `
                    <div class="glass-card p-8 rounded-2xl view-enter" style="transition-delay: ${idx * 0.1}s">
                        <h2 class="font-display text-2xl font-bold text-brand-red mb-6">${rule.title}</h2>
                        <ul class="space-y-4">
                            ${rule.items.map((item, i) => `
                                <li class="flex gap-4 items-start">
                                    <span class="w-6 h-6 rounded bg-white/5 text-zinc-400 flex items-center justify-center flex-shrink-0 text-sm font-bold">${i + 1}</span>
                                    <span class="text-zinc-300 leading-relaxed">${item}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}

                <div class="glass-card p-8 rounded-2xl border-brand-red/50 bg-brand-red/5 view-enter" style="transition-delay: 0.3s">
                    <div class="flex items-center gap-3 mb-4">
                        <i data-lucide="alert-triangle" class="text-brand-red"></i>
                        <h2 class="font-display text-xl font-bold text-white">Punishment System</h2>
                    </div>
                    <p class="text-zinc-300">Violating any of these rules will result in a warning, kick, temporary ban, or permanent ban depending on the severity and staff discretion.</p>
                </div>
            </div>
        </div>
    `;
}
