// 1. Sua lista de vídeos (coloque os links dos seus vídeos aqui)
const meusVideos = [
    { url: 'video1.mp4', user: '@alisson', desc: 'Meu primeiro Reel!' },
    { url: 'video2.mp4', user: '@chatfast', desc: 'Testando o app novo' },
    { url: 'video3.mp4', user: '@dev', desc: 'Programando em Node.js' }
];

const feed = document.querySelector('.feed');

// 2. Função que cria os vídeos automaticamente na tela
function carregarFeed() {
    meusVideos.forEach(videoData => {
        const section = document.createElement('section');
        section.className = 'video-container';
        
        section.innerHTML = `
            <video src="${videoData.url}" loop muted playsinline></video>
            <div class="info">
                <h3>${videoData.user}</h3>
                <p>${videoData.desc}</p>
            </div>
        `;
        
        feed.appendChild(section);
    });
}

// Executa assim que o site abrir
carregarFeed();
