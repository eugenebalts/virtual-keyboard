const body = document.querySelector('body')

const keys = { // Rows of a symbols
    firstRow: ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
    secondRow: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Delete'],
    thirdRow: ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\', 'Enter'],
    foursRow: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'RShift'],
    fivesRow: ['Ctrl', 'Win', 'Alt', 'Space', 'RAlt', 'RCtrl'],
    arrows: ['↑', '←', '↓', '→'],
}

const shiftPairs = {
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
    '/': '?',
}

const ruShiftPairs = {
    1: '!',
    2: '"',
    3: '№',
    4: ';',
    5: '%',
    6: ':',
    7: '?',
    8: '*',
    9: '(',
    0: ')',
    '.': ',',
    '\\': '|',
    '-': '_',
    '=': '+',
}

// Create textarea and rules
function createTextarea() {
    const inputZone = document.createElement('section')
    inputZone.classList.add('input-zone')

    const textInfo = document.createElement('div')
    textInfo.classList.add('input-zone__text-info')

    const title = document.createElement('h1')
    title.classList.add('input-zone__title')
    title.innerHTML = 'Rules for my keyboard'

    const list = document.createElement('ol')
    list.classList.add('input-zone__list')

    function setRules(rule) {
        const li = document.createElement('li')
        li.classList.add('input-zone__list-item')
        li.innerHTML = rule
        list.append(li)
    }

    setRules('KEYBOARD FOR WINDOWS!')
    setRules('Click on textarea and keyboard-icon will open!')
    setRules('Combination "Alt + Shift" changes a language (EN, RU) - Alt must be pushed!!!')
    setRules('Combination "Ctrl + A" - selecting full text')
    setRules('Combination "Ctrl + C" - copying selected text')
    setRules('Combination "Ctrl + V" - pasting selected text')

    const textareaContainer = document.createElement('div')
    textareaContainer.classList.add('input-zone__textarea-container')

    const textarea = document.createElement('textarea')
    textarea.classList.add('input-zone__textarea')
    textarea.placeholder = 'Я хочу, чтоб ты написал в меня. Распиши меня полностью!'

    const keyboardIcon = document.createElement('div')
    keyboardIcon.classList.add('input-zone__keyboard-icon')
    keyboardIcon.innerHTML = '<img src="assets/keyboard.png" alt="icon">'

    textInfo.append(title)
    textInfo.append(list)
    inputZone.append(textInfo)
    textareaContainer.append(textarea)
    textareaContainer.append(keyboardIcon)
    inputZone.append(textareaContainer)
    body.append(inputZone)
}

createTextarea()

// Create keyboard

let language = 'En'

if (localStorage.getItem('lang')) {
    language = localStorage.getItem('lang')
}

function fillKeyboard(lang) {
    const keyboardDiv = document.createElement('div')
    keyboardDiv.classList.add('keyboard', 'keyboard_hidden')
    // keyboard.classList.add('keyboard', 'keyboard_hidden');

    const keyboardKeys = document.createElement('div')
    keyboardKeys.classList.add('keyboard__keys')

    keyboardDiv.append(keyboardKeys)
    body.append(keyboardDiv)

    const arrowsWrapper = document.createElement('div')
    arrowsWrapper.classList.add('keyboard__arrows')
    Object.keys(keys).forEach((keyRow) => {
        if (keyRow !== 'arrows') { // Create container with all keys without arrows
            const row = document.createElement('div')
            row.classList.add('keyboard__row')
            for (let i = 0; i < keys[keyRow].length; i++) {
                const key = keys[keyRow][i]

                const button = document.createElement('div')
                button.classList.add('keyboard__key-container')

                const mainKey = document.createElement('div')
                mainKey.classList.add('keyboard__key')

                switch (key) {
                case 'Space': button.classList.add('keyboard__key_space')
                    break
                case 'Tab': button.classList.add('keyboard__key_tab')
                    break
                case 'Del': button.classList.add('keyboard__key_del')
                    break
                case 'Shift': button.classList.add('keyboard__key_shift')
                    break
                case 'RShift': button.classList.add('keyboard__key_shift')
                    break
                case 'Alt': button.classList.add('keyboard__key_alt')
                    break
                case 'RAlt': button.classList.add('keyboard__key_alt')
                    break
                case 'Win': button.classList.add('keyboard__key_win')
                    break
                case 'Ctrl': button.classList.add('keyboard__key_ctrl')
                    break
                case 'RCtrl': button.classList.add('keyboard__key_ctrl')
                    break
                case 'Caps Lock': button.classList.add('keyboard__key_caps-lock')
                    break
                default:
                    // NOTHING
                }

                mainKey.innerHTML = key
                if (typeof key === 'number') {
                    mainKey.setAttribute('code', `Digit${key}`)
                } else if (typeof key === 'string') {
                    mainKey.setAttribute('code', `Key${key}`)
                }

                switch (mainKey.innerHTML) {
                case '`': mainKey.setAttribute('code', 'Backquote')
                    break
                case '-': mainKey.setAttribute('code', 'Minus')
                    break
                case '=': mainKey.setAttribute('code', 'Equal')
                    break
                case '[': mainKey.setAttribute('code', 'BracketLeft')
                    break
                case ']': mainKey.setAttribute('code', 'BracketRight')
                    break
                case ';': mainKey.setAttribute('code', 'Semicolon')
                    break
                case '\'': mainKey.setAttribute('code', 'Quote')
                    break
                case '/': mainKey.setAttribute('code', 'Slash')
                    break
                case '\\': mainKey.setAttribute('code', 'Backslash')
                    break
                case ',': mainKey.setAttribute('code', 'Comma')
                    break
                case '.': mainKey.setAttribute('code', 'Period')
                    break
                case 'Tab': mainKey.setAttribute('code', 'Tab')
                    break
                case 'Caps Lock': mainKey.setAttribute('code', 'CapsLock')
                    break
                case 'Shift': mainKey.setAttribute('code', 'ShiftLeft')
                    break
                case 'RShift': mainKey.setAttribute('code', 'ShiftRight')
                    break
                case 'Ctrl': mainKey.setAttribute('code', 'ControlLeft')
                    break
                case 'RCtrl': mainKey.setAttribute('code', 'ControlRight')
                    break
                case 'Win': mainKey.setAttribute('code', 'MetaLeft')
                    break
                case 'Alt': mainKey.setAttribute('code', 'AltLeft')
                    break
                case 'RAlt': mainKey.setAttribute('code', 'AltRight')
                    break
                case 'Enter': mainKey.setAttribute('code', 'Enter')
                    break
                case 'Backspace': mainKey.setAttribute('code', 'Backspace')
                    break
                case 'Delete': mainKey.setAttribute('code', 'Delete')
                    break
                case 'Space': mainKey.setAttribute('code', 'Space')
                    break
                default:
                    // NOTHING
                }

                if (lang === 'Ru') {
                    switch (key) {
                    case '`': mainKey.innerHTML = 'Ё'
                        break
                    case 'Q': mainKey.innerHTML = 'Й'
                        break
                    case 'W': mainKey.innerHTML = 'Ц'
                        break
                    case 'E': mainKey.innerHTML = 'У'
                        break
                    case 'R': mainKey.innerHTML = 'К'
                        break
                    case 'T': mainKey.innerHTML = 'Е'
                        break
                    case 'Y': mainKey.innerHTML = 'Н'
                        break
                    case 'U': mainKey.innerHTML = 'Г'
                        break
                    case 'I': mainKey.innerHTML = 'Ш'
                        break
                    case 'O': mainKey.innerHTML = 'Щ'
                        break
                    case 'P': mainKey.innerHTML = 'З'
                        break
                    case '[': mainKey.innerHTML = 'Х'
                        break
                    case ']': mainKey.innerHTML = 'Ъ'
                        break
                    case 'A': mainKey.innerHTML = 'Ф'
                        break
                    case 'S': mainKey.innerHTML = 'Ы'
                        break
                    case 'D': mainKey.innerHTML = 'В'
                        break
                    case 'F': mainKey.innerHTML = 'А'
                        break
                    case 'G': mainKey.innerHTML = 'П'
                        break
                    case 'H': mainKey.innerHTML = 'Р'
                        break
                    case 'J': mainKey.innerHTML = 'О'
                        break
                    case 'K': mainKey.innerHTML = 'Л'
                        break
                    case 'L': mainKey.innerHTML = 'Д'
                        break
                    case ';': mainKey.innerHTML = 'Ж'
                        break
                    case "'": mainKey.innerHTML = 'Э'
                        break
                    case '\\': mainKey.innerHTML = '\\'
                        break
                    case 'Z': mainKey.innerHTML = 'Я'
                        break
                    case 'X': mainKey.innerHTML = 'Ч'
                        break
                    case 'C': mainKey.innerHTML = 'С'
                        break
                    case 'V': mainKey.innerHTML = 'М'
                        break
                    case 'B': mainKey.innerHTML = 'И'
                        break
                    case 'N': mainKey.innerHTML = 'Т'
                        break
                    case 'M': mainKey.innerHTML = 'Ь'
                        break
                    case ',': mainKey.innerHTML = 'Б'
                        break
                    case '.': mainKey.innerHTML = 'Ю'
                        break
                    case '/': mainKey.innerHTML = '.'
                        break
                    default:
                        // NOTHING
                    }
                } else {
                    // DO NOTHING
                }

                // mainKey.setAttribute('key', key.split(' ')
                button.append(mainKey)

                if (lang === 'Ru') {
                    Object.keys(ruShiftPairs).forEach((property) => {
                        if (mainKey.innerHTML === property) {
                            const shiftKey = document.createElement('div')
                            shiftKey.classList.add('keyboard__shift-key')
                            shiftKey.innerHTML = ruShiftPairs[property]
                            button.append(shiftKey)
                        }
                    })
                } else if (lang === 'En') {
                    Object.keys(shiftPairs).forEach((property) => {
                        if (mainKey.innerHTML === property) {
                            const shiftKey = document.createElement('div')
                            shiftKey.classList.add('keyboard__shift-key')
                            shiftKey.innerHTML = shiftPairs[property]
                            button.append(shiftKey)
                        }
                    })
                }
                row.append(button)
                keyboardKeys.append(row)
            }
        } else {
            // Create container with arrows
            for (let i = 0; i < keys[keyRow].length; i++) {
                const key = keys[keyRow][i]
                const button = document.createElement('div')
                button.classList.add('keyboard__key-container')
                const mainKey = document.createElement('div')
                mainKey.classList.add('keyboard__key')
                mainKey.innerHTML = key
                switch (mainKey.innerHTML) {
                case '↑': mainKey.setAttribute('code', 'ArrowUp')
                    break
                case '←': mainKey.setAttribute('code', 'ArrowLeft')
                    break
                case '↓': mainKey.setAttribute('code', 'ArrowDown')
                    break
                case '→': mainKey.setAttribute('code', 'ArrowRight')
                    break
                default:
                    // DO nothing
                }
                button.append(mainKey)
                arrowsWrapper.append(button)
                keyboardDiv.append(arrowsWrapper)
            }
            const h2 = document.createElement('h2')
            h2.textContent = `Language: ${language}`
            arrowsWrapper.append(h2)
        }
    })
}

fillKeyboard(language)

// Const focus on textarea
let keyboard = document.querySelector('.keyboard')
let keyboardContainer = document.querySelectorAll('.keyboard__key-container')

keyboard.addEventListener('click', () => {
    document.querySelector('.input-zone__textarea').setAttribute('autofocus', '1')
})

// Open-close keyboard

const keyboardIcon = document.querySelector('.input-zone__keyboard-icon')
const textarea = document.querySelector('.input-zone__textarea')

textarea.addEventListener('click', () => {
    keyboard.classList.remove('keyboard_hidden')
})

keyboardIcon.addEventListener('click', () => {
    keyboard.classList.toggle('keyboard_hidden')
})

// Synchronize keyboard with virtual
let keyboardKey = document.querySelectorAll('.keyboard__key')

let isCapsLock = false
let isShift = false
let isCtrl = false
let isAlt = false

let counterLeft = 0
let counterRight = 0
let copied = ''

function convert(text) {
    const span = document.createElement('span')

    return text
        .replace(/&[#A-Za-z0-9]+;/gi, (entity) => {
            span.innerHTML = entity
            return span.innerText
        })
}

function saveLanguage() {
    localStorage.setItem('lang', language)
}

saveLanguage()

let listeners

const keyboardFunc = {
    active(e) {
        // console.log(e)
        keyboardKey.forEach((key) => {
            const keyAttribute = key.getAttribute('code')
            if (e.code === 'CapsLock' && keyAttribute === 'CapsLock') {
                key.parentElement.classList.toggle('keyboard__key-container_activate')
                key.parentElement.classList.contains('keyboard__key-container_activate') ? isCapsLock = true : isCapsLock = false
            } else if (keyAttribute === e.code) {
                key.parentElement.classList.add('keyboard__key-container_activate')
            }
        })
    },
    remove(e) {
        keyboardKey.forEach((key) => {
            const keyAttribute = key.getAttribute('code')
            if (keyAttribute === e.code && keyAttribute !== 'CapsLock') {
                key.parentElement.classList.remove('keyboard__key-container_activate')
            }
        })
    },
    activeMouse() {
        const keyAttribute = this.querySelector('.keyboard__key').getAttribute('code')
        if (keyAttribute === 'CapsLock') {
            this.classList.toggle('keyboard__key-container_activate')
            this.classList.contains('keyboard__key-container_activate') ? isCapsLock = true : isCapsLock = false
        } else if (keyAttribute) {
            this.classList.add('keyboard__key-container_activate')
        }
    },
    removeMouse() {
        const keyAttribute = this.querySelector('.keyboard__key').getAttribute('code')
        if (keyAttribute && keyAttribute !== 'CapsLock') {
            this.classList.remove('keyboard__key-container_activate')
        }
    },
    shiftDown(e) {
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            isShift = true
        }
    },
    shiftUp(e) {
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            isShift = false
        }
    },
    shiftDownMouse() {
        if (this.classList.contains('keyboard__key_shift')) {
            isShift = true
        }
    },
    shiftUpMouse() {
        if (this.classList.contains('keyboard__key_shift')) {
            isShift = false
        }
    },
    ctrlDown(e) {
        if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
            isCtrl = true
        }
    },
    ctrlUp(e) {
        if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
            isCtrl = false
        }
    },
    ctrlDownMouse() {
        if (this.classList.contains('keyboard__key_ctrl')) {
            isCtrl = true
        }
    },
    ctrlUpMouse() {
        if (this.classList.contains('keyboard__key_ctrl')) {
            isCtrl = false
        }
    },
    altDown(e) {
        if (e.code === 'AltLeft' || e.code === 'AltRight') {
            isAlt = true
        }
    },
    altUp(e) {
        if (e.code === 'AltLeft' || e.code === 'AltRight') {
            isAlt = false
        }
    },
    altDownMouse() {
        if (this.classList.contains('keyboard__key_alt')) {
            isAlt = true
        }
    },
    altUpMouse() {
        if (this.classList.contains('keyboard__key_alt')) {
            isAlt = false
        }
    },

    keyboardWriting(e) {
        keyboardKey.forEach((key) => {
            const keyAttribute = key.getAttribute('code')
            if (e.code === keyAttribute) {
                let start = textarea.selectionStart
                let end = textarea.selectionEnd

                const textareaWidth = textarea.clientWidth
                const symbolWidth = 11.5
                const avgWidth = Math.ceil(textareaWidth / symbolWidth)

                switch (e.code) {
                case 'Space':
                    textarea.value = `${textarea.value.slice(0, start)} ${textarea.value.slice(end, textarea.value.length * 3)}`
                    start += 1
                    end += 1
                    // done
                    break
                case 'ShiftLeft':
                    break
                case 'ShiftRight':
                    break
                case 'AltLeft':
                    break
                case 'AltRight':
                    break
                case 'MetaLeft':
                    break
                case 'Tab': textarea.value = `${textarea.value.slice(0, start)}    ${textarea.value.slice(end, textarea.value.length * 3)}`
                    start += 4
                    end += 4 // done;
                    break
                case 'ArrowUp':
                    if (isShift) {
                        start -= avgWidth
                        counterLeft += end - start
                    } else {
                        start -= avgWidth
                        if (start < 0) start = 0
                        end = start
                    }
                    break
                case 'ArrowLeft':
                    if (isShift) {
                        if (counterRight) {
                            end -= 1
                            counterRight -= 1
                        } else if (start) {
                            start -= 1
                            counterLeft -= 1
                        } else {
                            start = 0
                        }
                    } else if (start) {
                        start -= 1
                        end = start
                        counterRight = 0
                        counterLeft = 0
                    } else {
                        start = 0
                        end = start
                        counterRight = 0
                        counterLeft = 0
                    }
                    break
                case 'ArrowDown':
                    if (isShift) {
                        end += avgWidth
                        counterRight += end - start
                    } else {
                        start += avgWidth
                        if (start < 0) start = 0
                        end = start
                    }
                    break
                case 'ArrowRight':
                    if (isShift) {
                        if (counterLeft) {
                            start += 1
                            counterLeft += 1
                        } else {
                            end += 1
                            counterRight += 1
                        }
                    } else {
                        end += 1
                        start = end
                        counterRight = 0
                        counterLeft = 0
                    }
                    break
                case 'Enter': textarea.value = `${textarea.value.slice(0, start)}\n${textarea.value.slice(end, textarea.value.length * 3)}`
                    start += 1
                    end = start
                    // start +=
                    break
                case 'ControlLeft':
                    break
                case 'ControlRight':
                    break
                case 'CapsLock':
                    break
                case 'Delete':
                    if (start === end) {
                        textarea.value = textarea.value.slice(0, start)
                            + textarea.value.slice(end + 1, textarea.value.length * 3)
                    } else {
                        textarea.value = textarea.value.slice(0, start)
                            + textarea.value.slice(end, textarea.value.length * 3)
                    }
                    end = start
                    break
                case 'Backspace':
                    if (start === end) {
                        textarea.value = textarea.value.slice(0, start - 1)
                            + textarea.value.slice(end, textarea.value.length * 3)
                    } else {
                        textarea.value = textarea.value.slice(0, start)
                            + textarea.value.slice(end, textarea.value.length * 3)
                    }
                    start -= 1
                    end = start
                    break
                default:
                    if (isCapsLock) {
                        if (isCtrl) {
                            if (keyAttribute === 'KeyA') {
                                // DO NOTHING
                            } if (keyAttribute === 'KeyC') {
                                document.execCommand('copy')
                                copied = textarea.value.slice(start, end)
                            } else if (keyAttribute === 'KeyV') {
                                textarea.value = textarea.value.slice(0, start)
                                    + copied + textarea.value.slice(end, textarea.value.length * 3)
                            }
                        } else if (!isShift) {
                            textarea.value = textarea.value.slice(0, start)
                                + key.innerHTML.toUpperCase()
                                + textarea.value.slice(end, textarea.value.length * 3)
                        } else if (isShift) {
                            key.parentElement.querySelector('.keyboard__shift-key') ? textarea.value = textarea.value.slice(0, start)
                                + convert(key.parentElement.querySelector('.keyboard__shift-key').innerHTML)
                                + textarea.value.slice(end, textarea.value.length * 3)
                                : textarea.value = textarea.value.slice(0, start)
                                + key.innerHTML.toLowerCase()
                                + textarea.value.slice(end, textarea.value.length * 3)
                        }
                    } else if (isShift) {
                        if (isCtrl) {
                            // DO NOTHING
                        }
                        key.parentElement.querySelector('.keyboard__shift-key') ? textarea.value = textarea.value.slice(0, start)
                                + convert(key.parentElement.querySelector('.keyboard__shift-key').innerHTML)
                                + textarea.value.slice(end, textarea.value.length * 3)
                            : textarea.value = textarea.value.slice(0, start)
                                + key.innerHTML.toUpperCase()
                                + textarea.value.slice(end, textarea.value.length * 3)
                    } else if (isCtrl) {
                        if (keyAttribute === 'KeyA') {
                            // DO NOTHING
                        } if (keyAttribute === 'KeyC') {
                            document.execCommand('copy')
                            copied = textarea.value.slice(start, end)
                        } else if (keyAttribute === 'KeyV') {
                            textarea.value = textarea.value.slice(0, start) + copied
                                + textarea.value.slice(end, textarea.value.length * 3)
                        }
                    } else {
                        textarea.value = textarea.value.slice(0, start)
                            + key.innerHTML.toLowerCase()
                            + textarea.value.slice(end, textarea.value.length * 3)
                    }

                    if (isCtrl) {
                        if (keyAttribute === 'KeyA') {
                            start = 0
                            end = textarea.value.length
                        } else if (keyAttribute === 'KeyV') {
                            start += copied.length
                            end = start
                        }
                    } else {
                        start += 1
                        end = start
                    }
                }
                textarea.focus()
                textarea.selectionStart = start
                textarea.selectionEnd = end
            }
        })
    },
    handleWriting(e) {
        let start = textarea.selectionStart
        let end = textarea.selectionEnd

        const textareaWidth = textarea.clientWidth
        const symbolWidth = 11.5
        const avgWidth = Math.ceil(textareaWidth / symbolWidth)

        const keyAttribute = this.querySelector('.keyboard__key').getAttribute('code')
        const key = this.querySelector('.keyboard__key')

        switch (keyAttribute || e.code) {
        case 'Space':
            textarea.value = `${textarea.value.slice(0, start)} ${textarea.value.slice(end, textarea.value.length * 3)}`
            start += 1
            end += 1
            // done
            break
        case 'ShiftLeft':
            break
        case 'ShiftRight':
            break
        case 'AltLeft':
            break
        case 'AltRight':
            break
        case 'MetaLeft':
            break
        case 'Tab': textarea.value = `${textarea.value.slice(0, start)}    ${textarea.value.slice(end, textarea.value.length * 3)}`
            start += 4
            end += 4 // done;
            break
        case 'ArrowUp':
            if (isShift) {
                start -= avgWidth
                counterLeft += end - start
            } else {
                start -= avgWidth
                if (start < 0) start = 0
                end = start
            }
            break
        case 'ArrowLeft':
            if (isShift) {
                if (counterRight) {
                    end -= 1
                    counterRight -= 1
                } else if (start) {
                    start -= 1
                    counterLeft -= 1
                } else {
                    start = 0
                }
            } else if (start) {
                start -= 1
                end = start
                counterRight = 0
                counterLeft = 0
            } else {
                start = 0
                end = start
                counterRight = 0
                counterLeft = 0
            }
            break
        case 'ArrowDown':
            if (isShift) {
                end += avgWidth
                counterRight += end - start
            } else {
                start += avgWidth
                if (start < 0) start = 0
                end = start
            }
            break
        case 'ArrowRight':
            if (isShift) {
                if (counterLeft) {
                    start += 1
                    counterLeft += 1
                } else {
                    end += 1
                    counterRight += 1
                }
            } else {
                end += 1
                start = end
                counterRight = 0
                counterLeft = 0
            }
            break
        case 'Enter': textarea.value = `${textarea.value.slice(0, start)}\n${textarea.value.slice(end, textarea.value.length * 3)}`
            start += 1
            end = start
            // start +=
            break
        case 'ControlLeft':
            break
        case 'ControlRight':
            break
        case 'CapsLock':
            break
        case 'Delete':
            if (start === end) {
                textarea.value = textarea.value.slice(0, start)
                    + textarea.value.slice(end + 1, textarea.value.length * 3)
            } else {
                textarea.value = textarea.value.slice(0, start)
                    + textarea.value.slice(end, textarea.value.length * 3)
            }
            end = start
            break
        case 'Backspace':
            if (start === end) {
                textarea.value = textarea.value.slice(0, start - 1)
                    + textarea.value.slice(end, textarea.value.length * 3)
            } else {
                textarea.value = textarea.value.slice(0, start)
                    + textarea.value.slice(end, textarea.value.length * 3)
            }
            start -= 1
            end = start
            break
        default:
            if (isCapsLock) {
                if (isCtrl) {
                    if (keyAttribute === 'KeyA') {
                        // DO NOTHING
                    } if (keyAttribute === 'KeyC') {
                        document.execCommand('copy')
                        copied = textarea.value.slice(start, end)
                    } else if (keyAttribute === 'KeyV') {
                        textarea.value = textarea.value.slice(0, start) + copied
                            + textarea.value.slice(end, textarea.value.length * 3)
                    }
                } else if (!isShift) {
                    textarea.value = textarea.value.slice(0, start)
                        + key.innerHTML.toUpperCase()
                        + textarea.value.slice(end, textarea.value.length * 3)
                } else if (isShift) {
                    key.parentElement.querySelector('.keyboard__shift-key') ? textarea.value = textarea.value.slice(0, start)
                        + convert(key.parentElement.querySelector('.keyboard__shift-key').innerHTML)
                        + textarea.value.slice(end, textarea.value.length * 3) : textarea
                        .value = textarea.value.slice(0, start) + key.innerHTML
                            .toLowerCase() + textarea.value.slice(end, textarea.value.length * 3)
                }
            } else if (isShift) {
                if (isCtrl) {
                    // DO NOTHING
                }
                key.parentElement.querySelector('.keyboard__shift-key') ? textarea.value = textarea.value.slice(0, start)
                    + convert(key.parentElement.querySelector('.keyboard__shift-key').innerHTML)
                    + textarea.value.slice(end, textarea.value.length * 3) : textarea
                    .value = textarea.value.slice(0, start) + key.innerHTML
                        .toUpperCase() + textarea.value.slice(end, textarea.value.length * 3)
            } else if (isCtrl) {
                if (keyAttribute === 'KeyA') {
                    // DO NOTHING
                } if (keyAttribute === 'KeyC') {
                    document.execCommand('copy')
                    copied = textarea.value.slice(start, end)
                } else if (keyAttribute === 'KeyV') {
                    textarea.value = textarea.value.slice(0, start) + copied
                        + textarea.value.slice(end, textarea.value.length * 3)
                }
            } else {
                textarea.value = textarea.value.slice(0, start)
                    + key.innerHTML.toLowerCase()
                    + textarea.value.slice(end, textarea.value.length * 3)
            }

            if (isCtrl) {
                if (keyAttribute === 'KeyA') {
                    start = 0
                    end = textarea.value.length
                } else if (keyAttribute === 'KeyV') {
                    start += copied.length
                    end = start
                }
            } else {
                start += 1
                end = start
            }
        }
        textarea.focus()
        textarea.selectionStart = start
        textarea.selectionEnd = end
    },
    changeLanguage(e) {
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            if (isAlt) {
                if (language === 'Ru') {
                    language = 'En'
                } else {
                    language = 'Ru'
                }
                document.querySelector('.keyboard').remove()
                fillKeyboard(language)
                document.querySelector('.keyboard').classList.remove('keyboard_hidden')
                keyboard = document.querySelector('.keyboard')
                keyboardContainer = document.querySelectorAll('.keyboard__key-container')
                keyboardKey = document.querySelectorAll('.keyboard__key')
                listeners()
                localStorage.setItem('language', language)
            }
        }
    },
    changeLanguageMouse() {
        if (this.classList.contains('keyboard__key_shift')) {
            if (isAlt) {
                if (language === 'Ru') {
                    language = 'En'
                } else {
                    language = 'Ru'
                }
                document.querySelector('.keyboard').remove()
                fillKeyboard(language)
                document.querySelector('.keyboard').classList.remove('keyboard_hidden')
                keyboard = document.querySelector('.keyboard')
                keyboardContainer = document.querySelectorAll('.keyboard__key-container')
                keyboardKey = document.querySelectorAll('.keyboard__key')
                listeners()
                saveLanguage()
            }
        }
    },
}

window.addEventListener('beforeunload', saveLanguage)
document.addEventListener('keydown', keyboardFunc.active)
document.addEventListener('keyup', keyboardFunc.remove)
document.addEventListener('keydown', keyboardFunc.shiftDown)
document.addEventListener('keyup', keyboardFunc.shiftUp)
document.addEventListener('keydown', keyboardFunc.ctrlDown)
document.addEventListener('keyup', keyboardFunc.ctrlUp)
document.addEventListener('keydown', keyboardFunc.keyboardWriting)
document.addEventListener('keydown', keyboardFunc.altDown)
document.addEventListener('keyup', keyboardFunc.altUp)
document.addEventListener('keyup', keyboardFunc.changeLanguage)

listeners = function () {
    keyboardContainer.forEach((key) => {
        // console.log(key)
        key.addEventListener('mousedown', keyboardFunc.activeMouse)
        key.addEventListener('mouseup', keyboardFunc.removeMouse)
        key.addEventListener('mouseleave', keyboardFunc.removeMouse)
        key.addEventListener('click', keyboardFunc.handleWriting)
        key.addEventListener('mousedown', keyboardFunc.shiftDownMouse)
        key.addEventListener('mouseup', keyboardFunc.shiftUpMouse)
        key.addEventListener('mousedown', keyboardFunc.ctrlDownMouse)
        key.addEventListener('mousedown', keyboardFunc.ctrlUpMouse)
        key.addEventListener('mousedown', keyboardFunc.altDownMouse)
        key.addEventListener('mouseup', keyboardFunc.altUpMouse)
        key.addEventListener('mouseup', keyboardFunc.changeLanguageMouse)
    })
}
listeners()

// Unbind current keys
const codes = []

for (let i = 0; i < 500; i++) { // create 500 indexes
    codes.push(i)
}

document.addEventListener('keydown', (event) => { // unbinding keys with code from 0 to 500
    if (event.keyCode in codes) {
        event.preventDefault()
    }
})
