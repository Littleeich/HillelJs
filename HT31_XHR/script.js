function getChildren(file) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', file, false)
    xhr.send()
    return JSON.parse(xhr.response).children
}

function logChildren() {
    let childArr = getChildren('json/data.json').concat(getChildren('json/data2.json'))
    console.log(childArr)
}

logChildren()