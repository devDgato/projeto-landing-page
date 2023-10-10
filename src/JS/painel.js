/* 
    1 - quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar as próximas imagens.

        1 - a imagem atual começa no 0 pq é a primeira imagem, assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem
        
        2 - esconder as imagens
            . pegar todas as imagens usando o DOM e remover a classe mostrar 

        3 - mostrar a próxima imagem
            . pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela
*/

const imagens = document.querySelectorAll('.imagem-painel')
const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')
let imagemAtual = 0

function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem(){    
    imagens[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click', function () {
    if(imagemAtual !== imagens.length - 1) {
        imagemAtual++       
    }

    esconderImagens()
    mostrarImagem()
})

setaVoltar.addEventListener('click', function () {
    if (imagemAtual !== 0) {
        imagemAtual--
    }

    esconderImagens()
    mostrarImagem()
})