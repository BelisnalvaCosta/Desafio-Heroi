// Função principal para classificar o herói/vilão
function classificarHeroi() {
    const nome = document.getElementById('hero-name').value;
    const xp = parseInt(document.getElementById('hero-xp').value);

    if (xp < 10 && xp <= 100 ) {
        atualizarInterface(nome, 'Ferro', 1, 'imgSrc/derrota.png', 'https://link-para-heroi-ferro.com');
    } else if (xp >= 151 && xp <= 550) {
        atualizarInterface(nome, 'Ouro', 2, 'imgSrc/Frank.png', 'https://link-para-heroi-ouro.com');
    } else if (xp >= 651 && xp <= 800) {
        atualizarInterface(nome, 'Radiante', 3, 'imgSrc/nalva-hero.png', 'https://link-para-heroi-radiante.com');    
    } else if (xp >= 851 && xp <= 1000) {
        atualizarInterface(nome, 'Imortal', 4, 'imgSrc/nalva-hero.png', 'https://link-para-heroi-imortal.com');
    } else {
        mostrarErro('Nenhum ganhador, fora dos níveis disponíveis', 'imgSrc/derrota.png', 'https://link-para-erro.com');
    }
}

// Função para atualizar a interface gráfica com imagem, mensagem e link
function atualizarInterface(nome, nivel, fase, imgSrc, link) {
    const resultado = `
        <a href="${link}" target="_blank">
            A Heroína ou Vilão ${nome} alcançou o nível ${nivel} e está na fase ${fase}.
        </a>`;
    document.getElementById('resultado').innerHTML = resultado;

    const imagem = document.getElementById('hero-main-image');
    imagem.src = imgSrc;
    imagem.alt = `Imagem de ${nome} no nível ${nivel}`;
}

// Função para exibir uma mensagem e imagem de erro
function mostrarErro(mensagem, imgSrc, link) {
    const resultadoErro = `
        <a href="${link}" target="_blank">
            ${mensagem}
        </a>`;
    document.getElementById('resultado').innerHTML = resultadoErro;

    const imagem = document.getElementById('hero-main-image');
    imagem.src = imgSrc;
    imagem.alt = 'Erro na classificação';
}
