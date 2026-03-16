document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    if (menuIcon && navLinks) {
        const nav = menuIcon.closest('nav');

        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        if (nav) {
            document.addEventListener('click', (event) => {
                if (!nav.contains(event.target)) {
                    navLinks.classList.remove('active');
                }
            });
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                navLinks.classList.remove('active');
            }
        });
    }

    if (darkModeToggle) {
        const storedPreference = localStorage.getItem('dark-mode');
        const darkModeEnabled = storedPreference === null ? true : storedPreference === 'true';
        body.classList.toggle('dark-mode', darkModeEnabled);
        darkModeToggle.checked = darkModeEnabled;

        if (storedPreference === null) {
            localStorage.setItem('dark-mode', 'true');
        }

        darkModeToggle.addEventListener('change', () => {
            body.classList.toggle('dark-mode', darkModeToggle.checked);
            localStorage.setItem('dark-mode', darkModeToggle.checked ? 'true' : 'false');
        });
    }
});
