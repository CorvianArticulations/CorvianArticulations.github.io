document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    themeSwitcher.addEventListener('click', () => {
        const body = document.body;
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
    });
});
