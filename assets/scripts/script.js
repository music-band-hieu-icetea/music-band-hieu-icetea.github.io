window.addEventListener('load', addEventListener)
syncAudioControlButton()

function addEventListener() {
    const elements = document.getElementsByClassName('clickPlayAudio')
    for (const element of elements) {
        element.addEventListener('click', playPauseAudioBackground)
        addActiveTouchElement(element)
    }

    const audioBackground = document.getElementById('audioBackground')
    audioBackground.addEventListener('play', showPauseButton)
    audioBackground.addEventListener('pause', showPlayButton)
}

function addActiveTouchElement(element) {
    let timeoutRemoveAttribute;

    element.addEventListener("touchstart", function (event) {
        clearTimeout(timeoutRemoveAttribute);

        if (event.target.setAttribute) {
            event.target.setAttribute("data-touching", "");
        }
    }, true);

    element.addEventListener("touchend", function (event) {
        clearTimeout(timeoutRemoveAttribute);

        if (event.target.removeAttribute) {
            timeoutRemoveAttribute = setTimeout(() => {
                event.target.removeAttribute("data-touching");
            }, 200);
        }
    }, true);

    // TODO
    element.addEventListener("touchcancel", function (event) {
        clearTimeout(timeoutRemoveAttribute);

        if (event.target.removeAttribute) {
            timeoutRemoveAttribute = setTimeout(() => {
                event.target.removeAttribute("data-touching");
            }, 200);
        }
    }, true);
}

function playPauseAudioBackground() {
    const audioBackground = document.getElementById('audioBackground')

    if (audioBackground.paused) {
        audioBackground.play()
    } else {
        audioBackground.pause()
    }
}

function syncAudioControlButton() {
    const audioBackground = document.getElementById('audioBackground')

    if (audioBackground.paused) {
        showPlayButton()
    } else {
        showPauseButton()
    }
}

function showPlayButton() {
    document.querySelectorAll('.control-icon.play')
        .forEach(e => e.classList.add('show'))
    document.querySelectorAll('.control-icon.pause')
        .forEach(e => e.classList.remove('show'))
}

function showPauseButton() {
    document.querySelectorAll('.control-icon.play')
        .forEach(e => e.classList.remove('show'))
    document.querySelectorAll('.control-icon.pause')
        .forEach(e => e.classList.add('show'))
}
