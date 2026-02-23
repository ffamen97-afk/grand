import { store } from '../store.js';

export function renderAdmin(container) {
    if (!store.user || store.user.role !== 'admin') {
        window.router.navigate('home');
        return;
    }

    container.innerHTML = `
        <div class="flex-1 flex w-full max-w-7xl mx-auto">
            <!-- Sidebar -->
            <aside class="w-64 border-r border-white/5 p-6 hidden md:block">
                <h2 class="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-6">Admin Panel</h2>
                <nav class="space-y-2">
                    <a href="#" class="flex items-center gap-3 px-4 py-3 bg-brand-red/10 text-brand-red rounded-lg font-medium">
                        <i data-lucide="layout-dashboard" class="w-5 h-5"></i> Dashboard
                    </a>
                    <a href="#" class="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <i data-lucide="users" class="w-5 h-5"></i> Players
                    </a>
                    <a href="#" class="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <i data-lucide="settings" class="w-5 h-5"></i> Settings
                    </a>
                </nav>
            </aside>

            <!-- Content -->
            <div class="flex-1 p-6 md:p-10 w-full overflow-hidden">
                <header class="flex justify-between items-center mb-10 view-enter">
                    <div>
                        <h1 class="font-display text-3xl font-bold uppercase">Dashboard</h1>
                        <p class="text-zinc-400 text-sm">Welcome back, Admin</p>
                    </div>
                    <div class="flex items-center gap-3 glass-card px-4 py-2 rounded-full">
                        <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span class="text-sm font-medium">Server Online</span>
                    </div>
                </header>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 view-enter">
                    <div class="glass-card p-6 rounded-2xl">
                        <p class="text-zinc-400 text-sm mb-2">Total Applications</p>
                        <p class="text-3xl font-bold">${store.applications.length}</p>
                    </div>
                    <div class="glass-card p-6 rounded-2xl">
                        <p class="text-zinc-400 text-sm mb-2">Pending Review</p>
                        <p class="text-3xl font-bold text-yellow-500">${store.applications.filter(a => a.status === 'pending').length}</p>
                    </div>
                    <div class="glass-card p-6 rounded-2xl">
                        <p class="text-zinc-400 text-sm mb-2">Registered Users</p>
                        <p class="text-3xl font-bold">1,248</p>
                    </div>
                </div>

                <div class="glass-card rounded-2xl overflow-hidden view-enter border border-white/5">
                    <div class="px-6 py-4 border-b border-white/5 bg-white/5">
                        <h2 class="font-bold">Recent Whitelist Applications</h2>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-sm">
                            <thead class="text-zinc-500 bg-black/20">
                                <tr>
                                    <th class="px-6 py-4 font-medium">Date</th>
                                    <th class="px-6 py-4 font-medium">Applicant Name</th>
                                    <th class="px-6 py-4 font-medium">In-Game Name</th>
                                    <th class="px-6 py-4 font-medium">Status</th>
                                    <th class="px-6 py-4 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-white/5 text-zinc-300">
                                ${store.applications.map(app => `
                                    <tr class="hover:bg-white/5 transition-colors">
                                        <td class="px-6 py-4">${app.date}</td>
                                        <td class="px-6 py-4 font-medium text-white">${app.name}</td>
                                        <td class="px-6 py-4">${app.ign}</td>
                                        <td class="px-6 py-4">
                                            <span class="px-2.5 py-1 rounded text-xs font-medium ${app.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-green-500/10 text-green-500'} uppercase tracking-wider">
                                                ${app.status}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 text-right">
                                            ${app.status === 'pending' ? `
                                                <button class="text-green-500 hover:text-green-400 mr-3 transition-colors">Accept</button>
                                                <button class="text-red-500 hover:text-red-400 transition-colors">Reject</button>
                                            ` : `
                                                <span class="text-zinc-500">Reviewed</span>
                                            `}
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}
