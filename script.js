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

    setRules('Click on textarea and keyboard-icon will open!');
    setRules('Combination "Alt + Shift" changes a language (EN, RU)');
    setRules('Combination "Ctrl + A" - selecting full text');
    setRules('Combination "Ctrl + C" - copying selected text');
    setRules('Combination "Ctrl + V" - pasting selected text');
    // setRules('ATTENTION: If you will switch, the button will stay ACTIVATED (for example - ALT + TAB)');


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
const keyboardContainer = document.querySelectorAll('.keyboard__key-container')

keyboard.addEventListener('click', (e) => {
    document.querySelector('.input-zone__textarea').setAttribute('autofocus', '1')
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

let isCapsLock = false;
let isShift = false;
let isCtrl = false;

let counterLeft = 0;
let counterRight = 0;
let copied = '';

function convert(str){
	str = str.replace('&amp;','&');
	str = str.replace('&gt;','>');
	str = str.replace('&lt;','<');
	str = str.replace('&quot;','"');
	str = str.replace("'","'");
	return str;
}

const keyboardFunc = {
    active: function(e) {
        // console.log(e)
        keyboardKey.forEach(key => {
            let keyAttribute = key.getAttribute('code');
            if (e.code == 'CapsLock' && keyAttribute == 'CapsLock') {
                key.parentElement.classList.toggle('keyboard__key-container_activate');
                key.parentElement.classList.contains('keyboard__key-container_activate') ? isCapsLock = true : isCapsLock = false;
            } else if (keyAttribute == e.code) {
                key.parentElement.classList.add('keyboard__key-container_activate');
            }
        })
    },
    remove: function(e) {
        keyboardKey.forEach(key => {
            let keyAttribute = key.getAttribute('code');
            if (keyAttribute == e.code && keyAttribute != 'CapsLock') {
                key.parentElement.classList.remove('keyboard__key-container_activate');
            }
        })
    },
    activeMouse: function(e) {
        let keyAttribute = this.querySelector('.keyboard__key').getAttribute('code');
        if (keyAttribute == 'CapsLock') {
            this.classList.toggle('keyboard__key-container_activate');
            this.classList.contains('keyboard__key-container_activate') ? isCapsLock = true : isCapsLock = false;
        } else if (keyAttribute) {
            this.classList.add('keyboard__key-container_activate');
        }
    },
    removeMouse: function(e) {
        let keyAttribute = this.querySelector('.keyboard__key').getAttribute('code');
        if (keyAttribute && keyAttribute !== 'CapsLock') {
            this.classList.remove('keyboard__key-container_activate')
        }
    },
    shiftDown: function(e) {
        if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
            isShift = true;
        }
    },
    shiftUp: function(e) {
        if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
            isShift = false;
        }
    },
    shiftDownMouse: function() {
        if (this.classList.contains('keyboard__key_shift')) {
            isShift = true;
        }
    },
    shiftUpMouse: function() {
        if (this.classList.contains('keyboard__key_shift')) {
            isShift = false;
        }
    },
    altUp: function(e) {
        if (e.code == 'ControlLeft' || e.code == 'ControlRight') {
            isCtrl = true;
        }
    },
    altDown: function(e) {
        if (e.code == 'ControlLeft' || e.code == 'ControlRight') {
            isCtrl = false;
        }
    },
    keyboardWriting: function(e) {
        keyboardKey.forEach(key => {
            let keyAttribute = key.getAttribute('code');
            if (e.code === keyAttribute) {
                console.log(textarea.selectionStart, textarea.selectionEnd)
                let start = textarea.selectionStart;
                let end = textarea.selectionEnd;

                let textareaWidth = textarea.clientWidth;
                console.log(textareaWidth)
                let symbolWidth = 11.5;
                let avgWidth = Math.ceil(textareaWidth / symbolWidth);
                console.log(symbolWidth)

                switch (e.code) {
                    case 'Space':
                        textarea.value = textarea.value.slice(0, start) + " " + textarea.value.slice(end, textarea.value.length * 3);
                        start += 1;
                        end += 1;
                                            // done
                    break;
                    case 'ShiftLeft': false;
                    break;
                    case 'ShiftRight': false;
                    break;
                    case 'AltLeft': false;
                    break;
                    case 'AltRight': false;
                    break;
                    case 'MetaLeft': false;
                    break;
                    case 'Tab': textarea.value = textarea.value.slice(0, start) + "    " + textarea.value.slice(end, textarea.value.length * 3);
                    start += 4;
                    end += 4; // done;
                    break;
                    case 'ArrowUp':
                        if (isShift) {
                            end = end;
                            start -= avgWidth;
                            counterLeft += end - start;
                        } else {
                            start -= avgWidth;
                            start < 0 ? start = 0 : start = start;
                            end = start ;
                        }
                    break;
                    case 'ArrowLeft':
                        if (isShift) {
                            if (counterRight) {
                                end -= 1;
                                start = start;
                                counterRight -= 1;
                                console.log(counterRight)
                            } else {
                                if (start) {
                                    start -= 1;
                                    end = end;
                                    counterLeft -= 1;
                                } else {
                                    start = 0;
                                    end = end;
                                }

                            }
                        } else if (start) {
                            start -= 1;
                            end = start;
                            counterRight = 0;
                            counterLeft = 0;
                        } else {
                            start = 0;
                            end = start;
                            counterRight = 0;
                            counterLeft = 0;
                        }
                    break;
                    case 'ArrowDown':
                        if (isShift) {
                            start = start;
                            end += avgWidth;
                            counterRight += end - start;
                        } else {
                            start += avgWidth;
                            start < 0 ? start = 0 : start = start;
                            end = start ;
                            console.log(start)
                        }
                    break;
                    case 'ArrowRight':
                        if (isShift) {
                            if (counterLeft) {
                                start += 1;
                                end = end;
                                counterLeft += 1;
                            } else {
                                start = start;
                                end += 1;
                                counterRight += 1;
                            }
                        } else {
                            end += 1;
                            start = end;
                            counterRight = 0;
                            counterLeft = 0;
                        } 
                    break;
                    case 'Enter': textarea.value = textarea.value.slice(0, start) + '\n' + textarea.value.slice(end, textarea.value.length * 3);
                    start += 1;
                    end = start;
                    // start +=
                    break;
                    case 'ControlLeft': false;
                    break;
                    case 'ControlRight': false;
                    break;
                    case 'CapsLock': false;
                    break;
                    case 'Delete': 
                        if (start == end) {
                            textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end + 1, textarea.value.length * 3)
                        } else {
                            textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end, textarea.value.length * 3)
                        }
                        start = start;
                        end = start;;
                    break;
                    case 'Backspace':
                        if (start == end) {
                            textarea.value = textarea.value.slice(0, start - 1) + textarea.value.slice(end, textarea.value.length * 3)
                        } else {
                            textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end, textarea.value.length * 3)
                        }
                        start -= 1;
                        end = start;
                    break;
                    default:
                        if (isCapsLock) {
                            if (isCtrl) {
                                if (keyAttribute == 'KeyA') {
                                    false
                                } else if (keyAttribute == 'KeyC') {
                                    document.execCommand("copy")
                                    copied = textarea.value.slice(start, end);
                                    
                                } else if (keyAttribute == 'KeyV') {
                                    textarea.value =  textarea.value.slice(0, start) + copied + textarea.value.slice(end, textarea.value.length * 3)
                                }
                            } else {
                                if (!isShift) {
                                    textarea.value = textarea.value.slice(0, start) + key.innerHTML.toUpperCase() + textarea.value.slice(end, textarea.value.length * 3);
                                } else if (isShift) {
                                    key.parentElement.querySelector('.keyboard__shift-key') ? textarea.value = textarea.value.slice(0, start) + convert(key.parentElement.querySelector('.keyboard__shift-key').innerHTML) + textarea.value.slice(end, textarea.value.length * 3) : textarea.value = textarea.value.slice(0, start) + key.innerHTML.toLowerCase() + textarea.value.slice(end, textarea.value.length * 3);
                                }
                            }
                        } else if (isShift) {
                            if (isCtrl) {
                                false
                            } else key.parentElement.querySelector('.keyboard__shift-key') ? textarea.value = textarea.value.slice(0, start) + convert(key.parentElement.querySelector('.keyboard__shift-key').innerHTML) + textarea.value.slice(end, textarea.value.length * 3) : textarea.value = textarea.value.slice(0, start) + key.innerHTML.toUpperCase() + textarea.value.slice(end, textarea.value.length * 3);
                            
                        } else if (isCtrl) {
                            if (keyAttribute == 'KeyA') {
                                false
                            } else if (keyAttribute == 'KeyC') {
                                document.execCommand("copy")
                                copied = textarea.value.slice(start, end);
                                
                            } else if (keyAttribute == 'KeyV') {
                                textarea.value =  textarea.value.slice(0, start) + copied + textarea.value.slice(end, textarea.value.length * 3)
                            }
                        } else {
                            textarea.value = textarea.value.slice(0, start) + key.innerHTML.toLowerCase() + textarea.value.slice(end, textarea.value.length * 3);
                        }

                        if (isCtrl) {
                            if (keyAttribute == 'KeyA') {
                                start = 0;
                                end = textarea.value.length;
                            } else if (keyAttribute == 'KeyV') {
                                start += copied.length;
                                end = start;
                            }
                        } else {
                            start += 1;
                            end = start;
                        }
                }
                textarea.focus();
                textarea.selectionStart = start;
                textarea.selectionEnd = end;
            }
        })
    },
    handleWriting: function(e) {

        console.log(textarea.selectionStart, textarea.selectionEnd)
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;

        let textareaWidth = textarea.clientWidth;
        console.log(textareaWidth)
        let symbolWidth = 11.5;
        let avgWidth = Math.ceil(textareaWidth / symbolWidth);
        console.log(symbolWidth)

        let keyAttribute = this.querySelector('.keyboard__key').getAttribute('code');
        let key = this.querySelector('.keyboard__key');
        let shiftKey = this.querySelector('.keyboard__shift-key');

        switch (keyAttribute || e.code) {
            case 'Space':
                        textarea.value = textarea.value.slice(0, start) + " " + textarea.value.slice(end, textarea.value.length * 3);
                        start += 1;
                        end += 1;
                                            // done
                    break;
                    case 'ShiftLeft': false;
                    break;
                    case 'ShiftRight': false;
                    break;
                    case 'AltLeft': false;
                    break;
                    case 'AltRight': false;
                    break;
                    case 'MetaLeft': false;
                    break;
                    case 'Tab': textarea.value = textarea.value.slice(0, start) + "    " + textarea.value.slice(end, textarea.value.length * 3);
                    start += 4;
                    end += 4; // done;
                    break;
                    case 'ArrowUp':
                        if (isShift) {
                            end = end;
                            start -= avgWidth;
                            counterLeft += end - start;
                        } else {
                            start -= avgWidth;
                            start < 0 ? start = 0 : start = start;
                            end = start ;
                        }
                    break;
                    case 'ArrowLeft':
                        if (isShift) {
                            if (counterRight) {
                                end -= 1;
                                start = start;
                                counterRight -= 1;
                                console.log(counterRight)
                            } else {
                                if (start) {
                                    start -= 1;
                                    end = end;
                                    counterLeft -= 1;
                                } else {
                                    start = 0;
                                    end = end;
                                }

                            }
                        } else if (start) {
                            start -= 1;
                            end = start;
                            counterRight = 0;
                            counterLeft = 0;
                        } else {
                            start = 0;
                            end = start;
                            counterRight = 0;
                            counterLeft = 0;
                        }
                    break;
                    case 'ArrowDown':
                        if (isShift) {
                            start = start;
                            end += avgWidth;
                            counterRight += end - start;
                        } else {
                            start += avgWidth;
                            start < 0 ? start = 0 : start = start;
                            end = start ;
                            console.log(start)
                        }
                    break;
                    case 'ArrowRight':
                        if (isShift) {
                            if (counterLeft) {
                                start += 1;
                                end = end;
                                counterLeft += 1;
                            } else {
                                start = start;
                                end += 1;
                                counterRight += 1;
                            }
                        } else {
                            end += 1;
                            start = end;
                            counterRight = 0;
                            counterLeft = 0;
                        } 
                    break;
                    case 'Enter': textarea.value = textarea.value.slice(0, start) + '\n' + textarea.value.slice(end, textarea.value.length * 3);
                    start += 1;
                    end = start;
                    // start +=
                    break;
                    case 'ControlLeft': false;
                    break;
                    case 'ControlRight': false;
                    break;
                    case 'CapsLock': false;
                    break;
                    case 'Delete': 
                        if (start == end) {
                            textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end + 1, textarea.value.length * 3)
                        } else {
                            textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end, textarea.value.length * 3)
                        }
                        start = start;
                        end = start;;
                    break;
                    case 'Backspace':
                        if (start == end) {
                            textarea.value = textarea.value.slice(0, start - 1) + textarea.value.slice(end, textarea.value.length * 3)
                        } else {
                            textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end, textarea.value.length * 3)
                        }
                        start -= 1;
                        end = start;
                    break;
                    default:
                        if (isCapsLock) {
                            if (isCtrl) {
                                if (keyAttribute == 'KeyA') {
                                    false
                                } else if (keyAttribute == 'KeyC') {
                                    document.execCommand("copy")
                                    copied = textarea.value.slice(start, end);
                                    
                                } else if (keyAttribute == 'KeyV') {
                                    textarea.value =  textarea.value.slice(0, start) + copied + textarea.value.slice(end, textarea.value.length * 3)
                                }
                            } else {
                                if (!isShift) {
                                    textarea.value = textarea.value.slice(0, start) + key.innerHTML.toUpperCase() + textarea.value.slice(end, textarea.value.length * 3);
                                } else if (isShift) {
                                    key.parentElement.querySelector('.keyboard__shift-key') ? textarea.value = textarea.value.slice(0, start) + convert(key.parentElement.querySelector('.keyboard__shift-key').innerHTML) + textarea.value.slice(end, textarea.value.length * 3) : textarea.value = textarea.value.slice(0, start) + key.innerHTML.toLowerCase() + textarea.value.slice(end, textarea.value.length * 3);
                                }
                            }
                        } else if (isShift) {
                            if (isCtrl) {
                                false
                            } else key.parentElement.querySelector('.keyboard__shift-key') ? textarea.value = textarea.value.slice(0, start) + convert(key.parentElement.querySelector('.keyboard__shift-key').innerHTML) + textarea.value.slice(end, textarea.value.length * 3) : textarea.value = textarea.value.slice(0, start) + key.innerHTML.toUpperCase() + textarea.value.slice(end, textarea.value.length * 3);
                            
                        } else if (isCtrl) {
                            if (keyAttribute == 'KeyA') {
                                false
                            } else if (keyAttribute == 'KeyC') {
                                document.execCommand("copy")
                                copied = textarea.value.slice(start, end);
                                
                            } else if (keyAttribute == 'KeyV') {
                                textarea.value =  textarea.value.slice(0, start) + copied + textarea.value.slice(end, textarea.value.length * 3)
                            }
                        } else {
                            textarea.value = textarea.value.slice(0, start) + key.innerHTML.toLowerCase() + textarea.value.slice(end, textarea.value.length * 3);
                        }

                        if (isCtrl) {
                            if (keyAttribute == 'KeyA') {
                                start = 0;
                                end = textarea.value.length;
                            } else if (keyAttribute == 'KeyV') {
                                start += copied.length;
                                end = start;
                            }
                        } else {
                            start += 1;
                            end = start;
                        }
                }
                textarea.focus();
                textarea.selectionStart = start;
                textarea.selectionEnd = end;
    },
}

document.addEventListener('keydown', keyboardFunc.active)
document.addEventListener('keyup', keyboardFunc.remove)
document.addEventListener('keydown', keyboardFunc.shiftDown);
document.addEventListener('keyup', keyboardFunc.shiftUp);
document.addEventListener('keydown', keyboardFunc.altUp)
document.addEventListener('keyup', keyboardFunc.altDown)

keyboardContainer.forEach(key => {
    key.addEventListener('mousedown', keyboardFunc.activeMouse);
    key.addEventListener('mouseup', keyboardFunc.removeMouse);
    key.addEventListener('mouseleave', keyboardFunc.removeMouse);
    key.addEventListener('click', keyboardFunc.handleWriting);
    key.addEventListener('mousedown', keyboardFunc.shiftDownMouse);
    key.addEventListener('mouseup', keyboardFunc.shiftUpMouse);
})
document.addEventListener('keydown', keyboardFunc.keyboardWriting);


//Unbind current keys
let codes = []

for (let i = 0; i < 500; i++) { // create 500 indexes 
    codes.push(i)
}
console.log(codes)

document.addEventListener('keydown', (event) => { //unbinding keys with code from 0 to 500
    if (event.keyCode in codes) {
        event.preventDefault()
    }
})

// let keyboardFunctions = {
//     handleWriting: function(e) {

//         console.log(textarea.selectionStart, textarea.selectionEnd)
//         let start = textarea.selectionStart;
//         let end = textarea.selectionEnd;

//         let textareaWidth = textarea.clientWidth;
//         console.log(textareaWidth)
//         let symbolWidth = 11.5;
//         let avgWidth = Math.ceil(textareaWidth / symbolWidth);
//         console.log(symbolWidth)

//         let keyAttribute = this.querySelector('.keyboard__key').getAttribute('code');
//         let key = this.querySelector('.keyboard__key');
//         let shiftKey = this.querySelector('.keyboard__shift-key');

//         switch (keyAttribute || e.code) {
//             case 'Space':
//                         textarea.value = textarea.value.slice(0, start) + " " + textarea.value.slice(end, textarea.value.length * 3);
//                         start += 1;
//                         end += 1;
//                                             // done
//                     break;
//                     case 'ShiftLeft': false;
//                     break;
//                     case 'ShiftRight': false;
//                     break;
//                     case 'AltLeft': false;
//                     break;
//                     case 'AltRight': false;
//                     break;
//                     case 'MetaLeft': false;
//                     break;
//                     case 'Tab': textarea.value = textarea.value.slice(0, start) + "    " + textarea.value.slice(end, textarea.value.length * 3);
//                     start += 4;
//                     end += 4; // done;
//                     break;
//                     case 'ArrowUp':
//                         if (isShift) {
//                             end = end;
//                             start -= avgWidth;
//                             counterLeft += end - start;
//                         } else {
//                             start -= avgWidth;
//                             start < 0 ? start = 0 : start = start;
//                             end = start ;
//                         }
//                     break;
//                     case 'ArrowLeft':
//                         if (isShift) {
//                             if (counterRight) {
//                                 end -= 1;
//                                 start = start;
//                                 counterRight -= 1;
//                                 console.log(counterRight)
//                             } else {
//                                 if (start) {
//                                     start -= 1;
//                                     end = end;
//                                     counterLeft -= 1;
//                                 } else {
//                                     start = 0;
//                                     end = end;
//                                 }

//                             }
//                         } else if (start) {
//                             start -= 1;
//                             end = start;
//                             counterRight = 0;
//                             counterLeft = 0;
//                         } else {
//                             start = 0;
//                             end = start;
//                             counterRight = 0;
//                             counterLeft = 0;
//                         }
//                     break;
//                     case 'ArrowDown':
//                         if (isShift) {
//                             start = start;
//                             end += avgWidth;
//                             counterRight += end - start;
//                         } else {
//                             start += avgWidth;
//                             start < 0 ? start = 0 : start = start;
//                             end = start ;
//                             console.log(start)
//                         }
//                     break;
//                     case 'ArrowRight':
//                         if (isShift) {
//                             if (counterLeft) {
//                                 start += 1;
//                                 end = end;
//                                 counterLeft += 1;
//                             } else {
//                                 start = start;
//                                 end += 1;
//                                 counterRight += 1;
//                             }
//                         } else {
//                             end += 1;
//                             start = end;
//                             counterRight = 0;
//                             counterLeft = 0;
//                         } 
//                     break;
//                     case 'Enter': textarea.value = textarea.value.slice(0, start) + '\n' + textarea.value.slice(end, textarea.value.length * 3);
//                     start += 1;
//                     end = start;
//                     // start +=
//                     break;
//                     case 'ControlLeft': false;
//                     break;
//                     case 'ControlRight': false;
//                     break;
//                     case 'CapsLock': false;
//                     break;
//                     case 'Delete': 
//                         if (start == end) {
//                             textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end + 1, textarea.value.length * 3)
//                         } else {
//                             textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end, textarea.value.length * 3)
//                         }
//                         start = start;
//                         end = start;;
//                     break;
//                     case 'Backspace':
//                         if (start == end) {
//                             textarea.value = textarea.value.slice(0, start - 1) + textarea.value.slice(end, textarea.value.length * 3)
//                         } else {
//                             textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end, textarea.value.length * 3)
//                         }
//                         start -= 1;
//                         end = start;
//                     break;
//                     default:
//                         if (isCapsLock) {
//                             if (isCtrl) {
//                                 if (keyAttribute == 'KeyA') {
//                                     false
//                                 } else if (keyAttribute == 'KeyC') {
//                                     document.execCommand("copy")
//                                     copied = textarea.value.slice(start, end);
                                    
//                                 } else if (keyAttribute == 'KeyV') {
//                                     textarea.value =  textarea.value.slice(0, start) + copied + textarea.value.slice(end, textarea.value.length * 3)
//                                 }
//                             } else {
//                                 if (!isShift) {
//                                     textarea.value = textarea.value.slice(0, start) + key.innerHTML.toUpperCase() + textarea.value.slice(end, textarea.value.length * 3);
//                                 } else if (isShift) {
//                                     key.parentElement.querySelector('.keyboard__shift-key') ? textarea.value = textarea.value.slice(0, start) + convert(key.parentElement.querySelector('.keyboard__shift-key').innerHTML) + textarea.value.slice(end, textarea.value.length * 3) : textarea.value = textarea.value.slice(0, start) + key.innerHTML.toLowerCase() + textarea.value.slice(end, textarea.value.length * 3);
//                                 }
//                             }
//                         } else if (isShift) {
//                             if (isCtrl) {
//                                 false
//                             } else key.parentElement.querySelector('.keyboard__shift-key') ? textarea.value = textarea.value.slice(0, start) + convert(key.parentElement.querySelector('.keyboard__shift-key').innerHTML) + textarea.value.slice(end, textarea.value.length * 3) : textarea.value = textarea.value.slice(0, start) + key.innerHTML.toUpperCase() + textarea.value.slice(end, textarea.value.length * 3);
                            
//                         } else if (isCtrl) {
//                             if (keyAttribute == 'KeyA') {
//                                 false
//                             } else if (keyAttribute == 'KeyC') {
//                                 document.execCommand("copy")
//                                 copied = textarea.value.slice(start, end);
                                
//                             } else if (keyAttribute == 'KeyV') {
//                                 textarea.value =  textarea.value.slice(0, start) + copied + textarea.value.slice(end, textarea.value.length * 3)
//                             }
//                         } else {
//                             textarea.value = textarea.value.slice(0, start) + key.innerHTML.toLowerCase() + textarea.value.slice(end, textarea.value.length * 3);
//                         }

//                         if (isCtrl) {
//                             if (keyAttribute == 'KeyA') {
//                                 start = 0;
//                                 end = textarea.value.length;
//                             } else if (keyAttribute == 'KeyV') {
//                                 start += copied.length;
//                                 end = start;
//                             }
//                         } else {
//                             start += 1;
//                             end = start;
//                         }
//                 }
//                 textarea.focus();
//                 textarea.selectionStart = start;
//                 textarea.selectionEnd = end;
//     },

//     keyboardWriting: function(e) {
//         keyboardKey.forEach(key => {
//             let keyAttribute = key.getAttribute('code');
//             if (e.code === keyAttribute) {
//                 console.log(textarea.selectionStart, textarea.selectionEnd)
//                 let start = textarea.selectionStart;
//                 let end = textarea.selectionEnd;

//                 let textareaWidth = textarea.clientWidth;
//                 console.log(textareaWidth)
//                 let symbolWidth = 11.5;
//                 let avgWidth = Math.ceil(textareaWidth / symbolWidth);
//                 console.log(symbolWidth)

//                 switch (e.code) {
//                     case 'Space':
//                         textarea.value = textarea.value.slice(0, start) + " " + textarea.value.slice(end, textarea.value.length * 3);
//                         start += 1;
//                         end += 1;
//                                             // done
//                     break;
//                     case 'ShiftLeft': false;
//                     break;
//                     case 'ShiftRight': false;
//                     break;
//                     case 'AltLeft': false;
//                     break;
//                     case 'AltRight': false;
//                     break;
//                     case 'MetaLeft': false;
//                     break;
//                     case 'Tab': textarea.value = textarea.value.slice(0, start) + "    " + textarea.value.slice(end, textarea.value.length * 3);
//                     start += 4;
//                     end += 4; // done;
//                     break;
//                     case 'ArrowUp':
//                         if (isShift) {
//                             end = end;
//                             start -= avgWidth;
//                             counterLeft += end - start;
//                         } else {
//                             start -= avgWidth;
//                             start < 0 ? start = 0 : start = start;
//                             end = start ;
//                         }
//                     break;
//                     case 'ArrowLeft':
//                         if (isShift) {
//                             if (counterRight) {
//                                 end -= 1;
//                                 start = start;
//                                 counterRight -= 1;
//                                 console.log(counterRight)
//                             } else {
//                                 if (start) {
//                                     start -= 1;
//                                     end = end;
//                                     counterLeft -= 1;
//                                 } else {
//                                     start = 0;
//                                     end = end;
//                                 }

//                             }
//                         } else if (start) {
//                             start -= 1;
//                             end = start;
//                             counterRight = 0;
//                             counterLeft = 0;
//                         } else {
//                             start = 0;
//                             end = start;
//                             counterRight = 0;
//                             counterLeft = 0;
//                         }
//                     break;
//                     case 'ArrowDown':
//                         if (isShift) {
//                             start = start;
//                             end += avgWidth;
//                             counterRight += end - start;
//                         } else {
//                             start += avgWidth;
//                             start < 0 ? start = 0 : start = start;
//                             end = start ;
//                             console.log(start)
//                         }
//                     break;
//                     case 'ArrowRight':
//                         if (isShift) {
//                             if (counterLeft) {
//                                 start += 1;
//                                 end = end;
//                                 counterLeft += 1;
//                             } else {
//                                 start = start;
//                                 end += 1;
//                                 counterRight += 1;
//                             }
//                         } else {
//                             end += 1;
//                             start = end;
//                             counterRight = 0;
//                             counterLeft = 0;
//                         } 
//                     break;
//                     case 'Enter': textarea.value = textarea.value.slice(0, start) + '\n' + textarea.value.slice(end, textarea.value.length * 3);
//                     start += 1;
//                     end = start;
//                     // start +=
//                     break;
//                     case 'ControlLeft': false;
//                     break;
//                     case 'ControlRight': false;
//                     break;
//                     case 'CapsLock': false;
//                     break;
//                     case 'Delete': 
//                         if (start == end) {
//                             textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end + 1, textarea.value.length * 3)
//                         } else {
//                             textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end, textarea.value.length * 3)
//                         }
//                         start = start;
//                         end = start;;
//                     break;
//                     case 'Backspace':
//                         if (start == end) {
//                             textarea.value = textarea.value.slice(0, start - 1) + textarea.value.slice(end, textarea.value.length * 3)
//                         } else {
//                             textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end, textarea.value.length * 3)
//                         }
//                         start -= 1;
//                         end = start;
//                     break;
//                     default:
//                         if (isCapsLock) {
//                             if (isCtrl) {
//                                 if (keyAttribute == 'KeyA') {
//                                     false
//                                 } else if (keyAttribute == 'KeyC') {
//                                     document.execCommand("copy")
//                                     copied = textarea.value.slice(start, end);
                                    
//                                 } else if (keyAttribute == 'KeyV') {
//                                     textarea.value =  textarea.value.slice(0, start) + copied + textarea.value.slice(end, textarea.value.length * 3)
//                                 }
//                             } else {
//                                 if (!isShift) {
//                                     textarea.value = textarea.value.slice(0, start) + key.innerHTML.toUpperCase() + textarea.value.slice(end, textarea.value.length * 3);
//                                 } else if (isShift) {
//                                     key.parentElement.querySelector('.keyboard__shift-key') ? textarea.value = textarea.value.slice(0, start) + convert(key.parentElement.querySelector('.keyboard__shift-key').innerHTML) + textarea.value.slice(end, textarea.value.length * 3) : textarea.value = textarea.value.slice(0, start) + key.innerHTML.toLowerCase() + textarea.value.slice(end, textarea.value.length * 3);
//                                 }
//                             }
//                         } else if (isShift) {
//                             if (isCtrl) {
//                                 false
//                             } else key.parentElement.querySelector('.keyboard__shift-key') ? textarea.value = textarea.value.slice(0, start) + convert(key.parentElement.querySelector('.keyboard__shift-key').innerHTML) + textarea.value.slice(end, textarea.value.length * 3) : textarea.value = textarea.value.slice(0, start) + key.innerHTML.toUpperCase() + textarea.value.slice(end, textarea.value.length * 3);
                            
//                         } else if (isCtrl) {
//                             if (keyAttribute == 'KeyA') {
//                                 false
//                             } else if (keyAttribute == 'KeyC') {
//                                 document.execCommand("copy")
//                                 copied = textarea.value.slice(start, end);
                                
//                             } else if (keyAttribute == 'KeyV') {
//                                 textarea.value =  textarea.value.slice(0, start) + copied + textarea.value.slice(end, textarea.value.length * 3)
//                             }
//                         } else {
//                             textarea.value = textarea.value.slice(0, start) + key.innerHTML.toLowerCase() + textarea.value.slice(end, textarea.value.length * 3);
//                         }

//                         if (isCtrl) {
//                             if (keyAttribute == 'KeyA') {
//                                 start = 0;
//                                 end = textarea.value.length;
//                             } else if (keyAttribute == 'KeyV') {
//                                 start += copied.length;
//                                 end = start;
//                             }
//                         } else {
//                             start += 1;
//                             end = start;
//                         }
//                 }
//                 textarea.focus();
//                 textarea.selectionStart = start;
//                 textarea.selectionEnd = end;
//             }
//         })
//     }
// }







