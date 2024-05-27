document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Load initial mode based on preference
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    } else {
        body.classList.add('light-mode');
    }

    darkModeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'true');
        } else {
            localStorage.setItem('dark-mode', 'false');
        }
    });
});
