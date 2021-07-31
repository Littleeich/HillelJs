let block = document.querySelector('.block')
const STEP = 10
const JUMP = 30

const keyBoardEvents = {
    ArrowRight: () => {
        block.style.left = block.style.left ? moveElement(block, 'left', STEP) : `${window.innerWidth / 2 - block.clientWidth/2 + STEP}px`
    },
    ArrowLeft: () => {
        block.style.left = block.style.left ? moveElement(block, 'left', -STEP) : `${window.innerWidth / 2 - block.clientWidth/2 - STEP}px`
    },
    ArrowUp: () => {
        block.style.top = block.style.top ? moveElement(block, 'top', -STEP) : `${window.innerHeight / 2 - block.clientHeight/2 - STEP}px`
    },
    ArrowDown: () => {
        block.style.top = block.style.top ? moveElement(block, 'top', STEP) : `${window.innerHeight / 2 - block.clientHeight/2 + STEP}px`
    },
    Space: () => {
        block.classList.add('space')
        block.style.top = block.style.top ? moveElement(block, 'top', -JUMP) : `${window.innerHeight / 2 - block.clientHeight/2 - JUMP}px`
        setTimeout( () => {
            block.classList.remove('space')
            block.style.top = moveElement(block, 'top', JUMP)
        }, 300)
    },
    ControlLeft: () => {
        ctrlElement(block)
    },
    ControlRight: () => {
        ctrlElement(block)
    }
}

document.onkeydown = e => {
    console.log(e.code)
    keyBoardEvents[e.code] && keyBoardEvents[e.code]()
}

function ctrlElement(elem) {
    elem.classList.add('ctrl')
    // elem.style.top = elem.style.top ? moveElement(elem, 'top', 40) : `${window.innerHeight / 2 - elem.clientHeight/2 + 40}px`
        setTimeout( () => {
            elem.classList.remove('ctrl')
            // elem.style.top = moveElement(elem, 'top', -40)
        }, 1000)
}

function moveElement(elem, direction, step) {
    console.dir(elem)
    const directionParam = direction === 'left' ? 'Width' : 'Height'
    const newSize = parseInt(elem.style[direction]) + step

    if (0 < newSize && newSize < window['inner' + directionParam] - block['client' + directionParam]) {
        return `${newSize}px`
    }
    else {
        block.innerHTML = '<p class=boom>Badooom</p>'
        setTimeout( () => {
            block.innerHTML = ''
        }, 2000)
        return `${parseInt(elem.style[direction]) - 2 * step}px`
    }
}