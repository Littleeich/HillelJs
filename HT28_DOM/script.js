const lastLi = document.querySelectorAll('li>ul>li:last-child')

for (let li of lastLi) {
    li.className = 'last'
}

function setFirstItemClassName(level) {
    const selector = isNaN(+level) ? '' : generateLevelSelector(+level) + ':first-child'
    const firstChilds = document.querySelectorAll(selector)

    setTimeout(()=>{
        for (let child of firstChilds) {
            child.className = 'first'
        }
    }, 2000)
}

function generateLevelSelector(level) {
    if (level < 1)
        return 'null'

    let selector = '.root > li'
    for (let i = 1; i < level; i++) {
        selector += ' > ul > li'
    }
    return selector
}

setFirstItemClassName(prompt('Which level of child do you wanna use?'))
