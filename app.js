window.addEventListener('keydown', (e) => {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;
    audio.currentTime = 0; // resetea el tiempo del audio para que se pueda tocar varias veces seguidas.
    audio.play();
    key.classList.add('playing');

    window.addEventListener('keyup', () => {
        key.classList.remove('playing');
    })

})