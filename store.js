
export const store = {
    user: null, // { username, role }
    applications: [
        { id: 1, name: 'John Doe', ign: 'Johnny_B', status: 'pending', date: '2026-02-23' },
        { id: 2, name: 'Jane Smith', ign: 'Jane_Doe', status: 'approved', date: '2026-02-22' }
    ],
    serverStatus: {
        online: true,
        players: 142,
        maxPlayers: 250
    },

    login(email, password) {

        if (email === 'admin@newliferp.com') {
            this.user = { username: 'Admin', role: 'admin' };
        } else {
            this.user = { username: email.split('@')[0], role: 'player' };
        }
        this.updateNav();
        return true;
    },

    logout() {
        this.user = null;
        this.updateNav();
    },

    addApplication(data) {
        this.applications.push({
            id: Date.now(),
            name: data.realName,
            ign: data.ign,
            status: 'pending',
            date: new Date().toISOString().split('T')[0]
        });
    },

    updateNav() {
        const adminLink = document.getElementById('nav-admin');
        const loginBtn = document.getElementById('nav-login-btn');
        if (this.user) {
            loginBtn.textContent = 'Logout';
            loginBtn.onclick = () => { this.logout(); window.router.navigate('home'); };
            if (this.user.role === 'admin') adminLink.style.display = 'block';
            else adminLink.style.display = 'none';
        } else {
            loginBtn.textContent = 'Login';
            loginBtn.onclick = () => window.router.navigate('login');
            adminLink.style.display = 'none';
        }
    }
};
