document.addEventListener("DOMContentLoaded", function() {
    let progress = 0;
    const loadingScreen = document.getElementById('loading-screen');
    const loadingBar = document.getElementById('loading-bar');
    const loadingText = document.getElementById('loading-text');
    
    let interval = setInterval(function() {
        if (progress >= 100) {
            clearInterval(interval);
            loadingScreen.style.opacity = 0;
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 500);
        } else {
            progress++;
            loadingBar.style.width = progress + '%'; // Barra preenche no centro
            loadingText.innerText = progress + '%';
        }
    }, 10);
});