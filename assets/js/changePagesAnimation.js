document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');

    document.querySelectorAll('.lista-navegacao a').forEach(link => {
        link.addEventListener('click', function(e) {
            const url = this.getAttribute('href');
            if (e.ctrlKey || e.metaKey || url === location.pathname.split('/').pop()) return;
            e.preventDefault();
            loader.classList.add('ativo');
            setTimeout(() => { window.location.href = url; }, 300);
        });
    });

    // Ao voltar pelo histórico, a página pode vir do cache com o loader ativo
    window.addEventListener('pageshow', () => loader.classList.remove('ativo'));
});
