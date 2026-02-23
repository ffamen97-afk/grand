import { store } from '../store.js';

export function renderApply(container) {
    container.innerHTML = `
        <div class="max-w-3xl mx-auto px-6 py-20 w-full">
            <div class="mb-10 view-enter">
                <h1 class="font-display text-4xl font-bold uppercase tracking-wide mb-2">Whitelist Application</h1>
                <p class="text-zinc-400">Fill out the form below to apply for access to NewLife RolePlay.</p>
            </div>

            <div id="apply-success" class="hidden glass-card p-8 rounded-2xl text-center border-green-500/30 view-enter">
                <div class="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="check" class="w-8 h-8 text-green-500"></i>
                </div>
                <h2 class="text-2xl font-bold mb-2">Application Submitted!</h2>
                <p class="text-zinc-400">Your application has been sent to our staff team. Please allow up to 48 hours for review. Check your Discord for updates.</p>
                <button onclick="window.router.navigate('home')" class="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded transition-colors">Return Home</button>
            </div>

            <form id="apply-form" class="glass-card p-8 rounded-2xl space-y-6 view-enter" style="transition-delay: 0.1s">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-zinc-400 mb-1">Real Name</label>
                        <input type="text" id="realName" class="input-field" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-zinc-400 mb-1">Age</label>
                        <input type="number" class="input-field" required min="16">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-zinc-400 mb-1">Discord ID</label>
                        <input type="text" class="input-field" required placeholder="User#1234">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-zinc-400 mb-1">In-Game Name</label>
                        <input type="text" id="ign" class="input-field" required placeholder="John_Doe">
                    </div>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-zinc-400 mb-1">RolePlay Experience</label>
                    <textarea class="input-field min-h-[100px]" required placeholder="Detail your previous RP experience..."></textarea>
                </div>

                <div>
                    <label class="block text-sm font-medium text-zinc-400 mb-1">Character Story</label>
                    <textarea class="input-field min-h-[150px]" required placeholder="Tell us about your character's background, goals, and personality..."></textarea>
                </div>

                <label class="flex items-start gap-3 cursor-pointer bg-white/5 p-4 rounded border border-white/10">
                    <input type="checkbox" required class="mt-1 rounded border-zinc-700 bg-zinc-900 text-brand-red focus:ring-brand-red">
                    <span class="text-sm text-zinc-300">I confirm that I have read and understood all server rules. I understand that breaking these rules may result in an immediate ban.</span>
                </label>

                <button type="submit" class="w-full py-4 bg-brand-red text-white font-bold rounded neon-shadow hover:bg-red-600 transition-all uppercase tracking-wider text-lg">
                    Submit Application
                </button>
            </form>
        </div>
    `;

    document.getElementById('apply-form').addEventListener('submit', (e) => {
        e.preventDefault();
        

        store.addApplication({
            realName: document.getElementById('realName').value,
            ign: document.getElementById('ign').value
        });

        document.getElementById('apply-form').classList.add('hidden');
        document.getElementById('apply-success').classList.remove('hidden');
        lucide.createIcons();
    });
}
