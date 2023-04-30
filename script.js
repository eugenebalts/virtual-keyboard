const body = document.querySelector("body");

let keys = { //Rows of a symbols
    firstRow: ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
    secondRow: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Delete'],
    thirdRow: ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\', 'Enter'],
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
        '\\': '|',
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

    let textareaContainer = document.createElement('div');
    textareaContainer.classList.add('input-zone__textarea-container')

    let textarea = document.createElement('textarea');
    textarea.classList.add('input-zone__textarea');
    textarea.placeholder = 'Я хочу, чтоб ты написал в меня. Распиши меня полностью!';
    // textarea.setAttribute('autofocus', 1)

    let keyboardIcon = document.createElement('div');
    keyboardIcon.classList.add('input-zone__keyboard-icon');
    keyboardIcon.innerHTML = '<img src="assets/keyboard.png" alt="icon">'

    textInfo.append(title);
    textInfo.append(list)
    inputZone.append(textInfo);
    textareaContainer.append(textarea)
    textareaContainer.append(keyboardIcon)
    inputZone.append(textareaContainer);
    body.append(inputZone);
}

createTextarea()

// Create keyboard
function fillKeyboard() {
    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard', 'keyboard_hidden');
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
                if (typeof key == 'number') {
                    mainKey.setAttribute('code', `Digit${key}`)
                } else if (typeof key == 'string') {
                    mainKey.setAttribute('code', `Key${key}`)
                }

                switch(mainKey.innerHTML) {
                    case '`': mainKey.setAttribute('code', 'Backquote');
                    break;
                    case '-': mainKey.setAttribute('code', 'Minus');
                    break;
                    case '=': mainKey.setAttribute('code', 'Equal');
                    break;
                    case '[': mainKey.setAttribute('code', 'BracketLeft');
                    break;
                    case ']': mainKey.setAttribute('code', 'BracketRight');
                    break;
                    case ';': mainKey.setAttribute('code', 'Semicolon');
                    break;
                    case `'`: mainKey.setAttribute('code', 'Quote');
                    break;
                    case `/`: mainKey.setAttribute('code', 'Slash');
                    break;
                    case '\\': mainKey.setAttribute('code', 'Backslash');
                    break;
                    case ',': mainKey.setAttribute('code', 'Comma');
                    break;
                    case `.`: mainKey.setAttribute('code', 'Period');
                    break;
                    case 'Tab': mainKey.setAttribute('code', 'Tab')
                    break;
                    case 'Caps Lock': mainKey.setAttribute('code', 'CapsLock')
                    break;
                    case 'Shift': mainKey.setAttribute('code', 'ShiftLeft')
                    break;
                    case 'RShift': mainKey.setAttribute('code', 'ShiftRight')
                    break;
                    case 'Ctrl': mainKey.setAttribute('code', 'ControlLeft')
                    break;
                    case 'RCtrl': mainKey.setAttribute('code', 'ControlRight')
                    break;
                    case 'Win': mainKey.setAttribute('code', 'MetaLeft')
                    break;
                    case 'Alt': mainKey.setAttribute('code', 'AltLeft')
                    break;
                    case 'RAlt': mainKey.setAttribute('code', 'AltRight')
                    break;
                    case 'Enter': mainKey.setAttribute('code', 'Enter')
                    break;
                    case 'Backspace': mainKey.setAttribute('code', 'Backspace')
                    break;
                    case 'Delete': mainKey.setAttribute('code', 'Delete')
                    break;
                    case 'Space': mainKey.setAttribute('code', 'Space')
                    break;
                }

                // mainKey.setAttribute('key', key.split(' ')
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
                switch(mainKey.innerHTML) {
                    case '↑': mainKey.setAttribute('code', 'ArrowUp')
                    break;
                    case '←': mainKey.setAttribute('code', 'ArrowLeft')
                    break;
                    case '↓': mainKey.setAttribute('code', 'ArrowDown')
                    break;
                    case '→': mainKey.setAttribute('code', 'ArrowRight')
                    break;
                }
                button.append(mainKey);
                arrowsWrapper.append(button);
                keyboard.append(arrowsWrapper);
            }
        }
    }
}

fillKeyboard()

// Const focus on textarea
const keyboard = document.querySelector('.keyboard');

keyboard.addEventListener('click', (e) => {
    document.querySelector('.input-zone__textarea').focus();
})

// Open-close keyboard

const keyboardIcon = document.querySelector('.input-zone__keyboard-icon');
const textarea = document.querySelector('.input-zone__textarea');

textarea.addEventListener('click', (e) => {
    keyboard.classList.remove('keyboard_hidden')
})

keyboardIcon.addEventListener('click', () => {
    keyboard.classList.toggle('keyboard_hidden')
});

// Synchronize keyboard with virtual
const keyboardKey = document.querySelectorAll('.keyboard__key')

const synchronization = {
    active: function(e) {
        console.log(e)
        keyboardKey.forEach(key => {
            let keyAttribute = key.getAttribute('code');
            if (keyAttribute == e.code) {
                key.parentElement.classList.add('keyboard__key-container_activate');
            }
        })
    },
    remove: function(e) {
        keyboardKey.forEach(key => {
            let keyAttribute = key.getAttribute('code');
            if (keyAttribute == e.code) {
                key.parentElement.classList.remove('keyboard__key-container_activate');
            }
        })
    }
}

document.addEventListener('keydown', synchronization.active)
document.addEventListener('keyup', synchronization.remove)






