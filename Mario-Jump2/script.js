const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOverBtn = document.getElementById("gameOverBtn");
const musicaFundo = document.getElementById('musicaFundo');

// Adiciona uma animação de salto ao Mario quando uma tecla é pressionada
const jump = () =>{
  mario.classList.add('jump');
  setTimeout(() => {
      mario.classList.remove('jump');
  }, 500);
}

// Inicializa a pontuação em 0
let score = 0;

// Atualiza a pontuação quando o Mario passar pelo tubo
const updateScore = () => {
    score++;
    document.querySelector('.pontuacao').textContent = score;
}

// Verifica a posição do Mario e do tubo a cada 10 milisegundos
const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if(pipePosition <= 125 && pipePosition > 0 && marioPosition < 110){
        // Quando o Mario colidir com o tubo, o jogo é encerrado
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // Exibe o botão Game Over 
        gameOverBtn.style.display = 'block';

        // Para o loop quando o jogo é encerrado
        clearInterval(loop);
    } else if (pipePosition < 0) {
        // Atualiza a pontuação quando o mario passar pelo tubo
        updateScore();
      }
}, 10);

document.addEventListener('keydown', jump);

// Reinicia o jogo 
gameOverBtn.addEventListener("click" ,function(){
    location.reload(); 
});