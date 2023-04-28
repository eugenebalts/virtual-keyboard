const body = document.querySelector("body");

let keys = { //Rows of a symbols
    firstRow: ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
    secondRow: ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del'],
    thirdRow: ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\x2F', 'Enter'],
    foursRow: ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'RShift'],
    fivesRow: ['Ctrl', 'Win', 'Alt', 'Space', 'RAlt', 'RCtrl'],
    arrows: ['↑', '←', '↓', '→']
    }

// Create keyboard
function fillKeyboard() {
    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    let keyboardKeys = document.createElement('div');
    keyboardKeys.classList.add('keyboard__keys');

    keyboard.append(keyboardKeys)
    body.append(keyboard);

    let arrowsWrapper = document.createElement('div');
    arrowsWrapper.classList.add('keyboard__arrows')
    for (let keyRow in keys) {
        let row = document.createElement('div');
        row.classList.add('keyboard__row');

        if (keyRow !== 'arrows') { // Create container with all keys without arrows
            for (let i = 0; i < keys[keyRow].length; i++) {
                let key = keys[keyRow][i];
                console.log(typeof key === 'String' ? key.toUpperCase() : false);
                let button = document.createElement('button');
                button.classList.add('keyboard__key');
                switch (key) {
                    case 'Space' : button.classList.add('keyboard__key_space');
                    break;
                }
                button.innerHTML = key;
                row.append(button);
            }
        } else { // Create container with arrows
            for (let i = 0; i < keys[keyRow].length; i++) {
                let key = keys[keyRow][i];
                console.log(typeof key === 'String' ? key.toUpperCase() : false);
                let button = document.createElement('button');
                button.classList.add('keyboard__key');
                button.innerHTML = key;
                arrowsWrapper.append(button);
            }
        }
        keyboardKeys.append(row)
        keyboard.append(arrowsWrapper)
    }
}
fillKeyboard()