import { store } from '../store.js';

export function renderHome(container) {
    const statusColor = store.serverStatus.online ? 'bg-green-500' : 'bg-red-500';
    const statusText = store.serverStatus.online ? 'Online' : 'Offline';

    container.innerHTML = `
        <!-- Hero -->
        <section class="relative min-h-[80vh] flex items-center justify-center text-center px-6 pt-10">
            <div class="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <span class="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-wider text-brand-red mb-6 uppercase inline-flex items-center gap-2 view-enter">
                    <span class="w-2 h-2 rounded-full ${statusColor} animate-pulse"></span>
                    Server is ${statusText}
                </span>
                <h1 class="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight mb-4 view-enter" style="line-height: 1.1;">
                    Live The <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 text-glow">Real Experience</span>
                </h1>
                <p class="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 view-enter">
                    Join the most immersive and competitive RolePlay community. Build your empire, enforce the law, or live a normal life. Your story starts here.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 view-enter">
                    <button onclick="window.router.navigate('apply')" class="px-8 py-4 bg-brand-red text-white font-bold rounded neon-shadow hover:bg-red-600 transition-all uppercase tracking-wider">
                        Apply for Whitelist
                    </button>
                    <button onclick="window.router.navigate('rules')" class="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded hover:bg-white/10 transition-all uppercase tracking-wider">
                        View Rules
                    </button>
                </div>
            </div>
        </section>

        <!-- Stats/Info -->
        <section class="max-w-7xl mx-auto px-6 py-20 -mt-20 relative z-20">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="glass-card rounded-xl p-6 flex items-center gap-4 view-enter">
                    <div class="w-12 h-12 rounded bg-white/5 flex items-center justify-center">
                        <i data-lucide="server" class="w-6 h-6 text-brand-red"></i>
                    </div>
                    <div>
                        <p class="text-zinc-400 text-sm">Server IP</p>
                        <p class="font-bold text-lg">play.newliferp.com</p>
                    </div>
                </div>
                <div class="glass-card rounded-xl p-6 flex items-center gap-4 view-enter" style="transition-delay: 0.1s">
                    <div class="w-12 h-12 rounded bg-white/5 flex items-center justify-center">
                        <i data-lucide="users" class="w-6 h-6 text-brand-red"></i>
                    </div>
                    <div>
                        <p class="text-zinc-400 text-sm">Players Online</p>
                        <p class="font-bold text-lg">${store.serverStatus.players} / ${store.serverStatus.maxPlayers}</p>
                    </div>
                </div>
                <div class="glass-card rounded-xl p-6 flex items-center gap-4 view-enter" style="transition-delay: 0.2s">
                    <div class="w-12 h-12 rounded bg-[#5865F2]/20 flex items-center justify-center">
                        <i data-lucide="message-square" class="w-6 h-6 text-[#5865F2]"></i>
                    </div>
                    <div>
                        <p class="text-zinc-400 text-sm">Discord Community</p>
                        <a href="#" class="font-bold text-lg text-[#5865F2] hover:underline">Join Server</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="max-w-7xl mx-auto px-6 py-20">
            <div class="text-center mb-16 view-enter">
                <h2 class="font-display text-4xl font-bold uppercase tracking-wide mb-4">Why Choose Us?</h2>
                <div class="w-20 h-1 bg-brand-red mx-auto rounded"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="glass-card p-8 rounded-2xl view-enter hover:border-brand-red/50 transition-colors">
                    <i data-lucide="briefcase" class="w-10 h-10 text-brand-red mb-6"></i>
                    <h3 class="text-xl font-bold mb-3">Advanced Economy</h3>
                    <p class="text-zinc-400 leading-relaxed">A fully player-driven economy. Run businesses, trade stocks, or work your way up the corporate ladder.</p>
                </div>
                <div class="glass-card p-8 rounded-2xl view-enter hover:border-brand-red/50 transition-colors" style="transition-delay: 0.1s">
                    <i data-lucide="shield" class="w-10 h-10 text-brand-red mb-6"></i>
                    <h3 class="text-xl font-bold mb-3">Active Staff</h3>
                    <p class="text-zinc-400 leading-relaxed">Our dedicated 24/7 staff team ensures fair play and assists with any issues immediately.</p>
                </div>
                <div class="glass-card p-8 rounded-2xl view-enter hover:border-brand-red/50 transition-colors" style="transition-delay: 0.2s">
                    <i data-lucide="car" class="w-10 h-10 text-brand-red mb-6"></i>
                    <h3 class="text-xl font-bold mb-3">Custom Assets</h3>
                    <p class="text-zinc-400 leading-relaxed">Hundreds of custom vehicles, clothing options, and mapped interiors to explore.</p>
                </div>
            </div>
        </section>
    `;
}
