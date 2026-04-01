// Detecta qual vídeo está na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target.querySelector('video');
        if (entry.isIntersecting) {
            video.play(); // Toca o vídeo atual
        } else {
            video.pause(); // Pausa o anterior
        }
    });
}, { threshold: 0.7 }); // Só ativa quando 70% do vídeo aparece

// Aplica a regra em todos os containers de vídeo
document.querySelectorAll('.video-container').forEach(section => {
    observer.observe(section);
});

// Função para dar play/pause ao clicar na tela
function togglePlay(v) {
    if (v.paused) v.play();
    else v.pause();
}
