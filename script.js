const body = document.querySelector("body");

let keys = { //Rows of a symbols
    firstRow: ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
    secondRow: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Del'],
    thirdRow: ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\x2F', 'Enter'],
    foursRow: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'RShift'],
    fivesRow: ['Ctrl', 'Win', 'Alt', 'Space', 'RAlt', 'RCtrl'],
    arrows: ['↑', '←', '↓', '→']
}

let shiftPairs = {
        '`': '~',
        1: '!',
        2: '@',
        3: '#',
        4: '$', 
        5: '%', 
        6: '^',
        7: '&',
        8: '*',
        9: '(',
        0: ')',
        '[': '{',
        ']': '}',
        '-': '_',
        '=': '+',
        ';': ':',
        "'": '"',
        '\x2F': '|',
        ',': '<',
        '.': '>',
        '/': '?'
}


// Create textarea and rules 
function createTextarea() {
    let inputZone = document.createElement('section');
    inputZone.classList.add('input-zone');

    let textInfo = document.createElement('div');
    textInfo.classList.add('input-zone__text-info')

    let title = document.createElement('h1');
    title.classList.add('input-zone__title');
    title.innerHTML = 'Rules for my keyboard';

    let list = document.createElement('ol');
    list.classList.add('input-zone__list');

    function setRules(rule) {
        let li = document.createElement('li');
        li.classList.add('input-zone__list-item');
        li.innerHTML = rule;
        list.append(li);
    }

    setRules('Click on textarea and keyboard will open!');
    setRules('Combination "Alt + Shift" changes a language (EN, RU)');

    let textarea = document.createElement('textarea');
    textarea.classList.add('input-zone__textarea');
    textarea.placeholder = 'Я хочу, чтоб ты написал в меня. Распиши меня полностью!';


    textInfo.append(title);
    textInfo.append(list)
    inputZone.append(textInfo);
    inputZone.append(textarea);
    body.append(inputZone);
}

createTextarea()

// Create keyboard
function fillKeyboard() {
    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    // keyboard.classList.add('keyboard', 'keyboard_hidden');

    let keyboardKeys = document.createElement('div');
    keyboardKeys.classList.add('keyboard__keys');

    keyboard.append(keyboardKeys)
    body.append(keyboard);

    let arrowsWrapper = document.createElement('div');
    arrowsWrapper.classList.add('keyboard__arrows')

    for (let keyRow in keys) {
        if (keyRow !== 'arrows') {  // Create container with all keys without arrows
            let row = document.createElement('div');
            row.classList.add('keyboard__row');
            for (let i = 0; i < keys[keyRow].length; i++) {
                let key = keys[keyRow][i];

                let button = document.createElement('div');
                button.classList.add('keyboard__key-container');

                let mainKey = document.createElement('div');
                mainKey.classList.add('keyboard__key');

                switch (key) {
                    case 'Space' : button.classList.add('keyboard__key_space');
                    break;
                    case 'Tab' : button.classList.add('keyboard__key_tab');
                    break;
                    case 'Del' : button.classList.add('keyboard__key_del');
                    break;
                    case 'Shift' : button.classList.add('keyboard__key_shift');
                    break;
                    case 'RShift' : button.classList.add('keyboard__key_shift');
                    break;
                    case 'Alt' : button.classList.add('keyboard__key_alt');
                    break;
                    case 'RAlt' : button.classList.add('keyboard__key_alt');
                    break;
                    case 'Win' : button.classList.add('keyboard__key_win');
                    break;
                    case 'Ctrl' : button.classList.add('keyboard__key_ctrl');
                    break;
                    case 'RCtrl' : button.classList.add('keyboard__key_ctrl');
                    break;
                    case 'Caps Lock' : button.classList.add('keyboard__key_caps-lock');
                    break;
                }

                mainKey.innerHTML = key;
                button.append(mainKey);

                for (let property in shiftPairs) {
                    // Add additional symbols for shift-combinations (en)
                    if (key == property) {
                        let shiftKey = document.createElement('div');
                        shiftKey.classList.add('keyboard__shift-key')
                        shiftKey.innerHTML = shiftPairs[property];
                        button.append(shiftKey)
                    }
                }
                row.append(button);
                keyboardKeys.append(row)
            }

        } else {
            // Create container with arrows
            for (let i = 0; i < keys[keyRow].length; i++) {
                let key = keys[keyRow][i];
                console.log(typeof key === 'String' ? key.toUpperCase() : false);
                let button = document.createElement('div');
                button.classList.add('keyboard__key-container');
                let mainKey = document.createElement('div');
                mainKey.classList.add('keyboard__key');
                mainKey.innerHTML = key;
                button.append(mainKey);
                arrowsWrapper.append(button);
                keyboard.append(arrowsWrapper);
            }
        }
    }
}

fillKeyboard()

