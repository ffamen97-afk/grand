import { store } from '../store.js';

export function renderLogin(container) {
    container.innerHTML = `
        <div class="flex-1 flex items-center justify-center px-6 py-20">
            <div class="glass-card w-full max-w-md p-8 rounded-2xl view-enter">
                <div class="text-center mb-8">
                    <h2 class="font-display text-3xl font-bold uppercase tracking-wide">Welcome Back</h2>
                    <p class="text-zinc-400 mt-2">Sign in to your account</p>
                </div>
                <form id="login-form" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                        <input type="email" id="email" class="input-field" required placeholder="player@newliferp.com">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-zinc-400 mb-1">Password</label>
                        <input type="password" id="password" class="input-field" required placeholder="••••••••">
                    </div>
                    <div class="flex items-center justify-between text-sm">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" class="rounded border-zinc-700 bg-zinc-900 text-brand-red focus:ring-brand-red">
                            <span class="text-zinc-400">Remember me</span>
                        </label>
                        <a href="#" class="text-brand-red hover:underline">Forgot Password?</a>
                    </div>
                    <button type="submit" class="w-full py-3 bg-brand-red text-white font-bold rounded neon-shadow hover:bg-red-600 transition-all uppercase tracking-wider mt-4">
                        Login
                    </button>
                </form>
                <p class="text-center text-zinc-400 mt-6 text-sm">
                    Don't have an account? <a href="#" onclick="window.router.navigate('register')" class="text-white hover:text-brand-red transition-colors">Register here</a>
                </p>
            </div>
        </div>
    `;

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        store.login(email, pass);
        window.router.navigate('home');
    });
}

export function renderRegister(container) {
    container.innerHTML = `
        <div class="flex-1 flex items-center justify-center px-6 py-20">
            <div class="glass-card w-full max-w-md p-8 rounded-2xl view-enter">
                <div class="text-center mb-8">
                    <h2 class="font-display text-3xl font-bold uppercase tracking-wide">Create Account</h2>
                    <p class="text-zinc-400 mt-2">Join NewLife RolePlay</p>
                </div>
                <form id="register-form" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-zinc-400 mb-1">Username</label>
                        <input type="text" class="input-field" required placeholder="Player123">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                        <input type="email" class="input-field" required placeholder="player@newliferp.com">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-zinc-400 mb-1">Password</label>
                        <input type="password" class="input-field" required placeholder="••••••••">
                    </div>
                    <label class="flex items-start gap-2 cursor-pointer mt-4">
                        <input type="checkbox" required class="mt-1 rounded border-zinc-700 bg-zinc-900 text-brand-red focus:ring-brand-red">
                        <span class="text-sm text-zinc-400">I agree to the server rules and terms of service.</span>
                    </label>
                    <button type="submit" class="w-full py-3 bg-brand-red text-white font-bold rounded neon-shadow hover:bg-red-600 transition-all uppercase tracking-wider mt-4">
                        Register
                    </button>
                </form>
                <p class="text-center text-zinc-400 mt-6 text-sm">
                    Already have an account? <a href="#" onclick="window.router.navigate('login')" class="text-white hover:text-brand-red transition-colors">Login here</a>
                </p>
            </div>
        </div>
    `;

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();

        window.router.navigate('login');
    });
}
