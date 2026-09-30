document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const abrir = document.querySelector('.menu-icon');
    const fechar = document.querySelector('.close-icon');

    function alternar(aberto) {
        menu.classList.toggle('open', aberto);
        abrir.setAttribute('aria-expanded', aberto);
        document.body.style.overflow = aberto ? 'hidden' : '';
    }

    abrir.addEventListener('click', () => alternar(true));
    fechar.addEventListener('click', () => alternar(false));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') alternar(false); });
});
