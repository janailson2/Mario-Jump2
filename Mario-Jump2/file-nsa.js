document.addEventListener('DOMContentLoaded', () => {
    const mario = document.querySelector('.mario') as HTMLElement;
    const pipe = document.querySelector('.pipe') as HTMLElement;

    const jump = () => {
        mario?.classList.add('jump');

        setTimeout(() => {
            mario?.classList.remove('jump');
        }, 500);
    }

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        console.log(marioPosition);

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            jump();
        }
    }, 10);
});