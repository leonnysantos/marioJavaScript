const mario = document.getElementById('mario');
const cano = document.getElementById('cano');
const gameover = document.getElementById('gameover');
const mensagem = document.getElementById('mensagem');
const botao = document.getElementById('reset');
const nuvem = document.getElementById('nuvens');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1000);
}

const loop = setInterval(() => {
    console.log(loop);

    gameover.style.display = 'none';
    reset.style.display = 'none';

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const canoPosition = cano.offsetLeft;
    const nuvemposition = nuvem.offsetLeft;

    if (canoPosition <= 120 && canoPosition > 0 && marioPosition < 100) {
        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'src/imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        nuvem.style.animation = 'none';
        nuvem.style.left = `${nuvemposition}px`;
        gameover.style.display = 'block ';
        reset.style.display = 'block';

        clearInterval(loop);
    }
}, 10);

botao.addEventListener('click', () => {
    location.reload();
})

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);