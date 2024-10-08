document.querySelectorAll('.drum').forEach(drum => {
    drum.addEventListener('click', () => {
        playSound(drum.dataset.sound);
    });
});

document.addEventListener('keydown', (event) => {
    const keyMap = {
        'a': 'boom',
        's': 'clap',
        'd': 'hihat',
        'f': 'kick',
        'g': 'openhat',
        'h': 'ride',
        'j': 'snare',
        'k': 'tink',
        'l': 'tom'
    };

    const sound = keyMap[event.key.toLowerCase()];
    if (sound) {
        playSound(sound);
    }
});

function playSound(sound) {
    const audio = new Audio(`sounds/${sound}.wav`);
    audio.play();
}
