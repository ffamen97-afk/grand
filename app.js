import { renderHome } from './views/home.js';
import { renderLogin, renderRegister } from './views/auth.js';
import { renderApply } from './views/apply.js';
import { renderRules } from './views/rules.js';
import { renderAdmin } from './views/admin.js';
import { store } from './store.js';

class Router {
    constructor() {
        this.routes = {
            'home': renderHome,
            'login': renderLogin,
            'register': renderRegister,
            'apply': renderApply,
            'rules': renderRules,
            'admin': renderAdmin
        };
        this.root = document.getElementById('app-root');
        
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute();
        store.updateNav();
    }

    navigate(path) {
        window.location.hash = path;
    }

    handleRoute() {
        const path = window.location.hash.slice(1) || 'home';
        const renderFunc = this.routes[path] || this.routes['home'];
        

        this.root.innerHTML = '';
        renderFunc(this.root);
        

        lucide.createIcons();
        

        this.animateView();
        

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    animateView() {
        const elements = document.querySelectorAll('.view-enter');
        if (typeof gsap !== 'undefined' && elements.length > 0) {
            gsap.fromTo(elements, 
                { opacity: 0, y: 30 }, 
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
            );
        } else {

            elements.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'all 0.6s ease-out';
            });
        }
    }
}


window.router = new Router();
