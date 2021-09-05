const form = document.querySelector('#formJoke'),
    jokeContainer = document.querySelector('#jokeContainer'),
    categotiesCategory = document.querySelector('#categoriesCategory'),
    categoriesList = document.querySelector('#categoriesList'),
    jokeCategories = document.querySelectorAll('input[name="jokeType"]'),
    searchJoke = document.querySelector('#searchJoke')

const BASE_URL = 'https://api.chucknorris.io/jokes'

jokeCategories.forEach( input => {
    input.addEventListener('change', () => {
        input.id === 'categoriesCategory' ? categoriesList.classList.add('show') : categoriesList.classList.remove('show')

        let checkedCategory = categoriesList.querySelector(`input[name="categoryList"]:checked`),
            checkedCategoryIndex = checkedCategory.dataset.index

            if(checkedCategoryIndex !== 0) {
                checkedCategory.checked = false
                categoriesList.querySelector(`input[name="categoryList"][data-index="0"]`).checked = true
            }
    })
})

form.addEventListener(`submit`, e => {
    e.preventDefault()
    let type = form.querySelector(`input[name="jokeType"]:checked`).value

    if(type === 'random') {
        getJoke(`${BASE_URL}/random`)
    } else if(type === 'categories') {
        let cat = categoriesList.querySelector(`input[name="categoryList"]:checked`).value
        getJoke(`${BASE_URL}/random?category=${cat}`)
    } else if(type === 'search') {
        getJoke(`${BASE_URL}/search?query=${searchJoke.value}`)
    }
})

const getCategories = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `${BASE_URL}/categories`)
    xhr.send()

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let categories = JSON.parse(xhr.responseText)
            renderCatigories(categories)
        }
    })
}

const getJoke = url => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let joke = JSON.parse(xhr.responseText)
            console.log(joke)
            jokeContainer.innerHTML = ''
            if(joke.result) {
                joke.result.length ? joke.result.forEach( jokeEl => renderJoke(jokeEl, true)) : jokeContainer.innerHTML = ''
            } else {
                renderJoke(joke)
            }
        }
    })
}

const renderJoke = (jokeData, multiply) => {
    let render = `
    <div class="joke__block">
        <label for="jokeFav${jokeData.id}">
            Favourites
            <input type="checkbox" name="" id="jokeFav${jokeData.id}">
        </label>
        <img src="${jokeData.icon_url}" alt="${jokeData.id} Joke" width="30" height="30" loading="lazy">
        ${jokeData.categories && jokeData.categories.length  ? `<p>Category: ${jokeData.categories[0]}</p>` : ''}
        <a href="${jokeData.url}" target="_blank" class="joke__block--id">${jokeData.id}</a>
        <p class="joke__block--date">${jokeData.updated_at}</p>
        <p class="joke__block--text">${jokeData.value}</p>
    </div>
    `
    multiply? jokeContainer.innerHTML += render : jokeContainer.innerHTML = render
}

const renderCatigories = data => {
    let renderLI = data.map( (cat, index) => {
        return `
        <li>
            <label for="categoryList${cat}">
            ${cat}
                <input type="radio" value="${cat}" name="categoryList" id="categoryList${cat}" ${!index ? 'checked' : ''} data-index="${index}">
            </label>
        </li>
        `
    }).join('')
    categoriesList.innerHTML = renderLI
}

getCategories()